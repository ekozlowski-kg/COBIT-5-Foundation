# Historia przewodnia: „Syrena, która nie zawyła”

> **Przykład autorski (fikcja).** Miasto Modrzewiów, Komenda Miejska PSP w Modrzewiowie, OSP Zawilce, firma Kwant-Sygnał i wszystkie postacie są **wymyślone**. Nie odpowiadają żadnej realnej jednostce, firmie ani osobie. Historia ma tylko ilustrować pojęcia COBIT 5. Opisane procedury są uproszczone i nie są opisem prawdziwej organizacji PSP.

Ten plik to „biblia” historii (METODYKA §10.3, zmienione przez §17.1). Historia to **ciągłe studium przypadku**: każda lekcja ma dokładnie jedną scenę z tej historii jako pierwszy blok `:::kontekst psp`. Na slajdzie z przykładami kolejność kontekstów to jednak `zycie` → `biuro` → organizacja (`firma`/`admin`) → `psp` → `it` (§17.6), więc scena PSP stoi **po** przykładzie z życia i z biura. Pierwsza linia bloku to pogrubiony tytuł sceny. Scena musi być zrozumiała sama: wystarczy jedno zdanie przypomnienia, kim jest dana postać. Bloki „Kasia się myli” (§16.5) to osobne, krótkie konteksty `psp` po scenie.

---

## 1. Miejsce

- **Modrzewiów**: średnie miasto z okolicznymi wsiami.
- **Komenda Miejska PSP w Modrzewiowie** (w scenach po prostu „komenda”):
  - dwie jednostki ratowniczo-gaśnicze, JRG 1 i JRG 2;
  - stanowisko kierowania (SK);
  - Wydział Łączności i Informatyki;
  - księgowość i kadry.
- **OSP Zawilce**: ochotnicza straż we wsi 12 km od miasta. Ochotników wzywa się SMS-em i syreną.
- **System „Syrena”**: nowy system powiadamiania, kupiony przez komendę od firmy **Kwant-Sygnał**. Jednym kliknięciem dyżurnego wysyła alarm (SMS, aplikację, syrenę) do JRG i OSP.

## 2. Postacie i ich rola w COBIT 5

| Postać | Kim jest | Co ilustruje w COBIT 5 |
|---|---|---|
| **bryg. Anna Wrzos** | komendantka miejska | **Ład** (organ Ładu): ocenia potrzeby, wyznacza kierunek, monitoruje (Oszacuj, Kieruj, Monitoruj, EDM) |
| **kpt. Marek Sikora** | naczelnik Wydziału Łączności i Informatyki | **Zarządzanie**: planuje, tworzy, uruchamia i pilnuje działania systemów (Planuj, Twórz, Wykonuj, Monitoruj); kierownictwo IT |
| **mł. kpt. Ola Dudek** | informatyczka w wydziale Sikory | praca operacyjna IT: zgłoszenia, konfiguracja, kopie zapasowe (BAI, DSS) |
| **Ewa Lis** | audytorka wewnętrzna komendy (cywil) | **monitorowanie i ocena**: sprawdza, czy procesy działają; w dniu 4 ocenia zdolność procesów (MEA, model zdolności) |
| **Halina Mak** | główna księgowa | pieniądze, koszty, zasoby; liczy uzasadnienie biznesowe |
| **asp. sztab. Paweł Grab** | dyżurny SK, „stary wyga” | użytkownik systemu, interesariusz wewnętrzny; zna praktykę lepiej niż procedury |
| **st. ogn. Kasia Nowik** | młoda dyżurna SK | użytkowniczka; zadaje „głupie pytania”, które okazują się trafne (głos laika) |
| **mł. kpt. Robert Dąb** | dowódca zmiany w JRG 1 | odbiorca alarmów, interesariusz wewnętrzny |
| **dh Stanisław Pietrzak** | naczelnik OSP Zawilce | partner zewnętrzny; jego ludzie dostają alarm z Syreny |
| **Zofia Kaczmarek** | mieszkanka ul. Lipowej 7 | interesariusz zewnętrzny: nie korzysta z systemu, ale ponosi skutki jego awarii |
| **mł. bryg. Lucyna Ostrowska** | inspektorka z komendy wojewódzkiej | nadzór zewnętrzny, regulator; zapowiada kontrolę (zdarzenie wyzwalające) |
| **Igor Wolny** | handlowiec firmy Kwant-Sygnał | dostawca, interesariusz zewnętrzny |

