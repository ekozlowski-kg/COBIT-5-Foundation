---
id: pr-12-prm-edm
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: Referencyjny Model Procesu i 5 procesów Ładu (EDM)
lekcja: "1.12"
dzien: 4
sylabus: [PR-01-03]
minuty: 28
zgadnij: [q-pre-pr-12-prm-edm]
cwiczenia: [q-pr-12-01, q-pr-12-02, q-pr-12-03, q-mapa-edm, q-men-pr-12-prm-edm-1]
wprowadza: [prm, edm]
wymaga: [pr-11-zasada-5, pr-02-tworzenie-wartosci]
cel: "Potrafię powiedzieć, ile procesów ma model COBIT 5. Potrafię wymienić 5 procesów Ładu (EDM) po słowach-kluczach."
priorytet: 1
zapas: [q-zap-pr-12-prm-edm-1, q-zap-pr-12-prm-edm-2]
wielkiObraz: 5
twierdzenia: ["Referencyjny Model Procesu ma 37 procesów.", "Ład ma 5 procesów w domenie EDM.", "Zarządzanie ma 32 procesy w 4 domenach.", "Referencyjny Model Procesu nie jest normatywny.", "EDM03 to Zapewnienie optymalizacji ryzyka."]
typowePytania: [{"pytanie": "Czyli każda komenda musi mieć dokładnie te 37 procesów?", "odpowiedz": "Nie. Model nie jest normatywny, czyli nie jest przepisem. To wzorzec, który dostosowujesz, byle pokryć wszystkie cele."}, {"pytanie": "Procesy EDM wykonuje informatyk?", "odpowiedz": "Nie. EDM to procesy Ładu, czyli szefostwa, np. komendantki. Informatycy pracują w procesach Zarządzania."}, {"pytanie": "Monitoruj to szósty proces EDM?", "odpowiedz": "Nie. Oszacuj, Kieruj i Monitoruj to praktyki wewnątrz każdego z 5 procesów EDM."}]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "etap 3 – do przeglądu użytkownika"}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Czy lista wszystkich domowych spraw pomaga niczego nie przeoczyć?

Wyobraź sobie listę wszystkich „procesów” domu: zakupy, rachunki, sprzątanie, naprawy, nauka dzieci…

Nie każda rodzina potrzebuje ich wszystkich w tej samej formie. **Lista pomaga jednak niczego nie przeoczyć.**

**Wniosek:** gotowa lista typowych spraw to wzór do sprawdzenia, a nie nakaz robienia wszystkiego tak samo.

:::wykladowca
Wyobraźcie sobie, że ktoś spisał wszystkie sprawy, które trzeba załatwiać w domu. Zakupy, rachunki, sprzątanie, naprawy, odrabianie lekcji z dziećmi. Czy każda rodzina robi to identycznie? Nie. Jedna robi zakupy raz w tygodniu, druga codziennie. Ktoś mieszka sam i nie ma dzieci. A jednak taka lista się przydaje. Przeglądacie ją i od razu widzicie, o czym zapomnieliście. W poprzedniej lekcji poznaliście Ład i Zarządzanie. Dziś zobaczycie, że COBIT 5 ma właśnie taką listę: 37 procesów.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku (od życia do COBIT 5) -->
<!-- podpowiedz: Pięć rzeczy, których komendantka nie może oddać nikomu. -->
# Jakich pięciu spraw nie zostawia się kierownikom?

:::kontekst zycie
**Narada rodzinna.** Raz w roku rodzice ustalają zasady domowe, decydują, na co warto wydać pieniądze, i zastanawiają się, czego się boją, np. utraty pracy. Dzielą też domowe pieniądze i czas, a dziadkom mówią otwarcie, jak sobie radzą. Gotowanie i sprzątanie zostawiają już domownikom.
:::

:::kontekst biuro
**Właściciel biura rachunkowego.** Ustala zasady pracy biura i sprawdza, czy nowy program się opłacił. Pilnuje ryzyka utraty danych klientów, dzieli budżet między ludzi i sprzęt, a raz w roku rozlicza się ze wspólnikami. Codzienną księgowość prowadzą pracownicy.
:::

