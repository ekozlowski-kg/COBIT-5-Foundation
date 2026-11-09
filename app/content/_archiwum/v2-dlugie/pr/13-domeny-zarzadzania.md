---
id: pr-13-domeny-zarzadzania
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: 32 procesy Zarządzania – APO, BAI, DSS, MEA
lekcja: "1.13"
dzien: 4
sylabus: [PR-01-04]
minuty: 38
zgadnij: [q-pre-pr-13-domeny-zarzadzania]
cwiczenia: [q-pr-13-01, q-pr-13-02, q-pr-13-03, q-pr-13-04, q-pr-13-05, q-mapa-apo, q-mapa-bai, q-mapa-dss, q-mapa-mea, q-men-pr-13-domeny-zarzadzania-1]
wprowadza: [apo, bai, dss, mea]
wymaga: [pr-12-prm-edm]
cel: "Potrafię przypisać zadanie informatyki do jednej z 4 domen Zarządzania. Potrafię podać, ile procesów ma każda domena."
priorytet: 1
zapas: [q-zap-pr-13-domeny-zarzadzania-1, q-zap-pr-13-domeny-zarzadzania-2]
wielkiObraz: 5
twierdzenia: ["APO ma 13 procesów i planuje.", "BAI ma 10 procesów i buduje oraz wdraża zmiany.", "DSS ma 6 procesów codziennego działania.", "MEA ma 3 procesy monitorowania i należy do Zarządzania.", "BAI09 Zarządzanie zasobami dotyczy aktywów."]
typowePytania: [{"pytanie": "APO to procesy informatyków od sprzętu?", "odpowiedz": "Nie. APO to planowanie i organizowanie: strategia, budżet, ludzie, dostawcy, ryzyko. Sprzęt i licencje są w BAI09."}, {"pytanie": "MEA i EDM to ta sama kontrola?", "odpowiedz": "Nie. MEA to Zarządzanie, które sprawdza swoją pracę. EDM to Ład, który ocenia, kieruje i monitoruje."}, {"pytanie": "Awaria i problem to to samo?", "odpowiedz": "Nie. Awaria, którą trzeba szybko usunąć, to incydent (DSS02). Przyczyna powtarzających się awarii to problem (DSS03)."}]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "etap 3 – do przeglądu użytkownika"}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Czy każde przedsięwzięcie przechodzi przez te same cztery etapy?

Remont mieszkania:
1. **Planujesz:** budżet, projekt, wykonawcy.
2. **Tworzysz:** kupujesz, montujesz, odbierasz.
3. **Używasz:** mieszkasz, naprawiasz drobne usterki.
4. **Sprawdzasz:** czy wszystko działa i zgadza się z umową.

To są cztery domeny (po ludzku: grupy procesów) [[zarzadzanie|Zarządzania]].

**Wniosek:** planowanie, tworzenie, używanie i sprawdzanie to cztery etapy, które da się znaleźć w każdym przedsięwzięciu.

:::wykladowca
Pomyślcie o remoncie mieszkania. Najpierw planujecie: ile wydacie, jak ma wyglądać łazienka, kto to zrobi. Potem tworzycie: kupujecie płytki, ekipa je kładzie, a Wy odbieracie pracę. Potem używacie: mieszkacie i naprawiacie drobne usterki. Na końcu sprawdzacie, czy wszystko działa i zgadza się z umową. Te cztery etapy znacie już z poprzednich lekcji jako Planuj, Twórz, Wykonuj i Monitoruj. Dziś zobaczycie, że 32 procesy Zarządzania są ułożone właśnie w takie cztery grupy.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku (od życia do COBIT 5) -->
<!-- podpowiedz: Cztery szuflady: planowanie, budowa, codzienność, kontrola. -->
# Do której z czterech szuflad trafia każde zadanie informatyki?

:::kontekst zycie
**Samochód rodzinny.** Najpierw liczysz, na jakie auto Cię stać i jak je sfinansujesz. Potem kupujesz je i rejestrujesz. Na co dzień nim jeździsz, tankujesz i wymieniasz żarówki. Raz w roku robisz przegląd techniczny i sprawdzasz, czy wszystko gra.
:::

