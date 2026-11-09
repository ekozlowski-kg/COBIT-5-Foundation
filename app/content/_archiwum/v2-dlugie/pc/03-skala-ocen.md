---
id: pc-03-skala
modul: PC
modulNazwa: Moduł 4 – Model zdolności procesu
temat: "Skala ocen N/C/W/P – jak zmierzyć, w jakim stopniu atrybut jest osiągnięty?"
lekcja: "4.3"
dzien: 8
sylabus: [PC-01-03, PC-02-06]
minuty: 31
zgadnij: [q-pre-pc-03]
cwiczenia: [q-pc-03-01, q-pc-03-04, q-pc-03-07, q-men-pc-03-skala-1, q-men-pc-03-skala-4]
wprowadza: [skala-ocen, ocena-n, ocena-c]
wymaga: [pc-02-poziomy, pc-02c-atrybuty-1-2]
cel:
  - "Potrafię podać cztery oceny skali N/C/W/P z progami procentowymi i ich odpowiedniki angielskie N/P/L/F."
  - "Potrafię rozpoznać ocenę N i C i wyjaśnić, dlaczego N albo C na PA 1.1 oznacza poziom 0."
priorytet: 1
zapas: [q-zap-pc-03-skala-2, q-zap-pc-03-3]
wielkiObraz: 7
twierdzenia: ["Skala ocen ma cztery stopnie: N, C, W, P.", "Na polskim egzaminie litera P oznacza Pełny, a po angielsku P to Partially, czyli częściowy.", "N – Nieosiągnięty to 0–15%, a C – Częściowy to ponad 15% do 50%.", "Ocena N albo C na PA 1.1 oznacza, że proces ma poziom 0."]
typowePytania: [{"pytanie": "P to chyba częściowo, jak po angielsku Partially?", "odpowiedz": "Nie na polskim egzaminie. Tam P to Pełny, a częściowy to C. Zawsze sprawdź, w której wersji jest litera."}, {"pytanie": "Skoro C to „częściowy”, to proces na C jakoś działa, więc ma poziom 1?", "odpowiedz": "Nie. Poziom 1 wymaga co najmniej W na PA 1.1. Przy C proces ma poziom 0, choć coś się w nim dzieje."}, {"pytanie": "Czy ocena N znaczy, że procesu w ogóle nie ma?", "odpowiedz": "Nie zawsze. N znaczy, że dowodów osiągania atrybutu nie ma albo jest ich znikomo mało, czyli 0–15%."}]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "etap 3 – do przeglądu użytkownika"}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Czy „trochę” to już „zaliczone”?

Ćwiczysz rzuty do kosza.
- Trafiasz **10%** razy: praktycznie nic.
- **40%**: częściowo.
- **70%**: w większości.
- **95%**: w pełni.

Tak właśnie ocenia się [[atrybuty-procesu|atrybuty procesu]], czyli cechy, które sprawdza oceniający.

**Wniosek:** między „nie umiem” a „umiem” są stopnie pośrednie i trzeba je jakoś nazwać.

:::wykladowca
Zacznijmy od boiska, a nie od normy. Gdy ktoś pyta, czy umiesz rzucać do kosza, uczciwa odpowiedź rzadko brzmi „tak” albo „nie”. Zwykle brzmi: „trochę”, „w większości” albo „prawie zawsze”. Oceniający procesy ma ten sam kłopot. Atrybut procesu rzadko jest spełniony w zero albo w stu procentach. Dlatego COBIT 5 używa skali z czterema stopniami. Dziś poznacie tę skalę i dwie najniższe oceny. Dwie wyższe oceny i regułę liczenia poziomu omówimy w następnej lekcji.
:::

:::pytanie-uczestnika
pytanie: Czy to znaczy, że oceniający strzela na oko?
odpowiedz: Nie. Ocenia na podstawie dowodów, na przykład rejestrów i dokumentów, a wynik przypisuje do przedziału procentowego.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: B – objaśniający (zjawisko, bez terminów) -->
<!-- podpowiedz: W każdym przykładzie ktoś liczy, jak często coś się udaje, i wybiera jeden z czterech stopni. -->
# Jak zmierzyć „w jakim stopniu”, a nie tylko „tak albo nie”?

