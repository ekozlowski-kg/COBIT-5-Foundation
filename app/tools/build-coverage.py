#!/usr/bin/env python3
"""Mapa deklarowanych powiązań wymaganie → źródło → lekcja → slajd → pytanie.
Uruchom po z_kursu.py: python3 app/tools/build-coverage.py
Metadane nie są dowodem merytorycznej recenzji całego banku.
"""
import json
import re
from pathlib import Path
import serve

APP = Path(__file__).resolve().parent.parent
ROOT = APP.parent
b = serve.build()
lessons = b['lekcje']
questions = b['pytania']
syl = json.loads((APP / 'content/syllabus.json').read_text(encoding='utf-8'))
syl['tematy'] = [t for t in syl['tematy'] if t['obszar'] in ('PR', 'EN', 'IM', 'PC')]
parts = json.loads((APP / 'podrecznik/lekcje.json').read_text(encoding='utf-8'))
slides = {}
for f in sorted((APP / 'podrecznik').glob('*.html')):
    m = re.search(r'window.DECK=(.*?);</script>', f.read_text(encoding='utf-8'))
    if not m:
        continue  # starsze ręczne części używają literału JS, bez metadanych lekcji
    d = json.loads(m[1].replace('<\\/', '</'))
    for n, s in enumerate(d.get('S', []), 1):
        for lid in s.get('lekcje', []):
            slides.setdefault(lid, []).append(f'{f.name}#slajd-{n}')

reviewed = {
    'pc-k51-referencyjny-model-procesu': 'F01: PRM a narzucanie zdolności; DSS02.07',
    'pc-k50-dwa-wymiary': 'F03: poziomy i atrybuty obu wymiarów',
    'pc-k52-cztery-pojecia-iso': 'F02: rezultat może obejmować artefakt',
    'en-k26-praktyki-struktur': 'U01: Decision making i rozróżnienie praktyk struktur',
    'pr-k29-role-ladu': 'F05/F06: zakres pojęcia interesariusza i funkcje organów',
}
reviewed_questions = {q['id'] for q in questions}  # rejestr 1711 pozycji + 37 nowych przypadków procesów
rows = []
for t in syl['tematy']:
    ls = [l for l in lessons if t['kod'] in l.get('sylabus', [])]
    qs = [q for q in questions if t['kod'] in (q.get('sylabus') if isinstance(q.get('sylabus'), list) else [q.get('sylabus')])]
    for n, req in enumerate(t.get('zakres') or [t['tytul']], 1):
        rows.append({
            'wymaganie': f"{t['kod']}:{n}", 'kod': t['kod'], 'tytul': t['tytul'], 'zakres': req,
            'zrodla': t.get('zrodlo', []),
            'lekcje': [{'id': l['id'], 'plik': l['plik'], 'czesc': parts.get(l['id']),
                        'slajdy': slides.get(l['id'], []),
                        'sprawdzoneFragmenty': reviewed.get(l['id'])} for l in ls],
            'pytania': [q['id'] for q in qs],
            'pytaniaSprawdzoneWTejZmianie': [q['id'] for q in qs if q['id'] in reviewed_questions],
            'status': 'pytania tematu po indywidualnym przeglądzie; tag nie dowodzi realizacji każdego podwymagania',
        })
folder = ROOT / 'docs'
folder.mkdir(exist_ok=True)
meta = {'data': '2026-11-09', 'tematy': len(syl['tematy']), 'podwymagania': len(rows),
        'uwaga': 'Powiązania dziedziczą tag kodu tematu. Nie dowodzą, że każda lekcja, slajd lub pytanie realizuje każdy element zakresu. Wszystkie aktywne pytania przeszły indywidualny przegląd (REJESTR-RECENZJI-PYTAN.json i RECENZJA-PELNEJ-PULI.md). Sam tag tematu nie dowodzi, że pojedyncze pytanie realizuje każde podwymaganie.', 'wiersze': rows}
(folder / 'POKRYCIE-SYLABUSA.json').write_text(json.dumps(meta, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
lines = ['# Macierz pokrycia COBIT 5 Foundation', '',
         f"{meta['tematy']} tematów i {len(rows)} pozycji zakresu. Stan: 2026-11-09.", '', meta['uwaga'], '',
         'Pełne listy slajdów, źródeł i identyfikatorów pytań: [JSON](POKRYCIE-SYLABUSA.json). Generowanie: `python3 app/tools/build-coverage.py`, po aktualizacji podręcznika przez `z_kursu.py`.', '',
         '| Wymaganie | Element zakresu | Źródło | Lekcje / części | Pytania | Przegląd |',
         '|---|---|---|---|---|---|']
for row in rows:
    sources = '; '.join(z.get('doc','') + (f" s. {z['strona']}" if z.get('strona') else '') + (f" §{z['sekcja']}" if z.get('sekcja') else '') for z in row['zrodla'])
    ls = '; '.join(f"[{l['id']}](../app/{l['plik']})" for l in row['lekcje'][:3])
    if len(row['lekcje']) > 3: ls += f"; +{len(row['lekcje']) - 3} w JSON"
    nq = len(row['pytania']); checked = len(row['pytaniaSprawdzoneWTejZmianie'])
    state = f'{checked} pytań tematu po recenzji; tag zakresu' if checked or any(l['sprawdzoneFragmenty'] for l in row['lekcje']) else 'powiązanie deklarowane; do recenzji'
    lines.append(f"| {row['wymaganie']} | {row['zakres'].replace('|','/')} | {sources} | {ls} | {nq}; pełne ID w JSON | {state} |")
(folder / 'POKRYCIE-SYLABUSA.md').write_text('\n'.join(lines) + '\n', encoding='utf-8')
print(f"Pokrycie: {meta['tematy']} tematów, {len(rows)} pozycji zakresu; "
      f"bez lekcji: {sum(not x['lekcje'] for x in rows)}, bez pytań: {sum(not x['pytania'] for x in rows)}")