:::kontekst biuro
**Komputery w biurze.** Kierowniczka planuje budżet na nowe komputery i wybiera sprzedawcę. Informatyk je kupuje, instaluje i przenosi dane. Potem pilnuje, żeby działały na co dzień, i naprawia awarie. Co kwartał kierowniczka sprawdza koszty i liczbę awarii.
:::

:::kontekst psp
**Trzydzieści dwa zadania Sikory**
Komendantka Anna Wrzos zostawiła sobie pięć procesów Ładu, więc kpt. Marek Sikora, szef informatyki komendy, bierze pozostałe 32. Rozkłada je na biurku i układa w cztery szuflady. W pierwszej jest planowanie: strategia, budżet, umowy z dostawcą Syreny (systemu do wysyłania alarmów). W drugiej budowa i zmiany, np. nowy moduł dla OSP (ochotniczej straży). W trzeciej codzienne działanie i awarie, a w czwartej kontrola, czy wszystko idzie zgodnie z planem. Te szuflady to cztery domeny Zarządzania: [[apo|APO]], [[bai|BAI]], [[dss|DSS]] i [[mea|MEA]].
:::

:::kontekst psp
- Plan modernizacji łączności na 3 lata → **APO02 (Zarządzanie strategią)**
- Umowa serwisowa z dostawcą systemu SK (stanowiska kierowania) → **APO09 (umowy o świadczenie usług) i APO10 (dostawcy)**
- Wymiana central w projekcie → **BAI01 (programy i projekty)**
- Ewidencja radiotelefonów i licencji → **BAI09 (zasoby, czyli aktywa)**
- Awaria systemu w nocy → **DSS02 (zgłoszenia serwisowe i incydenty)**
- Ta sama awaria wraca co tydzień → **DSS03 (problemy)**
- Plan pracy SK po utracie zasilania → **DSS04 (ciągłość)**
- Kwartalny raport czasów dysponowania → **MEA01 (wydajność i zgodność)**
:::

:::uproszczenie
Przyporządkowanie przykładów PSP to nasza interpretacja nazw procesów.
:::

:::kontekst it
**Informatyka szpitala.** APO09 (umowy o świadczenie usług) planuje poziomy usług. BAI03 (identyfikacja i budowanie rozwiązań) buduje nowy moduł rejestracji pacjentów. DSS01 (eksploatacja) utrzymuje go w ruchu. MEA01 (wydajność i zgodność) mierzy wyniki i raportuje je do Ładu.
:::

**Wniosek:** każde zadanie informatyki trafia do jednej z czterech domen: planowania (APO), budowania (BAI), codziennego działania (DSS) albo monitorowania (MEA).

:::wykladowca
Zobaczcie ten sam podział w czterech miejscach. Samochód: liczycie, kupujecie, jeździcie, robicie przegląd. Komputery w biurze: budżet, zakup i instalacja, codzienne naprawy, kwartalne sprawdzenie. W komendzie Sikora rozkłada swoje 32 procesy do czterech szuflad. Lista pod sceną pokazuje konkretne kody procesów. To nasza interpretacja, a nie lista z podręcznika. Ostatni przykład to informatyka szpitala. Przy każdym zdarzeniu zadawajcie jedno pytanie: czy to planowanie, budowa, codzienność, czy kontrola?
:::

:::sb wyobraz
Wyobraź sobie komodę z czterema szufladami podpisanymi: „Planuj”, „Twórz”, „Wykonuj”, „Monitoruj”. Każdą kartkę z zadaniem wkładasz do jednej szuflady. W pierwszej mieści się 13 kartek, w drugiej 10, w trzeciej 6, a w ostatniej 3.
:::

---

<!-- slajd: mapa -->
# Gdzie to leży w COBIT 5?

:::mapa prm
:::

Cztery domeny Zarządzania to 32 z 37 [[proces|procesów]] **[[prm|Referencyjnego Modelu Procesu]]**.

