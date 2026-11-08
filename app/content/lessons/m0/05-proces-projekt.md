---
id: m0-05-proces-projekt
modul: M0
modulNazwa: Moduł 0 – Fundamenty
temat: Proces a projekt
lekcja: "0.5"
dzien: 1
sylabus: [M0-00-05, EN-01-01]
minuty: 24
zgadnij: [q-pre-m0-05-proces-projekt]
cwiczenia: [q-m0-05-01, q-m0-05-02]
wprowadza: [proces, projekt]
wymaga: [m0-00-zanim-zaczniesz, m0-03-wartosc]
cel: "Potrafię odróżnić proces od projektu i podać po jednym przykładzie z komendy."
priorytet: 2
zapas: [q-zap-m0-05-proces-projekt-1, q-zap-m0-05-proces-projekt-2]
wielkiObraz: 4
twierdzenia: ["Proces jest powtarzalny i ciągły, a projekt jest jednorazowy.", "Projekt ma początek i koniec.", "Proces przetwarza dane wejściowe w wyniki, np. produkty i usługi.", "Procesy to jedna z 7 kategorii aktywatorów.", "Model referencyjny procesów COBIT 5 ma 37 procesów."]
typowePytania: [{"pytanie": "Wdrożenie nowego systemu to proces, prawda?", "odpowiedz": "Nie. Wdrożenie ma początek i koniec, więc to projekt. Procesem jest potem codzienna praca w tym systemie."}, {"pytanie": "Proces i projekt to chyba to samo, bo w obu są kroki?", "odpowiedz": "Nie. Proces powtarza się stale i utrzymuje działanie. Projekt robisz raz, żeby coś zbudować albo zmienić."}, {"pytanie": "Skoro proces toczy się sam, to nikt za niego nie odpowiada?", "odpowiedz": "Odpowiada. Każdy proces ma właściciela, czyli osobę, która za niego odpowiada. Ma też role i mierniki."}]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "etap 3 – do przeglądu użytkownika"}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Czym różni się remont łazienki od jej sprzątania?

W tym roku remontujesz łazienkę.

Co tydzień sprzątasz łazienkę.

Obie czynności dotyczą łazienki. Czym się **różnią**?

**Wniosek:** ta sama łazienka może być miejscem pracy jednorazowej i pracy powtarzanej bez końca.

:::wykladowca
Zacznijmy od czegoś, co zna każdy. Remont łazienki robicie raz na wiele lat. Planujecie go, kupujecie płytki, wołacie fachowca, a potem remont się kończy. Sprzątanie łazienki robicie co tydzień, zawsze mniej więcej tak samo, i nigdy się nie kończy. Obie prace dotyczą tego samego pomieszczenia, a mimo to są zupełnie inne. Zapamiętajcie to pytanie: czy ta praca ma koniec? Za chwilę nadamy obu rodzajom pracy nazwy, polskie i angielskie. Ta różnica wróci potem przy każdym procesie COBIT 5.
:::

:::pytanie-uczestnika
pytanie: Po co mi to na egzaminie z informatyki?
odpowiedz: Bo COBIT 5 opisuje 37 procesów, czyli prac powtarzalnych. Pytania często sprawdzają, czy odróżnisz proces od jednorazowego przedsięwzięcia, np. wdrożenia systemu.
:::

---

<!-- slajd: porownanie -->
<!-- typ SD: E – porównawczy -->
# Po czym odróżnisz projekt od procesu?

| [[projekt|Projekt]] | [[proces|Proces]] |
|---|---|
| jednorazowy | powtarzalny, ciągły |
| ma początek i koniec | trwa |
| tworzy coś nowego lub zmienia stan | utrzymuje działanie |
| remont łazienki | sprzątanie co tydzień |

**Wniosek:** pytanie „czy to ma koniec?” rozstrzyga sprawę: koniec ma projekt, a proces trwa.

:::wykladowca
Teraz nazwy. Projekt to po angielsku Project, czytamy „prodżekt”. Proces to Process, czytamy „prołses”. Na egzaminie polskim i w podręczniku obie nazwy brzmią tak samo jak w życiu: projekt i proces. Spójrzcie na tabelę wiersz po wierszu. Projekt robi się raz, a proces powtarza się stale. Projekt ma datę startu i datę końca, a proces po prostu trwa. Projekt coś tworzy albo zmienia, a proces utrzymuje działanie. Ostatni wiersz to nasza łazienka: remont i sprzątanie.
:::

