#!/usr/bin/env python3
"""
Serwer i walidator treści kursu COBIT 5 (zastępuje Zod; tylko biblioteka standardowa, Python 3.9+).

  python3 tools/serve.py              # serwer na http://localhost:8123 (paczka treści budowana przy każdym żądaniu)
  python3 tools/serve.py --port 9000
  python3 tools/serve.py --check      # tylko walidacja content/ (kod wyjścia 1, gdy są błędy)

Kontrakt formatu: content/SCHEMA.md.
"""
import argparse
import http.server
import json
import os
import re
import socketserver
import sys
from pathlib import Path

APP = Path(__file__).resolve().parent.parent
CONTENT = APP / "content"

STATUS = {"oficjalne", "uproszczenie", "przyklad", "niepotwierdzone", "opinia"}  # §17.2: opinia = opinia autora kursu
KATEGORIE = {"podstawowe", "egzaminacyjne", "standard", "skrot"}
DOCS = {"FW-PL", "FW-EN", "SYL", "SP1", "ALTKOM", "WWW", "PROSTO", "PAKIET", "PAM", "ENPROC", "ISO-VOC"}
# §17.4/§17.6: zycie → biuro → organizacja → psp → it; firma/admin – przejściowo (= organizacja).
KONTEKSTY = {"zycie", "biuro", "organizacja", "psp", "it", "firma", "admin"}
STATUS_TLUM = {"A", "B", "C", "D"}
POZIOMY_P = {"P0", "P1", "P2", "P3"}
CZESCI = {"wiedza", "terminologia", "rozroznianie", "mechanizmy", "zastosowanie", "synteza"}
SLAJDY = {"proces", "zrodlo-czytaj", "zgadnij", "studium", "start", "rozklad", "pojecie", "przyklad", "porownanie", "nie-jest", "schemat", "wniosek", "zapamietaj", "egzamin", "tresc", "pulapka", "mapa", "wlasne-slowa", "rozwiazany"}
BLOKI = {"zapamietaj", "pulapka", "egzamin", "kontekst", "zrodlo", "uproszczenie", "mapa", "wlasne-slowa", "rozwiazany", "glebiej", "atom",
         "wykladowca", "pytanie-uczestnika", "teza", "sb", "progresja"}
TYPY = {"rozpoznanie", "egzamin", "studium", "dopasowanie", "klasyfikacja", "bledy", "mapa", "kolejnosc", "mentor", "nazwa-en", "wypowiedz", "popraw-termin"}
PULAPKI_MENTORA = {"zargon", "falszywe-uproszczenie", "przytakniecie", "nie-na-temat"}
FINAL = {"pliki", "www", "mistrz"}
PULAPKI = {"inna-kategoria", "zbyt-waskie", "forma-podrecznikowa", "prawda-nie-na-temat", "falsz", "odwrocone"}
OBSZARY = {"PR", "EN", "IM", "PC"}
PROGI = {"testDnia", "symulacja", "liczbaSymulacji", "obszar", "drill", "powtorzonaPomylka"}
# Znane pola (SCHEMA.md). Inne pola dają na razie tylko ostrzeżenie.
POLA_TERMIN = {"wymowa", "wymowaAkcent", "statusTlumaczenia", "zrodloTlumaczenia", "poCo", "jakDziala", "dlaczegoWazne", "wyobrazSobie",
               "przykladWypowiedzi", "poziomP", "wymaga", "poLudzku", "skadNazwa", "glebokosc", "zagmatwania", "mentor", "id", "en", "plEgzamin", "plPodrecznik", "plInne", "pulapka", "pulapkaOpis", "kategoria", "status", "poziom1", "poziom2",
               "poziom3", "warianty", "przyklady", "nieMylicZ", "egzamin", "powiazane", "sylabus", "zrodla", "mapa", "_plik"}
POLA_PYTANIE = {"id", "typ", "sylabus", "lekcja", "bloom", "trudnosc", "tresc", "zrodlo", "status", "opcje", "scenariusz", "pary",
                "wyjasnienie", "kategorie", "elementy", "tekst", "twierdzenia", "element", "poprawny", "dystraktory", "pretest", "_plik",
                "numer", "kodSP", "poprawnaLitera", "terminy", "zestaw", "skrajnosc", "atom", "mentor", "postac", "final", "sprawdzian", "czesc", "termin", "terminy", "poprawne", "wymagane", "wzorzec"}
POLA_LEKCJA = {"id", "modul", "modulNazwa", "temat", "lekcja", "dzien", "sylabus", "minuty", "cwiczenia", "zgadnij", "plik",
               "wprowadza", "wprowadzaListe", "wymaga", "cel", "zapas", "priorytet", "typowePytania", "wielkiObraz", "twierdzenia", "kontrolaAutora", "format"}
# FORMAT-KROTKI.md §2 – przykłady ogólne (jak w COBIT 5 Foundation), bez historii strażackiej.
ZAKAZ_PSP = re.compile(r"\b(PSP|OSP|JRG|straż\w*|strażak\w*|komend\w*|Syren\w*|dyżurn\w*|pożar\w*|Modrzew\w*|Zawilc\w*|Sikor\w*|Dudek|Dudk\w*|Wrzos\w*|Kaczmarek|Nowik|Pietrzak\w*)\b", re.I)
POLA_WEZEL = {"id", "nazwa", "en", "rodzic", "obszar", "opis", "kolejnosc"}
MODULY = ["IT0", "M0", "PR", "EN", "IM", "PC", "EX", "MT", "FN"]
TEZY = {"interpretacyjna", "krytyczna", "praktyczna", "porownawcza", "problemowa", "egzaminacyjna"}
SB_TYPY = {"wyjasnij", "przyklad", "wyobraz", "skrot", "dlaczego", "nie-mylic", "kontekst", "powiazanie", "kontrowersja", "uwaga", "ekspert", "sprawdz", "zrodlo"}
SYNTEZA = {"wniosek", "zapamietaj", "mapa", "wlasne-slowa", "rozwiazany", "zgadnij"}
SKROTY_ZNANE = {"ALTKOM", "COBIT", "PL", "EN", "NIE", "TAK", "LUB", "ORAZ", "PSP", "OSP", "JRG", "SK", "KW", "KM", "CPR", "A4", "OK"}
TERM_RE = re.compile(r"\[\[([a-z0-9][a-z0-9-]*)(?:\|[^\]]+)?\]\]")
FM_RE = re.compile(r"^---\n(.*?)\n---\n", re.S)


# ---------------------------------------------------------------- frontmatter (podzbiór YAML)
def parse_scalar(v):
    v = v.strip()
    if not v:
        return ""
    if v[0] in "\"'" and v[-1] == v[0]:
        return v[1:-1]
    if re.fullmatch(r"-?\d+", v):
        return int(v)
    return v


def _strip_comment(v):
    """Usuwa komentarz „ # …” poza cudzysłowami."""
    q = None
    for k, ch in enumerate(v):
        if q:
            if ch == q:
                q = None
        elif ch in "\"'":
            q = ch
        elif ch == "#" and (k == 0 or v[k - 1].isspace()):
            return v[:k].rstrip()
    return v.rstrip()


def _flow_to_json(v):
    """YAML flow ({ a: "x", b: null } / [a, b]) → JSON: dopisuje cudzysłowy do kluczy i gołych wartości."""
    out, k, n = [], 0, len(v)
    while k < n:
        ch = v[k]
        if ch == '"':
            m = k + 1
            while m < n and v[m] != '"':
                m += 2 if v[m] == "\\" else 1
            out.append(v[k:m + 1]); k = m + 1
        elif ch in "{}[],:":
            out.append(ch); k += 1
        elif ch.isspace():
            k += 1
        else:
            m = k
            while m < n and v[m] not in "{}[],:" and not (v[m] == ":" ):
                m += 1
            tok = v[k:m].strip()
            if tok in ("null", "true", "false") or re.fullmatch(r"-?\d+(\.\d+)?", tok):
                out.append(tok)
            else:
                out.append(json.dumps(tok, ensure_ascii=False))
            k = m
    return "".join(out)


def parse_value(v):
    v = _strip_comment(v).strip()
    if not v:
        return ""
    if v[0] in "[{":
        for cand in (v, _flow_to_json(v)):
            try:
                return json.loads(cand)
            except ValueError:
                pass
        if v[0] == "[" and v.endswith("]"):
            return [parse_scalar(x) for x in v[1:-1].split(",") if x.strip()]
        return v
    return parse_scalar(v)


