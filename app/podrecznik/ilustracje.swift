// Renderuje strony podręcznika COBIT 5 (PDF) i wycina ilustracje – do nauki lokalnej (prawa autorskie ISACA).
// Użycie:  swiftc -O ilustracje.swift -o /tmp/ilu && /tmp/ilu <framework-pl.pdf> <katalog-wyjściowy>
// Wynik:   strona-NNN.jpg (cała strona), il-N-K.jpg (ilustracja N, część K), spis.json
import AppKit
import Foundation
import PDFKit

let args = CommandLine.arguments
guard args.count >= 3, let doc = PDFDocument(url: URL(fileURLWithPath: args[1])) else {
  print("użycie: ilu <pdf> <katalog>"); exit(1)
}
let out = URL(fileURLWithPath: args[2], isDirectory: true)
try? FileManager.default.createDirectory(at: out, withIntermediateDirectories: true)
let scale: CGFloat = 2.0

func jpeg(_ cg: CGImage, _ name: String) {
  let rep = NSBitmapImageRep(cgImage: cg)
  let data = rep.representation(using: .jpeg, properties: [.compressionFactor: 0.82])!
  try! data.write(to: out.appendingPathComponent(name))
}

// Obcina białe pasy pod ilustracją (wiersze bez ciemnych pikseli).
func trimBottom(_ cg: CGImage) -> CGImage {
  let w = cg.width, h = cg.height
  guard let ctx = CGContext(data: nil, width: w, height: h, bitsPerComponent: 8, bytesPerRow: w * 4,
                            space: CGColorSpaceCreateDeviceRGB(), bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue) else { return cg }
  ctx.draw(cg, in: CGRect(x: 0, y: 0, width: w, height: h))
  guard let data = ctx.data else { return cg }
  let px = data.bindMemory(to: UInt8.self, capacity: w * h * 4)
  var last = 0
  for row in 0..<h {  // wiersz 0 w buforze = góra obrazu
    var dark = 0
    var x = 0
    while x < w {
      let o = (row * w + x) * 4
      if Int(px[o]) + Int(px[o + 1]) + Int(px[o + 2]) < 600 { dark += 1 }
      x += 3
    }
    if dark > 2 {
      if last > 0 && row - last > 110 { break }  // duża przerwa = koniec ilustracji (dalej stopka albo tekst)
      last = row
    }
  }
  let keep = min(h, last + 16)
  return cg.cropping(to: CGRect(x: 0, y: 0, width: w, height: max(40, keep))) ?? cg
}

let rx = try! NSRegularExpression(pattern: "Ilustracja (\\d+) — ([^\\n]*)")
var spis: [[String: Any]] = []
var parts: [Int: Int] = [:]

for i in 0..<doc.pageCount {
  let page = doc.page(at: i)!
  let nr = i + 1
  let box = page.bounds(for: .mediaBox)
  let rot = page.rotation
  let w = (rot % 180 == 0 ? box.width : box.height) * scale
  let h = (rot % 180 == 0 ? box.height : box.width) * scale
  let img = page.thumbnail(of: NSSize(width: w, height: h), for: .mediaBox)
  var rect = CGRect(origin: .zero, size: img.size)
  guard let cg = img.cgImage(forProposedRect: &rect, context: nil, hints: nil) else { continue }
  jpeg(cg, String(format: "strona-%03d.jpg", nr))

  let text = page.string ?? ""
  let ns = text as NSString
  let matches = rx.matches(in: text, range: NSRange(location: 0, length: ns.length))
  // podpisy na stronie: (numer, tytuł, górna krawędź w punktach PDF, liczonych od góry strony)
  var caps: [(Int, String, CGFloat)] = []
  for m in matches {
    let n = Int(ns.substring(with: m.range(at: 1)))!
    let title = ns.substring(with: m.range(at: 2)).trimmingCharacters(in: .whitespaces)
    guard let sel = page.selection(for: m.range(at: 0)) else { continue }
    let b = sel.bounds(for: page)
    caps.append((n, title, box.maxY - b.maxY))
  }
  if nr < 11 { caps = [] }  // spis treści i spis ilustracji
  caps.sort { $0.2 < $1.2 }
  for (k, c) in caps.enumerated() {
    let part = (parts[c.0] ?? 0) + 1
    parts[c.0] = part
    let file = "il-\(c.0)-\(part).jpg"
    if rot % 180 != 0 {
      jpeg(cg, file)  // strona obrócona (duże tabele) – cała strona
    } else {
      let top = max(0, c.2 - 6) * scale
      let bottomPt = k + 1 < caps.count ? caps[k + 1].2 - 4 : box.height - 34
      let bottom = min(CGFloat(cg.height), bottomPt * scale)
      let crop = CGRect(x: 0, y: top, width: CGFloat(cg.width), height: max(40, bottom - top))
      if let piece = cg.cropping(to: crop) { jpeg(trimBottom(piece), file) }
    }
    spis.append(["nr": c.0, "czesc": part, "strona": nr, "tytul": c.1, "plik": file])
  }
}
let json = try! JSONSerialization.data(withJSONObject: spis, options: [.prettyPrinted, .sortedKeys])
try! json.write(to: out.appendingPathComponent("spis.json"))
print("stron: \(doc.pageCount), wycinków ilustracji: \(spis.count), ilustracji: \(parts.count)")