:::kontekst zycie
**Pokój syna.** Przez miesiąc patrzysz, jak syn sprząta swój pokój. Prawie nigdy – to pierwszy stopień. Czasem, gdy mu przypomnisz – drugi. Zwykle tak, ale z wpadkami – trzeci. Zawsze i bez przypominania – czwarty.
:::

:::kontekst biuro
**Teczki w archiwum.** Kierownik przegląda 20 losowych teczek. Kompletnych jest 18, czyli 90%. Gdyby było ich 14, wyszłoby 70%, a przy 6 tylko 30%.
:::

:::kontekst organizacja
**Reklamacje w sklepie internetowym.** Kontrolerka losuje 50 reklamacji z kwartału i liczy, ile rozpatrzono w terminie. Wynik w procentach przypisuje do jednego z czterech przedziałów.
:::

:::kontekst psp
**Scena: „Ile razy alarm naprawdę doszedł?”** Audytorka Ewa Lis bierze z systemu Syrena 50 alarmów. Liczy, w ilu przypadkach potwierdzenie przyszło od wszystkich wezwanych jednostek, także od OSP Zawilce.
:::

:::kontekst it
**Incydenty w DSS02 (Zarządzanie zgłoszeniami serwisowymi i incydentami).** Asesor sprawdza w rejestrze, ile incydentów zarejestrowano, sklasyfikowano i zamknięto. Udział spraw z kompletem dowodów wyznacza ocenę.
:::

**Wniosek:** ocena stopniowa to policzenie dowodów i przypisanie wyniku do jednego z czterech przedziałów.

:::wykladowca
Zobaczcie, że wszystkie przykłady mają ten sam schemat. Najpierw ktoś bierze próbkę: dni, teczki, reklamacje albo alarmy. Potem liczy, w ilu przypadkach jest dowód, że rzecz się udała. Na koniec wynik w procentach trafia do jednego z czterech przedziałów. Ewa Lis w komendzie robi dokładnie to samo z logami Syreny. Asesor w dziale informatyki robi to z rejestrem incydentów. Zapamiętajcie ten ruch: próbka, dowody, procent, stopień. Za chwilę nadamy stopniom nazwy.
:::

:::progresja
0: „Działa albo nie działa” – oceniasz tylko tak albo nie.

1: Szkolne oceny: kilka stopni zamiast dwóch, ale bez progów procentowych.

2: Biuro: liczysz procent kompletnych teczek w losowej próbce.

3: Organizacja: kontrola ocenia na podstawie dowodów z próbki spraw i ma ustalone progi.

4: Komenda: Ewa Lis liczy, w ilu alarmach z Syreny przyszło potwierdzenie od wszystkich jednostek.

5: COBIT 5: skala N/C/W/P (EN: N/P/L/F) z progami 15, 50 i 85% dla 9 atrybutów (FW-PL s. 45).
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta terminu) -->
<!-- podpowiedz: Na polskim egzaminie kolejność to N, C, W, P, a P jest najwyższe. -->
# Skala ocen: cztery stopnie od N do P

[[skala-ocen|Skala ocen]] pochodzi z międzynarodowej normy oceny procesów o numerze 15504. Wydały ją ISO (International Organization for Standardization – Międzynarodowa Organizacja Normalizacyjna) i IEC (International Electrotechnical Commission – Międzynarodowa Komisja Elektrotechniczna). Dlatego pełny zapis to ISO/IEC 15504. Kolumna „EN” to oznaczenia angielskie.

