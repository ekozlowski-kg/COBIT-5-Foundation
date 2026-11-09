---
id: it0-02-dane-informacja
modul: IT0
modulNazwa: Podstawy cyfrowe
temat: "Dlaczego „7:15” na kartce jeszcze nic nie mówi? Dane, informacja, plik i folder"
lekcja: "0A.2"
dzien: 0
sylabus: [M0-00-07]
minuty: 13
priorytet: 2
wielkiObraz: 4
cel:
  - "Potrafię odróżnić dane (data) od informacji (information) na przykładzie z życia."
  - "Potrafię wyjaśnić, czym jest plik (file) i folder (folder) i do czego służą."
wprowadza: [it-dane, it-informacja, it-plik, it-folder]
wymaga: [it0-01-komputer-program]
twierdzenia: ["Dane (data) to zapisane fakty, jeszcze bez wyjaśnienia, czego dotyczą.", "Informacja (information) to dane, które coś mówią konkretnemu odbiorcy.", "Plik (file) to porcja danych zapisana w komputerze pod jedną nazwą.", "Folder (folder) to „teczka”, która grupuje pliki."]
typowePytania: [{"pytanie": "Czy informacja musi być w komputerze?", "odpowiedz": "Nie. Kartka i rozmowa też niosą informację. Komputer jest tylko jednym z miejsc, gdzie ją zapisujemy."}, {"pytanie": "Czy wysłanie pliku mailem przenosi go do odbiorcy?", "odpowiedz": "Nie. Odbiorca dostaje kopię. Twój plik zostaje u Ciebie."}]
zgadnij: [q-pre-it0-02]
cwiczenia: [q-it0-02-01, q-it0-02-02, q-it0-02-03]
zapas: [q-zap-it0-02-1, q-zap-it0-02-2]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "Wersja robocza – do przeglądu przez człowieka (test laika)."}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy; krok 1: pokaż zjawisko -->
# Co znaczy „7:15” zapisane na kartce?

Na lodówce wisi karteczka: **„7:15”**.

Czy to godzina pobudki? Odjazd autobusu? Wizyta u dentysty?

Dopiero gdy ktoś dopisze „autobus do pracy”, kartka zaczyna Ci coś mówić.

**Wniosek:** sam zapis to jeszcze za mało – trzeba wiedzieć, czego dotyczy.

:::wykladowca
Spójrzcie na tę karteczkę. Cztery znaki: siedem, dwukropek, piętnaście. Co one znaczą? Nie wiemy. To może być godzina pobudki, autobusu albo wizyty u lekarza. Sam zapis nic nam nie mówi. Wystarczy jednak dopisać dwa słowa, „autobus do pracy”, i nagle wiemy, co robić. Na tej lekcji nazwiemy obie rzeczy: sam zapis i zapis, który coś znaczy. Potem zobaczymy, gdzie komputer takie zapisy przechowuje i jak je porządkuje.
:::

:::pytanie-uczestnika
pytanie: Czy to nie jest oczywiste?
odpowiedz: W kuchni tak. W pracy często nie: w komputerze leżą tysiące liczb i nazwisk, a błąd zaczyna się tam, gdzie ktoś źle zrozumie, czego dotyczą.
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający; kroki 2–4: wyjaśnij, nazwij, każdy element -->
# Dane i informacja – dlaczego to dwie różne rzeczy?

| | Co to jest? | Przykład | EN (wymowa) |
|---|---|---|---|
| **[[it-dane|Dane]]** | zapisane fakty: liczby, słowa, zdjęcia | „602 115 300” | *data* („dejta”) |
| **[[it-informacja|Informacja]]** | dane z wyjaśnieniem, które coś komuś mówią | „602 115 300 to numer naczelnika ochotniczej straży” | *information* („informejszyn”) |

- **Dane** mogą być poprawne albo błędne, aktualne albo stare. Komputer przechowuje to, co ktoś wpisał.
- **Informacja** powstaje, gdy odbiorca wie, czego dane dotyczą. Może mieć postać wpisu w komputerze, kartki albo rozmowy.

**Wniosek:** dane to surowiec, a informacja to dane, które coś mówią konkretnej osobie.

:::wykladowca
Nazwijmy te dwie rzeczy. Sam zapis, na przykład ciąg cyfr, to dane. Po angielsku data, czytamy „dejta”. Dane to surowiec. Mogą być dobre albo złe, świeże albo stare. Komputer nie wie, czy są prawdziwe. Przechowuje to, co ktoś wpisał. Gdy do danych dodamy wyjaśnienie, czego dotyczą, powstaje informacja. Po angielsku information. Informacja coś komuś mówi i pozwala podjąć decyzję. Uwaga: informacja nie musi być w komputerze. Kartka na lodówce i rozmowa telefoniczna też niosą informację.
:::

