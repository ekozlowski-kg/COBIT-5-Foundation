---
id: pr-16-atlas-apo-a
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: "APO01–APO04: Zarządzanie najpierw organizuje pracę IT, potem wyznacza kierunek, układa architekturę i sprawdza nowości"
lekcja: "1.16"
dzien: 6
sylabus: [PR-01-04]
minuty: 17
priorytet: 2
wielkiObraz: 5
cel:
  - "Potrafię rozpoznać APO01, APO02, APO03 i APO04 po kodzie, nazwie polskiej i słowie-kluczu z nazwy angielskiej."
  - "Potrafię odróżnić APO01 od EDM01, APO02 od APO03 i APO04 od APO05."
wprowadza: [proc-apo01, proc-apo02, proc-apo03, proc-apo04]
wymaga: [pr-15-atlas-edm-b]
twierdzenia:
  - "APO01 organizuje system zarządzania IT: role, polityki, procesy i ich doskonalenie."
  - "APO02 wyznacza strategię IT: stan obecny, stan docelowy, lukę i mapę drogową."
  - "APO03 opisuje, jak działania, informacje, aplikacje i technologia łączą się w całość, i ustala zasady budowy."
  - "APO04 rozpoznaje i sprawdza nowe możliwości, a wynikiem jest rekomendacja, a nie decyzja o inwestycji."
typowePytania:
  - { pytanie: "„Metodyka” w nazwie APO01 to metodyka prowadzenia projektów?", odpowiedz: "Nie. Chodzi o framework, czyli cały system zarządzania IT. Projekty prowadzi BAI01." }
  - { pytanie: "Strategia i architektura opisują przyszłość. To nie jest jedno i to samo?", odpowiedz: "Nie. Strategia (APO02) mówi, dokąd idziemy i w jakiej kolejności. Architektura (APO03) mówi, jak całość jest poskładana i według jakich zasad." }
  - { pytanie: "Udany pilotaż w APO04 oznacza, że wdrażamy rozwiązanie?", odpowiedz: "Nie. Pilotaż kończy się rekomendacją. O inwestycji decyduje portfel (APO05), a wdrożenie prowadzi domena BAI." }
zgadnij: [q-atl-apo-a-01]
cwiczenia: [q-atl-apo-a-02, q-atl-apo-a-03, q-atl-apo-a-04]
zapas: [q-atl-apo-a-05, q-atl-apo-a-06]
kontrolaAutora: { data: null, kto: null, uwagi: "atlas procesów – do przeglądu" }
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Od czego zacząć, gdy komendantka ustaliła już zasady?

:::kontekst psp
**Cztery kartki na biurku Sikory**
Komendantka Anna Wrzos powołała Radę ds. Informatyki i ustaliła zasady decydowania. Kpt. Marek Sikora, naczelnik informatyki, kładzie na biurku cztery kartki. Na pierwszej: kto w wydziale za co odpowiada. Na drugiej: plan dla Syreny (systemu do wysyłania alarmów) na trzy lata. Na trzeciej: rysunek, jak Syrena łączy się z innymi systemami, bo numery OSP (ochotniczej straży) leżą w trzech miejscach. Na czwartej: nowa aplikacja, o której przeczytała informatyczka Ola Dudek. To cztery pierwsze procesy APO: APO01 (organizacja), APO02 (strategia), APO03 (architektura) i APO04 (innowacje).
:::

**Wniosek:** zanim Zarządzanie cokolwiek zbuduje, musi się zorganizować, wyznaczyć kierunek, ułożyć całość i sprawdzić nowości.

:::wykladowca
Domenę EDM macie już za sobą. Wchodzimy do domeny APO, czyli Dostosuj, Planuj i Organizuj. Tu pracuje naczelnik Sikora, a nie komendantka. Ma przed sobą cztery kartki i każda to osobny proces. Pierwsza mówi, jak zorganizować pracę wydziału. Druga wyznacza kierunek na kilka lat. Trzecia pokazuje, jak systemy i dane mają do siebie pasować. Czwarta dotyczy nowinek, które warto sprawdzić. Wszystkie cztery to planowanie, a nie budowa. Budową zajmie się później domena BAI.
:::

