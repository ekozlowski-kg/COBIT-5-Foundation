#!/usr/bin/env python3
"""Weryfikacja źródeł treści COBIT 5.

1. Każdy obiekt Zrodlo z doc=FW-PL i polem `cytat` → cytat musi występować na podanej stronie Frameworka PL.
2. Każdy przypis [[id]] w lekcjach i pytaniach → musi istnieć content/terms/<id>.json.
3. Każde pole `powiazane` / `nieMylicZ.termin` wyglądające jak id → ostrzeżenie, jeśli hasła brak.
4. Każdy kod sylabusa w terms/lessons/questions → musi istnieć w syllabus.json.
5. Pytania: typ egzamin/studium → dokładnie 4 opcje, 1 poprawna; każda opcja ma wyjasnienie.

Użycie (z katalogu app/):
  python3 content/_narzedzia/verify-sources.py content ../sources/text/framework-pl
  (albo plik tekstowy z markerami "=== PAGE N" z pdftext.swift)
"""
import json, os, re, sys, glob, unicodedata

content = sys.argv[1] if len(sys.argv) > 1 else "content"
fwtxt = sys.argv[2] if len(sys.argv) > 2 else None

def norm(s):
    s = unicodedata.normalize("NFC", s)
    s = s.replace("­", "")
    s = re.sub(r"-\s*\n\s*", "", s)          # dzielenie wyrazów
    s = s.replace("’", "'").replace("„", '"').replace("”", '"')
    s = re.sub(r"\s+", " ", s)
    return s.strip().lower()

pages = {}
if fwtxt and os.path.isdir(fwtxt):   # katalog sources/text/framework-pl/page-NNN.txt
    for f in sorted(glob.glob(os.path.join(fwtxt, "page-*.txt"))):
        pages[int(re.search(r"(\d+)", os.path.basename(f)).group(1))] = norm(open(f, encoding="utf-8").read())
elif fwtxt:
    cur = None
    buf = []
    for line in open(fwtxt, encoding="utf-8"):
        m = re.match(r"=== PAGE (\d+)", line)
        if m:
            if cur: pages[cur] = norm("".join(buf))
            cur, buf = int(m.group(1)), []
        else:
            buf.append(line)
    if cur: pages[cur] = norm("".join(buf))

errors, warnings = [], []
terms = {os.path.basename(p)[:-5] for p in glob.glob(os.path.join(content, "terms", "*.json"))}
syl = json.load(open(os.path.join(content, "syllabus.json"), encoding="utf-8"))
codes = {t["kod"] for t in syl["tematy"]}
mp = os.path.join(content, "mapa-cobit.json")
nodes = {w["id"] for w in json.load(open(mp, encoding="utf-8"))["wezly"]} if os.path.exists(mp) else set()
PUL = {"inna-kategoria", "zbyt-waskie", "forma-podrecznikowa", "prawda-nie-na-temat", "falsz", "odwrocone"}

def check_zrodla(obj, where):
    if isinstance(obj, dict):
        if obj.get("doc") == "FW-PL" and obj.get("cytat"):
            if not pages:
                return
            st = obj.get("strona")
            c = norm(obj["cytat"])
            if st not in pages:
                errors.append(f"{where}: brak strony {st}")
            elif c not in pages[st]:
                hit = [p for p, t in pages.items() if c in t]
                errors.append(f"{where}: cytat nie znaleziony na s. {st}" + (f" (jest na s. {hit})" if hit else " (nigdzie)") + f": {obj['cytat'][:70]}…")
        for v in obj.values(): check_zrodla(v, where)
    elif isinstance(obj, list):
        for v in obj: check_zrodla(v, where)

def check_refs(text, where):
    for m in re.finditer(r"\[\[([a-z0-9-]+)(?:\|[^\]]*)?\]\]", text):
        if m.group(1) not in terms:
            errors.append(f"{where}: przypis [[{m.group(1)}]] – brak hasła")

def check_codes(lst, where):
    for c in lst or []:
        if c not in codes:
            errors.append(f"{where}: nieznany kod sylabusa {c}")

