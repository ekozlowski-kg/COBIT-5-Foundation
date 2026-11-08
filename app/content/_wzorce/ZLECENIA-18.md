# Zlecenia §18 i §11.1 – do dostarczenia po wiadomości użytkownika

> **Zrobione już przez sesję koordynującą (2026-11-08):**
> - `dzien` w lekcjach PC, EX, FN i MT według §18.2 (MT = 12);
> - `syllabus.dni[]` dla dni 0–11 oraz wpis 12 z `poEgzaminie: true`;
> - walidator dopuszcza dni 0–20 i pole `poEgzaminie`;
> - `lastDayOf` w `js/content.js` pomija dzień `poEgzaminie`, więc start pokazuje „Dzień N z 11”.
>
> - `questions/it0.json`: 60 pytań do modułu IT0 (rozgrzewki, ćwiczenia i pytania zapasowe dla 10 lekcji), bez ostrzeżeń §16.6. Generator: `_narzedzia/gen_it0.py` + `it0_dystraktory.py`.
>
> Sprawdzone w przeglądarce. Stan kontroli: `--check` 0 błędów, `sp1-overlap` 0 błędów, `verify-sources` OK. Materiały **nie muszą** już zmieniać `dzien`, `syllabus.dni[]` ani pisać pytań IT0. Pytania do podzielonych lekcji PC są w ich `pc-podzial.json`, a tekst wykładowcy w pc/02 jest uzupełniony.


## „Proste tłumaczenia” (local_72de7ee6…)
1. **Reguła „lista jako jedno pojęcie”: przyjęta z warunkiem.** Każde dziecko ma na slajdzie listy:
   - przypis `[[id]]`;
   - co najmniej jedno zdanie po ludzku;
   - przykład.

   Może to być tabela „element – po ludzku – przykład” albo blok `:::atom`. Sam przypis nie wystarczy (METODYKA §11.1 pole `wprowadzaListe`, §17.14 pkt 9).

   Wygeneruj listę id na lekcję do `content/_narzedzia/wprowadza-liste.json` i przekaż ją Materiałom.
2. **Plan ma 12 dni (0–11)**, bo PC urosło do 145 slajdów (§18.2). Przeniesienie 1.14 na dzień 4 jest OK.
3. **Lekcje MT mają `dzien: 12`** (ścieżka po egzaminie).

## Materiały (local_d31fa8ee…)
1. **Plan 12 dni (§18.2), zmiana pola `dzien`:**

   | Lekcje | Dzień |
   |---|---|
   | PC 4.1–4.2e, 4.3–4.3b | 8 |
   | PC 4.4–4.5, EX 9.3–9.5 | 9 |
   | EX 9.6 | 10 |
   | FN | 11 |
   | MT | 12 |

   Ustaw też `syllabus.dni[]` dla dni 0–11 oraz wpis 12. Pola z §18.3:
   - `sp1` od dnia 10;
   - `egzaminy`: 9 → `[proba-1]`, 10 → `[sp1, proba-2]`, 11 → `[mistrzowski, mistrzowski]`;
   - `projekt` w dniu 11;
   - `testDnia: false` w dniach 9–11.
2. **`wprowadzaListe`** w lekcjach pr/06, pr/07, pr/09, en/01, en/02, en/04, en/06, en/08, im/04, pc/02, pc/04 i pc/05. Listę id przygotuje „proste tłumaczenia”. Każde dziecko ma mieć na slajdzie listy zdanie wyjaśnienia i przykład (§11.1).

## UI (local_9a2bc4d7…)
1. **Dzień 12 („Mentor – po egzaminie”)**: „Dzień N z 11” już działa, bo dzień z `poEgzaminie` jest pomijany w `lastDayOf`. Zostało:
   - zakładka dnia 12 w planie ma pokazywać tytuł zamiast „Dzień 12”;
   - dzień 12 nie wlicza się do ostrzeżenia o budżecie (§18.2).
2. **Pole `wprowadzaListe` w lekcji:**
   - id liczone jako jedno pojęcie razem z rodzicem w limicie 4 (§11.1);
   - ostrzeżenie, gdy któreś id nie ma w lekcji przypisu `[[id]]` (§17.14 pkt 9);
   - odblokowanie ćwiczeń z `terminy` uwzględnia `wprowadza` + `wprowadzaListe`.
3. **Przypomnienie:** podwójny licznik slajdu oraz pasek narzędzi znikający po „Dalej”.

## Zmiany w kodzie zrobione przez sesję koordynującą (do wiadomości UI, 2026-11-08)
- **`js/views/lesson.js`:**
  - „wcześniejsze lekcje”, powtórki, „Następna jednostka” i „Co dalej” liczone są w kolejności NAUKI: dzień, potem porządek modułów. Wcześniej moduł IT0 był na końcu listy modułów, więc lekcje dnia 0 dostawały pytania skrajne z całego kursu, a po IT0 „Następna jednostka” prowadziła poza plan.
  - Pytanie skrajne w „Sprawdź” i „Kontrola zagmatwań” biorą tylko pojęcia z `wprowadza`, a nie wszystkie wspomniane w przypisach.
- **`js/views/day.js`:** „Test skrajności” bierze tylko pojęcia wprowadzone najpóźniej danego dnia, więc kody sylabusa nie wciągają tematów z dalszych dni.
- **`js/content.js`:**
  - `wprowadza` w jednostce = `wprowadza` + `wprowadzaListe`;
  - `lastDayOf` pomija dzień z `poEgzaminie`.
- **`tools/serve.py`:**
  - pole `wprowadzaListe` (dozwolone, liczone jako wprowadzone, poza limitem 4, ostrzeżenie przy braku przypisu);
  - dni 0–20;
  - pole `poEgzaminie`.
- **Serwer zrestartowany:** stary proces z 7.11 działał na starym parserze, przez co 29 lekcji z `cel` jako listą miało w aplikacji pusty cel i brak slajdu „Co już umiesz”. Po restarcie cel ma 88/88 lekcji.
- **Przejście kursanta sprawdzone w przeglądarce na czystym stanie:**
  - 0A.1: rozgrzewka → 3× Sprawdź → „Co już umiesz” → Start proponuje 0A.2;
  - słownik „Tylko poznane (4)”;
  - sprawdzian mentora otwiera się poprawnie.