:::sb nie-mylic
**Proces to nie procedura.** Procedura to instrukcja krok po kroku, np. „jak wysłać alarm”. Proces jest szerszy: według COBIT 5 kierują nim polityki i procedury, ale proces ma też wejścia, wyniki i właściciela (FW-PL s. 93).
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający -->
<!-- podpowiedz: Zapytaj: czy to się powtarza bez końca? Tak – proces. -->
# Dlaczego proces nie ma daty końca?

:::atom
twierdzenie: Proces jest **powtarzalny** i ciągły.
poLudzku: Proces to praca, którą robisz w kółko, zawsze w podobny sposób.
zycie: Codzienne gotowanie obiadu to proces: robisz to co dzień, mniej więcej tak samo.
komenda: Dyżurny Grab kilka razy na dobę przyjmuje zgłoszenie, wybiera wozy i klika „alarm”.
sprawdz: P :: Comiesięczne sprawdzanie numerów telefonów ochotników jest procesem. :: Tak, powtarza się co miesiąc i utrzymuje działanie.
:::

**Wniosek:** proces to praca powtarzana w podobny sposób, bez daty zakończenia.

:::wykladowca
Pierwsze zdanie do zapamiętania: proces jest powtarzalny i ciągły. Pomyślcie o gotowaniu obiadu. Robicie to codziennie, prawie zawsze w tej samej kolejności. Nikt nie mówi: „ostatni obiad ugotuję w piątek”. W komendzie wygląda to tak samo. Dyżurny Paweł Grab przyjmuje zgłoszenie, wybiera wozy i klika „alarm”. Robi to kilka razy na dobę, przez cały rok. Proces nie ma daty końca, bo organizacja potrzebuje go stale. Gdyby się skończył, przestałaby działać jakaś jej część.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający -->
<!-- podpowiedz: Zapytaj: czy jest termin końca? Tak – projekt. -->
# Co sprawia, że praca jest projektem?

:::atom
twierdzenie: Projekt jest jednorazowy i ma początek oraz **koniec**.
poLudzku: Projekt robisz raz, żeby coś zbudować albo zmienić, i potem go zamykasz.
zycie: Organizacja wesela to projekt: ma datę startu przygotowań i dzień, w którym się kończy.
komenda: „Naprawić Syrenę do 30 kwietnia” to projekt, bo ma termin i potem się kończy.
sprawdz: F :: Wymiana serwera do 30 kwietnia jest procesem, bo dotyczy codziennych alarmów. :: Ma termin końca i robi się ją raz, więc to projekt.
:::

**Wniosek:** projekt ma termin końca, a po jego osiągnięciu się go zamyka.

:::wykladowca
Drugie zdanie: projekt jest jednorazowy i ma koniec. Wesele jest dobrym przykładem. Przygotowania zaczynają się w konkretnym dniu i kończą się w dniu wesela. Potem nikt nie organizuje tego samego wesela jeszcze raz. W komendzie po pożarze przy Lipowej 7 pada polecenie: „Naprawić Syrenę do 30 kwietnia”. Jest termin, jest cel, a potem zespół kończy pracę. Uwaga na pułapkę z ćwiczenia: wymiana serwera dotyczy codziennych alarmów, ale sama wymiana zdarza się raz. Dlatego jest projektem, a nie procesem.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (definicja ze źródła) -->
<!-- podpowiedz: Szukaj trzech części: co wchodzi, co ludzie robią, co wychodzi. -->
# Jak COBIT 5 definiuje proces?

Definicja z Załącznika H, podzielona na trzy części:

- „Zasadniczo jest to zbiór praktyk ukierunkowanych przez polityki i procedury przedsiębiorstwa
- oraz wykorzystujących dane wejściowe z różnych źródeł (również z innych procesów),
- przetwarzających je i dostarczających wyniki (np. produkty, usługi).”

