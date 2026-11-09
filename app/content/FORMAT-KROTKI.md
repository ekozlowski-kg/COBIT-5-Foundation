# Format krótkiej lekcji (od 2026-11-08)

Ten plik **ma pierwszeństwo** przed METODYKA §10–§18 i SCHEMA w sprawach formy lekcji i przykładów.
Powód (słowa użytkownika): „kilka slajdów nauki”, „minimalistycznie”, „uwaga jest rozproszona”,
„pytania od ogółu do szczegółu i od najprostszych do najtwardszych przykładów z IT”,
„przykłady nie strażackie, tylko ogólne jak w COBIT 5 Foundation”, „brakuje źródeł”.

## 1. Lekcja = jedna myśl, 3–8 slajdów
- Długą lekcję tniemy na kilka krótkich: **jedna lekcja = jedno pojęcie albo jedno rozróżnienie**.
- **3–8 slajdów treści**, jedna myśl na slajd, **≤ 60 słów widocznego tekstu** na slajd (bez `:::wykladowca` i `:::sb`).
- Kolejność w module: **od ogółu do szczegółu** (najpierw „po co / co to jest”, potem części, potem wyjątki i pułapki).
- Kolejność przykładów w lekcji: **od najprostszego do najtrudniejszego** (życie codzienne → organizacja → IT).

## 2. Przykłady – ogólne, jak w materiałach COBIT 5 Foundation
- Dozwolone konteksty: **życie codzienne** (dom, zakupy, bank w telefonie) i **organizacja / IT**:
  przedsiębiorstwo, bank, sklep internetowy, firma ubezpieczeniowa, szpital, urząd, uczelnia,
  zarząd (board), dyrektor IT (CIO), dział IT, dostawca usług chmurowych, outsourcing,
  wdrożenie ERP/CRM, aplikacja mobilna banku, centrum danych, helpdesk, audyt, regulator, akcjonariusze.
- **ZAKAZ:** PSP, OSP, straż, strażak, komenda, Syrena, dyżurny, alarm, pożar, wyjazd do zdarzenia,
  Modrzewiów, Zawilce, postaci z `historia.md` (Sikora, Dudek, Wrzos, Kaczmarek, Nowik, Grab, Pietrzak itd.).
  Nie używamy też `:::kontekst psp` ani pola `komenda:` w `:::atom`.
- Przykład ma pokazać **zjawisko z prawdziwej organizacji**, a nie anegdotę.
  Np. „Bank wdraża aplikację mobilną: zarząd chce nowych klientów, regulator – bezpieczeństwa,
  klienci – wygody, dział IT – stabilności”.

## 3. Źródła są widoczne
- Każdy slajd z **faktem COBIT 5** kończy się blokiem `:::zrodlo FW-PL <strona>` (strona drukowana = strona PDF;
  sprawdź w korpusie `../sources/text/framework-pl/page-NNN.txt`). UI pokazuje go dyskretnie pod slajdem.
- Cytat oficjalny: `> „…”` **dosłownie** z korpusu, tuż przed `:::zrodlo` (sprawdza to `verify-sources.py`).
- Wyjaśnienie autorskie bez źródła: bez `:::zrodlo`. Uproszczenie dydaktyczne: `:::uproszczenie`.
- Inne źródła: `SP1` (tylko uzasadnienia, nigdy treść pytań), `SYL` (sylabus), `ALTKOM` – zgodnie z `zrodla.json`.

## 4. Terminologia (bez zmian)
- Pierwsza jest **nazwa z egzaminu PL**, przy pierwszym użyciu w nawiasie *EN* i – gdy inna – nazwa z podręcznika.
- Pułapki z `terminology-traps.json` → slajd `pulapka` z blokiem `:::pulapka`.
- Pojęcia jako przypisy `[[id-hasła]]` / `[[id|odmiana]]` – tylko istniejące hasła z `terms/`.

## 5. Struktura pliku
Frontmatter jak w SCHEMA, z różnicami:
```
format: krotki
lekcja: "0.3"            # kolejny numer w module
zgadnij: []              # bez rozgrzewki – jej rolę gra slajd „start”
cwiczenia: [q-…, q-…]    # 2–3 pytania, posortowane trudnosc 1 → 3
zapas: [q-…]             # 1–2 pytania zapasowe
wymaga: [poprzednia-krótka-lekcja]
cel: "Potrafię …"        # jedno zdanie
minuty: 5–10
```
Pola `twierdzenia`, `typowePytania`, `wielkiObraz` – opcjonalne.

Slajdy oddzielone `\n---\n`, każdy zaczyna się od `<!-- slajd: typ -->`:
1. `start` – pytanie albo zjawisko z życia/organizacji, 1–3 zdania, **bez terminu**.
2. `pojecie` – nazwa (egzamin PL, *EN*, podręcznik PL) + definicja po ludzku w 1–2 zdaniach + cytat/źródło.
3. `przyklad` – jeden przykład z organizacji/IT, 2–4 zdania.
4. *(opcjonalnie)* `nie-jest` – „Czym to nie jest?” – 2–3 krótkie punkty.
5. *(opcjonalnie)* `pulapka` – `:::pulapka` z nazwą egzaminacyjną vs podręcznikową vs EN.
6. `wniosek` – jedno zdanie + `:::zapamietaj` (1–3 punkty).

- `**Wniosek:**` – na ostatnim slajdzie obowiązkowo; na innych tylko, gdy coś dodaje.
- `:::wykladowca` (3–6 zdań mówionych) – zalecany; trafia do panelu „Szczegóły → Wykładowca”.
- `:::sb przyklad` – dodatkowy przykład (trudniejszy) – trafia do panelu, nie na slajd.
- Bez: `:::atom`, `:::teza`, `:::progresja`, `:::glebiej`, `:::wlasne-slowa`, `:::kontekst psp`, tabel szerszych niż 3 kolumny.

## 6. Pytania
- Plik `questions/<modul>-krotkie.json` → `{ "_opis": "…", "pytania": [ … ] }`, schemat jak w SCHEMA (typy:
  `egzamin`, `rozpoznanie`, `klasyfikacja`, `dopasowanie`, `studium`, `bledy`).
- 2–3 pytania na lekcję w `cwiczenia`, **trudnosc 1 → 3** (1 = rozpoznaj na przykładzie z życia,
  2 = zastosuj w organizacji, 3 = pytanie w stylu egzaminu z dystraktorem terminologicznym).
- Każda opcja ma `wyjasnienie`; poprawna odpowiedź **nie** jest zwykle najdłuższa; `zrodlo` [{doc, strona}].
- Te same zakazy przykładów co w §2.
