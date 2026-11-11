# COBIT 5 Foundation — schemat nauki

Cała nauka to jeden schemat: **[notatki/schemat-cobit5.html](notatki/schemat-cobit5.html)**. Testy w schemacie sprawdzają, co już umiesz.

- **Nauka:** mapa 64 celów oraz 538 pytań z objaśnieniami, przykładami i pułapkami. Można uczyć się po kolei, losowo, z pytań nierozwiązanych, błędnych albo oznaczonych gwiazdką jako „Wyróżnione”.
- **Egzamin:** jedna funkcja uruchamia próbę 50 pytań z limitem 40 minut. Kolejne próby korzystają naprzemiennie z dwóch rozłącznych, wewnętrznych szablonów o proporcjach PR 15 / EN 21 / IM 7 / PC 7; oznaczenia A/B nie są pokazywane użytkownikowi.
- **Sprawdź:** każde pytanie ma omówienie wszystkich odpowiedzi, przykład, źródła i rozwinięcia użytych skrótów. W trybie Nauka pomoc jest dostępna przy każdym pytaniu; w trybie Egzamin pojawia się dopiero po zakończeniu.

Bank obejmuje 252 pytania przekształcone z kart nauki, 212 pytań autorskich, 50 pozycji Sample Paper 1, 20 pytań Altkom i 4 pytania znalezione w źródłach internetowych. Pytania z Sample Paper 1, Altkom i znalezisk internetowych są w brzmieniu 1:1 z oryginałów (treść, odpowiedzi, klucz). Pozostałe pytania są napisane w ich stylu: cztery odpowiedzi i jeden klucz, krótkie pytanie (Który/Co/Jak nazywa się…/Zidentyfikuj brakujące słowo…), bez formatu Czy/Tak/Nie, bez odwołań do rysunków, stron i podręcznika w treści oraz bez wyróżniania klucza długością. Pytania własne, które dublowały SP1 lub Altkom, usunięto – zostają oryginały. Każde pytanie ma w „Sprawdź” stronę polskiego podręcznika COBIT 5 (FW-PL) i dosłowny cytat potwierdzający odpowiedź albo uwagę, że temat pochodzi spoza podręcznika. Pełne zasady: [ZASADY-PYTAN.txt](ZASADY-PYTAN.txt).

Tryb Nauka udostępnia również pytania używane w Egzaminie. Kolejne próby służą ćwiczeniu; po rozwiązaniu całego banku będą powtórką znanych treści.

## Uruchomienie

Otwórz `notatki/schemat-cobit5.html` w przeglądarce albo uruchom serwer: `python3 -m http.server 8123`. Biblioteki React i React Flow ładują się z CDN, więc potrzebny jest internet. Postęp zapisuje się w przeglądarce.

## Pliki

| Plik | Zawartość |
|---|---|
| `notatki/schemat-cobit5.html` | schemat i bank pytań (blok `PYTANIA-START`) |
| `notatki/testy-schemat.js` | tryby Nauka i Egzamin, wyróżnione pytania i postęp |
| `notatki/pomoc-schemat.js` i `.css` | wspólne omówienia, słownik skrótów i przypisy do właściwych dokumentów |
| `notatki/nauka-sylabus.js` | cele nauki |
| `notatki/schemat-opisy.js` | przykłady z życia i pułapki przy kafelkach |
| `notatki/*.local.js`, `app/podrecznik/ilustracje/` | podręcznik, ilustracje, SP1 i Altkom |
| `tests/` | kontrola logiki: `node tests/model.cjs && node tests/schemat.test.cjs && node tests/navigation.test.cjs && node tests/pomoc.test.cjs` |

Materiały źródłowe zachowują oznaczenia autorstwa ISACA, PeopleCert i Altkom. Obecność w repozytorium nie nadaje im licencji open source. Kurs dotyczy COBIT 5, a nie COBIT 2019.

Po aktualizacji banku starsze wyniki pozostają w historii. Przerwana nauka ze starszej wersji zachowuje się w kopii wyników. Odsyłacze FW-PL otwierają konkretną stronę; oznaczenia innych dokumentów zachowują własne nazwy i nie kierują do FW-PL.
