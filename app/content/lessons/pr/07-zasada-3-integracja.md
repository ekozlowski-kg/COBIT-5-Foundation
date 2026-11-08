---
id: pr-07-zasada-3
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: Zasada 3 – Zastosowanie Pojedynczej Zintegrowanej Struktury Ramowej
lekcja: "1.7"
dzien: 3
sylabus: [PR-02-10, PR-02-11]
minuty: 34
zgadnij: [q-pre-pr-07-zasada-3]
cwiczenia: [q-pr-07-01, q-pr-07-02, q-pr-07-03, q-men-pr-07-zasada-3-1, q-men-pr-07-zasada-3-2]
wprowadza: [integrator]
wprowadzaListe: [baza-wiedzy, wytyczne-isaca, rodzina-produktow]
wymaga: [pr-01-piec-zasad, m0-07-cobit-standardy, pr-06-zasada-2]
cel: "Potrafię wyjaśnić, że COBIT 5 łączy inne standardy w jedną ramę, ale ich nie zastępuje. Potrafię podać cztery cechy integracji."
priorytet: 1
zapas: [q-zap-pr-07-zasada-3-1, q-zap-pr-07-zasada-3-2]
wielkiObraz: 3
twierdzenia: ["COBIT 5 może pełnić rolę nadrzędnej ramy dla innych standardów.", "COBIT 5 integruje inne standardy i ich nie zastępuje.", "COBIT 5 nie musi być stosowany z innymi standardami.", "COBIT 5 zapewnia prostą architekturę.", "COBIT 5 łączy wiedzę rozproszoną wcześniej w metodykach ISACA."]
typowePytania: [{"pytanie": "Czyli po COBIT 5 nie potrzebujemy już ITIL?", "odpowiedz": "Możemy dalej z niego korzystać. COBIT 5 nie wypiera ITIL, tylko wpina go w jedną ramę. ITIL dalej opisuje szczegóły obsługi usług."}, {"pytanie": "Muszę stosować COBIT 5 razem z innymi standardami?", "odpowiedz": "Nie musisz. COBIT 5 jest z nimi spójny i może je łączyć, ale działa też sam. Zdanie ze słowem „musi” to typowa pułapka egzaminu."}, {"pytanie": "Czym Zasada 3 różni się od Zasady 2?", "odpowiedz": "Zasada 2 mówi, czego dotyczy Ład: całej organizacji. Zasada 3 mówi, skąd bierzemy wiedzę: z jednej ramy, która łączy inne standardy."}]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "etap 3 – do przeglądu użytkownika"}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Pięć notesów czy jeden wspólny kalendarz?

Mama ma kalendarz szkolny, tata kalendarz pracy, babcia zeszyt z wizytami u lekarza, a syn aplikację z treningami.

W piątek okazuje się, że wszyscy mieli być w trzech miejscach naraz.

**Rozwiązanie:** jeden wspólny kalendarz, do którego trafia wszystko.

**Wniosek:** wiele osobnych spisów rodzi sprzeczności, a jeden wspólny pozwala je zobaczyć i usunąć.

:::wykladowca
Zacznijmy od zwykłego domu. Każdy prowadzi własny kalendarz i każdy robi to dobrze. Problem pojawia się dopiero wtedy, gdy kalendarze się spotykają. W piątek okazuje się, że rodzina miała być w trzech miejscach naraz. Zauważcie, że nikt nie wyrzucił swojego notesu. Wystarczyło przepisać terminy do jednego wspólnego kalendarza na lodówce. W organizacjach jest tak samo z instrukcjami i standardami. Dziś poznamy zasadę COBIT 5, która robi z nich jeden wspólny kalendarz.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (z progresją) -->
<!-- podpowiedz: COBIT 5 łączy inne standardy, a nie je wyrzuca. -->
# Czy COBIT 5 wyrzuca inne standardy, czy je łączy?

[[zasada-3|Zastosowanie Pojedynczej Zintegrowanej Struktury Ramowej]]: [[cobit-5|COBIT 5]] może pełnić rolę **nadrzędnej** [[struktura-ramowa|ramy]], w którą wpina się inne standardy i wytyczne.

Po ludzku: rama to zbiór zasad i podpowiedzi, jak coś robić. Standard to spisany i uznany zbiór zaleceń, np. [[itil|ITIL]] o usługach informatycznych albo [[iso-27001|ISO/IEC 27001]] o bezpieczeństwie informacji.

To nie znaczy, że zastępuje ITIL, ISO czy TOGAF (poradnik o tym, jak ułożyć systemy informatyczne w całość). Integruje je, czyli łączy w jedną całość.

