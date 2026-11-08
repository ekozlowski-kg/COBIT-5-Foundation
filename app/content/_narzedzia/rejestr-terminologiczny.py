#!/usr/bin/env python3
"""Szkic rejestru terminologicznego (STANDARD-DYDAKTYCZNY rozdz. V) dla haseł w terms/.

Uruchamiać z app/ po rejestr-dowody.py:
  python3 content/_narzedzia/rejestr-dowody.py > content/_narzedzia/rejestr-dowody.local.json
  python3 content/_narzedzia/rejestr-terminologiczny.py [--md]
Wynik: content/_narzedzia/rejestr-terminologiczny.draft.json (+ tabela Markdown na stdout z --md).
Z --zapisz dopisuje do terms/<id>.json WYŁĄCZNIE 3 pola wg METODYKA §17.4: `wymowa` (po `en`),
`statusTlumaczenia` i `zrodloTlumaczenia` (po `plInne`); pozostałe pola i formatowanie (indent 2) bez zmian.
Idempotentny – można uruchamiać wielokrotnie, także po dodaniu nowych haseł.

Rozdział trzech warstw (rozdz. V pkt 4):
  wydawca   – oficjalna forma egzaminu PL (PeopleCert, potwierdzana w zestawieniu Altkom i/lub Sample Paper 1 PL),
  podrecznik – oficjalne tłumaczenie podręcznika COBIT 5 PL (ISACA, FW-PL),
  kurs      – tłumaczenie przyjęte w kursie (= forma egzaminacyjna, decyzja użytkownika),
  parafraza – objaśnienie dydaktyczne kursu (poLudzku) – NIE jest tłumaczeniem.
"""
import json, re, sys
from pathlib import Path

C = Path('content')
N = C / '_narzedzia'
DOW = json.load(open(N / 'rejestr-dowody.local.json'))
WYM = json.load(open(N / 'wymowa-en.json'))