:::kontekst psp
**Pięć obowiązków komendantki**
Kpt. Marek Sikora, szef informatyki komendy, kładzie przed komendantką Anną Wrzos kartkę z pięcioma punktami. „Te pięć procesów jest pani, pozostałe 32 biorę ja” – mówi. Na kartce stoi: ustalić zasady gry, dopilnować korzyści, pilnować ryzyka, rozsądnie gospodarować zasobami i rozliczać się przed interesariuszami. Wrzos kiwa głową, bo tych rzeczy nie może oddać nikomu. To pięć [[edm|procesów Ładu (EDM01–05)]].
:::

:::kontekst it
**Domena Ładu w COBIT 5.** EDM (Evaluate, Direct and Monitor – Oszacuj, Kieruj i Monitoruj) to domena Ładu. W każdym z jej 5 procesów są praktyki oceny, kierowania i monitorowania (FW-PL s. 32). Na przykład w EDM03 zarząd ocenia ryzyko informatyczne (IT), ustala apetyt na ryzyko i sprawdza, czy nie jest przekraczany.
:::

:::teza krytyczna
sytuacja: W scenie Wrzos uznaje, że pięciu spraw Ładu „nie może oddać nikomu”. Zastępca proponuje jednak powołanie Rady ds. Informatyki.
pytanie: Czy organ Ładu musi sam, osobiście wykonywać wszystkie procesy EDM?
teza: Nie. Część obowiązków Ładu można przekazać specjalnym strukturom, np. radzie lub komitetowi, ale nadal są to obowiązki Ładu, a nie Zarządzania.
uzasadnienie: FW-PL podaje, że poszczególne obowiązki w zakresie nadzoru mogą zostać przekazane specjalnym strukturom organizacyjnym na właściwym poziomie (s. 14).
powiazanie: Zasada 5; aktywator Struktury organizacyjne
przyklad: Rada ds. Informatyki z udziałem zastępcy komendanta co kwartał przegląda ryzyko Syreny i melduje komendantce.
status: oficjalne
zrodlo: FW-PL 14
refleksja: Czym różni się przekazanie zadania radzie od oddania go naczelnikowi informatyki?
:::

**Wniosek:** pięć spraw Ładu to zasady, korzyści, ryzyko, zasoby i rozliczenie z interesariuszami, a codzienną pracę wykonują inni.

:::wykladowca
Zobaczcie te same pięć spraw w czterech miejscach. W domu rodzice ustalają zasady, decydują o wydatkach, myślą o ryzyku, dzielą pieniądze i rozliczają się przed dziadkami. W biurze rachunkowym robi to właściciel. W komendzie komendantka Wrzos. W COBIT 5 to pięć procesów domeny EDM. Teraz uwaga na tezę krytyczną. Scena mówi, że komendantka nie może tych spraw oddać nikomu. To uproszczenie. Część obowiązków może przejąć specjalna rada. Nie może ich jednak przejąć naczelnik informatyki.
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: 37 = 5 procesów Ładu + 32 procesy Zarządzania. -->
# Ile procesów ma model COBIT 5 i jak są podzielone? Referencyjny Model Procesu (PRM)

:::atom
twierdzenie: Referencyjny Model Procesu zawiera **37** procesów: 5 procesów Ładu i 32 procesy Zarządzania.
poLudzku: To gotowa lista 37 typowych zadań informatyki, podzielona na szefostwo i kierowników.
zycie: Książka kucharska ma 37 przepisów: 5 na święta, które robi babcia, i 32 na co dzień.
komenda: Wrzos bierze 5 procesów Ładu, a Sikora 32 procesy Zarządzania.
sprawdz: F :: COBIT 5 ma 40 procesów. :: Ma 37 procesów. Liczba 40 to cele z COBIT 2019.
:::

[[prm|PRM]] to wzorcowy zestaw 37 [[proces|procesów]], ułożonych w domeny (po ludzku: grupy, „szuflady” procesów):

| Domena główna | Domeny | Procesy |
|---|---|---|
| **[[lad]]** | [[edm]] | **5** |
| **[[zarzadzanie]]** | APO (planowanie) 13 · BAI (budowanie) 10 · DSS (codzienne działanie) 6 · MEA (monitorowanie) 3 – pełne nazwy w lekcji 1.13 | **32** |