| Egzamin PL | EN | Próg | Opis |
|---|---|---|---|
| **N** – Nieosiągnięty | N – Not achieved | **0–15%** | brak lub znikome dowody |
| **C** – Częściowy | P – Partially | **>15–50%** | pewne dowody, część aspektów nieprzewidywalna |
| **W** – Większościowy | L – Largely | **>50–85%** | podejście systematyczne, mogą być słabości |
| **P** – Pełny | F – Fully | **>85–100%** | kompletne i systematyczne, bez istotnych słabości |

:::zrodlo FW-PL 45
:::

:::uproszczenie
Podręcznik (FW-PL s. 45) podaje przedziały „0–15%, 15–50%, 50–85%, 85–100%” i nie rozstrzyga, do której oceny należą krańce. Zapis „>15%”, „>50%”, „>85%” w tabeli (dokładnie 15% to jeszcze N, 50% – C, 85% – W) to konwencja normy ISO/IEC 15504-2, a nie tekst FW-PL.
:::

:::glebiej skala-ocen
Trzy szczeble: od życia codziennego do przypadku granicznego.
:::

**Wniosek:** każdy atrybut dostaje jedną z czterech ocen, a o ocenie decyduje odsetek dowodów.

:::wykladowca
Teraz nazwy. Po angielsku to rating scale, czytamy „rejting skejl”. Po polsku: skala ocen. Ma cztery stopnie. N to Nieosiągnięty, po angielsku Not achieved, czyli „not acziwd”: od zera do piętnastu procent. C to Częściowy, po angielsku Partially, czyli „parszali”: ponad piętnaście do pięćdziesięciu. W to Większościowy, po angielsku Largely, czyli „lardżli”: ponad pięćdziesiąt do osiemdziesięciu pięciu. P to Pełny, po angielsku Fully, czyli „fuli”: ponad osiemdziesiąt pięć. Zwróćcie uwagę na kolumnę EN. Litery po angielsku są inne.
:::

:::teza interpretacyjna
sytuacja: Dyżurny Paweł Grab słyszy, że proces powiadamiania dostał C, i czuje się osobiście oceniony.
pytanie: Czy ocena na skali N/C/W/P mówi, jak dobrze pracują ludzie?
teza: Nie. Skala mierzy stopień osiągnięcia atrybutu procesu na podstawie dowodów, a nie wysiłek pojedynczych osób.
uzasadnienie: FW-PL opisuje każdą ocenę przez dowody osiągania atrybutu w ocenianym procesie i przez przedział procentowy.
powiazanie: Model zdolności procesu; skala ocen ISO/IEC 15504
przyklad: Grab wysyła każdy alarm, ale przez stare numery część SMS-ów nie dochodzi. Proces dostaje C, choć Grab pracuje sumiennie.
status: oficjalne
zrodlo: FW-PL 45
refleksja: Co Grab mógłby zrobić, gdyby chciał pomóc podnieść tę ocenę?
:::

:::sb kontrowersja
Skala ma trzy zapisy. FW-PL (s. 45) zostawia litery angielskie N/P/L/F i opisuje je słowami „nie osiągnięto”, „częściowo”, „w znacznym stopniu”, „w pełni”. Egzamin PL używa liter N/C/W/P. Status tłumaczenia: **C – sporny**. Kurs przyjmuje zapis egzaminu: N/C/W/P.
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: Ta sama litera P znaczy co innego po polsku i po angielsku. -->
# Co znaczy litera P na polskim egzaminie?

:::atom
twierdzenie: Na polskim egzaminie litera P oznacza **Pełny**.
poLudzku: P to najwyższa ocena: ponad 85%.
zycie: „Pilot” w samolocie to człowiek, a w salonie to pilot do telewizora. To samo słowo znaczy co innego w innym miejscu.
komenda: Lis wpisuje P przy wysyłaniu alarmu, bo alarm dochodzi praktycznie zawsze.
sprawdz: F :: Na polskim egzaminie P oznacza częściowy. :: Częściowy to C. P to Pełny.
:::

**Wniosek:** zanim odczytasz literę P, sprawdź, czy tekst używa zapisu polskiego, czy angielskiego.

