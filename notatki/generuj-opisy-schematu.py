#!/usr/bin/env python3
"""Scala opisy kafelków (przykład z życia, pułapka, frazy pytań tematycznych) do notatki/schemat-opisy.js.

Wejście: pliki JSON {id: {"zycie": str, "pulapka": str, "kw": [str]}} podane jako argumenty.
Treść jest autorska (bez cytatów z podręcznika), więc plik wynikowy może być w repozytorium.

Uruchom:  python3 notatki/generuj-opisy-schematu.py opisy1.json opisy2.json ...
"""
import json, os, sys

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'schemat-opisy.js')

opisy, braki = {}, []
for f in sys.argv[1:]:
    for k, v in json.load(open(f, encoding='utf-8')).items():
        z, p, kw = (v.get('zycie') or '').strip(), (v.get('pulapka') or '').strip(), [str(x).strip().lower() for x in (v.get('kw') or []) if str(x).strip()]
        if not (z and p and kw):
            braki.append(k)
        opisy[k] = {'zycie': z, 'pulapka': p, 'kw': kw}

data = json.dumps(opisy, ensure_ascii=False, separators=(',', ':'), sort_keys=True).replace('</', '<\\/')
with open(OUT, 'w', encoding='utf-8') as fh:
    fh.write('// Opisy autorskie do kafelków schematu: przykład z życia, pułapka egzaminacyjna, frazy do pytań tematycznych.\n')
    fh.write('// Wygenerowane: notatki/generuj-opisy-schematu.py. Treść autorska, bez cytatów z podręcznika.\n')
    fh.write('window.OPISY=' + data + ';\n')
print('kafelków z opisem:', len(opisy), '| niepełne:', len(braki), braki[:10], '->', OUT)
