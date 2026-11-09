#!/usr/bin/env python3
"""Wersja do udostępnienia: statyczny katalog dist/ (bez serwera Pythona).

  python3 tools/build-dist.py            # buduje ../dist
  python3 tools/build-dist.py --out X    # inny katalog docelowy

Co robi:
- składa content/ w jeden plik bundle.json (jak serve.py), ale BEZ Sample Paper 1
  i bez listy problemów walidatora;
- kopiuje aplikację bez materiałów chronionych prawem autorskim (ISACA / Altkom):
  *.local.*, podrecznik/ilustracje/ (skany stron podręcznika), private/, sources/;
- pomija pliki robocze: archiwum treści, narzędzia, skrypty Pythona/Swift, briefy;
- przerywa, jeśli walidacja treści ma błędy albo w wyniku zostałby plik chroniony.
Wynik można wrzucić na dowolny hosting statyczny (GitHub Pages, Netlify, serwer WWW).
"""
import argparse
import fnmatch
import json
import re
import shutil
import sys
from pathlib import Path

APP = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(APP / "tools"))
import serve  # noqa: E402

# Ścieżki względem app/ (wzorce fnmatch). Katalog pasujący jest pomijany w całości.
POMIN = [
    "*.local.*", "*.local",                     # wyciągi z Sample Paper 1 i innych materiałów chronionych
    "podrecznik/ilustracje", "podrecznik/ilustracje/*",  # skany ilustracji/stron FW-PL (ISACA)
    "podrecznik/skrot", "podrecznik/kontekst",  # dane robocze generatora podręcznika
    "content/_archiwum", "content/_narzedzia",  # archiwum i narzędzia redakcyjne
    "tools", "*.py", "*.swift", "*.command", "*.sh",
    "*/BRIEF*.md", "podrecznik/FORMAT.md",       # dokumenty redakcyjne (uwaga: * w fnmatch obejmuje też „/”)
    "content/METODYKA.md", "content/SCHEMA.md", "content/FORMAT-KROTKI.md", "content/README*.md",
    "content/historia.md", "content/STANDARD-DYDAKTYCZNY.md", "content/_wzorce", "content/manifest.json",
    # Treść jest już w bundle.json – osobne pliki byłyby duplikatami (lekcje .md zostają: słownik je czyta).
    "content/terms", "content/questions", "content/modules", "content/sciagi", "content/*.json",
    # Widoki dawnego kursu – podręcznik je zastąpił, main.js ich nie importuje.
    "js/maptree.js", "js/views/day.js", "js/views/home.js", "js/views/lesson.js", "js/views/map.js",
    "js/views/mentor.js", "js/views/module.js", "js/views/print.js", "js/views/quick.js",
    ".DS_Store", "*/.DS_Store", ".gitignore", "*/.gitignore", "__pycache__", "*/__pycache__",
]
# Tych nie wolno nigdy wydać – kontrola końcowa na gotowym katalogu.
ZAKAZANE = ["*.local.*", "*sample-paper*", "*sp1-mapa*", "*ilustracje/*", "*.pdf", "*.jpg", "*.jpeg", "*.png"]


def pominac(relpath: str) -> bool:
    return any(fnmatch.fnmatch(relpath, w) for w in POMIN)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default=str(APP.parent / "dist"))
    a = ap.parse_args()
    out = Path(a.out).resolve()
    if out == APP or APP in out.parents:
        sys.exit("Katalog docelowy nie może leżeć w app/.")

    b = serve.build()
    bledy = [p for p in b["problemy"] if p["poziom"] == "blad"]
    if bledy:
        for p in bledy:
            print(f"[BŁĄD] {p['gdzie']}: {p['opis']}")
        sys.exit(f"Przerwano: {len(bledy)} błędów walidacji treści.")
    b["samplePaper"] = None
    b["problemy"] = []

    if out.exists():
        shutil.rmtree(out)
    out.mkdir(parents=True)
    n = 0
    for src in sorted(APP.rglob("*")):
        r = src.relative_to(APP).as_posix()
        if any(pominac("/".join(r.split("/")[: i + 1])) for i in range(r.count("/") + 1)):
            continue
        if src.is_dir():
            continue
        dst = out / r
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dst)
        n += 1
    (out / "bundle.json").write_text(json.dumps(b, ensure_ascii=False), encoding="utf-8")

    # Strony podręcznika wczytują lokalne pliki chronione (skany ilustracji, pytania z arkusza próbnego).
    # W wersji do udostępnienia ich nie ma – usuwamy odwołania, żeby nie było błędów 404 (silnik działa bez nich).
    LOKALNE = re.compile(r'\s*<script src="(?:ilustracje/ilu\.js|[^"]*\.local\.js)"></script>')
    for f in (out / "podrecznik").glob("*.html"):
        t = f.read_text(encoding="utf-8")
        t2 = LOKALNE.sub("", t)
        if t2 != t:
            f.write_text(t2, encoding="utf-8")
    zle_odw = [f.name for f in out.rglob("*.html") if re.search(r'(ilustracje/|\.local\.)', f.read_text(encoding="utf-8"))
               and f.parent.name == "podrecznik" and LOKALNE.search(f.read_text(encoding="utf-8"))]
    if zle_odw:
        sys.exit("Przerwano – zostały odwołania do plików lokalnych: " + ", ".join(zle_odw))

    zle = [p.relative_to(out).as_posix() for p in out.rglob("*")
           if any(fnmatch.fnmatch(p.relative_to(out).as_posix(), w) for w in ZAKAZANE)]
    if zle:
        shutil.rmtree(out)
        sys.exit("Przerwano – w wyniku znalazły się pliki chronione: " + ", ".join(zle))
    size = sum(p.stat().st_size for p in out.rglob("*") if p.is_file())
    print(f"Gotowe: {out}  ({n + 1} plików, {size / 1e6:.1f} MB; bez Sample Paper 1 i skanów podręcznika)")


if __name__ == "__main__":
    main()