**Stałe skróty w scenach:** SK – stanowisko kierowania (pokój, z którego dyżurni wysyłają zastępy); JRG – jednostka ratowniczo-gaśnicza (zawodowa „remiza”); OSP – ochotnicza straż pożarna; zastęp – jeden wóz z załogą. Przy pierwszym użyciu w lekcji skrót dostaje nawias.

## 3. Oś fabularna na 5 dni

### Dzień 1: „Kto tu w ogóle decyduje?”
W nocy z 14 na 15 marca pali się dom Zofii Kaczmarek przy Lipowej 7. Dyżurny Grab klika „alarm” w Syrenie. JRG 1 rusza, ale **OSP Zawilce nie dostaje SMS-a**, a to ona była najbliżej. Pomoc dociera 6 minut później, niż mogła. Nikt nie zginął, ale strych spłonął.

Rano wszyscy się przerzucają winą:
- dostawca mówi, że „system działa zgodnie z umową”;
- Sikora, że system kupiono bez pytania jego wydziału;
- księgowa, że wybrano najtańszą ofertę, bo tak kazano.

Komendantka Wrzos pyta: **„Kto za to odpowiada i kto o tym decyduje?”** Okazuje się, że nikt nie wie, czego właściwie komenda chciała od Syreny.

Dzień 1 to porządkowanie podstaw:
- kogo to obchodzi (interesariusze);
- czego chcą (potrzeby);
- co zyskujemy, a co ryzykujemy (wartość, ryzyko, zasoby);
- kto decyduje, a kto wykonuje (Ład kontra Zarządzanie);
- jak z „chcemy szybszej pomocy” zrobić konkretne cele (kaskada celów).

### Dzień 2: „Robimy porządek po COBIT-owemu”
Komendantka postanawia, że komenda nie będzie gasić pożarów w IT od przypadku do przypadku. Sikora przynosi COBIT 5, a zespół poznaje kolejne elementy:
- **5 zasad**;
- **7 aktywatorów**, czyli wszystkiego, co musi zagrać, żeby Syrena działała;
- **4 wymiary aktywatora**;
- **wskaźniki wiodące i opóźnione**;
- **37 procesów**: Wrzos zostawia sobie 5 procesów Ładu, a Sikora bierze 32 procesy Zarządzania.

### Dzień 3: „Ludzie, papiery, informacja”
Komenda przechodzi po kolei przez aktywatory:
- polityka powiadamiania („kto, kiedy, jak”);
- proces obsługi alarmu i tabela RACI;
- nowa Rada ds. Informatyki (struktura organizacyjna);
- kultura zgłaszania błędów bez szukania kozła ofiarnego;
- jakość danych adresowych, bo numer telefonu Pietrzaka w Syrenie był nieaktualny;
- serwer i aplikacje;
- szkolenia dyżurnych.

### Dzień 4: „Wdrożenie i ocena”
Ostrowska z komendy wojewódzkiej zapowiada kontrolę, a to **zdarzenie wyzwalające**. Awaria z Lipowej to **punkt zapalny**.

Komenda prowadzi wdrożenie według **7 faz i 3 pierścieni**, a księgowa Mak pisze **uzasadnienie biznesowe**. Na koniec audytorka Lis **ocenia zdolność** procesu powiadamiania: poziomy 0–5, atrybuty, skala N/C/W/P.

### Dzień 5: „Co komenda zrobiła dobrze”
Pół roku później (fikcyjnie) jest ćwiczenie nocne: Syrena alarmuje wszystkich w 40 sekund. Komendantka podsumowuje drogę od awarii do oceny procesu, a to jest powtórka całego materiału przed egzaminem.

## 4. Lista scen: jedna na lekcję (tytuł i założenie)

Tytuł sceny jest pierwszą linią bloku `:::kontekst psp` (pogrubioną). Treść sceny ma 3–6 zdań: kto, co robi, co się dzieje, a w ostatnim zdaniu, gdzie w tej scenie jest pojęcie z lekcji.