:::pytanie-uczestnika
pytanie: Czy Sikora może robić to bez zgody komendantki?
odpowiedz: Pracuje w ramach zasad i kierunku, które ustaliła. Wyniki, na przykład strategię, przedstawia jej do oceny.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (karta procesu) -->
<!-- podpowiedz: APO01 = role, polityki i procesy zarządzania IT. -->
# APO01: jak zorganizować pracę informatyki, zanim cokolwiek zaplanujemy?

**APO01** – [[proc-apo01|Zarządzanie metodyką zarządzania IT]]
EN: *Manage the IT Management Framework* (wym. „menydż de ajti menydżment frejmłerk”)

**Po ludzku:** szef informatyki ustala, jak jego dział jest zorganizowany: kto za co odpowiada i według jakich zasad pracuje.

*Nazwa egzaminacyjna nie jest potwierdzona i może brzmieć inaczej, np. ze „strukturą ramową” zamiast „metodyki”.* Rozpoznawaj proces po kodzie APO01 i słowach EN *IT Management Framework*.

:::kontekst zycie
Zakładasz z sąsiadami ogródek. Spisujecie, kto podlewa, kto kupuje nasiona i kto prowadzi zeszyt wydatków. Ustalacie też zastępstwa na urlopy.
:::

:::glebiej proc-apo01
Szczebel „skrajny” wyjaśnia, dlaczego „metodyka” w nazwie to nie metodyka projektowa.
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** APO01 buduje system zarządzania IT: role, polityki, procesy i ich ciągłe doskonalenie.

:::wykladowca
Pierwszy proces domeny APO to APO01. Po angielsku: Manage the IT Management Framework. Podręcznik tłumaczy to jako „Zarządzanie metodyką zarządzania IT”. Słowo „metodyka” myli, bo kojarzy się z prowadzeniem projektów. Tu chodzi o cały system zarządzania IT. Sikora wyznacza właścicieli procesów, pisze politykę IT komendy i rozpisuje role. Robi to w zasadach, które komendantka ustaliła w EDM01. Zapamiętajcie: EDM01 mówi, kto decyduje. APO01 mówi, jak zorganizować pracę, żeby te decyzje wykonać.
:::

:::sb skrot
*Manage* – zarządzaj; *IT Management Framework* – struktura ramowa, czyli system zarządzania IT. Na egzaminie *framework* to „struktura ramowa”.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (karta procesu) -->
<!-- podpowiedz: APO02 = dokąd i w jakiej kolejności (strategia IT). -->
# APO02: dokąd ma dojść informatyka za kilka lat i w jakiej kolejności?

**APO02** – [[proc-apo02|Zarządzanie strategią]]
EN: *Manage Strategy* (wym. „menydż stretedżi”)

**Po ludzku:** plan na kilka lat: dokąd ma dojść informatyka, żeby pomóc organizacji, i jak tam dojść krok po kroku.

*Nazwa egzaminacyjna nie jest potwierdzona i może brzmieć inaczej.* Rozpoznawaj proces po kodzie APO02 i słowie EN *Strategy*.

:::kontekst zycie
Chcesz za trzy lata mieszkać we własnym mieszkaniu. Sprawdzasz, ile masz teraz, ile potrzeba i czego brakuje. Rozpisujesz kroki: oszczędzanie, kredyt, przeprowadzka.
:::

:::glebiej proc-apo02
Szczebel „skrajny” stawia obok siebie dwa rysunki Sikory: strategię i architekturę.
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** APO02 to strategia IT: stan obecny, stan docelowy, luka i kolejność kroków.