:::zrodlo FW-PL 32
:::

**Wniosek:** Referencyjny Model Procesu ma 37 procesów: 5 w domenie Ładu i 32 w czterech domenach Zarządzania.

:::wykladowca
Teraz nazwa. Po angielsku: Process Reference Model, skrót PRM, czytamy „prołses referens model”. Na egzaminie PL: Referencyjny Model Procesu. W podręczniku: model referencyjny procesu COBIT 5. To po prostu wzorcowa lista 37 procesów. Zobaczcie tabelę. Pierwszy wiersz to Ład: jedna domena, czyli grupa procesów, o nazwie EDM. Ma pięć procesów. Drugi wiersz to Zarządzanie: cztery domeny, razem 32 procesy. Zapamiętajcie liczby 37, 5 i 32. Liczba 40 dotyczy nowszej wersji, COBIT 2019, i jest dystraktorem.
:::

:::sb ekspert
Referencyjny Model Procesu COBIT 5 jest następcą modelu procesów COBIT 4.1. Łączy też w sobie modele procesów Risk IT i Val IT, czyli wcześniejszych ram ISACA o ryzyku i wartości (FW-PL s. 33).
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: Model to wzorzec do dostosowania, a nie przepis. -->
# Czy organizacja musi mieć dokładnie te 37 procesów?

:::atom
twierdzenie: Referencyjny Model Procesu nie jest **normatywny**: organizacja definiuje własny zestaw procesów.
poLudzku: Lista jest wzorem, a nie obowiązkiem. Bierzesz to, czego potrzebujesz, ale nie gubisz żadnego celu.
zycie: Lista zakupów z gazetki to podpowiedź; kupujesz to, czego Twoja rodzina potrzebuje.
komenda: Komenda może połączyć dwa procesy w jeden, byle wszystkie cele były pokryte.
sprawdz: F :: Organizacja musi wdrożyć wszystkie 37 procesów bez zmian. :: Model nie jest normatywny, więc można go dostosować.
:::

:::zrodlo FW-PL 32
:::

:::teza interpretacyjna
sytuacja: Inspektorka Ostrowska z komendy wojewódzkiej pyta, dlaczego komenda w Modrzewiowie ma tylko 25 opisanych procesów, a nie 37.
pytanie: Czy mniej procesów niż w modelu oznacza niezgodność z COBIT 5?
teza: Nie. Liczy się to, czy procesy obejmują wszystkie potrzebne cele Ładu i Zarządzania, a nie to, czy jest ich dokładnie 37.
uzasadnienie: FW-PL mówi, że organizacja może układać procesy po swojemu, o ile obejmują wszystkie konieczne cele. W mniejszych organizacjach procesów może być mniej (s. 32).
powiazanie: Referencyjny Model Procesu; Zasada 1 (dostosowanie do kontekstu)
przyklad: Komenda łączy zarządzanie wiedzą i zarządzanie konfiguracją w jeden proces, ale sprawdza, czy cele obu są pokryte.
status: oficjalne
zrodlo: FW-PL 32
refleksja: Jak wykażesz inspektorce, że połączony proces pokrywa cele obu procesów z modelu?
:::

**Wniosek:** model jest wzorcem: organizacja może zmienić liczbę i układ procesów, jeśli pokrywa wszystkie potrzebne cele.

:::wykladowca
Słowo „normatywny” brzmi trudno, ale znaczy po prostu „obowiązujący jak przepis”. Model COBIT 5 nie jest normatywny. Podręcznik mówi wprost, że to nie jedyny możliwy model procesów. Każda organizacja musi zdefiniować własny zestaw. Lista zakupów z gazetki tylko podpowiada, co można kupić. Jest jednak jeden warunek. Wasze procesy muszą obejmować wszystkie potrzebne cele. Możecie połączyć dwa procesy w jeden albo podzielić jeden na trzy. Nie możecie po prostu zapomnieć o jakimś celu.
:::

:::pytanie-uczestnika
pytanie: Czyli mogę po prostu pominąć proces, który mi się nie podoba?
odpowiedz: Nie. Możesz połączyć albo inaczej nazwać procesy, ale cele pominiętego procesu muszą być pokryte gdzie indziej. Model mówi: układ dowolny, ale wszystkie konieczne cele obecne (FW-PL s. 32).
:::

