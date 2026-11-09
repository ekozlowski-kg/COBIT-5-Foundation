#!/usr/bin/env python3
"""Generuje questions/terminologia-en.json: ćwiczenia `nazwa-en` i `popraw-termin` (METODYKA §17.10).

Uruchamiać z app/:  python3 content/_narzedzia/gen_terminologia_en.py [--publikuj]
(bez --publikuj: content/_narzedzia/terminologia-en.oczekuje.json; z --publikuj: content/questions/terminologia-en.json)
- `nazwa-en` powstaje z haseł w terms/ (pole `en`, wymowa, status). Przy procesach, których nazwa
  egzaminacyjna PL jest niepotwierdzona, ćwiczymy tylko kod i nazwę EN, bez nazwy PL (decyzja Metodyki).
- `popraw-termin` jest pisany ręcznie poniżej (lista POPRAW). Fakty sprawdzone w korpusie FW-PL.
Format typów opisuje klucz `_format` w pliku wynikowym (do przeniesienia do SCHEMA.md przez UI).
"""
import json, re
from pathlib import Path

C = Path('content')
T = {json.load(open(f))['id']: json.load(open(f)) for f in (C / 'terms').glob('*.json')}

US = [('Organisational', 'Organizational'), ('Organisation', 'Organization'), ('Organise', 'Organize'), ('Optimisation', 'Optimization'),
      ('Optimising', 'Optimizing'), ('Realisation', 'Realization'), ('Behaviour', 'Behavior'), ('Programmes', 'Programs'), ('Programme', 'Program')]

def kanon(en):
    e = re.sub(r'\s*\((?:enabler|outer|middle|inner|PA|ISO|process goals|GP|Figure).*?\)', '', en)
    e = re.sub(r'\s*\([A-Z]{2,5}\)$', '', e).strip()
    return e

def warianty(e, kod=None):
    out = {e}
    m = re.match(r'^(Principle \d+):\s*(.+)$', e)
    if m:
        out.add(m.group(2))
    if kod and e.startswith(kod + ' '):
        out.add(e[len(kod) + 1:])
    for v in list(out):
        u = v
        for a, b in US:
            u = re.sub(a, b, u, flags=re.I) if a.lower() in u.lower() else u
        out.add(u)
        out.add(v.replace(' and ', ' & '))
    # pierwsza = forma kanoniczna ISACA (UI pokazuje ją jako poprawną odpowiedź)
    return [e] + sorted(out - {e}, key=lambda s: (-len(s), s))

def zrodlo(t, domyslne=None):
    z = [{k: v for k, v in x.items() if k in ('doc', 'strona', 'ilustracja')} for x in t.get('zrodla') or [] if x.get('doc') in ('FW-PL', 'SYL', 'ALTKOM')]
    return (z[:2] or domyslne or [{'doc': 'FW-PL'}])

def wyjasnij(t, e, pokaz_pl):
    w = t.get('wymowa')
    s = f"Oryginał ISACA: **{e}**" + (f" (wym. „{w}”)" if w else '') + '.'
    if pokaz_pl:
        z = t.get('zrodloTlumaczenia') or {}
        s += f" Egzamin PL: „{z.get('wydawcaEgzaminu', t['plEgzamin'])}”"
        if t['plPodrecznik'] and t['plPodrecznik'] != t['plEgzamin'] and not t['plPodrecznik'].startswith('('):
            s += f"; w podręczniku: „{t['plPodrecznik']}”"
        s += '.'
    else:
        s += ' Polska nazwa tego procesu na egzaminie nie jest potwierdzona, dlatego ćwiczymy tylko kod i nazwę EN.'
    return s

