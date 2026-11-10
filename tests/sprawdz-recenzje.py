#!/usr/bin/env python3
"""Kontrola, czy rejestry recenzji opisują obecną treść. Nie ocenia merytoryki."""
from pathlib import Path
import hashlib
import json
import re
import subprocess

R = Path(__file__).resolve().parents[1]
A = R / 'notatki/audyt'

def read(path):
    return json.loads(path.read_text(encoding='utf-8'))

def sha(data):
    return hashlib.sha256(json.dumps(data, ensure_ascii=False, sort_keys=True).encode()).hexdigest()

def window_data(path, name):
    return json.loads(path.read_text(encoding='utf-8').split('window.' + name + '=')[1].strip().rstrip(';'))

html = (R / 'notatki/schemat-cobit5.html').read_text(encoding='utf-8')
p = json.loads(re.search(r'window.PYTANIA=(.*?);</script><!--PYTANIA-END-->', html).group(1))
s = window_data(R / 'notatki/sp1.local.js', 'PYTANIA_SP1')
questions = {**p['Q'], **s['Q']}
assert len(questions) == 400
reviews = read(A / 'recenzja-400.json')
assert len(reviews) == 400 and {r['id'] for r in reviews} == set(questions)
for record in reviews:
    q = questions[record['id']]
    assert sha(q) == record['sha256WersjiWyswietlanej'], record['id']
    assert len({o['t'].strip().casefold() for o in q['o']}) == 4, record['id']
model = read(R / 'tests/.generated/model-full.local.json')
opisy = window_data(R / 'notatki/schemat-opisy.js', 'OPISY')
lessons = {x['kod']: x for x in window_data(R / 'notatki/nauka-sylabus.js', 'NAUKA_SYLABUS')['lekcje']}
for name, data, id_key, hash_key, count in [
    ('recenzja-opisow.json', opisy, 'id', 'sha256OP', 894),
    ('recenzja-informacji.json', model['INFO'], 'id', 'sha256', 899),
    ('recenzja-nauki.json', lessons, 'kod', 'sha256', 64),
    ('recenzja-przykladu.json', model['EX'], 'id', 'sha256', 59),
]:
    records = read(A / name)
    assert len(records) == count, name
    for record in records:
        assert sha(data[record[id_key]]) == record[hash_key], (name, record[id_key])
for src in re.findall(r'<script[^>]+src="([^"]+)"', html):
    file = (R / 'notatki' / src).resolve()
    assert file.is_file(), src
    subprocess.run(['node', '--check', str(file)], check=True)
module = R / 'tests/.generated/schemat.mjs'
module.write_text(re.search(r'<script type="module">(.*?)</script>', html, re.S).group(1), encoding='utf-8')
subprocess.run(['node', '--check', str(module)], check=True)
print('OK: aktualne recenzje 400 pytań, 894 objaśnień, 899 opisów, 64 lekcji i 59 przykładów; składnia JS.')
