#!/usr/bin/env python3
"""Przenosi materiały dawnego kursu (app/content) do podręcznika krok po kroku.

Użycie (z katalogu app/podrecznik):  python3 z_kursu.py
Tworzy:
  k-*.html        – części podręcznika z lekcji dawnego kursu (slajdy + pytania po każdej lekcji),
  spis.js         – spis treści ułożony jak podręcznik COBIT 5 (rozdziały, załączniki),
  sp1.local.js    – pytania z Sample Paper 1 (prawa autorskie ISACA; *.local.* jest w .gitignore).
Ręcznie pisane części (00, 01, 02a–02c) zostają bez zmian; konwerter ustawia tylko ich prev/next.
"""
import html
import json
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
APP = HERE.parent
sys.path.insert(0, str(APP / "tools"))
import serve  # noqa: E402  – ten sam parser treści, którego używa dawna aplikacja

B = serve.build()
LESSONS = {(l["modul"], str(l["lekcja"])): l for l in B["lekcje"]}
TERMS = {t["id"]: t for t in B["terminy"]}
QUEST = {q["id"]: q for q in B["pytania"]}
SP1 = B.get("samplePaper") or []

DOCS = {"FW-PL": "COBIT 5 Framework (PL)", "FW-EN": "COBIT 5 Framework (EN)", "SYL": "sylabus PeopleCert",
        "ALTKOM": "materiały Altkom", "SP1": "Sample Paper 1 (uzasadnienie)", "IMPL": "COBIT 5 Implementation",
        "PAM": "COBIT 5 PAM", "ENPROC": "COBIT 5: Enabling Processes", "ISO-VOC": "ISO/IEC/IEEE 24765:2010"}
TYP = {"start": "Na start", "pojecie": "Pojęcie", "przyklad": "Przykład", "nie-jest": "Czym to nie jest",
       "pulapka": "Pułapka", "wniosek": "Wniosek", "rozklad": "Rozkład na części", "porownanie": "Porównanie",
       "schemat": "Schemat", "rozwiazany": "Przykład rozwiązany", "egzamin": "Na egzamin", "tresc": ""}

# ---------- układ jak w podręczniku ----------
def L(mod, *nums):
    return [(mod, n) for n in nums]

def rng(mod, prefix, a, b):
    return [(mod, f"{prefix}.{i}") for i in range(a, b + 1) if (mod, f"{prefix}.{i}") in LESSONS]

H = lambda id_, href, t, d: {"hand": 1, "id": id_, "href": href, "t": t, "d": d}
K = lambda id_, t, lessons: {"id": "k-" + id_, "href": "k-" + id_ + ".html", "t": t, "lessons": lessons}

