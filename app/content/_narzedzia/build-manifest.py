#!/usr/bin/env python3
"""Buduje content/manifest.json – jedyny indeks plików treści (serwer statyczny nie listuje katalogów).
Użycie (z app/): python3 content/_narzedzia/build-manifest.py content"""
import glob, json, os, re, sys
c = sys.argv[1] if len(sys.argv) > 1 else "content"
rel = lambda p: os.path.relpath(p, c).replace(os.sep, "/")
def lesson_key(p):
    fm = open(p, encoding="utf-8").read().split("\n---\n", 1)[0]
    m = re.search(r'^lekcja:\s*"?([\d.]+)"?', fm, re.M)
    return [int(x) for x in m.group(1).split(".")] if m else [999]
lessons = sorted(glob.glob(os.path.join(c, "lessons", "**", "*.md"), recursive=True), key=lesson_key)
m = {
    "wersja": 1,
    "syllabus": "syllabus.json",
    "pulapki": "terminology-traps.json",
    "mapa": "mapa-cobit.json",
    "metodyka": "METODYKA.md",
    "lekcje": [rel(p) for p in lessons],
    "hasla": sorted(rel(p) for p in glob.glob(os.path.join(c, "terms", "*.json"))),
    "pytania": sorted(rel(p) for p in glob.glob(os.path.join(c, "questions", "*.json"))),
    "lokalne": {"samplePaper1": "sample-paper-1.local.json"},
}
json.dump(m, open(os.path.join(c, "manifest.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=2)
print(f"manifest: {len(m['lekcje'])} lekcji, {len(m['hasla'])} haseł, {len(m['pytania'])} plików pytań")
