---
id: it0-08-gdy-cos-sie-psuje
modul: IT0
modulNazwa: Podstawy cyfrowe
temat: "Co robić, gdy „Syrena” milknie? Incydent, problem, zmiana, kopia zapasowa i ciągłość działania"
lekcja: "0A.8"
dzien: 0
sylabus: [M0-00-07]
minuty: 16
priorytet: 2
wielkiObraz: 4
cel:
  - "Potrafię odróżnić incydent (incident) od problemu (problem) i powiedzieć, kiedy potrzebna jest zmiana (change)."
  - "Potrafię wyjaśnić, czym kopia zapasowa (backup) różni się od ciągłości działania (business continuity)."
wprowadza: [it-incydent, it-problem, it-zmiana, it-kopia-zapasowa, it-ciaglosc-dzialania]
wymaga: [it0-04-serwer-usluga, it0-07-infrastruktura-aplikacje]
twierdzenia: ["Incydent (incident) to przerwa albo pogorszenie usługi; najpierw szybko przywracamy działanie.", "Problem (problem) to przyczyna jednego lub wielu incydentów; szukamy jej i usuwamy.", "Zmiana (change) to zaplanowana przeróbka w systemie, zatwierdzona i sprawdzona przed wdrożeniem.", "Kopia zapasowa (backup) ratuje dane, a ciągłość działania (business continuity) to cały plan dalszej pracy po poważnej awarii."]
typowePytania: [{"pytanie": "Ola uruchomiła serwer ponownie i działa. Czy sprawa zamknięta?", "odpowiedz": "Incydent tak. Ale jeśli awaria wraca, trzeba otworzyć problem i znaleźć przyczynę."}, {"pytanie": "Mamy kopię zapasową, więc mamy ciągłość działania?", "odpowiedz": "Nie. Kopia ratuje dane. Ciągłość to też plan, zapasowy sprzęt, procedury ręczne i ćwiczenia."}, {"pytanie": "Czy drobna poprawka w programie wymaga zgody?", "odpowiedz": "Tak, jeśli może wpłynąć na usługę. Wiele awarii zaczyna się od „drobnej poprawki”."}]
zgadnij: [q-pre-it0-08]
cwiczenia: [q-it0-08-01, q-it0-08-02, q-it0-08-03]
zapas: [q-zap-it0-08-1, q-zap-it0-08-2]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "Wersja robocza – lekcja wprowadza 5 pojęć (tabela METODYKA §17.3), limit §11.1 to 4. Do przeglądu przez człowieka."}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy; krok 1: pokaż zjawisko -->
# Trzeci raz w miesiącu „Syrena” milknie – czy wystarczy ją znowu włączyć?

O 2:10 w nocy dyżurna zgłasza: „Syrena” nie wysyła SMS-ów. Informatyczka uruchamia serwer ponownie. Po 10 minutach wszystko działa.

To już trzeci taki raz w tym miesiącu.

**Wniosek:** gaszenie awarii i usuwanie jej przyczyny to dwie różne prace.

:::wykladowca
Wyobraźcie sobie noc w komendzie. O drugiej dziesięć „Syrena” przestaje wysyłać wiadomości. Informatyczka Ola Dudek wstaje, uruchamia serwer ponownie i po dziesięciu minutach wszystko działa. Świetnie. Ale to już trzeci raz w tym miesiącu. Jeśli Ola będzie tylko włączać serwer, za tydzień znów ktoś ją obudzi. A może akurat podczas pożaru. Na tej lekcji nazwiemy, co dzieje się, gdy coś się psuje. Dowiemy się też, jak się na to przygotować.
:::

:::pytanie-uczestnika
pytanie: Skoro po 10 minutach działa, to po co się tym dalej zajmować?
odpowiedz: Bo przyczyna została. Dopóki jej nie usuniesz, awaria wróci – może w najgorszym momencie.
:::

---