:::progresja
0: W domu jeden kalendarz na lodówce zbiera terminy całej rodziny.

1: W biurze jedna wersja regulaminu we wspólnym folderze zastępuje pięć wersji rozesłanych mailem.

2: Restauracja ma jeden system jakości, który łączy wymagania sanepidu, BHP (bezpieczeństwa i higieny pracy) i franczyzy.

3: Komenda układa instrukcję dostawcy, wytyczne komendy wojewódzkiej i własne procedury pod jedną ramą.

4: Kierownictwo wybiera ramę nadrzędną i ustala, w które jej miejsca wpinają się inne standardy.

5: COBIT 5 jako zintegrowana struktura ramowa łączy wytyczne ISACA i inne standardy w jednej bazie wiedzy (FW-PL s. 25).
:::

**Wniosek:** COBIT 5 może być ramą nadrzędną, która łączy inne standardy, a nie je zastępuje.

:::wykladowca
Po angielsku ta zasada to Principle 3, Applying a Single Integrated Framework. Czytamy „prinsipl tri, aplajing e singl integrejtyd frejmłerk”. Słowo framework na egzaminie to „Struktura ramowa”, a w podręczniku „Metodyka”. Zobaczcie trzy nazwy na slajdzie. ITIL to Information Technology Infrastructure Library, czytamy „ajtil”, o usługach IT. ISO/IEC 27001 to norma o bezpieczeństwie informacji. ISO to Międzynarodowa Organizacja Normalizacyjna. TOGAF to The Open Group Architecture Framework, o układaniu systemów w całość. COBIT 5 żadnego z nich nie wyrzuca. Łączy je w jedną ramę. Progresja pod spodem pokazuje ten mechanizm od domu do COBIT 5.
:::

:::pytanie-uczestnika
pytanie: Czym różni się rama od standardu?
odpowiedz: Standard opisuje szczegółowo jeden obszar, np. ISO/IEC 27001 bezpieczeństwo informacji. Rama nadrzędna pokazuje, jak takie obszary połączyć i komu mają służyć. To wyjaśnienie kursu, a nie definicja ISACA.
:::

:::sb kontrowersja
Nazwa zasady ma dwie polskie wersje. Egzamin PL: „Zastosowanie Pojedynczej Zintegrowanej Struktury Ramowej”. Podręcznik PL: „Stosowanie jednej zintegrowanej metodyki” (FW-PL s. 25). Słowo *framework* to na egzaminie „struktura ramowa”, a w podręczniku „metodyka”. Status tłumaczenia: **C – sporny**.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (atom) -->
<!-- podpowiedz: Nadrzędna rama to jedno miejsce, do którego trafia wszystko. -->
# Co znaczy, że COBIT 5 jest ramą nadrzędną?

:::atom
twierdzenie: COBIT 5 może pełnić rolę **nadrzędnej** ramy dla innych standardów.
poLudzku: COBIT 5 może być jednym miejscem, w którym łączysz różne instrukcje.
zycie: Jeden rodzinny kalendarz zbiera wpisy z kalendarza szkoły, pracy i lekarza.
komenda: Kpt. Sikora układa instrukcję dostawcy i wytyczne KW pod jedną wspólną ramą.
sprawdz: P :: COBIT 5 może być ramą nadrzędną dla innych standardów. :: Jest z nimi spójny (s. 25).
:::

**Wniosek:** rama nadrzędna to jedno miejsce, w którym widać, jak łączą się wszystkie instrukcje.

:::wykladowca
Słowo „nadrzędna” brzmi groźnie, ale znaczy coś prostego. To rama, która stoi nad innymi i pokazuje, jak się łączą. Rodzinny kalendarz nie zabrania szkole mieć planu lekcji. Zbiera tylko wszystkie terminy w jednym miejscu. Kpt. Sikora robi to samo z instrukcją dostawcy i z wytycznymi komendy wojewódzkiej, w skrócie KW. Zwróćcie uwagę na słowo „może”. COBIT 5 może pełnić tę rolę, bo jest spójny z innymi standardami. To ważne słowo na egzaminie.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (atom) -->
<!-- podpowiedz: Integrować znaczy łączyć – inne standardy zostają na swoim miejscu. -->
# Integrować czy zastępować: co COBIT 5 robi z ITIL i ISO?

:::atom
twierdzenie: COBIT 5 **integruje** inne standardy, a nie je zastępuje.
poLudzku: Inne standardy zostają, a COBIT 5 łączy je w całość.
zycie: Listwa z gniazdkami nie wyrzuca Twoich ładowarek. Pozwala podłączyć je wszystkie w jednym miejscu.
komenda: Sikora nie wyrzuca żadnego segregatora, tylko dopisuje, w które miejsce ramy się wpina.
sprawdz: F :: COBIT 5 wypiera ITIL i ISO/IEC 27001. :: COBIT 5 łączy je w całość, a nie je zastępuje.
:::

