# COBIT 5 Foundation – krok po kroku

Platforma nauki COBIT 5 Foundation po polsku. Parametry egzaminu odnoszą się do historycznego sylabusa; aktualne warunki ustala operator. Główna aplikacja to **podręcznik krok po kroku**, ułożony rozdział po rozdziale jak podręcznik COBIT 5:
- jedna myśl na slajd, a po ważniejszych slajdach pytania kontrolne w stylu egzaminu;
- podkreślone pojęcia otwierają panel z nazwami (wariantem kursu, z podręcznika i angielskim), wyjaśnieniem, przykładami z firmy i z urzędu oraz uwagą „Na egzamin”.

Obok podręcznika są:
- **Mapa COBIT 5**: interaktywny schemat całego frameworka na 7 mapach (zasady, kaskada celów, Ład i role, 37 procesów, aktywatory, wdrożenie, model zdolności). Klikalne węzły, powiązania i panel Prościej / Dokładniej / Na egzamin.
- **Mój poziom**: wskaźnik treningowy (na 50; bez prognozowania wyniku egzaminu) i osobny wynik pierwszych zarejestrowanych odpowiedzi; obejmuje podręcznik, ćwiczeniach i egzaminach próbnych, wynik w obszarach PR/EN/IM/PC, słabe tematy sylabusa z powrotem do działu podręcznika, test diagnostyczny (20 pytań) i trening słabych tematów.
- **Rozbiór pytań i pomoc AI**: w ćwiczeniach przycisk „Nie rozumiem pytania” (typ pytania, słowa-sygnały, znaczenie pojęć – bez zdradzania odpowiedzi), a po odpowiedzi gotowe polecenie dla Claude lub ChatGPT. Część podręcznika „Rozbiór pytań: 9 typów na przykładach”.
- **Narzędzia**: egzamin próbny (50 pytań, 40 minut, wynik w podziale na obszary PR/EN/IM/PC), egzamin mistrzowski, słownik 230 pojęć z wariantami nazw, powtórki, trening pojęć ze wspólnej puli i notatki.

## Pełna recenzja i nauka w testach

**240 pytań zamiast 1711**, po indywidualnym przeglądzie każdej pierwotnej pozycji. Wspólna pula zawiera 203 wybrane i zredagowane pytania oraz 37 nowych przypadków procesowych. Usunięto też dodatkowe quizy bez ID i generatory powtarzających się pytań.

W aplikacji wybierz **Testy z pełną nauką i wyjaśnieniami** (`index.html#/egzamin`): 11 zestawów tematycznych oraz dwa rozłączne arkusze po 50 pytań. Tryb nauki wyjaśnia każdą opcję, zasadę COBIT 5, przykład i typowy błąd; prowadzi do lekcji. Sprawdzian kończy się omówieniem wszystkich pytań i możliwością ponownej nauki na błędach. Są mini lekcje dla wszystkich 64 tematów Foundation.

[Pełna recenzja, zakres źródeł i kontrole](docs/RECENZJA-PELNEJ-PULI.md), [decyzje dla wszystkich 1711 ID](docs/REJESTR-RECENZJI-PYTAN.json), [macierz pokrycia](docs/POKRYCIE-SYLABUSA.md). Do przeglądu wykorzystano wyłącznie materiały publiczne. Testy są autorskie i działają w aplikacji; katalog linków ma rolę pomocniczą.

## Uruchomienie lokalne
Dwuklik `start.command` albo:
```bash
python3 app/tools/serve.py
```
Następnie otwórz http://localhost:8123/ (start przekierowuje do podręcznika). Bez Node.js i bez instalowania zależności. Postęp zapisuje się w przeglądarce (localStorage), a eksport i import są w aplikacji.

## Wersja do udostępnienia (produkcja)
```bash
python3 app/tools/build-dist.py
```
Skrypt tworzy katalog `dist/`, który działa na każdym hostingu statycznym (GitHub Pages, Netlify, serwer WWW, udział sieciowy) bez serwera Pythona:
- składa treść w jeden plik `bundle.json` i przerywa, jeśli walidacja treści ma błędy;
- **pomija materiały chronione prawem autorskim** (ISACA / PeopleCert / Altkom): Sample Paper 1, skany ilustracji i stron podręcznika oraz pliki `*.local.*`, a ich odwołania usuwa ze stron;
- pomija pliki robocze: archiwum treści, narzędzia redakcyjne i briefy;
- na końcu sprawdza, czy w wyniku nie został żaden plik chroniony.