<!-- slajd: porownanie -->
<!-- typ SD: E – porównawczy; kroki 2–4: wyjaśnij, nazwij, każdy element -->
# Gaszenie i szukanie przyczyny: incydent i problem

| | **[[it-incydent|Incydent]]** | **[[it-problem|Problem]]** |
|---|---|---|
| EN (wymowa) | *incident* („insydent”) | *problem* („problem”) |
| Co to jest? | przerwa albo pogorszenie usługi | przyczyna jednego lub wielu incydentów |
| Cel pracy | **szybko** przywrócić działanie | **znaleźć i usunąć** przyczynę |
| Przykład | „Syrena” milknie, Ola ją włącza | „Syrena” milknie, bo brakuje miejsca na dysku |
| Życie | przebita opona – zakładasz zapasowe koło | sprawdzasz, dlaczego opony ciągle pękają |

Uwaga: w mowie potocznej „problem” to każdy kłopot. W informatyce to właśnie **przyczyna** incydentów.

**Wniosek:** incydent gasimy szybko, a problem rozwiązujemy dokładnie, żeby incydenty nie wracały.

:::wykladowca
Nazwijmy to, co się dzieje. Przerwa albo pogorszenie usługi to incydent, po angielsku incident. Przy incydencie liczy się szybkość. Trzeba jak najszybciej przywrócić działanie. Przyczyna incydentu to problem, po angielsku też problem. Przy problemie liczy się dokładność. Trzeba znaleźć przyczynę i ją usunąć. Uwaga na słowo „problem”. W domu mówimy tak na każdy kłopot. W informatyce to tylko przyczyna awarii. Pomyślcie o przebitej oponie. Zmiana koła to incydent. Szukanie, dlaczego opony ciągle pękają, to problem.
:::

:::sb nie-mylic
Incydent dzieje się teraz albo już się wydarzył. To, co **może** się wydarzyć, to ryzyko – nazwiemy je w lekcji 0A.9.
:::

---

<!-- slajd: proces -->
<!-- typ SD: C – procesowy; krok 5: jak elementy współpracują -->
# Jak bezpiecznie usunąć przyczynę? Zmiana krok po kroku

Ola znalazła przyczynę: na dysku serwera brakuje miejsca. Trzeba dołożyć większy dysk. To **[[it-zmiana|zmiana]]** (EN: *change*, wym. „czejndż”) – zaplanowana przeróbka w sprzęcie, programie albo ustawieniach.

1. **Wniosek o zmianę:** „powiększyć dysk serwera »Syreny«”.
2. **Ocena:** co może pójść źle? Ile potrwa przerwa?
3. **Zgoda** osoby odpowiedzialnej, np. naczelnika informatyki.
4. **Test** i wybór spokojnej pory, gdy alarmów jest najmniej.
5. **Wdrożenie** i sprawdzenie, czy działa – z planem powrotu do starej wersji, gdyby nie działało.

**Wniosek:** zmiana usuwa przyczynę problemu, ale sama musi być zaplanowana, żeby nie wywołać nowego incydentu.

:::wykladowca
Ola znalazła przyczynę. Dysk serwera jest za mały. Rozwiązanie wydaje się proste: dołożyć większy dysk. Ale uwaga. Każda przeróbka w sprzęcie, programie albo ustawieniach to zmiana, po angielsku change. A zmiana sama może coś zepsuć. Dlatego idzie się po kolei: wniosek, ocena skutków, zgoda, test, spokojna pora, wdrożenie i sprawdzenie. Zawsze z planem powrotu, gdyby coś nie zadziałało. Wiele awarii na świecie zaczęło się od „drobnej poprawki” zrobionej w piątek po południu.
:::

