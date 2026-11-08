---
id: it0-05-baza-danych
modul: IT0
modulNazwa: Podstawy cyfrowe
temat: "Jak dyżurny w sekundę znajduje numer strażaka? Baza danych"
lekcja: "0A.5"
dzien: 0
sylabus: [M0-00-07]
minuty: 13
priorytet: 2
wielkiObraz: 4
cel:
  - "Potrafię powiedzieć, czym jest baza danych (database), do czego służy i jakie informacje można w niej trzymać."
  - "Potrafię odróżnić bazę danych od aplikacji i od pojedynczego pliku z tabelą."
wprowadza: [it-baza-danych]
wymaga: [it0-02-dane-informacja, it0-04-serwer-usluga]
twierdzenia: ["Baza danych (database) to uporządkowany zbiór danych, w którym łatwo coś znaleźć, dodać i zmienić.", "Dane w bazie leżą w tabelach: wiersz to jedna rzecz, kolumna to jedna cecha.", "Człowiek korzysta z bazy przez aplikację; baza i aplikacja to dwie różne rzeczy.", "Jedna poprawka w bazie jest od razu widoczna dla wszystkich jej użytkowników."]
typowePytania: [{"pytanie": "Czy arkusz w Excelu to baza danych?", "odpowiedz": "W luźnym sensie bywa tak nazywany, ale zwykle to jeden plik dla jednej osoby. Baza pilnuje porządku i pozwala wielu osobom pracować naraz."}, {"pytanie": "Czy „Syrena” to baza danych?", "odpowiedz": "Nie. „Syrena” to aplikacja, która korzysta z bazy danych z numerami strażaków."}]
zgadnij: [q-pre-it0-05]
cwiczenia: [q-it0-05-01, q-it0-05-02, q-it0-05-03]
zapas: [q-zap-it0-05-1, q-zap-it0-05-2]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "Wersja robocza – do przeglądu przez człowieka (test laika)."}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy; krok 1: pokaż zjawisko -->
# Jak w sekundę znaleźć jeden numer wśród tysiąca?

W przychodni pani w rejestracji wpisuje Twoje nazwisko. Po sekundzie widzi Twój adres, telefon i ostatnią wizytę.

W szafie na papierze szukałaby tego kilka minut.

**Wniosek:** gdy danych jest dużo, liczy się porządek, który pozwala je szybko znaleźć.

:::wykladowca
Pomyślcie o rejestracji w przychodni. Kiedyś pani szukała karty w wielkiej szafie. Dziś wpisuje nazwisko i po sekundzie widzi wszystko: adres, telefon, ostatnią wizytę. Jak to możliwe? Dane nie leżą tam luzem. Są ułożone według stałego wzoru. Każdy pacjent ma te same rubryki, a komputer wie, gdzie szukać. Na tej lekcji nazwiemy takie uporządkowane miejsce. Zobaczymy też, dlaczego dla komendy straży jest ono tak ważne.
:::

:::pytanie-uczestnika
pytanie: Czy to nie jest po prostu folder z plikami?
odpowiedz: Nie. Folder tylko trzyma pliki. Tu dane są ułożone według stałego wzoru, więc komputer szybko je przeszukuje i poprawia.
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający; kroki 2–4: wyjaśnij, nazwij, każdy element -->
# Elektroniczna kartoteka: wiersze i kolumny

To uporządkowane miejsce to **[[it-baza-danych|baza danych]]** (EN: *database*, wym. „dejtabejs”).

Dane w bazie układa się w **tabele**:

| Nazwisko | Jednostka | Telefon | Gotowość |
|---|---|---|---|
| Pietrzak | OSP Zawilce | 602 … | tak |
| Kowal | OSP Zawilce | 501 … | nie |

- **Wiersz** to jedna rzecz, np. jeden strażak.
- **Kolumna** to jedna cecha, np. numer telefonu.
- Każdy wiersz ma te same kolumny. Dzięki temu komputer szybko znajduje, dopisuje i poprawia dane.

**Wniosek:** baza danych to elektroniczna kartoteka, w której każdy wpis ma te same rubryki.

:::wykladowca
To uporządkowane miejsce nazywamy bazą danych, po angielsku database, czytamy „dejtabejs”. Spójrzcie na tabelkę. Każdy wiersz to jeden strażak. Każda kolumna to jedna cecha: nazwisko, jednostka, telefon, gotowość. Wszystkie wiersze mają te same kolumny. To jak kartoteka, w której każda karta ma identyczne rubryki. Dzięki temu komputer w ułamku sekundy odpowie na pytanie: „kto z Zawilców jest dziś gotowy?”. W szafie z papierami szukalibyście kwadrans.
:::