---

<!-- slajd: mapa -->
# Gdzie to leży w COBIT 5?

:::mapa domena-edm
:::

Domena EDM to jedyna domena **Ładu** w Referencyjnym Modelu Procesu (5 z 37 procesów).

:::wykladowca
Spójrzcie na mapę. Zasada 5 podzieliła model procesów na dwie części. Po lewej Ład, po prawej Zarządzanie. Dziś zaglądamy do części Ładu. Jest tam tylko jedna domena, czyli jedna grupa procesów: EDM. Ma pięć procesów z 37. To mało, ale to procesy najważniejsze dla szefostwa. Zarządzanie ma cztery domeny i 32 procesy. Poznacie je w następnej lekcji. Zapamiętajcie układ: jedna domena Ładu na górze, cztery domeny Zarządzania pod nią.
:::

---

<!-- slajd: schemat -->
<!-- typ SD: B – objaśniający (tabela z objaśnieniem każdego wiersza) -->
# Jakich pięciu spraw pilnuje Ład? Procesy EDM01–EDM05 (Ilustracja 16 / Rysunek 16)

| Kod | Podręcznik PL | EN | Klucz |
|---|---|---|---|
| EDM01 | Zapewnienie i utrzymanie ładu korporacyjnego | Ensure Governance Framework Setting and Maintenance | rama Ładu (zasady gry dla całego Ładu) |
| EDM02 | Zapewnienie realizacji korzyści | Ensure Benefits Delivery | **korzyści** |
| EDM03 | Zapewnienie optymalizacji ryzyka | Ensure Risk Optimisation | **[[ryzyko]]** |
| EDM04 | Zapewnienie optymalizacji zasobów | Ensure Resource Optimisation | **zasoby** (ludzie, pieniądze, technologia) |
| EDM05 | Zapewnienie przejrzystości dotyczącej interesariuszy | Ensure Stakeholder Transparency | **interesariusze** (wszyscy, kogo dotyczą decyzje) |

:::zrodlo FW-PL 33 16
:::

:::progresja
0: Zapinasz pasy w samochodzie, bo wiesz, że wypadek może się zdarzyć.

1: W biurze robisz kopię ważnych plików na drugi dysk.

2: Program antywirusowy w komputerze blokuje podejrzane załączniki.

3: Organizacja ocenia, co może pójść źle z ważnym systemem i jakie byłyby skutki.

4: Zarząd ustala, ile ryzyka organizacja akceptuje, czyli apetyt na ryzyko.

5: W COBIT 5 robi to proces Ładu EDM03 (Zapewnienie optymalizacji ryzyka), a codzienną pracę z ryzykiem APO12 (Zarządzanie ryzykiem) (FW-PL s. 33).
:::

**Wniosek:** każdy proces EDM pilnuje jednej sprawy: ramy Ładu, korzyści, ryzyka, zasobów albo przejrzystości wobec interesariuszy.

:::wykladowca
Przejdźmy przez tabelę wiersz po wierszu. Domena nazywa się Evaluate, Direct and Monitor, czytamy „iweljuejt, dajrekt end moniter”. EDM01 ustala ramę Ładu, czyli zasady gry. EDM02 pilnuje korzyści, po angielsku „benefits”. EDM03 pilnuje ryzyka, „risk”. EDM04 pilnuje zasobów, „resources”: ludzi, pieniędzy i technologii. EDM05 dba o przejrzystość wobec interesariuszy, „stakeholder transparency”. Każda nazwa zaczyna się od „Ensure”, czyli „zapewnij”. Progresja pokazuje, jak zwykłe zapinanie pasów prowadzi do procesu EDM03.
:::

:::sb kontrowersja
Polska nazwa EDM01 z podręcznika mówi o „ładzie korporacyjnym”. Angielska mówi o ramie Ładu: *Governance Framework Setting and Maintenance*, czyli ustanowieniu i utrzymaniu struktury ramowej Ładu (FW-PL s. 33). Rozpoznawaj EDM01 po kodzie i słowie „rama”, a nie po dosłownym brzmieniu.
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: Środek listy EDM to trzy składniki Celu Ładu. -->
# Jak łatwo zapamiętać kolejność pięciu procesów EDM?