:::teza krytyczna
sytuacja: Dostawca w piątek o 16:00 wgrywa nową wersję „Syreny” bez uprzedzenia. O 17:30 dyżurni nie mogą wysłać alarmu.
pytanie: Czy zmiana zrobiona przez dostawcę to wyłącznie jego sprawa?
teza: Nie. Zmiana dotyka usługi komendy, więc komenda musi ją znać, zatwierdzić i mieć plan powrotu.
uzasadnienie: Niekontrolowana zmiana wywołała incydent. W COBIT 5 zmianami zarządza osobny proces BAI06 (Zarządzanie zmianami, FW-PL s. 33).
powiazanie: BAI06 Zarządzanie zmianami; dostawca i outsourcing (lekcja 0A.7)
przyklad: Odtąd każda zmiana „Syreny” tylko po zgodzie naczelnika i w spokojnej porze.
status: uproszczenie
refleksja: Kto w Twojej pracy zatwierdza zmiany w programach, z których korzystasz?
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający; kroki 2–5 dla dwóch kolejnych pojęć -->
# A jeśli serwer spłonie? Kopia zapasowa i ciągłość działania

- **[[it-kopia-zapasowa|Kopia zapasowa]]** (EN: *backup*, wym. „bekap”) – regularna kopia danych, trzymana **w innym miejscu** niż oryginał. Po awarii odtwarza się z niej dane.
- **[[it-ciaglosc-dzialania|Ciągłość działania]]** (EN: *business continuity*, wym. „biznes kontiniuity”) – plan, jak **pracować dalej** po poważnym zakłóceniu i szybko wrócić do normy.

Plan ciągłości odpowiada na pytania:
1. Które usługi są najważniejsze i jak długo mogą nie działać?
2. Co robimy zamiast nich (np. alarm telefonem z papierowej listy)?
3. Gdzie jest zapasowy sprzęt i kopia danych?
4. Kto co robi – i kiedy to ćwiczymy?

**Wniosek:** kopia zapasowa ratuje dane, a ciągłość działania ratuje pracę całej organizacji.

:::wykladowca
Teraz najczarniejszy scenariusz. Serwer spłonął. Co wtedy? Po pierwsze, potrzebujemy danych. Dlatego robimy kopię zapasową, po angielsku backup. To regularna kopia danych, trzymana w innym miejscu niż oryginał. Kopia obok oryginału spłonie razem z nim. Po drugie, musimy dalej pracować. Tu potrzebny jest plan ciągłości działania, po angielsku business continuity. Plan mówi, co robimy zamiast zepsutej usługi, gdzie jest zapasowy sprzęt i kto co robi. Plan trzeba ćwiczyć. Nieprzećwiczony zawodzi w stresie.
:::

:::sb wyobraz
Kopia zapasowa to zapasowy klucz u mamy. Ciągłość działania to rodzina przygotowana na burzę: latarki, woda, naładowany telefon i ustalone, kto po kogo jedzie.
:::

:::teza interpretacyjna
sytuacja: Informatyk mówi kierowniczce: „Robimy kopie co noc, więc ciągłość mamy zapewnioną”.
pytanie: Czy kopia zapasowa to już ciągłość działania?
teza: Nie. Kopia ratuje dane, a ciągłość wymaga też planu, zapasowego sprzętu, procedur ręcznych i ćwiczeń.
uzasadnienie: Słownik FW-PL opisuje ciągłość działalności jako zapobieganie zakłóceniom, łagodzenie ich skutków i odtwarzanie (s. 89) – to szerzej niż sama kopia danych.
powiazanie: DSS04 (Zarządzanie ciągłością), dzień 2
przyklad: Kopia bazy „Syreny” leży w drugiej jednostce, ale bez zapasowego serwera i planu nikt w nocy nie wie, co robić.
status: oficjalne
zrodlo: FW-PL 89
refleksja: Co Twoja rodzina albo Twoje biuro zrobi, gdy przez dobę nie będzie prądu?
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku; kroki 6–8: EN, organizacja, znaczenie specjalistyczne -->
# Od korków w kuchni do planu komendy