Po ludzku: [[polityka|polityki]] (poznasz je w lekcji 2.1) to zasady spisane przez kierownictwo. Procedury to instrukcje krok po kroku. Praktyki to ustalone czynności, które ludzie wykonują.

Proces ma więc **wejścia → praktyki → wyniki**. Coś wchodzi (np. zgłoszenie), ludzie wykonują ustalone kroki, coś wychodzi (np. wysłany wóz). Proces ma też:
- właściciela, czyli osobę, która za niego odpowiada;
- role, czyli kto co robi;
- mierniki, czyli liczby, po których widać, czy działa dobrze.

:::zrodlo FW-PL 93
:::

**Wniosek:** w COBIT 5 proces to praktyki, które zamieniają wejścia w wyniki i mają swojego właściciela.

:::wykladowca
Teraz oficjalna definicja. Pochodzi z Załącznika H, czyli słowniczka na końcu podręcznika COBIT 5, ze strony 93. Brzmi trudno, dlatego dzielimy ją na trzy kawałki. Pierwszy: proces to zbiór praktyk, czyli ustalonych czynności. Kierują nimi polityki i procedury. Drugi: proces bierze dane wejściowe, także z innych procesów. Trzeci: przetwarza je i oddaje wyniki, na przykład produkt albo usługę. W podręczniku jest jeszcze uwaga, że proces ma właściciela, role i mierniki. Zapamiętajcie prosty skrót: wejście, kroki, wynik.
:::

:::teza interpretacyjna
sytuacja: Kasia Nowik mówi: „Proces to po prostu lista kroków w instrukcji”.
pytanie: Czy sama lista kroków wystarczy, żeby mówić o procesie w rozumieniu COBIT 5?
teza: Nie. Proces w COBIT 5 ma też rozliczanego właściciela, jasne role i mierniki sprawności.
uzasadnienie: Uwaga do definicji procesu w Załączniku H wymienia rozliczanych właścicieli, role i zakresy odpowiedzialności oraz środki pomiaru sprawności.
powiazanie: Aktywator „Procesy”; definicja procesu w Załączniku H
przyklad: Przyjmowanie zgłoszeń w SK ma właściciela (kierownik SK), role (dyżurni) i miernik (czas od zgłoszenia do wyjazdu).
status: oficjalne
zrodlo: FW-PL 93
refleksja: Kto w Twojej pracy jest właścicielem jakiegoś powtarzalnego zadania? Po jakiej liczbie poznasz, że idzie dobrze?
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający -->
<!-- podpowiedz: Każdy proces da się opisać jako „wejście → kroki → wynik”. -->
# Co wchodzi do procesu, a co z niego wychodzi?

:::atom
twierdzenie: Proces przetwarza dane **wejściowe** w wyniki, np. produkty i usługi.
poLudzku: Do procesu coś wpada, ludzie robią swoje i na końcu coś z niego wychodzi.
zycie: Pranie: wkładasz brudne ubrania, pralka i Ty robicie kolejne kroki, wyjmujesz czyste.
komenda: Do SK wpada zgłoszenie z numeru 112, dyżurny robi ustalone kroki, a wychodzi wysłany zastęp.
sprawdz: P :: Wysłany wóz strażacki może być wynikiem procesu przyjmowania zgłoszeń. :: Tak, zgłoszenie to wejście, a wysłany wóz to wynik.
:::

**Wniosek:** każdy proces opiszesz trzema słowami: wejście, kroki, wynik.

:::wykladowca
Sprawdźmy ten skrót na praniu. Wejście to brudne ubrania. Kroki to sortowanie, nastawienie pralki i rozwieszenie. Wynik to czyste ubrania. W komendzie wejściem jest zgłoszenie z numeru alarmowego 112. Wpada ono do SK, czyli stanowiska kierowania, pokoju dyżurnych. Krokami są pytania do zgłaszającego i wybór wozów. Wynikiem jest wysłany zastęp, czyli wóz z załogą. Po angielsku wejście to input, a wynik to output. Te słowa spotkacie w opisach procesów COBIT 5.
:::

:::progresja
0: W domu co tydzień robisz pranie: brudne ubrania wchodzą, czyste wychodzą.

