# Kontrakt treści – COBIT 5 Foundation

Ten plik opisuje format wszystkich plików w `content/`. Sesja **Materialy** pisze treść, a sesja **UI** ją parsuje i waliduje (Zod). Zmiany w formacie trzeba uzgadniać między sesjami.

```
content/
  SCHEMA.md                  ← ten plik
  syllabus.json              ← kody tematów sylabusa PeopleCert (szkielet kursu)
  terminology-traps.json     ← mapa EN / podręcznik PL / egzamin PL (pułapki)
  terms/<id>.json            ← hasła słownika = przypisy w sidebarze
  lessons/<modul>/<NN-temat>.md  ← jednostki dydaktyczne (slajdy)
  questions/<plik>.json      ← ćwiczenia i pytania (6 typów)
  sample-paper-1.local.json  ← NIE commitować (.gitignore) – generuje content/_narzedzia/extract-sample-paper.py
```

Wszystkie teksty są po polsku. Termin angielski jest zawsze w osobnym polu `en`.

---

## 1. Wspólne typy

### `Status` – jak pewna jest treść
| wartość | znaczenie | etykieta w UI |
|---|---|---|
| `oficjalne` | treść / definicja z COBIT 5 lub sylabusa, ze źródłem | „Oficjalne COBIT 5” |
| `uproszczenie` | nasze wyjaśnienie prostym językiem, zgodne merytorycznie | „Uproszczenie dydaktyczne” |
| `przyklad` | przykład autorski (życie, firma, urząd) | „Przykład autorski” |
| `niepotwierdzone` | np. termin egzaminacyjny PL, którego nie widzieliśmy w oficjalnym arkuszu | „Do potwierdzenia” |

### `Zrodlo`
```json
{ "doc": "FW-PL", "strona": 17, "ilustracja": "3", "cytat": "Tworzenie wartości oznacza osiąganie korzyści…" }
```
`doc` ∈
- `FW-PL`: COBIT 5 Framework, wydanie polskie (ISACA Warsaw Chapter). Numer strony w PDF = numer drukowany.
- `SYL`: PeopleCert COBIT 5 Foundation Syllabus v01.2 (2016).
- `SP1`: Sample Paper 1 PL (ISACA 2016) z uzasadnieniem.
- `ALTKOM`: Altkom „Różnice tłumaczenia PL v1.1”.
- `WWW`: źródło internetowe, wtedy jest dodatkowe pole `url`.

Pola `strona`, `ilustracja` i `cytat` są opcjonalne. Jeśli jest `cytat`, skrypt weryfikujący szuka go dosłownie na wskazanej stronie.

### Kod tematu sylabusa
Format `OO-PP-TT`, np. `PR-02-05`:
- `OO`: obszar (`PR`, `EN`, `IM`, `PC`),
- `PP`: poziom Blooma (`01` = wiedza, `02` = rozumienie),
- `TT`: numer tematu.

Dla treści wprowadzających spoza sylabusa używamy obszaru `M0`, np. `M0-00-01`.

---

## 2. `syllabus.json`
```json
{
  "zrodlo": {...Zrodlo},
  "egzamin": { "pytania": 50, "opcje": 4, "minuty": 40, "minutyDodatkowe": 10, "progProcent": 50, "celTreningowy": 35 },
  "obszary": [ { "kod": "PR", "nazwa": "Zasady COBIT 5", "en": "The COBIT 5 Principles" } ],
  "tematy": [
    {
      "kod": "PR-02-05",
      "obszar": "PR",
      "poziom": "rozumienie",               // "wiedza" | "rozumienie"
      "tytul": "Kaskada: cele organizacji → cele związane z informatyką",
      "en": "How Enterprise Goals cascade to IT-related Goals",
      "zakres": ["…", "…"],                  // co dokładnie trzeba umieć (z sylabusa, po polsku)
      "zrodlo": [{ "doc": "FW-PL", "strona": 18, "ilustracja": "6" }],
      "dzien": 1
    }
  ]
}
```

## 3. `terms/<id>.json`: hasło słownika / przypis
`id` to kebab-case bez polskich znaków (`interesariusz`, `realizacja-korzysci`), równy nazwie pliku.
```json
{
  "id": "lad",
  "en": "Governance",
  "plEgzamin": "Ład",                      // GŁÓWNA nazwa wyświetlana w treści
  "plPodrecznik": "Nadzór",                // nazwa z polskiego Frameworka
  "plInne": [{ "nazwa": "Ład informatyczny", "zrodlo": "ITwiz 2014" }],
  "pulapka": true,                         // true ⇢ odznaka „⚠ Pułapka terminologiczna”
  "pulapkaOpis": "Na egzaminie „Ład”, w podręczniku „Nadzór”. To ten sam termin.",
  "kategoria": "egzaminacyjne",            // "podstawowe" | "egzaminacyjne" | "standard" | "skrot"
  "status": "oficjalne",
  "poziom1": "Jedno-dwa zdania – szybkie objaśnienie.",
  "poziom2": "Rozszerzenie: analogie, zależności (Markdown).",
  "poziom3": "Oficjalna definicja / kontekst egzaminacyjny (Markdown).",
  "warianty": {                            // tryb „prościej / dokładniej / ekspercko” (opcjonalny)
    "prosto": "…", "dokladniej": "…", "ekspercko": "…"
  },
  "przyklady": {                           // każdy opcjonalny; status zawsze "przyklad"
    "zycie": "…", "organizacja": "…", "admin": "…", "it": "…"
  },
  "nieMylicZ": [{ "termin": "zarzadzanie", "roznica": "…" }],   // termin = id hasła albo tekst
  "egzamin": "Co trzeba zapamiętać na egzamin.",
  "powiazane": ["zarzadzanie", "edm"],
  "sylabus": ["PR-02-14"],
  "zrodla": [ { "doc": "FW-PL", "strona": 91, "cytat": "…" } ]
}
```

