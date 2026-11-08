# Audyt stylu bazy pytań pod egzamin PL (METODYKA §16.6)

Data: 2026-11-08 · sesja Altkom · narzędzie: `python3 content/_narzedzia/audyt-stylu.py content [--md] [--dlugie]` (uruchamiać z `app/`).

Audyt obejmuje treść, scenariusz i opcje pytań z `questions/*.json` bez `*.local.json`. Wyjaśnień nie sprawdza.
- Do liczenia najdłuższej odpowiedzi i rozkładu liter wchodzą tylko pytania wyboru (`egzamin`, `studium`, `rozpoznanie`, `bledy`) z dokładnie jedną poprawną opcją.
- **Opcje pytań wyboru nie są tasowane w aplikacji.** `seededShuffle` w `js/content.js` dotyczy tylko typu `mapa`, więc litera w pliku jest literą na ekranie.

## Liczby na plik

| Plik | Pytań | Wyboru | Najdłuższa poprawna | A/B/C/D | Luka | NIE | Formy podręcznikowe* | „Ilustracja” |
|---|---:|---:|---:|---|---:|---:|---:|---:|
| dzien-1-laik.json | 10 | 7 | 6 (86%) ⚠ | 7/0/0/0 ⚠ | 0 | 2 | 1 | 0 |
| dzien-1.json | 38 | 22 | 12 (55%) ⚠ | 5/14/3/0 ⚠ | 0 | 0 | 1 | 0 |
| dzien-2.json | 30 | 18 | 8 (44%) ⚠ | 5/10/3/0 ⚠ | 0 | 0 | 1 | 0 |
| dzien-3.json | 54 | 37 | 16 (43%) ⚠ | 17/18/2/0 ⚠ | 0 | 1 | 2 | 0 |
| dzien-4.json | 51 | 35 | 15 (43%) ⚠ | 25/8/2/0 ⚠ | 0 | 0 | 1 | 0 |
| final-mistrz.json | 40 | 40 | 12 (30%) | 10/10/10/10 | 1 | 4 | 7 | 0 |
| mapa-kolejnosc.json | 8 | 0 | – | – | 0 | 0 | 0 | 0 |
| pretest.json | 21 | 21 | 6 (29%) | 21/0/0/0 ⚠ | 0 | 0 | 1 | 0 |
| strategia-ex.json | 21 | 14 | 6 (43%) ⚠ | 14/0/0/0 ⚠ | 0 | 1 | 0 | 0 |
| symulacje.json | 44 | 44 | 24 (55%) ⚠ | 13/11/10/10 | 0 | 2 | 5 | 0 |
| uzupelnienie-pokrycia.json | 30 | 26 | 5 (19%) | 7/7/6/6 | 3 | 3 | 0 | 0 |
| **Razem** | 347 | 264 | 110 (42%) | 124/78/36/26 | 4 (2%) | 13 (5%) | 19 | 0 |

Dla porównania SP1:
- najdłuższa odpowiedź jest poprawna w 10 z 50 pytań (20%);
- litery poprawnych odpowiedzi: A 9, B 12, C 14, D 15;
- pytania z luką: 4 z 50 (8%);
- pytania z NIE: 3 z 50 (6%).

\* Kolumna podaje surowe trafienia skryptu. Po ręcznej weryfikacji realnych problemów jest 12 (lista niżej).

## Wnioski
1. **Rozkład liter to najpoważniejszy problem.** W plikach dni 1–4 poprawna odpowiedź prawie nigdy nie jest D: 0 razy na 112 pytań. W `pretest`, `strategia-ex` i `dzien-1-laik` poprawna jest zawsze A. Ucząca się osoba po kilku dniach nauczy się nieświadomie „to raczej A albo B”. Na egzaminie ta wskazówka nie działa: w SP1 najczęstsza jest D.
2. **Poprawna odpowiedź za często jest najdłuższa.** Dzieje się tak w 42% pytań, przy celu ≤ 35% i 20% w SP1. Najgorsze pliki to `symulacje` (55%), `dzien-1` (55%) i `dzien-1-laik` (86%).
3. **Odwołania do rysunków są w porządku.** Żadne pytanie nie używa „Ilustracja N”.
4. **Pytań z luką jest za mało.** Są tylko 4 na 264 (2%), wszystkie w `uzupelnienie-pokrycia` i `final-mistrz`, a w SP1 jest ich 8%. Pytań z NIE jest 5%, tyle co w SP1.
5. **Terminologia jest w większości czysta.** Do poprawy jest 12 miejsc, wypisanych niżej.