:::wykladowca
Ten slajd ma jedno zdanie, ale to zdanie ratuje punkty. Na polskim egzaminie P to Pełny, czyli najwyższa ocena. W angielskich materiałach i w polskim podręczniku P to Partially, czyli częściowo. Jedna litera, dwa przeciwne znaczenia. Pomyślcie o słowie „pilot”: w samolocie to człowiek, a na kanapie to pilot do telewizora. Dlatego przy każdej literze najpierw pytacie: „z której wersji jest ten zapis?”. Dopiero potem odczytujecie ocenę.
:::

---

<!-- slajd: mapa -->
# Gdzie to leży w COBIT 5?

:::mapa skala-ocen
:::

Skalę stosuje się do **każdego z 9 atrybutów**. Na tej podstawie ustala się [[poziomy-zdolnosci|poziom zdolności]].

:::wykladowca
Spójrzcie na mapę. Skala ocen leży w modelu zdolności procesu, obok poziomów i atrybutów. Dziewięć atrybutów znacie z poprzednich lekcji. Każdy z nich oceniający ocenia osobno, tą samą skalą czterech liter. Dopiero z tych dziewięciu ocen wylicza się poziom całego procesu, od zera do pięciu. Czyli skala nie jest poziomem. Skala to narzędzie, którym oceniamy atrybuty, a poziom jest wynikiem.
:::

:::sb skrot
PA (*process attribute*, wym. „prołses etribjut”) to atrybut procesu. Pierwsza cyfra po skrócie mówi, do którego poziomu należy atrybut: PA 1.1 to jedyny atrybut poziomu 1.
:::

:::sb nie-mylic
Ocena atrybutu (N, C, W, P) to co innego niż poziom procesu (0–5). Litera opisuje jeden atrybut, np. PA 1.1. Liczba opisuje cały proces i powstaje z ocen wszystkich atrybutów.
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: N to prawie zero dowodów: 0–15%. -->
# Kiedy atrybut dostaje N – Nieosiągnięty?

[[ocena-n|N – Nieosiągnięty]] (EN: *N – Not achieved*): dowodów osiągania atrybutu nie ma albo jest ich znikomo mało, **0–15%**.

:::atom
twierdzenie: Ocena **N – Nieosiągnięty** oznacza 0–15% osiągnięcia atrybutu.
poLudzku: Śladów, że to się dzieje, nie ma albo są tylko pojedyncze.
zycie: Syn przez miesiąc sam odrobił lekcje raz, i to po trzech przypomnieniach.
komenda: Na sto pism przychodzących w komendzie do rejestru wpisano dwa, więc Lis wpisuje N.
sprawdz: F :: N oznacza zawsze, że procesu w ogóle nie ma. :: N znaczy znikome dowody osiągania atrybutu, czyli 0–15%. Coś może się dziać, ale prawie bez efektu.
:::

:::zrodlo FW-PL 45
:::

:::glebiej ocena-n
:::

**Wniosek:** N to „prawie nic”: najwyżej 15% dowodów.

:::wykladowca
Pierwsza ocena to N, Nieosiągnięty, po angielsku Not achieved, czytamy „not acziwd”. Oceniający wpisuje N, gdy dowodów brak albo jest ich znikomo mało. Granica to piętnaście procent. Uwaga: N nie znaczy zawsze, że nikt nic nie robi. Ktoś mógł raz wpisać pismo do rejestru. Ale dwa wpisy na sto to wciąż N. Liczy się, czy atrybut jest osiągany, a nie czy ktoś kiedyś spróbował.
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: C to „trochę, bez systemu”: ponad 15% do 50%. -->
# Kiedy atrybut dostaje C – Częściowy?

[[ocena-c|C – Częściowy]] (EN: *P – Partially achieved*): są pewne dowody, ale osiąganie jest nieregularne, **ponad 15% do 50%**.