### Dzień 1
| Lekcja | Tytuł sceny | Założenie |
|---|---|---|
| m0-00 | **Noc na Lipowej** | Pożar, Syrena nie alarmuje OSP, poranna kłótnia. Komenda jako organizacja z celem (pomoc mieszkańcom), IT jako narzędzie, Wrzos płaci i odpowiada, a nikt nie ma „instrukcji” ustalającej, kto o czym decyduje. Po to są ramy. |
| m0-01 | **Kogo obchodzi Syrena?** | Wrzos każe spisać wszystkich, których dotyczy Syrena: Grab, Nowik, Dąb, Pietrzak, Kaczmarek, Wolny, Ostrowska. Pani Kaczmarek nigdy nie widziała systemu, a ucierpiała najbardziej. |
| m0-02 | **Każdy chce czego innego** | Dyżurni chcą prostego ekranu, Pietrzak SMS-a „zawsze, nawet gdy nie ma zasięgu”, księgowa niskiego abonamentu. Po pożarze pojawia się nowy wyznacznik: wojewódzka kontrola czasów dojazdu. |
| m0-03 | **Ile jest warta minuta** | Księgowa pyta, „czy Syrena się opłaca”. Wrzos tłumaczy, że korzyść to szybsza pomoc, a nie zysk w złotówkach. Rezultat to alarm, który dochodzi. |
| m0-04 | **Co jeszcze może pójść źle** | Sikora wypisuje na tablicy, co może zawieść: zasięg, prąd w serwerowni, nieaktualne numery. Zasoby to ludzie Sikory, serwer, budżet i czas dyżurnych. |
| m0-05 | **Codzienny alarm i jednorazowa naprawa** | Wysyłanie alarmu to coś, co dzieje się codziennie (proces). „Naprawa Syreny do 30 kwietnia” to jednorazowe przedsięwzięcie z końcem (projekt). |
| m0-06 | **Komendantka nie konfiguruje serwera** | Wrzos mówi: „Ja decyduję, co ma działać i po co. Pan, panie Sikora, decyduje jak.” Intuicja Ładu i Zarządzania. |
| m0-07 | **Sikora przynosi książkę** | Sikora porównuje: ITIL mówi, jak prowadzić usługi IT, ISO 27001 o bezpieczeństwie, a COBIT 5 „spina” całość od góry. |
| m0-08 | **Nowik i dziwne słowa** | Nowik w podręczniku czyta „Nadzór” i „Czynnik umożliwiający”, a w pytaniach próbnych widzi „Ład” i „Aktywator”. Grab śmieje się, że „to jak w regulaminie: słowa dziwne, sens prosty”. Na egzaminie liczą się nazwy egzaminacyjne. |
| m0-09 | **Słownik z korytarza** | Nowik przykleja na drzwiach SK kartkę z tłumaczeniem słów z narad: „interesariusz = kogo to obchodzi”, „zasób = co mamy do dyspozycji”. |
| pr-01 | **Pięć palców jednej ręki** | Wrzos rysuje na kartce 5 zasad jako 5 palców: osobno nic nie złapiesz, razem trzymasz. |
| pr-02 | **Trzy szale wagi** | Przy decyzji o nowym module Syreny Wrzos waży trzy rzeczy: korzyść (szybsze alarmy), ryzyko (awaria nowego modułu), zasoby (budżet, ludzie Sikory). |
| pr-03 | **Od „chcemy szybciej” do konkretu** | Zespół schodzi krok po kroku: wyznacznik (kontrola KW), potrzeba (szybka pomoc), cel komendy, cel IT, cel aktywatora (np. aktualna lista numerów OSP). |
| pr-04 | **Cztery spojrzenia na komendę** | Halina Mak przypina cele do czterech perspektyw karty wyników: Finanse, Klient (tu: mieszkańcy), Obszar wewnętrzny, Szkolenie i rozwój (nazwy egzaminacyjne). |
| pr-05 | **Kaskada to nie przepis na ciasto** | Sikora chce wdrożyć wszystkie 17 celów IT naraz. Wrzos hamuje: kaskada pomaga wybrać priorytety, a nie wszystko robić. |
| ex-00 | **Grab czyta pytanie dwa razy** | Grab na kursie dyżurnych uczy Nowik: „najpierw szukaj słowa NIE i NAJLEPIEJ, potem wyrzucaj odpowiedzi nie na temat”. |