1: W biurze każdy wniosek urlopowy przechodzi tę samą drogę: wniosek, podpis szefa, wpis w kadrach.

2: Firma kurierska ma opisany proces doręczenia z właścicielem, rolami i terminem dostawy.

3: Komenda przyjmuje zgłoszenia według stałych kroków i mierzy czas od telefonu do wyjazdu.

4: Kierownictwo wyznacza właściciela procesu, ustala mierniki i co miesiąc przegląda wyniki.

5: COBIT 5 opisuje 37 procesów, np. DSS02 (Zarządzanie zgłoszeniami serwisowymi i incydentami) z wejściami, wyjściami i praktykami.
:::

---

<!-- slajd: mapa -->
# Gdzie to leży w COBIT 5?

:::mapa akt-procesy
:::

Procesy to jeden z siedmiu [[aktywator|aktywatorów]] (poznasz je w lekcji 1.8), nr 2. Aktywator to wszystko, co pomaga informatyce działać dobrze: ludzie, zasady, narzędzia. [[prm|Model referencyjny]] (poznasz go w lekcji 1.12) to wzorcowy spis procesów. W [[cobit-5|COBIT 5]] zawiera ich 37.

:::wykladowca
Zobaczcie, gdzie proces leży na mapie COBIT 5. COBIT 5 wymienia siedem rodzajów aktywatorów. Po angielsku aktywator to Enabler, czytamy „inejbler”. To wszystko, co musi zagrać, żeby informatyka dobrze służyła organizacji. Procesy są aktywatorem numer dwa. COBIT 5 ma też wzorcowy spis procesów, czyli model referencyjny. Jest w nim 37 procesów. Na razie wystarczy Wam ta liczba. Szczegóły poznacie w lekcji 1.12, a dziś zapamiętajcie tylko, że proces jest jednym z aktywatorów.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku -->
<!-- podpowiedz: Zauważ, kiedy kończy się projekt i zaczyna się zwykły, codzienny proces. -->
# Kiedy projekt przekazuje pałeczkę procesom?

:::kontekst zycie
**Przeprowadzka.** Pakowanie, transport i rozpakowanie to projekt: ma dzień startu i dzień końca. Potem zaczynają się procesy w nowym mieszkaniu: sprzątanie, płacenie rachunków, wynoszenie śmieci.
:::

:::kontekst biuro
**Nowa drukarka.** Zakup i podłączenie drukarki to projekt. Potem trwa proces: codzienne drukowanie, wymiana tonera i zgłaszanie zaciętego papieru.
:::

:::kontekst firma
Projekt: otwarcie drugiego lokalu. Potem procesy: codzienne zamówienia, rozliczenia, sprzątanie.
:::

:::kontekst admin
Projekt: budowa portalu mieszkańca. Potem proces: obsługa e-wniosków.
:::

:::kontekst psp
**Codzienny alarm i jednorazowa naprawa**
Dyżurny Paweł Grab kilka razy na dobę wysyła alarm w systemie Syrena. Za każdym razem robi to samo: przyjmuje zgłoszenie, wybiera wozy z załogą i klika „alarm”. Po pożarze przy Lipowej 7 komendantka Anna Wrzos zleca coś innego: „Naprawić Syrenę do 30 kwietnia”. Ta naprawa raz się zaczyna i raz kończy. Potem alarmy znów idą codziennym trybem. Codzienne wysyłanie alarmu to [[proces]], a naprawa do 30 kwietnia to [[projekt]].
:::

:::kontekst psp
Projekt: modernizacja (unowocześnienie) stanowiska kierowania, czyli pokoju, z którego dyżurni wysyłają wozy. Potem proces: przyjmowanie zgłoszeń i dysponowanie sił i środków w nowym systemie. Dysponowanie to wysyłanie ludzi i sprzętu do zdarzenia.
:::

:::kontekst it
**COBIT 5.** Projekty prowadzi proces BAI01 (Zarządzanie programami i projektami). BAI to domena Twórz, Nabywaj i Wdrażaj (Build, Acquire and Implement). Rezultat projektu przejmują potem procesy z domeny DSS (Dostarczaj, Obsługuj i Wspieraj), np. DSS01 (Zarządzanie eksploatacją).
:::