:::kontekst zycie
**Korki w kuchni.** Wysiadają korki – włączasz bezpiecznik (incydent). Za trzecim razem sprawdzasz, które urządzenie przeciąża instalację (problem). Elektryk wymienia gniazdko w umówionym terminie (zmiana). Zdjęcia z telefonu masz w kopii w Internecie (kopia zapasowa).
:::

:::kontekst biuro
**Poczta w biurze.** O 9:00 nie działa poczta. Informatyk przywraca ją o 9:20. Gdy pada Internet, pracownicy wiedzą z planu, że pilne maile wysyłają z telefonów.
:::

:::kontekst organizacja
**Bank.** Ma zapasową serwerownię w innym mieście i co pół roku ćwiczy przeniesienie do niej całej pracy. Każdą zmianę w systemie kont najpierw testuje na kopii danych.
:::

:::kontekst psp
**Scena: „Co robimy, gdy serwer spłonie?”.** Komendantka Anna Wrzos pyta naczelnika informatyki, kpt. Marka Sikorę, co się stanie, gdy serwer pod schodami spłonie. Sikora przedstawia plan. Kopia bazy leży w drugiej jednostce, JRG 2. Jest tam też zapasowy serwer. Dyżurni mają papierową listę telefonów do OSP Zawilce. Co kwartał komenda ćwiczy „noc bez Syreny”.
:::

:::kontekst it
**COBIT 5.** Incydentami zajmuje się proces DSS02 (Zarządzanie zgłoszeniami serwisowymi i incydentami). Przyczynami – DSS03 (Zarządzanie problemami). Zmianami – BAI06 (Zarządzanie zmianami). Ciągłością – DSS04 (Zarządzanie ciągłością). Źródło: FW-PL s. 33.
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** organizacja potrzebuje czterech umiejętności: gasić incydenty, usuwać problemy, bezpiecznie zmieniać i przetrwać poważną awarię.

:::wykladowca
Te same cztery czynności znacie z domu. Włączacie bezpiecznik, szukacie przyczyny, wzywacie elektryka na umówioną godzinę i trzymacie kopie zdjęć. W komendzie w Modrzewiowie stawka jest wyższa. Dlatego komendantka pyta: co zrobimy, gdy serwer spłonie? Sikora ma plan: kopia w drugiej jednostce, zapasowy serwer, papierowa lista telefonów i ćwiczenia. COBIT 5 ma na każdą z tych czynności osobny proces. Nazwy procesów i ich kody poznacie w dniu 2. Dziś wystarczy, że rozumiecie, co one robią.
:::

:::progresja
0: Robisz kopię zdjęć z telefonu na koncie w Internecie.
1: W biurze informatyk co noc kopiuje faktury na osobny dysk.
2: Firma trzyma kopie danych w drugim budynku i sprawdza, czy da się z nich odtworzyć dane.
3: Organizacja ma plan: które usługi są najważniejsze i co robić bez nich.
4: Kierownictwo decyduje, jak długa przerwa w kluczowej usłudze jest do przyjęcia, i finansuje plan.
5: W COBIT 5 ciągłością zajmuje się proces DSS04 Zarządzanie ciągłością (FW-PL s. 33, 89).
:::

---

<!-- slajd: rozwiazany -->
# Rozwiązujemy razem

:::rozwiazany
„Syrena” zawiesza się co tydzień. Za każdym razem Ola Dudek uruchamia serwer ponownie i po kilku minutach wszystko działa. Co powinna zrobić teraz?
- A. Nic – incydent zamknięty, bo usługa działa
- B. Zrobić kopię zapasową bazy danych
- C. Otworzyć problem, czyli znaleźć i usunąć przyczynę zawieszania się
- D. Od razu wgrać nową wersję „Syreny” bez testów
+++
**Krok 1 – co jest pytane?** Słowo-klucz: „co tydzień”. Awaria się **powtarza**.
+++
**Krok 2 – jaka kategoria?** Powtarzające się incydenty to sygnał, że jest ukryta przyczyna, czyli problem.
+++
**Krok 3 – eliminacja.** A – *zbyt wąskie*: zamyka tylko jeden incydent, a przyczyna zostaje. B – *prawda nie na temat*: kopia jest ważna, ale nie usuwa przyczyny zawieszania. D – *fałsz*: zmiana bez testu może wywołać nowy incydent.
+++
**Odpowiedź: C.** Powtarzające się incydenty wymagają zarządzania problemem: znalezienia i usunięcia przyczyny, a potem zaplanowanej zmiany.
:::