:::wykladowca
Drugi proces to APO02, po angielsku Manage Strategy. To strategia informatyki, a nie całej organizacji. Strategię komendy ustala jej kierownictwo, a strategia IT ma ją wspierać. Sikora spisuje, jak Syrena działa dziś i jak ma działać za trzy lata. Różnica między tymi stanami to luka. Kroki, które ją zamkną, układa w mapę drogową: zasilanie, drugi serwer, aplikacja dla OSP. Plan przedstawia komendantce. Uwaga: strategię IT opracowuje Zarządzanie. Ład ją ocenia i zatwierdza, ale jej nie pisze.
:::

:::sb skrot
*Manage* – zarządzaj; *Strategy* – strategia. Słowa-klucze w pytaniach: stan obecny i docelowy, luka, mapa drogowa.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (karta procesu) -->
<!-- podpowiedz: APO03 = jak całość jest poskładana i według jakich zasad. -->
# APO03: jak systemy i dane organizacji mają do siebie pasować?

**APO03** – [[proc-apo03|Zarządzanie architekturą korporacyjną]]
EN: *Manage Enterprise Architecture* (wym. „menydż enterprajz arkitekczer”)

**Po ludzku:** plan, jak systemy, dane i działania organizacji łączą się ze sobą i według jakich reguł je budujemy.

*Nazwa egzaminacyjna nie jest potwierdzona i może brzmieć inaczej, np. „architektura przedsiębiorstwa”.* Rozpoznawaj proces po kodzie APO03 i słowach EN *Enterprise Architecture*.

:::kontekst zycie
Przed remontem rysujesz plan mieszkania: gdzie biegną rury, prąd i internet. Ustalasz zasadę, że wszystkie gniazdka są w jednym standardzie. Dzięki temu nowa pralka pasuje bez kucia ścian.
:::

:::glebiej proc-apo03
Szczebel „skrajny”: dlaczego tabela serwerów i wersji to jeszcze nie architektura.
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** APO03 opisuje budowę całości w warstwach i ustala zasady, do których musi pasować każdy nowy system.

:::wykladowca
Trzeci proces to APO03, po angielsku Manage Enterprise Architecture. Architektura korporacyjna to nie plan budynków. To opis, jak działania organizacji, informacje, aplikacje i technologia łączą się w całość. Do tego dochodzą zasady budowy. Sikora odkrył, że numery OSP leżą w trzech miejscach. Ustala więc zasadę: jedna baza numerów dla wszystkich systemów. Każdy nowy moduł Syreny musi z niej korzystać. Rysunek 39 we Frameworku podaje architekturę korporacyjną jako kategorię umiejętności domeny APO.
:::

:::sb ekspert
FW-PL, il. 39 (s. 88): „Architektura korporacyjna”, „Strategia IT” i „Innowacje” to przykłady kategorii umiejętności domeny APO. To potwierdza, że te prace są planowaniem, a nie budową.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (karta procesu) -->
<!-- podpowiedz: APO04 = rozpoznanie i pilotaż; wynik to rekomendacja. -->
# APO04: jak sprawdzić nowinkę, zanim wydamy na nią pieniądze?

**APO04** – [[proc-apo04|Zarządzanie innowacjami]]
EN: *Manage Innovation* (wym. „menydż inowejszyn”)

**Po ludzku:** śledzenie nowinek i sprawdzanie, które naprawdę pomogą organizacji, zanim wyda się na nie pieniądze.

*Nazwa egzaminacyjna nie jest potwierdzona i może brzmieć inaczej.* Rozpoznawaj proces po kodzie APO04 i słowie EN *Innovation*.

:::kontekst zycie
Słyszysz o pompach ciepła. Zanim wymienisz piec, pytasz sąsiada, który ją ma, i liczysz rachunki. Dopiero potem decydujesz.
:::

:::glebiej proc-apo04
Szczebel „skrajny” odróżnia APO04 od atrybutu oceny zdolności, który też mówi o innowacji.
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** APO04 rozpoznaje i sprawdza nowe możliwości, a kończy się rekomendacją, a nie zakupem.