:::atom
twierdzenie: Procesy EDM02, EDM03 i EDM04 odpowiadają trzem składnikom **Celu** Ładu: korzyściom, ryzyku i zasobom.
poLudzku: Trzy środkowe procesy Ładu pilnują tego samego, co zawsze waży szefostwo: zysku, ryzyka i kosztów.
zycie: Przy kupnie domu ważysz trzy rzeczy: co zyskasz, czym ryzykujesz i ile Cię to kosztuje.
komenda: Wrzos pilnuje, żeby Syrena dawała szybszą pomoc, nie psuła się i nie zjadała budżetu.
sprawdz: P :: EDM04 dotyczy optymalizacji zasobów. :: Zasoby to trzeci składnik Celu Ładu.
:::

- **EDM01:** najpierw trzeba ustawić ramę Ładu.
- **EDM02–04:** trzy składniki [[tworzenie-wartosci|Celu Ładu]]: korzyści, ryzyko, zasoby.
- **EDM05:** na końcu przejrzystość wobec interesariuszy, czyli rozliczenie się z nimi.

:::uproszczenie
Kolejność „rama → korzyści/ryzyko/zasoby → interesariusze” to nasze ułatwienie pamięciowe.
:::

**Wniosek:** EDM01 to rama, EDM02–04 to korzyści, ryzyko i zasoby, a EDM05 to rozliczenie z interesariuszami.

:::wykladowca
Pięć nazw łatwo pomylić, więc potrzebujemy haczyka pamięciowego. Pamiętacie zasadę 1 i tworzenie wartości? Ład waży trzy rzeczy: korzyści, ryzyko i zasoby. To właśnie trzy środkowe procesy: EDM02, EDM03 i EDM04. Przed nimi stoi EDM01, bo najpierw trzeba ustawić zasady gry. Za nimi stoi EDM05, bo na końcu trzeba się rozliczyć z interesariuszami. Uwaga: ta kolejność to nasze ułatwienie, a nie opis z podręcznika. Na egzaminie liczy się kod i słowo-klucz.
:::

:::sb powiazanie
Lekcja 1.2: istotą działania organizacji jest tworzenie wartości, czyli równowaga między realizacją korzyści, optymalizacją ryzyka i wykorzystaniem zasobów (FW-PL s. 14). Procesy EDM02, EDM03 i EDM04 to ta sama trójka zamieniona w procesy Ładu.
:::

---

<!-- slajd: pulapka -->
<!-- podpowiedz: Rozpoznawaj proces po kodzie i słowie-kluczu, a nie po dokładnym brzmieniu. -->
# ⚠ Czy „Zapewnienie Transparentności Interesariuszy” to inny proces niż EDM05?

:::pulapka
Egzaminacyjne nazwy procesów mogą różnić się od podręcznika.
SP1 (Sample Paper 1, oficjalny egzamin próbny) pisze np. „Zapewnienie **Transparentności** Interesariuszy”, a podręcznik „Zapewnienie **przejrzystości** dotyczącej interesariuszy” (EDM05).
Rozpoznawaj procesy po **kodzie** i **słowie kluczowym z angielskiego**.
:::

:::kontekst psp
**Kasia się myli**
Kasia Nowik widzi w teście próbnym „Zapewnienie Transparentności Interesariuszy” i mówi: „Tego procesu nie znam, to pewnie coś spoza EDM”. Stary dyżurny Paweł Grab pokazuje jej tabelę: „Transparentność to przejrzystość. To ten sam EDM05”. Kasia dopisuje przy EDM05 oba słowa.
:::

:::egzamin
„Zapewnienie przejrzystości (transparentności) wobec interesariuszy” to **proces** Ładu EDM05, a nie komponent Podejścia do Ładu.
Referencyjny Model Procesu tworzy wymiar procesu w ocenie zdolności (dzień 4).
:::

**Wniosek:** ten sam proces może mieć na egzaminie inną nazwę niż w podręczniku, więc rozpoznawaj go po kodzie i słowie-kluczu.