def parse_frontmatter(text):
    """Podzbiór YAML: klucz: wartość, listy [a, b] i wielowierszowe „- …”, obiekty { k: v } albo JSON w jednej linii, komentarze #."""
    meta, key = {}, None
    for line in text.split("\n"):
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        m = re.match(r"^([A-Za-z_][\w]*):\s*(.*)$", line)
        if m:
            key, val = m.group(1), _strip_comment(m.group(2))
            meta[key] = parse_value(val) if val.strip() else []
            if not val.strip():
                meta[key] = None  # wartość w kolejnych liniach (lista albo mapa)
            continue
        li = re.match(r"^\s+-\s+(.*)$", line)
        if li and key:
            if not isinstance(meta.get(key), list):
                meta[key] = []
            meta[key].append(parse_value(li.group(1)))
            continue
        mp = re.match(r"^\s+([A-Za-z_][\w-]*):\s*(.*)$", line)
        if mp and key:
            if not isinstance(meta.get(key), dict):
                meta[key] = {}
            meta[key][mp.group(1)] = parse_value(mp.group(2))
    for k2, v2 in list(meta.items()):
        if v2 is None:
            meta[k2] = ""
    return meta


# ---------------------------------------------------------------- budowa paczki
class Problems:
    def __init__(self):
        self.items = []

    def err(self, where, msg):
        self.items.append({"poziom": "blad", "gdzie": where, "opis": msg})

    def warn(self, where, msg):
        self.items.append({"poziom": "ostrzezenie", "gdzie": where, "opis": msg})


def load_json(path, P):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception as e:  # noqa: BLE001
        P.err(str(path.relative_to(APP)), f"Niepoprawny JSON: {e}")
        return None


def rel(p):
    return str(p.relative_to(APP)).replace(os.sep, "/")


def build():
    P = Problems()

    syllabus = load_json(CONTENT / "syllabus.json", P) if (CONTENT / "syllabus.json").exists() else None
    traps = load_json(CONTENT / "terminology-traps.json", P) if (CONTENT / "terminology-traps.json").exists() else None
    mapa = load_json(CONTENT / "mapa-cobit.json", P) if (CONTENT / "mapa-cobit.json").exists() else None
    node_ids = validate_map(mapa, P)

    # Terminy
    terms = []
    for f in sorted((CONTENT / "terms").glob("*.json")) if (CONTENT / "terms").exists() else []:
        t = load_json(f, P)
        if isinstance(t, dict):
            t["_plik"] = rel(f)
            terms.append(t)
    term_ids = {t.get("id") for t in terms}

    # Pytania
    questions = []
    for f in sorted((CONTENT / "questions").glob("*.json")) if (CONTENT / "questions").exists() else []:
        d = load_json(f, P)
        arr = d.get("pytania") if isinstance(d, dict) else d
        if not isinstance(arr, list):
            P.err(rel(f), "Plik pytań musi mieć postać { \"pytania\": [...] }")
            continue
        for q in arr:
            if isinstance(q, dict):
                q["_plik"] = rel(f)
                questions.append(q)
    q_ids = {q.get("id") for q in questions}
    learning = load_json(CONTENT / "learning-guides.json", P)
    practice = load_json(CONTENT / "practice-tests.json", P)
    processes = load_json(CONTENT / "process-guide.json", P)
    if len(questions) > 400:
        P.err("content/questions", "Aktywna pula przekracza limit 400 pytań")
    required_topics = {t["kod"] for t in (syllabus or {}).get("tematy", []) if t["kod"][:2] in OBSZARY}
    covered_topics = {c for q in questions for c in q.get("sylabus", [])}
    for code in sorted(required_topics):
        if code not in covered_topics:
            P.err("content/questions", f"Brak pytania dla tematu {code}")
        guide = (learning or {}).get(code, {})
        if any(not guide.get(k) for k in ("zasada", "przyklad", "uwazaj", "zrodlo")):
            P.err("content/learning-guides.json", f"Niepełne omówienie {code}")
    for test in (practice or {}).get("zestawy", []):
        ids = test.get("pytania", [])
        if not ids or len(ids) != len(set(ids)) or not set(ids) <= q_ids:
            P.err("content/practice-tests.json", f"Pusty zestaw, powtórzenie lub brak pytania: {test.get('id')}")

    # Lekcje
    lessons = []
    bodies = {}
    for f in sorted((CONTENT / "lessons").rglob("*.md")) if (CONTENT / "lessons").exists() else []:
        text = f.read_text(encoding="utf-8").replace("\r", "")
        m = FM_RE.match(text)
        where = rel(f)
        if not m:
            P.err(where, "Brak frontmatter (blok --- … --- na początku pliku)")
            continue
        meta = parse_frontmatter(m.group(1))
        meta["plik"] = rel(f)
        for k in ("sylabus", "cwiczenia", "zgadnij", "wprowadza", "wprowadzaListe", "wymaga", "zapas"):
            if isinstance(meta.get(k), str):
                meta[k] = [meta[k]] if meta[k] else []
            meta.setdefault(k, [])
        lessons.append(meta)
        bodies[meta.get("id")] = text[m.end():]
        validate_lesson(where, meta, text[m.end():], term_ids, q_ids, P, node_ids, questions)

    # §17.13 – pliki modułów; §17.9 – rejestr źródeł; §16.5 – ściągi dnia (Markdown A4).
    modules = []
    for f in sorted((CONTENT / "modules").glob("*.md")) if (CONTENT / "modules").exists() else []:
        text = f.read_text(encoding="utf-8").replace("\r", "")
        m = FM_RE.match(text)
        if not m:
            P.err(rel(f), "Brak frontmatter modułu"); continue
        meta = parse_frontmatter(m.group(1))
        meta["tresc"] = text[m.end():]
        meta["plik"] = rel(f)
        if meta.get("modul") not in MODULY:
            P.err(rel(f), f"Nieznany moduł „{meta.get('modul')}”")
        for c in (meta.get("kryteria") or {}):
            if c not in CZESCI:
                P.err(rel(f), f"kryteria: nieznana część „{c}”")
        modules.append(meta)
    zrodla = load_json(CONTENT / "zrodla.json", P) if (CONTENT / "zrodla.json").exists() else None
    sciagi = {f.stem: f.read_text(encoding="utf-8") for f in sorted((CONTENT / "sciagi").glob("*.md"))} if (CONTENT / "sciagi").exists() else {}
    # §17.16 – wzorce produkcyjne walidujemy osobno (nie trafiają do kursu).
    W = CONTENT / "_wzorce"
    if W.exists():
        PW = Problems()
        for f in sorted(W.glob("*.md")):
            text = f.read_text(encoding="utf-8").replace("\r", "")
            m = FM_RE.match(text)
            if not m:
                continue
            meta = parse_frontmatter(m.group(1))
            if meta.get("temat"):
                validate_lesson(rel(f), meta, text[m.end():], term_ids, q_ids, PW, node_ids, questions)
        for f in sorted(W.glob("*.json")):
            t = load_json(f, PW)
            if isinstance(t, dict) and t.get("plEgzamin"):
                t = {k: v for k, v in t.items() if not k.startswith("_")}
                t["_plik"] = f"terms/{t.get('id')}.json"
                validate_term(t, term_ids, set(), PW, node_ids)
        for it in PW.items:
            if it["poziom"] == "blad" and "nie istnieje" not in it["opis"]:
                P.warn(it["gdzie"], "[wzorzec] " + it["opis"])

    sample = None
    sp = CONTENT / "sample-paper-1.local.json"
    if sp.exists():
        d = load_json(sp, P)
        sample = d.get("pytania") if isinstance(d, dict) else d

    syl_codes = {t.get("kod") for t in (syllabus or {}).get("tematy", [])}
    validate_syllabus(syllabus, P)
    for t in terms:
        validate_term(t, term_ids, syl_codes, P, node_ids)
    seen = set()
    for q in questions:
        validate_question(q, term_ids, syl_codes, seen, P, node_ids)
    # §17.12 – sprawdzian modułu: każda część ≥ 2 pytania.
    spr = {}
    for q in questions:
        if q.get("sprawdzian"):
            spr.setdefault(q["sprawdzian"], {}).setdefault(q.get("czesc"), 0)
            spr[q["sprawdzian"]][q.get("czesc")] += 1
    for mod, parts in spr.items():
        for c in sorted(CZESCI):
            if parts.get(c, 0) < 2:
                P.warn(f"sprawdzian {mod}", f"Część „{c}” ma {parts.get(c, 0)} pytań (zalecane ≥ 2, §17.12)")
    # §16.6 – styl pytań jak na egzaminie: poprawna nie zawsze najdłuższa, równy rozkład liter, „NIE” wersalikami.
    for q in questions:
        if str(q.get("_plik", "")).endswith("-krotkie.json"):
            hit = ZAKAZ_PSP.search(json.dumps(q, ensure_ascii=False))
            if hit:
                P.err(f"{q.get('_plik')} → {q.get('id')}", f"Przykład strażacki: „{hit.group(0)}” (FORMAT-KROTKI §2)")
    by_file = {}
    for q in questions:
        if q.get("typ") in ("egzamin", "studium") and len(q.get("opcje") or []) == 4:
            by_file.setdefault(q.get("_plik"), []).append(q)
    for f, qs in by_file.items():
        if len(qs) >= 8:
            longest = sum(1 for q in qs if (lambda ls, c: c >= 0 and ls[c] == max(ls) and ls.count(max(ls)) == 1)(
                [len(o.get("tekst") or "") for o in q["opcje"]], next((i for i, o in enumerate(q["opcje"]) if o.get("poprawna")), -1)))
            if longest / len(qs) > 0.35:
                P.warn(f, f"Poprawna odpowiedź jest najdłuższa w {round(100 * longest / len(qs))}% pytań (cel ≤ 35%, §16.6)")
        if len(qs) >= 12:
            pos = [next((i for i, o in enumerate(q["opcje"]) if o.get("poprawna")), -1) for q in qs]
            share = [pos.count(i) / len(qs) for i in range(4)]
            if max(share) > 0.35 or min(share) < 0.15:
                P.warn(f, "Nierówny rozkład liter poprawnych odpowiedzi: " + " ".join(f"{'ABCD'[i]} {round(100 * x)}%" for i, x in enumerate(share)) + " (§16.6)")
        for q in qs:
            t = q.get("tresc") or ""
            if re.search(r"\b(któr\w*|co|czego|kto)\b[^?]*\bnie\b[^?]*\?", t, re.I) and not re.search(r"\bNIE\b", t):
                P.warn(f"{f} → {q.get('id')}", "Pytanie z przeczeniem – „NIE” wersalikami, jak na egzaminie (§16.6)")
    # §12.1/§12.3 – każdy liść mapy ma hasło; każdy atom ma ≥ 1 pytanie skrajne.
    if isinstance(mapa, dict):
        nodes = [n for n in mapa.get("wezly", []) if isinstance(n, dict)]
        parents = {n.get("rodzic") for n in nodes}
        by_map = {}
        for t in terms:
            if t.get("mapa"):
                by_map.setdefault(t["mapa"], []).append(t.get("id"))
        extreme = {q.get("atom") for q in questions if q.get("skrajnosc")}
        for n in nodes:
            if n.get("id") in parents:
                continue
            ids = by_map.get(n.get("id"), [])
            if not ids:
                P.warn("content/mapa-cobit.json", f"Liść „{n.get('id')}” nie ma hasła w terms/ (§12.1)")
            elif not (practice or {}).get("limitPytan") and not any(i in extreme for i in ids):
                P.warn(f"terms/{ids[0]}.json", "Atom bez pytania skrajnego (§12.3: skrajnosc: true, atom)")
    for tr in (traps or {}).get("pulapki", []):
        if tr.get("termId") and tr["termId"] not in term_ids:
            P.warn("content/terminology-traps.json", f"termId „{tr['termId']}” nie ma pliku w terms/")

    order = {m: i for i, m in enumerate(MODULY)}
    # Naturalne sortowanie numerów lekcji: 1.2 < 1.10.
    def nat(v):
        return [int(x) if x.isdigit() else x for x in re.split(r"(\d+)", str(v or ""))]
    lessons.sort(key=lambda l: (order.get(str(l.get("modul")), 99), nat(l.get("lekcja")), l["plik"]))
    validate_course(lessons, bodies, nat, P, {t.get("id"): t for t in terms})
    # §18.1 – budżet dnia: slajdy × 1,4 min ≤ 150 min lekcji (MT i FN poza budżetem).
    per_day = {}
    for l in lessons:
        if isinstance(l.get("dzien"), int) and l.get("modul") not in ("MT",):
            n = len([x for x in re.split(r"\n---\n", bodies.get(l.get("id"), "")) if x.strip()])
            per_day[l["dzien"]] = per_day.get(l["dzien"], 0) + n
    for d, n in sorted(per_day.items()):
        if n * 1.4 > 150:
            P.warn(f"dzień {d}", f"{n} slajdów ≈ {round(n * 1.4)} min lekcji – więcej niż budżet 150 min (§18.1)")
    check_ui_jargon(P)

    for t in terms:
        t.pop("_plik", None)
    return {
        "lekcje": lessons,
        "terminy": terms,
        "pytania": questions,
        "nauka": learning,
        "testy": practice,
        "procesy": processes,
        "sylabus": syllabus,
        "pulapki": traps,
        "mapa": mapa,
        "samplePaper": sample,
        "moduly": modules,
        "zrodla": (zrodla or {}).get("zrodla") if isinstance(zrodla, dict) else None,
        "sciagi": sciagi,
        "problemy": P.items,
    }