**Wniosek:** projekt buduje albo zmienia, a potem procesy korzystają z jego rezultatu na co dzień.

:::wykladowca
Ten slajd pokazuje, jak projekt i proces się łączą. Przy przeprowadzce projekt kończy się w dniu, w którym rozpakujecie ostatnie pudło. Potem zaczyna się zwykłe życie w nowym mieszkaniu, czyli procesy. W biurze jest tak samo z drukarką. W komendzie naprawa Syreny to projekt, a codzienne alarmy to proces. Na końcu zobaczcie przykład z COBIT 5. Projekty prowadzi się w procesie BAI01. Rezultat przejmują procesy z domeny DSS. Domena to grupa procesów, taka szuflada. Te nazwy poznacie dokładnie w lekcji 1.13.
:::

:::teza praktyczna
sytuacja: Komenda kończy naprawę Syreny. Zespół projektowy rozchodzi się do swoich zadań.
pytanie: Czy po zamknięciu projektu można przestać się zajmować naprawionym systemem?
teza: Nie. Rezultat projektu trzeba przekazać procesom, które mają właściciela i dbają o system na co dzień.
uzasadnienie: Projekt z definicji się kończy, a system działa dalej. Bez procesu nikt nie pilnuje kopii, aktualizacji i numerów telefonów.
powiazanie: Aktywator „Procesy”; przejście od BAI do DSS
przyklad: Po naprawie Syreny Ola Dudek co miesiąc sprawdza kopie zapasowe, a dyżurni zgłaszają usterki.
status: uproszczenie
refleksja: Jaki projekt w Twoim otoczeniu skończył się sukcesem, a potem zaniedbano jego rezultat?
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający -->
<!-- podpowiedz: Projekt zostawia po sobie rezultat, z którym dalej pracuje proces. -->
# Co dzieje się z rezultatem projektu, gdy projekt się kończy?

:::atom
twierdzenie: Projekt kończy się rezultatem, który potem obsługują **procesy**.
poLudzku: Najpierw raz coś budujesz, a potem korzystasz z tego na co dzień.
zycie: Remont kuchni się kończy, a codzienne gotowanie w nowej kuchni trwa dalej.
komenda: Po naprawie Syreny dyżurni wracają do codziennego wysyłania alarmów w naprawionym systemie.
sprawdz: F :: Po zakończeniu projektu nie ma już żadnej pracy z jego rezultatem. :: Rezultat projektu przejmują procesy, które z niego codziennie korzystają.
:::

**Wniosek:** koniec projektu to początek codziennej pracy procesów z jego rezultatem.

:::wykladowca
Trzecie zdanie łączy dwa poprzednie. Projekt kończy się rezultatem, a ten rezultat przejmują procesy. Remont kuchni się kończy, ale w kuchni gotujecie potem codziennie. Rezultat to po angielsku outcome, czytamy „autkam”. W komendzie naprawiona Syrena wraca do dyżurnych. Odtąd alarmy idą zwykłym, codziennym trybem. Zwróćcie uwagę na zdanie w ćwiczeniu: „po projekcie nie ma już pracy”. To zdanie jest fałszywe. Praca trwa dalej, tylko zmienia się jej rodzaj z jednorazowej na powtarzalną.
:::

---

<!-- slajd: wlasne-slowa -->
<!-- typ SD: F – syntetyzujący (wydobywanie z pamięci) -->
# Czy potrafisz własnymi słowami odróżnić proces od projektu?

:::wlasne-slowa
Podaj po jednym przykładzie procesu i projektu z Twojej jednostki i wyjaśnij różnicę.
???
Proces jest powtarzalny i ciągły, np. obsługa zgłoszeń. Projekt jest jednorazowy, z początkiem i końcem, np. wymiana central. Projekt przekazuje rezultat do procesów.
:::

**Wniosek:** jeśli Twój projekt ma datę końca, a Twój proces jej nie ma, rozróżniasz je poprawnie.