for p in sorted(glob.glob(os.path.join(content, "terms", "*.json"))):
    t = json.load(open(p, encoding="utf-8"))
    w = "terms/" + os.path.basename(p)
    if t["id"] != os.path.basename(p)[:-5]: errors.append(f"{w}: id ≠ nazwa pliku")
    check_zrodla(t, w); check_codes(t.get("sylabus"), w)
    for r in t.get("powiazane", []):
        if r not in terms: warnings.append(f"{w}: powiazane → {r} (brak hasła – do napisania)")
    for n in t.get("nieMylicZ", []):
        if re.fullmatch(r"[a-z0-9-]+", n["termin"]) and n["termin"] not in terms:
            warnings.append(f"{w}: nieMylicZ → {n['termin']} (brak hasła)")
    if t.get("mapa") and t["mapa"] not in nodes: errors.append(f"{w}: mapa → nieznany węzeł {t['mapa']}")
    for k in ("poziom1", "poziom2", "poziom3"):
        if not t.get(k): errors.append(f"{w}: brak {k}")

lesson_ids = set()
q_ids = set()
for p in sorted(glob.glob(os.path.join(content, "questions", "*.json"))):
    d = json.load(open(p, encoding="utf-8"))
    for q in d["pytania"]:
        w = f"questions/{os.path.basename(p)}#{q['id']}"
        if q["id"] in q_ids: errors.append(f"{w}: zduplikowane id")
        q_ids.add(q["id"])
        check_zrodla(q, w); check_codes(q.get("sylabus"), w)
        check_refs(json.dumps(q, ensure_ascii=False), w)
        typ = q["typ"]
        if typ in ("egzamin", "studium", "rozpoznanie"):
            ops = q["opcje"]
            if typ != "rozpoznanie" and len(ops) != 4: errors.append(f"{w}: {len(ops)} opcji zamiast 4")
            if sum(1 for o in ops if o["poprawna"]) != 1: errors.append(f"{w}: liczba poprawnych ≠ 1")
            for o in ops:
                if not o.get("wyjasnienie"): errors.append(f"{w}: opcja bez wyjaśnienia")
                if typ in ("egzamin", "studium") and not o["poprawna"] and o.get("pulapka") not in PUL:
                    errors.append(f"{w}: błędna opcja bez poprawnego pola pulapka")
        elif typ == "dopasowanie":
            if len(q["pary"]) < 3: errors.append(f"{w}: za mało par")
        elif typ == "klasyfikacja":
            for e in q["elementy"]:
                if e["kategoria"] not in q["kategorie"]: errors.append(f"{w}: kategoria spoza listy: {e['kategoria']}")
                if not e.get("wyjasnienie"): errors.append(f"{w}: element bez wyjaśnienia")
        elif typ == "bledy":
            for e in q["twierdzenia"]:
                if not e.get("wyjasnienie"): errors.append(f"{w}: twierdzenie bez wyjaśnienia")
        elif typ == "mapa":
            for nd in [q["poprawny"]] + q["dystraktory"]:
                if nd not in nodes: errors.append(f"{w}: nieznany węzeł mapy {nd}")
        elif typ == "kolejnosc":
            if len(q["elementy"]) < 3: errors.append(f"{w}: za mało elementów")
        elif typ == "mentor":
            ops = q.get("opcje", [])
            PM = {"zargon", "falszywe-uproszczenie", "przytakniecie", "nie-na-temat"}
            if len(ops) != 4: errors.append(f"{w}: {len(ops)} opcji zamiast 4")
            if sum(1 for o in ops if o.get("poprawna")) != 1: errors.append(f"{w}: liczba poprawnych ≠ 1")
            for o in ops:
                if not o.get("wyjasnienie"): errors.append(f"{w}: opcja bez wyjaśnienia")
                if not o.get("poprawna") and o.get("pulapkaMentora") not in PM:
                    errors.append(f"{w}: błędna opcja bez poprawnego pola pulapkaMentora")
        elif typ == "popraw-termin":
            for e in q.get("twierdzenia", []):
                if not e.get("wyjasnienie"): errors.append(f"{w}: twierdzenie bez wyjaśnienia")
        elif typ in ("nazwa-en", "wypowiedz"):
            if not (q.get("poprawne") or q.get("odpowiedz") or q.get("wzorzec") or q.get("akceptowane")):
                warnings.append(f"{w}: {typ} bez wzorca/odpowiedzi")
        else:
            errors.append(f"{w}: nieznany typ {typ}")

