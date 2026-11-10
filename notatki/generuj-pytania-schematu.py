#!/usr/bin/env python3
"""Wstawia do notatki/schemat-cobit5.html wybrany bank 400 pytań ABCD:
4 odpowiedzi, dokładnie jedna poprawna. Pytania przypisane do węzłów schematu według kodów sylabusa.

Uruchom:  python3 notatki/generuj-pytania-schematu.py
330 autorskich wskazuje pula-schematu.json; 70 lokalnych jest w materialy-testowe.local.json.
Kończy się błędem, jeśli jakieś pytanie nie trafi do żadnego węzła."""
import json, glob, os, re, sys, hashlib

ROOT = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
QDIR = os.path.join(ROOT, 'app/content/questions')
SNAPSHOT = os.path.join(ROOT, 'notatki/pytania-autorskie.json')
HTML = os.path.join(ROOT, 'notatki/schemat-cobit5.html')
PLAN = json.load(open(os.path.join(ROOT, 'notatki/pula-schematu.json'), encoding='utf-8'))
SELECTED = set(PLAN['ids'])
RESERVE = {uid: name for name, ids in PLAN['sprawdziany'].items() for uid in ids}
FIX_PATH = os.path.join(ROOT, 'notatki/korekty-pytan.json')
FIX = json.load(open(FIX_PATH, encoding='utf-8'))['pytania'] if os.path.exists(FIX_PATH) else {}
assert set(FIX) <= SELECTED, 'Korekta dotyczy pytania spoza wybranej puli'

# kod sylabusa -> węzły schematu
CODE = {
    'M0-00-01': ['potrz'], 'M0-00-02': ['potrz'], 'M0-00-03': ['wart'], 'M0-00-04': ['wart'],
    'M0-00-05': ['a2'], 'M0-00-06': ['lad', 'zarz'], 'M0-00-07': ['z23'], 'M0-00-08': ['KW'],
    'EX-00-01': ['KW'],
    'PR-01-01': ['z1', 'z23', 'z4', 'z5'], 'PR-01-02': ['akt'], 'PR-01-03': ['lad'], 'PR-01-04': ['zarz'],
    'PR-01-05': ['akt'],
    'PR-02-01': ['wart'], 'PR-02-02': ['potrz'], 'PR-02-03': ['potrz'], 'PR-02-04': ['corg'],
    'PR-02-05': ['corg', 'cit'], 'PR-02-06': ['cakt'], 'PR-02-07': ['cakt', 'z1'], 'PR-02-08': ['z23'],
    'PR-02-09': ['z23'], 'PR-02-10': ['z23'], 'PR-02-11': ['z23'], 'PR-02-12': ['akt', 'z4'],
    'PR-02-13': ['akt', 'pomiar'], 'PR-02-14': ['lad', 'zarz', 'z5'], 'PR-02-15': ['lad', 'zarz', 'z5'],
    'EN-01-01': ['a2'],
    'EN-02-01': ['a1'], 'EN-02-02': ['a1'], 'EN-02-03': ['a1'], 'EN-02-04': ['a1'], 'EN-02-05': ['a1'], 'EN-02-06': ['a1'],
    'EN-02-07': ['a2'], 'EN-02-08': ['a2'], 'EN-02-09': ['a2'], 'EN-02-10': ['a2'], 'EN-02-11': ['a2'],
    'EN-02-12': ['a3'], 'EN-02-13': ['a3'],
    'EN-02-14': ['a4'], 'EN-02-15': ['a4'], 'EN-02-16': ['a4'],
    'EN-02-17': ['a5'], 'EN-02-18': ['a5'], 'EN-02-19': ['a5'],
    'EN-02-20': ['a6'], 'EN-02-21': ['a6'],
    'EN-02-22': ['a7'], 'EN-02-23': ['a7'],
    'EN-02-24': ['a2'], 'EN-02-25': ['a2'],
    'IM-01-01': ['petla'], 'IM-02-01': ['kont'], 'IM-02-02': ['PZZI'],
'IM-02-03': ['decyz', 'petla'], 'IM-02-04': ['decyz', 'petla'], 'IM-02-05': ['petla'], 'IM-02-06': ['f1', 'f2', 'f3', 'petla'], 'IM-02-07': ['f4', 'f5', 'f6', 'f7', 'pomiar', 'przeg', 'petla'],
    'PC-01-01': ['ocena'], 'PC-01-02': ['ocena'], 'PC-01-03': ['ocena'], 'PC-01-04': ['ocena'],
    'PC-02-01': ['wynik'], 'PC-02-02': ['ocena'], 'PC-02-03': ['prm'], 'PC-02-04': ['ocena'],
    'PC-02-05': ['wynik'], 'PC-02-06': ['ocena'],
}
ORDER = ['kont','decyz','pz','zi','f1','f2','f3','f4','f5','f6','f7','potrz','wart','corg','cit','cakt','akt','a1','a2','a3','a4','a5','a6','a7',
         'lad','zarz','prm','ocena','wynik','pomiar','przeg','petla','z1','z23','z4','z5']