SPIS = [
    {"chap": "Wstęp i Streszczenie", "s": "s. 11–14", "parts": [
        H("00-wstep", "00-wstep.html", "Po co jest COBIT 5", "Streszczenie, rodzina produktów, Ład i Zarządzanie, 5 zasad"),
        K("m0-cobit", "COBIT 5 – organizacja, struktura ramowa i czym COBIT nie jest", L("M0", "0.0", "0.1", "0.2")),
        K("pr-zasady", "Pięć zasad COBIT 5 – mapa", rng("PR", "1", 10, 13)),
    ]},
    {"chap": "Rozdział 1 · Przegląd COBIT 5", "s": "s. 15–16", "parts": [
        H("01-rozdzial-1", "01-dlaczego-cobit5.html", "Dlaczego powstał COBIT 5", "Sześć powodów, połączone standardy, mapa podręcznika"),
        K("m0-standardy", "COBIT 5 na tle innych standardów", L("M0", "0.30", "0.31", "0.32")),
    ]},
    {"chap": "Rozdział 2 · Zasada 1: Realizacja potrzeb interesariusza", "s": "s. 17–22", "parts": [
        K("m0-interesariusze", "Interesariusze, potrzeby i wyznaczniki", rng("M0", "0", 10, 15)),
        K("m0-wartosc", "Rezultat, korzyść, wartość, ryzyko i zasoby", rng("M0", "0", 16, 18) + rng("M0", "0", 20, 22)),
        H("02a-zasada-1", "02a-zasada-1.html", "Wartość i kaskada celów", "Tworzenie wartości, 17 celów organizacji, 17 celów IT"),
        K("pr-wartosc", "Cel Ładu – Tworzenie Wartości", rng("PR", "1", 14, 16)),
        K("pr-kaskada", "Kaskada Celów krok po kroku", rng("PR", "1", 17, 23)),
        H("02b-kaskada-schemat", "02b-kaskada-schemat.html", "Schemat kaskady celów (interaktywny)", "Załączniki B, C, D · s. 49–56"),
        H("02c-kaskada-praktyka", "02c-kaskada-w-praktyce.html", "Kaskada celów w praktyce", "Przykłady 1 i 2, Ilustracja 7"),
        K("pr-kaskada-uzycie", "Do czego służy kaskada i jak ją dostosować", rng("PR", "1", 24, 26)),
    ]},
    {"chap": "Rozdział 3 · Zasada 2: Pokrycie całej organizacji", "s": "s. 23–24", "parts": [
        K("pr-zasada-2", "Zasada 2: Ład nad IT, podejście do Ładu, role", rng("PR", "1", 27, 29)),
    ]},
    {"chap": "Rozdział 4 · Zasada 3: Zastosowanie Pojedynczej Zintegrowanej Struktury Ramowej", "s": "s. 25–26", "parts": [
        K("pr-zasada-3", "Zasada 3: jedna rama, cztery powody, baza wiedzy", rng("PR", "1", 30, 32)),
    ]},
    {"chap": "Rozdział 5 · Zasada 4: Aktywacja holistycznego podejścia", "s": "s. 27–30", "parts": [
        K("pr-aktywatory", "Aktywatory i siedem kategorii", rng("PR", "1", 33, 35) + L("M0", "0.23", "0.24")),
        K("pr-wymiary", "Wymiary, cykl życia i cele aktywatora", rng("PR", "1", 36, 39)),
        K("pr-wydajnosc", "Wydajność aktywatora i wskaźniki", rng("PR", "1", 40, 41)),
    ]},
    {"chap": "Rozdział 6 · Zasada 5: Oddzielenie Ładu od Zarządzania", "s": "s. 31–33", "parts": [
        K("m0-lad", "Ład a Zarządzanie – intuicja", L("M0", "0.25", "0.26", "0.27", "0.36")),
        K("pr-zasada-5", "Zasada 5: czynności EDM i PBRM, obieg informacji", rng("PR", "1", 42, 45)),
        K("pr-prm", "Referencyjny Model Procesu – 37 procesów", rng("PR", "1", 46, 52)),
        K("pr-atlas-edm", "Atlas procesów: EDM (Ład)", rng("PR", "1", 53, 55)),
        K("pr-atlas-apo", "Atlas procesów: APO", rng("PR", "1", 60, 64)),
        K("pr-atlas-bai", "Atlas procesów: BAI", rng("PR", "1", 65, 68)),
        K("pr-atlas-dss-mea", "Atlas procesów: DSS i MEA", rng("PR", "1", 69, 71)),
    ]},
    {"chap": "Rozdział 7 · Wdrożenie", "s": "s. 35–39", "parts": [
        K("im-kontekst", "Kontekst wdrożenia, punkty zapalne, zdarzenia wyzwalające", rng("IM", "3", 10, 13)),
        K("im-cykl", "Cykl życia wdrożenia: trzy pierścienie, siedem faz", rng("IM", "3", 14, 19)),
        K("im-uzasadnienie", "Uzasadnienie biznesowe", rng("IM", "3", 20, 21)),
    ]},
    {"chap": "Rozdział 8 · Model zdolności procesu", "s": "s. 41–45", "parts": [
        K("pc-model", "Model zdolności procesu a model dojrzałości", rng("PC", "4", 10, 13)),
        K("pc-poziomy", "Sześć poziomów i dziewięć atrybutów", rng("PC", "4", 20, 24)),
        K("pc-atrybuty", "Atrybuty procesu PA 1.1 – PA 5.2", rng("PC", "4", 30, 34)),
        K("pc-oceny", "Skala ocen N/C/W/P i reguła poziomu", rng("PC", "4", 40, 44)),
        K("pc-iso", "ISO/IEC 15504, ocena i przewodniki", rng("PC", "4", 50, 56)),
    ]},
    {"chap": "Załącznik G · Aktywatory szczegółowo", "s": "s. 65–88", "parts": [
        K("en-zasady", "Zasady, Polityki i Struktury ramowe", rng("EN", "2", 10, 13)),
        K("en-procesy", "Procesy: cele, praktyki, działania", rng("EN", "2", 15, 18)),
        K("en-raci", "Opis procesu i diagram RACI", rng("EN", "2", 20, 23)),
        K("en-struktury", "Struktury organizacyjne", rng("EN", "2", 25, 27)),
        K("en-role", "Role i komitety (Rysunek 33)", rng("EN", "2", 30, 32)),
        K("en-kultura", "Kultura, Etyka i Zachowanie", rng("EN", "2", 35, 37)),
        K("en-informacja", "Informacja", rng("EN", "2", 40, 42)),
        K("en-uslugi", "Usługi, Infrastruktura i Aplikacje", rng("EN", "2", 45, 47)),
        K("en-ludzie", "Ludzie, Umiejętności i Kompetencje", rng("EN", "2", 50, 52)),
    ]},
    {"chap": "Poza podręcznikiem · Egzamin", "s": "", "parts": [
        K("m0-egzamin", "Egzamin w liczbach i pułapki nazw", L("M0", "0.33", "0.34", "0.35", "0.37")),
        K("ex-strategia", "Strategia: jak czytać pytania", rng("EX", "9", 10, 16)),
        H("03-czytanie-pytan", "03-czytanie-pytan.html", "Rozbiór pytań: 9 typów na przykładach", "NIE, NAJLEPIEJ, scenariusz, nazwa, kto, proces, poziom zdolności, kolejność, słowa skrajne"),
        K("ex-powtorka", "Powtórka przed egzaminem", rng("EX", "9", 17, 22)),
    ]},
    {"chap": "Poza podręcznikiem · Mentor i finał", "s": "", "parts": [
        K("mt-lad-kaskada", "Mentor: Ład i kaskada celów", rng("MT", "MT", 10, 14)),
        K("mt-aktywatory", "Mentor: aktywatory i procesy", rng("MT", "MT", 15, 18)),
        K("mt-zdolnosc", "Mentor: zdolność, wdrożenie, prowadzenie zajęć", rng("MT", "MT", 19, 24)),
        K("fn-final", "Finał: tabele, obce źródła, pytania przekrojowe", rng("FN", "10", 10, 18)),
    ]},
    {"chap": "Poza podręcznikiem · Warsztat i materiały", "s": "", "parts": [
        H("04-warsztat", "04-warsztat.html", "Od potrzeb do dowodów", "Autorskie scenariusze, PRM/PAM, dowody, integracja i katalog materiałów"),
    ]},
]