# (id hasła, polecenie | None = domyślne, nadpisanie EN | None, trudnosc)
NAZWY = [
    ('lad', 'Podaj angielski termin, który egzamin PL tłumaczy jako „Ład”.', None, 1),
    ('zarzadzanie', 'Podaj angielski termin, od którego COBIT 5 oddziela Ład (zasada 5): „Zarządzanie”.', None, 1),
    ('aktywator', 'Podaj angielski termin dla „Aktywatora” (w podręczniku: „czynnik umożliwiający”).', None, 1),
    ('interesariusz', 'Podaj angielski termin dla „Interesariusza”.', None, 1),
    ('struktura-ramowa', 'Podaj angielski termin, który egzamin PL tłumaczy jako „Struktura ramowa”.', None, 1),
    ('organizacja', 'Podaj angielski termin, który egzamin PL tłumaczy jako „Organizacja” (w podręczniku: „przedsiębiorstwo”).', None, 2),
    ('kaskada-celow', None, None, 1),
    ('cele-organizacji', None, None, 2),
    ('cele-zwiazane-z-it', None, None, 2),
    ('tworzenie-wartosci', 'Podaj angielską nazwę Celu Ładu: „Tworzenie Wartości”.', 'Value Creation', 2),
    ('realizacja-korzysci', None, None, 2),
    ('optymalizacja-ryzyka', None, None, 2),
    ('optymalizacja-zasobow', None, None, 2),
    ('wskaznik-wiodacy', None, None, 2),
    ('wskaznik-opozniony', None, None, 2),
    ('edm', 'Podaj pełną angielską nazwę domeny EDM.', None, 1),
    ('apo', 'Podaj pełną angielską nazwę domeny APO.', None, 2),
    ('bai', 'Podaj pełną angielską nazwę domeny BAI.', None, 2),
    ('dss', 'Podaj pełną angielską nazwę domeny DSS.', None, 2),
    ('mea', 'Podaj pełną angielską nazwę domeny MEA.', None, 2),
    ('pbrm', 'Podaj angielskie rozwinięcie skrótu PBRM (obszar Zarządzania).', None, 2),
    ('zasada-1', 'Podaj angielską nazwę zasady 1 COBIT 5.', None, 2),
    ('zasada-2', 'Podaj angielską nazwę zasady 2 COBIT 5.', None, 2),
    ('zasada-3', 'Podaj angielską nazwę zasady 3 COBIT 5.', None, 2),
    ('zasada-4', 'Podaj angielską nazwę zasady 4 COBIT 5.', None, 2),
    ('zasada-5', 'Podaj angielską nazwę zasady 5 COBIT 5.', None, 2),
    ('zasady-polityki-struktury', 'Podaj angielską nazwę aktywatora 1.', None, 2),
    ('struktury-organizacyjne', 'Podaj angielską nazwę aktywatora 3.', None, 2),
    ('kultura-etyka-zachowanie', 'Podaj angielską nazwę aktywatora 4.', None, 2),
    ('informacja', 'Podaj angielską nazwę aktywatora 5.', None, 1),
    ('uslugi-infrastruktura-aplikacje', 'Podaj angielską nazwę aktywatora 6.', None, 2),
    ('ludzie-umiejetnosci-kompetencje', 'Podaj angielską nazwę aktywatora 7.', None, 2),
    ('prm', 'Podaj angielską nazwę modelu, który zawiera 37 procesów COBIT 5 (bez skrótu).', None, 2),
    ('cykl-wdrozenia', None, None, 2),
    ('pierscien-program', 'Podaj angielską nazwę zewnętrznego pierścienia Cyklu Życia Wdrożenia.', 'Programme management', 3),
    ('pierscien-zmiana', 'Podaj angielską nazwę środkowego pierścienia Cyklu Życia Wdrożenia.', 'Change enablement', 3),
    ('pierscien-doskonalenie', 'Podaj angielską nazwę wewnętrznego pierścienia Cyklu Życia Wdrożenia.', 'Continual improvement life cycle', 3),
    ('punkty-zapalne', None, None, 2),
    ('zdarzenia-wyzwalajace', None, None, 2),
    ('uzasadnienie-biznesowe', None, None, 1),
    ('atrybuty-procesu', None, 'Process attributes', 2),
    ('raci', 'Rozwiń skrót RACI po angielsku (cztery słowa, w kolejności liter).', 'Responsible, Accountable, Consulted, Informed', 2),
]

pytania = []
for tid, polecenie, en_nad, trud in NAZWY:
    t = T.get(tid)
    if not t:
        continue
    e = en_nad or kanon(t['en'])
    pokaz = (t.get('status') == 'oficjalne')
    if not polecenie:
        polecenie = f"Podaj angielski termin dla: „{t['plEgzamin']}”."
    pytania.append({
        'id': f'q-ten-{tid}', 'typ': 'nazwa-en', 'sylabus': t['sylabus'][:2], 'bloom': 'wiedza', 'trudnosc': trud,
        'tresc': polecenie, 'termin': tid, 'poprawne': warianty(e),
        'wyjasnienie': wyjasnij(t, e, pokaz), 'zrodlo': zrodlo(t), 'status': 'oficjalne' if pokaz else 'niepotwierdzone',
    })

