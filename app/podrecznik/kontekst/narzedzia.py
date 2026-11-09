#!/usr/bin/env python3
"""Narzędzia do rozbudowy kontekstu slajdów (pole ctx) dla lekcji przeniesionych z dawnego kursu.

  python3 narzedzia.py pokaz <id-lekcji> [...]      – slajdy lekcji z numerami (tak liczy z_kursu.py)
  python3 narzedzia.py lista <MODUL> [od] [do]       – id lekcji modułu (np. lista PR 1.33 1.52)
  python3 narzedzia.py sprawdz <plik.json> [...]     – walidacja plików kontekstu

Plik kontekstu (np. kontekst/pr-b.json):
  { "<id-lekcji>": { "<nr slajdu>": "<p>akapit</p><p>akapit</p>", ... }, ... }
Konwerter z_kursu.py wstawia ten tekst jako kontekst slajdu (zastępuje krótki komentarz wykładowcy).
"""
import json
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
APP = HERE.parent.parent
LESSONS = APP / "content" / "lessons"
TERMS = {json.loads(p.read_text(encoding="utf-8"))["id"] for p in (APP / "content" / "terms").glob("*.json")}
FM = re.compile(r"^---\n(.*?)\n---\n", re.S)
ZAKAZ = re.compile(r"\b(PSP|OSP|JRG|straż\w*|strażak\w*|komend\w*|Syren\w*|dyżurn\w*|pożar\w*|Modrzew\w*)\b", re.I)


def lessons():
    out = {}
    for f in sorted(LESSONS.rglob("*.md")):
        t = f.read_text(encoding="utf-8").replace("\r", "")
        m = FM.match(t)
        if not m:
            continue
        meta = dict(re.findall(r"^(\w+):\s*(.*)$", m.group(1), re.M))
        meta["_plik"], meta["_body"] = f, t[m.end():]
        out[meta.get("id", "").strip()] = meta
    return out


def slides(body):
    return re.split(r"\n---\n", body.strip())


def pokaz(ids):
    L = lessons()
    for i in ids:
        m = L.get(i)
        if not m:
            print("brak lekcji", i); continue
        print(f"===== {i} · lekcja {m.get('lekcja','').strip(chr(34))} · {m.get('temat','')}\n      plik: {m['_plik'].relative_to(APP)}\n      cel: {m.get('cel','')}")
        for n, s in enumerate(slides(m["_body"]), 1):
            print(f"\n--- slajd {n} ---\n{s.strip()}")
        print()


def lista(mod, od=None, do=None):
    L = lessons()
    key = lambda v: [int(x) if x.isdigit() else x for x in re.split(r"[.]", v)]
    rows = []
    for i, m in L.items():
        if m.get("modul", "").strip() != mod:
            continue
        nr = m.get("lekcja", "").strip().strip('"')
        if od and key(nr) < key(od) or do and key(nr) > key(do):
            continue
        rows.append((key(nr), nr, i, len(slides(m["_body"]))))
    for _, nr, i, n in sorted(rows):
        print(f"{nr}\t{i}\t{n} slajdów")


def sprawdz(files):
    L = lessons()
    bad = 0
    for f in files:
        try:
            d = json.loads(Path(f).read_text(encoding="utf-8"))
        except Exception as e:  # noqa: BLE001
            print(f"{f}: BŁĄD JSON {e}"); bad += 1; continue
        n_ok = 0
        for lid, per in d.items():
            if lid not in L:
                print(f"{f}: BŁĄD nieznana lekcja {lid}"); bad += 1; continue
            total = len(slides(L[lid]["_body"]))
            for nr, html in per.items():
                where = f"{f}: {lid} slajd {nr}"
                if not nr.isdigit() or not 1 <= int(nr) <= total:
                    print(f"{where}: BŁĄD numer slajdu poza 1–{total}"); bad += 1; continue
                ps = re.findall(r"<p>(.*?)</p>", html, re.S)
                words = len(re.sub(r"<[^>]+>", " ", html).split())
                if not 2 <= len(ps) <= 4:
                    print(f"{where}: BŁĄD {len(ps)} akapitów (ma być 2–4 <p>)"); bad += 1
                if not 60 <= words <= 240:
                    print(f"{where}: uwaga {words} słów (cel 80–200)")
                z = ZAKAZ.search(html)
                if z:
                    print(f"{where}: BŁĄD przykład strażacki „{z.group(0)}”"); bad += 1
                for k in re.findall(r'<w k="([^"]+)">', html):
                    if k not in TERMS:
                        print(f"{where}: BŁĄD pojęcie „{k}” nie istnieje w content/terms"); bad += 1
                if re.search(r"\[\[|\*\*|:::", html):
                    print(f"{where}: BŁĄD surowy Markdown – użyj HTML (<b>, <w k>)"); bad += 1
                n_ok += 1
        print(f"{f}: {len(d)} lekcji, {n_ok} slajdów z kontekstem")
    return bad == 0