:::wykladowca
Rozwiążmy to razem. Najpierw słowo-klucz: „co tydzień”. Awaria się powtarza. Powtarzające się incydenty to sygnał, że gdzieś siedzi przyczyna, czyli problem. Teraz odrzucamy. Odpowiedź A zamyka tylko jeden incydent, a przyczyna zostaje. Odpowiedź B jest rozsądna sama w sobie, bo kopia się przyda, ale nie odpowiada na pytanie. To częsta pułapka egzaminu: zdanie prawdziwe, tylko nie na temat. Odpowiedź D to zmiana bez testu, a więc proszenie się o nowy incydent. Zostaje C.
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący; krok 9: sprawdź zrozumienie -->
# Co już umiesz

| PL | EN (wymowa) | Jednym zdaniem |
|---|---|---|
| incydent | incident („insydent”) | przerwa w usłudze – gasimy szybko |
| problem | problem („problem”) | przyczyna incydentów – szukamy i usuwamy |
| zmiana | change („czejndż”) | zaplanowana, zatwierdzona przeróbka |
| kopia zapasowa | backup („bekap”) | kopia danych w innym miejscu |
| ciągłość działania | business continuity („biznes kontiniuity”) | plan dalszej pracy po poważnej awarii |


**Co dalej i dlaczego:** następna lekcja to 0A.9 „Hasło na karteczce – drobiazg czy ryzyko? Bezpieczeństwo informacji, dostępność i ryzyko IT”.

:::wykladowca
To była najbogatsza lekcja dnia, więc podsumujmy spokojnie. Incydent, po angielsku incident, gasimy szybko. Problem, po angielsku problem, to przyczyna – szukamy jej i usuwamy. Zmiana, po angielsku change, to zaplanowana przeróbka, ze zgodą i testem. Kopia zapasowa, po angielsku backup, ratuje dane, jeśli leży w innym miejscu. Ciągłość działania, po angielsku business continuity, ratuje pracę całej organizacji. Jeśli któreś słowo się myli, wróćcie do tabeli porównawczej, zanim przejdziecie dalej.
:::

:::wlasne-slowa
Wyjaśnij koledze w 4 zdaniach, co się dzieje od nocnej awarii „Syreny” do jej trwałej naprawy. Użyj słów „incydent”, „problem” i „zmiana”.
???
„Gdy „Syrena” milknie w nocy, mamy incydent (incident): Ola szybko przywraca działanie. Bo awaria się powtarza, Ola otwiera problem (problem) i szuka przyczyny – znajduje za mały dysk. Wymiana dysku to zmiana (change): wniosek, zgoda, test i spokojna pora. Na wypadek najgorszego komenda ma kopię zapasową i plan ciągłości działania.”
:::

:::atom
twierdzenie: Incydent to przerwa w usłudze, a problem to jej przyczyna; incydent gasimy szybko, problem usuwamy dokładnie.
poLudzku: Najpierw ratujesz sytuację, potem szukasz, dlaczego się zdarzyła.
zycie: Zmiana przebitej opony to incydent, a sprawdzenie, czemu opony ciągle pękają, to problem.
komenda: Ponowne uruchomienie „Syreny” gasi incydent; znalezienie za małego dysku rozwiązuje problem.
sprawdz: F :: Zamknięcie incydentu zawsze usuwa jego przyczynę. :: Zamknięcie incydentu przywraca działanie; przyczynę usuwa zarządzanie problemem.
:::