**Wniosek:** po wdrożeniu COBIT 5 inne standardy zostają, a COBIT 5 pokazuje, gdzie pasują.

:::wykladowca
To jedno z ulubionych pytań egzaminu. Czy COBIT 5 zastępuje ITIL albo ISO? Nie. Integruje je, po angielsku integrates, czytamy „integrejts”. Pomyślcie o listwie z gniazdkami. Listwa nie wyrzuca Waszych ładowarek. Daje im wspólne miejsce, żeby działały razem. ITIL dalej szczegółowo opisuje obsługę usług. ISO/IEC 27001 dalej opisuje bezpieczeństwo informacji. COBIT 5 pokazuje, gdzie każdy z nich pasuje w ładzie nad IT. Jeśli w odpowiedzi widzicie „zastępuje” albo „wypiera”, zapala się czerwona lampka.
:::

---

<!-- slajd: mapa -->
# Gdzie to leży w COBIT 5?

:::mapa integracja
:::

[[integrator|Zintegrowana struktura ramowa]] to **Zasada 3**: wejścia (wytyczne ISACA, inne standardy) → baza wiedzy → rodzina produktów, czyli zestaw podręczników. ISACA to międzynarodowe stowarzyszenie, które wydaje COBIT.

:::wykladowca
Spójrzcie na mapę. Podświetlona jest Zintegrowana struktura ramowa. Po angielsku mówi się COBIT 5 as an integrator, czytamy „kołbit fajw ez en integrejter”. To serce Zasady 3. Mechanizm ma trzy części. Na wejściu są wytyczne ISACA i inne standardy. Pośrodku jest jedna baza wiedzy COBIT 5. Na wyjściu jest rodzina produktów, czyli zestaw podręczników. ISACA to międzynarodowe stowarzyszenie specjalistów od ładu, audytu i bezpieczeństwa IT. To ono wydaje COBIT.
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający -->
# Dlaczego COBIT 5 nadaje się na jedną ramę? Cztery powody (s. 25)

1. Jest **spójny** z innymi normami i metodykami (standardami i opisanymi sposobami pracy), więc może być ramą nadrzędną.
2. Obejmuje całą [[organizacja|organizację]], co daje podstawę do integracji.
3. Zapewnia prostą architekturę (przejrzysty układ), która porządkuje materiały i produkty.
4. Łączy wiedzę wcześniej rozproszoną w metodykach ISACA. Są to: COBIT, Val IT, Risk IT, BMIS (Business Model for Information Security), Board Briefing on IT Governance i ITAF (IT Assurance Framework). BMIS to model bezpieczeństwa informacji, Board Briefing to poradnik ładu IT dla zarządu, a ITAF to rama audytu IT. To starsze poradniki ISACA, m.in. o wartości, ryzyku, bezpieczeństwie i audycie (sprawdzaniu przez niezależną osobę).

:::zrodlo FW-PL 25
:::

**Wniosek:** COBIT 5 łączy inne standardy, bo jest z nimi spójny, obejmuje całość, ma prosty układ i zbiera wiedzę ISACA.

:::wykladowca
Ta lista pochodzi ze strony 25 i warto ją znać całą. Powód pierwszy: COBIT 5 jest spójny z innymi standardami, więc nie wchodzi z nimi w konflikt. Powód drugi: obejmuje całą organizację, a to znamy z Zasady 2. Powód trzeci: ma prostą architekturę, czyli przejrzysty układ materiałów. Powód czwarty: zbiera starsze poradniki ISACA w jedno. Val IT mówi o wartości, Risk IT o ryzyku, BMIS o bezpieczeństwie, a ITAF o audycie. Nie musicie znać ich treści. Wystarczy wiedzieć, że COBIT 5 je połączył.
:::

:::sb zrodlo
Ten sam ruch widać na s. 23, w przypisie 4. Pojęcia z wcześniejszej inicjatywy ISACA Taking Governance Forward (TGF) włączono do COBIT 5. TGF wycofano, bo nie był już potrzebny jako osobny zasób (FW-PL s. 23).
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (atom) -->
<!-- podpowiedz: Prosta architektura to porządek: każdy materiał ma swoje miejsce. -->
# Po co ramie prosta architektura?

