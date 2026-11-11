# COBIT 5 Foundation — schemat nauki

Kompletny schemat z nauką i testami: **[notatki/schemat-cobit5.html](notatki/schemat-cobit5.html)**.

Repozytorium zawiera wszystkie dane używane przez stronę, w tym pliki o historycznym przyrostku `.local.js` / `.local.json`, tekst i ilustracje podręcznika oraz lokalne materiały testowe. Niczego nie trzeba dokładać z prywatnego katalogu autora. Nazwy plików zachowano dla zgodności strony i zapisanych wyników. Materiały źródłowe zachowują oznaczenia autorstwa ISACA, PeopleCert i Altkom; obecność w repozytorium nie nadaje im licencji open source.

## Uruchomienie

Pobierz repozytorium i otwórz `notatki/schemat-cobit5.html` w przeglądarce. Biblioteki React i React Flow są pobierane z CDN, więc potrzebne jest połączenie z internetem. Można też uruchomić serwer statyczny w katalogu repozytorium: `python3 -m http.server 8123`.

Postęp jest zapisywany w przeglądarce. Zmiana adresu, ścieżki lub przeglądarki może zmienić dostęp do wcześniejszych wyników. W panelu testów można zapisać kopię wyników.

## Nauka i 500 pytań

- 64 cele nauki z objaśnieniami, przykładami i pułapkami.
- **301 pytań z fiszek** (karty P1 i P2). Przycisk „Sprawdź” pokazuje treść fiszki: odpowiedź, przykład i zastosowanie w organizacji.
- 129 pytań autorskich (w tym 100 w sprawdzianach A/B), 50 SP1 i 20 Altkom. Usunięto 201 pytań autorskich, które pokrywały się z fiszkami.
- Tryb „wszystkie pytania ciągiem”: po kolei, losowo, tylko fiszki, tylko nierozwiązane, tylko błędne. Wynik i wyjaśnienie od razu po odpowiedzi.
- Dwa rozłączne sprawdziany A/B po 50 pytań, standardowo 40 minut; pełne omówienie po zakończeniu.
- Widok testów na telefonie: monochromatyczny (kolor tylko dla dobrej i złej odpowiedzi), tryb jasny i ciemny, duże pola dotyku, dolny pasek akcji, fiszka w dolnym arkuszu, przesunięcie palcem w lewo/prawo = następne/poprzednie pytanie.
- Cel treningowy co najmniej 75% oznacza **38/50 = 76%**; 37/50 to 74%. To nie jest oficjalny kurs PeopleCert ani gwarancja wyniku egzaminu.

Pytania autorskie i lokalne mają rejestry recenzji w [notatki/audyt/](notatki/audyt/); pytania z fiszek sprawdza generator (4 opcje, jedna poprawna, wyjaśnienie każdej opcji, treść fiszki).

## Odtworzenie banku i kontrole

Wymagane Python 3 i Node.js (18 lub nowszy). Generator korzysta z pytań autorskich w `notatki/pytania-autorskie.json` (wybór w `notatki/pula-schematu.json`), pytań z fiszek w `notatki/pytania-fiszki.json`, korekt oraz 70 pytań w `notatki/materialy-testowe.local.json`. Nie wymaga poprzedniej aplikacji.

```sh
python3 notatki/generuj-pytania-schematu.py
node tests/model.cjs
node tests/schemat.test.cjs
node tests/navigation.test.cjs
python3 tests/sprawdz-recenzje.py
```

Testy sprawdzają logikę, pokrycie zakresu, progi, świeżość pomiarów, czas, odsyłacze oraz zachowanie pozycji mapy. Testy Node VM z atrapą DOM nie zastępują kontroli wyglądu w przeglądarce.

Mapa zapamiętuje przesunięcie i przybliżenie. Zamknięcie szczegółów i zmiana rozmiaru okna nie przywracają widoku całości. Pasek zajmuje 48–50 px wysokości. Nawigacja obszarami, przykład oraz ustawienia widoku są dostępne w **Menu**; dopasowanie całej mapy wymaga wybrania **Menu → Cała mapa**.

Zakres merytoryczny oparto na dostarczonych Framework PL/EN, Enabling Processes, sylabusie PeopleCert v01.2, SP1 i materiałach Altkom, z kontrolą [oficjalnego opisu Foundation](https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/COBIT5-10/cobit-5-foundation-2020). Kurs dotyczy COBIT 5, a nie COBIT 2019.