:::wykladowca
Ta pułapka dotyczy słów, a nie wiedzy. Polskie nazwy procesów nie są jednolite. Egzamin próbny pisze „transparentność”, a podręcznik „przejrzystość”. To ten sam proces, EDM05. Kasia nie rozpoznała go, bo uczyła się jednej wersji na pamięć. Jak się przed tym bronić? Uczcie się kodu i słowa-klucza z angielskiego. Dla EDM05 to „transparency”. Gdy w pytaniu zobaczycie słowo podobne do „transparency”, od razu myślcie o EDM05. Ta sama metoda zadziała przy procesach Zarządzania w następnej lekcji.
:::

---

<!-- slajd: wlasne-slowa -->
# Czy wymienisz 5 procesów EDM po kodzie i słowie-kluczu?

:::wlasne-slowa
Wymień 5 procesów EDM (kod + słowo-klucz).
???
- EDM01 – rama Ładu (ustanowienie i utrzymanie)
- EDM02 – korzyści
- EDM03 – ryzyko
- EDM04 – zasoby
- EDM05 – przejrzystość wobec interesariuszy
:::

**Wniosek:** kod i jedno słowo-klucz wystarczą, żeby rozpoznać każdy proces EDM na egzaminie.

:::wykladowca
Teraz sprawdźcie się. Zasłońcie tabelę i napiszcie na kartce kody od EDM01 do EDM05. Przy każdym dopiszcie jedno słowo-klucz. Możecie pomóc sobie haczykiem pamięciowym. Najpierw rama. Potem trójka z tworzenia wartości: korzyści, ryzyko, zasoby. Na końcu interesariusze. Jeśli pamiętacie angielskie słowa, dopiszcie je też: framework, benefits, risk, resources, transparency. Dopiero potem odsłońcie wzór. Jeśli coś się nie zgadza, wróćcie do tabeli i przeczytajcie ten wiersz na głos.
:::

---

<!-- slajd: wlasne-slowa -->
# Dlaczego Referencyjny Model Procesu nie jest obowiązkowym przepisem?

:::wlasne-slowa
Dlaczego Referencyjny Model Procesu nie jest obowiązkowym przepisem?
???
Bo każda organizacja jest inna. Komenda straży potrzebuje innych procesów niż bank. Model jest wzorcem: pomaga niczego nie przeoczyć, ale pozwala dopasować procesy do własnych celów.
:::

**Wniosek:** model nie jest przepisem, bo organizacje są różne, ale pomaga nie zgubić żadnego celu.

:::wykladowca
To pytanie sprawdza, czy rozumiecie sens słowa „nienormatywny”. Pomyślcie o różnicy między komendą straży a bankiem. Obie organizacje mają informatykę, ale zupełnie inne zadania. Gdyby model był przepisem, jedna z nich musiałaby robić rzeczy bez sensu. Spróbujcie odpowiedzieć w dwóch albo trzech zdaniach. W pierwszym powiedzcie, dlaczego organizacje się różnią. W drugim, do czego służy model. W trzecim, jaki jest warunek dostosowania. Jako mentorzy usłyszycie to pytanie często, więc warto mieć gotową odpowiedź.
:::

---

<!-- slajd: rozwiazany -->
<!-- podpowiedz: Szukasz jednego z pięciu procesów EDM ze słowem „ryzyko”. -->
# Który proces Ładu pilnuje, żeby ryzyko awarii było do zniesienia?

:::rozwiazany
Komendantka Wrzos chce mieć pewność, że ryzyko awarii Syreny jest na poziomie, który komenda może znieść. Który proces Ładu się tym zajmuje?
- A. EDM02 Zapewnienie realizacji korzyści
- B. EDM03 Zapewnienie optymalizacji ryzyka
- C. EDM06 Zapewnienie bezpieczeństwa systemów
- D. Monitoruj – praktyka każdego procesu EDM
+++
**Krok 1 – co jest pytane?** Słowa-klucze: **ryzyko** i **proces Ładu**. Szukasz jednego procesu z domeny EDM.
+++
**Krok 2 – jaka kategoria COBIT?** Referencyjny Model Procesu, domena EDM: 5 procesów (rama, korzyści, ryzyko, zasoby, przejrzystość).
+++
**Krok 3 – eliminacja.** A – *prawda nie na temat*: to prawdziwy proces EDM, ale o korzyściach, a nie o ryzyku. C – *fałsz*: EDM ma tylko 5 procesów, więc EDM06 nie istnieje. D – *inna kategoria*: Monitoruj to praktyka wewnątrz procesów EDM, a nie osobny proces.
+++
**Odpowiedź: B.** Dlaczego: EDM03 to proces Ładu ze słowem-kluczem „ryzyko” (EN *Ensure Risk Optimisation*).
:::