:::wykladowca
Spójrzcie na mapę. W poprzedniej lekcji byliśmy w części Ładu, w domenie EDM (Evaluate, Direct and Monitor – Oszacuj, Kieruj i Monitoruj). Teraz przechodzimy do drugiej części Referencyjnego Modelu Procesu. To Zarządzanie, które ma cztery domeny i razem 32 procesy. Na Ilustracji 16, na egzaminie Rysunku 16, domeny Zarządzania leżą pod domeną Ładu. Zapamiętajcie liczby: trzynaście, dziesięć, sześć i trzy. Razem dają trzydzieści dwa. Z pięcioma procesami Ładu daje to trzydzieści siedem.
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: APO = Planuj. Strategia, pieniądze, ludzie, dostawcy, ryzyko. -->
# Kto planuje, w co inwestujemy i kto to zrobi? APO – Dostosuj, Planuj i Organizuj (13)

:::atom
twierdzenie: Domena APO ma 13 procesów i odpowiada za **planowanie** i organizowanie informatyki.
poLudzku: Tu ustalasz, w co inwestujesz, ile to kosztuje, kto to zrobi i czym ryzykujesz.
zycie: Przed remontem robisz budżet, wybierasz ekipę i podpisujesz umowę.
komenda: Sikora pisze plan łączności na 3 lata i umowę z dostawcą Syreny.
sprawdz: F :: APO to codzienna obsługa awarii. :: Codzienna obsługa to DSS. APO planuje i organizuje.
:::

| | | |
|---|---|---|
| 01 Metodyka zarządzania IT (informatyką) | 06 Budżet i koszty | 11 Jakość |
| 02 Strategia | 07 Zasoby ludzkie | 12 Ryzyko |
| 03 Architektura korporacyjna (plan, jak systemy i dane pasują do siebie) | 08 Relacje | 13 Bezpieczeństwo |
| 04 Innowacje | 09 Umowy o świadczenie usług | |
| 05 Portfel (projektów) | 10 Dostawcy | |

:::zrodlo FW-PL 33 16
:::

**Wniosek:** APO to 13 procesów planowania i organizowania: strategia, pieniądze, ludzie, dostawcy, ryzyko i bezpieczeństwo.

:::wykladowca
Pierwsza domena to APO, po angielsku Align, Plan and Organise. Czytamy „alajn, plen end organajz”. Na egzaminie PL: Dostosuj, Planuj i Organizuj. W podręczniku: dopasowanie, planowanie i organizacja. „Dostosuj” znaczy tu: dopasuj informatykę do potrzeb organizacji. To największa domena, ma trzynaście procesów. Przejrzyjcie tabelę kolumnami. Strategia, architektura, innowacje i portfel to decyzje o kierunku pracy. Budżet, ludzie, relacje, umowy i dostawcy to zasoby. Jakość, ryzyko i bezpieczeństwo to ochrona przed kłopotami.
:::

:::sb kontrowersja
Nazwy czterech domen mają różne formy w egzaminie PL i w podręczniku PL (FW-PL s. 32). APO: „Dostosuj, Planuj i Organizuj” / „Dopasowanie, planowanie i organizacja”. BAI: „Twórz, Nabywaj i Wdrażaj” / „Budowanie, nabywanie i wdrażanie”. DSS: „Dostarczaj, Obsługuj i Wspieraj” / „Dostarczanie, obsługa i wsparcie”. MEA: „Monitoruj, Oszacuj i Oceń” / „Monitorowanie, ocena i oszacowanie”. Status: **C – sporny**.
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: BAI = Twórz. Projekty, zmiany, wdrożenia. -->
# Gdzie powstaje coś nowego albo zmienia się to, co już jest? BAI – Twórz, Nabywaj i Wdrażaj (10)

:::atom
twierdzenie: Domena BAI ma 10 procesów i **buduje**, kupuje oraz wdraża rozwiązania i zmiany.
poLudzku: Tu powstaje coś nowego albo zmienia się to, co już jest.
zycie: Ekipa remontowa kupuje płytki, kładzie je i oddaje Ci gotową łazienkę.
komenda: Sikora prowadzi projekt nowego modułu Syreny dla OSP i go wdraża.
sprawdz: F :: BAI09 Zarządzanie zasobami dotyczy ludzi. :: BAI09 dotyczy aktywów, czyli sprzętu i licencji. Ludzie to APO07.
:::

