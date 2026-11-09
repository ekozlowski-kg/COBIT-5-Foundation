---
id: en-08-uslugi
modul: EN
modulNazwa: Moduł 2 – Aktywatory COBIT 5
temat: Aktywator 6 – Usługi, Infrastruktura i Aplikacje
lekcja: "2.8"
dzien: 6
sylabus: [EN-02-20, EN-02-21]
minuty: 32
zgadnij: [q-pre-en-08]
cwiczenia: [q-en-08-01, q-en-08-02, q-en-08-03, q-en-08-04, q-men-en-08-uslugi-1]
wprowadza: [uslugi-infrastruktura-aplikacje, zasady-architektury]
wprowadzaListe: [zdolnosc-uslugowa]
wymaga: [en-07-informacja, m0-22-zasob]
cel: "Potrafię wymienić pięć pryncypiów architektury. Umiem odróżnić architekturę referencyjną, docelową i przejściową."
priorytet: 1
zapas: [q-zap-en-08-uslugi-1, q-zap-en-08-uslugi-2]
wielkiObraz: 4
twierdzenia: ["Usługi, Infrastruktura i Aplikacje dają organizacji przetwarzanie informacji i usługi IT.", "Pryncypia architektury to ponowne wykorzystanie, nabywanie zamiast budowania, prostota, zwinność i otwartość.", "Architektura referencyjna opisuje obecną zdolność, docelowa przyszłą, a przejściowa etapy pośrednie.", "Informacja jest jedną ze zdolności usługowych."]
typowePytania: [{"pytanie": "Pryncypia architektury to te same zasady, co 5 zasad COBIT 5?", "odpowiedz": "Nie. Pryncypia architektury to dobre praktyki jednego aktywatora, np. prostota czy otwartość. Pięć zasad COBIT 5 dotyczy całej ramy."}, {"pytanie": "Nabywanie zamiast budowania znaczy, że nigdy nie piszemy własnych programów?", "odpowiedz": "Nie. Kupujesz gotowe rozwiązanie, chyba że jest zatwierdzony powód, by zbudować je samemu."}, {"pytanie": "Ten aktywator to tylko sprzęt i kable?", "odpowiedz": "Nie tylko. To też aplikacje i usługi IT, czyli to, co sprzęt i programy razem dają ludziom."}]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "etap 3 – do przeglądu użytkownika"}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Czego naprawdę chcesz, gdy włączasz czajnik?

Nie interesuje Cię, jak działa elektrownia. Chcesz, żeby po włączeniu czajnika była woda na herbatę.

- **Infrastruktura:** sieć, kable.
- **Aplikacja:** czajnik.
- **Usługa:** „ciepła woda w 3 minuty”, z określonym **poziomem usługi** (obietnicą, jak dobrze i jak szybko ma działać).

**Wniosek:** użytkownik chce usługi, a sprzęt i programy są tylko środkiem, żeby ją dostał.

:::wykladowca
Zacznijmy od kuchni. Gdy rano włączacie czajnik, nie myślicie o elektrowni ani o kablach w ścianie. Chcecie gorącej wody na herbatę, i to szybko. W tej prostej scenie są trzy warstwy. Kable i sieć to infrastruktura. Czajnik to aplikacja, czyli narzędzie, którego używacie. Gorąca woda w trzy minuty to usługa. Te trzy minuty to poziom usługi, czyli obietnica, jak dobrze coś ma działać. Dziś zobaczymy te same trzy warstwy w organizacji.
:::

:::pytanie-uczestnika
pytanie: Co to jest poziom usługi?
odpowiedz: To obietnica, jak dobrze i jak szybko usługa ma działać, np. „alarm dociera w 60 sekund”. COBIT 5 mówi, że poziomy usług muszą zostać zdefiniowane i uzyskane przez dostawców usług (FW-PL s. 86).
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta terminu) -->
<!-- podpowiedz: Liczy się to, co sprzęt i programy razem dają ludziom, czyli usługa. -->
# Co daje organizacji aktywator Usługi, Infrastruktura i Aplikacje?

**Services, Infrastructure and Applications** (wym. „serwisiz, infrastrakczer end eplikejszyns”), na egzaminie PL: **Usługi, Infrastruktura i Aplikacje**.

