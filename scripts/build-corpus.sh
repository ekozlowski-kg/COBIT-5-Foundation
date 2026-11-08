#!/bin/zsh
# Odtwarza korpus tekstowy źródeł (strona po stronie) z PDF-ów.
# PDF-y nie są w repozytorium (prawa autorskie ISACA) – umieść je w:
#   sources/pdf/framework-pl.pdf, sources/pdf/altkom-roznice.pdf, private/sample-paper-1.pdf
set -e
cd "$(dirname "$0")/.."
swift scripts/extract-pdf.swift sources/pdf/framework-pl.pdf sources/text/framework-pl
swift scripts/extract-pdf.swift sources/pdf/altkom-roznice.pdf sources/text/altkom
if [[ -f private/sample-paper-1.pdf ]]; then
  swift scripts/extract-pdf.swift private/sample-paper-1.pdf private/text/sample-paper-1
fi