# pytania ogólne (egzamin, pułapki nazw): przypisanie po słowach kluczowych do kafelka tematycznego
KW_RULES = [
    (r'zapaln|pain point', 'pz'), (r'wyzwalaj|inicjuj|trigger', 'zi'),
    (r'faz[aęy]|pierście|wdroż|cykl życia wdroż', 'petla'),
    (r'poziom|atrybut|zdolnoś|n/c/w/p|capability', 'ocena'),
    (r'\bedm|\bład\b|\bładu\b|\bnadzór|governance|oszacuj, kieruj', 'lad'),
    (r'\b(apo|bai|dss|mea)\d*\b|\bzarządzani|\bmanagement\b', 'zarz'),
    (r'\braci\b', 'a2'), (r'aktywator|czynnik umożliw|enabler', 'akt'),
    (r'kaskad|cel(e|ów) (organizacji|przedsiębiorstwa|związane)', 'cakt'),
    (r'interesariusz|stakeholder', 'potrz'), (r'wartoś|korzyś|ryzyk|zasob', 'wart'),
    (r'\bzasad', 'z1'), (r'\bprm\b|referencyjn', 'prm'),
]
LABEL = {'pakiet-90.json': 'pakiet 90 (nieoficjalne)', 'final-www.json': 'pytania z internetu'}
KEEP = ['pary', 'kategorie', 'elementy', 'twierdzenia', 'poprawne', 'poprawny', 'element', 'dystraktory',
        'wzorzec', 'wymagane', 'wyjasnienie', 'scenariusz']

def text_of(q):
    return json.dumps(q, ensure_ascii=False).lower()

def zr(q):
    out = []
    for z in q.get('zrodlo') or []:
        if not isinstance(z, dict) or z.get('doc') == 'SP1':
            continue
        s = z.get('doc', '')
        if z.get('strona'): s += ' s. ' + str(z['strona'])
        if z.get('ilustracja'): s += ', Rys. ' + str(z['ilustracja'])
        out.append(s)
    return out

def nodes_for(q, unknown):
        nodes = []
        for code in q.get('sylabus') or []:
            if code not in CODE:
                unknown.add(code); continue
            for n in CODE[code]:
                if n == 'KW':
                    others = [c for c in (q.get('sylabus') or []) if c not in ('M0-00-08', 'EX-00-01')]
                    if others:
                        continue  # pytanie i tak trafi do kafelka z innego kodu sylabusa
                    t = text_of(q)
                    for pat, node in KW_RULES:
                        if re.search(pat, t):
                            nodes.append(node); break
                    else:
                        nodes.append('z23')
                    continue
                if n == 'PZZI':
                    t = text_of(q)
                    hit_z = bool(re.search(r'wyzwal|inicjuj|trigger', t))
                    hit_p = bool(re.search(r'zapaln|pain', t))
                    nodes += (['zi'] if hit_z and not hit_p else ['pz'] if hit_p and not hit_z else ['pz', 'zi'])
                else:
                    nodes.append(n)
        return list(dict.fromkeys(nodes))

def is_abcd(q):
    op = q.get('opcje') or []
    return len(op) == 4 and sum(1 for o in op if o.get('poprawna')) == 1

Q, N, total, skipped, missing, unknown = {}, {k: [] for k in ORDER}, 0, 0, [], set()
for f in ([SNAPSHOT] if os.path.exists(SNAPSHOT) else sorted(glob.glob(os.path.join(QDIR, '*.json')))):
    name = os.path.basename(f)
    if name.endswith('.local.json'):
        continue
    d = json.load(open(f, encoding='utf-8'))
    for q in (d if isinstance(d, list) else d.get('pytania', [])):
        if q.get('id') not in SELECTED:
            continue
        digest = hashlib.sha256(json.dumps({k:v for k,v in q.items() if not k.startswith('_')}, ensure_ascii=False, sort_keys=True).encode()).hexdigest()
        if digest != PLAN['weryfikacja'][q['id']]:
            raise RuntimeError('Pytanie zmienione od recenzji: ' + q['id'])
        if not is_abcd(q):
            skipped += 1; continue
        total += 1
        nodes = nodes_for(q, unknown)
        if not nodes:
            missing.append(q['id']); continue
        uid = q['id'] if q['id'] not in Q else q['id'] + '@' + name
        op = q.get('opcje') or []
        item = {'id': q['id'], 'typ': q.get('typ', ''), 's': ','.join(q.get('sylabus') or []), 't': q.get('tresc', ''),
                'k': bool(q.get('skrajnosc')), 'st': 'autorskie', 'src': LABEL.get(name, ''), 'z': zr(q),
                'tr': q.get('trudnosc', 2)}
        item.update(r=RESERVE.get(q['id']), zap=q.get('zapamietaj', ''), scen=q.get('scenariusz', ''))
        if len(op) >= 2:
            item['o'] = [{'t': o.get('tekst', ''), 'ok': bool(o.get('poprawna')), 'w': o.get('wyjasnienie', '')} for o in op]
        else:
            item['a'] = {k: q[k] for k in KEEP if k in q}
        if q['id'] in FIX:
            correction = FIX[q['id']]
            assert correction['sha256Wejscia'] == digest, 'Nieaktualna korekta: ' + q['id']
            changes = correction['zmiany']
            assert set(changes) <= {'t', 'o', 'z', 'zap', 'scen', 'err'}, 'Nieznane pole korekty'
            key_before = [o['ok'] for o in item['o']]
            item.update(changes)
            assert [o['ok'] for o in item['o']] == key_before, 'Korekta zmienia klucz: ' + q['id']
        assert len({o['t'].strip().casefold() for o in item['o']}) == 4, 'Powtórzone opcje: ' + q['id']
        assert all(o['w'].strip() for o in item['o']), 'Brak uzasadnienia: ' + q['id']
        Q[uid] = item
        for n in nodes:
            N[n].append(uid)