# ---------- Markdown → HTML (wąski podzbiór używany w lekcjach) ----------
used = set()

def term_label(i):
    t = TERMS.get(i)
    return (t.get("plEgzamin") or i) if t else i

def inline(s):
    s = html.escape(str(s or ""), quote=False)
    def ref(m):
        i, lab = m.group(1), m.group(2) or term_label(m.group(1))
        if i in TERMS:
            used.add(i)
            return f'<w k="{i}">{lab}</w>'
        return lab
    s = re.sub(r"\[\[([\w-]+)(?:\|([^\]]+))?\]\]", ref, s)
    s = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", s)
    s = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"<em>\1</em>", s)
    s = re.sub(r"`([^`]+)`", r"<code>\1</code>", s)
    return s

def plain(s):
    s = re.sub(r"\[\[([\w-]+)\|([^\]]+)\]\]", r"\2", str(s or ""))
    s = re.sub(r"\[\[([\w-]+)\]\]", lambda m: term_label(m.group(1)), s)
    s = re.sub(r"\*\*(.+?)\*\*", r"\1", s)
    s = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"\1", s)
    return s.replace("`", "").strip()

def blocks(text):
    out, lines, i = [], text.split("\n"), 0
    while i < len(lines):
        ln = lines[i]
        if not ln.strip():
            i += 1; continue
        if ln.startswith("|"):
            rows = []
            while i < len(lines) and lines[i].startswith("|"):
                rows.append(lines[i]); i += 1
            cells = [[c.strip() for c in r.strip().strip("|").split("|")] for r in rows]
            cells = [r for r in cells if not all(re.fullmatch(r":?-{2,}:?", c or "--") for c in r)]
            if cells:
                h = "<tr>" + "".join(f"<th>{inline(c)}</th>" for c in cells[0]) + "</tr>"
                body = "".join("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>" for r in cells[1:])
                out.append(f'<div class="tblwrap"><table class="tbl">{h}{body}</table></div>')
            continue
        if re.match(r"^\s*[-*] ", ln):
            items = []
            while i < len(lines) and re.match(r"^\s*[-*] ", lines[i]):
                items.append(re.sub(r"^\s*[-*] ", "", lines[i])); i += 1
            out.append("<ul>" + "".join(f"<li>{inline(x)}</li>" for x in items) + "</ul>")
            continue
        if re.match(r"^\s*\d+\. ", ln):
            items = []
            while i < len(lines) and re.match(r"^\s*\d+\. ", lines[i]):
                items.append(re.sub(r"^\s*\d+\. ", "", lines[i])); i += 1
            out.append("<ol>" + "".join(f"<li>{inline(x)}</li>" for x in items) + "</ol>")
            continue
        if ln.startswith(">"):
            q = []
            while i < len(lines) and lines[i].startswith(">"):
                q.append(lines[i].lstrip("> ")); i += 1
            out.append(f'<blockquote>{inline(" ".join(q))}</blockquote>')
            continue
        if ln.startswith("#"):
            out.append(f"<p><b>{inline(ln.lstrip('# '))}</b></p>"); i += 1; continue
        para = []
        while i < len(lines) and lines[i].strip() and not re.match(r"^(\||>|#|\s*[-*] |\s*\d+\. )", lines[i]):
            para.append(lines[i]); i += 1
        out.append(f"<p>{inline(' '.join(para))}</p>")
    return "".join(out)