# 37 procesów: tylko kod → nazwa EN (bez nazwy PL, gdy niepotwierdzona).
for tid in sorted(k for k in T if re.match(r'proc-[a-z]{3}\d{2}$', k)):
    t = T[tid]
    kod = tid[5:].upper()
    e = t['en'].strip()
    pokaz = t.get('status') == 'oficjalne'
    pytania.append({
        'id': f'q-ten-{tid}', 'typ': 'nazwa-en', 'sylabus': t['sylabus'][:2], 'bloom': 'wiedza', 'trudnosc': 3,
        'tresc': f'Podaj angielską nazwę procesu **{kod}**.', 'termin': tid, 'poprawne': warianty(e, kod),
        'wyjasnienie': wyjasnij(t, e, pokaz) + ' Nazwy EN procesów: COBIT 5 Framework, Figure 16 (w podręczniku PL: ilustracja 16, s. 33).',
        'zrodlo': [{'doc': 'FW-PL', 'strona': 33, 'ilustracja': '16'}], 'status': 'oficjalne',
    })

def zd(tekst, ok, wyj, zly=None, popr=None):
    d = {'tekst': tekst, 'poprawne': ok, 'wyjasnienie': wyj}
    if not ok:
        d['blednyTermin'] = zly
        d['poprawka'] = popr
    return d