[[uslugi-infrastruktura-aplikacje|Usługi, Infrastruktura i Aplikacje]] to szósty z siedmiu [[aktywator|aktywatorów]] [[cobit-5|COBIT 5]]. Obejmują infrastrukturę, technologię i aplikacje (programy), które dają organizacji **przetwarzanie informacji i usługi IT** (informatyczne).

Razem tworzą **zdolność usługową** (podręcznik: *zdolność do świadczenia usług*). Po ludzku: to, co sprzęt i programy razem potrafią nam dać.

:::zrodlo FW-PL 85 37
:::

:::progresja
0: W domu masz Wi-Fi (infrastruktura), przeglądarkę (aplikacja) i „Internet działa” (usługa).

1: W biurze drukarka sieciowa drukuje z każdego komputera, bo ktoś ją podłączył i ustawił.

2: Organizacja podpisuje z dostawcą umowę: poczta e-mail działa przez 99% czasu.

3: Organizacja planuje, jak jej systemy mają wyglądać za rok i jak do tego dojść.

4: Kierownictwo zatwierdza pryncypia architektury, np. „kupujemy gotowe, chyba że jest zatwierdzony powód, by budować”.

5: W COBIT 5 to aktywator 6 z dobrymi praktykami: pryncypia architektury, punkty widzenia, repozytorium i poziomy usług (FW-PL s. 85–86). Architekturę planuje proces APO03 (Zarządzanie architekturą korporacyjną – Manage Enterprise Architecture).
:::

**Wniosek:** ten aktywator to wszystko, co sprzęt i programy razem dają ludziom w postaci usług.

:::wykladowca
Teraz nazwa. Po angielsku: Services, Infrastructure and Applications, czytamy „serwisiz, infrastrakczer end eplikejszyns”. Na egzaminie PL to Usługi, Infrastruktura i Aplikacje. To szósty aktywator COBIT 5. Podręcznik używa też jednego wspólnego słowa: zdolność usługowa, po angielsku service capability. To znaczy wszystko, co sprzęt i programy razem potrafią nam dać. Spójrzcie na schodki na slajdzie. Zaczynamy od Wi-Fi w domu. Kończymy na dobrych praktykach COBIT 5 i procesie, który planuje architekturę.
:::

:::sb wyjasnij
„Zdolność usługowa” to w podręczniku termin zbiorczy, który obejmuje łącznie usługi, infrastrukturę i aplikacje (FW-PL s. 85). Usługi mogą świadczyć strony wewnętrzne, np. dział IT, i zewnętrzne, np. dostawca w ramach outsourcingu (oddania pracy firmie z zewnątrz).
:::

---

<!-- slajd: mapa -->
# Gdzie to leży w COBIT 5?

:::mapa akt-uslugi
:::

Aktywator nr 6, jeden z trzech aktywatorów, które są też **[[zasob|zasobami]]**. Jego [[dobre-praktyki|dobre praktyki]] to **[[zasady-architektury|pryncypia architektury]]** (pryncypium to podstawowa reguła), repozytorium (uporządkowany zbiór opisów) i poziomy usług.

:::wykladowca
Zobaczmy ten aktywator na mapie. To numer sześć. Razem z Informacją oraz Ludźmi, Umiejętnościami i Kompetencjami należy do trzech aktywatorów, które są też zasobami organizacji. Zasobami trzeba gospodarować, tak jak budżetem. Na mapie widać też dobre praktyki tego aktywatora. Najważniejsze to pryncypia architektury, czyli podstawowe reguły budowy systemów. Dochodzi do nich repozytorium, czyli uporządkowany zbiór opisów, oraz poziomy usług. Każdą z tych rzeczy omówimy na kolejnych slajdach.
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający -->
# Jak opisać systemy dziś, za rok i w połowie drogi? Trzy architektury

Architektura to po ludzku plan: z jakich systemów i sprzętu się składamy i jak są połączone.

| Architektura | Co opisuje |
|---|---|
| **Referencyjna** (bazowa) | **obecną** zdolność usługową |
| **Docelowa** | **przyszłą**, planowaną zdolność |
| **Przejściowa** | **etapy pośrednie** w drodze do docelowej |

