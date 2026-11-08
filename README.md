# COBIT 5 Foundation – od zera do skrajnie biegłego (12 dni po ≤ 4 h)

Osobista platforma nauki do egzaminu COBIT 5 Foundation (PL). Lekcje mają formę prezentacji: jedna myśl na slajd, cykl „Zgadnij → Zjawisko → Nazwa → Gdzie to leży? → Własnymi słowami → Sprawdź”. Obok slajdów jest sidebar przypisów na 3 poziomach z mocno oznaczonymi pułapkami terminologicznymi (egzamin PL ≠ podręcznik PL ≠ EN). Do tego plan 12 dni (dzień 0 i dni 1–11, METODYKA §18) plus ścieżka mentora po egzaminie z testami dnia, mapa COBIT, powtórki, drill terminów i centrum egzaminacyjne (symulacja 50 pytań / 40 min).

## Uruchomienie
Dwuklik `start.command` albo:
```bash
python3 app/tools/serve.py
```
Następnie otwórz http://localhost:8123/. Bez Node.js i bez instalowania zależności. Postęp zapisuje się w localStorage przeglądarki; eksport i import są w aplikacji.

## Struktura
- `app/`: aplikacja (vanilla JS, ES modules, routing przez hash)
  - `app/tools/serve.py`: serwer; paczkę `/bundle.json` buduje z `app/content/` przy każdym żądaniu
  - `app/content/`: treść kursu, czyli lekcje (Markdown), hasła, pytania, mapa i sylabus
    - `SCHEMA.md`: kontrakt formatu treści
    - `METODYKA.md`: metodyka nauki, plan dnia i progi
    - `_narzedzia/`: weryfikacja cytatów i kontrola przecieku Sample Paper
- `scripts/`: odtwarzanie korpusu tekstowego z PDF-ów (Swift PDFKit)

## Kontrola jakości
Uruchamiaj z katalogu `app/`:
```bash
python3 tools/serve.py --check
python3 content/_narzedzia/verify-sources.py content ../sources/text/framework-pl
```
Pierwsze polecenie waliduje schemat treści, przypisy i wyjaśnienia każdej opcji. Drugie sprawdza cytaty oficjalne na wskazanych stronach korpusu PDF, a na końcu automatycznie uruchamia kontrolę podobieństwa do Sample Paper 1 (`sp1-overlap.py`).

## Źródła (poza repozytorium ze względu na prawa autorskie)
Pliki umieść w:
- `sources/pdf/framework-pl.pdf`
- `sources/pdf/altkom-roznice.pdf`
- `private/sample-paper-1.pdf`

Następnie odtwórz korpus tekstowy:
```bash
scripts/build-corpus.sh
```
Sample Paper 1 (`app/content/sample-paper-1.local.json`) istnieje tylko lokalnie i jest odblokowany dopiero w dniu 5.