:::sb wyobraz
Kartoteka w bibliotece: każda karta ma tytuł, autora i półkę. Bibliotekarka znajduje książkę w minutę, bo karty mają te same rubryki i stały porządek.
:::

---

<!-- slajd: proces -->
<!-- typ SD: C – procesowy; krok 5: jak elementy współpracują -->
# Kto rozmawia z bazą danych?

1. Dyżurny klika w aplikacji „Syrena”: „pokaż gotowych strażaków z OSP Zawilce”.
2. Aplikacja wysyła **żądanie** do bazy danych (lekcja 0A.4).
3. Baza leży na **serwerze**. Wyszukuje pasujące wiersze i odsyła **odpowiedź**.
4. Aplikacja pokazuje listę na ekranie dyżurnego.
5. Gdy informatyczka poprawi numer w bazie, **wszyscy** dyżurni od razu widzą nowy numer.

**Wniosek:** człowiek korzysta z bazy danych przez aplikację, a baza zwykle leży na serwerze.

:::wykladowca
Ważna rzecz: dyżurny nie „wchodzi” do bazy danych. Korzysta z aplikacji, w tym przypadku z „Syreny”. To aplikacja wysyła do bazy żądanie, a baza odsyła odpowiedź. Znacie już ten schemat z poprzedniej lekcji. Baza zwykle leży na serwerze, więc korzysta z niej wiele osób naraz. I tu jest jej wielka zaleta. Gdy informatyczka poprawi jeden numer, nowy numer widzą od razu wszyscy dyżurni, na każdym komputerze. Nie trzeba poprawiać tego w pięciu miejscach.
:::

:::sb nie-mylic
Baza danych to nie aplikacja. Aplikacja to narzędzie, w którym przeglądasz dane. Baza to miejsce, gdzie dane są uporządkowane i przechowywane. Ta sama baza może obsługiwać kilka aplikacji.
:::

:::teza porownawcza
sytuacja: Kierownik biura mówi: „Mamy listę klientów w arkuszu kalkulacyjnym, czyli w pliku z tabelą. Po co nam baza danych?”.
pytanie: Czy plik z tabelą to to samo co baza danych?
teza: Nie zawsze. Plik z tabelą zwykle służy jednej osobie naraz. Baza danych pilnuje porządku i pozwala wielu osobom pracować na tych samych, aktualnych danych.
uzasadnienie: Gdy plik krąży w kopiach, każdy ma inną wersję. W bazie poprawka jest jedna i od razu widoczna dla wszystkich.
powiazanie: Pliki i kopie (lekcja 0A.2); jakość informacji (dzień 3)
przyklad: Dwie pracownice poprawiły ten sam plik u siebie – teraz są dwie różne listy klientów.
status: uproszczenie
refleksja: Ile wersji tej samej listy krąży w Twojej pracy?
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku; kroki 6–8: EN, organizacja, znaczenie specjalistyczne -->
# Baza w telefonie, w biurze podróży i w komendzie

:::kontekst zycie
**Kontakty w telefonie.** To mała baza danych: każda osoba ma imię, numer i zdjęcie. Wpisujesz „Ania” i po sekundzie dzwonisz.
:::

:::kontekst biuro
**Biuro podróży.** Baza klientów: nazwisko, telefon, wykupione wycieczki. Każdy pracownik widzi te same, aktualne dane.
:::

:::kontekst organizacja
**Przychodnia.** Karty pacjentów są w jednej bazie. Lekarz i rejestracja widzą te same dane, każdy w swojej aplikacji.
:::

:::kontekst psp
**Scena: „Jedna poprawka zamiast pięciu”.** Po nocy na Lipowej informatyczka komendy, Ola Dudek, poprawia w bazie „Syreny” numer naczelnika OSP Zawilce, Stanisława Pietrzaka. Od tej chwili każdy dyżurny, na każdym komputerze, widzi nowy numer. Gdyby numery były w osobnych plikach u dyżurnych, ktoś by zapomniał o poprawce.
:::

:::kontekst it
**COBIT 5.** Dane w bazach to treść aktywatora Informacja, a serwery i aplikacje, na których bazy działają, należą do aktywatora Usługi, infrastruktura i aplikacje. Oba poznasz w dniu 3.
:::

