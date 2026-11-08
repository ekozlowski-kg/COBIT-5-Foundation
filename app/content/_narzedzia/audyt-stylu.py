#!/usr/bin/env python3
"""Audyt stylu bazy pytań pod prawdziwy egzamin PL (METODYKA.md §16.6).

Użycie (z katalogu app/):  python3 content/_narzedzia/audyt-stylu.py [content] [--md]
Sprawdza treść i opcje pytań (bez wyjaśnień) w content/questions/*.json, bez *.local.json:
  1. formy podręcznikowe z terminology-traps.json (poza „w podręczniku: …” i opcjami z pulapka: forma-podrecznikowa),
  2. „Ilustracja N” zamiast „Rysunek N”,
  3. odsetek pytań, w których poprawna odpowiedź jest najdłuższa (cel ≤ 35%),
  4. rozkład liter poprawnych odpowiedzi,
  5. pytania z luką i z NIE wersalikami (SP1: 4/50 luki, 3/50 NIE).
Opcje pytań wyboru nie są tasowane w aplikacji (seededShuffle dotyczy tylko typu `mapa`),
więc litera z pliku = litera na ekranie.
"""
import json, re, sys, collections
from pathlib import Path

args = [a for a in sys.argv[1:] if not a.startswith('--')]
ROOT = Path(args[0] if args else 'content')
MD = '--md' in sys.argv
LIT = 'ABCD'
WYBOR = {'egzamin', 'studium', 'rozpoznanie', 'bledy'}  # typy z listą opcji i jedną poprawną

# --- 1. wzorce form podręcznikowych -------------------------------------------------------
def stem_regex(phrase):
    parts = []
    for w in re.findall(r'\w+', phrase):
        if len(w) <= 3:
            parts.append(re.escape(w))
        else:
            s = w[:-2] if len(w) >= 7 else w[:-1]
            s = re.escape(s).replace('ó', '[óo]')
            parts.append(s + r'\w*')
    return r'\b' + r'[\s,-]+'.join(parts) + r'\b' if parts else None

def norm(t):
    return re.sub(r'\s+', ' ', re.sub(r'\(.*?\)', '', t)).strip().lower()

traps = json.load(open(ROOT / 'terminology-traps.json'))['pulapki']
WZORCE = []  # (regex, forma_podr, forma_egz)
for t in traps:
    egz = t.get('egzamin', '')
    if not t.get('podrecznik') or t['podrecznik'].startswith('('):
        continue
    for v in t['podrecznik'].split(' / '):
        v = norm(v)
        e = norm(egz)
        if not v or v == e or v in e or e.startswith(v):
            continue
        # litery skali NPLF obsługujemy osobno (same litery są nieczytelne dla regexów)
        if re.match(r'^[nplf] –', v):
            v = v.split('–', 1)[1].strip()
        if v in {'ilustracja'}:
            continue  # pkt 2
        rx = stem_regex(v)
        if rx:
            WZORCE.append((re.compile(rx, re.I), t['podrecznik'], egz))

# Dopuszczalne konteksty: jawne odesłanie do podręcznika.
OK_CTX = re.compile(r'(w podręczniku|podręcznik\w*|podręcznikow\w*)[^.]{0,60}$', re.I)

def wyjatek_kontekstowy(podr, m, text):
    """Fałszywe alarmy, w których ta sama forma PL oznacza inne pojęcie EN."""
    okolica = text[max(0, m.start() - 80):m.end() + 80].lower()
    if podr.lower().startswith('cel procesu'):
        # „Cel procesu” → „Przeznaczenie procesu” dotyczy tylko ISO 15504 *process purpose*.
        # Cele procesu (*process goals*: wewnętrzne, kontekstowe, dostępności i bezpieczeństwa) to egzaminacyjne
        # „cele procesu” – liczba mnoga albo kontekst kategorii celów nie są błędem.
        # Alarm tylko w kontekście oceny ISO 15504 (PAM, atrybuty, praktyki bazowe, rezultaty).
        if not re.fullmatch(r'cel procesu', m.group(0), re.I) or not re.search(r'15504|\bpam\b|asesor|atrybut|\bpa ?\d|praktyk\w* bazow|rezultat', okolica):
            return True
    if podr.lower().startswith('pomiar procesu'):
        # „Miara procesu” to nazwa atrybutu PA 4.1; ogólne „pomiar procesu” (mierzenie) nie jest błędem.
        if not re.search(r'pa ?4|4\.1|atrybut|poziom\w* 4|przewidywaln', okolica) and not m.group(0)[0].isupper():
            return True
    if podr.lower().startswith('dostęp i bezpieczeństwo'):
        # „Dostępności i bezpieczeństwa” to forma egzaminu PL dla celów procesu (SP1 pyt. 2) i jakości informacji.
        if re.search(r'cel\w* procesu|kategori\w* cel|jakoś', okolica) or re.search(r'cel', text[max(0, m.start() - 15):m.start()].lower()):
            return True
    return False


def term_hits(text):
    out = []
    for rx, podr, egz in WZORCE:
        for m in rx.finditer(text):
            before = text[max(0, m.start() - 70):m.start()]
            if OK_CTX.search(before):
                continue
            # cała fraza egzaminacyjna zawiera trafienie (np. „Organ Ładu i nadzoru”)
            ctx = text[max(0, m.start() - 30):m.end() + 30].lower()
            if norm(egz) and norm(egz) in ctx:
                continue
            if wyjatek_kontekstowy(podr, m, text):
                continue
            out.append((m.group(0), podr, egz))
    return out

