# Uzupełnienie wiedzy pod pytania z arkusza próbnego (Sample Paper 1)

Cel: **każde z 50 pytań arkusza da się rozwiązać na podstawie slajdu (b) i kontekstu (ctx), po którym stoi.**
Użytkownik wskazał przykład EN0209 (praktyka vs działanie procesu, FW-PL s. 70): pytanie stało w złym miejscu,
a kurs nie uczył faktu potrzebnego do odpowiedzi.

## Dane
- `skrot/sp1-mapa.local.json` – audyt: dla `sp1-NN`: `lekcja` (po której ma stać), `czesc`, `wiedza` (1–3 fakty
  z numerem strony), `pokrycie` (pelne/czesciowe/brak), `brakuje`, `wyjasnienie`.
- `skrot/*.json` (poza BUDZET.json i *.local.json) – skrócone slajdy: `{ "<część>": [ {h,b,c,s,ctx,lekcje:[…]} ] }`.
  Pytanie z arkusza silnik wstawia po slajdzie, którego `lekcje` zawierają `lekcja` z audytu.
- Ręczne części `00-wstep.html`, `01-dlaczego-cobit5.html`, `02a-zasada-1.html`, `02c-kaskada-w-praktyce.html`
  uczą rozdziałów Wstęp–2 (wiedza tam też się liczy, jeśli stoją wcześniej w kursie).
- Podręcznik: `sources/text/framework-pl/page-NNN.txt`.

## Co robisz
Dla każdego pytania z `pokrycie` ≠ `pelne` (i dla pewności przejrzyj też `pelne`):
1. Znajdź w `skrot/*.json` slajd, którego `lekcje` zawierają `lekcja` z audytu.
2. Upewnij się, że fakty z `wiedza` są **wprost** na tym slajdzie (`b`) albo w jego `ctx`
   (albo na wcześniejszym slajdzie tej samej części). Jeśli nie – **dopisz je**:
   - najważniejszy fakt krótko na slajd, jeśli mieści się w limicie (b ≤ 40 słów, twardo 75),
   - resztę do `ctx` (nowy krótki akapit `<p>`; ctx ≤ 5 akapitów).
   Pisz własnymi słowami, z numerem strony FW-PL; **nie przepisuj treści pytania ani odpowiedzi z arkusza**.
3. Nie zmieniaj `lekcje`, liczby slajdów ani innych pól bez potrzeby. Nazwy egzaminacyjne PL, oryginał EN w `<span class="en">`.
4. Po każdym pliku: `cd …/app/podrecznik/kontekst && python3 narzedzia.py skrot ../skrot/<plik>.json` → zero BŁĄD.

Edytujesz tylko pliki `skrot/*.json` (nie BUDZET.json, nie sp1-mapa.local.json). Pliki pomocnicze w `…/scratchpad/sp1-uzup/`.
Nie uruchamiasz `z_kursu.py`, nie commitujesz. Raport: lista pytań z tym, co i gdzie dopisano.