# ---------------------------------------------------------------- walidacja
WORD_RE = re.compile(r"[\wąćęłńóśźżĄĆĘŁŃÓŚŹŻ][\w\-ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*")


def plain_sentences(body):
    """Zdania tekstu autorskiego (bez :::zrodlo, komentarzy, kodu i tabel) – do kontroli prostego języka (§11.5)."""
    t = re.sub(r"^:::zrodlo.*?$", "", body, flags=re.M)
    t = re.sub(r"<!--.*?-->", "", t, flags=re.S)
    t = re.sub(r"```.*?```", "", t, flags=re.S)
    t = re.sub(r"^\s*\|.*$", "", t, flags=re.M)
    t = re.sub(r"^(---|\+\+\+|\?\?\?|:::.*)\s*$", "", t, flags=re.M)
    # Pola bloków (twierdzenie:, poLudzku:, sprawdz: …, pytanie:, odpowiedz:) to osobne zdania.
    t = re.sub(r"^\s*([a-zA-Z]\w*):\s+", "\n\n", t, flags=re.M)
    # Szczeble :::progresja („0: …”, „1: …”) to osobne przykłady, nie jedno zdanie.
    t = re.sub(r"^\s*\d+:\s+", "\n\n", t, flags=re.M)
    t = re.sub(r"\[\[[^\]|]+\|([^\]]+)\]\]", r"\1", t)
    t = re.sub(r"\[\[([^\]]+)\]\]", r"\1", t)
    t = re.sub(r"[*_#>`]", "", t)
    out = []
    for para in re.split(r"\n\s*\n|\n\s*[-*]\s+|\n\s*\d+\.\s+|\n#", t):
        para = " ".join(para.split())
        for sent in re.split(r"(?<=[.!?…])\s+(?=[A-ZĄĆĘŁŃÓŚŹŻ„\"(])", para):
            if sent.strip():
                out.append(sent.strip())
    return out


# §14.3 – słowa żargonu, których nie pokazujemy w tekstach interfejsu. Sprawdzamy tylko widoczny tekst:
# napisy w JS (bez wstawek ${…} i znaczników HTML) oraz tekst HTML w index.html – nie identyfikatory ani klucze.
ZARGON = [r"dryl\w*", r"drill\w*", r"leitner\w*", r"SRS", r"eksport\w*", r"import\w*", r"JSON", r"bundle", r"localStorage", r"cache",
          r"prezentacj\w*", r"pretest\w*", r"symulacj\w*"]
ZARGON_RE = re.compile(r"(?<![\w!])(" + "|".join(ZARGON) + r")(?!\w)", re.I)