:::sb wyobraz
Rozsypane puzzle to dane. Te same puzzle ułożone w obraz to informacja.
:::

:::sb powiazanie
W COBIT 5 [[informacja|Informacja]] (poznasz ją w lekcji 2.7, dzień 3) jest jednym z siedmiu aktywatorów. W słowniku ma osobną kartę.
:::

---

<!-- slajd: proces -->
<!-- typ SD: C – procesowy; krok 5: jak elementy współpracują -->
# Gdzie komputer trzyma dane i jak je porządkuje?

1. Piszesz list w aplikacji do pisania (lekcja 0A.1).
2. Klikasz „Zapisz” i podajesz nazwę, np. „list do urzędu”.
3. System operacyjny zapisuje Twój list na dysku jako **[[it-plik|plik]]** (EN: *file*, wym. „fajl”). Plik to porcja danych pod jedną nazwą.
4. Pliki wkładasz do **[[it-folder|folderu]]** (EN: *folder*, wym. „folder”; informatycy mówią też „katalog”). Folder to teczka na pliki.
5. Foldery można wkładać jeden w drugi: „Dokumenty” → „Urzędy” → „Gmina”. Taka droga mówi, gdzie leży plik.

**Wniosek:** dane w komputerze leżą w plikach, a pliki porządkujemy w folderach.

:::wykladowca
Teraz zobaczmy, gdzie komputer trzyma dane. Gdy piszecie list i klikacie „Zapisz”, komputer pyta o nazwę. Wpisujecie na przykład „list do urzędu”. System operacyjny zapisuje wtedy list jako plik. Po angielsku file, czytamy „fajl”. Plik to jedna kartka z tytułem. Kartki wkładamy do teczek. W komputerze teczka to folder, po angielsku też folder. Teczki można wkładać jedna w drugą, jak segregatory w szafie. Dzięki temu po roku nadal znajdziecie swój list.
:::

:::pytanie-uczestnika
pytanie: Czy usunięcie folderu usuwa też pliki?
odpowiedz: Zwykle tak – znika wszystko, co jest w środku. Dlatego przed usunięciem folderu trzeba sprawdzić jego zawartość.
:::

:::sb nie-mylic
Folder nie ma własnej treści – tylko porządkuje. Plik ma treść. Ikonka na pulpicie bywa tylko skrótem: jej usunięcie nie kasuje pliku.
:::

:::teza interpretacyjna
sytuacja: Dyżurny czyta na kartce przekazanej przy zmianie: „Zawilce – 6 gotowych”. W komputerze ten wpis jeszcze się nie pojawił.
pytanie: Czy to, co nie jest w komputerze, też jest informacją?
teza: Tak. Informacja może mieć postać kartki albo rozmowy; komputer to tylko jedno z miejsc, gdzie ją zapisujemy.
uzasadnienie: Słownik COBIT 5 mówi, że informacje mogą istnieć w wielu postaciach i być przekazywane także podczas rozmowy (FW-PL s. 92).
powiazanie: Aktywator Informacja (dzień 3)
przyklad: Meldunek dowódcy przez radio jest informacją, choć nikt go jeszcze nie wpisał do systemu.
status: oficjalne
zrodlo: FW-PL 92
refleksja: Jakie ważne informacje w Twojej pracy krążą tylko ustnie albo na kartkach?
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku; kroki 6–8: EN, organizacja, znaczenie specjalistyczne -->
# Gdy dane się zestarzeją: od paragonu do alarmu

:::kontekst zycie
**Paragon.** „4,99” i „12.05” to dane. Informacją stają się, gdy wiesz: „4,99 zł zapłaciłam 12 maja za chleb”.
:::

:::kontekst biuro
**Tabela kadr.** W kolumnie stoi liczba „26”. Bez nagłówka nie wiadomo, czy to wiek, dni urlopu, czy numer pokoju. Plik „kadry.xlsx” leży w folderze „Kadry”, który widzą tylko kadrowe.
:::

:::kontekst organizacja
**Sklep internetowy.** Zbiera dane o zamówieniach: datę, kwotę, adres. Dopiero zestawione pokazują, co sprzedaje się najlepiej.
:::

:::kontekst psp
**Scena: „Numer sprzed dwóch lat”.** W nocy z 14 na 15 marca pali się dom przy ul. Lipowej 7 w Modrzewiowie. Dyżurny Paweł Grab klika alarm, ale ochotnicza straż (OSP) z Zawilców nie dostaje wiadomości. Okazuje się, że w komputerze przy nazwisku naczelnika OSP, Stanisława Pietrzaka, był numer sprzed dwóch lat. Dane były, ale nieaktualne – więc informacja wprowadziła w błąd.
:::