POPRAW = [
    ('PR-02-14', 'Opis kolegi o Ładzie i Zarządzaniu', 30, [
        zd('Domena EDM należy do obszaru Ładu (Governance).', True, 'Tak. EDM = Evaluate, Direct and Monitor – pięć procesów Ładu (s. 32).'),
        zd('Zarządzanie (Management) ocenia potrzeby interesariuszy, kieruje przez priorytety i decyzje oraz monitoruje wyniki.', False,
           'To opis Ładu: ocena, kierowanie, monitorowanie (EDM). Zarządzanie planuje, tworzy, wykonuje i monitoruje (PBRM).', 'Zarządzanie (Management)', 'Ład (Governance)'),
        zd('Zarządzanie planuje, tworzy, wykonuje i monitoruje działania zgodnie z kierunkiem wyznaczonym przez Ład.', True, 'Tak. Plan, Build, Run and Monitor (s. 31–32).'),
    ]),
    ('EN-02-25', 'Tabela RACI dla zadania „Test syreny alarmowej”', 75, [
        zd('Dyżurny, który sam wykonuje test, ma w tabeli literę A (Accountable).', False,
           'Kto wykonuje zadanie, jest R – Responsible (egzamin PL: „Odpowiedzialny wykonawczo”). A ma ten, kto rozlicza i zatwierdza wynik.', 'A (Accountable)', 'R (Responsible)'),
        zd('Naczelnik, który odpowiada za sukces zadania i zatwierdza wynik, ma literę A (Accountable).', True, 'Tak. A = Accountable, „Rozliczany”; w zadaniu jest jedna osoba z A.'),
        zd('Kierownik łączności, którego tylko powiadamia się o wyniku testu, ma literę C (Consulted).', False,
           'Kogo się tylko powiadamia, ten jest I – Informed. C – Consulted – to osoba, której zdania zasięga się przed wykonaniem.', 'C (Consulted)', 'I (Informed)'),
    ]),
    ('PR-02-13', 'Raport o wskaźnikach zmian w systemie', 28, [
        zd('Odsetek zmian wdrożonych z wypełnioną listą kontrolną to wskaźnik opóźniony (lag indicator).', False,
           'Mierzy stosowanie dobrych praktyk, czyli jest wskaźnikiem wiodącym – lead indicator (s. 28). Opóźnione mierzą osiągnięcie celów.', 'wskaźnik opóźniony (lag indicator)', 'wskaźnik wiodący (lead indicator)'),
        zd('Liczba incydentów po wdrożeniu zmian mierzy, czy cel został osiągnięty – to wskaźnik opóźniony (lag indicator).', True, 'Tak. Lag indicators mierzą osiągnięcie celów (s. 28).'),
        zd('W podręczniku PL wskaźniki wiodące nazywają się „wskaźniki wyprzedzające”.', True, 'Tak – podręcznik: „wyprzedzające”/„następujące”, egzamin PL: „wiodące”/„opóźnione” (s. 28, zestawienie Altkom).'),
    ]),
    ('PC-01-03', 'Notatka z oceny procesu', 45, [
        zd('Atrybut osiągnięty w 90% dostaje na polskim egzaminie ocenę F.', False,
           '>85–100% to EN F (Fully achieved), a na egzaminie PL – P (Pełny).', 'F', 'P (Pełny)'),
        zd('Atrybut osiągnięty w 70% dostaje ocenę W (Większościowy), po angielsku L – Largely achieved.', True, 'Tak. >50–85% = L / W (s. 45).'),
        zd('Atrybut osiągnięty w 40% dostaje na polskim egzaminie ocenę P.', False,
           '>15–50% to EN P (Partially achieved), ale egzamin PL pisze C (Częściowy). Litera P po polsku oznacza Pełny.', 'P', 'C (Częściowy)'),
    ]),
    ('PR-01-04', 'Ściąga kolegi z nazwami domen', 33, [
        zd('APO – Align, Plan and Organise; na egzaminie PL: „Dopasowanie, planowanie i organizacja”.', False,
           'To forma podręcznikowa. Egzamin PL: „Dostosuj, Planuj i Organizuj” (zestawienie Altkom).', 'Dopasowanie, planowanie i organizacja', 'Dostosuj, Planuj i Organizuj'),
        zd('MEA – Monitor, Evaluate and Assess.', True, 'Tak (ilustracja 16, s. 33).'),
        zd('EDM – Evaluate, Direct and Manage.', False, 'Trzecie słowo to Monitor: Evaluate, Direct and Monitor.', 'Manage', 'Monitor'),
    ]),
    ('PR-01-01', 'Prezentacja o pięciu zasadach', 13, [
        zd('Zasada 3 – Applying a Single Integrated Framework (Zastosowanie Pojedynczej Zintegrowanej Struktury Ramowej).', True, 'Tak (ilustracja 2, s. 13).'),
        zd('Zasada 2 – Separating Governance From Management.', False,
           'To zasada 5. Zasada 2 to Covering the Enterprise End-to-End (Pokrycie całej organizacji).', 'Separating Governance From Management', 'Covering the Enterprise End-to-End'),
        zd('Zasada 4 – Enabling a Holistic Approach.', True, 'Tak (s. 13).'),
    ]),
    ('PC-01-01', 'Opis modelu oceny procesu', 42, [
        zd('W COBIT 5 proces ocenia się na poziomach dojrzałości (maturity levels) 0–5 według ISO/IEC 15504.', False,
           'COBIT 5 ocenia poziomy zdolności – capability levels (egzamin PL: Zdolność; podręcznik: potencjał). Poziomy dojrzałości to COBIT 4.1.', 'poziomy dojrzałości (maturity levels)', 'poziomy zdolności (capability levels)'),
        zd('Poziom 3 to proces przewidywalny (predictable).', False, 'Poziom 3 to proces ustanowiony (established); przewidywalny to poziom 4 (s. 42).', 'przewidywalny (predictable)', 'ustanowiony (established)'),
        zd('Poziom 5 to proces zoptymalizowany (optimising).', True, 'Tak (s. 42).'),
    ]),
    ('IM-01-01', 'Szkic Cyklu Życia Wdrożenia', 38, [
        zd('Zewnętrzny pierścień to Aktywowanie zmiany (change enablement).', False,
           'Zewnętrzny pierścień to Zarządzanie programem (programme management). Aktywowanie zmiany jest pierścieniem środkowym.', 'Aktywowanie zmiany (change enablement)', 'Zarządzanie programem (programme management)'),
        zd('Środkowy pierścień to Aktywowanie zmiany (change enablement).', True, 'Tak (ilustracja 17).'),
        zd('Wewnętrzny pierścień to Główny cykl życia ciągłego doskonalenia (continual improvement life cycle).', True, 'Tak.'),
    ]),
    ('IM-02-02', 'Uzasadnienie programu wdrożenia', 37, [
        zd('Powtarzające się wyniki audytu o niedostatecznej sprawności IT to punkt zapalny (pain point).', True, 'Tak – to przykład punktu zapalnego (s. 37).'),
        zd('Fuzja z inną organizacją to punkt zapalny (pain point).', False,
           'Fuzje i przejęcia to zdarzenie wyzwalające – trigger event (podręcznik: „zdarzenie inicjujące”, s. 37).', 'punkt zapalny (pain point)', 'zdarzenie wyzwalające (trigger event)'),
        zd('Zdarzenia wyzwalające mogą pochodzić ze środowiska wewnętrznego lub zewnętrznego organizacji.', True, 'Tak (s. 37).'),
    ]),
    ('PR-02-07', 'Opis kaskady celów', 18, [
        zd('Kaskada celów zaczyna się od potrzeb interesariuszy.', True, 'Tak – potrzeby interesariuszy są punktem wyjścia (s. 18).'),
        zd('Potrzeby interesariuszy przekłada się bezpośrednio na cele związane z informatyką (IT-related goals), a dopiero z nich wynikają cele organizacji.', False,
           'Kolejność jest odwrotna: potrzeby → cele organizacji (enterprise goals) → cele związane z informatyką → cele aktywatorów.', 'cele związane z informatyką → cele organizacji', 'cele organizacji → cele związane z informatyką'),
        zd('Cele związane z informatyką przekłada się na cele aktywatorów (enabler goals).', True, 'Tak (s. 18).'),
    ]),
    ('PR-02-01', 'Notatka o celu Ładu', 17, [
        zd('Cel Ładu to Tworzenie Wartości (Value Creation).', True, 'Tak (s. 17).'),
        zd('Optymalizacja ryzyka (Risk Optimisation) to jeden z siedmiu aktywatorów.', False,
           'Optymalizacja ryzyka to element Celu Ładu – obok realizacji korzyści i optymalizacji zasobów – a nie aktywator.', 'aktywator', 'element Celu Ładu (Tworzenie Wartości)'),
        zd('Tworzenie Wartości obejmuje realizację korzyści, optymalizację ryzyka i optymalizację zasobów.', True, 'Tak (ilustracja 3, s. 17).'),
    ]),
    ('PR-01-02', 'Wypowiedź kolegi na egzaminie próbnym', 27, [
        zd('COBIT 5 opisuje siedem kategorii czynników umożliwiających (enablers).', False,
           'Treść jest prawdziwa, ale na egzaminie PL termin brzmi „aktywatory”. „Czynniki umożliwiające” to forma podręcznikowa.', 'czynniki umożliwiające', 'aktywatory'),
        zd('Kultura, Etyka i Zachowanie (Culture, Ethics and Behaviour) to jeden z siedmiu aktywatorów.', True, 'Tak (aktywator 4).'),
        zd('COBIT 5 jest metodyką (framework).', False, 'Na egzaminie PL framework to „Struktura ramowa”; „metodyka” to forma podręcznikowa.', 'metodyka', 'struktura ramowa'),
    ]),
]