def js_strings(src):
    """Zwraca [(nr_linii, tekst)] dla literałów napisów w JS (bez komentarzy i wstawek ${…})."""
    out, i, n, line = [], 0, len(src), 1
    stack = []  # 'tpl' albo '{' dla zagnieżdżeń w ${…}
    buf, start, quote = None, 0, None
    def flush():
        if buf is not None and buf:
            out.append((start, "".join(buf)))
    while i < n:
        c = src[i]
        if c == "\n":
            line += 1
        if quote:  # wewnątrz napisu
            if c == "\\":
                if buf is not None and i + 1 < n:
                    buf.append(src[i + 1])
                if i + 1 < n and src[i + 1] == "\n":
                    line += 1
                i += 2
                continue
            if quote == "`" and c == "$" and i + 1 < n and src[i + 1] == "{":
                flush(); buf = None
                stack.append("tpl"); quote = None; i += 2
                continue
            if c == quote:
                flush(); buf = None; quote = None; i += 1
                continue
            buf.append(c); i += 1
            continue
        # kod
        if c == "/" and i + 1 < n and src[i + 1] == "/":
            while i < n and src[i] != "\n":
                i += 1
            continue
        if c == "/" and i + 1 < n and src[i + 1] == "*":
            k = src.find("*/", i + 2)
            k = n if k < 0 else k + 2
            line += src.count("\n", i, k); i = k
            continue
        if c == "/":  # literał wyrażenia regularnego (po operatorze / nawiasie) – pomijamy
            prev = src[:i].rstrip()[-1:] if src[:i].strip() else "("
            if prev in "(,=:[!&|?{};+" or src[:i].rstrip().endswith("return"):
                k, cls = i + 1, False
                while k < n and src[k] != "\n":
                    if src[k] == "\\":
                        k += 2; continue
                    if src[k] == "[": cls = True
                    elif src[k] == "]": cls = False
                    elif src[k] == "/" and not cls: break
                    k += 1
                i = k + 1
                continue
        if c in "'\"`":
            quote, buf, start = c, [], line; i += 1
            continue
        if c == "{" and stack:
            stack.append("{")
        elif c == "}" and stack:
            top = stack.pop()
            if top == "tpl":
                quote, buf, start = "`", [], line; i += 1
                continue
        i += 1
    return out


def check_ui_jargon(P):
    items = []
    html = (APP / "index.html").read_text(encoding="utf-8")
    html = re.sub(r"<script.*?</script>|<style.*?</style>|<!--.*?-->", lambda m: "\n" * m.group(0).count("\n"), html, flags=re.S)
    for n, ln in enumerate(html.split("\n"), 1):
        items.append(("index.html", n, re.sub(r"<[^>]*>", " ", ln)))
    for f in sorted((APP / "js").rglob("*.js")):
        for n, t in js_strings(f.read_text(encoding="utf-8")):
            vis = re.sub(r"<[^>]*>|<[^>]*$|^[^<]*>|#/[\w/.-]+", " ", t)
            if not re.search(r"\s", vis.strip()):
                continue  # pojedyncze słowo bez spacji = klucz, id, ścieżka
            items.append((str(f.relative_to(APP)), n, vis))
    for where, n, text in items:
        for m in ZARGON_RE.finditer(text):
            P.warn(f"{where}:{n}", f"Żargon w tekście interfejsu (§14.3): „{m.group(0)}”")


def validate_course(lessons, bodies, nat, P, terms_by_id=None):
    terms_by_id = terms_by_id or {}
    """§11: kolejność bez skoków (wprowadza/wymaga), limity pojęć, prosty język, cel/zapas/priorytet. Same ostrzeżenia."""
    order = {m: i for i, m in enumerate(MODULY)}
    course = sorted(lessons, key=lambda l: (l.get("dzien") if isinstance(l.get("dzien"), int) else 99,
                                             order.get(str(l.get("modul")), 99), nat(l.get("lekcja")), l["plik"]))
    pos = {l.get("id"): i for i, l in enumerate(course)}
    intro_at = {}
    for i, l in enumerate(course):
        for tid in (l.get("wprowadza") or []) + (l.get("wprowadzaListe") or []):
            intro_at.setdefault(tid, i)
    first_use = {}
    seen_acr = set()
    lower_words = {w for b in bodies.values() for w in re.findall(r"\b[a-ząćęłńóśźż]{2,}\b", b)}
    for i, l in enumerate(course):
        where = l["plik"]
        body = bodies.get(l.get("id"), "")
        used = []
        for m in TERM_RE.finditer(body):
            if m.group(1) not in used:
                used.append(m.group(1))
        # Hasło użyte, zanim zostało wprowadzone (wyjątek: zapowiedź [[id|…]] w zdaniu „poznasz…”).
        for m in TERM_RE.finditer(body):
            tid = m.group(1)
            if tid in intro_at and intro_at[tid] > i:
                ctx = body[max(0, m.start() - 120): m.end() + 40].lower()
                if "|" in m.group(0) and re.search(r"pozna(sz|my)|w lekcji|później|dalej", ctx):
                    continue
                P.warn(where, f"Hasło [[{tid}]] użyte przed wprowadzeniem (wprowadza je {course[intro_at[tid]]['plik']})")
                break
        lista = l.get("wprowadzaListe") or []
        # §11.1 „lista jako jedno pojęcie”: elementy listy nie wchodzą do limitu 4, ale każdy musi mieć przypis w lekcji (§17.14 pkt 9).
        for tid in lista:
            if not re.search(r"\[\[" + re.escape(tid) + r"(\||\]\])", body):
                P.warn(where, f"wprowadzaListe: „{tid}” nie ma w lekcji przypisu [[{tid}]] (§11.1, §17.14 pkt 9)")
        new = l.get("wprowadza") or [t for t in used if t not in first_use and t not in lista]
        for t in used:
            first_use.setdefault(t, i)
        if len(new) > 4:
            P.warn(where, f"{len(new)} nowych pojęć w lekcji (limit 4, §11.1): {', '.join(new)}")
        for w in l.get("wymaga") or []:
            if w not in pos:
                P.warn(where, f"wymaga: lekcja „{w}” nie istnieje")
            elif pos[w] > i:
                P.warn(where, f"wymaga: lekcja „{w}” jest w kursie później")
        long = [s for s in plain_sentences(body) if len(WORD_RE.findall(s)) > 25]
        if long:
            ex = long[0] if len(long[0]) < 140 else long[0][:137] + "…"
            P.warn(where, f"{len(long)} zdań > 25 słów (§11.5 prosty język), np. „{ex}”")
        if not l.get("cel"):
            P.warn(where, "Brak cel (§11.5: 1–2 zdania „Potrafię…”)")
        # §17.14 – lista kontrolna autora (automatycznie, ostrzeżenia).
        slides = [x for x in re.split(r"\n---\n", body) if x.strip()]
        kinds = [(re.search(r"<!--\s*slajd:\s*([\w-]+)", x) or [None, "tresc"])[1] for x in slides]
        krotki = l.get("format") == "krotki"
        if krotki:
            # FORMAT-KROTKI.md: 3–8 slajdów, wniosek na końcu, bez przykładów strażackich (błąd), ≤ 60 słów na slajd.
            if not 3 <= len(slides) <= 8:
                P.warn(where, f"Krótka lekcja ma {len(slides)} slajdów (3–8, FORMAT-KROTKI §1)")
            if slides and "**Wniosek:**" not in slides[-1] and kinds[-1] not in ("wniosek", "zapamietaj"):
                P.warn(where, "Ostatni slajd krótkiej lekcji bez **Wniosek:** (FORMAT-KROTKI §5)")
            hit = ZAKAZ_PSP.search(body)
            if hit:
                P.err(where, f"Przykład strażacki w krótkiej lekcji: „{hit.group(0)}” (FORMAT-KROTKI §2)")
            for k, x in enumerate(slides, 1):
                vis = re.sub(r"^:::(wykladowca|sb|zrodlo)[^\n]*\n(?:.*\n)*?:::[ \t]*$", "", x, flags=re.M)
                vis = re.sub(r"<!--.*?-->", "", vis, flags=re.S)
                n = len(WORD_RE.findall(vis))
                if n > 70:
                    P.warn(where, f"Slajd {k}: {n} słów widocznego tekstu (≤ 60, FORMAT-KROTKI §1)")
        no_lect = sum(1 for x in slides if not re.search(r"^:::wykladowca", x, re.M))
        if slides and no_lect and not krotki:
            P.warn(where, f"{no_lect} z {len(slides)} slajdów bez :::wykladowca (§17.14 pkt 3)")
        no_concl = sum(1 for x, k in zip(slides, kinds) if k not in SYNTEZA and "**Wniosek:**" not in x)
        if no_concl and not krotki:
            P.warn(where, f"{no_concl} slajdów bez linii **Wniosek:** (§17.14 pkt 5)")
        for tid in l.get("wprowadza") or []:
            t = terms_by_id.get(tid)
            if t is not None and not ((t.get("przyklady") or {}).get("zycie")):
                P.warn(where, f"Pojęcie „{tid}” z wprowadza nie ma przykładu zycie (§17.14 pkt 4)")
        plain = re.sub(r"\[\[[^\]|]+\|([^\]]+)\]\]", r"[[\1]]", body)
        plain = re.sub(r"<!--.*?-->", "", plain, flags=re.S)
        # Blok :::zrodlo (do najbliższej linii „:::”) – bez re.S, żeby nie zjadać reszty lekcji.
        plain = re.sub(r"^:::zrodlo[^\n]*\n(?:.*\n)*?:::[ \t]*$", "", plain, flags=re.M)
        plain = re.sub(r"^:::zrodlo[^\n]*$", "", plain, flags=re.M)
        missing = []
        for am in re.finditer(r"(?<![\w\[])([A-Z][A-Z0-9]{1,7})(?![\w\]])", plain):
            a = am.group(1)
            if a in SKROTY_ZNANE or a in seen_acr or re.fullmatch(r"[A-Z]\d+", a) or a in {"IN", "ON", "OF", "TO", "NA", "DO", "ZA", "OD", "ZE", "WE", "AND", "THE"}:
                continue
            # Zwykłe słowo pisane wersalikami dla wyróżnienia (ZAWSZE, DANE, CEL) – występuje w kursie także małymi literami.
            if a.lower() in lower_words:
                continue
            seen_acr.add(a)
            ctx = plain[am.end(): am.end() + 60]
            if not re.match(r"\s*(\(|–|—|-|,?\s*czyli|:|\s+to\s)", ctx) and not re.search(r"\(\s*" + a + r"\s*\)", plain[max(0, am.start() - 5): am.end() + 2]):
                missing.append(a)
        if missing:
            P.warn(where, f"Skróty bez rozwinięcia przy pierwszym użyciu: {', '.join(missing[:6])} (§17.14 pkt 1)")
        if l.get("cwiczenia") and len(l.get("zapas") or []) < (1 if l.get("format") == "krotki" else 2):
            P.warn(where, "Brak zapas (§11.3: ≥ 2 pytania zapasowe do pętli naprawczej)")
        tp = l.get("typowePytania")
        if tp is not None and (not isinstance(tp, list) or any(not isinstance(x, dict) or not x.get("pytanie") or not x.get("odpowiedz") for x in tp)):
            P.err(where, "typowePytania: lista obiektów {pytanie, odpowiedz} jako JSON w jednej linii (§13.2)")
        wo = l.get("wielkiObraz")
        if wo not in (None, "") and wo not in range(1, 8):
            P.err(where, f"wielkiObraz musi być liczbą 1–7 ({wo!r})")
        if l.get("priorytet") in (None, ""):
            P.warn(where, "Brak priorytet (§11.9: 1 rdzeń, 2 ważne, 3 pogłębienie)")
        elif l.get("priorytet") not in (1, 2, 3):
            P.err(where, f"priorytet musi być 1, 2 albo 3 ({l.get('priorytet')!r})")