# --- ręczne rozstrzygnięcia statusu (uzasadnienie zawsze podane) -------------------------
D_ORYGINAL = {
    'cobit-5': 'Nazwa własna publikacji ISACA – nie tłumaczy się.',
    'cobit-2019': 'Nazwa własna publikacji ISACA – nie tłumaczy się.',
    'itil': 'Nazwa własna (Axelos) – nie tłumaczy się.',
    'iso-27001': 'Oznaczenie normy – nie tłumaczy się.',
    'raci': 'Litery R, A, C, I pochodzą z EN; polskie nazwy ról nie zaczynają się od tych liter – zachować skrót i rozwinięcie EN.',
    'raci-r': 'Litera R = Responsible. PL „Odpowiedzialny wykonawczo” nie oddaje litery; pomylenie z A (Accountable) zmienia sens.',
    'raci-a': 'Litera A = Accountable. PL „Rozliczany” / „odpowiedzialny za sukces” – rozróżnienie Accountability vs Responsibility wymaga oryginału.',
    'raci-c': 'Litera C = Consulted – zachować literę EN.',
    'raci-i': 'Litera I = Informed – zachować literę EN.',
}
B_KONTEKST = {
    'zarzadzanie': 'Management = „Zarządzanie” (zasada 5, PBRM), ale jako rola na Rysunku 9 – „Kierownictwo”. Znaczenie zależy od kontekstu.',
    'rola-kierownictwo': 'Ta sama EN „Management” co obszar Zarządzania; jako rola – „Kierownictwo”.',
    'interesariusz': 'Stakeholder to nie tylko „strona zainteresowana” – obejmuje też tych, na których decyzje wpływają (rejestr rozdz. V).',
    'zasob': 'Resource („zasób”) koliduje z Assets w BAI09, które też przetłumaczono jako „zasoby”.',
    'proc-bai09': 'Assets przetłumaczono jako „zasoby”, co zlewa się z Resource (EDM04, Optymalizacja zasobów). Właściwiej „aktywa”.',
    'rezultat': 'Output (rezultat/wynik/produkt działania) vs Outcome (rezultat procesu w ISO 15504) – ten sam polski wyraz dla dwóch pojęć.',
    'tworzenie-wartosci': 'Value nie oznacza wyłącznie wartości finansowej (rejestr rozdz. V).',
    'potrzeba': 'Need – w zależności od kontekstu potrzeba interesariusza lub wymaganie.',
    'optymalizacja-zasobow': 'Resource – patrz „zasób” (kolizja z Assets).',
    'proces': 'Process – w PRM proces COBIT; w PAM proces oceniany wg ISO/IEC 15504. Termin ten sam, kontekst zmienia wymagania.',
}
C_UWAGA = {
    'lad': 'Governance: Ład (egzamin) / Nadzór (podręcznik) / ład informatyczny (ITwiz). „Nadzór” sugeruje samą kontrolę, a governance obejmuje też ocenę i wyznaczanie kierunku.',
    'aktywator': 'Enabler: Aktywator (egzamin) / Czynnik umożliwiający (podręcznik). Żaden nie jest idealny – enabler to nie „narzędzie” ani zwykły „czynnik”.',
    'skala-ocen': 'Litery skali się zmieniają: EN P = Partially, a PL P = Pełny. Bez tłumaczenia w głowie łatwo o odwrotną odpowiedź.',
    'ocena-c': 'EN P (Partially) = egzamin PL C (Częściowy). Ta sama litera P oznacza w PL co innego.',
    'ocena-p': 'EN F (Fully) = egzamin PL P (Pełny) – kolizja z EN P (Partially).',
    'ocena-w': 'EN L (Largely) = egzamin PL W (Większościowy).',
    'model-zdolnosci': 'Capability: Zdolność (egzamin) / Potencjał (podręcznik). Nie utożsamiać z dojrzałością (maturity, COBIT 4.1).',
    'poziomy-zdolnosci': 'Capability: Zdolność / Potencjał; nie mylić z poziomami dojrzałości.',
    'zarzadzanie-wydajnoscia-aktywatora': 'Performance: wydajność (egzamin) / sprawność (podręcznik) – znaczenie zależne od kontekstu.',
    'pbrm': 'Build: Twórz (SP1) / Wytwarzaj (Altkom) / Budowanie (podręcznik wg Altkom); w tekście podręcznika także „planowanie, budowanie, realizacja i monitorowanie” (FW-PL s. 14, 31).',
}

# Ręczna weryfikacja w korpusach (2026-11-08) – dopisywana do `uwaga`; 'potwierdza' wymusza potwierdzenie formy egzaminu.
WERYFIKACJA = {
    'cechy-dobrej-polityki': ('SP1', 'SP1 używa formy „nieinwazyjne”; podręcznik FW-PL s. 67: „nieingerencyjne”.'),
    'struktura-ramowa-polityki': ('SP1', 'SP1 pisze „struktura ramowa polityki” (lp.), nie „polityk”; podręcznik nie używa tej zbitki.'),
    'proc-apo05': ('SP1', 'SP1 używa „Zarządzanie Portfelem” – jako kategorii umiejętności (Rysunek 39), nie w nazwie procesu; nazwa procesu APO05 potwierdzona pośrednio.'),
    'proc-edm05': ('SP1', 'SP1 (uzasadnienie jednej z odpowiedzi) używa nazwy procesu „Zapewnienie Transparentności Interesariuszy”.'),
    'proc-apo03': (None, 'SP1 używa samego „Architektura Korporacyjna” (kategoria umiejętności), nie pełnej nazwy procesu APO03.'),
    'raci-a': (None, 'Ani SP1, ani zestawienie Altkom nie podają polskiej nazwy roli A; podręcznik: „strona rozliczana”.'),
    'wytyczne-isaca': (None, 'Podręcznik (ilustracja 10): „Obecne wytyczne ISACA” (EN: existing ISACA guidance); „wcześniejsze” to parafraza kursu – formy egzaminacyjnej brak w korpusie.'),
    'pa-4-1': ('SP1', 'SP1 (pytanie z luką o atrybut poziomu 4) potwierdza formę „Miara” procesu.'),
    'pa-2-1': ('SP1', 'SP1 używa formy „Zarządzanie wydajnością” (jako jednej z opcji w pytaniu o atrybuty).'),
    'pa-5-1': ('SP1', 'SP1 używa formy „Innowacja” procesu (jako jednej z opcji w pytaniu o atrybuty).'),
    'pa-1-1': (None, 'Formy „Wykonanie procesu” nie ma ani w SP1, ani w zestawieniu Altkom.'),
    'pa-2-2': (None, 'Formy „Zarządzanie produktami pracy” nie ma ani w SP1, ani w zestawieniu Altkom.'),
    'produkt-pracy': (None, 'Formy „produkt pracy” nie ma ani w SP1, ani w zestawieniu Altkom; podręcznik: „produkty działań”.'),
    'praktyka-bazowa': (None, 'Formy „praktyka bazowa” nie ma ani w SP1, ani w zestawieniu Altkom; podręcznik: „podstawowe praktyki”.'),
    'rezultat-procesu': ('SP1', 'SP1 używa formy „Rezultaty procesu” (jako jednej z opcji); znaczenie ISO 15504 *process outcome*.'),
    'przeznaczenie-procesu': ('ALTKOM', 'Zestawienie Altkom: „Przeznaczenie procesu” (process purpose, referencyjny model procesu).'),
    'cykl-faza-4': (None, 'Podręcznik ma dwie formy: „Użytkowanie/eksploatacja” (ilustracja 13) i „Użytkowanie/obsługa” (tekst s. 29).'),
}