ILU = re.compile(r'\bIlustracj\w*\s*(nr\s*)?\d+', re.I)
LUKA = re.compile(r'brakując|uzupełnij|\[\?\]|_{3,}|…\s*\?|luk[aęi]\b', re.I)
NIE = re.compile(r'\bNIE\b')

files = sorted(p for p in (ROOT / 'questions').glob('*.json') if not p.name.endswith('.local.json'))
raport = []
suma = collections.Counter()
for f in files:
    d = json.load(open(f))
    qs = d['pytania'] if isinstance(d, dict) else d
    st = collections.Counter(); litery = collections.Counter()
    terminy, ilustr, dlugie_lista = [], [], []
    for q in qs:
        st['pytan'] += 1
        teksty = [('tresc', q.get('tresc') or ''), ('scenariusz', q.get('scenariusz') or '')]
        for i, o in enumerate(q.get('opcje') or []):
            if o.get('pulapka') == 'forma-podrecznikowa':
                continue
            teksty.append((f'opcja {LIT[i] if i < 4 else i}', o.get('tekst') or ''))
        for gdzie, t in teksty:
            for hit in term_hits(t):
                terminy.append((q['id'], gdzie, *hit))
            for m in ILU.finditer(t):
                ilustr.append((q['id'], gdzie, m.group(0)))
        opcje = q.get('opcje') or []
        popr = [i for i, o in enumerate(opcje) if o.get('poprawna')]
        if q.get('typ') in WYBOR and len(opcje) >= 3 and len(popr) == 1:
            st['wybor'] += 1
            p = popr[0]
            litery[LIT[p] if p < 4 else '?'] += 1
            L = [len(o.get('tekst') or '') for o in opcje]
            if L[p] == max(L) and L.count(max(L)) == 1:
                st['najdluzsza'] += 1
                dlugie_lista.append(q['id'])
            tr = q.get('tresc') or ''
            if LUKA.search(tr): st['luka'] += 1
            if NIE.search(tr): st['nie'] += 1
    for k in ('pytan', 'wybor', 'najdluzsza', 'luka', 'nie'):
        suma[k] += st[k]
    suma.update({f'lit_{k}': v for k, v in litery.items()})
    raport.append(dict(plik=f.name, st=st, litery=litery, terminy=terminy, ilustr=ilustr, dlugie=dlugie_lista))

def pct(a, b):
    return f'{100 * a / b:.0f}%' if b else '–'

def rozklad_ok(lit, n):
    if n < 8:
        return True
    oczek = n / 4
    return all(abs(lit.get(k, 0) - oczek) <= max(2, 0.5 * oczek) for k in LIT)

if MD:
    print('| Plik | Pytań | Wyboru | Najdłuższa poprawna | A/B/C/D | Luka | NIE | Formy podręcznikowe | „Ilustracja” |')
    print('|---|---:|---:|---:|---|---:|---:|---:|---:|')
for r in raport:
    s, l = r['st'], r['litery']
    lit = '/'.join(str(l.get(k, 0)) for k in LIT)
    flag_d = ' ⚠' if s['wybor'] and s['najdluzsza'] / s['wybor'] > 0.35 else ''
    flag_l = '' if rozklad_ok(l, s['wybor']) else ' ⚠'
    if MD:
        print(f"| {r['plik']} | {s['pytan']} | {s['wybor']} | {s['najdluzsza']} ({pct(s['najdluzsza'], s['wybor'])}){flag_d} | {lit}{flag_l} | {s['luka']} | {s['nie']} | {len(r['terminy'])} | {len(r['ilustr'])} |")
    else:
        print(f"{r['plik']:28} pytań {s['pytan']:3}  wyboru {s['wybor']:3}  najdłuższa {s['najdluzsza']:2} ({pct(s['najdluzsza'], s['wybor'])}){flag_d}  litery {lit}{flag_l}  luka {s['luka']}  NIE {s['nie']}  terminy {len(r['terminy'])}  ilustr {len(r['ilustr'])}")
tl = '/'.join(str(suma.get('lit_' + k, 0)) for k in LIT)
if MD:
    print(f"| **Razem** | {suma['pytan']} | {suma['wybor']} | {suma['najdluzsza']} ({pct(suma['najdluzsza'], suma['wybor'])}) | {tl} | {suma['luka']} ({pct(suma['luka'], suma['wybor'])}) | {suma['nie']} ({pct(suma['nie'], suma['wybor'])}) | {sum(len(r['terminy']) for r in raport)} | {sum(len(r['ilustr']) for r in raport)} |")
    print('\nSP1 dla porównania: najdłuższa poprawna 10/50 (20%), litery 9/12/14/15, luka 4/50 (8%), NIE 3/50 (6%).')
else:
    print(f"RAZEM pytań {suma['pytan']}  wyboru {suma['wybor']}  najdłuższa {pct(suma['najdluzsza'], suma['wybor'])}  litery {tl}  luka {suma['luka']}  NIE {suma['nie']}")

print('\n## Formy podręcznikowe w treści/opcjach' if MD else '\n--- terminy ---')
for r in raport:
    for qid, gdzie, hit, podr, egz in r['terminy']:
        print(f"- `{r['plik']}` {qid} ({gdzie}): „{hit}” → egzamin: „{egz}” (podręcznik: {podr})")
print('\n## „Ilustracja N” zamiast „Rysunek N”' if MD else '\n--- ilustracja ---')
for r in raport:
    for qid, gdzie, hit in r['ilustr']:
        print(f"- `{r['plik']}` {qid} ({gdzie}): „{hit}”")
if '--dlugie' in sys.argv:
    print('\n--- najdłuższa poprawna ---')
    for r in raport:
        print(r['plik'], ', '.join(r['dlugie']))