def check_zrodla(where, zr, P):
    if zr is None:
        return
    if isinstance(zr, dict):
        zr = [zr]
    for z in zr:
        if not isinstance(z, dict) or z.get("doc") not in DOCS:
            P.err(where, f"Źródło z nieznanym „doc”: {z!r}")
        elif z.get("doc") == "WWW" and not z.get("url"):
            P.warn(where, "Źródło WWW bez pola url")


def unknown(where, obj, known, P):
    for k in obj:
        if k not in known:
            P.warn(where, f"Nieznane pole „{k}” (nie ma go w SCHEMA.md)")


def validate_map(mapa, P):
    """Zwraca zbiór id węzłów albo None, gdy pliku jeszcze nie ma."""
    if mapa is None:
        return None
    where = "content/mapa-cobit.json"
    nodes = mapa.get("wezly") if isinstance(mapa, dict) else None
    if not isinstance(nodes, list):
        P.err(where, "Brak listy „wezly”")
        return set()
    ids = {}
    for n in nodes:
        nid = n.get("id")
        if not nid or not re.fullmatch(r"[a-z0-9][a-z0-9-]*", str(nid)):
            P.err(where, f"Węzeł z niepoprawnym id: {n!r}"[:160])
            continue
        if nid in ids:
            P.err(where, f"Zdublowany węzeł „{nid}”")
        ids[nid] = n
        unknown(f"{where} → {nid}", n, POLA_WEZEL, P)
        if not n.get("nazwa"):
            P.err(where, f"Węzeł „{nid}” bez nazwy")
        if n.get("obszar") not in OBSZARY:
            P.err(where, f"Węzeł „{nid}”: obszar musi być jednym z PR/EN/IM/PC")
        if "kolejnosc" in n and not isinstance(n["kolejnosc"], (int, float)):
            P.err(where, f"Węzeł „{nid}”: kolejnosc musi być liczbą")
    for nid, n in ids.items():
        r = n.get("rodzic")
        if r is not None and r not in ids:
            P.err(where, f"Węzeł „{nid}”: rodzic „{r}” nie istnieje")
        seen, cur = set(), nid
        while cur is not None and cur in ids:
            if cur in seen:
                P.err(where, f"Cykl w drzewie przy węźle „{nid}”")
                break
            seen.add(cur)
            cur = ids[cur].get("rodzic")
    return set(ids)


def validate_syllabus(syl, P):
    if not syl:
        return
    where = "content/syllabus.json"
    eg = syl.get("egzamin") or {}
    w = eg.get("wagi")
    if w is None:
        P.warn(where, "Brak egzamin.wagi (METODYKA §5) – symulator użyje proporcji domyślnych")
    else:
        if set(w) - OBSZARY:
            P.err(where, f"egzamin.wagi: nieznane obszary {sorted(set(w) - OBSZARY)}")
        if sum(v for v in w.values() if isinstance(v, (int, float))) != 50:
            P.warn(where, "egzamin.wagi nie sumują się do 50")
    pr = eg.get("progi")
    if pr is None:
        P.warn(where, "Brak egzamin.progi (METODYKA §7) – UI użyje wartości domyślnych")
    else:
        for k, v in pr.items():
            if k not in PROGI:
                P.warn(where, f"egzamin.progi: nieznany próg „{k}”")
            elif not isinstance(v, (int, float)):
                P.err(where, f"egzamin.progi.{k} musi być liczbą")
    rd = syl.get("rdzen")
    if rd is not None and (not isinstance(rd, list) or not all(isinstance(x, str) for x in rd)):
        P.err(where, "rdzen musi być listą id haseł (§11.0)")
    pj = syl.get("projekt")
    if pj is not None:
        wz = pj.get("wzorzec") if isinstance(pj, dict) else None
        if not isinstance(wz, list) or len(wz) != 8:
            P.warn(where, "projekt.wzorzec ma być listą 8 odpowiedzi (Markdown) – po jednej na pole projektu końcowego (§11.8)")
    for d in syl.get("dni") or []:
        pt = d.get("potrafie")
        if pt is not None and (not isinstance(pt, list) or not all(isinstance(x, str) for x in pt)):
            P.err(where, f"dni[{d.get('dzien')}].potrafie musi być listą zdań „Potrafię…”")
        nr = d.get("dzien")
        if not isinstance(nr, int) or not 0 <= nr <= 20:
            P.err(where, f"dni[]: dzien musi być liczbą 0–20 ({nr!r})")
        if "poEgzaminie" in d and not isinstance(d["poEgzaminie"], bool):
            P.err(where, f"dni[{nr}].poEgzaminie: true/false (§18.2 – ścieżka po egzaminie, nie liczy się do „Dzień N z …”)")
        # §18.3 – ustawienia dnia.
        for k, allowed in (("rusztowanie", {"pelny", "twoja-kolej", "zwiniety"}), ("podpowiedzi", {"widoczne", "ukryte"}),
                           ("wytlumacz", {"krotki", "pelny", None}), ("zrodla", {"objasnienia", "fragmenty", "bez-objasnien"})):
            if k in d and d[k] not in allowed:
                P.err(where, f"dni[{nr}].{k}: dozwolone {', '.join(sorted(str(x) for x in allowed))}")
        if "egzaminy" in d and (not isinstance(d["egzaminy"], list) or any(x not in ("proba-1", "proba-2", "sp1", "mistrzowski") for x in d["egzaminy"])):
            P.err(where, f"dni[{nr}].egzaminy: lista z proba-1 | proba-2 | sp1 | mistrzowski")
        pk = d.get("pustaKartka")
        if pk is not None and (not pk.get("polecenie") or not pk.get("wzorzec")):
            P.err(where, f"dni[{nr}].pustaKartka wymaga pól polecenie i wzorzec")