### Dzień 2
| Lekcja | Tytuł sceny | Założenie |
|---|---|---|
| ex-01 | **Słowo, które zmienia pytanie** | Na odprawie pada pytanie „który zastęp NIE wyjeżdża?”. Nowik odpowiada odwrotnie, bo przeoczyła „NIE”. |
| pr-06 | **Syrena to nie tylko sprawa informatyków** | Wrzos włącza do sprawy księgowość, kadry, SK i OSP, bo IT dotyczy całej komendy. Podejście do Ładu: kto deleguje, kto kieruje, kto wykonuje. |
| pr-07 | **Jedna instrukcja zamiast pięciu** | W szafie leżą osobne instrukcje od dostawcy, z KW i z wydziału. Sikora zbiera je w jedną spójną ramę, w którą inne standardy się wpinają. |
| pr-08 | **Siedem rzeczy, które muszą zagrać** | Awaria z Lipowej miała wiele przyczyn: brak polityki, zły proces, brak osoby odpowiedzialnej, kultura „nie zgłaszaj”, złe dane, słaby serwer, nieprzeszkoleni ludzie. To 7 aktywatorów. |
| pr-09 | **Rozbieramy „listę numerów OSP”** | Lista numerów to aktywator. Ma interesariuszy (kto jej używa), cele (aktualna i dostępna), cykl życia (tworzenie, aktualizacja, usuwanie) i dobre praktyki. |
| pr-09b | **Prawdziwa, przydatna, chroniona** | Nowik w nocy szuka numeru naczelnika OSP. Rano Sikora pyta o listę numerów: czy jest prawdziwa i dokładna (jakość wewnętrzna), czy przydaje się dyżurnemu w chwili potrzeby (jakość kontekstowa), czy dyżurny otworzy ją w nocy, a zmienić mogą ją tylko uprawnieni (dostęp i bezpieczeństwo). |
| pr-10 | **Licznik, który ostrzega wcześniej** | Czas dotarcia alarmu mierzy się po fakcie (wskaźnik opóźniony). Procent numerów sprawdzonych w tym miesiącu ostrzega wcześniej (wskaźnik wiodący). |
| pr-11 | **Kto ocenia, a kto robi** | Wrzos raz w kwartale ocenia, kieruje i monitoruje. Sikora planuje, tworzy, uruchamia i co tydzień monitoruje. Spotykają się na odprawie, a każde ma swoją rolę. |
| pr-12 | **Pięć obowiązków komendantki** | Wrzos dostaje kartkę z pięcioma procesami Ładu (EDM01–05): ustalanie zasad gry, korzyści, ryzyko, zasoby i przejrzystość wobec interesariuszy. |
| pr-13 | **Trzydzieści dwa zadania Sikory** | Sikora układa swoje 32 procesy w cztery szuflady: planowanie (APO), budowa i zmiany (BAI), codzienne działanie (DSS), kontrola (MEA). |

### Dzień 3
| Lekcja | Tytuł sceny | Założenie |
|---|---|---|
| en-01 | **Polityka powiadamiania** | Wrzos podpisuje krótką politykę: kto, kiedy i jak wysyła alarm, kto aktualizuje numery i co grozi za jej łamanie. Zasada (wartość) to „żaden alarm nie może zginąć”. |
| en-02 | **Alarm krok po kroku** | Nowik rozpisuje proces obsługi alarmu: wejście (zgłoszenie z CPR 112), działania, wyjście (potwierdzenie z OSP) i cel procesu. |
| en-03 | **Kto robi, kto odpowiada** | Tabela RACI dla aktualizacji numerów: Dudek wykonuje (R), Sikora odpowiada (A), Pietrzak jest konsultowany (C), SK jest informowane (I). |
| en-04 | **Rada ds. Informatyki** | Wrzos powołuje radę: skład, jak często się zbiera, co może zdecydować sama, a co eskaluje do komendantki. |
| en-05 | **Kto jest kim w komendzie** | Zespół dopasowuje osoby do ról COBIT: Wrzos jako organ Ładu, Sikora jako szef IT, Lis jako audyt, dyżurni jako użytkownicy. |
| en-06 | **Grab przyznaje się do błędu** | Grab mówi na odprawie, że już miesiąc temu Syrena raz nie wysłała SMS-a, ale bał się zgłosić. Wrzos dziękuje mu publicznie i wprowadza zasadę zgłaszania bez kar. |
| en-07 | **Numer, który był nieaktualny** | Numer Pietrzaka w Syrenie był sprzed dwóch lat. Informacja była w systemie, ale nieaktualna (jakość), a nie każdy dyżurny miał do niej dostęp. |
| en-08 | **Serwer pod schodami** | Syrena działa na jednym serwerze w schowku bez zasilania awaryjnego. Sikora opisuje usługi, infrastrukturę i aplikacje, które za nią stoją. |
| en-09 | **Kto umie obsłużyć Syrenę** | Okazuje się, że tylko Grab zna tryb awaryjny. Sikora spisuje, jakie umiejętności są potrzebne w każdej roli, i planuje szkolenia. |
| ex-02 | **Prawda z innej szuflady** | Nowik wybiera odpowiedź prawdziwą, ale dotyczącą innego tematu. Grab: „Dobrze mówisz, tylko nie o tym pytali.” |