:::wykladowca
Czwarty proces to APO04, po angielsku Manage Innovation. Tu organizacja śledzi trendy i szuka szans, zanim wyda pieniądze. Informatyczka Ola Dudek czyta o aplikacji, w której strażak potwierdza alarm jednym kliknięciem. Proponuje próbę w OSP Zawilce. Po miesiącu opisuje wyniki Sikorze. Na tym APO04 się kończy. Decyzja, czy aplikacja wygra z innymi inwestycjami, zapada w portfelu, czyli w APO05. Pełne wdrożenie poprowadzi domena BAI. APO04 nie obejmuje też każdej zmiany w IT, bo zmiany prowadzi BAI06.
:::

:::sb skrot
*Manage* – zarządzaj; *Innovation* – innowacja. Słowa-klucze: trendy technologiczne, pilotaż, *proof of concept* (sprawdzenie pomysłu w małej skali), rekomendacja.
:::

---

<!-- slajd: porownanie -->
<!-- typ SD: E – porównawczy -->
# Cztery procesy planowania i ich sąsiedzi: jak je rozdzielić?

:::mapa domena-apo
APO01–APO04 to pierwsze cztery z 13 procesów domeny APO.
:::

| Para | Proces z tej lekcji | Sąsiad | Pytanie rozstrzygające |
|---|---|---|---|
| APO01 / EDM01 | APO01 organizuje role, polityki i procesy IT (Zarządzanie) | EDM01 ustala, kto i jak decyduje o IT (Ład) | Organizacja pracy IT czy zasady decydowania? |
| APO02 / APO03 | APO02 wyznacza kierunek i kolejność kroków | APO03 opisuje budowę całości i zasady budowy | „Dokąd i w jakiej kolejności?” czy „jak to jest poskładane?” |
| APO04 / APO05 | APO04 sprawdza nowość i daje rekomendację | APO05 wybiera inwestycje do portfela | Sprawdzamy pomysł czy wybieramy, w co inwestować? |
| APO03 / BAI10 | APO03 to model i zasady całości | BAI10 to spis konkretnych elementów i ich wersji | Zasady całości czy lista elementów? |

APO05 poznasz w lekcji 1.17, a BAI10 w części atlasu o domenie BAI.

**Wniosek:** w planowaniu rozstrzyga rodzaj wyniku: organizacja pracy, kierunek, model całości albo rekomendacja.

:::wykladowca
Ten slajd zbiera pary, które mylą się najczęściej. APO01 i EDM01 znacie z poprzednich lekcji: organizacja pracy IT kontra zasady decydowania. APO02 i APO03 oba opisują przyszłość. Strategia mówi, dokąd idziemy i co zrobić najpierw. Architektura mówi, jak całość ma być poskładana. APO04 i APO05 dzieli moment decyzji. Pilotaż daje rekomendację, a portfel wybiera inwestycję. Ostatnia para to architektura i konfiguracja. Tabela serwerów z wersjami to jeszcze nie architektura, tylko spis elementów w BAI10. Pytajcie zawsze, jaki jest wynik pracy.
:::

:::pytanie-uczestnika
pytanie: Czy jedna osoba może pracować we wszystkich czterech procesach?
odpowiedz: Tak. W małej komendzie Sikora robi wszystkie cztery. Proces to rodzaj pracy, a nie stanowisko.
:::

---

<!-- slajd: rozwiazany -->
<!-- podpowiedz: „Jak systemy wymieniają dane” i „zasada dla każdego nowego systemu” to architektura. -->
# Rozwiązujemy razem