## Lista do poprawy

### A. Litery: dwie możliwe drogi
- **Zalecana: tasowanie po stronie UI.** Opcje pytań wyboru tasujemy przy wyświetlaniu, deterministycznie po `q.id`, jak w `seededShuffle`.
  - Dotyczy lekcji, powtórek, drilla i symulacji.
  - Nie dotyczy SP1 (1:1 z arkuszem) ani `final-mistrz`, który ma już ręcznie wyrównane litery.
  - Sprawdziłem, że to bezpieczne: żadne wyjaśnienie nie odwołuje się do litery („odpowiedź B”), a żadna opcja nie brzmi „wszystkie powyższe”, „A i B” itp.
  - To jedna zmiana w kodzie zamiast ręcznego przestawiania około 200 pytań. Właściciel: sesja UI.
- **Alternatywa: przestawienie opcji w plikach.** Materiały ustawiają poprawne litery mniej więcej po równo w każdym pliku. Najpilniejsze są: `dzien-1`…`dzien-4`, `pretest`, `strategia-ex`, `dzien-1-laik`.

### B. Najdłuższa poprawna (cel ≤ 35% na plik)
Poprawka: skrócić poprawną odpowiedź albo wydłużyć 1–2 dystraktory, by miały podobną długość. Najwięcej pracy wymagają `symulacje` (24 pytania) i pliki dni 1–4. Pełną listę id daje `audyt-stylu.py content --dlugie`.

### C. Terminologia (formy podręcznikowe w treści lub opcjach bez oznaczenia)
| Plik | Pytanie | Jest | Powinno być (egzamin PL) | Właściciel |
|---|---|---|---|---|
| dzien-1.json | q-pr-01-02 (C) | „działań oceny, kierowania i monitorowania” | „Oszacuj, Kieruj i Monitoruj” | Materiały |
| dzien-2.json | q-pr-10-03 (D) | „PA 4.1 – pomiar procesu” | „PA 4.1 – Miara procesu” | Materiały |
| dzien-3.json | q-en-02-05 (C) | „Cele dostępności i bezpieczeństwa” | „Cele dostępu i bezpieczeństwa” (Dostęp i Bezpieczeństwo) | Materiały |
| dzien-4.json | q-pc-04-04 (A) | „Praktyki zarządzania / nadzoru” | „Praktyki zarządzania / Ładu” | Materiały |
| symulacje.json | q-sym-006 (B) | „Celów dostępności i bezpieczeństwa” | „Celów dostępu i bezpieczeństwa” | Materiały |
| symulacje.json | q-sym-011 (treść) | „produkty działań” | „produkty pracy” | Materiały |
| symulacje.json | q-sym-018 (treść) | „produktem działań” | „produktem pracy” | Materiały |
| symulacje.json | q-sym-023 (treść) | „sprawność procesu” | „wydajność / wykonanie procesu”: forma egzaminacyjna niepotwierdzona (w traps oznaczona „(?)”) | Materiały, niski priorytet |
| final-mistrz.json | q-fn-m-14 (treść) | „produkty działań” | „produkty pracy” | Metodyka |
| final-mistrz.json | q-fn-m-20 (C), q-fn-m-21 (A) | „nieingerencyjność” | „nieinwazyjność” | Metodyka |
| final-mistrz.json | q-fn-m-37 (D) | „N – nie osiągnięto” | „N – Nieosiągnięty” | Metodyka |

Trafienia uznane za fałszywe alarmy (bez zmian):
- q-ex-00-01: „nadzoruje” to czasownik;
- q-en-06-03 i q-fn-m-23: „metodyka testowania/projektów” w znaczeniu ogólnym, nie Framework;
- q-fn-m-36: „w pełni osiągnięte” w opisie;
- q-sym-006 (treść): „cel procesu” w znaczeniu process goal, które na egzaminie brzmi tak samo;
- q-pre-m0-08-egzamin: pytanie celowo pyta o formę podręcznikową.