### Dzień 4
| Lekcja | Tytuł sceny | Założenie |
|---|---|---|
| ex-03 | **Czterdzieści minut na test** | Nowik przed egzaminem awansowym ćwiczy tempo: najpierw pytania pewne, trudne oznacza i wraca do nich. |
| im-01 | **Co nam pomoże, co przeszkodzi** | Przed wdrożeniem Sikora spisuje otoczenie: wsparcie komendantki (czynnik sukcesu), mały budżet, opór „starych dyżurnych” (czynniki środowiskowe). |
| im-02 | **Ból i iskra** | Awaria z Lipowej to punkt zapalny (coś boli). Zapowiedź kontroli Ostrowskiej to zdarzenie wyzwalające (impuls „teraz albo nigdy”). |
| im-03 | **Trzy kręgi wdrożenia** | Wdrożenie to nie tylko technika (doskonalenie ciągłe): trzeba też przekonać ludzi (zarządzanie zmianą) i ustalić, kto prowadzi program. |
| im-04 | **Siedem kroków naprawy** | Komenda przechodzi 7 faz: od „co nas skłania” przez „gdzie jesteśmy, gdzie chcemy być” po „jak utrzymać tempo”. |
| im-05 | **Księgowa liczy** | Halina Mak pisze uzasadnienie biznesowe: koszty, korzyści, ryzyka, i aktualizuje je przy każdej fazie, a nie raz na początku. |
| pc-01 | **Nie „dojrzałość”, tylko „zdolność”** | Lis tłumaczy, że nie ocenia całej komendy, tylko konkretny proces: jak dobrze działa powiadamianie. |
| pc-02 | **Od „jakoś działa” do „ciągle się poprawia”** | Lis pokazuje drabinkę poziomów 0–5 na procesie powiadamiania i 9 atrybutów, które sprawdza. |
| pc-03 | **Oceny jak w szkole, tylko cztery** | Lis ocenia atrybuty skalą N/C/W/P i tłumaczy, dlaczego „W” na poziomie 2 wystarczy, ale niżej musi być „P”. |
| pc-04 | **Dwa wymiary jednej oceny** | Wymiar procesu (czy robimy to, co proces ma robić) i wymiar zdolności (jak dobrze tym zarządzamy). |
| pc-05 | **Po co ta cała ocena** | Wrzos chce wiedzieć, gdzie są słabe punkty, zanim przyjedzie kontrola. Lis wybiera przewodnik: pełny dla audytu, samoocenę dla komendy. |

### Dzień 5
| Lekcja | Tytuł sceny | Założenie |
|---|---|---|
| ex-04 | **Mapa na drzwiach SK** | Pół roku później na drzwiach SK wisi jedna kartka: 5 zasad, 7 aktywatorów i 37 procesów. |
| ex-05 | **Ćwiczenie nocne** | Syrena alarmuje wszystkich w 40 sekund. Lis potwierdza poziom 3 procesu, a Wrzos podsumowuje drogę. |
| ex-06 | **Rano przed egzaminem** | Nowik idzie na egzamin: wyspana, z dowodem osobistym i z zasadą „czytaj słowo-klucz”. |

## 5. Zasady pisania scen
1. Pierwsza linia: **tytuł sceny** (pogrubiony), potem 3–6 zdań.
2. Scena jest zrozumiała sama. Postać przedstawiamy przy pierwszym wystąpieniu w lekcji, np. „Komendantka Anna Wrzos…”.
3. Ostatnie zdanie wskazuje pojęcie: „…to jest właśnie [[lad|Ład]]”.
4. Bez prawdziwych nazw jednostek i osób. CPR 112, KW PSP i KG PSP występują tylko jako rodzaje instytucji.
5. Fakty COBIT muszą się zgadzać z lekcją. Scena ilustruje pojęcie, ale niczego go nie uczy na nowo.