**Wniosek:** baza danych daje organizacji jedno, wspólne i aktualne źródło danych – o ile ktoś dba o jego jakość.

:::wykladowca
Bazy danych są wszędzie. W Waszym telefonie, w biurze podróży, w przychodni. W komendzie w Modrzewiowie baza „Syreny” przechowuje numery strażaków ochotników. To dobrze, bo jedna poprawka wystarcza dla wszystkich. Ale to też ryzyko. Jeśli w bazie jest zły numer, zły numer widzą wszyscy. Dlatego w COBIT 5 dane w bazach to sprawa aktywatora Informacja, z celami jakości, takimi jak aktualność. A serwery i aplikacje, na których baza działa, to drugi aktywator: Usługi, infrastruktura i aplikacje.
:::

:::teza krytyczna
sytuacja: Ola Dudek poprawiła numer w bazie. Dyżurny pyta: „To teraz już zawsze będzie dobrze?”.
pytanie: Czy jedna poprawka w bazie rozwiązuje sprawę na zawsze?
teza: Nie. Baza przechowuje to, co ktoś wpisał. Bez stałej opieki dane znów się zestarzeją, bo ludzie zmieniają numery.
uzasadnienie: Jakość danych zależy od ich aktualności, a ta wymaga regularnego sprawdzania (FW-PL s. 91: dokładność, aktualność i jakość danych).
powiazanie: Aktywator Informacja – jakość (dzień 3)
przyklad: Komenda ustala, że co miesiąc OSP potwierdza swoje numery.
status: uproszczenie
refleksja: Kto w Twojej organizacji pilnuje, żeby dane w bazie były aktualne?
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący; krok 9: sprawdź zrozumienie -->
# Co już umiesz

- **Baza danych** (*database*, „dejtabejs”) – uporządkowany zbiór danych w tabelach.
- **Wiersz** to jedna rzecz, **kolumna** to jedna cecha.
- Z bazy korzysta się przez **aplikację**; baza zwykle leży na **serwerze**.
- Plik z tabelą to zwykle narzędzie jednej osoby; baza służy wielu osobom naraz.

:::progresja
0: Szukasz w telefonie kontaktu „Ania” i od razu dzwonisz.
1: W biurze kilka osób widzi tę samą listę klientów.
2: Informatyk nadaje uprawnienia: kto może tylko czytać bazę, a kto ją zmieniać.
3: Organizacja ustala, kto odpowiada za aktualność danych w bazie.
4: Kierownictwo uznaje dane za ważny zasób i wymaga regularnych przeglądów ich jakości.
5: W COBIT 5 jakość danych w bazach to sprawa aktywatora Informacja (dzień 3).
:::


**Co dalej i dlaczego:** następna lekcja to 0A.6 „Zalogowałam się, a folder się nie otwiera – dlaczego? Konto, uwierzytelnianie i autoryzacja”.

:::wykladowca
Podsumujmy. Baza danych, po angielsku database, to uporządkowana kartoteka w komputerze. Dane leżą w tabelach: wiersz to jedna rzecz, kolumna to jedna cecha. Człowiek korzysta z bazy przez aplikację, a baza zwykle leży na serwerze. Plik z tabelą to co innego: zwykle służy jednej osobie i łatwo o różne wersje. Powiedzcie teraz sami, jaka jest różnica między bazą danych a aplikacją „Syrena”. Jeśli umiecie, przejdźcie do ćwiczeń.
:::

:::wlasne-slowa
Wyjaśnij w 3 zdaniach, czym różni się baza danych od aplikacji „Syrena”. Użyj słów „baza danych”, „aplikacja” i „serwer”.
???
„Baza danych (database) to uporządkowana kartoteka z numerami strażaków, która leży na serwerze. „Syrena” to aplikacja – narzędzie, przez które dyżurny z tej bazy korzysta. Jedna poprawka w bazie jest od razu widoczna w „Syrenie” u wszystkich dyżurnych.”
:::

:::atom
twierdzenie: Baza danych to uporządkowany, wspólny zbiór danych; aplikacja to tylko okno do niej.
poLudzku: Baza to kartoteka, a aplikacja to okienko, przez które do niej zaglądasz.
zycie: Kontakty w telefonie to mała baza, a ekran „Telefon” to aplikacja.
komenda: Baza „Syreny” trzyma numery strażaków, a dyżurny widzi je w aplikacji „Syrena”.
sprawdz: F :: Aplikacja „Syrena” i jej baza danych to to samo. :: Aplikacja korzysta z bazy; to dwie różne rzeczy.
:::
