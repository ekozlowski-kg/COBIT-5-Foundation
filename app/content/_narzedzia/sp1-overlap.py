#!/usr/bin/env python3
"""Kontrola przecieku Sample Paper 1 do pytań kursu (METODYKA §7).

BŁĄD, gdy dla pary (pytanie kursu, pytanie SP1):
  (opcje porównywane w pytaniach z polem `opcje`; treść – we wszystkich)
  - podobieństwo treści (difflib, tekst znormalizowany) ≥ 0.75, albo
  - ≥ 2 opcje identyczne po normalizacji.
UWAGA (informacyjnie), gdy podobieństwo treści ≥ 0.60 lub 1 identyczna opcja.
Skanuje pytania z questions/*.json oraz bloki :::rozwiazany w lessons/*/*.md.
Jeśli content/sample-paper-1.local.json nie istnieje – kontrola jest pomijana (kod 0).

Użycie (z app/): python3 content/_narzedzia/sp1-overlap.py content
"""
import difflib, glob, json, os, re, sys, unicodedata

C = sys.argv[1] if len(sys.argv) > 1 else "content"
SP = os.path.join(C, "sample-paper-1.local.json")
if not os.path.exists(SP):
    print("sp1-overlap: brak sample-paper-1.local.json – pominięto."); sys.exit(0)

def norm(s):
    s = unicodedata.normalize("NFC", s or "").lower()
    s = re.sub(r"\[\[[^\]|]*\|([^\]]*)\]\]", r"\1", s)      # [[id|tekst]] → tekst
    s = re.sub(r"\[\[([^\]]*)\]\]", r"\1", s)
    s = re.sub(r"[*_`„”\"'«»“’()\[\].,:;!?–—\-/]", " ", s)
    return re.sub(r"\s+", " ", s).strip()

sp = json.load(open(SP, encoding="utf-8"))
sp = sp["pytania"] if isinstance(sp, dict) else sp
SPQ = [(q.get("numer"), norm(q["tresc"]), {norm(o["tekst"]) for o in q["opcje"]}) for q in sp]

errors, warns = [], []
for f in sorted(glob.glob(os.path.join(C, "questions", "*.json"))):
    for q in json.load(open(f, encoding="utf-8"))["pytania"]:
        t = norm((q.get("scenariusz") or "") + " " + q.get("tresc", "")) if q.get("scenariusz") else norm(q.get("tresc", ""))
        t_only = norm(q.get("tresc", ""))
        # opcje porównujemy tylko w pytaniach wyboru; listy kanoniczne (kolejność, dopasowanie,
        # klasyfikacja) z definicji powtarzają nazwy z podręcznika (np. 7 aktywatorów)
        opts = [o.get("tekst", "") for o in q.get("opcje", [])]
        opts = {norm(x) for x in opts if x}
        for nr, st, so in SPQ:
            r = max(difflib.SequenceMatcher(None, t_only, st).ratio(), difflib.SequenceMatcher(None, t, st).ratio())
            same = len(opts & so)
            tag = f"{os.path.basename(f)}#{q['id']} ~ SP1 #{nr}: treść {r:.2f}, identyczne opcje {same}"
            if r >= 0.75 or same >= 2: errors.append(tag)
            elif r >= 0.60 or same == 1: warns.append(tag)
# Bloki :::rozwiazany w lekcjach (METODYKA §10.5): treść pytania + opcje „- A. …”
for f in sorted(glob.glob(os.path.join(C, "lessons", "*", "*.md"))):
    body = open(f, encoding="utf-8").read()
    for i, m in enumerate(re.finditer(r"^:::rozwiazany\s*\n(.*?)^:::\s*$", body, re.M | re.S), 1):
        head = m.group(1).split("\n+++", 1)[0]
        lines = head.strip().splitlines()
        opt_lines = [re.sub(r"^\s*-\s*[A-D][.)]\s*", "", l) for l in lines if re.match(r"^\s*-\s*[A-D][.)]", l)]
        t = norm(" ".join(l for l in lines if not re.match(r"^\s*-\s*[A-D][.)]", l)))
        opts = {norm(x) for x in opt_lines if x.strip()}
        for nr, st, so in SPQ:
            r = difflib.SequenceMatcher(None, t, st).ratio()
            same = len(opts & so)
            tag = f"{os.path.relpath(f, C)}#rozwiazany{i} ~ SP1 #{nr}: treść {r:.2f}, identyczne opcje {same}"
            if r >= 0.75 or same >= 2: errors.append(tag)
            elif r >= 0.60 or same == 1: warns.append(tag)

for w in warns: print("UWAGA ", w)
for e in errors: print("BŁĄD  ", e)
print(f"sp1-overlap: {len(errors)} błędów, {len(warns)} uwag")
sys.exit(1 if errors else 0)
