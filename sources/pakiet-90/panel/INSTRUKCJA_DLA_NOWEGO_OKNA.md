# Instrukcja po dołączeniu ZIP do nowej rozmowy

Zbuduj działający panel nauki COBIT 5 Foundation po polsku, wykorzystując pliki z tej paczki. Nie zaczynaj od ponownego opisywania pomysłu ani od generowania kolejnego testu w zwykłym czacie.

## Najpierw przeczytaj
README.md, postepy/CO_WIEMY_O_WYNIKACH.md, pytania/bank_pytan_90.json, nauka/procesy_37.json, panel/WYMAGANIA.md i zrodla/KOREKTY_I_OGRANICZENIA.md.

## Materiał wejściowy
Paczka zawiera 90 uporządkowanych pytań z testów 1–9, cztery odpowiedzi i uzasadnienie każdej opcji, definicje zestawów, mapę 37 procesów, lekcje, plan nauki, porównania mylonych pojęć, fiszki oraz ostrożnie oznaczoną historię wyników. Jest to punkt startowy, nie kompletny, oficjalny kurs ani baza rzeczywistych pytań egzaminacyjnych.

## Zasady importu
Zachowaj identyfikatory pytań. Nie importuj niezweryfikowanych twierdzeń o wynikach jako rzeczywistych prób. Diagnostyczne 6/10 jest wynikiem podanym przez użytkownika, nie próbą z zapisanymi odpowiedziami. Test 9 nie ma potwierdzonego wyniku.

Nie mieszaj COBIT 5 z COBIT 2019. Nie kopiuj niesprawdzonych wcześniejszych twierdzeń o COBIT 7, cenach lub dostępności egzaminów. Bieżące warunki certyfikacji zweryfikuj osobno, o ile będą potrzebne.

## Działająca pierwsza wersja
Zaimplementuj naukę, testy, sprawdzanie odpowiedzi, wyjaśnienia, błędy, mapę procesów, fiszki, wyniki i eksport/import postępów. Na początku załaduj istniejący bank; nie zastępuj go obietnicą stworzenia 300 pytań. Pierwsza uruchamialna wersja ma działać na rzeczywistych danych z paczki.

W trybie testu ujawniaj odpowiedzi dopiero po zakończeniu. W trybie nauki możesz pokazywać wyjaśnienie po pojedynczej odpowiedzi. Umożliwiaj powrót do wcześniejszych pytań i zapis przerwanej próby. Przy losowaniu opcji używaj trwałych option.id, a nie ich nowej pozycji na ekranie.

Nowe pytania twórz jako osobny przyrost banku z nowymi identyfikatorami. Uwzględniaj podobieństwo znaczeniowe, a nie tylko identyczność tekstu. Uzupełnij w szczególności luki z pokrycie_banku.json oraz moduły wdrożenia i oceny zdolności procesów po sprawdzeniu odpowiednich źródeł.

Nie pytaj ponownie, która wersja COBIT jest potrzebna. To COBIT 5 Foundation, język polski, nazwy procesów również po angielsku. Technologię wybierz odpowiednią do dostępnego środowiska. Nie deklaruj uruchomienia lub trwałego zapisu, zanim faktycznie go nie zaimplementujesz i nie sprawdzisz.
