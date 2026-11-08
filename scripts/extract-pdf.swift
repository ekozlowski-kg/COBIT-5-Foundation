// Wyciąga tekst z PDF strona po stronie (PDFKit, wbudowany w macOS – bez poppler).
// Użycie: swift scripts/extract-pdf.swift <plik.pdf> <katalog-wyjściowy>
// Wynik: <katalog>/page-001.txt, page-002.txt, ...
import Foundation
import PDFKit

let args = CommandLine.arguments
guard args.count == 3 else {
    FileHandle.standardError.write("Użycie: extract-pdf.swift <plik.pdf> <katalog>\n".data(using: .utf8)!)
    exit(2)
}
guard let doc = PDFDocument(url: URL(fileURLWithPath: args[1])) else {
    FileHandle.standardError.write("Nie można otworzyć: \(args[1])\n".data(using: .utf8)!)
    exit(1)
}
let out = URL(fileURLWithPath: args[2], isDirectory: true)
try FileManager.default.createDirectory(at: out, withIntermediateDirectories: true)
for i in 0..<doc.pageCount {
    let text = doc.page(at: i)?.string ?? ""
    let name = String(format: "page-%03d.txt", i + 1)
    try text.write(to: out.appendingPathComponent(name), atomically: true, encoding: .utf8)
}
print("\(args[1]): \(doc.pageCount) stron → \(args[2])")