:::atom
twierdzenie: COBIT 5 zapewnia prostą **architekturę**, która porządkuje materiały i produkty.
poLudzku: Wszystko jest ułożone w jasny sposób, więc łatwo coś znaleźć.
zycie: W szafie z podpisanymi półkami od razu wiesz, gdzie leżą skarpetki, a gdzie ręczniki.
komenda: W szafie Sikory każdy dokument ma teraz swoje miejsce w jednym układzie.
sprawdz: P :: Prosta architektura to jedna z cech integracji COBIT 5. :: Porządkuje materiały i produkty (s. 25).
:::

**Wniosek:** prosta architektura sprawia, że każdy materiał COBIT 5 ma swoje stałe miejsce.

:::wykladowca
Architektura kojarzy się z budynkami. Tu oznacza po prostu układ. Po angielsku simple architecture, czytamy „simpl arkitekczer”. Pomyślcie o szafie z podpisanymi półkami. Nie musicie pamiętać, gdzie leżą ręczniki, bo półka to mówi. COBIT 5 układa swoje podręczniki i przewodniki w podobny sposób. Każdy materiał ma swoje miejsce, więc łatwo go znaleźć i dołożyć nowy. Na egzaminie „prosta architektura” to jedna z czterech cech integracji. Często bywa poprawną odpowiedzią.
:::

---

<!-- slajd: schemat -->
<!-- typ SD: C – procesowy (przepływ wiedzy) -->
# Jak wiedza trafia do rodziny produktów COBIT 5? (Rysunek 10 / Ilustracja 10)

```
Obecne wytyczne ISACA ─┐
Nowe materiały ISACA ──┼─▶ BAZA WIEDZY COBIT 5 ─▶ filtr: AKTYWATORY ─▶ RODZINA PRODUKTÓW COBIT 5
Inne standardy ────────┘                                                ├ COBIT 5 (Framework)
                                                                        ├ przewodniki o aktywatorach
                                                                        └ przewodniki specjalistyczne
```

Aktywatory to wszystko, co pomaga osiągnąć cel: ludzie, zasady, narzędzia, informacje. Dokładnie poznasz je w lekcji 1.8. Na schemacie działają jak sito, przez które przesiewa się bazę wiedzy.

Przykłady przewodników: *Procesy umożliwiające*, *Informacje umożliwiające*, *Wdrożenie*, *Bezpieczeństwo informacji*, *Audyt*, *Ryzyko*.

:::zrodlo FW-PL 25 10
:::

:::zrodlo FW-PL 26 11
:::

**Wniosek:** wiedza z wielu źródeł trafia do jednej bazy, a aktywatory przesiewają ją na konkretne podręczniki.

:::wykladowca
Czytajmy schemat od lewej. Po lewej są trzy źródła wiedzy: obecne wytyczne ISACA, nowe materiały ISACA i inne standardy. Strzałki pokazują, że wszystkie trafiają do jednej bazy wiedzy COBIT 5. Ta baza ma też miejsce na przyszłe treści. Potem wiedza przechodzi przez filtr. Filtrem są aktywatory, po angielsku enablers, czytamy „inejblers”. Działają jak sito. Na końcu, po prawej, powstaje rodzina produktów. To główny podręcznik COBIT 5, przewodniki o aktywatorach i przewodniki specjalistyczne.
:::

:::sb wyjasnij
„Rodzina produktów” to po prostu komplet publikacji. Główną książką jest *COBIT 5* (Framework). Obok są przewodniki o aktywatorach, np. *Procesy umożliwiające*, i przewodniki specjalistyczne, np. o bezpieczeństwie informacji czy audycie. Na schemacie jest też środowisko sieciowe oparte na współpracy (FW-PL s. 25).
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku (z tezą krytyczną) -->
<!-- podpowiedz: Sikora niczego nie wyrzuca – tylko układa dokumenty pod jedną ramą. -->
# Jak wygląda jedna rama w domu, biurze, urzędzie i komendzie?

:::kontekst zycie
**Kalendarz na lodówce.** Terminy szkoły, pracy i przychodni trafiają na jedną kartkę. Szkoła i przychodnia dalej mają swoje plany, a rodzina widzi całość.
:::

:::kontekst biuro
**Wspólny folder.** Zamiast pięciu wersji regulaminu w mailach biuro trzyma jedną aktualną wersję we wspólnym folderze. Nikt już nie szuka „najnowszego pliku”.
:::

:::kontekst firma
Restauracja ma jeden system jakości, który łączy sanepid, BHP i standardy franczyzy.
:::