## 4. `lessons/<modul>/<NN-temat>.md`: jednostka dydaktyczna
Plik zaczyna się blokiem frontmatter YAML. **Parser najpierw zdejmuje frontmatter** (pierwszy blok `---` … `---` na początku pliku). Pozostała część dzieli się na slajdy separatorem `\n---\n` (linia zawierająca wyłącznie `---`).

```markdown
---
id: m0-01-interesariusz
modul: M0                 # M0 | PR | EN | IM | PC | EX
modulNazwa: Moduł 0 – Fundamenty
temat: Kim jest interesariusz?
lekcja: "0.1"
dzien: 1
sylabus: [M0-00-01, PR-02-01]
minuty: 15
cwiczenia: [q-m0-01-01, q-m0-01-02]   # id z questions/*.json, pokazywane po ostatnim slajdzie
---

<!-- slajd: start -->
# Punkt wyjścia
Treść slajdu…

---

<!-- slajd: pojecie -->
# …
```

**Typy slajdu** (komentarz `<!-- slajd: X -->` w pierwszej linii, opcjonalny, domyślnie `tresc`). UI może stylować je różnie:
`start` (sytuacja wyjściowa), `rozklad` (rozkładamy na części), `pojecie` (wprowadzenie terminu), `przyklad` (zmiana kontekstu), `porownanie` (tabela lub dwie kolumny), `nie-jest` („Czym to nie jest?”), `schemat` (diagram), `pulapka` (slajd o pułapce terminologicznej), `wniosek`, `zapamietaj`, `egzamin` (wskazówka egzaminacyjna), `tresc`, a od §8: `mapa` (gdzie to leży w COBIT 5) i `wlasne-slowa` (odtworzenie z pamięci).

**Przypisy:** `[[id]]` wyświetla `plEgzamin` hasła jako klikalny przypis. `[[id|własny tekst]]` wyświetla własny tekst. Kliknięcie otwiera hasło `id` w sidebarze.

**Bloki** (kontener `:::nazwa` … `:::`):
- `:::zapamietaj` to ramka „Zapamiętaj”.
- `:::pulapka` to ostrzeżenie terminologiczne.
- `:::egzamin` to wskazówka egzaminacyjna.
- `:::kontekst zycie|firma|admin` to przykład w jednym z kontekstów. Ikona zależy od kontekstu, status zawsze `przyklad`. Kontekst `psp` (przykłady strażackie) jest wycofany od 2026-11-08 – walidator traktuje go jako błąd w lekcjach `format: krotki`.
- `:::zrodlo FW-PL 17 3` to odnośnik źródłowy w formacie `doc strona [ilustracja]`. Renderowany jako mała stopka.
- `:::uproszczenie` oznacza fragment, który jest naszym uproszczeniem dydaktycznym.
- `:::mapa <id-węzła>` i `:::wlasne-slowa` – patrz §8.3.

Diagramy są w Markdown (tabele, listy) albo jako blok kodu ```` ```mermaid ````, jeśli UI go obsłuży. Inaczej tabela.

## 5. `questions/<plik>.json`
```json
{ "pytania": [ Pytanie, … ] }
```
Wspólne pola każdego pytania:
```json
{
  "id": "q-pr-01-03",
  "typ": "egzamin",                   // patrz niżej
  "sylabus": ["PR-02-01"],
  "lekcja": "pr-01-tworzenie-wartosci", // id lekcji (opcjonalnie)
  "bloom": "wiedza",                  // "wiedza" | "rozumienie" | "zastosowanie"
  "trudnosc": 2,                      // 1–3
  "tresc": "Treść pytania (Markdown, może mieć [[przypisy]])",
  "zrodlo": [ {...Zrodlo} ],
  "status": "oficjalne"               // zgodność merytoryczna odpowiedzi
}
```
Dodatkowe pola zależne od typu:

| `typ` | pola | sprawdza |
|---|---|---|
| `rozpoznanie` | `opcje: [{tekst, poprawna, wyjasnienie}]` (≥2, dokładnie 1 poprawna) | czy rozumie pojęcie |
| `egzamin` | jak wyżej, **dokładnie 4 opcje**, każda z `wyjasnienie` | styl egzaminu Foundation |
| `studium` | `scenariusz` (Markdown) + `opcje` jak `egzamin` | zastosowanie |
| `dopasowanie` | `pary: [{lewa, prawa}]` (UI miesza prawą kolumnę), `wyjasnienie` | termin ↔ definicja |
| `klasyfikacja` | `kategorie: [string]`, `elementy: [{tekst, kategoria, wyjasnienie}]` | rozróżnianie przykładów |
| `bledy` | `tekst` (lista twierdzeń) → `twierdzenia: [{tekst, poprawne: bool, wyjasnienie}]` | wykrywanie nieprawidłowości |
| `mapa` | `element`, `poprawny` (id węzła), `dystraktory` (3 id węzłów), `wyjasnienie` – §8.4 | gdzie to leży w COBIT 5 |
| `kolejnosc` | `elementy` (w poprawnej kolejności, UI miesza), `wyjasnienie` – §8.4 | listy i sekwencje |

Zasada: **każda opcja ma `wyjasnienie`**, czyli dlaczego jest dobra albo dlaczego jest zła i czym się różni od poprawnej.

## 6. `terminology-traps.json`
```json
{ "pulapki": [ { "en": "Governance", "podrecznik": "Nadzór", "egzamin": "Ład", "inne": ["Ład informatyczny (ITwiz)"],
                 "modul": "wspolne", "zrodlo": [{"doc":"ALTKOM"}], "status": "oficjalne", "termId": "lad" } ] }