def sources(items):
    out = []
    for it in items:
        doc, rest = (it.split(None, 1) + [""])[:2]
        if doc == "SP1":
            continue  # treść arkusza zostaje w sp1.local.js
        name = DOCS.get(doc, doc)
        m = re.match(r"^(\d+)(?:\s+(\S+))?$", rest.strip())
        if m:
            out.append(f"{name}, s. {m.group(1)}" + (f", Ilustracja {m.group(2)}" if m.group(2) else ""))
        else:
            out.append(f"{name} {rest}".strip())
    return "; ".join(dict.fromkeys(out))

def zrodlo_list(zs):
    out = []
    for z in zs or []:
        if z.get("doc") == "SP1":
            continue
        s = DOCS.get(z.get("doc"), z.get("doc", ""))
        if z.get("strona"):
            s += f", s. {z['strona']}"
        if z.get("ilustracja"):
            s += f", Ilustracja {z['ilustracja']}"
        if z.get("sekcja"):
            s += f", sekcja {z['sekcja']}"
        out.append(s)
    return "; ".join(dict.fromkeys(out))

# Automatyczne podkreślanie pojęć: pierwsze wystąpienie nazwy (egzamin PL, podręcznik PL, EN) na slajdzie.
NAMES = []
for _i, _t in TERMS.items():
    for _n in {_t.get("plEgzamin"), _t.get("plPodrecznik"), _t.get("en")}:
        _n = (_n or "").strip()
        if len(_n) >= 4 and not re.search(r"[()\[\]–]", _n):
            NAMES.append((_n, _i))
NAMES.sort(key=lambda x: -len(x[0]))

def autolink(h, limit=4):
    done = set(re.findall(r'<w k="([\w-]+)">', h))
    parts = re.split(r"(<w [^>]*>.*?</w>|<[^>]+>)", h)
    n = 0
    for name, i in NAMES:
        if n >= limit or i in done:
            continue
        rx = re.compile(r"(?<![\w-])(" + re.escape(name) + r")(?![\w-])", re.I)
        for k, seg in enumerate(parts):
            if not seg or seg.startswith("<"):
                continue
            m = rx.search(seg)
            if m:
                parts[k] = seg[:m.start()] + f'<w k="{i}">{m.group(1)}</w>' + seg[m.end():]
                parts[k:k + 1] = re.split(r"(<w [^>]*>.*?</w>)", parts[k])
                done.add(i); used.add(i); n += 1
                break
    return "".join(parts)

def parse_slides(body):
    slides = []
    for raw in re.split(r"\n---\n", body.strip()):
        m = re.search(r"<!-- slajd: ([\w-]+) -->", raw)
        typ = m.group(1) if m else "tresc"
        raw = re.sub(r"<!--.*?-->", "", raw, flags=re.S).strip("\n")
        lines, main, blk, cur = raw.split("\n"), [], [], None
        for ln in lines:
            if cur is None and re.match(r"^:::[\w-]+", ln):
                name, *args = ln[3:].split(None, 1)
                cur = [name, args[0] if args else "", []]
                continue
            if cur is not None and ln.strip() == ":::":
                blk.append(cur); cur = None; continue
            (cur[2] if cur is not None else main).append(ln)
        if cur is not None:
            blk.append(cur)
        head = ""
        for k, ln in enumerate(main):
            if ln.startswith("# "):
                head = ln[2:].strip(); main = main[:k] + main[k + 1:]; break
        text = "\n".join(main)
        concl = ""
        mw = re.search(r"^\*\*Wniosek:\*\*\s*(.+)$", text, flags=re.M)
        if mw:
            concl = mw.group(1).strip(); text = text[:mw.start()] + text[mw.end():]
        b = blocks(text)
        ctx, src = [], []
        for name, arg, body_lines in blk:
            inner = "\n".join(body_lines).strip()
            if name == "zrodlo":
                src.append(arg)
            elif name == "wykladowca":
                ctx.append(blocks(inner))
            elif name == "sb":
                ctx.append(f"<p><b>Dodatkowy przykład{(': ' + inline(arg)) if arg and arg != 'przyklad' else ''}</b></p>" + blocks(inner))
            elif name == "uproszczenie":
                ctx.append("<p><b>Uproszczenie:</b></p>" + blocks(inner))
            elif name == "pulapka":
                b += f'<div class="trap"><p class="trapk">Pułapka</p>{blocks(inner)}</div>'
            elif name == "zapamietaj":
                b += f'<div class="zap"><p class="trapk">Zapamiętaj</p>{blocks(inner)}</div>'
            else:  # rozwiazany, egzamin i inne – zostają na slajdzie
                b += f'<div class="zap">{blocks(inner)}</div>'
        b = autolink(b)
        slides.append({"typ": typ, "h": inline(head) or TYP.get(typ, ""), "b": b, "c": inline(concl),
                       "s": sources(src), "ctx": "".join(ctx)})
    return slides

SHUFFLE = {"egzamin", "studium", "rozpoznanie", "mentor"}