Dobre praktyki: **pryncypia architektury**, **punkty widzenia** architektury (modele, katalogi), **repozytorium** architektury, zdefiniowane **poziomy usług**. Zewnętrzne źródła to np. TOGAF (zbiór dobrych praktyk o architekturze) i [[itil|ITIL]].

:::zrodlo FW-PL 85
:::

**Wniosek:** architektura referencyjna to dziś, docelowa to cel, a przejściowa to etapy w drodze do celu.

:::wykladowca
Architektura to po prostu plan systemów: co mamy i jak to jest połączone. COBIT 5 rozróżnia trzy takie plany. Architektura referencyjna, w podręczniku też bazowa, opisuje stan dzisiejszy. Docelowa opisuje to, do czego dążymy. Przejściowa opisuje etapy po drodze. Podręcznik wskazuje też zewnętrzne źródła. TOGAF, czytamy „togaf”, to The Open Group Architecture Framework, zbiór praktyk o architekturze. ITIL, czytamy „ajtil”, to IT Infrastructure Library, zbiór praktyk o usługach IT.
:::

:::sb kontrowersja
Podręcznik PL nazywa obecny stan na dwa sposoby: „architektura referencyjna” (s. 85) i „architektura bazowa” (s. 86). Oba określenia znaczą to samo. Nie myl ich z „repozytorium referencyjnym” ani z „modelami referencyjnymi architektury”. To zbiory opisów, a nie stan obecny.
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający -->
# Jakimi pięcioma regułami kierować się przy budowie systemów?

| Pryncypium | Sens |
|---|---|
| **Ponowne wykorzystanie** | korzystaj ze wspólnych komponentów (części) |
| **Nabywanie zamiast budowania** | kupuj, chyba że jest zatwierdzony powód, by budować |
| **Prostota** | architektura możliwie najprostsza |
| **Zwinność** | szybko odpowiada na zmiany potrzeb |
| **Otwartość** | otwarte standardy branżowe (powszechnie dostępne reguły zapisu i wymiany danych) |

:::zrodlo FW-PL 86
:::

**Wniosek:** pięć pryncypiów to ponowne wykorzystanie, nabywanie, prostota, zwinność i otwartość.

:::wykladowca
Pryncypia architektury, po angielsku architecture principles, czytamy „arkitekczer prinsiplz”, to pięć podstawowych reguł. Pierwsza: ponowne wykorzystanie, czyli reuse. Używaj wspólnych części. Druga: nabywanie zamiast budowania, czyli buy rather than build. Kupuj gotowe, chyba że jest zatwierdzony powód, by budować. Trzecia: prostota, simplicity. Czwarta: zwinność, agility, czytamy „adżiliti”, czyli szybka odpowiedź na zmiany. Piąta: otwartość, openness, czyli otwarte standardy. Podręcznik podaje je jako przykłady możliwych pryncypiów.
:::

:::sb kontrowersja
Ten termin ma dwie polskie formy. Egzamin PL: „Zasady (pryncypia) architektury”, podręcznik PL: „Pryncypia architektury” (status tłumaczenia C – sporny). Kurs używa słowa „pryncypia”, żeby nie mylić ich z pięcioma zasadami COBIT 5 ani z aktywatorem Zasady i polityki.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (z tezą reaktywną) -->
<!-- podpowiedz: Najpierw sprawdź, czy da się kupić gotowe. -->
# Kiedy kupić gotowe, a kiedy budować własne?

:::atom
twierdzenie: Pryncypium **nabywania** zamiast budowania: kupuj gotowe, chyba że jest zatwierdzony powód, by budować.

poLudzku: Najpierw szukasz gotowego rozwiązania, a własne robisz tylko z ważnego powodu.

zycie: Kupujesz gotową szafę w sklepie meblowym. Stolarza zamawiasz tylko, gdy wnęka ma nietypowy wymiar.

komenda: Komenda kupiła gotowy system Syrena od firmy Kwant-Sygnał, zamiast pisać własny.

sprawdz: F :: Nabywanie zamiast budowania zakazuje tworzenia własnych rozwiązań. :: Budować wolno, jeśli jest zatwierdzony powód.
:::