| | |
|---|---|
| 01 Programy i projekty | 06 Zmiany |
| 02 Definiowanie wymagań | 07 Akceptacja zmian i przejście |
| 03 Identyfikacja i budowanie rozwiązań | 08 Wiedza |
| 04 Dostępność i pojemność (czy system udźwignie obciążenie) | 09 Zasoby (*Assets*, czyli aktywa: sprzęt, licencje) |
| 05 Wdrażanie zmian organizacyjnych | 10 Konfiguracja (spis i ustawienia elementów systemu) |

:::zrodlo FW-PL 33 16
:::

**Wniosek:** BAI to 10 procesów, w których rozwiązania i zmiany powstają, są kupowane i wdrażane.

:::wykladowca
Druga domena to BAI, po angielsku Build, Acquire and Implement. Czytamy „bild, akłajer end implement”. Na egzaminie PL: Twórz, Nabywaj i Wdrażaj. Ma dziesięć procesów. Tu coś powstaje albo się zmienia. Zobaczcie pierwszą kolumnę: projekty, wymagania, budowanie rozwiązań, pojemność systemów i zmiany w organizacji. Druga kolumna: zmiany techniczne, odbiór zmian, wiedza, aktywa i konfiguracja. Uwaga na BAI09. Polska nazwa brzmi „zasoby”, ale chodzi o aktywa, czyli sprzęt i licencje. Ludzie są w APO07.
:::

:::sb nie-mylic
BAI05 „Wdrażanie zmian organizacyjnych” dotyczy ludzi i sposobu pracy, np. przekonania dyżurnych do nowego programu. BAI06 „Zmiany” dotyczy zmian technicznych w systemach. Obie nazwy są w Ilustracji 16 (FW-PL s. 33). Rozróżniaj je po słowie „organizacyjnych”.
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: DSS = Wykonuj. Codzienne działanie i awarie. -->
# Kto pilnuje, żeby wszystko działało dzień po dniu? DSS – Dostarczaj, Obsługuj i Wspieraj (6)

:::atom
twierdzenie: Domena DSS ma 6 procesów i dba o **codzienne** działanie usług oraz usuwanie awarii.
poLudzku: Tu pilnujesz, żeby wszystko chodziło dzień po dniu, a awarie szybko znikały.
zycie: Mieszkasz w wyremontowanym mieszkaniu i od razu naprawiasz cieknący kran.
komenda: Ola Dudek w nocy przywraca działanie Syreny po awarii.
sprawdz: P :: Plan pracy po utracie zasilania należy do DSS04 Ciągłość. :: Ciągłość to praca mimo poważnej awarii, w domenie DSS.
:::

- 01 Eksploatacja (codzienne działanie)
- 02 Zgłoszenia serwisowe i incydenty (nagłe awarie)
- 03 Problemy (przyczyny powtarzających się awarii)
- 04 **Ciągłość** (praca mimo poważnej awarii)
- 05 Usługi bezpieczeństwa
- 06 Mechanizmy kontrolne procesów biznesowych (zabezpieczenia w codziennej pracy organizacji)

:::zrodlo FW-PL 33 16
:::

:::progresja
0: Gdy telefon się rozładuje, podłączasz go do powerbanku i dzwonisz dalej.

1: Gdy serwer w biurze nie działa, drukujesz ważne pismo z kopii zapisanej na pendrivie.

2: Zasilacz awaryjny podtrzymuje komputer kilka minut po wyłączeniu prądu.

3: Organizacja ma spisany plan pracy na wypadek awarii głównego systemu.

4: Kierownictwo ustala, jak długo najważniejsze usługi mogą nie działać.

5: W COBIT 5 to proces DSS04 (Zarządzanie ciągłością) w domenie DSS (FW-PL s. 33).
:::

**Wniosek:** DSS to 6 procesów codziennego działania: eksploatacja, awarie, problemy, ciągłość, bezpieczeństwo i kontrole.