:::kontekst admin
Urząd ma jedną politykę zarządzania IT. Obejmuje ona KRI (Krajowe Ramy Interoperacyjności, przepisy o systemach w urzędach), RODO (unijne przepisy o ochronie danych osobowych), ISO/IEC 27001 i dobre praktyki [[itil|ITIL]].
:::

:::kontekst psp
**Jedna instrukcja zamiast pięciu**
W szafie Wydziału Łączności i Informatyki komendy straży leżą osobne segregatory. Jest instrukcja od dostawcy Syreny (systemu do wysyłania alarmów), wytyczne z komendy wojewódzkiej i stare procedury wydziału. Każdy dokument mówi co innego o tym, kto aktualizuje numery telefonów ochotników. Kpt. Marek Sikora, naczelnik wydziału, nie wyrzuca żadnego z nich, tylko układa je pod jedną wspólną ramą. Przy każdym dopisuje, w które miejsce tej ramy się wpina, i tak działa [[zasada-3|Zasada 3]]: jedna nadrzędna rama, w którą wpinają się inne standardy.
:::

:::kontekst psp
Komenda opiera ład nad IT na jednej ramie. Wpina w nią wytyczne KG PSP (Komendy Głównej straży), wymagania KSC (krajowych przepisów o cyberbezpieczeństwie) oraz praktyki obsługi zgłoszeń.
:::

:::kontekst it
**COBIT 5.** Praktyki obsługi zgłoszeń komenda bierze z ITIL. W ramie COBIT 5 wpina je pod proces DSS02 (Zarządzanie zgłoszeniami serwisowymi i incydentami, ang. Manage Service Requests and Incidents). DSS (Deliver, Service and Support – Dostarczaj, Obsługuj i Wspieraj) to domena codziennego działania IT.
:::

:::teza krytyczna
sytuacja: Sikora wpiął wszystkie segregatory pod jedną ramę, ale instrukcja dostawcy i wytyczne KW nadal różnie opisują aktualizację numerów.
pytanie: Czy samo wpięcie dokumentów w jedną ramę usuwa sprzeczności?
teza: Nie. Rama pokazuje sprzeczności, ale ktoś musi je rozstrzygnąć i poprawić dokumenty.
uzasadnienie: COBIT 5 zapewnia spójne źródło wytycznych (FW-PL s. 25), ale nie poprawia za organizację jej własnych dokumentów. To ocena autora kursu, a nie stanowisko ISACA.
powiazanie: Zasada 3; Zasady, Polityki i Struktury ramowe (aktywator 1)
przyklad: Komendantka Wrzos decyduje, że numery aktualizuje Ola Dudek co miesiąc, i każe poprawić obie instrukcje.
status: opinia
refleksja: Kto w Twojej organizacji rozstrzyga, gdy dwie instrukcje mówią co innego?
:::

**Wniosek:** w każdej organizacji integracja polega na tym samym: osobne zasady trafiają pod jedną wspólną ramę.

:::wykladowca
Zobaczcie, jak ten sam pomysł wygląda w różnych miejscach. W domu to kalendarz na lodówce. W biurze to jeden aktualny plik we wspólnym folderze. Restauracja łączy wymagania sanepidu, BHP i franczyzy w jeden system jakości. Urząd łączy przepisy, normy i dobre praktyki w jedną politykę. W komendzie Sikora układa segregatory pod jedną ramą. Ostatni przykład pokazuje to w języku COBIT 5. Praktyki z ITIL trafiają pod konkretny proces. Teza pod spodem przypomina, że rama sama niczego nie naprawia.
:::

---

<!-- slajd: nie-jest -->
<!-- typ SD: E – porównawczy -->
# Czego nie mylić z Zasadą 3?

- **≠ „COBIT trzeba stosować z innymi standardami”.** Może współpracować z innymi standardami, ale nie musi.
- **≠ zastępowanie ITIL czy ISO.** COBIT je integruje, a nie wypiera.
- **≠ Zasada 2.** Zasada 2 dotyczy zakresu (cała organizacja), Zasada 3 integracji wytycznych.

:::teza porownawcza
sytuacja: Kursant myli Zasadę 2 z Zasadą 3, bo w obu pada słowo „cała”.
pytanie: Czym różni się pytanie, na które odpowiada Zasada 2, od pytania Zasady 3?
teza: Zasada 2 odpowiada na pytanie „czego dotyczy Ład?”, a Zasada 3 na pytanie „skąd bierzemy wiedzę i jak ją łączymy?”.
uzasadnienie: Zasada 2 mówi o zakresie, czyli o całej organizacji (FW-PL s. 23). Zasada 3 mówi o integracji metodyk (FW-PL s. 25). Podział na dwa pytania to skrót kursu.
powiazanie: Zasada 2; Zasada 3
przyklad: „Syrena dotyczy też księgowości i OSP” to Zasada 2. „Instrukcja dostawcy wpina się pod jedną ramę” to Zasada 3.
status: uproszczenie
refleksja: Do której zasady pasuje zdanie „ITIL wpinamy pod procesy obsługi usług”?
:::