:::kontekst it
**COBIT 5.** FW-PL mówi o „kontekście danych”: ich dokładności, dostępności, aktualności i jakości (s. 91). Słownik nazywa informacje zasobem niezbędnym do prowadzenia działalności (s. 92).
:::

:::zrodlo FW-PL 91
:::

**Wniosek:** stare albo błędne dane dają mylną informację, a mylna informacja – złą decyzję.

:::wykladowca
Ten sam mechanizm widać wszędzie. Na paragonie, w tabeli kadr, w sklepie internetowym. W komendzie straży w Modrzewiowie miał on poważne skutki. Numer naczelnika ochotników był w komputerze, ale sprzed dwóch lat. Dane wyglądały poprawnie, a informacja była fałszywa. Alarm nie dotarł na czas. Dlatego COBIT 5 każe dbać o jakość danych: czy są dokładne, aktualne i dostępne. Słownik COBIT 5 nazywa informację zasobem niezbędnym do działania organizacji. Tę myśl rozwiniemy w dniu 3.
:::

:::teza krytyczna
sytuacja: Informatyk mówi: „Numer był w bazie, więc system zadziałał poprawnie”.
pytanie: Czy to wystarczy, żeby uznać, że wszystko było w porządku?
teza: Nie. Sam zapis danych nie wystarcza – liczy się, czy informacja jest aktualna i prawdziwa dla tego, kto z niej korzysta.
uzasadnienie: FW-PL wymienia dokładność, aktualność i jakość danych jako część kontekstu danych (s. 91).
powiazanie: Jakość informacji (dzień 3)
przyklad: Numer Pietrzaka był zapisany, ale stary, więc OSP nie dostała alarmu.
status: uproszczenie
refleksja: Kto w Twojej pracy sprawdza, czy zapisane dane są nadal aktualne?
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący; krok 9: sprawdź zrozumienie -->
# Co już umiesz

| PL | EN (wymowa) | Jednym zdaniem |
|---|---|---|
| dane | data („dejta”) | zapisane fakty |
| informacja | information („informejszyn”) | dane, które coś komuś mówią |
| plik | file („fajl”) | porcja danych pod jedną nazwą |
| folder | folder („folder”) | teczka na pliki |

:::progresja
0: Na lodówce wisi kartka „7:15 – autobus do pracy”.
1: Zapisujesz w telefonie plik z listą zakupów.
2: Biuro trzyma faktury w folderach według miesięcy.
3: Organizacja ustala, kto aktualizuje dane klientów i jak często.
4: Kierownictwo uznaje dane za zasób i wyznacza osoby odpowiedzialne za ich jakość.
5: W COBIT 5 informacja to jeden z siedmiu aktywatorów, z własnymi celami jakości (dzień 3).
:::


**Co dalej i dlaczego:** następna lekcja to 0A.3 „Dlaczego Wi-Fi działa, a strony się nie otwierają? Sieć, Internet i Wi-Fi”.

:::wykladowca
Podsumujmy czterema parami słów. Dane – data. Informacja – information. Plik – file. Folder – folder. Dane to surowe zapisy. Informacja to dane, które coś komuś mówią. Plik to jedna nazwana porcja danych w komputerze. Folder to teczka, która porządkuje pliki. Zapamiętajcie też przykład z Lipowej: numer był zapisany, ale nieaktualny. To pokazuje, że dane trzeba pielęgnować. Teraz spróbujcie wyjaśnić to własnymi słowami.
:::

:::wlasne-slowa
Wyjaśnij w 3 zdaniach, dlaczego numer telefonu sprzed dwóch lat to dane, ale nie dobra informacja. Użyj słów „dane” i „informacja” oraz ich angielskich nazw.
???
„Ciąg cyfr w komputerze to dane (data) – zapisany fakt. Informacją (information) staje się, gdy dyżurny wie, że to numer naczelnika OSP. Jeśli numer jest stary, informacja wprowadza w błąd, choć dane wyglądają poprawnie.”
:::

:::atom
twierdzenie: Informacja to dane, które mają znaczenie dla konkretnego odbiorcy; może mieć postać wpisu, kartki albo rozmowy.
poLudzku: Zapis staje się informacją, gdy wiadomo, czego dotyczy.
zycie: „7:15” to dane, a „7:15 – autobus do pracy” to informacja.
komenda: Numer w komputerze to dane; „aktualny numer naczelnika OSP” to informacja dla dyżurnego.
sprawdz: F :: Informacja to tylko to, co jest zapisane w komputerze. :: Informacją jest też kartka i rozmowa (FW-PL s. 92).
:::