:::wykladowca
Teraz Wasza kolej. Nie zaglądajcie do poprzednich slajdów. Pomyślcie o swojej pracy albo o komendzie z naszej historii. Podajcie jedną pracę, która się powtarza, i jedną, która ma koniec. Powiedzcie na głos, dlaczego jedna jest procesem, a druga projektem. Użyjcie słów: powtarzalny, jednorazowy, koniec. Gdy skończycie, porównajcie odpowiedź z wzorcem. Nie musi być identyczna. Ważne, żeby Wasz projekt miał termin końca, a proces go nie miał.
:::

---

<!-- slajd: wlasne-slowa -->
<!-- typ SD: F – syntetyzujący (wydobywanie z pamięci) -->
# Dlaczego warto odróżniać proces od projektu, skoro oba to praca?

:::wlasne-slowa
Dlaczego warto odróżniać proces od projektu, skoro oba to praca?
???
Bo inaczej się nimi kieruje. Projekt trzeba zaplanować, rozliczyć i zamknąć w terminie. Proces trzeba utrzymać na co dzień, mierzyć i ulepszać. Kto je pomyli, może np. zapomnieć o codziennym utrzymaniu systemu po wdrożeniu.
:::

**Wniosek:** rozróżnienie procesu i projektu ma skutki w codziennej pracy, a nie tylko na egzaminie.

:::wykladowca
To pytanie jest trudniejsze, bo dotyczy powodu, a nie definicji. Zastanówcie się, czy projektem i procesem kieruje się tak samo. Pomyślcie o terminach, o budżecie i o tym, kto pilnuje pracy po jej zakończeniu. Spróbujcie podać jeden przykład szkody, która wynika z pomylenia procesu z projektem. Podpowiem: przypomnijcie sobie Syrenę po naprawie. Dopiero potem odsłońcie wzorzec. Jeśli Wasza odpowiedź mówi o innym sposobie kierowania, jesteście na dobrej drodze.
:::

:::teza krytyczna
sytuacja: Komenda w projekcie kupuje nowy serwer dla Syreny. Proces przyjmowania alarmów zostaje bez zmian, z tymi samymi lukami.
pytanie: Czy nowy sprzęt kupiony w projekcie sam naprawi proces?
teza: Nie. Projekt może dostarczyć nowe narzędzie, ale proces z błędami przeniesie te błędy do nowego systemu.
uzasadnienie: Sprzęt i aplikacje to inny aktywator niż procesy. Poprawa jednego nie naprawia drugiego, jeśli nikt nie zmieni sposobu pracy.
powiazanie: Aktywatory „Procesy” oraz „Usługi, infrastruktura i aplikacje”; Zasada 4
przyklad: Nowy serwer działa, ale nikt nadal nie aktualizuje numerów ochotników, więc SMS znów nie dochodzi.
status: opinia
refleksja: Czy znasz zakup, który miał „wszystko naprawić”, a problem został? Co trzeba było zmienić w procesie?
:::

---

<!-- slajd: egzamin -->
<!-- typ SD: F – syntetyzujący (egzamin) -->
# Jakie liczby i jaką definicję procesu sprawdza egzamin?

:::zapamietaj
Procesy to jedna z **7** kategorii aktywatorów. Model referencyjny COBIT 5 ma 37 procesów.
:::

Słowa ze wskazówki poniżej: Załącznik H to słowniczek na końcu podręcznika COBIT 5. [[struktura-ramowa|Struktura ramowa]] to po ludzku „rama”, czyli uporządkowany zestaw zasad i wskazówek, taki jak sam COBIT 5.

:::egzamin
Definicja procesu z Załącznika H brzmi tak: zbiór praktyk ukierunkowanych politykami i procedurami, który przetwarza wejścia w wyniki. Polityka, struktura ramowa i aktywator należą do innych kategorii.
:::

**Wniosek:** na egzaminie proces rozpoznasz po słowach „praktyki”, „wejścia” i „wyniki”, a nie po słowie „zasada”.

:::wykladowca
Ten slajd zbiera to, o co pytają na egzaminie. Dwie liczby: siedem kategorii aktywatorów i 37 procesów. Do tego definicja procesu z Załącznika H. Uwaga na dystraktory, czyli błędne odpowiedzi, które brzmią podobnie. Polityka to zasada spisana przez kierownictwo, a nie proces. Struktura ramowa, po angielsku Framework, czytamy „frejmłerk”, to cała rama, taka jak COBIT 5. Aktywator to szersza kategoria, do której proces należy. Gdy w odpowiedzi widzicie praktyki, wejścia i wyniki, mówimy o procesie.
:::