def validate_term(t, term_ids, syl_codes, P, node_ids=None):
    where = t.get("_plik", f"terms/{t.get('id')}")
    unknown(where, t, POLA_TERMIN, P)
    if t.get("mapa") and node_ids is not None and t["mapa"] not in node_ids:
        P.err(where, f"Pole mapa: węzeł „{t['mapa']}” nie istnieje w mapa-cobit.json")
    tid = t.get("id")
    if not tid:
        P.err(where, "Brak pola id")
    elif not where.endswith(f"/{tid}.json"):
        P.err(where, f"id „{tid}” różni się od nazwy pliku")
    for k in ("plEgzamin", "poziom1"):
        if not t.get(k):
            P.err(where, f"Brak pola {k}")
    if t.get("status") not in STATUS:
        P.err(where, f"Nieznany status „{t.get('status')}”")
    if t.get("kategoria") and t["kategoria"] not in KATEGORIE:
        P.err(where, f"Nieznana kategoria „{t['kategoria']}”")
    if t.get("pulapka") and not t.get("plPodrecznik") and not t.get("en"):
        P.warn(where, "Pułapka bez nazwy z podręcznika ani EN")
    for k in (t.get("przyklady") or {}):
        if k not in KONTEKSTY:
            P.err(where, f"Nieznany kontekst przykładu „{k}”")
    for n in t.get("nieMylicZ") or []:
        if isinstance(n, str):
            if n not in term_ids:
                P.warn(where, f"nieMylicZ: hasło „{n}” nie istnieje")
            continue
        if not isinstance(n, dict) or not n.get("termin") or not n.get("roznica"):
            P.err(where, "Element nieMylicZ musi mieć termin i roznica")
    for r in t.get("powiazane") or []:
        if r not in term_ids:
            P.warn(where, f"Powiązane „{r}” nie ma jeszcze hasła")
    for c in t.get("sylabus") or []:
        if syl_codes and c not in syl_codes:
            P.warn(where, f"Kod sylabusa „{c}” nie występuje w syllabus.json")
    check_zrodla(where, t.get("zrodla"), P)
    # §10 – tryb laika: zdanie „po ludzku” (wymagane, na razie ostrzeżenie).
    pl = t.get("poLudzku")
    if not pl:
        P.warn(where, "Brak pola poLudzku (§10: jedno zdanie po ludzku, do ~20 słów)")
    elif not isinstance(pl, str):
        P.warn(where, "Pole poLudzku musi być tekstem")
    elif len(pl.split()) > 30:
        P.warn(where, f"poLudzku ma {len(pl.split())} słów – ma być jedno krótkie zdanie (do ~20)")
    if t.get("skadNazwa") is not None and not isinstance(t.get("skadNazwa"), str):
        P.warn(where, "Pole skadNazwa musi być tekstem")
    # §17.4 – karta terminologiczna; §17.14 pkt 8 – brakujące pola to ostrzeżenia.
    for k in ("wymowa", "statusTlumaczenia", "przykladWypowiedzi"):
        if not t.get(k):
            P.warn(where, f"Brak {k} (§17.4)")
    st = t.get("statusTlumaczenia")
    if st is not None and st not in STATUS_TLUM:
        P.err(where, f"statusTlumaczenia musi być A, B, C albo D ({st!r})")
    zt = t.get("zrodloTlumaczenia")
    if zt is not None:
        if not isinstance(zt, dict) or set(zt) - {"wydawcaEgzaminu", "podrecznik", "kurs", "uwaga"}:
            P.err(where, "zrodloTlumaczenia: obiekt z kluczami wydawcaEgzaminu, podrecznik, kurs, uwaga")
        elif st in ("C", "D") and not zt.get("uwaga"):
            P.err(where, "zrodloTlumaczenia.uwaga jest wymagana przy statusTlumaczenia C/D")
    elif st in ("C", "D"):
        P.err(where, "statusTlumaczenia C/D wymaga zrodloTlumaczenia z polem uwaga")
    if t.get("poziomP") is not None and t["poziomP"] not in POZIOMY_P:
        P.err(where, f"poziomP musi być jednym z P0–P3 ({t['poziomP']!r})")
    for r in t.get("wymaga") or []:
        if r not in term_ids:
            P.warn(where, f"wymaga: hasło „{r}” nie istnieje")
    # §12 – drabina głębokości, zagmatwania, mentor.
    gl = t.get("glebokosc")
    if gl is None:
        P.warn(where, "Brak glebokosc (§12.2: prosty / zaawansowany / skrajny)")
    elif not isinstance(gl, dict) or any(not isinstance(gl.get(k), str) or not gl.get(k).strip() for k in ("prosty", "zaawansowany", "skrajny")):
        P.err(where, "glebokosc wymaga trzech tekstów: prosty, zaawansowany, skrajny")
    elif "**Rozstrzygnięcie:**" not in gl["skrajny"]:
        P.warn(where, "glebokosc.skrajny bez „**Rozstrzygnięcie:**”")
    zg = t.get("zagmatwania")
    if zg is None:
        P.warn(where, "Brak zagmatwania (§12.3: 2–4 pary mit → prawda)")
    elif not isinstance(zg, list) or any(not isinstance(x, dict) or not x.get("mit") or not x.get("prawda") for x in zg):
        P.err(where, "zagmatwania: lista obiektów {mit, prawda}")
    elif not 2 <= len(zg) <= 4:
        P.warn(where, f"zagmatwania: zalecane 2–4 pary (jest {len(zg)})")
    mt = t.get("mentor")
    if mt is None:
        if t.get("kategoria") != "standard":
            P.warn(where, "Brak mentor (§12.4)")
    elif not isinstance(mt, dict) or any(not mt.get(k) for k in ("czestyBlad", "jakTlumaczyc", "pytanieKontrolne", "odpowiedzKontrolna")):
        P.err(where, "mentor wymaga: czestyBlad, jakTlumaczyc, pytanieKontrolne, odpowiedzKontrolna")
    for m in TERM_RE.finditer(json.dumps(t, ensure_ascii=False)):
        if m.group(1) not in term_ids:
            P.warn(where, f"Odnośnik [[{m.group(1)}]] nie ma hasła")


