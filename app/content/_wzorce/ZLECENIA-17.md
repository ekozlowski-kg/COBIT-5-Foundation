# Zlecenia §17 – do dostarczenia sesjom

**Stan: wszystkie zlecenia wysłane 2026-11-08** (Materiały, Altkom, UI). Plik zostaje jako zapis treści zleceń.

## Materiały (local_d31fa8ee…)
Wdróż swoją część §17 METODYKI. SD (`content/STANDARD-DYDAKTYCZNY.md`) jest nadrzędny wobec §0–§16. Wzorce: `content/_wzorce/`.

Zadania, w kolejności:
1. **Moduł IT0 „Podstawy cyfrowe”** (§17.3):
   - 10 lekcji 0A.1–0A.10, `dzien: 0`, według `lekcja-it0-wzorcowa.md`;
   - hasła `it-*` z `poziomP` i `wymaga`;
   - nie wolno używać nieznanego pojęcia do wyjaśnienia innego.
2. **Przegląd wszystkich lekcji według `lekcja-wzorcowa.md`** (§17.5–§17.8):
   - tytuł slajdu jako teza albo pytanie;
   - `:::wykladowca` na każdym slajdzie (60–150 słów, tekst do wypowiedzenia);
   - „**Wniosek:**” na końcu slajdu;
   - kolejność kontekstów: `zycie` → `biuro` → `organizacja` → `psp` → `it`;
   - ≥ 2 bloki `:::teza` na lekcję;
   - `:::sb` i `:::progresja`.

   Najpierw dzień 0 i dzień 1.
3. **Nowe pola haseł** (§17.4): `poCo`, `jakDziala`, `dlaczegoWazne`, `wyobrazSobie`, `przykladWypowiedzi`, `poziomP`, `wymaga` oraz klucze przykładów `biuro` i `it`. Pola `wymowa` i `statusTlumaczenia` robi sesja Altkom. Uzgodnij z nią kolejność zapisu.
4. **Moduły i sprawdziany**: pliki `content/modules/*.md` i sprawdziany modułów (6 części po ≥ 2 zadania, §17.12).
5. **Status `opinia`**: dla opinii autora (§17.2).
6. **Bieżące błędy `--check`**: domknij brakujące pytania z `cwiczenia`, `zapas` i `zgadnij` w pr/09, pr/09b, pr/10.

Na koniec mają przechodzić: `--check`, `verify-sources`, `sp1-overlap`. Nie commituj.

## Altkom (local_718b28fe…)
Format pól rejestru terminologicznego (§17.4, wzór: `haslo-wzorcowe.json`):

| Pole | Wartość |
|---|---|
| `wymowa` | orientacyjna wymowa terminu EN |
| `statusTlumaczenia` | `A`, `B`, `C` albo `D` |
| `zrodloTlumaczenia` | `{ wydawcaEgzaminu, podrecznik, kurs, uwaga }`; `uwaga` jest obowiązkowa przy statusie C i D |

Zadania:
- Dopisz te pola we wszystkich hasłach, także `proc-*` i `it-*`.
- Przygotuj ćwiczenia `nazwa-en` i `popraw-termin` w `questions/terminologia-en.json` (§17.10).

Uzgodnij kolejność zapisu w terms/ z Materiałami i z sesją „proste tłumaczenia”. Nie commituj.

## Odpowiedź dla Altkom (na raport rejestru terminologicznego)
- **Rejestr**: format i reguły statusów A–D są zgodne z §17.4. Zapisuj (`--zapisz`) po uzgodnieniu z Materiałami. Pole `wymowaAkcent` też zapisz. Dodam je do SCHEMA przez UI jako opcjonalne.
- **Ćwiczenia `nazwa-en` i `popraw-termin`**: tak, zrób je **po** zapisie pól. Przy procesach z niepotwierdzoną formą egzaminacyjną ćwicz tylko kod i nazwę EN. Nie ćwicz nazwy PL.
- **PBRM**: znalezisko przyjęte. Uwaga w haśle `pbrm` wystarczy: FW-PL s. 14 i 31 pisze „planowanie, budowanie, realizacja i monitorowanie”, a Altkom dla podręcznika podaje „…Uruchamianie…”.
- **Tasowanie**: decyzja zapadła, robi je UI (deterministycznie po `q.id`, bez SP1 i bez `final`). Ręcznego przestawiania liter **nie** zlecaj.
- **q-fn-w-24**: poprawione („Wskaźniki wykonania procesu, czyli Wymiar Procesu”, w podręczniku: „wskaźniki wydajności”). Poprawna odpowiedź jest najdłuższa w F2 w 9 z 30 pytań (30%).

## Dopisek dla UI (od Altkom, 2. raport)
- `POLA_TERMIN` w `tools/serve.py` nie zna jeszcze pól z §17.4, przez co walidator daje ~354 ostrzeżenia „Nieznane pole”, a po uzupełnieniu haseł da ~520. Brakuje pól:
  - `wymowa`;
  - `wymowaAkcent` (opcjonalne);
  - `statusTlumaczenia` ∈ {A, B, C, D};
  - `zrodloTlumaczenia` z kluczami `wydawcaEgzaminu`, `podrecznik`, `kurs`, `uwaga`;
  - `poCo`, `jakDziala`, `dlaczegoWazne`, `wyobrazSobie`, `przykladWypowiedzi`, `poziomP`, `wymaga`.
- Stan rejestru: pola są w 118 ze 174 haseł; pozostałe 56 czekają na partie sesji „proste tłumaczenia”.