:::wykladowca
Trzecia domena to DSS, po angielsku Deliver, Service and Support. Czytamy „deliwer, serwis end saport”. Na egzaminie PL: Dostarczaj, Obsługuj i Wspieraj. Ma sześć procesów. Tu chodzi o codzienność: żeby usługi działały dzień po dniu. Eksploatacja to zwykła praca systemów. Incydent to nagła awaria, którą trzeba szybko usunąć. Problem to przyczyna awarii, które się powtarzają. Ciągłość to praca mimo poważnej awarii. Progresja pokazuje ciągłość od powerbanku w telefonie aż do procesu DSS04.
:::

:::sb ekspert
Słowo „ciągłość” w DSS04 oznacza ciągłość działania, po angielsku *continuity*. W komendzie to na przykład praca SK przy zasilaniu awaryjnym. Pełna polska nazwa procesu to „Zarządzanie ciągłością” (FW-PL s. 33).
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: MEA = Monitoruj po stronie Zarządzania. -->
# Kto w Zarządzaniu sprawdza, czy praca idzie dobrze? MEA – Monitoruj, Oszacuj i Oceń (3)

:::atom
twierdzenie: Domena MEA ma 3 procesy i **monitoruje** wydajność, kontrolę wewnętrzną i zgodność z wymogami zewnętrznymi.
poLudzku: Tu kierownicy sprawdzają, czy praca idzie dobrze i zgodnie z przepisami.
zycie: Po remoncie sprawdzasz z umową, czy wszystko zrobiono i czy ekipa trzymała się przepisów.
komenda: Sikora co kwartał składa raport z czasów dysponowania – to MEA01.
sprawdz: F :: MEA należy do Ładu. :: MEA to domena Zarządzania. Ład to EDM.
:::

01 Wydajność i zgodność · 02 System kontroli wewnętrznej · 03 Zgodność z wymogami zewnętrznymi

:::zrodlo FW-PL 33 16
:::

:::teza porownawcza
sytuacja: Kasia Nowik widzi w nazwie MEA słowa „Monitoruj” i „Oszacuj”, takie same jak w EDM. Uznaje, że MEA to część Ładu.
pytanie: Czy MEA i EDM to ta sama kontrola, tylko pod dwiema nazwami?
teza: Nie. MEA to domena Zarządzania, która mierzy wydajność, kontrolę wewnętrzną i zgodność. EDM to domena Ładu, która sprawdza, czy kierunek wcielono w życie.
uzasadnienie: FW-PL umieszcza MEA wśród czterech domen Zarządzania (s. 32). Monitorowanie w domenie Ładu dotyczy sprawdzania realizacji kierunku (s. 32, przypis 5).
powiazanie: Zasada 5; Ilustracja 15 (Rysunek 15)
przyklad: Sikora składa kwartalny raport z czasów dysponowania (MEA01). Wrzos czyta go i ocenia, czy jej kierunek jest realizowany (EDM).
status: oficjalne
zrodlo: FW-PL 32
refleksja: Jakie jedno pytanie zadasz, żeby odróżnić MEA od EDM w zadaniu egzaminacyjnym?
:::

**Wniosek:** MEA to 3 procesy, w których Zarządzanie sprawdza wydajność, kontrolę wewnętrzną i zgodność z wymogami zewnętrznymi.

:::wykladowca
Czwarta domena to MEA, po angielsku Monitor, Evaluate and Assess. Czytamy „moniter, iweljuejt end ases”. Na egzaminie PL: Monitoruj, Oszacuj i Oceń. Ma tylko trzy procesy. Pierwszy mierzy wydajność i zgodność. Drugi sprawdza system kontroli wewnętrznej, czyli zabezpieczenia w organizacji. Trzeci sprawdza zgodność z przepisami z zewnątrz. Teraz najważniejsze. W nazwie MEA są słowa podobne do EDM. A jednak MEA to Zarządzanie. Zatrzymajcie się przy tezie i zapamiętajcie przykład z raportem Sikory.
:::

:::pytanie-uczestnika
pytanie: Skoro MEA sprawdza zgodność z przepisami, to czy to nie jest zadanie audytora?
odpowiedz: MEA to procesy kierownictwa: Zarządzanie samo sprawdza swoją pracę i zgodność. Audytorka Ewa Lis może korzystać z ich wyników, ale MEA nie zastępuje jej niezależnej oceny. To wyjaśnienie kursu.
:::