:::atom
twierdzenie: Ocena **C – Częściowy** oznacza ponad 15% do 50% osiągnięcia atrybutu.
poLudzku: Coś się dzieje, ale nieregularnie i z dużymi brakami.
zycie: Syn sprząta pokój tylko wtedy, gdy mu przypomnisz, i nie zawsze. Porządek jest mniej więcej co trzeci raz.
komenda: Potwierdzenie alarmu od wszystkich jednostek przychodzi w co trzecim alarmie, więc Lis wpisuje C.
sprawdz: F :: Ocena C wystarcza, żeby uznać atrybut za osiągnięty. :: C to tylko częściowe osiągnięcie, najwyżej 50%. Na egzaminie samo C nie wystarcza.
:::

:::zrodlo FW-PL 45
:::

:::glebiej ocena-c
:::

**Wniosek:** C to „trochę, bez systemu”: ponad 15%, ale najwyżej połowa.

:::wykladowca
Druga ocena to C, Częściowy. Po angielsku Partially achieved, czytamy „parszali acziwd”. Tu jest pułapka: po angielsku ta ocena ma literę P, a po polsku literę C. Oceniający wpisuje C, gdy dowody są, ale osiąganie jest nieregularne. Przedział to ponad piętnaście do pięćdziesięciu procent. Według FW-PL niektóre aspekty osiągnięcia mogą być nieprzewidywalne. Czyli raz się udaje, raz nie, i nikt nie wie dlaczego.
:::

---

<!-- slajd: schemat -->
<!-- typ SD: B – objaśniający -->
<!-- podpowiedz: PA 1.1 z oceną N albo C zatrzymuje proces na poziomie 0. -->
# Dlaczego N albo C na PA 1.1 oznacza poziom 0?

PA (process attribute – atrybut procesu) 1.1 to [[pa-1-1|Wykonanie procesu]]: czy proces osiąga swój cel.

| Ocena PA 1.1 | Poziom procesu |
|---|---|
| N – Nieosiągnięty | [[poziom-0|poziom 0]] |
| C – Częściowy | poziom 0 |
| wyższa ocena (lekcja 4.3b) | co najmniej poziom 1 |

Poziom 1 wymaga osiągnięcia PA 1.1 „w znacznym stopniu” (FW-PL s. 42). N i C tego nie dają.

**Wniosek:** proces z oceną N albo C na PA 1.1 ma poziom 0, niezależnie od ocen wyższych atrybutów.

:::wykladowca
Połączmy skalę z poziomami. PA 1.1, czyli Wykonanie procesu, po angielsku Process performance, pyta o jedno: czy proces osiąga swój cel. FW-PL mówi, że poziom 1 wymaga osiągnięcia tego atrybutu w znacznym stopniu. Ani N, ani C tego nie dają. Dlatego proces z N albo C na PA 1.1 ma poziom 0. Nawet piękna procedura i porządne rejestry tego nie zmienią. Jakie oceny dają poziom 1, zobaczymy w następnej lekcji.
:::

:::teza praktyczna
sytuacja: Naczelnik Marek Sikora chce najpierw spisać ładną procedurę powiadamiania. Tymczasem PA 1.1 ma ocenę C.
pytanie: Od czego komenda powinna zacząć poprawę?
teza: Najpierw od tego, żeby alarm naprawdę dochodził. Dopóki PA 1.1 ma C, praca nad wyższymi atrybutami nie podniesie poziomu.
uzasadnienie: To wniosek autora kursu z reguły FW-PL s. 42: każdy poziom wymaga pełnego osiągnięcia niższego. FW-PL nie podaje kolejności prac naprawczych.
powiazanie: PA 1.1 Wykonanie procesu; poziom 0
przyklad: Komenda najpierw poprawia numery telefonów w Syrenie i testuje alarmy, a dopiero potem pisze procedurę.
status: opinia
refleksja: Czy procedura może pomóc podnieść ocenę PA 1.1? Kiedy tak, a kiedy nie?
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku -->
<!-- podpowiedz: Lis liczy procent alarmów z potwierdzeniem i dopiero potem wybiera literę. -->
# Jak Ewa Lis ocenia powiadamianie sprzed pożaru?