W wersji do udostępnienia podręcznik działa bez miniatur „Z podręcznika” i bez pytań z arkusza próbnego. Wszystkie pozostałe treści są autorskie, a cytaty z podręcznika są krótkie i opatrzone źródłem.

Podgląd gotowej wersji:
```bash
cd dist && python3 -m http.server 8200
```

## Struktura
- `app/podrecznik/`: **aplikacja główna**, czyli podręcznik krok po kroku
  - `index.html`: spis treści z postępem
  - `NN-*.html` / `k-*.html`: części (`window.DECK`, silnik `deck.js`, format w `FORMAT.md`)
  - `mapa.html` + `mapa-dane.js`: interaktywna mapa COBIT 5
  - `z_kursu.py`: generator części `k-*.html` z treści kursu (`skrot/`, `kontekst/`)
  - `sprawdz.py`: kontrola części (pytania, pojęcia, zakazane przykłady)
  - `lekcje.json`: dawna lekcja → część podręcznika (stare linki przekierowują)
- `app/index.html` + `app/js/`: narzędzia (egzamin, słownik, powtórki, ćwiczenie nazw, notatki). Dawne trasy kursu (`#/lekcja/…`, `#/dzien/…`, `#/mapa`) przekierowują do podręcznika.
- `app/content/`: treść kursu, czyli hasła, pytania i lekcje źródłowe (`SCHEMA.md` to kontrakt formatu)
- `app/tools/serve.py`: serwer lokalny i walidator; `app/tools/build-dist.py`: wersja do udostępnienia
- `scripts/`: odtwarzanie korpusu tekstowego z PDF-ów (Swift PDFKit)

## Kontrola jakości
Uruchamiaj z katalogu `app/`:
```bash
python3 tools/serve.py --check
python3 content/_narzedzia/verify-sources.py content ../sources/text/framework-pl
cd podrecznik && for f in [0-9]*.html k-*.html; do python3 sprawdz.py "$f"; done
```
Polecenia po kolei:
1. Walidacja schematu treści, przypisów i wyjaśnień każdej opcji.
2. Sprawdzenie cytatów oficjalnych na wskazanych stronach podręcznika i kontrola podobieństwa do Sample Paper 1 (`sp1-overlap.py`, 0 błędów wymagane).
3. Kontrola części podręcznika: tylko lokalnie, korzysta z `osascript`.

Po zmianie haseł albo pytań odtwórz części podręcznika:
```bash
cd app/podrecznik && PYTHONHASHSEED=0 python3 z_kursu.py
```

Po regeneracji, z katalogu głównego repozytorium:
```bash
python3 app/tools/build-coverage.py
node --test app/tests/question-history.mjs
```
Testy Node dotyczą wyłącznie narzędzi redakcyjnych; aplikacja nadal nie wymaga Node.js do uruchomienia.

## Zasady treści
- Najpierw nazwa z polskiego egzaminu, potem z podręcznika PL i angielska. Pułapki nazw są wyraźnie oznaczone, a nazwy niepotwierdzone na egzaminie mają opis „niepotwierdzona”.
- Fakty pochodzą z podręcznika COBIT 5 (PL) ze stroną źródłową. Wiedza spoza podręcznika (np. sylabus PeopleCert) jest oznaczona.
- Każde pojęcie ma przykład z firmy i z urzędu. Przykładów strażackich nie używamy.
- Każdy skrót jest rozwinięty.
- Pytania nie kopiują Sample Paper 1, co pilnuje automatyczna kontrola.

## Źródła (poza repozytorium ze względu na prawa autorskie)
Pliki umieść w:
- `sources/pdf/framework-pl.pdf`: COBIT 5, polskie tłumaczenie (ISACA)
- `sources/pdf/altkom-roznice.pdf`
- `private/sample-paper-1.pdf`

Następnie odtwórz korpus tekstowy:
```bash
scripts/build-corpus.sh
```
Ilustracje do podręcznika (tylko lokalnie) odtworzysz poleceniem:
```bash
swiftc -O app/podrecznik/ilustracje.swift -o /tmp/ilu && /tmp/ilu sources/pdf/framework-pl.pdf app/podrecznik/ilustracje
```

Egzamin: sylabus PeopleCert COBIT 5 Foundation v01.2. Ma 50 pytań jednokrotnego wyboru i trwa 40 minut, a osoby zdające w języku nieojczystym albo z niepełnosprawnością dostają dodatkowe 10 minut. Próg wynosi 50%, egzamin jest bez materiałów. COBIT® jest znakiem towarowym ISACA®. Aplikacja jest niezależnym materiałem do nauki i nie jest powiązana z ISACA ani z PeopleCert.