**Wniosek:** Zasada 3 mówi o łączeniu wytycznych, a nie o obowiązku ani o zakresie organizacji.

:::wykladowca
Ten slajd zbiera trzy pułapki. Pierwsza to słowo „musi”. COBIT 5 może współpracować z innymi standardami, ale nie musi. Druga to słowo „zastępuje”. COBIT 5 integruje, a nie wypiera. Trzecia pułapka to pomylenie zasad. Zasada 2 mówi, czego dotyczy Ład: całej organizacji. Zasada 3 mówi, jak łączymy wiedzę z wielu źródeł. W obu zasadach pojawia się słowo „cała”, dlatego tak łatwo je pomylić. Teza porównawcza pomoże Wam je rozdzielić.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (atom z tezą egzaminacyjną) -->
<!-- podpowiedz: „Może” to nie „musi” – COBIT 5 działa też bez innych standardów. -->
# Czy COBIT 5 trzeba stosować razem z innymi standardami?

:::atom
twierdzenie: COBIT 5 **nie musi** być stosowany z innymi standardami.
poLudzku: COBIT 5 może łączyć inne standardy, ale da się go używać też samego.
zycie: Rodzinny kalendarz działa też wtedy, gdy nikt w domu nie ma osobnego notesu.
komenda: Komenda może korzystać z COBIT 5, nawet jeśli nie wdroży ITIL.
sprawdz: F :: COBIT 5 trzeba zawsze stosować razem z innymi standardami. :: Może je integrować, ale nie musi.
:::

:::teza egzaminacyjna
sytuacja: W pytaniu egzaminacyjnym pada zdanie „COBIT 5 musi być stosowany razem z innymi standardami”.
pytanie: Prawda czy fałsz?
teza: Fałsz. COBIT 5 może być ramą nadrzędną dla innych standardów, ale nie ma takiego obowiązku.
uzasadnienie: FW-PL s. 25 mówi, że przedsiębiorstwo może wykorzystać COBIT 5 jako nadrzędną strukturę integrującą inne metodyki. Słowo „może” nie oznacza obowiązku.
powiazanie: Zasada 3
przyklad: Mała gmina stosuje tylko COBIT 5 i nie wdraża ITIL. Nadal korzysta z Zasady 3, bo ma jedną spójną ramę.
status: oficjalne
zrodlo: FW-PL 25
refleksja: Jakie inne słowa w pytaniach egzaminacyjnych zmieniają „może” w „musi”?
:::

**Wniosek:** COBIT 5 może łączyć inne standardy, ale działa też bez nich.

:::wykladowca
Ten atom jest krótki, ale bardzo egzaminacyjny. COBIT 5 może współpracować z innymi standardami. Nie musi. Rodzinny kalendarz działa też w domu, w którym nikt nie ma osobnego notesu. Tak samo komenda może korzystać z COBIT 5 bez wdrażania ITIL. Na egzaminie szukajcie słów, które zmieniają możliwość w obowiązek. To słowa „musi”, „zawsze”, „wyłącznie”. Jeśli takie słowo stoi przy Zasadzie 3, odpowiedź jest prawie na pewno fałszywa. Teraz przemyślcie tezę egzaminacyjną.
:::

:::pytanie-uczestnika
pytanie: Skoro COBIT 5 nie musi łączyć innych standardów, to po co w ogóle je łączyć?
odpowiedz: Bo wiele organizacji już ich używa i nie chce zaczynać od nowa. Jedna rama pozwala zachować to, co działa, i usunąć sprzeczności między dokumentami.
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający; lista z bliska (§11.1 „lista jako jedno pojęcie”: każdy element z przypisem, zdaniem po ludzku i przykładem) -->
# Zintegrowana struktura ramowa: każdy element z bliska

