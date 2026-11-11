# COBIT 5 Foundation — schemat nauki

Cała nauka to jeden schemat: **[notatki/schemat-cobit5.html](notatki/schemat-cobit5.html)**. Testy w schemacie sprawdzają, co już umiesz.

- **Nauka:** mapa COBIT 5 z objaśnieniami, przykładami z życia i pułapkami (64 cele nauki).
- **Testy:** 503 pytania: 301 z fiszek, 132 autorskie, 50 SP1 i 20 Altkom. Są dwa sprawdziany A/B po 50 pytań na 40 minut i tryb „wszystkie pytania ciągiem”.
- **Sprawdź:** każde pytanie ma omówienie wszystkich odpowiedzi, przykład, źródła i rozwinięcia użytych skrótów. Otwarcie pomocy przed odpowiedzią oznacza naukę „z pomocą”; takiej odpowiedzi nie zalicza się jako samodzielnego rozwiązania w planie gotowości. W sprawdzianach pomoc pojawia się po zakończeniu.
- **Cel:** co najmniej 38/50 (76%). To nie jest oficjalny kurs PeopleCert ani gwarancja wyniku.

## Uruchomienie

Otwórz `notatki/schemat-cobit5.html` w przeglądarce albo uruchom serwer: `python3 -m http.server 8123`. Biblioteki React i React Flow ładują się z CDN, więc potrzebny jest internet. Postęp zapisuje się w przeglądarce.

## Pliki

| Plik | Zawartość |
|---|---|
| `notatki/schemat-cobit5.html` | schemat i bank pytań (blok `PYTANIA-START`) |
| `notatki/testy-schemat.js` | sprawdziany, ciąg pytań, postęp |
| `notatki/pomoc-schemat.js` i `.css` | wspólne omówienia, słownik skrótów i przypisy do właściwych dokumentów |
| `notatki/nauka-sylabus.js` | cele nauki |
| `notatki/schemat-opisy.js` | przykłady z życia i pułapki przy kafelkach |
| `notatki/*.local.js`, `app/podrecznik/ilustracje/` | podręcznik, ilustracje, SP1 i Altkom |
| `tests/` | kontrola logiki: `node tests/model.cjs && node tests/schemat.test.cjs && node tests/navigation.test.cjs && node tests/pomoc.test.cjs` |

Materiały źródłowe zachowują oznaczenia autorstwa ISACA, PeopleCert i Altkom. Obecność w repozytorium nie nadaje im licencji open source. Kurs dotyczy COBIT 5, a nie COBIT 2019.

Po aktualizacji banku starsze wyniki pozostają w historii, ale nie potwierdzają gotowości dla nowej treści. Przerwany ciąg ze starszej wersji zachowuje się w kopii wyników. Odsyłacze FW-PL otwierają konkretną stronę; oznaczenia innych dokumentów zachowują własne nazwy i nie kierują do FW-PL.