:::rozwiazany
Kierownik informatyki w urzędzie gminy rysuje, jak system podatkowy, ewidencja mieszkańców i elektroniczna skrzynka podawcza wymieniają dane. Ustala zasadę: każdy nowy system korzysta z jednej bazy adresów. Który proces COBIT 5 najlepiej opisuje tę pracę?
- A. APO02 Zarządzanie strategią
- B. APO04 Zarządzanie innowacjami
- C. EDM01 Zapewnienie i utrzymanie ładu korporacyjnego
- D. APO03 Zarządzanie architekturą korporacyjną
+++
**Krok 1 – co jest pytane?** Słowa-klucze: **jak systemy wymieniają dane** i **zasada dla każdego nowego systemu**.
+++
**Krok 2 – jaka kategoria COBIT?** Pracuje kierownik informatyki, więc to Zarządzanie. Opis budowy całości i zasady budowy to architektura w domenie APO.
+++
**Krok 3 – eliminacja.** A – *prawda nie na temat*: strategia wyznacza kierunek i kolejność, a nie budowę i zasady. B – *inna kategoria*: innowacje to sprawdzanie nowinek, a tu nic nowego się nie testuje. C – *inna kategoria*: EDM01 to Ład i zasady decydowania, a nie zasady budowy systemów.
+++
**Odpowiedź: D.** Dlaczego: opis, jak systemy i dane łączą się w całość, oraz zasady budowy to APO03.
:::

:::wykladowca
Zacznijmy od słów-kluczy. „Jak systemy wymieniają dane” opisuje budowę całości. „Zasada dla każdego nowego systemu” to zasada architektury. Obie rzeczy wskazują APO03. Teraz sprawdźmy, dlaczego inne odpowiedzi kuszą. Strategia też patrzy w przyszłość, ale mówi, dokąd idziemy. Innowacje kuszą, bo chodzi o nowe systemy, ale nikt tu nie testuje nowinki. EDM01 kusi słowem „zasady”, ale to zasady decydowania w Ładzie. Zapamiętajcie: słowo „zasada” występuje w wielu procesach, więc pytajcie, zasada czego.
:::

---

<!-- slajd: wlasne-slowa -->
<!-- typ SD: F – syntetyzujący -->
# Co już umiesz: cztery procesy planowania

- **APO01** (*IT Management Framework*): role, polityki i procesy IT ≠ EDM01, czyli zasady decydowania.
- **APO02** (*Strategy*): dokąd i w jakiej kolejności ≠ APO03, czyli jak to jest poskładane.
- **APO03** (*Enterprise Architecture*): model i zasady całości ≠ BAI10, czyli spis elementów.
- **APO04** (*Innovation*): rozpoznanie i pilotaż ≠ APO05, czyli wybór inwestycji.

:::wlasne-slowa
Wytłumacz Kasi Nowik w 3–4 zdaniach, czym różni się APO02 od APO03. Użyj przykładu z Syreną.
???
„APO02 to strategia IT. Sikora pisze w niej, jak Syrena ma działać za trzy lata i co zrobić najpierw: zasilanie, drugi serwer, aplikację dla OSP. APO03 to architektura. Sikora rysuje w niej, jak Syrena łączy się z bazą numerów i bramką SMS, i ustala zasadę: jedna baza numerów dla wszystkich. Strategia mówi, dokąd idziemy, a architektura, jak całość ma być poskładana.”
:::

**Co dalej i dlaczego:** następna lekcja to 2.1 „Aktywator 1 – Zasady, Polityki i Struktury ramowe”. Po niej będziesz umieć: odróżnić zasadę od polityki i powiedzieć, co musi opisywać struktura polityk.

:::wykladowca
Podsumujmy cztery procesy planowania. APO01 organizuje pracę IT. APO02 wyznacza kierunek. APO03 układa całość i zasady budowy. APO04 sprawdza nowości. Każdy z nich ma sąsiada, z którym się myli. Teraz wytłumaczcie Kasi Nowik różnicę między strategią a architekturą. Kasia zna Syrenę, więc mówcie o Syrenie. Jeśli w waszym wyjaśnieniu pojawi się słowo „kolejność”, to mówicie o strategii. Jeśli pojawi się „połączenie” albo „zasada budowy”, to mówicie o architekturze.
:::