def norm(s):
    s = re.sub(r'\(.*?\)', '', s or '').lower()
    return ' '.join(sorted(w[:5] for w in re.findall(r'\w+', s)))

def wymowa(en):
    e = re.sub(r'\(.*?\)', '', en)
    e = re.split(r'\s+/\s+', e)[0]
    e = re.sub(r'^(Phase|Principle) \d+:\s*', lambda m: m.group(0), e)
    out = []
    for tok in re.findall(r"[A-Za-z][A-Za-z\-]*|\d+|[:,–]", e):
        if tok in ':,–':
            continue
        if tok.isdigit():
            out.append(tok); continue
        if re.fullmatch(r'[A-Z]{2,4}\d{2}', tok):
            tok = tok[:-2]
        if re.fullmatch(r'[A-Z]{1,5}', tok) and tok.lower() not in WYM:
            out.append('-'.join({'A':'ej','B':'bi','C':'si','D':'di','E':'i','F':'ef','G':'dżi','I':'aj','L':'el','M':'em','N':'en','P':'pi','R':'ar','S':'es','T':'ti'}.get(ch, ch) for ch in tok)); continue
        w = WYM.get(tok.lower())
        out.append(w if w else f'?{tok}')
    return ' '.join(out)

def strony(d):
    return {k: sorted({p for lst in v.values() for p in lst})[:6] for k, v in d.items()}