**Wniosek:** gdy pytanie łączy „Ład” i „ryzyko”, odpowiedzią jest EDM03 Zapewnienie optymalizacji ryzyka.

:::wykladowca
Rozwiążmy to razem. Najpierw słowa-klucze: ryzyko i proces Ładu. Szukamy więc jednego z pięciu procesów EDM. Teraz eliminacja. Odpowiedź A to prawdziwy proces, ale o korzyściach. To prawda nie na temat. Odpowiedź C brzmi poważnie, ale EDM06 nie istnieje. Domena EDM ma tylko pięć procesów. Odpowiedź D to częsta pułapka. Monitoruj to praktyka w każdym procesie EDM, a nie osobny proces. Zostaje B, czyli EDM03. Po angielsku: Ensure Risk Optimisation.
:::

---

<!-- slajd: zapamietaj -->
# Jak streścić model procesów jednym równaniem?

:::zapamietaj
**37 = 5 + 32.** EDM: rama · korzyści · ryzyko · zasoby · przejrzystość. Każdy proces EDM ma praktyki Oszacuj, Kieruj, Monitoruj.
:::

:::wykladowca
Zapamiętajcie jedno równanie: trzydzieści siedem równa się pięć plus trzydzieści dwa. Pięć to procesy Ładu w domenie EDM. Trzydzieści dwa to procesy Zarządzania w czterech domenach. Do tego pięć słów-kluczy EDM: rama, korzyści, ryzyko, zasoby, przejrzystość. I jedno zdanie o praktykach. Każdy proces EDM ma w środku trzy praktyki: Oszacuj, Kieruj i Monitoruj. Powiedzcie to na głos dwa razy. Na egzaminie te liczby pojawiają się bardzo często, także w dystraktorach.
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący -->
# Co już umiesz i co dalej?

- Umiesz powiedzieć, że model COBIT 5 ma 37 procesów: 5 Ładu i 32 Zarządzania.
- Umiesz wymienić 5 procesów EDM po kodzie i słowie-kluczu.
- Umiesz wyjaśnić, że model nie jest normatywny.

:::teza egzaminacyjna
teza: Oszacuj, Kieruj i Monitoruj to praktyki wewnątrz każdego procesu EDM, a nie osobne procesy; odpowiedź z „procesem Monitoruj” albo „EDM06” jest błędna.
uzasadnienie: FW-PL opisuje domenę Ładu jako pięć procesów, w których zdefiniowano praktyki oceny, kierowania i monitorowania (s. 32). Ilustracja 16 pokazuje tylko EDM01–EDM05 (s. 33).
powiazanie: Referencyjny Model Procesu; domena EDM
przyklad: „Który proces EDM monitoruje realizację kierunku?” – podchwytliwe; monitorowanie jest praktyką w każdym z pięciu procesów.
status: uproszczenie
refleksja: Jak wytłumaczysz koledze różnicę między procesem a praktyką?
:::

**Co dalej i dlaczego:** znasz 5 procesów Ładu, więc w lekcji 1.13 poznasz pozostałe 32 procesy Zarządzania w czterech domenach.

:::wykladowca
Podsumujmy. Referencyjny Model Procesu, czyli Process Reference Model, ma 37 procesów. Pięć należy do Ładu, w domenie EDM. Trzydzieści dwa należą do Zarządzania. Model nie jest przepisem, tylko wzorcem do dostosowania. Pięć procesów EDM pilnuje ramy Ładu, korzyści, ryzyka, zasobów i przejrzystości. Zwróćcie uwagę na tezę egzaminacyjną. Oszacuj, Kieruj i Monitoruj to praktyki w środku procesów, a nie osobne procesy. W następnej lekcji poznacie pozostałe 32 procesy Zarządzania.
:::