| Element (EN, wymowa) | Po ludzku | Przykład z życia |
|---|---|---|
| [[baza-wiedzy|Baza wiedzy COBIT 5]] – COBIT 5 knowledge base (wym. „kołbit 5 nolydż bejs”) | Jedna duża szafa z całą zebraną wiedzą, z której potem robi się kolejne poradniki. | Babcia przez lata zbierała przepisy z gazet, od sąsiadek i z telewizji. Wkłada je do jednego pudełka z przegródkami i zostawia puste przegródki na nowe. |
| [[wytyczne-isaca|Obecne wytyczne ISACA]] – Prior ISACA guidance (COBIT 4.1, Val IT, Risk IT, BMIS, ITAF) (wym. „prajer ajsaka gajdens”) | Starsze poradniki tego samego wydawcy, np. o wartości i o ryzyku, które COBIT 5 połączył w jeden. | Masz trzy stare zeszyty: z przepisami na ciasta, z domowym budżetem i z listą awarii w mieszkaniu. Przepisujesz je do jednego nowego notesu, a stare chowasz do szuflady. |
| [[rodzina-produktow|Rodzina produktów COBIT 5]] – COBIT 5 product family (wym. „kołbit 5 prodakt femili”) | Cała półka książek COBIT 5: główny podręcznik i poradniki do wybranych tematów, np. audytu czy ryzyka. | Producent mebli dokłada do szafy główną instrukcję montażu. Osobno są ulotki: jak dbać o drewno, jak bezpiecznie przykręcić szafę do ściany. |

**Wniosek:** każdy element tej listy znasz teraz z nazwy egzaminacyjnej, z nazwy angielskiej i z przykładu z życia.

:::wykladowca
Zatrzymajmy się przy liście „Zintegrowana struktura ramowa”. Na egzaminie pytania często dotyczą jednego jej elementu, więc przejdźmy je po kolei. Przy każdym elemencie przeczytaj najpierw nazwę egzaminacyjną i angielską, powiedz ją na głos, a potem przeczytaj zdanie po ludzku i przykład z życia. Kliknij nazwę, jeśli chcesz zobaczyć pełną kartę z przykładem z komendy i z typowymi pomyłkami. Nie ucz się listy na pamięć słowo w słowo. Wystarczy, że przy każdym elemencie umiesz powiedzieć, do czego służy, i podać jeden przykład.
:::

---

<!-- slajd: wlasne-slowa -->
# Czy umiesz podać cztery powody integracji bez patrzenia?

:::wlasne-slowa
Podaj cztery powody, dla których COBIT 5 jest zintegrowaną strukturą ramową.
???
1. Jest spójny z innymi normami i metodykami.
2. Obejmuje całą organizację.
3. Ma prostą architekturę, która porządkuje wytyczne.
4. Łączy wcześniejsze wytyczne ISACA (COBIT, Val IT, Risk IT, BMIS, ITAF).
:::

**Wniosek:** porównaj swoją listę ze wzorcem i powtórz na głos każdy brakujący powód.

:::wykladowca
Zakryjcie poprzednie slajdy i spróbujcie z pamięci. Potrzebujecie czterech powodów. Pomoże Wam prosty skrót: spójność, całość, porządek, połączenie. Spójność to zgodność z innymi standardami. Całość to cała organizacja. Porządek to prosta architektura. Połączenie to zebranie starszych poradników ISACA. Napiszcie każdy powód pełnym zdaniem, a potem odsłońcie wzorzec. Jeśli któregoś zabrakło, powiedzcie go na głos trzy razy. To nasz skrót pamięciowy, a nie sformułowanie ISACA.
:::

---

<!-- slajd: wlasne-slowa -->
# Dlaczego jedna rama jest lepsza niż wiele osobnych instrukcji?

:::wlasne-slowa
Dlaczego warto mieć jedną nadrzędną ramę zamiast wielu osobnych instrukcji?
???
Bo osobne instrukcje mówią co innego i nikt nie wie, której słuchać. W komendzie każda instrukcja inaczej mówiła, kto aktualizuje numery ochotników. Jedna rama pokazuje, gdzie pasuje każdy dokument, i usuwa sprzeczności.
:::

**Wniosek:** dobra odpowiedź pokazuje sprzeczność między instrukcjami i to, jak rama pomaga ją usunąć.

:::wykladowca
To pytanie sprawdza, czy rozumiecie sens Zasady 3. Wróćcie myślami do szafy Sikory. Trzy segregatory mówiły co innego o aktualizacji numerów ochotników. Co się dzieje w takiej sytuacji w nocy, gdy liczy się każda minuta? Odpowiedzcie w dwóch albo trzech zdaniach. Powiedzcie, jaki był problem i co zmienia jedna rama. Potem porównajcie się ze wzorcem. Jeśli umiecie to wyjaśnić na przykładzie, umiecie też uczyć innych.
:::

---

<!-- slajd: egzamin -->
# Jak egzamin sprawdza Zasadę 3?

:::egzamin
Cechy integracji (s. 25): spójność z innymi standardami, pokrycie całej organizacji, **prosta architektura**, połączenie wytycznych ISACA.
Twierdzenie, że COBIT musi być stosowany z innymi standardami, jest fałszywe.
:::

