#!/usr/bin/env python3
"""Zamienia COBIT 5 Foundation Sample Paper 1 (PL) na content/sample-paper-1.local.json.

Plik wynikowy jest TYLKO do użytku lokalnego (© ISACA, „must not be reproduced”) i jest w .gitignore.

Użycie:
  swift content/_narzedzia/pdftext.swift "<Sample-Paper-1-Polish.pdf>" 1 44 > /tmp/sp1.txt
  python3 content/_narzedzia/extract-sample-paper.py /tmp/sp1.txt content/sample-paper-1.local.json
"""
import json, re, sys

src, out = sys.argv[1], sys.argv[2]
NOISE = re.compile(r"^(Egzamin COBIT 5 Foundation|© ISACA.*|This document must not be reproduced.*|Page \d+ of 44|To jest pusta strona|COBIT5 Foundation|Rationale – Sample Paper 1|January 2018)\s*$")
OBSZAR = {"PR": "PR", "EN": "EN", "IM": "IM", "PC": "PC"}

pages, cur = {}, None
for line in open(src, encoding="utf-8"):
    line = line.rstrip("\n")
    m = re.match(r"=== PAGE (\d+)", line)
    if m:
        cur = int(m.group(1)); pages[cur] = []; continue
    if cur is None or not line.strip() or NOISE.match(line.strip()):
        continue
    pages[cur].append(line.strip())

def lines(a, b):
    r = []
    for p in range(a, b + 1): r += [(p, l) for l in pages.get(p, [])]
    return r

# --- pytania (strony 3–19) ---
qs, q = [], None
for p, l in lines(3, 19):
    m = re.match(r"^(\d{1,2}) (.+)$", l)
    if m and int(m.group(1)) == (len(qs) + 1):
        q = {"numer": int(m.group(1)), "strona": p, "tekst": [m.group(2)], "items": []}
        qs.append(q); continue
    if q is None: continue
    m = re.match(r"^([1-4])\.\s*(.*)$", l)
    if m:
        q["items"].append([int(m.group(1)), m.group(2)]); continue
    if re.fullmatch(r"\d\.", l):  # pusty punkt (np. „5.”)
        continue
    if q["items"]: q["items"][-1][1] += " " + l
    else: q["tekst"].append(l)

for q in qs:
    it = q["items"]
    # ostatnia sekwencja 1..4 to opcje; wcześniejsze numerowane linie należą do treści (np. pyt. 23)
    start = max(i for i in range(len(it)) if it[i][0] == 1 and [x[0] for x in it[i:i + 4]] == [1, 2, 3, 4])
    pre = it[:start]
    q["opcje"] = [x[1].strip() for x in it[start:start + 4]]
    q["tekst"] = " ".join(q["tekst"]) + ("\n" + "\n".join(f"{n}. {t}" for n, t in pre) if pre else "")

# --- uzasadnienia (strony 21–44) ---
rs, r = {}, None
for p, l in lines(21, 44):
    m = re.match(r"^(\d{1,2})\. ([A-Z]{2}\d{4}) - (.+?)(?:\s+([A-D]))?$", l)
    if m:
        r = {"numer": int(m.group(1)), "kod": m.group(2), "obszarNazwa": m.group(3), "litera": m.group(4), "wyj": {}, "intro": [], "strona": p}
        rs[r["numer"]] = r; last = None; continue
    if r is None: continue
    if r["litera"] is None and re.fullmatch(r"[A-D]", l):
        r["litera"] = l; continue
    m = re.match(r"^([A-D])\.\s*(.*)$", l)
    if m:
        last = m.group(1); r["wyj"][last] = m.group(2); continue
    if r.get("wyj") and last: r["wyj"][last] += " " + l
    else: r["intro"].append(l)

out_q, problems = [], []
for q in qs:
    n = q["numer"]; r = rs.get(n)
    if not r: problems.append(f"{n}: brak uzasadnienia"); continue
    if len(q["opcje"]) != 4: problems.append(f"{n}: {len(q['opcje'])} opcji")
    if not r["litera"]: problems.append(f"{n}: brak litery odpowiedzi")
    if len(r["wyj"]) != 4: problems.append(f"{n}: {len(r['wyj'])} wyjaśnień")
    idx = "ABCD".index(r["litera"]) if r["litera"] else -1
    kod = r["kod"]
    out_q.append({
        "id": f"sp1-{n:02d}", "numer": n, "typ": "egzamin",
        "kodSP": kod, "sylabus": [f"{kod[:2]}-{kod[2:4]}-{kod[4:6]}"],
        "bloom": "wiedza" if kod[2:4] == "01" else "rozumienie", "trudnosc": 2,
        "tresc": q["tekst"].strip(), "poprawnaLitera": r["litera"],
        "opcje": [{"tekst": t, "poprawna": i == idx,
                   "wyjasnienie": (" ".join(r["intro"]) + " " if i == 0 and r["intro"] else "") + r["wyj"].get("ABCD"[i], "").strip()}
                  for i, t in enumerate(q["opcje"])],
        "zrodlo": [{"doc": "SP1", "strona": q["strona"]}, {"doc": "SP1", "strona": r["strona"]}],
        "status": "oficjalne"})

json.dump({"opis": "COBIT 5 Foundation Sample Paper 1 (PL) – © ISACA 2016. Tylko do użytku własnego, nie publikować.",
           "egzamin": {"pytania": len(out_q), "minuty": 40, "prog": 25}, "pytania": out_q},
          open(out, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
print(f"{len(out_q)} pytań → {out}")
for x in problems: print("UWAGA", x)