rejestr, braki_wymowy = [], set()
for f in sorted((C / 'terms').glob('*.json')):
    t = json.load(open(f))
    tid, e, p = t['id'], t['plEgzamin'], t['plPodrecznik']
    dw = DOW.get(tid, {'egzamin': {}, 'podrecznik': {}, 'inne': {}})
    ze, zp = strony(dw['egzamin']), strony(dw['podrecznik'])
    # status
    if tid in D_ORYGINAL:
        st, uz = 'D', D_ORYGINAL[tid]
    elif tid in B_KONTEKST:
        st, uz = 'B', B_KONTEKST[tid]
    elif tid in C_UWAGA:
        st, uz = 'C', C_UWAGA[tid]
    elif p in ('—', '') or p.startswith('('):
        st, uz = 'A', 'Brak formy podręcznikowej do porównania; forma egzaminacyjna/kursowa jedyna w obiegu.'
    elif norm(e) == norm(p):
        alt = [i['nazwa'] if isinstance(i, dict) else i for i in t.get('plInne') or []]
        if tid.startswith('proc-') and alt:
            st, uz = 'C', f'Egzamin PL i podręcznik zgodne, ale w obiegu są konkurencyjne odpowiedniki: {"; ".join(alt)}.'
        else:
            st, uz = 'A', 'Egzamin PL i podręcznik PL używają tej samej formy (różnice wielkości liter/szyku pominięte).'
    else:
        st, uz = 'C', f'Egzamin PL: „{e}”; podręcznik PL: „{p}” – konkurencyjne odpowiedniki.'
    potw_e = bool(ze)
    zrodlo = {
        'wydawca': {
            'forma': e,
            'zrodla': [{'doc': k, 'strony': v} for k, v in ze.items()],
            'potwierdzone': potw_e,
            'uwaga': None if potw_e else ('Forma egzaminacyjna nie występuje w zestawieniu Altkom ani w SP1 – przyjęta w kursie przez analogię; '
                                          'traktować jako niepotwierdzoną.'),
        },
        'podrecznik': {
            'forma': p,
            'zrodla': [{'doc': k if k != 'ALTKOM' else 'ALTKOM (kolumna „Podręczniki PL”)', 'strony': v} for k, v in zp.items()],
            'potwierdzone': bool(zp),
        },
        'kurs': {
            'forma': e,
            'zasada': 'Kurs przyjmuje formę egzaminu PL (decyzja użytkownika); formę podręcznikową podaje jako „w podręczniku: …”.'
                      + ('' if potw_e else ' Tu forma egzaminacyjna jest niepotwierdzona.'),
        },
        'parafraza': {'tekst': t.get('poLudzku'), 'uwaga': 'Objaśnienie dydaktyczne kursu – nie jest tłumaczeniem ani terminem.'},
        'inne': [{'forma': (i['nazwa'] if isinstance(i, dict) else i),
                  'zrodlo': (i.get('zrodlo') if isinstance(i, dict) else None),
                  'w_korpusie': strony(dw['inne'].get(i['nazwa'] if isinstance(i, dict) else i, {}))}
                 for i in t.get('plInne') or []],
    }
    w = wymowa(t['en'])
    if '?' in w:
        braki_wymowy.add(tid)
    rejestr.append({'id': tid, 'en': t['en'], 'statusTlumaczenia': st, 'uzasadnienieStatusu': uz,
                    'wymowa': w, 'zrodloTlumaczenia': zrodlo})

def wymowa_prosta(w):
    # §17.4: zapis orientacyjny bez akcentu i łączników, np. „gawernens”; akcent zostaje w szkicu (pole wymowaAkcent).
    return ' '.join(x.replace('-', '').lower() for x in w.split(' '))

def pola_17(r, t):
    z = r['zrodloTlumaczenia']
    potw = [x['doc'] for x in z['wydawca']['zrodla']]
    podr = [(f"FW-PL s. {', '.join(map(str, x['strony'][:3]))}" if x['doc'].startswith('FW-PL') else 'zestawienie Altkom (kolumna „Podręczniki PL”)')
            for x in z['podrecznik']['zrodla']]
    en_krotko = re.sub(r'\s*\(.*?\)', '', t['en']).strip()
    wer = WERYFIKACJA.get(r['id'])
    if wer and wer[0] and wer[0] not in potw:
        potw = potw + [wer[0]]
    uw = [r['uzasadnienieStatusu']]
    if wer:
        uw.append(wer[1])
    uw.append('Forma egzaminu PL potwierdzona: ' + ', '.join('zestawienie Altkom' if d == 'ALTKOM' else 'Sample Paper 1 PL' for d in potw) + '.'
              if potw else 'Forma egzaminu PL NIEPOTWIERDZONA (brak w zestawieniu Altkom i w Sample Paper 1 PL) – przyjęta w kursie przez analogię.')
    if podr:
        uw.append('Forma podręcznika: ' + '; '.join(podr) + '.')
    inne = [f"{i['forma']}" + (f" ({i['zrodlo']})" if i.get('zrodlo') else '') for i in z['inne']]
    if inne:
        uw.append('Inne formy w obiegu: ' + '; '.join(inne) + '.')
    return {
        'wymowa': wymowa_prosta(r['wymowa']),
        'wymowaAkcent': r['wymowa'],
        'statusTlumaczenia': r['statusTlumaczenia'],
        'zrodloTlumaczenia': {
            'wydawcaEgzaminu': z['wydawca']['forma'],
            'podrecznik': z['podrecznik']['forma'],
            'kurs': (f"{z['kurs']['forma']} – {en_krotko}" if '(' in z['kurs']['forma'] else f"{z['kurs']['forma']} ({en_krotko})"),
            'uwaga': ' '.join(uw),
        },
    }