---

<!-- slajd: pulapka -->
<!-- podpowiedz: Incydent – przywróć teraz; problem – usuń przyczynę. -->
# ⚠ Które nazwy procesów Zarządzania najłatwiej pomylić?

:::pulapka
- **BAI09 „Zarządzanie zasobami”** = *Assets*, czyli aktywa: sprzęt, licencje. **≠ EDM04** Optymalizacja zasobów **≠ APO07** Zasoby ludzkie.
- **APO13 Bezpieczeństwo** (system zarządzania bezpieczeństwem) **≠ DSS05 Usługi bezpieczeństwa** (codzienna ochrona).
- **DSS02 Incydent** (przywróć działanie teraz) **≠ DSS03 Problem** (usuń przyczynę powtarzających się incydentów).
- **MEA** (Monitoruj, Oszacuj i Oceń) to Zarządzanie. **EDM** (Oszacuj, Kieruj i Monitoruj) to Ład.
:::

:::kontekst psp
**Kasia się myli**
Syrena trzeci tydzień z rzędu gubi SMS-y w poniedziałek. Kasia Nowik zapisuje: „Kolejny incydent, DSS02”. Kpt. Sikora poprawia: „Jedna awaria to incydent, ale gdy wraca co tydzień, szukamy przyczyny – to problem, DSS03”.
:::

**Wniosek:** pary BAI09 i EDM04, APO13 i DSS05 oraz DSS02 i DSS03 rozróżniaj po tym, czego dotyczą, a nie po podobnym słowie w nazwie.

:::wykladowca
Na tym slajdzie są cztery pary, które egzamin lubi mieszać. Pierwsza: słowo „zasoby” występuje trzy razy. W BAI09 to sprzęt i licencje, w EDM04 to optymalizacja wszystkich zasobów przez Ład, a w APO07 to ludzie. Druga: bezpieczeństwo. APO13 buduje system zarządzania bezpieczeństwem, a DSS05 chroni na co dzień. Trzecia: incydent i problem. Incydent naprawiamy teraz, a problem to szukanie przyczyny. Czwarta: MEA i EDM. Kasia pomyliła incydent z problemem. Sikora pokazał jej, jak je odróżnić.
:::

:::sb ekspert
Dlaczego bezpieczeństwo jest i w APO, i w DSS? FW-PL wyjaśnia, że większość procesów wymaga planowania, wdrożenia, realizacji i monitorowania. Proces umieszcza się w domenie, która najlepiej odpowiada jego głównemu obszarowi działania (s. 33).
:::

---

<!-- slajd: wlasne-slowa -->
# Czy podasz liczbę procesów i dwa przykłady w każdej domenie?

:::wlasne-slowa
Dla każdej domeny Zarządzania podaj liczbę procesów i 2 przykładowe procesy.
???
- APO 13 (strategia, ryzyko)
- BAI 10 (projekty, zmiany)
- DSS 6 (incydenty, ciągłość)
- MEA 3 (wydajność i zgodność, kontrola wewnętrzna)
:::

**Wniosek:** liczby 13, 10, 6 i 3 oraz po dwa przykłady w każdej domenie wystarczą, żeby szybko klasyfikować procesy.

:::wykladowca
Teraz sprawdźcie się sami. Napiszcie na kartce cztery skróty jeden pod drugim: APO, BAI, DSS, MEA. Przy każdym dopiszcie liczbę procesów. Potem dodajcie po dwa przykłady. Nie muszą to być te same przykłady co we wzorze. Ważne, żeby pasowały do domeny. Jeśli przy APO napiszecie „awarie”, wróćcie do slajdu z DSS. Jeśli przy BAI napiszecie „ludzie”, wróćcie do pułapki z BAI09. Dopiero potem odsłońcie odpowiedź i porównajcie. Liczby powtórzcie na głos: trzynaście, dziesięć, sześć, trzy.
:::

---

<!-- slajd: wlasne-slowa -->
# Dlaczego 32 procesy ułożono w kolejności Planuj → Twórz → Wykonuj → Monitoruj?