def validate_lesson(where, meta, body, term_ids, q_ids, P, node_ids=None, questions=()):
    unknown(where, meta, POLA_LEKCJA, P)
    qtyp = {q.get("id"): q.get("typ") for q in questions}
    for qid in meta.get("zgadnij", []):
        if qid not in q_ids:
            P.err(where, f"Pytanie „zgadnij” „{qid}” nie istnieje w questions/")
        elif qtyp.get(qid) not in ("rozpoznanie", "egzamin"):
            P.warn(where, f"Pytanie „zgadnij” „{qid}” powinno być typu rozpoznanie albo egzamin")
    if len(meta.get("zgadnij", [])) > 2:
        P.warn(where, "Krok „Zgadnij” powinien mieć 1–2 pytania")
    for m in re.finditer(r"^:::mapa\s*(\S*)", body, re.M):
        if not m.group(1):
            P.err(where, "Blok :::mapa bez id węzła")
        elif node_ids is not None and m.group(1) not in node_ids:
            P.err(where, f"Blok :::mapa: węzeł „{m.group(1)}” nie istnieje w mapa-cobit.json")
    # §16.2 – atom twierdzenia: twierdzenie, poLudzku, zycie, komenda, sprawdz (P|F :: zdanie :: dlaczego).
    for m in re.finditer(r"^:::atom\s*\n(.*?)^:::\s*$", body, re.M | re.S):
        f = dict(re.findall(r"^(twierdzenie|poLudzku|zycie|komenda|sprawdz):\s*(.+)$", m.group(1), re.M))
        for k in ("twierdzenie", "zycie"):
            if not f.get(k):
                P.err(where, f"Blok :::atom bez pola {k}:")
        for k in ("poLudzku", "komenda", "sprawdz"):
            if not f.get(k):
                P.warn(where, f"Blok :::atom bez pola {k}: (§16.2)")
        if f.get("sprawdz") and not re.match(r"^[PF]\s*::\s*\S.*::\s*\S", f["sprawdz"]):
            P.err(where, "Blok :::atom: sprawdz musi mieć format „P|F :: zdanie :: dlaczego”")
    # §17.5/§17.6/§17.7/§17.8 – nowe bloki.
    for m in re.finditer(r"^:::teza\s*(\S*)\s*\n(.*?)^:::\s*$", body, re.M | re.S):
        f = dict(re.findall(r"^(\w+):\s*(.+)$", m.group(2), re.M))
        if m.group(1) not in TEZY:
            P.err(where, f"Teza: typ musi być jednym z: {', '.join(sorted(TEZY))}")
        if not f.get("uzasadnienie") or not f.get("status"):
            P.err(where, "Teza bez uzasadnienie albo status (§17.8)")
        elif f["status"] not in STATUS:
            P.err(where, f"Teza: nieznany status „{f['status']}”")
        elif f["status"] == "oficjalne" and not f.get("zrodlo"):
            P.warn(where, "Teza oficjalne bez zrodlo: (§17.14 pkt 6)")
        if not f.get("teza"):
            P.err(where, "Teza bez pola teza:")
    for m in re.finditer(r"^:::sb\s*(\S*)", body, re.M):
        if m.group(1) not in SB_TYPY:
            P.err(where, f"Blok :::sb: typ „{m.group(1)}” spoza listy §17.7")
    for m in re.finditer(r"^:::pytanie-uczestnika\s*\n(.*?)^:::\s*$", body, re.M | re.S):
        if not re.search(r"^pytanie:\s*\S", m.group(1), re.M) or not re.search(r"^odpowiedz:\s*\S", m.group(1), re.M):
            P.err(where, "Blok :::pytanie-uczestnika wymaga pól pytanie: i odpowiedz:")
    for m in re.finditer(r"^:::progresja\s*\n(.*?)^:::\s*$", body, re.M | re.S):
        lv = {int(x) for x in re.findall(r"^([0-5]):\s*\S", m.group(1), re.M)}
        if lv != set(range(6)):
            P.warn(where, f"Blok :::progresja: brakuje poziomów {sorted(set(range(6)) - lv)} (0–5, §17.6)")
    for m in re.finditer(r"^:::glebiej\s*(\S*)", body, re.M):
        if not m.group(1):
            P.err(where, "Blok :::glebiej bez id hasła")
        elif m.group(1) not in term_ids:
            P.err(where, f"Blok :::glebiej: hasło „{m.group(1)}” nie istnieje")
    for m in re.finditer(r"^:::wlasne-slowa\s*\n(.*?)^:::\s*$", body, re.M | re.S):
        if not re.search(r"^\?\?\?\s*$", m.group(1), re.M):
            P.err(where, "Blok :::wlasne-slowa wymaga linii ??? oddzielającej polecenie od wzorca")
    # §10.2 – rozwiązany przykład: pytanie z 4 opcjami, potem ≥ 2 kroki rozdzielone +++.
    roz = list(re.finditer(r"^:::rozwiazany\s*\n(.*?)^:::\s*$", body, re.M | re.S))
    for m in roz:
        parts = re.split(r"^\+\+\+\s*$", m.group(1), flags=re.M)
        opts = re.findall(r"^\s*[-*]\s+\S", parts[0], re.M)
        if len(opts) != 4:
            P.warn(where, f"Blok :::rozwiazany: pytanie ma mieć listę z dokładnie 4 opcjami (jest {len(opts)})")
        steps = [x for x in parts[1:] if x.strip()]
        if len(steps) < 2:
            P.warn(where, "Blok :::rozwiazany: po pytaniu potrzebne są co najmniej 2 kroki rozdzielone linią +++")
    if re.search(r"<!--\s*slajd:\s*rozwiazany\s*-->", body) and not roz:
        P.warn(where, "Slajd rozwiazany bez bloku :::rozwiazany")
    lesson_q = set(meta.get("cwiczenia", [])) | {q.get("id") for q in questions if meta.get("id") and q.get("lekcja") == meta.get("id")}
    if any(qtyp.get(qid) in ("egzamin", "studium") for qid in lesson_q) and not roz and meta.get("format") != "krotki":
        P.warn(where, "Lekcja ma pytania egzamin/studium, ale nie ma slajdu rozwiazany (§10.2)")
    if len(roz) > 1:
        P.warn(where, "Lekcja powinna mieć jeden slajd rozwiazany")
    for k in ("id", "modul", "temat"):
        if not meta.get(k):
            P.err(where, f"Brak pola {k} we frontmatter")
    if meta.get("modul") and meta["modul"] not in MODULY:
        P.err(where, f"Nieznany moduł „{meta['modul']}”")
    if not isinstance(meta.get("dzien"), int):
        P.warn(where, "Brak pola dzien (1–5) – lekcja nie trafi do planu 5 dni")
    for qid in meta.get("cwiczenia", []):
        if qid not in q_ids:
            P.err(where, f"Ćwiczenie „{qid}” nie istnieje w questions/")
    for qid in meta.get("zapas", []):
        if qid not in q_ids:
            P.err(where, f"Pytanie zapasowe „{qid}” nie istnieje w questions/")
    for m in TERM_RE.finditer(body):
        if m.group(1) not in term_ids:
            P.err(where, f"Przypis [[{m.group(1)}]] nie ma hasła w terms/")
    for m in re.finditer(r"<!--\s*slajd:\s*([\w-]+)\s*-->", body):
        if m.group(1) not in SLAJDY:
            P.warn(where, f"Nieznany typ slajdu „{m.group(1)}”")
    depth = 0
    for line in body.split("\n"):
        s = line.strip()
        if s.startswith(":::") and s != ":::":
            name = s[3:].split()[0] if s[3:].split() else ""
            if name not in BLOKI:
                P.err(where, f"Nieznany blok „:::{name}”")
            if name == "kontekst":
                arg = s[3:].split()[1:2]
                if not arg or arg[0] not in KONTEKSTY:
                    P.err(where, f"Blok kontekst wymaga jednego z: {', '.join(sorted(KONTEKSTY))}")
            depth += 1
        elif s == ":::":
            depth -= 1
    if depth != 0:
        P.err(where, "Niezamknięty blok ::: (liczba otwarć ≠ liczba zamknięć)")


