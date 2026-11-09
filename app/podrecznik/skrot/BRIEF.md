# Skrót podręcznika – instrukcja dla agentów

Użytkownik: „1100 slajdów to dużo, maksymalnie 300”. Lekcje dawnego kursu (189 lekcji, ~1085 slajdów) trzeba
**skondensować**: każda część podręcznika (`k-…`) dostaje **najwyżej tyle slajdów, ile podaje `BUDZET.json`**
(łącznie ok. 170 slajdów + 45 ręcznie pisanych = ok. 215). Treść nie ma przepaść: slajd niesie jedną myśl,
a szczegóły ze scalonych slajdów idą do **kontekstu** (`ctx`, nakładka „ⓘ Kontekst”).

## Materiał źródłowy (tylko czytasz)
- `skrot/BUDZET.json` – dla każdej części: tytuł, rozdział, `max_slajdow`, `lekcje` (id lekcji w kolejności).
- Slajdy lekcji: `cd …/app/podrecznik/kontekst && python3 narzedzia.py pokaz <id-lekcji> [...]`
- Gotowy, sprawdzony kontekst (rozbudowane akapity) dla części lekcji: `kontekst/*.json`
  (klucz: id lekcji → numer slajdu → HTML). Korzystaj z niego jako materiału – możesz skracać i scalać.
- Ręcznie pisane części podręcznika `00-wstep.html`, `01-dlaczego-cobit5.html`, `02a-zasada-1.html`,
  `02c-kaskada-w-praktyce.html` – w rozdziałach Wstęp, 1 i 2 **nie powtarzaj tego, co już tam jest**;
  skrót tych rozdziałów ma tylko uzupełniać (to, czego tam brakuje, i pułapki egzaminacyjne).
- Fakty: `sources/text/framework-pl/page-NNN.txt`.

## Co oddajesz
Plik `skrot/<twoja-nazwa>.json` (tylko swój), w formacie:
```json
{ "k-pr-zasada-2": [
  { "h": "Tytuł slajdu – jedna myśl",
    "b": "<p>…</p><ul><li>…</li></ul>",
    "c": "Jedno zdanie wniosku.",
    "s": "COBIT 5 Framework (PL), s. 24, Ilustracja 9",
    "ctx": "<p>…</p><p>…</p><p>…</p>",
    "lekcje": ["pr-k27-zasada-2", "pr-k28-podejscie-do-ladu"] } ] }
```
- `h` – tytuł = myśl slajdu. `b` – **≤ 60 słów widocznego tekstu** (twarde ≤ 75); dozwolone `<p> <ul> <ol> <li> <b> <em>`,
  mała tabela `<div class="tblwrap"><table class="tbl"><tr><th>…</th></tr><tr><td>…</td></tr></table></div>` (≤ 3 kolumny),
  cytat `<blockquote>„…”</blockquote>` (dosłownie z korpusu), `<w k="id-hasła">słowo</w>`, `<span class="en">English</span>`.
- `c` – jedno zdanie wniosku. `s` – źródło (strony FW-PL; puste, jeśli slajd autorski).
- `ctx` – **2–5 akapitów `<p>`, ok. 120–320 słów**: wszystko istotne ze scalonych slajdów, czego nie ma na slajdzie
  (przykłady, rozróżnienia, „czym to nie jest”, pułapki egzaminacyjne, komentarz wykładowcy), plus jeden przykład
  z firmy albo urzędu. Nic ważnego z lekcji nie może zniknąć – albo na slajdzie, albo w ctx.
- `lekcje` – id lekcji, które ten slajd obejmuje. **Każda lekcja z części musi być przypisana do jakiegoś slajdu**
  (po slajdzie silnik wstawi po jednym pytaniu z każdej jego lekcji oraz pytania z arkusza próbnego).
  Kolejność slajdów = kolejność lekcji (od ogółu do szczegółu).

## Zasada nadrzędna (słowa użytkownika): „minimum treści, maksimum efektu”
- Slajd: **≤ 40 słów** widocznego tekstu; tytuł + 1–3 krótkie punkty albo jedna mała tabela.
- **Mniej slajdów niż limit, jeśli się da** – limit to sufit, nie cel.
- `ctx`: **2–3 akapity, ok. 100–220 słów** – tylko to, co pomaga zrozumieć i zdać: sedno, jedno rozróżnienie/pułapka,
  jeden krótki przykład. Bez anegdot, powtórzeń i wstępów.

## Zasady
- Jedna myśl na slajd, minimalistycznie; tytuł mówi, co zapamiętać.
- Nazwy z **egzaminu PL** (Ład, Zarządzanie, aktywator, struktura ramowa, cele organizacji, cele związane z Informatyką,
  Cele aktywatora, Kaskada Celów, Organ Ładu i nadzoru, domeny: Oszacuj, Kieruj i Monitoruj; Dostosuj, Planuj i Organizuj;
  Twórz, Nabywaj i Wdrażaj; Dostarczaj, Obsługuj i Wspieraj; Monitoruj, Oszacuj i Oceń; kategorie celów: jakość wewnętrzna,
  jakość kontekstowa, dostęp i bezpieczeństwo); przy pierwszym użyciu oryginał `<span class="en">…</span>`.
  Nazwy podręcznikowe tylko jako pułapka. Skróty rozwinięte i przetłumaczone.
- `<w k="…">` tylko z id istniejącymi w `app/content/terms/<id>.json` (najlepiej te z lekcji `[[id|…]]`).
- Bez Markdownu (`**`, `[[`, `:::`). **ZAKAZ** przykładów strażackich. Nie cytuj pytań z Sample Paper 1.
- Fakty spoza podręcznika – „(wiedza ogólna)”.

## Praca
1. Pliki pomocnicze trzymaj w **własnym** podfolderze scratchpada (`…/scratchpad/<twoja-nazwa>/`) – inni agenci pracują obok.
2. Zapisuj `skrot/<twoja-nazwa>.json` po każdej części.
3. Walidacja: `cd …/app/podrecznik/kontekst && python3 narzedzia.py skrot ../skrot/<twoja-nazwa>.json` → zero BŁĄD.
4. Nie edytujesz innych plików, nie uruchamiasz `z_kursu.py`, nie commitujesz.