:::teza krytyczna
sytuacja: Komenda kupiła gotową Syrenę, najtańszą ofertę, ale nikt nie spisał, jak szybko alarm ma docierać do OSP.
pytanie: Czy zakup gotowego systemu sam rozwiązuje problem?
teza: Nie. Kupno gotowego rozwiązania nie zwalnia z ustalenia wymagań i poziomów usług. Bez nich dostawca dowiezie to, co obiecał w umowie, a nie to, czego potrzebuje komenda.
uzasadnienie: Podręcznik zaleca nabywanie (s. 86) i osobno wymaga, by poziomy usług zostały zdefiniowane i uzyskane przez dostawców (s. 86). Połączenie tych dwóch praktyk w jedną przestrogę to opinia autora kursu.
powiazanie: Aktywator 6: pryncypium nabywania i poziomy usług
przyklad: Dostawca Wolny mówi po pożarze: „system działa zgodnie z umową”. Umowa nie mówiła nic o czasie dotarcia SMS-a.
status: opinia
refleksja: Jakie trzy wymagania spisałbyś, zanim komenda kupi nowy system?
:::

**Wniosek:** najpierw szukasz gotowego rozwiązania, a własne budujesz tylko z zatwierdzonego powodu.

:::wykladowca
Zatrzymajmy się przy drugim pryncypium, bo na egzaminie jest najczęściej przekręcane. Nabywanie zamiast budowania nie zakazuje budowy. Mówi tylko: najpierw kupuj, a buduj wtedy, gdy masz zatwierdzony powód. Jak z szafą. Gotowa jest tańsza i szybsza, a stolarz ma sens przy nietypowej wnęce. Teza pod atomem to opinia autora kursu. Pokazuje, że zakup nie zwalnia z myślenia. Syrenę kupiono gotową, ale nikt nie zapisał, jak szybko alarm ma dochodzić.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający -->
<!-- podpowiedz: Jedna rzecz może służyć wielu celom. -->
# Po co jedna wspólna część zamiast kilku osobnych?

:::atom
twierdzenie: Pryncypium **ponownego wykorzystania**: korzystaj ze wspólnych komponentów.

poLudzku: Zamiast robić to samo kilka razy, używasz jednej wspólnej części w wielu miejscach.

zycie: Jedna drabina służy do mycia okien, wieszania firanek i zmiany żarówek. Nie kupujesz trzech.

komenda: Ta sama lista numerów OSP służy Syrenie i dyżurnym w SK, zamiast dwóch osobnych list.

sprawdz: P :: Korzystanie ze wspólnych komponentów to pryncypium ponownego wykorzystania. :: Tak. To jedno z pięciu pryncypiów architektury.
:::

**Wniosek:** wspólna część używana w wielu miejscach oszczędza pracę i zmniejsza liczbę miejsc, w których coś może się rozjechać.

:::wykladowca
Pierwsze pryncypium to ponowne wykorzystanie, po angielsku reuse, czytamy „riujs”. Zamiast robić to samo kilka razy, używamy jednej wspólnej części w wielu miejscach. Jedna drabina wystarczy do okien, firanek i żarówek. W komendzie to jedna lista numerów OSP. Korzysta z niej Syrena i korzystają dyżurni w SK, czyli na stanowisku kierowania. Zobaczcie, co to daje. Gdy Pietrzak zmieni numer, poprawiamy go w jednym miejscu. Przy dwóch listach jedna z nich prędzej czy później się zestarzeje.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający -->
<!-- podpowiedz: Architektura przejściowa to etap w połowie drogi. -->
# Jak nazwać plan na czas, gdy część jest już nowa, a część jeszcze stara?

:::atom
twierdzenie: Architektura **przejściowa** opisuje etapy pośrednie w drodze do architektury docelowej.

poLudzku: To plan na czas, gdy część jest już nowa, a część jeszcze stara.

zycie: Remontujesz dom pokój po pokoju. Przez miesiąc kuchnia jest już nowa, a łazienka jeszcze stara.

komenda: Przez pół roku alarm idzie i przez starą, i przez nową bramkę SMS, zanim stara zostanie wyłączona.