:::sb kontrowersja
„Framework” ma dwa polskie odpowiedniki. Egzamin PL używa nazwy **Struktura ramowa**, a podręcznik PL – „Metodyka”. Status tłumaczenia: **C – sporny**. Na egzaminie zaznaczaj „Struktura ramowa”, nawet jeśli w podręczniku czytasz „metodyka COBIT 5”.
:::

---

<!-- slajd: rozwiazany -->
<!-- typ SD: D – przypadku (rozwiązany przykład) -->
<!-- podpowiedz: Szukasz czegoś, co się powtarza, a nie ma terminu końca. -->
# Rozwiązujemy razem: które działanie w komendzie jest procesem?

:::rozwiazany
W komendzie po pożarze przy Lipowej 7 dzieje się wiele rzeczy naraz. Które z tych działań jest **procesem**?
- A. Wymiana serwera Syreny (komputera, na którym działa) do 30 kwietnia
- B. Comiesięczne sprawdzanie numerów telefonów ochotników zapisanych w Syrenie
- C. Spis wszystkich osób, których dotyczy Syrena, sporządzony przez komendantkę
- D. Podpisana przez komendantkę zasada „żaden alarm nie może zginąć”
+++
**Krok 1 – co jest pytane?** Słowo-klucz: procesem. Szukasz działania, które się powtarza i ciągle trwa.
+++
**Krok 2 – jaka kategoria COBIT?** Proces z Załącznika H (s. 93): powtarzalny zbiór praktyk, który przetwarza wejścia w wyniki. Projekt jest jednorazowy i ma koniec.
+++
**Krok 3 – eliminacja.** A – *odwrócone*: ma termin końca, więc to projekt, a nie proces. C – *prawda nie na temat*: spis jest przydatny, ale to dokument, a nie powtarzalne działanie. D – *inna kategoria*: zasada podpisana przez kierownictwo to polityka.
+++
**Odpowiedź: B.** Dlaczego: sprawdzanie numerów powtarza się co miesiąc. Ma wejście (lista numerów) i wynik (aktualna lista), więc jest procesem.
:::

**Wniosek:** szukaj powtarzalności oraz pary „wejście – wynik”, a termin końca traktuj jako znak projektu.

:::wykladowca
Rozwiążmy to pytanie razem, krok po kroku. Najpierw czytamy, o co pytają: o proces. Potem przypominamy sobie kategorię: proces się powtarza i ma wejście oraz wynik. Teraz eliminacja. Wymiana serwera ma termin, więc to projekt. Spis osób to dokument, a nie działanie. Zasada podpisana przez komendantkę to polityka, czyli inna szuflada. Zostaje sprawdzanie numerów co miesiąc. Ma wejście, czyli starą listę, i wynik, czyli listę aktualną. Tak samo rozwiązujcie każde pytanie w ćwiczeniach.
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący -->
# Co już umiesz: proces trwa, projekt się kończy

- Umiesz odróżnić proces (powtarzalny) od projektu (jednorazowego, z końcem).
- Umiesz opisać proces jako wejście, praktyki i wynik.
- Umiesz powiedzieć, że procesy to jeden z 7 aktywatorów, a model ma 37 procesów.

**Co dalej i dlaczego:** w lekcji 0.6 poznasz Ład i Zarządzanie, czyli kto decyduje, a kto wykonuje.

:::wykladowca
Podsumujmy. Powiedzcie na głos trzy zdania, po polsku i z angielskimi nazwami. Process, czyli proces, powtarza się i trwa. Project, czyli projekt, robi się raz i ma koniec. Proces zamienia wejście w wynik dzięki praktykom i ma właściciela. Do tego dwie liczby: siedem aktywatorów i 37 procesów. Jeśli potraficie to powiedzieć bez patrzenia, przejdźcie do ćwiczeń. W następnej lekcji zapytamy, kto w organizacji decyduje o kierunku, a kto wykonuje pracę.
:::