# Hasła sprawdzane przez każde ćwiczenie popraw-termin (pole `terminy`; UI odblokowuje po lekcji, która je wprowadza).
TERMINY_POPRAW = [
    ['lad', 'zarzadzanie', 'edm', 'pbrm'],
    ['raci', 'raci-r', 'raci-a', 'raci-c', 'raci-i'],
    ['wskaznik-wiodacy', 'wskaznik-opozniony'],
    ['skala-ocen', 'ocena-p', 'ocena-w', 'ocena-c'],
    ['apo', 'edm', 'mea'],
    ['zasada-2', 'zasada-3', 'zasada-4', 'zasada-5'],
    ['poziomy-zdolnosci', 'model-zdolnosci', 'poziom-3', 'poziom-4', 'poziom-5'],
    ['pierscien-program', 'pierscien-zmiana', 'pierscien-doskonalenie'],
    ['punkty-zapalne', 'zdarzenia-wyzwalajace'],
    ['kaskada-celow', 'cele-organizacji', 'cele-zwiazane-z-it', 'cele-aktywatorow'],
    ['tworzenie-wartosci', 'optymalizacja-ryzyka', 'realizacja-korzysci', 'optymalizacja-zasobow'],
    ['aktywator', 'kultura-etyka-zachowanie', 'struktura-ramowa'],
]
assert len(TERMINY_POPRAW) == len(POPRAW)

