# COBIT 5 Foundation — schemat nauki

Cała nauka to jeden schemat: **[notatki/schemat-cobit5.html](notatki/schemat-cobit5.html)**. Testy w schemacie sprawdzają, co już umiesz.

- **Nauka:** mapa 64 celów oraz 544 pytania z objaśnieniami, przykładami i pułapkami. Można uczyć się po kolei, losowo, z pytań nierozwiązanych, błędnych albo oznaczonych gwiazdką jako „Wyróżnione”.
- **Egzamin:** jedna funkcja uruchamia próbę 50 pytań z limitem 40 minut. Kolejne próby korzystają naprzemiennie z dwóch rozłącznych, wewnętrznych szablonów o proporcjach PR 15 / EN 21 / IM 7 / PC 7; oznaczenia A/B nie są pokazywane użytkownikowi.
- **Sprawdź:** każde pytanie ma omówienie wszystkich odpowiedzi, przykład, źródła i rozwinięcia użytych skrótów. W trybie Nauka pomoc jest dostępna przy każdym pytaniu; w trybie Egzamin pojawia się dopiero po zakończeniu.

Bank obejmuje 301 pytań przekształconych z kart nauki, 173 pytania autorskie, 50 pozycji Sample Paper 1 i 20 pytań Altkom. Pytania edytowalne stosują tę samą konwencję co egzamin: cztery odpowiedzi i jeden klucz, krótkie pytanie sprawdzające wiedzę lub rozumienie, bez formatu Tak/Nie i bez wyróżniania klucza długością. Odwołanie do nazwanego modelu, rysunku albo przewodnika pozostaje w treści tylko wtedy, gdy samo rozpoznanie tego elementu jest przedmiotem pytania. Numery stron i źródła służą do nauki w sekcji „Sprawdź”. Oryginalne 50 pozycji Sample Paper 1 zachowuje formę materiału wzorcowego. Pełne zasady: [ZASADY-PYTAN.txt](ZASADY-PYTAN.txt).

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