def shuffled(q, target):
    """Stała kolejność na pytanie (ziarno = id); poprawna odpowiedź trafia na literę `target`,
    żeby w każdej części litery A–D rozkładały się równo. Opcje „stala” zostają na miejscu."""
    o = list(q.get("opcje") or [])
    if q.get("typ") not in SHUFFLE or q.get("final") or q.get("kodSP") or any(x.get("stala") for x in o):
        return o
    import random
    rnd = random.Random(q["id"])
    good = [x for x in o if x.get("poprawna")]
    bad = [x for x in o if not x.get("poprawna")]
    if len(good) != 1:
        return o
    rnd.shuffle(bad)
    t = target % len(o)
    return bad[:t] + good + bad[t:]

def quiz(q, lesson, target=0):
    o = shuffled(q, target)
    if len(o) < 2 or sum(1 for x in o if x.get("poprawna")) != 1:
        return None
    keys = [k for k in (lesson.get("wprowadza", []) + lesson.get("wprowadzaListe", [])) if k in TERMS][:4]
    used.update(keys)
    pom = {"t": f"Pytanie dotyczy lekcji {lesson['lekcja']} „{lesson['temat']}”. Cel lekcji: {plain(lesson.get('cel', ''))}", "k": keys}
    r = {"id": q["id"], "sylabus": q.get("sylabus", []), "tresc": inline(q.get("tresc")), "opcje": [{"t": inline(x.get("tekst")), **({"ok": True} if x.get("poprawna") else {}), "w": inline(x.get("wyjasnienie") or "")} for x in o],
         "src": zrodlo_list(q.get("zrodlo")) or "pytanie autorskie kursu", "pomoc": pom, "kurs": inline(q.get("wyjasnienie", ""))}
    if q.get("scenariusz"):
        r["kontekst"] = inline(q["scenariusz"])
    return r

def term_obj(i):
    t = TERMS[i]
    p = t.get("przyklady") or {}
    egz = " ".join(x for x in [plain(t.get("egzamin")), plain(t.get("pulapkaOpis"))] if x)
    nm = t.get("nieMylicZ") or []
    if nm:
        egz += " Nie myl z: " + "; ".join(f"{term_label(x.get('termin'))} – {plain(x.get('roznica'))}" for x in nm if isinstance(x, dict))
    zr = t.get("zrodla") or []
    return {"t": t.get("plEgzamin") or i, "eg": t.get("plEgzamin") or "", "pd": t.get("plPodrecznik") or "", "en": t.get("en") or "",
            "wyj": "\n\n".join(plain(t.get(k)) for k in ("poLudzku", "jakDziala", "poCo") if t.get(k)),
            "zycie": plain(p.get("zycie")), "firma": plain(p.get("firma") or p.get("organizacja") or p.get("biuro")),
            "urzad": plain(p.get("admin")), "it": plain(p.get("it")), "egz": egz.strip(),
            "src": zrodlo_list(zr) or "materiały kursu"}

# ---------- miejsce pytań z Sample Paper 1: po ostatniej (w kolejności podręcznika) lekcji z tym samym kodem sylabusa ----------
order = []
for ch in SPIS:
    for p in ch["parts"]:
        for key in p.get("lessons", []):
            order.append(key)
placed = {key: [] for key in order}
for q in SP1:
    hits = [key for key in order if set(q.get("sylabus", [])) & set(LESSONS[key].get("sylabus", [])) and key[0] not in ("MT", "FN", "EX")]
    hits = hits or [key for key in order if set(q.get("sylabus", [])) & set(LESSONS[key].get("sylabus", []))]
    if hits:
        placed[hits[-1]].append(q["id"])
    else:
        print("UWAGA: pytanie", q["id"], "bez lekcji")

# Audyt pokrycia (skrot/sp1-mapa.local.json): miejsce pytania = lekcja, która naprawdę uczy potrzebnej wiedzy.
MAPA_F = HERE / "skrot" / "sp1-mapa.local.json"
MAPA = json.loads(MAPA_F.read_text(encoding="utf-8")) if MAPA_F.exists() else {}
if MAPA:
    by_id = {l["id"]: k for k, l in LESSONS.items()}
    for key in placed:
        placed[key] = [sid for sid in placed[key] if sid not in MAPA]
    for sid, m in MAPA.items():
        key = by_id.get(m.get("lekcja"))
        if key in placed:
            placed[key].append(sid)
        else:
            print("UWAGA: mapa SP1 wskazuje nieznaną lekcję", sid, m.get("lekcja"))

if not SP1 and not MAPA:
    for ch in SPIS:
        for part in ch["parts"]:
            old = HERE / part["href"]
            if part.get("hand") or not old.exists():
                continue
            match = re.search(r"window.DECK=(.*?);</script>", old.read_text(encoding="utf-8"))
            if not match:
                continue
            deck = json.loads(match.group(1).replace("<\\/", "</"))
            for slide in deck.get("S", []):
                if slide.get("sp1"):
                    key = next((k for k in part["lessons"] if LESSONS[k]["lekcja"] == slide.get("lekcja")), None)
                    if key is not None and slide["sp1"] not in placed[key]:
                        placed[key].append(slide["sp1"])