def validate_question(q, term_ids, syl_codes, seen, P, node_ids=None):
    where = f"{q.get('_plik')} → {q.get('id')}"
    unknown(where, q, POLA_PYTANIE, P)
    qid = q.get("id")
    if not qid:
        P.err(where, "Pytanie bez id")
    elif qid in seen:
        P.err(where, "Zdublowane id pytania")
    seen.add(qid)
    typ = q.get("typ")
    if typ not in TYPY:
        P.err(where, f"Nieznany typ „{typ}”")
        return
    if q.get("skrajnosc"):
        if typ not in ("egzamin", "studium", "rozpoznanie", "bledy", "klasyfikacja"):
            P.err(where, f"Pytanie skrajne nie może być typu „{typ}”")
        if not q.get("atom"):
            P.err(where, "Pytanie z skrajnosc: true wymaga pola atom")
        elif q["atom"] not in term_ids:
            P.err(where, f"atom „{q['atom']}” nie ma hasła w terms/")
    if q.get("mentor") and typ != "bledy":
        P.warn(where, "mentor: true („Popraw kolegę”) dotyczy typu bledy")
    if not q.get("tresc") and typ != "mapa":
        P.err(where, "Brak treści pytania")
    if q.get("zestaw") is not None and q["zestaw"] != "symulacja":
        P.err(where, f"Nieznany zestaw „{q['zestaw']}” (dozwolone: symulacja)")
    if q.get("status") and q["status"] not in STATUS:
        P.err(where, f"Nieznany status „{q['status']}”")
    for c in q.get("sylabus") or []:
        if syl_codes and c not in syl_codes:
            P.warn(where, f"Kod sylabusa „{c}” nie występuje w syllabus.json")
    check_zrodla(where, q.get("zrodlo"), P)
    if q.get("final") is not None:
        if q["final"] not in FINAL:
            P.err(where, f"final musi być jednym z: {', '.join(sorted(FINAL))}")
        if typ not in ("egzamin", "studium"):
            P.err(where, "Pytanie finałowe (final) musi być typu egzamin albo studium")
        if q["final"] == "www":
            zr = q.get("zrodlo") or []
            zr = zr if isinstance(zr, list) else [zr]
            if not any(isinstance(z, dict) and z.get("doc") == "WWW" for z in zr) or not any(isinstance(z, dict) and z.get("doc") == "FW-PL" and z.get("strona") for z in zr):
                P.warn(where, "final www: zrodlo potrzebuje wpisu WWW (inspiracja) i FW-PL ze stroną (§15.2)")
    if q.get("czesc") is not None and q["czesc"] not in CZESCI:
        P.err(where, f"czesc musi być jednym z: {', '.join(sorted(CZESCI))}")
    if q.get("sprawdzian") and not q.get("czesc"):
        P.warn(where, "Pytanie sprawdzianu modułu bez pola czesc (§17.12)")
    if typ == "nazwa-en":
        # §17.10 – podaj angielską nazwę; porównanie bez wielkości liter i myślników.
        if not q.get("tresc") or not isinstance(q.get("poprawne"), list) or not q.get("poprawne"):
            P.err(where, "nazwa-en wymaga tresc i listy poprawne (akceptowane odpowiedzi EN)")
        if q.get("termin") and q["termin"] not in term_ids:
            P.warn(where, f"nazwa-en: hasło „{q['termin']}” nie istnieje")
    for tid in q.get("terminy") or []:
        if tid not in term_ids:
            P.warn(where, f"terminy: hasło „{tid}” nie istnieje")
    if typ == "wypowiedz":
        # §17.10 – opis mechanizmu z wymaganymi terminami EN; wzorzec i samoocena.
        if not q.get("tresc") or not isinstance(q.get("wymagane"), list) or not q.get("wymagane") or not q.get("wzorzec"):
            P.err(where, "wypowiedz wymaga tresc, listy wymagane (terminy EN) i wzorzec")
    if typ == "popraw-termin":
        tw = q.get("twierdzenia") or []
        if len(tw) < 2:
            P.err(where, "popraw-termin wymaga ≥ 2 elementów twierdzenia")
        for i, t in enumerate(tw):
            if not isinstance(t, dict) or not t.get("tekst") or "poprawne" not in t or not t.get("wyjasnienie"):
                P.err(where, f"twierdzenia[{i}]: wymagane tekst, poprawne, wyjasnienie")
            elif t.get("poprawne") is False and not t.get("poprawka"):
                P.warn(where, f"twierdzenia[{i}]: błędne zdanie bez pola poprawka (poprawny termin)")
    if typ == "mentor":
        # §13.2 – „Kursant pyta”: 4 odpowiedzi mentora, jedna poprawna, błędne z pulapkaMentora.
        ops = q.get("opcje") or []
        if len(ops) != 4:
            P.err(where, f"Typ mentor wymaga dokładnie 4 opcji (jest {len(ops)})")
        if sum(1 for o in ops if o.get("poprawna")) != 1:
            P.err(where, "Dokładnie jedna opcja musi mieć poprawna: true")
        for i, o in enumerate(ops):
            if not o.get("tekst") or not o.get("wyjasnienie"):
                P.err(where, f"Opcja {i + 1}: wymagane tekst i wyjasnienie")
            pm = o.get("pulapkaMentora")
            if o.get("poprawna") and pm:
                P.warn(where, f"Opcja {i + 1} jest poprawna – nie powinna mieć pulapkaMentora")
            elif not o.get("poprawna") and pm not in PULAPKI_MENTORA:
                P.err(where, f"Opcja {i + 1}: pulapkaMentora musi być jednym z: {', '.join(sorted(PULAPKI_MENTORA))}")
        if not q.get("postac"):
            P.warn(where, "Pytanie mentor bez pola postac (kto pyta)")
    if typ in ("rozpoznanie", "egzamin", "studium"):
        ops = q.get("opcje") or []
        if typ in ("egzamin", "studium") and len(ops) != 4:
            P.err(where, f"Typ {typ} wymaga dokładnie 4 opcji (jest {len(ops)})")
        if typ == "rozpoznanie" and len(ops) < 2:
            P.err(where, "Za mało opcji")
        if sum(1 for o in ops if o.get("poprawna")) != 1:
            P.err(where, "Dokładnie jedna opcja musi mieć poprawna: true")
        for i, o in enumerate(ops):
            if not o.get("tekst"):
                P.err(where, f"Opcja {i + 1} bez tekstu")
            if not o.get("wyjasnienie"):
                P.err(where, f"Opcja {i + 1} bez wyjasnienie")
        if typ == "studium" and not q.get("scenariusz"):
            P.err(where, "Studium bez scenariusza")
        if typ in ("egzamin", "studium"):
            for i, o in enumerate(ops):
                pk = o.get("pulapka")
                if o.get("poprawna"):
                    if pk:
                        P.warn(where, f"Opcja {i + 1} jest poprawna – nie powinna mieć pola pulapka")
                elif pk is None:
                    P.warn(where, f"Opcja {i + 1}: brak pola pulapka (METODYKA §8.4)")
                elif pk not in PULAPKI:
                    P.err(where, f"Opcja {i + 1}: nieznana pulapka „{pk}”")
    elif typ == "mapa":
        if not q.get("element"):
            P.err(where, "Pytanie mapa bez pola element")
        ds = q.get("dystraktory") or []
        if len(ds) != 3:
            P.err(where, "Pytanie mapa wymaga dokładnie 3 dystraktorów")
        for nid in [q.get("poprawny"), *ds]:
            if not nid:
                P.err(where, "Pytanie mapa: brak id węzła (poprawny/dystraktory)")
            elif node_ids is not None and nid not in node_ids:
                P.err(where, f"Pytanie mapa: węzeł „{nid}” nie istnieje w mapa-cobit.json")
        if q.get("poprawny") in ds:
            P.err(where, "Pytanie mapa: poprawny węzeł nie może być dystraktorem")
        if not q.get("wyjasnienie"):
            P.err(where, "Pytanie mapa bez wyjasnienie")
    elif typ == "kolejnosc":
        el = q.get("elementy") or []
        if len(el) < 3 or not all(isinstance(x, str) and x for x in el):
            P.err(where, "Kolejność wymaga ≥3 elementów tekstowych")
        if len(set(el)) != len(el):
            P.err(where, "Kolejność: elementy muszą być różne")
        if not q.get("wyjasnienie"):
            P.err(where, "Kolejność bez wyjasnienie")
    elif typ == "dopasowanie":
        pary = q.get("pary") or []
        if len(pary) < 2 or any(not p.get("lewa") or not p.get("prawa") for p in pary):
            P.err(where, "Dopasowanie wymaga ≥2 par {lewa, prawa}")
        if not q.get("wyjasnienie"):
            P.err(where, "Dopasowanie bez wyjasnienie")
    elif typ == "klasyfikacja":
        kat = q.get("kategorie") or []
        el = q.get("elementy") or []
        if len(kat) < 2 or not el:
            P.err(where, "Klasyfikacja wymaga ≥2 kategorii i elementów")
        for i, e in enumerate(el):
            if e.get("kategoria") not in kat:
                P.err(where, f"Element {i + 1}: kategoria „{e.get('kategoria')}” spoza listy")
            if not e.get("wyjasnienie"):
                P.err(where, f"Element {i + 1} bez wyjasnienie")
    elif typ == "bledy":
        tw = q.get("twierdzenia") or []
        if len(tw) < 2:
            P.err(where, "Wykrywanie błędów wymaga ≥2 twierdzeń")
        for i, t in enumerate(tw):
            if not isinstance(t.get("poprawne"), bool):
                P.err(where, f"Twierdzenie {i + 1}: pole poprawne musi być true/false")
            if not t.get("wyjasnienie"):
                P.err(where, f"Twierdzenie {i + 1} bez wyjasnienie")
    for m in TERM_RE.finditer(json.dumps(q, ensure_ascii=False)):
        if m.group(1) not in term_ids:
            P.err(where, f"Przypis [[{m.group(1)}]] nie ma hasła")


# ---------------------------------------------------------------- serwer
class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(APP), **kw)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_GET(self):  # noqa: N802
        # Start aplikacji = podręcznik krok po kroku; dawny kurs dalej pod /index.html.
        if self.path.split("?")[0] == "/":
            self.send_response(302)
            self.send_header("Location", "/podrecznik/")
            self.end_headers()
            return
        if self.path.split("?")[0] == "/bundle.json":
            body = json.dumps(build(), ensure_ascii=False).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        super().do_GET()

    def log_message(self, fmt, *args):
        if "bundle.json" in (str(args[0]) if args else ""):
            return
        sys.stderr.write("%s\n" % (fmt % args))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--port", type=int, default=8123)
    ap.add_argument("--check", action="store_true")
    a = ap.parse_args()
    if a.check:
        b = build()
        errs = [p for p in b["problemy"] if p["poziom"] == "blad"]
        for p in b["problemy"]:
            print(f"[{'BŁĄD' if p['poziom'] == 'blad' else 'uwaga'}] {p['gdzie']}: {p['opis']}")
        print(f"\nLekcje: {len(b['lekcje'])} · terminy: {len(b['terminy'])} · pytania: {len(b['pytania'])} · "
              f"błędy: {len(errs)} · ostrzeżenia: {len(b['problemy']) - len(errs)}")
        sys.exit(1 if errs else 0)
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.ThreadingTCPServer(("127.0.0.1", a.port), Handler) as srv:
        print(f"COBIT 5 Foundation: http://localhost:{a.port}  (Ctrl+C kończy)")
        srv.serve_forever()


if __name__ == "__main__":
    main()