:::wlasne-slowa
Dlaczego COBIT 5 dzieli 32 procesy Zarządzania na cztery domeny w kolejności Planuj → Twórz → Wykonuj → Monitoruj?
???
Bo tak przebiega praca z każdym rozwiązaniem: najpierw je planujesz, potem budujesz, potem używasz na co dzień, a na końcu sprawdzasz wyniki. Wynik kontroli wraca do planowania. Dzięki temu łatwo zgadnąć, w której domenie jest dany proces.
:::

:::teza krytyczna
sytuacja: Sikora układa harmonogram i chce robić procesy APO tylko w styczniu, BAI w lutym, a DSS dopiero od marca.
pytanie: Czy domeny Planuj, Twórz, Wykonuj i Monitoruj to kolejne etapy w czasie?
teza: Nie. Kolejność domen pomaga zapamiętać ich sens, ale procesy wszystkich domen działają jednocześnie i stale.
uzasadnienie: FW-PL pisze, że większość procesów wymaga działań planowania, wdrożenia, realizacji i monitorowania. Proces trafia do domeny według głównego obszaru działania (s. 33).
powiazanie: Referencyjny Model Procesu; PBRM
przyklad: Ryzyko (APO12) Sikora ocenia przez cały rok, a nie tylko na początku. Syrena działa codziennie (DSS01), także w trakcie nowego projektu (BAI01).
status: uproszczenie
refleksja: Które procesy w Twojej organizacji działają naraz, choć należą do różnych domen?
:::

**Wniosek:** kolejność Planuj → Twórz → Wykonuj → Monitoruj ułatwia zapamiętanie domen, ale ich procesy działają jednocześnie.

:::wykladowca
To pytanie sprawdza, czy rozumiecie logikę podziału. Spróbujcie najpierw odpowiedzieć sami. Pomyślcie o remoncie z pierwszego slajdu albo o samochodzie. Potem przeczytajcie wzór i tezę krytyczną. Teza dodaje ważne zastrzeżenie. Kolejność domen to sposób porządkowania, a nie kalendarz. W komendzie Syrena działa codziennie, a jednocześnie trwa projekt nowego modułu i ocena ryzyka. Wszystkie domeny pracują naraz. Jako mentorzy zwróćcie na to uwagę, bo laicy często myślą o PBRM jak o harmonogramie.
:::

---

<!-- slajd: egzamin -->
<!-- typ SD: F – syntetyzujący (strategia egzaminacyjna) -->
# Które kategorie umiejętności egzamin przypisuje domenie APO?

:::egzamin
Kategorie umiejętności z Ilustracji 39 (s. 88): **zarządzanie portfelami projektów**, **architektura korporacyjna**, strategia IT, innowacje i zarządzanie finansowe należą do domeny **APO**. Szczegóły w dniu 3.
:::

:::zapamietaj
**APO 13 · BAI 10 · DSS 6 · MEA 3 = 32.** Planuj → Twórz → Wykonuj → Monitoruj.
:::

**Wniosek:** gdy pytanie o umiejętności wymienia portfel, architekturę, strategię, innowacje albo finanse, odpowiedzią jest domena APO (Ilustracja 39, na egzaminie Rysunek 39).

:::wykladowca
Na egzaminie domeny Zarządzania wracają także w pytaniach o umiejętności ludzi. Podręcznik ma tabelę kategorii umiejętności, to Ilustracja 39, na egzaminie Rysunek 39. Zapamiętajcie jedną regułę. Portfel projektów, architektura korporacyjna, strategia IT, innowacje i finanse to umiejętności z domeny APO. To logiczne, bo APO planuje i organizuje. Szczegóły poznacie przy aktywatorze Ludzie, umiejętności i kompetencje. Pod spodem jest równanie do zapamiętania. Powiedzcie je na głos: trzynaście, dziesięć, sześć, trzy, razem trzydzieści dwa.
:::

---

<!-- slajd: rozwiazany -->
<!-- podpowiedz: „Wytrzyma” to pytanie o obciążenie, a nie o awarię. -->
# Który proces sprawdza, czy serwer Syreny wytrzyma szczytowe obciążenie?