# ---------- rozbudowany kontekst slajdów (kontekst/*.json) ----------
KX = {}
for f in sorted((HERE / "kontekst").glob("*.json")):
    for lid, per in json.loads(f.read_text(encoding="utf-8")).items():
        KX.setdefault(lid, {}).update(per)

# ---------- skrót: ≤ 300 slajdów treści w całym podręczniku (skrot/*.json) ----------
LIMIT = {"k-m0-cobit": 2, "k-pr-zasady": 3, "k-m0-standardy": 2, "k-m0-interesariusze": 4, "k-m0-wartosc": 4,
         "k-pr-wartosc": 2, "k-pr-kaskada": 5, "k-pr-kaskada-uzycie": 2, "k-pr-zasada-2": 4, "k-pr-zasada-3": 3,
         "k-pr-aktywatory": 5, "k-pr-wymiary": 5, "k-pr-wydajnosc": 3, "k-m0-lad": 3, "k-pr-zasada-5": 5, "k-pr-prm": 6,
         "k-pr-atlas-edm": 3, "k-pr-atlas-apo": 6, "k-pr-atlas-bai": 5, "k-pr-atlas-dss-mea": 5, "k-im-kontekst": 4,
         "k-im-cykl": 6, "k-im-uzasadnienie": 2, "k-pc-model": 4, "k-pc-poziomy": 5, "k-pc-atrybuty": 5, "k-pc-oceny": 5,
         "k-pc-iso": 5, "k-en-zasady": 4, "k-en-procesy": 4, "k-en-raci": 4, "k-en-struktury": 3, "k-en-role": 3,
         "k-en-kultura": 3, "k-en-informacja": 3, "k-en-uslugi": 3, "k-en-ludzie": 3, "k-m0-egzamin": 3,
         "k-ex-strategia": 5, "k-ex-powtorka": 5, "k-mt-lad-kaskada": 4, "k-mt-aktywatory": 4, "k-mt-zdolnosc": 4, "k-fn-final": 5}
(HERE / "skrot" / "BUDZET.json").write_text(json.dumps({p["id"]: {"tytul": p["t"], "rozdzial": ch["chap"], "max_slajdow": LIMIT.get(p["id"], 3),
    "lekcje": [LESSONS[k]["id"] for k in p["lessons"]]} for ch in SPIS for p in ch["parts"] if not p.get("hand")}, ensure_ascii=False, indent=1), encoding="utf-8")
# Dawna lekcja → część podręcznika (aplikacja przekierowuje stare linki „#/lekcja/…” do podręcznika).
(HERE / "lekcje.json").write_text(json.dumps({LESSONS[k]["id"]: p["href"] for ch in SPIS for p in ch["parts"] if not p.get("hand") for k in p["lessons"]},
    ensure_ascii=False, indent=0), encoding="utf-8")
SKROT = {}
for f in sorted((HERE / "skrot").glob("*.json")):
    if f.name != "BUDZET.json":
        SKROT.update(json.loads(f.read_text(encoding="utf-8")))
LID = {l["id"]: k for k, l in LESSONS.items()}

def best_q(les, target):
    """Jedno pytanie na lekcję: najpierw typ egzaminacyjny, potem najwyższa trudność."""
    cand = [QUEST[i] for i in les.get("cwiczenia", []) + les.get("zapas", []) if i in QUEST]
    def longest(q):
        o = q.get("opcje") or []
        L = [len(plain(x.get("tekst"))) for x in o]
        good = [i for i, x in enumerate(o) if x.get("poprawna")]
        return bool(good) and L[good[0]] == max(L) and L.count(max(L)) == 1
    cand.sort(key=lambda q: (q.get("typ") not in ("egzamin", "studium"), longest(q), -q.get("trudnosc", 2), q["id"]))
    for q in cand:
        z = quiz(q, les, target)
        if z:
            return z
    return None

def sp1_slides(key):
    les = LESSONS[key]
    out = []
    for sid in placed.get(key, []):
        k = [x for x in (les.get("wprowadza", []) + les.get("wprowadzaListe", [])) if x in TERMS][:4]
        used.update(k)
        out.append({"pt": "Arkusz próbny", "sp1": sid, "lekcja": les["lekcja"], "temat": les["temat"], "k": k})
    return out

# ---------- części ----------
TPL = HERE / "00-wstep.html"
head = TPL.read_text(encoding="utf-8").split("<body>")[0]
head = re.sub(r"<title>.*?</title>", "<title>{TITLE} · COBIT 5</title>", head)
head = head.replace("&family=Fraunces:opsz,wght@9..144,560", "")

flat = [p for ch in SPIS for p in ch["parts"]]
missing = [k for k in LESSONS if k not in order]
if missing:
    print("UWAGA: lekcje poza spisem:", missing)