sprawdz: F :: Architektura przejściowa opisuje stan obecny. :: Stan obecny opisuje architektura referencyjna, a przejściowa etapy pośrednie.
:::

**Wniosek:** architektura przejściowa mówi, co działa na każdym etapie zmiany, zanim osiągniemy stan docelowy.

:::wykladowca
Wróćmy do trzech architektur. Najtrudniejsza do zapamiętania jest przejściowa. Opisuje ona etapy pośrednie, czyli czas, gdy część jest już nowa, a część jeszcze stara. Pomyślcie o remoncie domu pokój po pokoju. Przez miesiąc gotujecie w nowej kuchni, a myjecie się w starej łazience. Trzeba wiedzieć, co działa w każdym tygodniu. W komendzie to pół roku, gdy alarm idzie dwiema bramkami SMS naraz. Dopiero potem stara bramka zostaje wyłączona.
:::

:::pytanie-uczestnika
pytanie: Po co osobny plan przejściowy, skoro i tak dojdziemy do celu?
odpowiedz: Bo zmiana trwa, a przez ten czas komenda musi wysyłać alarmy. Plan przejściowy mówi, co działa na każdym etapie. Dzięki temu w połowie zmiany nikt nie zostaje bez Syreny.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku (z tezą reaktywną) -->
<!-- podpowiedz: Rozdziel w scenie usługę, aplikację i infrastrukturę. -->
# Co stoi za usługą „alarm dociera do wszystkich”?

:::kontekst zycie
**Bankomat.** Usługa to „wypłata gotówki o każdej porze”. Aplikacja to program w bankomacie. Infrastruktura to sam automat, prąd i łącze z bankiem.
:::

:::kontekst biuro
**Poczta e-mail w biurze.** Usługa to „wiadomość dochodzi w minutę”. Aplikacja to program pocztowy. Infrastruktura to serwer pocztowy, sieć i komputery.
:::

:::kontekst psp
**Serwer pod schodami**
Kpt. Marek Sikora, szef informatyki w komendzie, schodzi do schowka pod schodami. Stoi tam jedyny serwer (komputer, który pracuje dla wszystkich), na którym działa system powiadamiania Syrena. Serwer nie ma zasilania awaryjnego, więc gdy zgaśnie prąd, Syrena milknie. Sikora spisuje, co za nią stoi: usługa „alarm dociera do wszystkich”, aplikacja Syrena i infrastruktura, czyli serwer, prąd i sieć. Te trzy warstwy razem to aktywator [[uslugi-infrastruktura-aplikacje|Usługi, Infrastruktura i Aplikacje]].
:::

:::kontekst psp
- Wspólna baza obiektów dla SK (stanowiska kierowania) i dla czynności kontrolno-rozpoznawczych → **ponowne wykorzystanie**.
- Gotowy system SK zamiast pisania własnego → **nabywanie**.
- Jeden ekran dla dyżurnego zamiast pięciu programów → **prostota**.
- Moduły łatwe do zmiany po nowych wytycznych → **zwinność**.
- Otwarte formaty wymiany danych z CPR 112 (centrum odbierającym telefony alarmowe) → **otwartość**.
:::

:::uproszczenie
Przyporządkowanie przykładów to interpretacja autorska.
:::

:::kontekst it
W COBIT 5 poziomy usług uzgadnia się z dostawcami i odbiorcami w procesie APO09 (Zarządzanie umowami o świadczenie usług – Manage Service Agreements). Docelową architekturę planuje APO03 (Zarządzanie architekturą korporacyjną – Manage Enterprise Architecture).
:::

:::teza praktyczna
sytuacja: Serwer Syreny działa bez zarzutu, ale nie ma zasilania awaryjnego, a komenda musi alarmować także w czasie burzy.
pytanie: Czy dostępność Syreny to tylko parametr techniczny serwera?
teza: Nie. Wymagana dostępność wynika z zadań komendy, a nie z możliwości serwera.
uzasadnienie: Podręcznik wiąże cele zdolności usługowej z usługami, poziomami usług i ich wkładem w skutecznie wspierane procesy biznesowe (FW-PL s. 85). Wniosek dla Syreny to interpretacja kursu.
powiazanie: Aktywator 6, wymiar cele; poziomy usług
przyklad: Komendantka ustala: „Syrena działa także bez prądu z sieci”. Sikora dobiera do tego zasilanie awaryjne i drugi serwer.
status: uproszczenie
zrodlo: FW-PL 85
refleksja: Kto w komendzie powinien zdecydować, ile minut przerwy w działaniu Syreny jest do przyjęcia?
:::