:::zapamietaj
Zasada 3: spójność z innymi standardami, cała organizacja, prosta architektura, jedna baza wiedzy ISACA.
:::

**Wniosek:** na egzaminie szukaj jednej z czterech cech ze s. 25 i odrzucaj zdania z „musi” albo „zastępuje”.

:::wykladowca
Egzamin sprawdza Zasadę 3 na dwa sposoby. Pierwszy: pyta o cechy integracji. Poprawna odpowiedź to jedna z czterech cech ze strony 25. Najczęściej pojawia się prosta architektura. Drugi sposób to pułapki ze słowami. „COBIT 5 musi być stosowany z innymi standardami” to fałsz. „COBIT 5 zastępuje ITIL” to też fałsz. Uważajcie także na zdania o innych zasadach. Współdziałanie wielu aktywatorów to już Zasada 4, którą poznamy w następnej lekcji.
:::

---

<!-- slajd: rozwiazany -->
<!-- podpowiedz: Szukaj cechy z listy ze s. 25, a nie zdania o innej zasadzie. -->
# Który argument Sikory jest cechą integracji? Rozwiązujemy razem

:::rozwiazany
Kpt. Sikora przekonuje komendantkę Wrzos, że COBIT 5 może być jedną ramą dla wszystkich instrukcji w komendzie. Który jego argument jest jedną z cech integracji COBIT 5 (s. 25)?
- A. COBIT 5 zapewnia prostą architekturę, która porządkuje wytyczne i produkty
- B. COBIT 5 zastępuje ITIL i ISO/IEC 27001, więc ich instrukcje można wyrzucić
- C. Syrena zadziała dobrze tylko wtedy, gdy zagrają ludzie, dane, procedury i sprzęt
- D. ITIL dobrze opisuje, jak prowadzić usługi informatyczne
+++
**Krok 1 – co jest pytane?** Słowa-klucze: **cecha integracji** i „jedna rama”. Szukasz powodu, dla którego COBIT 5 nadaje się na ramę nadrzędną.
+++
**Krok 2 – jaka kategoria COBIT?** To **Zasada 3** i jej cztery cechy ze s. 25: spójność z innymi standardami, cała organizacja, prosta architektura, połączenie wytycznych ISACA.
+++
**Krok 3 – eliminacja.** B – *fałsz*: COBIT 5 integruje inne standardy, a nie je wypiera. C – *inna kategoria*: współdziałanie wielu aktywatorów to Zasada 4. D – *prawda nie na temat*: zdanie jest prawdziwe, ale mówi o ITIL, a nie o cechach COBIT 5.
+++
**Odpowiedź: A.** Dlaczego: prosta architektura porządkująca materiały to jedna z czterech cech integracji z s. 25.
:::

**Wniosek:** przy pytaniu o cechę szukaj odpowiedzi z listy, a nie zdania prawdziwego o czymś innym.

:::wykladowca
Rozwiążmy to razem, ale najpierw spróbujcie sami. Słowa-klucze to „cecha integracji” i „jedna rama”. Szukacie więc jednej z czterech cech ze strony 25. Zwróćcie uwagę na odpowiedź D. Jest prawdziwa, bo ITIL rzeczywiście dobrze opisuje usługi. Nie odpowiada jednak na pytanie. To klasyczny dystraktor: prawda nie na temat. Odpowiedź C też jest prawdziwa, ale należy do innej zasady. Odsłaniajcie kroki po kolei i sprawdzajcie swoje rozumowanie.
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący -->
# Co już umiesz o Zasadzie 3?

- Umiesz wyjaśnić, że COBIT 5 może być nadrzędną ramą dla innych standardów.
- Umiesz odróżnić „integruje” od „zastępuje” i „może” od „musi”.
- Umiesz wymienić cztery cechy integracji ze s. 25.

**Co dalej i dlaczego:** w lekcji 1.8 poznasz Zasadę 4 i siedem aktywatorów, bo to one są sitem ze schematu.

:::wykladowca
Podsumujmy po polsku i po angielsku. Zasada 3 to Applying a Single Integrated Framework, czyli Zastosowanie Pojedynczej Zintegrowanej Struktury Ramowej. COBIT 5 może być ramą nadrzędną, ale nie musi. Integruje inne standardy, a nie je zastępuje. Ma cztery cechy integracji: spójność, całą organizację, prostą architekturę i połączenie wiedzy ISACA. Na schemacie wiedza przechodzi przez sito aktywatorów. Właśnie aktywatory poznamy w następnej lekcji.
:::