### D. Luki
Brakuje około 10–15 pytań z luką („Zidentyfikuj brakujące słowo/słowa w następującym zdaniu…”), żeby zbliżyć się do 8%. Najlepsze miejsca to `symulacje` i `dzien-2`…`dzien-4`, w tematach z definicjami (PRM, atrybuty procesu, RACI, wskaźniki).

## Aktualizacja (ponowny audyt tego samego dnia)
- **Poprawione przez Materiały:**
  - q-pc-04-04, q-sym-006, q-sym-011 i q-sym-018;
  - q-sym-023 zostaje bez zmian, bo dotyczy odpowiedzialności właściciela za sprawność procesu (Rysunek 33).
- **Bank urósł do 460 pytań (375 wyboru):**
  - najdłuższa poprawna: 43%;
  - litery A/B/C/D: 191/95/51/38;
  - luki: 7;
  - NIE: 17.
- **Nowe pliki** (`hasla-skrajne-a/c/d`, `skrajnosci-im`, `final-www`) powtarzają te same problemy:
  - `hasla-skrajne-a`, `hasla-skrajne-d` i `skrajnosci-im`: poprawna zawsze A;
  - najdłuższa poprawna: `hasla-skrajne-a` 64%, `hasla-skrajne-c` 59%;
  - „ilustracja N” w 5 pytaniach: q-skr-cykl-informacji-1, q-skr-role-dzialania-relacje-1, q-skr-role-organizacyjne-1, q-skr-wymiary-aktywatora-1, q-skr-zasob-1;
  - terminy: q-skr-wskaznik-wiodacy-1 (D) „Pomiar procesu”, q-skr-zasob-1 „przedsiębiorstwa”, q-fn-w-24 „produkty działań” i „Wskaźniki wydajności”.
- **Status:**
  - zgłoszone: Materiałom (hasla-skrajne, skrajnosci-im) i Metodyce (final-www);
  - ręczne przestawianie liter wstrzymane do decyzji Metodyki o tasowaniu w UI.

## Aktualizacja 2 (650 pytań)
- `audyt-stylu.py` ma nowe wyjątki kontekstowe:
  - „cel procesu” zgłasza tylko w kontekście ISO 15504; liczby mnogiej „cele procesu” nie zgłasza nigdy;
  - „dostępności i bezpieczeństwa” pomija przy celach procesu (SP1 pyt. 2) i jakości informacji;
  - „pomiar procesu” zgłasza tylko jako nazwę atrybutu PA 4.1.
- Wyniki:
  - najdłuższa poprawna: 36% (było 42–43%);
  - litery A/B/C/D: 277/121/74/62, zostaje tasowanie w UI;
  - pytań z luką: 16.
- **Do poprawy (nie przekazane: limit wiadomości między sesjami):**
  - `zapas-impc` q-zap-pc-02-poziomy-1 (C): „Pomiar procesu i kontrola procesu” → „Miara procesu i kontrola procesu”;
  - „Ilustracja N” → „Rysunek N” w `final-pliki`: q-fin-pliki-01, -07, -20, -24;
  - to samo w `skrajnosci-pr`: q-sk-komponent-cel-ladu-1, q-sk-aktywatory-ladu-1 (treść i D), q-sk-rola-interesariusze-1 (treść i C), q-sk-rola-kierownictwo-1/-2/-3, q-sk-rola-operacyjne-1, q-sk-baza-wiedzy-1, q-sk-wymiar-interesariusze-2 (D).

## Kontrole
- `python3 tools/serve.py --check`: 0 błędów, 631 ostrzeżeń (głównie nowe wymagania metodyki dla lekcji; niezwiązane z tym audytem).
- `verify-sources.py content ../sources/text/framework-pl`: OK.
- `sp1-overlap.py content`: 0 błędów, 51 uwag o niskim podobieństwie (≤ 0,27).
- `--check` nie ostrzega dziś o literach ani o długości odpowiedzi, mimo zapisu w §16.6. Do dodania przez UI: można wywołać `audyt-stylu.py` albo przenieść jego reguły.