**Wniosek:** za każdą usługą stoją aplikacje i infrastruktura, a słabe ogniwo w infrastrukturze zatrzymuje całą usługę.

:::wykladowca
Na tym slajdzie rozdzielamy trzy warstwy w czterech miejscach. Bankomat: usługa to gotówka o każdej porze, a za nią stoi program, automat i łącze z bankiem. Biuro: wiadomość e-mail dochodzi w minutę dzięki programowi, serwerowi i sieci. Komenda: usługa „alarm dociera do wszystkich” zależy od jednego serwera bez zasilania awaryjnego. To słabe ogniwo. Ostatni przykład pokazuje procesy COBIT 5, w których uzgadnia się poziomy usług i planuje architekturę. Teza pyta, kto ustala wymaganą dostępność.
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający -->
# Jak usługi IT łączą się z informacją, procesami i kulturą?

- **[[informacja|Informacja]] jest jedną ze zdolności usługowych.** Zdolności te wykorzystują **[[proces|procesy]]**, żeby świadczyć usługi wewnętrzne i zewnętrzne.
- **[[kultura-etyka-zachowanie|Kultura]]** ukierunkowana na usługi.
- Wejścia i wyjścia praktyk procesów mogą obejmować zdolności usługowe.

:::teza egzaminacyjna
sytuacja: W pytaniu egzaminacyjnym pada: „Co jest jedną ze zdolności usługowych?”, a wśród odpowiedzi są informacja, cele procesu i struktury ramowe.
pytanie: Którą odpowiedź wybrać?
teza: Informację, bo podręcznik mówi wprost, że informacje stanowią jedną ze zdolności do świadczenia usług.
uzasadnienie: Tak brzmi pierwsze powiązanie aktywatora 6 z innymi aktywatorami (FW-PL s. 86). Cele procesu i struktury ramowe to inne kategorie.
powiazanie: Aktywator 5 Informacja i aktywator 6 Usługi, Infrastruktura i Aplikacje
przyklad: Lista numerów OSP w Syrenie to informacja, a zarazem część zdolności usługowej komendy.
status: oficjalne
zrodlo: FW-PL 86
refleksja: Jakie inne powiązanie aktywatora 6 z aktywatorem 4 podaje podręcznik?
:::

**Wniosek:** usługi IT nie działają w próżni: korzystają z informacji, służą procesom i wymagają kultury nastawionej na usługi.

:::wykladowca
Każdy aktywator ma powiązania z innymi. Tu podręcznik podaje trzy. Pierwsze jest najważniejsze na egzaminie. Informacja jest jedną ze zdolności usługowych. Tę zdolność wykorzystują procesy, żeby świadczyć usługi wewnątrz i na zewnątrz organizacji. Drugie dotyczy kultury. Żeby ludzie myśleli o odbiorcy usługi, potrzebna jest kultura nastawiona na usługi. Trzecie dotyczy procesów. Ich wejścia i wyjścia, czyli to, co proces dostaje i oddaje, mogą obejmować zdolności usługowe.
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający; lista z bliska (§11.1 „lista jako jedno pojęcie”: każdy element z przypisem, zdaniem po ludzku i przykładem) -->
# Usługi, infrastruktura i aplikacje: każdy element z bliska

| Element (EN, wymowa) | Po ludzku | Przykład z życia |
|---|---|---|
| [[zdolnosc-uslugowa|Zdolność usługowa]] – Service capabilities (wym. „serwis kejpabilitiz”) | Wszystko, na czym stoją usługi informatyczne: sprzęt, sieć, programy i same usługi. | Wieczorny film w domu zależy od routera, telewizora i aplikacji z filmami. Razem dają usługę „oglądamy film”. |

**Wniosek:** każdy element tej listy znasz teraz z nazwy egzaminacyjnej, z nazwy angielskiej i z przykładu z życia.