for p in sorted(glob.glob(os.path.join(content, "lessons", "**", "*.md"), recursive=True)):
    w = os.path.relpath(p, content)
    txt = open(p, encoding="utf-8").read()
    m = re.match(r"^---\n(.*?)\n---\n", txt, re.S)
    if not m:
        errors.append(f"{w}: brak frontmatter"); continue
    fm = m.group(1)
    lid = re.search(r"^id:\s*(\S+)", fm, re.M).group(1)
    if lid in lesson_ids: errors.append(f"{w}: zduplikowane id lekcji")
    lesson_ids.add(lid)
    sm = re.search(r"^sylabus:\s*\[(.*?)\]", fm, re.M)
    check_codes([c.strip() for c in sm.group(1).split(",")] if sm else [], w)
    cm = re.search(r"^cwiczenia:\s*\[(.*?)\]", fm, re.M)
    for c in ([c.strip() for c in cm.group(1).split(",") if c.strip()] if cm else []):
        if c not in q_ids: errors.append(f"{w}: ćwiczenie {c} nie istnieje")
    zm = re.search(r"^zgadnij:\s*\[(.*?)\]", fm, re.M)
    for c in ([c.strip() for c in zm.group(1).split(",") if c.strip()] if zm else []):
        if c not in q_ids: errors.append(f"{w}: zgadnij {c} nie istnieje")
    if not zm: warnings.append(f"{w}: brak 'zgadnij'")
    body = txt[m.end():]
    for mm in re.finditer(r":::mapa (\S+)", body):
        if mm.group(1) not in nodes: errors.append(f"{w}: :::mapa → nieznany węzeł {mm.group(1)}")
    if ":::wlasne-slowa" not in body: warnings.append(f"{w}: brak slajdu wlasne-slowa")
    if ":::mapa" not in body: warnings.append(f"{w}: brak slajdu mapa")
    slides = re.split(r"\n---\n", body)
    if not (3 <= len(slides) <= 20): warnings.append(f"{w}: {len(slides)} slajdów (limit 20, METODYKA §18.4)")
    # cytaty „…” w blockquote bezpośrednio przed :::zrodlo FW-PL N muszą być na stronie N
    for sl in slides:
        for zm2 in re.finditer(r":::zrodlo FW-PL (\d+)", sl):
            st = int(zm2.group(1))
            before = sl[:zm2.start()]
            qs = re.findall(r"^>\s*„([^”]{12,})”", before, re.M)
            if not qs or st not in pages: continue
            c = norm(qs[-1].replace("«", "„").replace("»", "”")).rstrip(".")
            if c and c not in pages[st]:
                gdzie = [k for k, v in pages.items() if c in v]
                errors.append(f"{w}: cytat „{qs[-1][:50]}…” nie na s. {st}" + (f" (jest na s. {gdzie})" if gdzie else " (brak w korpusie)"))
    check_refs(body, w)
    if body.count(":::") % 2: errors.append(f"{w}: niezamknięty kontener :::")

print(f"Hasła: {len(terms)} | Pytania: {len(q_ids)} | Lekcje: {len(lesson_ids)} | Strony FW-PL: {len(pages)}")
for x in warnings: print("UWAGA ", x)
for x in errors: print("BŁĄD  ", x)
# kontrola przecieku SP1 (pomijana, gdy brak pliku lokalnego)
import subprocess
rc = subprocess.call([sys.executable, "-I", os.path.join(os.path.dirname(os.path.abspath(__file__)), "sp1-overlap.py"), content],
                     stdout=None if os.environ.get("SP1_VERBOSE") else subprocess.DEVNULL)
if rc: errors.append("sp1-overlap: wykryto przeciek SP1 (uruchom: SP1_VERBOSE=1 lub content/_narzedzia/sp1-overlap.py)")
for x in errors[-1:] if rc else []: print("BŁĄD  ", x)
print("OK" if not errors else f"{len(errors)} błędów")
sys.exit(1 if errors else 0)