```
Źródło danych dla drillu terminologicznego (EN ↔ egzamin PL ↔ podręcznik PL).

## 7. `sample-paper-1.local.json` (lokalnie, poza repo)
Tak jak `questions`, typ `egzamin`, z polami `numer`, `kodSP` (np. `PR0105`) i `poprawnaLitera`. Plik powstaje po uruchomieniu skryptu
`swift content/_narzedzia/pdftext.swift <sciezka-do-pdf> 1 44 > sp1.txt`, a potem
`python3 content/_narzedzia/extract-sample-paper.py sp1.txt content/sample-paper-1.local.json` (z katalogu `app/`).

---

## 8. Rozszerzenia z metodyki nauki (METODYKA.md §8)
Uzasadnienie dydaktyczne jest w `METODYKA.md`; tu jest tylko format. Walidator (`python3 tools/serve.py --check`) zgłasza **błąd** przy złym formacie znanego pola, a **ostrzeżenie** przy brakującym polu, które metodyka zaleca (np. `pulapka` w błędnej opcji).

### 8.1 `mapa-cobit.json` – taksonomia „gdzie to leży w COBIT 5”
```json
{ "wezly": [
  { "id": "aktywatory", "nazwa": "Siedem aktywatorów", "en": "Enablers", "rodzic": null, "obszar": "EN" },
  { "id": "wymiary-aktywatora", "nazwa": "Wymiary aktywatora", "en": "Enabler dimensions", "rodzic": "model-aktywatora", "obszar": "EN",
    "opis": "Jedno zdanie.", "kolejnosc": 1 }
] }
```
- `id` (kebab-case, unikalne), `nazwa` (egzamin PL), `en`, `rodzic` (`id` istniejącego węzła albo `null`), `obszar` ∈ `PR`, `EN`, `IM`, `PC`.
- Opcjonalnie `opis` (1 zdanie) i `kolejnosc` (liczba – gdy rodzeństwo tworzy sekwencję, np. fazy 1–7).
- Bez cykli w `rodzic`.

### 8.2 `terms/<id>.json`
- `mapa`: `id` węzła z `mapa-cobit.json`. Wymagane dla haseł należących do taksonomii. Na tej podstawie UI **sam generuje** pytania typu `mapa` (dystraktory: rodzeństwo węzła, potem kuzyni z tego samego obszaru).

### 8.3 Lekcje
- Frontmatter `zgadnij: [id, id]` – 1–2 pytania typu `rozpoznanie` albo `egzamin` pokazywane **przed** pierwszym slajdem. Bez oceny; zapis jako `pretest` (nie liczy się do opanowania).
- Slajd `<!-- slajd: mapa -->` zawiera blok:
  ```
  :::mapa wymiary-aktywatora
  Opcjonalny komentarz (Markdown).
  :::
  ```
  UI rysuje fragment taksonomii (przodkowie, rodzeństwo, dzieci) z podświetlonym węzłem.
- Slajd `<!-- slajd: wlasne-slowa -->` zawiera blok:
  ```
  :::wlasne-slowa
  Polecenie: wyjaśnij własnymi słowami, czym Ład różni się od Zarządzania.
  ???
  Wzorzec odpowiedzi (Markdown, może mieć [[przypisy]]).
  :::
  ```
  Pierwsza część to polecenie, po linii `???` – wzorzec. UI: pole tekstowe → „Pokaż wzorzec” → samoocena „Mam to / Częściowo / Nie mam”. „Częściowo” i „Nie mam” dodają hasła z przypisów slajdu do powtórek; odpowiedź trafia do Notatek.
- Moduł `EX` (strategia egzaminacyjna) z `dzien` 2–4.

### 8.4 Pytania
- W `egzamin` i `studium` każda **błędna** opcja ma `pulapka` ∈ `inna-kategoria` | `zbyt-waskie` | `forma-podrecznikowa` | `prawda-nie-na-temat` | `falsz` | `odwrocone`. Poprawna opcja nie ma tego pola.
- `mapa`:
  ```json
  { "id": "q-…", "typ": "mapa", "sylabus": ["EN-01-08"], "tresc": "Gdzie w COBIT 5 leży…?",
    "element": "Jakość kontekstowa", "poprawny": "cele-aktywatora",
    "dystraktory": ["wymiary-aktywatora", "zasady", "wskazniki"], "wyjasnienie": "…" }
  ```
  `poprawny` i `dystraktory` (dokładnie 3) to `id` węzłów z `mapa-cobit.json`. `tresc` jest opcjonalna (domyślnie „Gdzie w COBIT 5 leży: *element*?”).
- `kolejnosc`: `{ "id": "q-…", "typ": "kolejnosc", "tresc": "Ułóż fazy…", "elementy": ["…", "…"], "wyjasnienie": "…" }` – `elementy` (≥ 3) w poprawnej kolejności; UI je miesza.
- Opcjonalnie `pretest: true` – pytanie przeznaczone do kroku „Zgadnij”. UI nie używa pretestów w mini-testach, testach dnia ani symulacjach.
- Opcjonalnie `zestaw: "symulacja"` – pytanie bez `lekcja`, przeznaczone do symulacji i testów dnia (do dnia przypisywane przez kody `sylabus`). UI losuje dwie kolejne symulacje tak, by w miarę możliwości się nie powtarzały.
- Moduł `EX` (strategia egzaminacyjna): `lekcja` 9.1–9.6, `dzien` 2–5. Numery lekcji sortowane są naturalnie (1.2 < 1.10).

### 8.5 `syllabus.json`
```json
"egzamin": {
  "wagi":  { "PR": 15, "EN": 21, "IM": 7, "PC": 7 },
  "progi": { "testDnia": 70, "symulacja": 35, "liczbaSymulacji": 2, "obszar": 60, "drill": 90, "powtorzonaPomylka": 2 }
},
"dni": [
  { "dzien": 1, "tytul": "Fundamenty i zasada 1", "opis": "…",
    "pustaKartka": { "tytul": "Kaskada celów", "polecenie": "…", "wzorzec": "Markdown (tabela/lista)" } }
]
```
- `wagi` – liczba pytań z obszaru w arkuszu 50-pytaniowym (suma = 50). Symulator losuje w tych proporcjach.
- `progi` – w procentach (`testDnia`, `obszar`, `drill`) albo w punktach na 50 (`symulacja`). `powtorzonaPomylka` – po tylu pomyłkach z tym samym hasłem UI pokazuje inne wyjaśnienie.
- `dni[]` – `dzien` 1–5 (wymagany), `tytul` i `opis` opcjonalnie nadpisują tytuły dni w UI, `pustaKartka` (`tytul`, `polecenie`, `wzorzec`) – ćwiczenie wieczorne „pusta kartka”.

## 10. Od zera do biegłego – tryb laika (METODYKA.md §10)
Zasada zera: kurs nie zakłada żadnej wiedzy wejściowej. Każde słowo spoza codziennej polszczyzny ma przy **pierwszym** użyciu przypis `[[id]]` albo nawias z wyjaśnieniem po ludzku. Walidator zgłasza braki z tej sekcji jako **ostrzeżenia** (nie błędy), dopóki treść jest uzupełniana.

### 10.1 `terms/<id>.json`
```json
{
  "poLudzku": "Wszystko, co pomaga, żeby informatyka w organizacji działała dobrze: ludzie, zasady, narzędzia, informacje.",
  "skadNazwa": "Kalka z angielskiego „enabler”; podręcznik PL tłumaczy to jako „czynnik umożliwiający”."
}
```
- `poLudzku` (**wymagane**, string): jedno zdanie, do ~20 słów, słownictwo codzienne, bez innych terminów COBIT. Brak → ostrzeżenie; zły typ albo > 30 słów → ostrzeżenie.
- `skadNazwa` (opcjonalne, string, Markdown): dlaczego nazwa brzmi dziwnie (kalka z EN, inne tłumaczenie w podręczniku). Zalecane przy hasłach z `pulapka: true`.
- UI: slajd `pojecie` i przypis pokazują `poLudzku` **przed** nazwą egzaminacyjną; `skadNazwa` jest w części rozwijanej.

### 10.2 Lekcje
- (Wycofane 2026-11-08) Dawne lekcje zaczynały się sceną `:::kontekst psp` z historii przewodniej (`content/historia.md`). Nowe lekcje i podręcznik używają wyłącznie przykładów ogólnych: firma i urząd.
- UI pokazuje na slajdzie tylko pierwszy blok `:::kontekst`; kolejne kryją się pod przyciskiem „Pokaż inny przykład”. Gdy hasło ze slajdu ma ≥ `powtorzonaPomylka` pomyłek, UI sam rozwija kolejny kontekst.
- Nowy typ slajdu **`rozwiazany`** (rozwiązany przykład przed „Sprawdź”):
  ```
  <!-- slajd: rozwiazany -->
  # Rozwiązujemy razem

  :::rozwiazany
  Treść pytania autorskiego (podobnego do pytań z „Sprawdź”, nie z SP1).
  - A. Opcja
  - B. Opcja
  - C. Opcja
  - D. Opcja
  +++
  **Krok 1 – co jest pytane?** Słowo-klucz: …
  +++
  **Krok 2 – jaka kategoria COBIT?** …
  +++
  **Krok 3 – eliminacja.** A – *inna kategoria*: …; B – *zbyt wąskie*: …
  +++
  **Odpowiedź: C.** Dlaczego: …
  :::
  ```
  Pierwsza część: treść pytania i lista Markdown z **dokładnie 4** opcjami. Potem **co najmniej 2** kroki rozdzielone liniami `+++` (zalecane 4: pytanie i słowo-klucz → kategoria → eliminacja z nazwą pułapki z §8.4 → odpowiedź i „dlaczego”). Inny format → ostrzeżenie.
  UI: najpierw pytanie, potem przycisk „Następny krok” odsłania kroki po kolei.
- Każda lekcja, która ma w `cwiczenia` pytania `egzamin` albo `studium`, ma **jeden** slajd `rozwiazany`. Brak → ostrzeżenie.
- Lekcje `m0/00-zanim-zaczniesz` (przed interesariuszem) i `m0/09-slowa-wytrychy` (dostępna od dnia 1; pulpit do niej linkuje).

### 10.3 Preferencje UI (localStorage, poza treścią)
- `c5.tryb` ∈ `laik` (domyślnie) | `pelny`. W trybie `laik`:
  - przypis pokazuje kolejno `poLudzku`, nazwę egzaminacyjną, `poziom1`; `poziom2`, `poziom3`, `plPodrecznik`, EN, `plInne` i `skadNazwa` są zwinięte pod „Więcej (inne nazwy, szczegóły)”;
  - odznaka pułapki jest zawsze widoczna, jej opis rozwija się po kliknięciu;
  - przełącznik poziomów pokazuje „Prościej” (domyślnie) i „Dokładniej”, bez „Ekspercko”.
- Od dnia 2 UI raz proponuje przejście na `pelny` („Dobrze Ci idzie – pokazać więcej szczegółów?”); niczego nie zmienia samo.

## 11. Prowadzenie za rękę: ścieżka laik → biegły (METODYKA.md §11)
Wszystkie pola z tej sekcji są **opcjonalne w kodzie**; walidator zgłasza ich brak jako **ostrzeżenia**. UI działa także bez nich.

### 11.1 Frontmatter lekcji
```yaml
wprowadza: [interesariusz, potrzeba]   # hasła, które ta lekcja DEFINIUJE
wymaga: [m0-00-zanim-zaczniesz]        # id lekcji, na których się opiera (miękka bramka)
cel: "Potrafię powiedzieć, kto w komendzie decyduje, a kto wykonuje."   # 1–2 zdania „Potrafię…”
zapas: [q-m0-01-04, q-m0-01-05]        # ≥ 2 pytania do pętli naprawczej
priorytet: 1                           # 1 rdzeń egzaminu | 2 ważne | 3 pogłębienie
```
Porządek kursu: `dzien` → moduł → `lekcja` (naturalnie). Walidator ostrzega, gdy:
- hasło `[[id]]` pojawia się w lekcji wcześniejszej niż ta, która ma je w `wprowadza` (wyjątek: zapowiedź `[[id|…]]` w zdaniu z „poznasz…/w lekcji…”);
- lekcja wprowadza > 4 nowe pojęcia (z `wprowadza`, a bez niego – hasła użyte w kursie po raz pierwszy);
- zdanie tekstu autorskiego ma > 25 słów (poza `:::zrodlo`, tabelami i kodem);
- brakuje `cel`, `priorytet`, albo lekcja z `cwiczenia` ma < 2 pytania w `zapas`;
- `wymaga` wskazuje nieistniejącą albo późniejszą lekcję.
Błąd: `zapas` z nieistniejącym pytaniem, `priorytet` spoza 1–3.

### 11.2 `syllabus.json`
```json
"rdzen": ["interesariusz", "lad", "zarzadzanie", "aktywator"],          // ~25 haseł do „Wytłumacz w minutę”
"projekt": { "wzorzec": ["…", "…", "…", "…", "…", "…", "…", "…"] },   // wzorzec projektu końcowego, 8 odpowiedzi (Markdown)
"dni": [ { "dzien": 1, "potrafie": ["Potrafię …", "Potrafię …"] } ]   // 5–8 zdań na dzień, samoocena wieczorem
```
Pola projektu końcowego (kolejność wzorca): 1) 3 interesariusze i ich potrzeby, 2) cel organizacji → cel związany z IT → cel aktywatora, 3) aktywator, który najbardziej kuleje, 4) 2 procesy (nazwa egzaminacyjna i domena), 5) punkt zapalny, 6) zdarzenie wyzwalające, 7) faza cyklu życia, 8) poziom zdolności jednego procesu z uzasadnieniem (N/C/W/P).

### 11.3 Zachowanie UI (bez nowych pól)
- **Rusztowanie wg dnia lekcji** – slajd `rozwiazany`: dzień 1 kroki po kolei; dzień 2 „Twoja kolej” przed każdym krokiem; od dnia 3 zwinięty pod „Potrzebujesz przykładu?”. Podpowiedzi w ćwiczeniach: dni 1–3 widoczne, 4–5 ukryte (do włączenia); test dnia i symulacje – nigdy.
- **Podpowiedzi** (generowane): 1) „Gdzie to leży?” – temat sylabusa i ścieżka na mapie; 2) „Odrzuć jedną” – opcja z `pulapka: falsz`, a bez niej `prawda-nie-na-temat`; 3) „Pokaż rozwiązany przykład” – slajd `rozwiazany` lekcji. Odpowiedź po podpowiedzi nie liczy się do opanowania.
- **Pewność** (ćwiczenia i test dnia, nie symulacje): „Pewny / Raczej / Strzelam”. Pomyłka przy „Pewny” → hasło na początek powtórek i inne wyjaśnienie; trafienie przy „Strzelam” nie liczy się do opanowania. Pulpit pokazuje kalibrację (cel ≥ 85%).
- **Opanowanie lekcji**: ≥ 2 z 3 (≥ 2/3) poprawnych w „Sprawdź” bez podpowiedzi i bez „Strzelam”. Inaczej pętla naprawcza: kolejny kontekst + pytania z `zapas`.
- **Informacja zwrotna** wg rodzaju pułapki opcji: co wybrałeś → dlaczego kusi → jak odróżnić → zdanie do zapamiętania.
- **Tryb „minimum do zdania”** (propozycja po teście dnia < 50% albo nieukończonym dniu): naprawa i `priorytet: 1` najpierw (EN i PR przed IM i PC), `priorytet: 3` poza planem.

## 12. Atomy, głębokość, skrajności, mentor (METODYKA.md §12)
Braki z tej sekcji walidator zgłasza jako **ostrzeżenia**. Zły format znanego pola to **błąd**.

### 12.1 `terms/<id>.json` – nowe pola
```json
{
  "glebokosc": {
    "prosty": "Markdown, 2–4 zdania, życie codzienne, bez IT i żargonu.",
    "zaawansowany": "Markdown, 3–6 zdań, komenda z historii albo urząd; powiązanie z ≥ 1 innym atomem ([[id]]).",
    "skrajny": "Markdown, 4–8 zdań, przypadek graniczny… **Rozstrzygnięcie:** reguła do zapamiętania."
  },
  "zagmatwania": [
    { "mit": "Co ludzie myślą (błędnie albo nieprecyzyjnie).", "prawda": "Jak jest naprawdę i po czym to poznać." }
  ],
  "mentor": {
    "czestyBlad": "Najczęstsze nieporozumienie uczniów.",
    "jakTlumaczyc": "Analogia albo kolejność wyjaśniania, która działa.",
    "pytanieKontrolne": "Pytanie sprawdzające prawdziwe zrozumienie.",
    "odpowiedzKontrolna": "Oczekiwana odpowiedź (Markdown)."
  }
}
```
- `glebokosc`: wszystkie trzy klucze są wymagane, jeśli pole istnieje. `skrajny` musi zawierać `**Rozstrzygnięcie:**`. Brak pola → ostrzeżenie.
- `zagmatwania`: 2–4 elementy `{mit, prawda}`. Brak → ostrzeżenie.
- `mentor`: wszystkie 4 klucze. Brak → ostrzeżenie (dla haseł z `kategoria` ≠ `standard`).
- Nowe atomy: `id` = `id` węzła mapy, a pole `mapa` wskazuje ten sam węzeł. Każdy liść mapy bez hasła → ostrzeżenie.

### 12.2 `mapa-cobit.json`
- Procesy: węzły `proc-edm01` … `proc-mea03` (37), `rodzic` = `domena-edm` / `domena-apo` / `domena-bai` / `domena-dss` / `domena-mea`, `kolejnosc` = numer procesu. `nazwa` = kod i nazwa PL, np. „APO12 Zarządzanie ryzykiem”.

### 12.3 Pytania
- Opcjonalnie `skrajnosc: true` oraz `atom: "<id hasła>"` (wymagane, gdy `skrajnosc`). Dozwolone typy: `egzamin`, `studium`, `rozpoznanie`, `bledy`, `klasyfikacja`. Pozostałe zasady (4 opcje w `egzamin`, `wyjasnienie`, `pulapka`, zakaz SP1) bez zmian.
- Pytania skrajne do nowych atomów: `questions/skrajnosci-<obszar>.json` (`pr`, `en`, `im`, `pc`, `procesy`).
- Każdy atom (hasło z `mapa` wskazującym liść) ma ≥ 1 pytanie z `skrajnosc: true` i `atom` = jego `id`. Brak → ostrzeżenie.
- Typ `bledy` z `mentor: true` = „Popraw kolegę”: `tekst` to wypowiedź kolegi, a `twierdzenia` to jej zdania z oceną.

### 12.4 Lekcje
- Blok slajdu:
  ```
  :::glebiej <id-hasła>
  Opcjonalny komentarz.
  :::
  ```
  UI rysuje drabinę „Prosty → Zaawansowany → Skrajny” z `glebokosc` hasła. Kolejny szczebel odsłania się przyciskiem. „Skrajny” w trybie `laik` pojawia się dopiero po opanowaniu lekcji (§11.3).
- Moduł `MT` (`modul: MT`, `lessons/mt/`), `priorytet: 3`, `dzien: 5`. Lekcje MT nie są wymagane do zaliczenia dnia 5.

## 13. Mentor w trakcie kursu (METODYKA.md §13)
> **Uwaga na nazwy:** pole hasła `mentor` (§12.1, obiekt `{czestyBlad, jakTlumaczyc, pytanieKontrolne, odpowiedzKontrolna}`) to co innego niż **typ pytania** `"typ": "mentor"` (§13.1). Z kolei „Popraw kolegę” to nadal typ `bledy` z `"mentor": true` (§12.3).

### 13.1 Pytanie `typ: "mentor"` – „Kursant pyta”
```json
{ "id": "q-men-pr-08-1", "typ": "mentor", "sylabus": ["PR-02-05"], "lekcja": "pr-08-zasada-4-siedem-aktywatorow",
  "postac": "Kasia Nowik, dyżurna SK", "tresc": "„Czyli Ład robi informatyk, tak?”", "status": "przyklad",
  "opcje": [
    { "tekst": "…", "poprawna": true, "wyjasnienie": "…" },
    { "tekst": "…", "poprawna": false, "wyjasnienie": "…", "pulapkaMentora": "zargon" },
    { "tekst": "…", "poprawna": false, "wyjasnienie": "…", "pulapkaMentora": "falszywe-uproszczenie" },
    { "tekst": "…", "poprawna": false, "wyjasnienie": "…", "pulapkaMentora": "przytakniecie" } ] }