:::kontekst psp
**Logi sprzed Lipowej**
Ewa Lis, audytorka komendy, ocenia proces powiadamiania z okresu przed pożarem przy Lipowej 7. Audytorka to osoba, która niezależnie sprawdza, czy praca idzie zgodnie z zasadami. Bierze z Syreny 40 alarmów. Potwierdzenie od wszystkich wezwanych jednostek przyszło w 14 z nich, czyli w 35%. „To C – Częściowy”, mówi Lis. Kapitan Marek Sikora, szef informatyki, pyta, czy to już poziom 1. „Nie. Przy C na PA 1.1 proces ma poziom 0”, odpowiada Lis.
:::

:::kontekst it
**DSS02 w dziale informatyki.** Incydenty rejestruje tylko jedna zmiana serwisu. Asesor znajduje komplet dowodów w około 30% przypadków. PA 1.1 = C, więc proces ma poziom 0.
:::

**Wniosek:** Lis najpierw liczy procent, potem wybiera literę, a dopiero z litery wynika poziom.

:::wykladowca
Ta scena pokazuje całą drogę oceniającego. Ewa Lis nie zgaduje. Bierze czterdzieści alarmów i liczy te z pełnym potwierdzeniem. Wychodzi czternaście, czyli trzydzieści pięć procent. To mieści się w przedziale C. Sikora ma nadzieję na poziom 1, bo przecież system działa i dyżurni pracują. Ale C na PA 1.1 oznacza poziom 0. Ten sam ruch wykonuje asesor w dziale informatyki przy incydentach. Zapamiętajcie kolejność: procent, litera, poziom.
:::

---

<!-- slajd: pulapka -->
<!-- podpowiedz: Zawsze sprawdź, czy litera jest z wersji polskiej, czy angielskiej. -->
# Dlaczego litery skali to największa pułapka egzaminu?

:::pulapka
Na egzaminie **PL litera P = PEŁNY**.
W podręczniku i po angielsku **P = Partially = częściowy**.

| EN | N | **P** | L | F |
|---|---|---|---|---|
| PL egzamin | N | **C** | **W** | **P** |

Czytając pytanie, zawsze sprawdź, **w której wersji** jest litera.
:::

:::kontekst psp
**Kasia się myli**
Młoda dyżurna Kasia Nowik ćwiczy na angielskich materiałach i zapamiętuje: P to Partially, czyli częściowy. Na polskim teście widzi P przy atrybucie i uznaje, że proces ledwo działa. Dyżurny Paweł Grab prostuje: „U nas P to Pełny, a częściowy to C”.
:::

:::zrodlo ALTKOM
:::

**Wniosek:** litera P po polsku to najwyższa ocena, a po angielsku druga od dołu.

:::wykladowca
To jest najczęstsza strata punktów w tym obszarze. Popatrzcie na tabelę. Po angielsku litery idą: N, P, L, F. Po polsku: N, C, W, P. Tylko N znaczy to samo w obu wersjach. Angielskie P, czyli Partially, to polskie C. Angielskie L, czyli Largely, to polskie W. Angielskie F, czyli Fully, to polskie P. Kasia uczyła się z angielskich materiałów i dlatego się pomyliła. Na egzaminie PL czytajcie litery po polsku.
:::

:::teza porownawcza
sytuacja: Kasia Nowik ma notatki z angielskich materiałów, a egzamin zdaje po polsku.
pytanie: Czy skala N/P/L/F i skala N/C/W/P to dwie różne skale?
teza: Nie. To ta sama skala ISO/IEC 15504 z tymi samymi progami. Różnią się tylko litery.
uzasadnienie: FW-PL s. 45 podaje litery N/P/L/F z progami 15%, 50% i 85%. Polski egzamin zapisuje te same stopnie jako N/C/W/P (zestawienie Altkom).
powiazanie: Skala ocen; terminologia EN i PL
przyklad: L – Largely z notatek Kasi to na egzaminie W – Większościowy, ponad 50% do 85%.
status: uproszczenie
refleksja: Jak zapiszesz po polsku ocenę „F – Fully” i jaki ma próg?
:::