# Lekcja wprowadzająca hasło (frontmatter `wprowadza`). Atomy bez własnej lekcji (proc-*, pierscien-*, raci-r…, poziom-N,
# ocena-X) dziedziczą odblokowanie po najbliższym przodku w mapa-cobit.json, który ma lekcję – ten przodek trafia do `terminy`.
WPROWADZA = {}
for f in sorted((C / 'lessons').rglob('*.md')):
    m = re.match(r'^---\n(.*?)\n---', f.read_text(), re.S)
    w = m and re.search(r'^wprowadza:\s*(.*)$', m.group(1), re.M)
    for tid in (re.findall(r'[a-z0-9][a-z0-9-]*', w.group(1)) if w else []):
        WPROWADZA.setdefault(tid, f.stem)
_mapa = json.load(open(C / 'mapa-cobit.json'))
_mapa = _mapa if isinstance(_mapa, list) else (_mapa.get('wezly') or _mapa.get('nodes') or [])
WEZLY = {n['id']: n for n in _mapa}
WEZEL_HASLO = {t.get('mapa'): k for k, t in T.items() if t.get('mapa')}

def przodek_z_lekcja(tid):
    n = WEZLY.get(T.get(tid, {}).get('mapa'))
    while n and n.get('rodzic'):
        n = WEZLY.get(n['rodzic'])
        h = n and WEZEL_HASLO.get(n['id'])
        if h and h in WPROWADZA:
            return h
    return None

def z_odblokowaniem(ids):
    out = []
    for t in ids:
        out.append(t)
        if t not in WPROWADZA:
            p = przodek_z_lekcja(t)
            if p and p not in out and p not in ids:
                out.append(p)
    return out

for q in pytania:
    q['terminy'] = z_odblokowaniem([q['termin']])

for i, (syl, tytul, strona, tw) in enumerate(POPRAW, 1):
    pytania.append({
        'id': f'q-tpt-{i:02d}', 'typ': 'popraw-termin', 'sylabus': [syl], 'bloom': 'rozumienie', 'trudnosc': 2,
        'tresc': f'{tytul}. Wskaż zdania z błędnym terminem i podaj poprawny termin (EN i egzamin PL).',
        'twierdzenia': tw, 'terminy': z_odblokowaniem([t for t in TERMINY_POPRAW[i - 1] if t in T]), 'zrodlo': [{'doc': 'FW-PL', 'strona': strona}], 'status': 'oficjalne',
    })

FORMAT = {
    'nazwa-en': 'Pola: tresc (polecenie), termin (id hasła), poprawne (lista akceptowanych odpowiedzi; pierwsza = kanoniczna), wyjasnienie. '
                'Porównanie: małe litery; myślniki, ukośniki i półpauzy → spacja; usuń . , : ; \' " ( ); scal spacje; dopuść pisownię US (-ize, -or, Program). '
                'Ocena: trafienie dowolnego elementu `poprawne`.',
    'popraw-termin': 'Wariant `bledy`: tresc, twierdzenia [{tekst, poprawne, wyjasnienie, blednyTermin?, poprawka?}]. '
                     'Kursant zaznacza błędne zdania; przy błędnym zdaniu podaje poprawny termin (porównanie z `poprawka` jak w nazwa-en, tolerancyjnie, '
                     'albo samoocena po pokazaniu `poprawka`). Bez obsługi typu UI może renderować go jak `bledy`.',
}
out = {'opis': 'Ćwiczenia terminologiczne EN (METODYKA §17.10). Plik generowany: content/_narzedzia/gen_terminologia_en.py – nie edytować ręcznie.',
       '_format': FORMAT, 'pytania': pytania}
import sys
# Dopóki walidator i UI nie znają typów `nazwa-en` / `popraw-termin`, plik czeka w _narzedzia/ (nie psuje --check).
cel = C / 'questions' / 'terminologia-en.json' if '--publikuj' in sys.argv else C / '_narzedzia' / 'terminologia-en.oczekuje.json'
cel.write_text(json.dumps(out, ensure_ascii=False, indent=2) + '\n')
print('zapisano:', cel)
from collections import Counter
print(Counter(q['typ'] for q in pytania), 'razem', len(pytania))
bez = [q['id'] for q in pytania if not any(t in WPROWADZA for t in q['terminy'])]
print('bez lekcji odblokowującej:', bez or 'brak')
