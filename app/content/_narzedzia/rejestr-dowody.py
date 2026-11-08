#!/usr/bin/env python3
"""Zbiera dowody pochodzenia form terminów (STANDARD-DYDAKTYCZNY rozdz. V).

Uruchamiać z app/:  python3 content/_narzedzia/rejestr-dowody.py [content] [../sources/text] [../private/text]
Dla każdego hasła w terms/ szuka:
  plEgzamin   w zestawieniu Altkom (ALTKOM) i w Sample Paper 1 PL (SP1),
  plPodrecznik w COBIT 5 Framework PL (FW-PL),
dopasowując rdzenie słów (odmiana PL), z łamaniem wierszy. Wynik: JSON na stdout
{id: {"egzamin": {"ALTKOM": [strony], "SP1": [...]}, "podrecznik": {"FW-PL": [...]}}}.
Strony SP1 nie trafiają do repo – plik wynikowy trzymać lokalnie (*.local.json).
"""
import json, re, sys, unicodedata
from pathlib import Path

C = Path(sys.argv[1] if len(sys.argv) > 1 else 'content')
SRC = Path(sys.argv[2] if len(sys.argv) > 2 else '../sources/text')
PRV = Path(sys.argv[3] if len(sys.argv) > 3 else '../private/text')

def load(d):
    p = Path(d)
    return {int(re.search(r'(\d+)', f.stem).group(1)): re.sub(r'\s+', ' ', f.read_text(errors='ignore'))
            for f in sorted(p.glob('page-*.txt'))} if p.exists() else {}

KORPUS = {'ALTKOM': load(SRC / 'altkom'), 'SP1': load(PRV / 'sample-paper-1'), 'FW-PL': load(SRC / 'framework-pl')}

PREFIX = re.compile(r'^(?:[A-Z]{3}\d{2}|Faza \d+:|Zasada \d+:|[NCWPLF] –)\s*')

def warianty(forma):
    out = []
    forma = PREFIX.sub('', (forma or '').strip())
    for v in re.split(r'\s+/\s+|;\s+|\s+–\s+|:\s+', forma):
        v = re.sub(r'\(.*?\)', '', v)
        v = PREFIX.sub('', v.strip()).strip(' –-:')
        if v and v != '—' and not v.startswith('brak'):
            out.append(v)
    return out

def rx(fraza):
    parts = []
    for w in re.findall(r'\w+', fraza):
        if len(w) <= 3:
            parts.append(re.escape(w))
        else:
            s = w[:max(3, len(w) - (3 if len(w) >= 8 else 2 if len(w) >= 5 else 1))]
            parts.append(re.escape(s).replace('ó', '[óo]') + r'\w*')
    return re.compile(r'\b' + r'[\s,\-–]+(?:i\s+)?'.join(parts), re.I) if parts else None

LEAD = re.compile(r'^(Cele|Cel|Faza|Zasada)\s+', re.I)

def szukaj(forma, korpusy, kod=None):
    wynik = {}
    vs = warianty(forma)
    vs += [LEAD.sub('', v) for v in vs if LEAD.match(v) and len(LEAD.sub('', v).split()) >= 2]
    for v in vs:
        r = rx(v)
        if not r:
            continue
        for k in korpusy:
            # nazwy procesów: dowód tylko, gdy na tej samej stronie pada kod procesu (np. BAI09)
            strony = [n for n, t in KORPUS[k].items() if r.search(t) and (not kod or kod in t)]
            if strony:
                wynik.setdefault(k, {})[v] = strony[:12]
    return wynik

out = {}
for f in sorted((C / 'terms').glob('*.json')):
    t = json.load(open(f))
    m = re.match(r'proc-([a-z]{3}\d{2})$', t['id'])
    kod = m.group(1).upper() if m else None
    out[t['id']] = {
        'egzamin': szukaj(t.get('plEgzamin'), ['ALTKOM', 'SP1'], kod),
        'podrecznik': szukaj(t.get('plPodrecznik'), ['FW-PL', 'ALTKOM'], kod),
        'inne': {(i['nazwa'] if isinstance(i, dict) else i): szukaj(i['nazwa'] if isinstance(i, dict) else i, ['ALTKOM', 'SP1', 'FW-PL'])
                 for i in t.get('plInne') or []},
    }
json.dump(out, sys.stdout, ensure_ascii=False, indent=1)
