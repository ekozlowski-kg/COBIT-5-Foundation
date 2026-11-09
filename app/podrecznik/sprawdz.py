#!/usr/bin/env python3
"""Kontrola części podręcznika (window.DECK) – bez Node: JavaScript ocenia macOS (osascript -l JavaScript).

Użycie (z katalogu app/podrecznik):  python3 sprawdz.py 00-wstep.html [kolejne pliki…]
Sprawdza: składnię, pola pojęć, pytania (4 opcje, jedna poprawna, wyjaśnienie przy każdej),
klikalne słowa bez pojęcia, zakazane przykłady strażackie, rozkład poprawnych liter i długość poprawnych odpowiedzi.
"""
import json
import re
import subprocess
import sys
import tempfile

ZAKAZ = re.compile(r"\b(PSP|OSP|JRG|straż\w*|strażak\w*|komend\w*|Syren\w*|dyżurn\w*|pożar\w*|Modrzew\w*)\b", re.I)
POLA = ["t", "eg", "pd", "en", "wyj", "zycie", "firma", "urzad", "egz", "src"]


def deck_of(path):
    html = open(path, encoding="utf-8").read()
    m = re.search(r"<script>\s*(window\.DECK\s*=.*?)</script>", html, re.S)
    if not m:
        raise SystemExit(f"{path}: brak window.DECK")
    js = "var window={};\n" + m.group(1) + "\nJSON.stringify(window.DECK);"
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as f:
        f.write(js)
    r = subprocess.run(["osascript", "-l", "JavaScript", f.name], capture_output=True, text=True)
    if r.returncode != 0:
        raise SystemExit(f"{path}: BŁĄD SKŁADNI JavaScript\n{r.stderr.strip()}")
    return json.loads(r.stdout)


def check(path):
    d = deck_of(path)
    err, warn = [], []
    T, S = d["T"], d["S"]
    for k, v in T.items():
        if isinstance(v, list):
            warn.append(f"pojęcie {k}: stary format (tablica) – brak kart Z życia / pełnego wyjaśnienia")
            continue
        for p in POLA:
            if not str(v.get(p, "")).strip():
                (err if p in ("t", "eg", "pd", "en", "wyj", "egz", "src") else warn).append(f"pojęcie {k}: brak pola {p}")
        if len(re.findall(r"[.!?](\s|$)", v.get("wyj", ""))) < 3:
            warn.append(f"pojęcie {k}: wyjaśnienie krótsze niż 3 zdania")
    letters, longest, nq = [], 0, 0
    for n, s in enumerate(S, 1):
        blob = json.dumps(s, ensure_ascii=False)
        z = ZAKAZ.search(blob)
        if z:
            err.append(f"slajd {n}: przykład strażacki „{z.group(0)}”")
        if "sp1" in s:
            continue  # pytanie z arkusza próbnego – treść w sp1.local.js
        if "quiz" in s:
            nq += 1
            q = s["quiz"]
            o = q.get("opcje", [])
            if len(o) != 4:
                err.append(f"slajd {n}: {len(o)} opcji (ma być 4)")
            good = [i for i, x in enumerate(o) if x.get("ok")]
            if len(good) != 1:
                err.append(f"slajd {n}: poprawnych odpowiedzi {len(good)} (ma być 1)")
            for i, x in enumerate(o):
                if not str(x.get("w", "")).strip():
                    err.append(f"slajd {n}: opcja {'ABCD'[i] if i < 4 else i} bez wyjaśnienia")
            pm = q.get("pomoc") or {}
            if not str(pm.get("t", "")).strip():
                warn.append(f"slajd {n}: pytanie bez pomocy kontekstowej (pomoc.t)")
            for k in pm.get("k", []) or []:
                if k not in T:
                    err.append(f"slajd {n}: pomoc wskazuje pojęcie „{k}” spoza T")
            if not q.get("tresc"):
                err.append(f"slajd {n}: brak treści pytania")
            if len(good) == 1:
                letters.append("ABCD"[good[0]] if good[0] < 4 else "?")
                L = [len(re.sub(r"<[^>]+>", "", x.get("t", ""))) for x in o]
                if L[good[0]] == max(L) and L.count(max(L)) == 1:
                    longest += 1
        else:
            ctx = s.get("ctx", "")
            if not ctx.strip():
                warn.append(f"slajd {n}: brak kontekstu slajdu (ctx)")
            elif len(re.findall(r"<p>", ctx)) < 2:
                warn.append(f"slajd {n}: kontekst krótszy niż 2 akapity")
            for k in re.findall(r'<w k="([\w-]+)">', s.get("b", "") + ctx):
                if k not in T:
                    err.append(f"slajd {n}: słowo klikalne „{k}” bez pojęcia w T")
    for k, v in T.items():
        z = ZAKAZ.search(json.dumps(v, ensure_ascii=False))
        if z:
            err.append(f"pojęcie {k}: przykład strażacki „{z.group(0)}”")
    print(f"== {path}: slajdów {len(S)}, pytań {nq}, pojęć {len(T)}")
    if nq:
        dist = {c: letters.count(c) for c in "ABCD"}
        print(f"   poprawne litery: {dist} · poprawna najdłuższa w {round(100 * longest / nq)}% pytań (cel ≤ 35%)")
        if longest / nq > 0.35:
            warn.append("poprawna odpowiedź zbyt często najdłuższa")
        if nq >= 8 and (max(dist.values()) > 0.4 * nq or min(dist.values()) == 0):
            warn.append("nierówny rozkład liter poprawnych odpowiedzi")
    for e in err:
        print("   BŁĄD:", e)
    for w in warn:
        print("   uwaga:", w)
    return not err


if __name__ == "__main__":
    ok = all([check(p) for p in sys.argv[1:]])
    sys.exit(0 if ok else 1)
