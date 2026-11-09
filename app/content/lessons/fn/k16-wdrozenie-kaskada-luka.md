---
id: fn-k16-wdrozenie-kaskada-luka
modul: FN
modulNazwa: Finał – skrajnie biegły
temat: Pytanie przekrojowe – wdrożenie, kaskada celów i luka zdolności
lekcja: "10.16"
dzien: 11
format: krotki
sylabus: [EX-00-01, IM-02-05, PC-01-02]
minuty: 7
zgadnij: []
cwiczenia: [q-fnk-16-1, q-fnk-16-2, q-fnk-16-3]
zapas: [q-fnk-16-z1]
wprowadza: []
wymaga: [fn-k15-pytanie-przekrojowe]
cel: "Potrafię połączyć fazy 1–3 wdrożenia z kaskadą celów i obliczyć lukę zdolności atrybut po atrybucie."
priorytet: 3
---

<!-- slajd: start -->
# Od czego zacząć?

Sklep internetowy co roku pada w okresie świątecznym. Teraz zapowiedziano audyt zewnętrzny.

Dyrektor IT chce od razu wdrożyć wszystkie 37 procesów, bo „COBIT 5 każe mieć wszystko”. Skąd wiadomo, od których zacząć?

:::wykladowca
To typowy scenariusz przekrojowy. Jedno zdanie dotyczy wdrożenia, drugie kaskady celów, a pytanie może skończyć się na ocenie zdolności. Rozłóżmy go na części.
:::

---

<!-- slajd: pojecie -->
# Faza 1: ból i impuls

Awarie co roku to [[punkty-zapalne|punkt zapalny]] (*Pain point*) – coś już boli. Zapowiedź audytu to [[zdarzenia-wyzwalajace|zdarzenie wyzwalające]] (*Trigger event*; w podręczniku: czynnik inicjujący) – daje impuls.

> „Identyfikuje się w niej aktualne punkty zapalne oraz czynniki inicjujące”

:::zrodlo FW-PL 38
:::

:::wykladowca
Oba fakty rozpoznaje się w fazie 1 „Jakie są wyznaczniki?”. Ból trwa od dawna, impuls przychodzi z zewnątrz albo z wewnątrz. Podręcznik nazywa zdarzenia wyzwalające „czynnikami inicjującymi”, a egzamin – zdarzeniami wyzwalającymi.
:::

---

<!-- slajd: przyklad -->
# Faza 2: zakres z kaskady

Sklep nie wdraża 37 procesów. Bierze cel organizacji „Ciągłość i dostępność usług biznesowych”, przechodzi do celów IT i dochodzi do kilku procesów, np. DSS04 i BAI04.

> „definiuje się zakres inicjatywy związanej z wdrożeniem lub doskonaleniem z wykorzystaniem mapowania celów przedsiębiorstwa na cele związane z IT”

:::zrodlo FW-PL 38
:::

:::wykladowca
Tu wdrożenie spotyka Zasadę 1. Zakres ustala się w fazie 2 przez mapowanie celów organizacji na cele związane z IT i procesy. Kaskada celów wskazuje więc priorytety wdrożenia. Konkretne procesy w przykładzie to ilustracja kursu, nie odczyt z tabeli.
:::

---

<!-- slajd: przyklad -->
# Faza 2 i 3: luka zdolności

Stan obecny (faza 2): PA 1.1 = P, PA 2.1 = W, PA 2.2 = C. Cel (faza 3): poziom 2.

Luka: tylko **PA 2.2** – z C co najmniej do W. PA 1.1 i PA 2.1 już spełniają regułę.

> „W trakcie fazy 3 określa się cel procesu doskonalenia”

:::zrodlo FW-PL 38
:::

:::wykladowca
Faza 2 daje stan obecny, w tym ocenę zdolności procesu. Faza 3 daje cel. Luka to atrybuty poniżej minimum dla poziomu docelowego. Dla poziomu 2: PA 2.1 i PA 2.2 co najmniej W, PA 1.1 równe P. Sprawdzacie każdy atrybut osobno. Brakuje tylko PA 2.2.
:::

:::sb przyklad
Ten sam profil, ale cel: poziom 3. Luka rośnie: PA 2.1 i PA 2.2 muszą mieć P, a PA 3.1 i PA 3.2 – co najmniej W. Cel wyższy o jeden poziom podnosi wymagania także dla niższych atrybutów.
:::

---

<!-- slajd: nie-jest -->
# Czym luka NIE jest?

- **≠ średnia ocen** – każdy atrybut sprawdzasz osobno.
- **≠ wszystko do P** – na poziomie docelowym wystarczy W.
- **≠ lista 37 procesów** – zakres wynika z kaskady celów.

:::wykladowca
Trzy dystraktory wracają w pytaniach o lukę. Średnia ocen nie istnieje w modelu. Podnoszenie wszystkiego do P myli poziom oceniany z niższymi. A wdrażanie wszystkich procesów ignoruje fazę 2. Każdy z nich to inna pułapka, ale reguła jest jedna.
:::

---

<!-- slajd: wniosek -->
# Co zapamiętać

**Wniosek:** ból i impuls uruchamiają wdrożenie, kaskada celów wyznacza zakres, a luka to atrybuty poniżej minimum dla celu.

:::zapamietaj
- Faza 1: punkty zapalne i zdarzenia wyzwalające.
- Faza 2: zakres z mapowania celów + stan obecny.
- Faza 3: cel; luka liczona atrybut po atrybucie.
:::

:::wykladowca
Gdy w jednym pytaniu widzicie ból, impuls i litery skali, wiecie już, gdzie szukać reguły. Ostatnia lekcja finału to przypadek graniczny: kto monitoruje, Ład czy kierownictwo?
:::