written = 0
for n, p in enumerate(flat):
    prev = flat[n - 1]["href"] if n else None
    nxt = flat[n + 1]["href"] if n + 1 < len(flat) else None
    p["prev"], p["next"] = prev, nxt
    if p.get("hand"):
        continue
    used.clear()
    ch = next(c for c in SPIS if p in c["parts"])
    S, nq, nsp = [], 0, 0
    if p["id"] in SKROT:
        covered = []
        for sl in SKROT[p["id"]]:
            keys = [LID[i] for i in sl.get("lekcje", []) if i in LID]
            nums = [LESSONS[k]["lekcja"] for k in keys]
            pt = (f"Lekcje {nums[0]}–{nums[-1]}" if len(nums) > 1 else f"Lekcja {nums[0]}") if nums else ""
            for fld in ("b", "c", "ctx"):
                used.update(i for i in re.findall(r'<w k="([\w-]+)">', sl.get(fld, "")) if i in TERMS)
            S.append({"lekcje": [LESSONS[k]["id"] for k in keys], "pt": pt, "h": sl["h"], "b": autolink(sl.get("b", "")), "c": sl.get("c", ""), "s": sl.get("s", ""), "ctx": sl.get("ctx", "")})
            for key in keys:
                if key in covered:
                    continue
                covered.append(key)
                z = best_q(LESSONS[key], nq)
                if z:
                    S.append({"pt": "Sprawdź się", "quiz": z}); nq += 1
                sp = sp1_slides(key); S += sp; nsp += len(sp)
        for key in p["lessons"]:
            if key not in covered:
                print("UWAGA:", p["id"], "skrót nie obejmuje lekcji", LESSONS[key]["id"])
                z = best_q(LESSONS[key], nq)
                if z:
                    S.append({"pt": "Sprawdź się", "quiz": z}); nq += 1
                sp = sp1_slides(key); S += sp; nsp += len(sp)
    for key in ([] if p["id"] in SKROT else p["lessons"]):
        les = LESSONS[key]
        body = serve.FM_RE.sub("", (APP / les["plik"]).read_text(encoding="utf-8").replace("\r", ""), count=1)
        for k, s in enumerate(parse_slides(body)):
            pt = f"Lekcja {les['lekcja']}" + (f" · {TYP.get(s['typ'])}" if TYP.get(s["typ"]) else "")
            ctx = KX.get(les["id"], {}).get(str(k + 1)) or s["ctx"]
            used.update(i for i in re.findall(r'<w k="([\w-]+)">', ctx) if i in TERMS)
            S.append({"lekcje": [les["id"]], "pt": pt, "h": s["h"], "b": s["b"], "c": s["c"], "s": s["s"], "ctx": ctx})
        qs = [QUEST[i] for i in les.get("cwiczenia", []) if i in QUEST]
        qs.sort(key=lambda q: q.get("trudnosc", 2))
        for q in qs:
            z = quiz(q, les, nq)
            if z:
                S.append({"pt": "Sprawdź się", "quiz": z}); nq += 1
        for sid in placed.get(key, []):
            S.append({"pt": "Arkusz próbny", "sp1": sid, "lekcja": les["lekcja"], "temat": les["temat"],
                      "k": [k for k in (les.get("wprowadza", []) + les.get("wprowadzaListe", [])) if k in TERMS][:4]})
            used.update(S[-1]["k"]); nsp += 1
    # pojęcia: użyte na slajdach i w pomocy
    T = {}
    pending = set(used)
    while pending:
        i = pending.pop()
        if i in T or i not in TERMS:
            continue
        T[i] = term_obj(i)
    p["slajdy"], p["pytania"], p["sp1"] = len(S), nq, nsp
    p["tresc"] = sum(1 for x in S if "quiz" not in x and "sp1" not in x)
    deck = {"id": p["id"], "rozdzial": ch["chap"] + (" · " + ch["s"] if ch["s"] else ""), "tytul": p["t"],
            "prev": prev, "next": nxt, "T": T, "S": S}
    data = json.dumps(deck, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")
    page = (head.replace("{TITLE}", html.escape(p["t"])) + "<body>\n<script>window.DECK=" + data + ";</script>\n"
            + '<script src="sp1.local.js"></script>\n<script src="ilustracje/ilu.js"></script>\n<script src="deck.js"></script>\n</body>\n</html>\n')
    (HERE / p["href"]).write_text(page, encoding="utf-8")
    written += 1

# ręczne części: tylko prev/next
for p in flat:
    if not p.get("hand") or p["href"].startswith("02b"):
        continue
    f = HERE / p["href"]
    s = f.read_text(encoding="utf-8")
    js = lambda v: "null" if v is None else "'" + v + "'"
    s2 = re.sub(r"prev:(null|'[^']*'),next:(null|'[^']*')", f"prev:{js(p['prev'])},next:{js(p['next'])}", s, count=1)
    s2 = re.sub(r'"prev":(?:null|"[^"]*"),"next":(?:null|"[^"]*")',
                '"prev":' + json.dumps(p['prev']) + ',"next":' + json.dumps(p['next']), s2, count=1)
    f.write_text(s2, encoding="utf-8")
# schemat 02b: odnośniki w stopce
p2b = next(p for p in flat if p["href"].startswith("02b"))
f = HERE / p2b["href"]
s = f.read_text(encoding="utf-8")
s = re.sub(r'<nav class="pnav"[^>]*>.*?</nav>',
           f'<nav class="pnav" aria-label="Nawigacja między częściami"><a class="btn" href="{p2b["prev"]}#koniec">← Poprzednia część</a><a class="btn pri" href="{p2b["next"]}">Następna część →</a></nav>', s, count=1, flags=re.S)
f.write_text(s, encoding="utf-8")

# ręczne części: skrypt z ilustracjami przed deck.js
for p in flat:
    if p.get("hand") and not p["href"].startswith("02b"):
        f = HERE / p["href"]
        t = f.read_text(encoding="utf-8")
        if "ilustracje/ilu.js" not in t:
            t = t.replace('<script src="deck.js"></script>', '<script src="sp1.local.js"></script>\n<script src="ilustracje/ilu.js"></script>\n<script src="deck.js"></script>', 1)
            f.write_text(t, encoding="utf-8")

# ilustracje/ilu.js – spis ilustracji z podręcznika (obrazy tworzy ilustracje.swift; katalog poza gitem)
ILF = HERE / "ilustracje" / "spis.json"
if ILF.exists():
    figs = {}
    for x in json.loads(ILF.read_text(encoding="utf-8")):
        e = figs.setdefault(str(x["nr"]), {"t": re.sub(r"\s*\(ciąg dalszy\)\s*$", "", x["tytul"]).strip(), "s": [], "img": []})
        e["s"].append(x["strona"]); e["img"].append(x["plik"])
    pages = len(list((HERE / "ilustracje").glob("strona-*.jpg")))
    (HERE / "ilustracje" / "ilu.js").write_text("// Wygenerowane przez z_kursu.py z ilustracje/spis.json – tylko lokalnie (prawa autorskie ISACA).\nwindow.ILU=" + json.dumps({"pages": pages, "figs": figs}, ensure_ascii=False) + ";\n", encoding="utf-8")
    print(f"ilustracje: {len(figs)}, stron: {pages}")

# spis.js
spis = [{"chap": c["chap"], "s": c["s"], "parts": [{k: p[k] for k in ("id", "href", "t", "d", "slajdy", "pytania", "sp1") if k in p} for p in c["parts"]]} for c in SPIS]
for c in spis:
    for p in c["parts"]:
        if "d" not in p:
            ls = next(x for x in flat if x["id"] == p["id"])["lessons"]
            # zakresy liczone osobno dla każdego modułu (np. „Lekcje 1.33–1.35, 0.23–0.24”)
            grp = []
            for k in ls:
                if grp and grp[-1][0] == k[0]: grp[-1][1].append(LESSONS[k]['lekcja'])
                else: grp.append((k[0], [LESSONS[k]['lekcja']]))
            rr = [f"{g[0]}–{g[-1]}" if len(g) > 1 else g[0] for _, g in grp]
            p["d"] = ("Lekcje " if len(ls) > 1 else "Lekcja ") + ", ".join(rr)
(HERE / "spis.js").write_text("// Wygenerowane przez z_kursu.py – spis treści ułożony jak podręcznik COBIT 5.\nwindow.SPIS=" + json.dumps(spis, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")

# sp1.local.js – treść arkusza próbnego, tylko lokalnie
sp = {q["id"]: {"sylabus": q.get("sylabus", []), "nr": q.get("numer"), "kurs": MAPA.get(q["id"], {}).get("wyjasnienie", ""), "tresc": inline(q.get("tresc")), "opcje": [{"t": inline(o.get("tekst")), **({"ok": True} if o.get("poprawna") else {}), "w": inline(o.get("wyjasnienie") or "")} for o in q["opcje"]]} for q in SP1}
if SP1:
    (HERE / "sp1.local.js").write_text("// Sample Paper 1 (ISACA/PeopleCert) – tylko do nauki lokalnej, NIE commitować (*.local.* w .gitignore).\nwindow.SP1=" + json.dumps(sp, ensure_ascii=False) + ";\n", encoding="utf-8")

tot = sum(p.get("slajdy", 0) for p in flat)
print(f"slajdów treści w częściach z kursu: {sum(p.get('tresc', 0) for p in flat)} (skrót w {sum(1 for p in flat if p['id'] in SKROT)} z {written} części)")
print(f"części z kursu: {written}, slajdów: {tot}, pytań: {sum(p.get('pytania', 0) for p in flat)}, pytań z arkusza: {sum(p.get('sp1', 0) for p in flat)} z {len(SP1)}, lekcji: {len(order)} z {len(LESSONS)}")

from sync_bank import sync_reviewed_decks
sync_reviewed_decks()