for r in rejestr:
    r['wymowaAkcent'] = r['wymowa']

if '--zapisz' in sys.argv:
    # --tylko=id1,id2,prefiks-* : ogranicza zapis do wskazanych haseł (uzgodnienia z innymi sesjami)
    tylko = next((a.split('=', 1)[1].split(',') for a in sys.argv if a.startswith('--tylko=')), None)
    pomin = next((a.split('=', 1)[1].split(',') for a in sys.argv if a.startswith('--pomin=')), None)
    import fnmatch
    zm = 0
    for r in rejestr:
        if tylko and not any(fnmatch.fnmatch(r['id'], w) for w in tylko):
            continue
        if pomin and any(fnmatch.fnmatch(r['id'], w) for w in pomin):
            continue
        f = C / 'terms' / f"{r['id']}.json"
        src = f.read_text()
        t = json.loads(src)
        nowe = pola_17(r, t)
        if '--nie-nadpisuj' in sys.argv:
            # zachowaj wartości wpisane ręcznie (np. hasła it-* od Materiałów); uzupełnij tylko brakujące klucze
            nowe = {k: (t[k] if k in t else v) for k, v in nowe.items()}
        out = {}
        for k, v in t.items():
            if k in nowe:
                continue
            out[k] = v
            if k == 'en':
                out['wymowa'] = nowe['wymowa']
                out['wymowaAkcent'] = nowe['wymowaAkcent']
            if k == 'plInne':
                out['statusTlumaczenia'] = nowe['statusTlumaczenia']
                out['zrodloTlumaczenia'] = nowe['zrodloTlumaczenia']
        for k in nowe:
            out.setdefault(k, nowe[k])
        txt = json.dumps(out, ensure_ascii=False, indent=2) + ('\n' if src.endswith('\n') else '')
        if txt != src:
            f.write_text(txt); zm += 1
    print(f'Zapisano 3 pola w {zm} plikach terms/.')

json.dump({'_opis': 'SZKIC – do przeglądu przed zapisem do terms/ (format docelowy: METODYKA §17).', 'hasla': rejestr},
          open(N / 'rejestr-terminologiczny.draft.json', 'w'), ensure_ascii=False, indent=1)

from collections import Counter
cnt = Counter(r['statusTlumaczenia'] for r in rejestr)
nie = [r['id'] for r in rejestr if not r['zrodloTlumaczenia']['wydawca']['potwierdzone']]
print(f'Hasła: {len(rejestr)} · statusy: ' + ', '.join(f'{k}={cnt[k]}' for k in 'ABCD')
      + f' · forma egzaminacyjna niepotwierdzona: {len(nie)} · braki wymowy: {sorted(braki_wymowy) or "brak"}')
if '--md' in sys.argv:
    print('\n| id | EN | wymowa | status | egzamin PL (wydawca) | podręcznik PL | potw. egz. |')
    print('|---|---|---|---|---|---|---|')
    for r in rejestr:
        z = r['zrodloTlumaczenia']
        src = ', '.join(x['doc'] for x in z['wydawca']['zrodla']) or '—'
        print(f"| {r['id']} | {r['en']} | {r['wymowa']} | {r['statusTlumaczenia']} | {z['wydawca']['forma']} | {z['podrecznik']['forma']} | {src} |")