:::wykladowca
Zatrzymajmy się przy liście „Usługi, infrastruktura i aplikacje”. Na egzaminie pytania często dotyczą jednego jej elementu, więc przejdźmy je po kolei. Przy każdym elemencie przeczytaj najpierw nazwę egzaminacyjną i angielską, powiedz ją na głos, a potem przeczytaj zdanie po ludzku i przykład z życia. Kliknij nazwę, jeśli chcesz zobaczyć pełną kartę z przykładem z komendy i z typowymi pomyłkami. Nie ucz się listy na pamięć słowo w słowo. Wystarczy, że przy każdym elemencie umiesz powiedzieć, do czego służy, i podać jeden przykład.
:::

---

<!-- slajd: wlasne-slowa -->
# Czy potrafisz wymienić pięć pryncypiów i odróżnić trzy architektury?

:::wlasne-slowa
Wymień 5 pryncypiów architektury i wyjaśnij różnicę między architekturą referencyjną, docelową i przejściową.
???
Ponowne wykorzystanie, nabywanie zamiast budowania, prostota, zwinność, otwartość. Referencyjna: stan obecny. Docelowa: stan przyszły. Przejściowa: etapy pośrednie między nimi.
:::

**Wniosek:** jeśli wymienisz pięć pryncypiów i ułożysz trzy architektury na osi czasu, masz rdzeń tej lekcji.

:::wykladowca
Teraz Wasza kolej. Wymieńcie na głos pięć pryncypiów. Pomoże Wam kolejność z tabeli: wykorzystaj, kup, upraszczaj, reaguj na zmiany, korzystaj z otwartych standardów. Potem narysujcie w myślach oś czasu. Po lewej dziś, po prawej cel, a pośrodku etapy. Przypiszcie do nich trzy architektury. Dopiero wtedy rozwińcie wzorzec. Jeśli pomyliliście referencyjną z docelową, wróćcie do slajdu z trzema architekturami. To normalne, że ta para myli się najczęściej.
:::

---

<!-- slajd: wlasne-slowa -->
# Dlaczego COBIT 5 zaleca prostotę architektury?

:::wlasne-slowa
Dlaczego COBIT 5 zaleca prostotę architektury? Odpowiedz własnymi słowami.
???
Prosty układ systemów łatwiej zrozumieć, naprawić i zmienić. Każdy dodatkowy element to kolejna rzecz, która może się zepsuć i którą ktoś musi umieć obsłużyć. Dlatego jeden ekran dla dyżurnego jest lepszy niż pięć programów.
:::

**Wniosek:** prostota zmniejsza liczbę miejsc, w których coś może się zepsuć, i ułatwia naukę obsługi.

:::wykladowca
To pytanie pyta o „dlaczego”, więc odpowiedź musi pokazać mechanizm. Pomyślcie o dyżurnym w nocy. Ma przed sobą pięć programów albo jeden ekran. W którym przypadku łatwiej o pomyłkę? Każdy dodatkowy element to coś, co może się zepsuć. To też coś, czego ktoś musi się nauczyć. Podręcznik dodaje warunek: architektura ma być możliwie najprostsza, a zarazem spełniać wymagania organizacji. Prostota nie oznacza więc rezygnacji z potrzebnych funkcji.
:::

---

<!-- slajd: egzamin -->
<!-- typ SD: F – syntetyzujący (pułapki) -->
# Jakie pułapki o usługach i architekturze czekają na egzaminie?

:::egzamin
- Co **jest jedną ze zdolności usługowych**? Odpowiedź to **informacja**. Informacje stanowią jedną ze zdolności do świadczenia usług (s. 86). Zdolności te wykorzystuje się poprzez **procesy**, by świadczyć usługi wewnętrzne i zewnętrzne. Cele procesu i struktury ramowe nie są zdolnościami usługowymi.
- **Pryncypia architektury ≠ zasady COBIT 5 ≠ aktywator Zasady i polityki.**
:::

**Wniosek:** słowo „zasady” występuje w COBIT 5 w trzech różnych szufladach, więc zawsze sprawdzaj, o którą chodzi.