---

<!-- slajd: wlasne-slowa -->
# Czy umiesz podać skalę bez patrzenia?

:::wlasne-slowa
Podaj cztery oceny skali N/C/W/P z progami procentowymi i ich odpowiedniki angielskie. Powiedz, jaki poziom ma proces z oceną C na PA 1.1.
???
N – Nieosiągnięty (Not achieved) 0–15%; C – Częściowy (Partially) >15–50%; W – Większościowy (Largely) >50–85%; P – Pełny (Fully) >85–100%. Proces z oceną C na PA 1.1 ma poziom 0.
:::

**Wniosek:** jeśli podajesz progi i litery w obu językach bez patrzenia, skala jest Twoja.

:::wykladowca
Teraz Wasza kolej. Zamknijcie tabelę i powiedzcie na głos cztery oceny. Najpierw po polsku z progami, potem po angielsku. Na końcu dodajcie jedno zdanie o PA 1.1. Jeśli się zatniecie, to normalne. Wróćcie do tabeli, przeczytajcie ją raz i spróbujcie jeszcze raz. Ćwiczenie ma sens tylko wtedy, gdy mówicie z pamięci, a nie z kartki. Wydobywanie z pamięci utrwala wiedzę lepiej niż ponowne czytanie. Dlatego to ćwiczenie powtarza się w kursie wiele razy.
:::

---

<!-- slajd: egzamin -->
# Gdzie egzamin zastawia pułapki przy skali?

:::egzamin
- **Odwrócone litery** między EN a PL to najczęstsza strata punktów.
- Próg „Pełny” to **ponad 85%**, a nie 100%.
- **N i C na PA 1.1** to poziom 0. Samo C to za mało.
:::

**Wniosek:** na egzaminie sprawdzaj wersję litery, próg 85% i ocenę PA 1.1.

:::wykladowca
Trzy pułapki, trzy szybkie pytania kontrolne. Pierwsze: z której wersji jest litera? Drugie: czy „pełny” znaczy sto procent? Nie, wystarczy ponad osiemdziesiąt pięć. Trzecie: czy C na PA 1.1 daje poziom 1? Nie, daje poziom 0. Dystraktory na egzaminie często są prawdziwe w wersji angielskiej. Dlatego zdanie z literą P może być dobre w podręczniku, a złe na polskim egzaminie.
:::

:::sb dlaczego
FW-PL nazywa próg „pełnego” osiągnięcia przedziałem 85–100%. Proces nie musi być idealny. Wystarczy, że nie ma istotnych słabości. Kto czeka na 100%, ten zaniża oceny.
:::

---

<!-- slajd: wlasne-slowa -->
# Po co skala ma cztery stopnie, a nie dwa?

:::wlasne-slowa
Dlaczego skala ocen ma cztery stopnie, a nie tylko „tak” i „nie”?
???
Bo atrybut rzadko jest spełniony w zero albo w stu procentach. Cztery stopnie pokazują, jak daleko proces jest od pełnego osiągnięcia. Dzięki temu widać, co poprawić, a oceny różnych osób są bardziej powtarzalne.
:::

**Wniosek:** cztery stopnie pokazują odległość od celu, a nie tylko „jest albo nie ma”.

:::wykladowca
To pytanie o sens skali. Gdyby była tylko odpowiedź „tak” albo „nie”, proces z czterdziestoma procentami i proces z osiemdziesięcioma wyglądałyby tak samo. Obu brakowałoby „tak”. Cztery stopnie pokazują, jak daleko jesteśmy od celu. Komendantka widzi wtedy, gdzie wystarczy poprawka, a gdzie trzeba zacząć od nowa. Jest też drugi powód. Gdy dwóch oceniających ma te same progi, dochodzą do podobnych ocen. FW-PL wymienia większą powtarzalność ocen jako korzyść modelu. Spróbujcie odpowiedzieć własnymi słowami, zanim odsłonicie wzorzec.
:::