def skrot(files):
    """Walidacja plików skrot/*.json: { "<id części>": [ {h, b, c, s, ctx, lekcje:[…]} ] }."""
    B = json.loads((HERE.parent / "skrot" / "BUDZET.json").read_text(encoding="utf-8"))
    L = lessons()
    bad = 0
    for f in files:
        d = json.loads(Path(f).read_text(encoding="utf-8"))
        for did, sl in d.items():
            if did not in B:
                print(f"{f}: BŁĄD nieznana część {did}"); bad += 1; continue
            mx, need = B[did]["max_slajdow"], B[did]["lekcje"]
            if len(sl) > mx:
                print(f"{f}: {did}: BŁĄD {len(sl)} slajdów, limit {mx}"); bad += 1
            cov = [i for x in sl for i in x.get("lekcje", [])]
            for i in need:
                if i not in cov:
                    print(f"{f}: {did}: BŁĄD lekcja {i} nieprzypisana do żadnego slajdu"); bad += 1
            for i in cov:
                if i not in need:
                    print(f"{f}: {did}: BŁĄD lekcja {i} nie należy do tej części"); bad += 1
            for n, x in enumerate(sl, 1):
                w = f"{f}: {did} slajd {n}"
                for fld in ("h", "b", "c", "ctx"):
                    if not str(x.get(fld, "")).strip():
                        print(f"{w}: BŁĄD brak pola {fld}"); bad += 1
                vis = len(re.sub(r"<[^>]+>", " ", x.get("b", "")).split())
                if vis > 75:
                    print(f"{w}: BŁĄD na slajdzie {vis} słów (limit 75 – resztę przenieś do ctx)"); bad += 1
                ps = re.findall(r"<p>(.*?)</p>", x.get("ctx", ""), re.S)
                cw = len(re.sub(r"<[^>]+>", " ", x.get("ctx", "")).split())
                if not 2 <= len(ps) <= 5:
                    print(f"{w}: BŁĄD ctx ma {len(ps)} akapitów (2–5)"); bad += 1
                if not 80 <= cw <= 380:
                    print(f"{w}: uwaga ctx {cw} słów (cel 120–320)")
                blob = json.dumps(x, ensure_ascii=False)
                z = ZAKAZ.search(blob)
                if z:
                    print(f"{w}: BŁĄD przykład strażacki „{z.group(0)}”"); bad += 1
                for k in re.findall(r'<w k=\\?"([^"\\]+)\\?">', blob):
                    if k not in TERMS:
                        print(f"{w}: BŁĄD pojęcie „{k}” nie istnieje w content/terms"); bad += 1
                if re.search(r"\[\[|\*\*|:::", blob):
                    print(f"{w}: BŁĄD surowy Markdown – użyj HTML"); bad += 1
        print(f"{f}: {len(d)} części, {sum(len(v) for v in d.values())} slajdów")
    return bad == 0


if __name__ == "__main__":
    cmd, *a = sys.argv[1:] or ["?"]
    if cmd == "pokaz":
        pokaz(a)
    elif cmd == "lista":
        lista(*a)
    elif cmd == "skrot":
        sys.exit(0 if skrot(a) else 1)
    elif cmd == "sprawdz":
        sys.exit(0 if sprawdz(a) else 1)
    else:
        print(__doc__)