:::wykladowca
Na egzaminie ten aktywator wraca w dwóch pułapkach. Pierwsza to pytanie, co jest jedną ze zdolności usługowych. Poprawna odpowiedź to informacja. Zdolności te wykorzystują potem procesy. Cele procesu i struktury ramowe brzmią mądrze, ale pochodzą z innych szuflad. Druga pułapka to słowo „zasady”. W COBIT 5 są trzy różne rzeczy o podobnej nazwie. Pięć zasad COBIT 5 dotyczy całej ramy. Zasady i polityki to pierwszy aktywator. Pryncypia architektury to dobra praktyka szóstego aktywatora.
:::

---

<!-- slajd: rozwiazany -->
<!-- typ SD: D – przypadku (rozwiązany przykład) -->
<!-- podpowiedz: Ułóż trzy plany na osi czasu: dziś, w połowie drogi, cel. -->
# Jaką architekturą jest plan Sikory „na wakacje”?

:::rozwiazany
Kpt. Sikora rysuje trzy plany dla Syreny. „Dziś”: jeden serwer pod schodami. „Za rok”: dwa serwery w dwóch budynkach, oba z zasilaniem awaryjnym. „Na wakacje”: pierwszy serwer już w serwerowni, drugiego jeszcze nie kupiono. Jaką architekturą jest plan „na wakacje”?
- A. Referencyjną (bazową)
- B. Docelową
- C. Przejściową
- D. Pryncypium zwinności
+++
**Krok 1 – co jest pytane?** Słowo-klucz: „jeszcze nie”. Plan „na wakacje” to **etap w drodze** od stanu „dziś” do stanu „za rok”.
+++
**Krok 2 – jaka kategoria COBIT?** Aktywator Usługi, Infrastruktura i Aplikacje, wymiar dobre praktyki: trzy rodzaje architektury.
+++
**Krok 3 – eliminacja.** A – *inna kategoria*: referencyjna opisuje stan obecny, czyli plan „dziś”. B – *inna kategoria*: docelowa opisuje stan przyszły, czyli plan „za rok”. D – *prawda nie na temat*: zwinność to prawdziwe pryncypium architektury, ale nie rodzaj architektury.
+++
**Odpowiedź: C.** Dlaczego: architektura przejściowa opisuje etapy pośrednie między stanem obecnym a docelowym.
:::

**Wniosek:** gdy w opisie planu pada „już” i „jeszcze nie”, to zwykle architektura przejściowa.

:::wykladowca
Rozwiążmy to razem. Najpierw słowo-klucz. Tu są to słowa „jeszcze nie kupiono”. Plan jest w połowie drogi. Teraz szuflada: trzy rodzaje architektury z dobrych praktyk szóstego aktywatora. Ułóżcie plany na osi czasu. „Dziś” to referencyjna. „Za rok” to docelowa. „Na wakacje” leży pomiędzy. Odpowiedź D kusi, bo zwinność to prawdziwe pryncypium. To jednak reguła budowy, a nie rodzaj planu. Zostaje odpowiedź C, czyli architektura przejściowa.
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący -->
# Co już umiesz o usługach, infrastrukturze i aplikacjach?

- Umiesz rozdzielić usługę, aplikację i infrastrukturę.
- Umiesz wymienić pięć pryncypiów architektury.
- Umiesz odróżnić architekturę referencyjną (dziś), docelową (cel) i przejściową (w drodze).
- Wiesz, że informacja jest jedną ze zdolności usługowych.

**Co dalej i dlaczego:** systemy obsługują ludzie, więc w następnej lekcji poznasz ostatni aktywator: Ludzie, Umiejętności i Kompetencje.

:::wykladowca
Podsumujmy. Powiedzcie na głos trzy warstwy: usługa, aplikacja, infrastruktura. Potem pięć pryncypiów: ponowne wykorzystanie, nabywanie, prostota, zwinność, otwartość. Na koniec trzy architektury na osi czasu: referencyjna, przejściowa, docelowa. Dodajcie jedno zdanie po angielsku: Information is one of the service capabilities. Jeśli to wszystko potraficie bez patrzenia, przejdźcie do ćwiczeń. W następnej lekcji poznacie ostatni aktywator, czyli ludzi, którzy te systemy obsługują.
:::