for n in N:
    N[n].sort(key=lambda u: (Q[u]['src'] != '', Q[u]['tr'], Q[u]['k'], u))
    for u in N[n]: pass
for it in Q.values():
    it.pop('tr', None)

if unknown or missing:
    print('BŁĄD: kody bez mapowania:', sorted(unknown), 'pytania bez węzła:', missing[:20]); sys.exit(1)
assert len(Q) == total, (len(Q), total)
assert set(Q) == SELECTED and len(Q) == PLAN['autorskie'], 'Niepełny bank po recenzji'

# Znaczniki robocze nie są identyfikatorami kafelków. Plan nauki i powroty
# z omówień sprawdzianu muszą wskazywać rzeczywiste miejsca w schemacie.
plan_codes = {code: list(dict.fromkeys(real for node in nodes
              for real in (['pz', 'zi'] if node == 'PZZI' else ['z23'] if node == 'KW' else [node])))
              for code, nodes in CODE.items()}
data = json.dumps({'Q': Q, 'N': N, 'plan': {**{k:PLAN[k] for k in ['limit','celMinimum','sprawdziany']}, 'kody': plan_codes}}, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/')
block = ('<!--PYTANIA-START--><script>/* wygenerowane: notatki/generuj-pytania-schematu.py; '
         '330 pytań autorskich po recenzji, plan: pula-schematu.json; 70 lokalnych w sp1.local.js */window.PYTANIA=' + data + ';</script><!--PYTANIA-END-->')
html = open(HTML, encoding='utf-8').read()
html, n = re.subn(r'<!--PYTANIA-START-->.*?<!--PYTANIA-END-->', lambda m: block, html, flags=re.S)
assert n == 1, 'brak znaczników PYTANIA w HTML'
open(HTML, 'w', encoding='utf-8').write(html)
print('pytań ABCD w bazie:', total, '| w schemacie (unikalne):', len(Q), '| bez węzła:', len(missing), '| pominięte (nie ABCD):', skipped)
print({k: len(v) for k, v in N.items()})
print('rozmiar HTML:', os.path.getsize(HTML))

# --- Materiały SP1 i Altkom lokalnie, z jawnie oznaczonymi korektami dydaktycznymi ---
SP1 = os.path.join(ROOT, 'notatki/materialy-testowe.local.json')
SP1_OUT = os.path.join(ROOT, 'notatki/sp1.local.js')
if os.path.exists(SP1):
    sq, sn, miss = {}, {k: [] for k in ORDER}, []
    for q in json.load(open(SP1, encoding='utf-8')).get('pytania', []):
        if not is_abcd(q):
            continue
        nodes = nodes_for(q, unknown)
        if not nodes:
            miss.append(q['id']); continue
        sq[q['id']] = {'id': q['id'], 'typ': q.get('typ', ''), 's': ','.join(q.get('sylabus') or []), 't': q.get('tresc', ''),
                       'k': False, 'st': 'materiał lokalny z objaśnieniami kursu', 'src': q.get('pochodzenie', 'Materiał lokalny'),
                       'z': [z.get('doc','') + (', s. ' + str(z['strona']) if z.get('strona') else '') for z in (q.get('zrodlo') or []) if isinstance(z, dict)],
                       'sp1': q['id'].startswith('sp1-'), 'err': q.get('errata',''), 'zap': q.get('zapamietaj',''), 'scen': q.get('scenariusz',''),
                       'o': [{'t': o.get('tekst', ''), 'ok': bool(o.get('poprawna')), 'w': o.get('wyjasnienie', '')} for o in q['opcje']]}
        for n in nodes:
            sn[n].append(q['id'])
    if miss:
        print('BŁĄD: pytania SP1 bez węzła:', miss); sys.exit(1)
    with open(SP1_OUT, 'w', encoding='utf-8') as fh:
        fh.write('// LOKALNIE: SP1 i Altkom, z oznaczonymi autorskimi korektami dydaktycznymi. Oryginały PDF bez zmian. Nie publikować.\n')
        fh.write('window.PYTANIA_SP1=' + json.dumps({'Q': sq, 'N': sn}, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/') + ';\n')
    assert len(sq) == PLAN['lokalne'] and len(sq) + len(Q) == PLAN['limit'] == 400
    print('Materiały lokalne: pytań', len(sq), '->', SP1_OUT)
else:
    print('SP1: brak', SP1, '(pomijam)')
