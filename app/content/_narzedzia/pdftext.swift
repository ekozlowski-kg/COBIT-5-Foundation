import PDFKit
let a = CommandLine.arguments
guard let d = PDFDocument(url: URL(fileURLWithPath: a[1])) else { print("CANNOT OPEN"); exit(1) }
let s = Int(a[2])!, e = min(Int(a[3])!, d.pageCount)
for i in (s-1)..<e { print("=== PAGE \(i+1)"); print(d.page(at: i)?.string ?? "") }