```
- Dokładnie 4 opcje, jedna `poprawna`; każda ma `tekst` i `wyjasnienie` (błąd).
- Błędne opcje: `pulapkaMentora` ∈ `zargon` | `falszywe-uproszczenie` | `przytakniecie` | `nie-na-temat` (błąd przy innej wartości). Brak `postac` → ostrzeżenie.
- Pytania `mentor` trafiają do `cwiczenia` lekcji (od dnia 2: ≥ 1, od dnia 4: ≥ 2). Nie pojawiają się w próbnych egzaminach ani teście dnia.
- UI: nagłówek „Kursant pyta”, informacja zwrotna wg `pulapkaMentora` (co wybrałeś → dlaczego kusi → jak odróżnić → co zapamiętać).

### 13.2 Frontmatter lekcji: `typowePytania`
Pola obiektowe we frontmatter zapisujemy jako **JSON w jednej linii** (parser czyta wartości zaczynające się od `[{` albo `{` przez `json.loads`):
```yaml
typowePytania: [{"pytanie": "Czyli Ład robi informatyk?", "odpowiedz": "Nie – Ład to rola szefów…"}, {"pytanie": "…", "odpowiedz": "…"}]
```
2–3 pary. Trafiają do karty prowadzącego (§13.3).

### 13.3 Karta prowadzącego (UI generuje, `#/karta/<id-lekcji>`, z wydrukiem)
Źródła części karty: cel ← `cel`; rozgrzewka ← pierwsze pytanie `zgadnij`; po ludzku ← `poLudzku` haseł z `wprowadza` (bez niego – pierwsze przypisy); przykład ← pierwszy blok `:::kontekst`; typowa pomyłka ← `mentor.czestyBlad`, `zagmatwania`, `nieMylicZ`, `:::pulapka`; jak tłumaczyć ← `mentor.jakTlumaczyc`; typowe pytania ← `typowePytania`; pytanie kontrolne ← `mentor.pytanieKontrolne`/`odpowiedzKontrolna`, a bez nich pierwsze pytanie z `cwiczenia`.

## 14. Interfejs dla osoby, która słabo zna komputer (METODYKA.md §14)
Dotyczy tylko UI (bez nowych pól treści):
- Tekst bazowy 18 px (przycisk „A+” do 24 px), klikalne elementy ≥ 48 px, każdy przycisk ma słowo (także na telefonie).
- Przypisy `[[id]]` to podkreślone słowa z „?”; panel pomocy ma „Zamknij” u góry i u dołu.
- Na każdym ekranie przycisk „? Co mam teraz zrobić” (jedno zdanie dopasowane do miejsca), na Starcie jeden duży „Następny krok” i „Inne miejsca” niżej, raz dziennie przypomnienie o kopii postępu w pliku.
- **Test żargonu** (`--check`, ostrzeżenie): w widocznych tekstach interfejsu (napisy w `js/` i tekst `index.html`) nie może być słów z tabeli §14.3: dryl/drill, Leitner, SRS, eksport/import, JSON, bundle, localStorage, cache, prezentacja, pretest, symulacja. Identyfikatory i klucze w kodzie nie są sprawdzane.
- **W tekstach lekcji** tych słów też unikamy (Materiały).

## 15. Finał „skrajnie biegły” (METODYKA.md §15)
- Moduł `FN` (`lessons/fn/`, `lekcja` 10.x, `dzien: 5`, `priorytet: 3`). UI odblokowuje go po pierwszym podejściu do Sample Paper 1; do tego czasu lekcje FN pokazują kłódkę.
- Pole pytania **`final`** ∈ `pliki` | `www` | `mistrz` (błąd przy innej wartości), tylko typ `egzamin` albo `studium`, zalecane `trudnosc: 3`. Pliki: `questions/final-pliki.json`, `final-www.json`, `final-mistrz.json`.
- `final: "www"`: `zrodlo` jest listą z wpisem `{ "doc": "WWW", "url": "…", "uwaga": "inspiracja – treść własna" }` **oraz** wpisem `FW-PL` ze stroną (brak → ostrzeżenie).
- Pytania z `final` nie wchodzą do zwykłych próbnych egzaminów. Egzamin mistrzowski losuje 50 z nich w proporcjach `egzamin.wagi`, 40 minut, bez podpowiedzi; „skrajnie biegły” = ≥ 40/50 dwa razy z rzędu i każdy obszar ≥ 70%.
- Sample Paper 1 drugi raz – tryb z omówieniem, w oryginalnej kolejności odpowiedzi.

## 16. Dźwignie przyswajania (METODYKA.md §16)
### 16.1 Frontmatter lekcji
```yaml
wielkiObraz: 4                  # 1–7: na które z 7 pytań „o co naprawdę chodzi” odpowiada lekcja (kompas)
twierdzenia: [Ład ocenia, kieruje i monitoruje., Zarządzanie planuje, tworzy, wykonuje i monitoruje.]   # 3–5, trafiają do ściągi dnia
```
### 16.2 Blok `:::atom` (atom twierdzenia)
```
:::atom
twierdzenie: Każdy aktywator ma **interesariuszy**: wewnętrznych i zewnętrznych.
poLudzku: Zawsze jest ktoś, kto z danej rzeczy korzysta albo kogo ona dotyczy.
zycie: Lodówka w domu ma „interesariuszy”: domowników i gości.
komenda: Lista numerów OSP ma dyżurnych SK (wewnętrzni) i ochotników z OSP (zewnętrzni).
sprawdz: F :: Interesariusze aktywatora to zawsze tylko informatycy. :: Interesariuszami są wszyscy, kogo aktywator dotyczy.
:::
```
- Wymagane `twierdzenie:` i `zycie:` (błąd), zalecane `poLudzku:`, `komenda:`, `sprawdz:` (ostrzeżenie). `sprawdz:` w formacie `P|F :: zdanie :: dlaczego` (błąd formatu).
- UI pokazuje: życie → komenda → twierdzenie COBIT (+ po ludzku), pod spodem mikropytanie „Prawda / Fałsz” o jedno kliknięcie; pomyłka trafia do powtórek.
### 16.3 Podpowiedź na slajdzie
- Komentarz `<!-- podpowiedz: Jedno zdanie, na co zwrócić uwagę. -->` w slajdzie. Bez niego zakładka „Podpowiedź” bierze pierwszą linię `:::zapamietaj`.
- Opcjonalne pole opcji pytania `zycie` (dni 1–3): jedno zdanie „W życiu to tak, jakby…”.
### 16.4 Styl pytań (`--check`, ostrzeżenia, per plik pytań `egzamin`/`studium`)
- poprawna odpowiedź najdłuższa w > 35% pytań pliku (od 8 pytań);
- nierówny rozkład liter poprawnych odpowiedzi: którakolwiek litera > 35% albo < 15% (od 12 pytań);
- pytanie z przeczeniem bez „NIE” wersalikami.
- UI i tak **tasuje odpowiedzi** w pytaniach `egzamin`, `studium`, `rozpoznanie`, `mentor` (ziarno: id pytania + podejście). Wyjątki: Sample Paper 1 i opcje z `"stala": true`.

## 17. Standard dydaktyczny (METODYKA.md §17, STANDARD-DYDAKTYCZNY.md)
Wzorce formatu: `content/_wzorce/` (`lekcja-wzorcowa.md`, `lekcja-it0-wzorcowa.md`, `haslo-wzorcowe.json`, `modul-wzorcowy.md`). `--check` waliduje je osobno – nie trafiają do kursu.

### 17.1 Frontmatter (YAML – podzbiór)
Parser rozumie: `klucz: wartość`, listy `[a, b]`, listy wielowierszowe (`klucz:` + linie `  - …`), obiekty `{ klucz: "…", k2: null }` (YAML flow albo JSON w jednej linii) oraz komentarze ` # …`. `cel` może być listą zdań. Nowe pole lekcji: `kontrolaAutora: { data, kto, uwagi }` – bez `data` lekcja ma w UI etykietę „wersja robocza”. Moduł `IT0` (Dzień 0, `dzien: 0`).

### 17.2 Statusy (§17.2)
`status` ∈ `oficjalne` („COBIT 5 (źródło)”) | `uproszczenie` („Wyjaśnienie kursu”) | `przyklad` („Przykład (scenariusz dydaktyczny)”) | **`opinia`** („Opinia autora kursu”) | `niepotwierdzone`.

### 17.3 Hasło – karta terminologiczna (§17.4)
Nowe pola: `wymowa`, `wymowaAkcent`, `statusTlumaczenia` ∈ `A|B|C|D` (inna wartość = błąd), `zrodloTlumaczenia` `{wydawcaEgzaminu, podrecznik, kurs, uwaga}` (`uwaga` wymagana przy C/D – błąd), `poCo`, `jakDziala`, `dlaczegoWazne`, `wyobrazSobie`, `przykladWypowiedzi`, `poziomP` ∈ `P0–P3` (błąd), `wymaga` (id haseł). `nieMylicZ` może być listą id haseł albo obiektów `{termin, roznica}`. Brak `wymowa`, `statusTlumaczenia` lub `przykladWypowiedzi` → ostrzeżenie (§17.14 pkt 8).
- `przyklady` – klucze w kolejności **`zycie` → `biuro` → `organizacja` (firma) → `admin` (urząd) → `it`**; `firma` to starszy synonim `organizacja`. Każde hasło ma przykład z firmy **i** z urzędu (zasada kursu). Słownik pokazuje je jako zakładki „Firma” i „Urząd”, a podręcznik w karcie „Przykłady”. Przykładów strażackich (`psp`) nie używamy.
- UI: karta zaczyna się od EN + wymowa (zawsze widoczne, także w trybie laika), potem formy PL ze statusem, definicja ze źródłem, po ludzku, wyobraź sobie, po co / jak działa, przykłady, nie mylić, przykład wypowiedzi, powiązane, źródło.

### 17.4 Slajdy i bloki (§17.5–§17.8, §17.11)
- Typy slajdów: dodatkowo `proces` (C – procesowy), `zrodlo-czytaj` (krótki fragment FW-PL z objaśnieniem), `zgadnij`, `studium`.
- `:::wykladowca` … `:::` – pełny tekst wykładowcy (60–150 słów). Nie jest pokazywany na slajdzie; jest w zakładce „Wykładowca”, a „Przeczytaj mi” czyta właśnie ten tekst.
- `:::pytanie-uczestnika` z liniami `pytanie:` i `odpowiedz:` (oba wymagane – błąd). Na slajdzie: rozwijane „Ktoś pyta”.
- Ostatnia linia slajdu niesyntetyzującego: `**Wniosek:** …` (UI wyróżnia). Brak → ostrzeżenie (pomijane: `wniosek`, `zapamietaj`, `mapa`, `wlasne-slowa`, `rozwiazany`, `zgadnij`).
- `:::teza <typ>` (typ ∈ `interpretacyjna | krytyczna | praktyczna | porownawcza | problemowa | egzaminacyjna`) z liniami `sytuacja:`, `pytanie:`, `teza:` (wymagana), `uzasadnienie:` i `status:` (wymagane – błąd), `powiazanie:`, `przyklad:`, `zrodlo:` (zalecane przy `oficjalne`), `refleksja:`. UI: karta „Zatrzymaj się i pomyśl” po treści slajdu, teza po kliknięciu, jedna naraz.
- `:::sb <typ>` – sekcja panelu „Wyjaśnij mi”; typ ∈ `wyjasnij | przyklad | wyobraz | skrot | dlaczego | nie-mylic | kontekst | powiazanie | kontrowersja | uwaga | ekspert | sprawdz | zrodlo` (inny = błąd). Bez bloku sekcja bierze treść z pól haseł ze slajdu.
- `:::progresja` – linie `0: …` do `5: …` (brak poziomu → ostrzeżenie); poziom 5 łączy się z COBIT 5.

### 17.5 Pytania (§17.10, §17.12)
- `nazwa-en`: `tresc`, `poprawne` (lista akceptowanych odpowiedzi EN; porównanie bez wielkości liter i myślników), opcjonalnie `termin` (id hasła), `wyjasnienie`.
- `wypowiedz`: `tresc`, `wymagane` (lista terminów EN, które muszą paść), `wzorzec` (Markdown); UI sprawdza terminy, pokazuje wzorzec i samoocenę.
- `popraw-termin`: `tresc`, `twierdzenia` `[{tekst, poprawne, wyjasnienie, blednyTermin?, poprawka?}]` (≥ 2; przy błędnym zdaniu zalecana `poprawka`).
- Sprawdzian modułu: pole `sprawdzian: "<MODUL>"` i `czesc` ∈ `wiedza | terminologia | rozroznianie | mechanizmy | zastosowanie | synteza` (inna = błąd; część z < 2 pytaniami → ostrzeżenie). Pliki `questions/sprawdzian-<modul>.json`.
- Źródła `doc` dodatkowo: `PROSTO` (lokalne opracowanie „Prosto, krok po kroku”, nieoficjalne) i `PAKIET` (lokalny pakiet materiałów, nieoficjalne) – bez `url`, z `uwaga`. Nie mogą być podstawą definicji `oficjalne`.

### 17.6 Moduły, źródła, ściągi
- `content/modules/<MODUL>.md` – frontmatter `modul`, `nazwa`, `dzien`, `wymagania`, `wiedza`, `umiejetnosci`, `terminy`, `zadania`, `kryteria` (klucze = części sprawdzianu, wartości w %), `bibliografia` (kategoria → lista `doc`); treść Markdown = synteza modułu. UI: `#/modul/<MODUL>` z bibliografią generowaną z przypisów lekcji.
- `content/zrodla.json` – `{ "zrodla": { "<doc>": { autor, tytul, rok, jezyk, kategoria, url?, dostep?, uwaga? } } }`; kategoria ∈ `publikacja-zrodlowa | standard | dokumentacja | literatura | material-dydaktyczny`. Zakładka „Źródła” w panelu pokazuje pełny opis.
- `content/sciagi/dzien-N.md` – ściąga dnia do druku (Markdown A4); `dzien-5` = „Cały COBIT 5 na jednej kartce”.

### 17.7 Lista kontrolna autora (`--check`, ostrzeżenia, §17.14)
1) skrót z wielkich liter bez rozwinięcia przy pierwszym użyciu w kursie; 2) hasło przed wprowadzeniem (§11); 3) slajdy bez `:::wykladowca`; 4) pojęcie z `wprowadza` bez `przyklady.zycie`; 5) slajdy bez `**Wniosek:**`; 6) teza `oficjalne` bez `zrodlo:`; 7) teza bez `uzasadnienie`/`status` (błąd); 8) hasło bez `wymowa`/`statusTlumaczenia`/`przykladWypowiedzi`.

## `wprowadzaListe` (METODYKA §11.1, decyzja 2026-11-08)
Pole frontmatter lekcji: `wprowadzaListe: [id…]`. Zawiera elementy listy (np. 7 faz, poziomy 0–5, 4 wymiary aktywatora), których rodzic jest wprowadzany w tej lekcji (`wprowadza`) i pokazany w stałym układzie listy.
- Elementy listy liczą się do pojęć wprowadzonych w lekcji: odblokowują ćwiczenia z `terminy` i trafiają do słownika narastającego. **Nie** wchodzą do limitu 4 nowych pojęć.
- Każdy element ma w lekcji przypis `[[id]]`, zdanie po ludzku i przykład. Wzorzec to slajd „…: każdy element z bliska”, czyli tabela „element (EN, wymowa) – po ludzku – przykład z życia”. `--check` ostrzega, gdy przypisu brak.