:::rozwiazany
Przed sezonem burz kpt. Sikora sprawdza, czy serwer Syreny wytrzyma, gdy w jednej chwili trzeba wysłać alarm do wszystkich jednostek. Który proces COBIT 5 najlepiej pasuje do tego działania?
- A. BAI04 Dostępność i pojemność
- B. DSS04 Ciągłość
- C. BAI09 Zasoby (aktywa)
- D. DSS07 Pojemność
+++
**Krok 1 – co jest pytane?** Słowo-klucz: **wytrzyma**. Chodzi o to, czy system udźwignie duże obciążenie, a nie o awarię, która już się zdarzyła.
+++
**Krok 2 – jaka kategoria COBIT?** Domeny Zarządzania: przygotowanie i budowa rozwiązań to BAI, codzienne działanie to DSS.
+++
**Krok 3 – eliminacja.** B – *prawda nie na temat*: ciągłość to plan pracy po poważnej awarii, np. utracie zasilania, a nie sprawdzanie obciążenia. C – *inna kategoria*: BAI09 to ewidencja aktywów, czyli sprzętu i licencji. D – *fałsz*: DSS ma tylko 6 procesów, więc DSS07 nie istnieje.
+++
**Odpowiedź: A.** Dlaczego: sprawdzenie, czy system udźwignie szczytowe obciążenie, to zarządzanie pojemnością (BAI04).
:::

**Wniosek:** pytanie „czy system udźwignie obciążenie” wskazuje na pojemność, czyli BAI04, a nie na ciągłość.

:::wykladowca
Rozwiążmy to razem. Słowo-klucz to „wytrzyma”. Sikora nie gasi pożaru, tylko sprawdza zawczasu, czy system da radę. To pytanie o pojemność, czyli ile system udźwignie. Teraz eliminacja. Odpowiedź B kusi, bo ciągłość też dotyczy ciężkich chwil. Ale ciągłość to plan pracy po poważnej awarii, a nie sprawdzanie obciążenia. Odpowiedź C to aktywa, czyli inna kategoria. Odpowiedź D brzmi wiarygodnie, ale DSS07 nie istnieje. Domena DSS ma tylko sześć procesów. Zostaje A, czyli BAI04.
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący -->
# Co już umiesz i co dalej?

- Umiesz wymienić 4 domeny Zarządzania z liczbą procesów: APO 13, BAI 10, DSS 6, MEA 3.
- Umiesz przypisać zadanie z komendy do właściwej domeny.
- Umiesz odróżnić incydent (DSS02) od problemu (DSS03) i BAI09 od EDM04.

:::teza egzaminacyjna
teza: Kod procesu z numerem większym niż liczba procesów w domenie (np. DSS07, MEA04, BAI11) jest zawsze dystraktorem.
uzasadnienie: Ilustracja 16 pokazuje dokładnie APO01–APO13, BAI01–BAI10, DSS01–DSS06 i MEA01–MEA03 (FW-PL s. 33). Kod spoza tych zakresów nie istnieje w COBIT 5.
powiazanie: Referencyjny Model Procesu; Ilustracja 16 (Rysunek 16)
przyklad: Odpowiedź „DSS07 Pojemność” odpada od razu, zanim zaczniesz myśleć o treści.
status: uproszczenie
refleksja: Który nieistniejący kod najłatwiej przemyciłbyś do pytania egzaminacyjnego?
:::

**Co dalej i dlaczego:** następna lekcja to 1.14 „EDM01–EDM03: Ład ustala zasady decydowania, rozlicza korzyści i wyznacza granicę ryzyka”.

:::wykladowca
Podsumujmy. Zarządzanie ma cztery domeny i 32 procesy. APO planuje i organizuje, ma trzynaście procesów. BAI tworzy, nabywa i wdraża, ma dziesięć. DSS dostarcza, obsługuje i wspiera, ma sześć. MEA monitoruje, ocenia i szacuje, ma trzy. Zapamiętajcie też pary, które łatwo pomylić: incydent i problem, BAI09 i EDM04. Teza egzaminacyjna daje Wam prosty test. Jeśli numer procesu wychodzi poza zakres domeny, odpowiedź jest fałszywa. W następnej lekcji poćwiczymy czytanie pytań ze słowami NIE i NAJLEPIEJ.
:::