---

<!-- slajd: rozwiazany -->
<!-- podpowiedz: Najpierw policz procent, potem wybierz literę z wersji PL, a na końcu poziom. -->
# Rozwiązujemy razem

:::rozwiazany
Audytorka Ewa Lis sprawdza w Syrenie 40 alarmów. Potwierdzenie od wszystkich wezwanych jednostek przyszło w 14 przypadkach, czyli w 35%. Lis używa oznaczeń z polskiego egzaminu. Jaką ocenę dostaje PA 1.1 i jaki poziom ma proces powiadamiania?
- A. W – Większościowy, poziom 1
- B. C – Częściowy, poziom 0
- C. P – częściowe osiągnięcie, poziom 1
- D. N – Nieosiągnięty, poziom 0
+++
**Krok 1 – co jest pytane?** Dwie rzeczy: **ocena PA 1.1** i **poziom procesu**. Dane: 35% i oznaczenia polskie.
+++
**Krok 2 – jaka kategoria COBIT?** Skala ocen N/C/W/P (FW-PL s. 45) i warunek poziomu 1 (FW-PL s. 42).
+++
**Krok 3 – eliminacja.** A – *fałsz*: W zaczyna się od ponad 50%. C – *odwrócone*: „P = częściowe” to zapis angielski, a Lis używa polskiego. D – *fałsz*: N kończy się na 15%, a tu jest 35%.
+++
**Odpowiedź: B.** Dlaczego: 35% mieści się w przedziale C (>15–50%). Przy C na PA 1.1 proces ma poziom 0.
:::

**Wniosek:** procent → litera z wersji PL → poziom; przy C na PA 1.1 zawsze wychodzi 0.

:::wykladowca
Przejdźmy razem przez pytanie w stylu egzaminu. Najpierw czytamy, o co pytają: o ocenę i o poziom. Potem szukamy kategorii: skala ocen i warunek poziomu 1. Trzydzieści pięć procent to więcej niż piętnaście, więc nie N. To mniej niż pięćdziesiąt, więc nie W. Zostaje C. Odpowiedź C kusi, bo „P częściowe” jest prawdą po angielsku. Ale Lis używa zapisu polskiego. Wynik: C i poziom 0.
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący -->
# Co już umiesz

- Umiesz podać skalę N/C/W/P z progami i jej angielski zapis N/P/L/F.
- Umiesz rozpoznać oceny N (0–15%) i C (>15–50%).
- Umiesz powiedzieć, że N albo C na PA 1.1 oznacza poziom 0.

:::teza egzaminacyjna
teza: Na egzaminie PL czytaj litery skali po polsku: N, C, W, P, gdzie P to Pełny.
uzasadnienie: Dystraktory często podają znaczenie angielskie, w którym P to Partially, czyli częściowy (FW-PL s. 45 używa liter angielskich).
powiazanie: Skala ocen ISO/IEC 15504
przyklad: „Ocena P oznacza ponad 15% do 50%” to zdanie prawdziwe po angielsku i fałszywe na egzaminie PL.
status: uproszczenie
refleksja: Jak brzmi po polsku angielska ocena L i jaki ma próg?
:::

**Co dalej i dlaczego:** następna lekcja to 4.3b „Oceny W i P – kiedy proces wchodzi na wyższy poziom zdolności?” (dzień 9). Poznasz w niej oceny W i P oraz regułę przyznawania poziomu.

:::wykladowca
Podsumujmy. Skala ocen, rating scale, ma cztery stopnie: N, C, W i P. Po angielsku: N, P, L i F. Dwa najniższe znacie już dokładnie: N to do piętnastu procent, C to do pięćdziesięciu. Wiecie też, że N albo C na PA 1.1 zatrzymuje proces na poziomie 0. W następnej lekcji dojdą oceny W i P oraz reguła liczenia poziomu. Teraz przejdźcie do ćwiczeń.
:::
