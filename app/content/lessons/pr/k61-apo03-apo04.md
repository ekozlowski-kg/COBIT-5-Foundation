---
id: pr-k61-apo03-apo04
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: "APO03 i APO04: architektura korporacyjna i innowacje"
lekcja: "1.61"
dzien: 6
format: krotki
sylabus: [PR-01-04]
minuty: 7
zgadnij: []
cwiczenia: ["q-fin-pliki-29", "q-proces-apo01"]
zapas: ["q-proces-apo02"]
wprowadza: [proc-apo03, proc-apo04]
wymaga: [pr-k60-apo01-apo02]
cel: "Potrafię odróżnić APO03 (jak całość jest poskładana) od APO02 (dokąd idziemy) i APO04 (sprawdzanie nowości) od APO05 (wybór inwestycji)."
priorytet: 2
---

<!-- slajd: start -->
# Plan mieszkania i nowa pompa ciepła

Przed remontem rysujesz, gdzie biegną rury, prąd i internet. Ustalasz zasadę: wszystkie gniazdka w jednym standardzie.

Sąsiad poleca pompę ciepła. Zanim wymienisz piec, pytasz go o rachunki.

Pierwsza praca to plan całości. Druga to sprawdzenie nowości.

:::wykladowca
Dwie domowe sytuacje, dwa rodzaje planowania. Rysunek mieszkania mówi, jak wszystko jest połączone i według jakich reguł. Sprawdzanie pompy ciepła to próba nowości, zanim wydasz pieniądze. W organizacji te dwie prace mają osobne procesy w domenie APO.
:::

---

<!-- slajd: pojecie -->
# APO03 – jak całość jest poskładana

**[[proc-apo03]]** (*Manage Enterprise Architecture*)

**Po co:** opisuje, jak działania organizacji, informacje, aplikacje i technologia łączą się w całość. Ustala zasady, do których musi pasować każdy nowy system.

**Przykład:** szpital ustala, że każdy system korzysta z jednej bazy pacjentów.

> „APO03 Zarządzanie architekturą korporacyjną”

:::zrodlo FW-PL 33 16
:::

:::wykladowca
APO03 to architektura korporacyjna, po angielsku Enterprise Architecture. To nie plan budynków. To opis, jak części organizacji i jej systemy łączą się ze sobą. Do tego dochodzą zasady budowy, na przykład jedna baza pacjentów dla wszystkich systemów. Podręcznik pokazuje, że do tego procesu odwzorowano metodykę architektury TOGAF.
:::

---

<!-- slajd: pojecie -->
# APO04 – co nowego warto sprawdzić

**[[proc-apo04]]** (*Manage Innovation*)

**Po co:** śledzi nowe technologie i trendy. Sprawdza w małej skali, które pomogą organizacji. Wynikiem jest rekomendacja.

**Przykład:** bank przez miesiąc testuje czat z klientem w jednym oddziale i opisuje wyniki.

> „APO04 Zarządzanie innowacjami”

:::zrodlo FW-PL 33 16
:::

:::wykladowca
APO04 to innowacje. Organizacja szuka szans, zanim wyda duże pieniądze. Typowe słowa w pytaniach to: trend technologiczny, pilotaż, próba w małej skali. Ważne jest to, czym się kończy. Kończy się rekomendacją, a nie decyzją o inwestycji ani pełnym wdrożeniem.
:::

---

<!-- slajd: porownanie -->
# Z kim mylą się APO03 i APO04?

| Para | Pytanie rozstrzygające |
|---|---|
| APO03 / APO02 | „Jak całość jest poskładana?” czy „dokąd i w jakiej kolejności?” |
| APO03 / BAI10 | Model i zasady całości czy spis konkretnych elementów? |
| APO04 / APO05 | Sprawdzamy nowość czy wybieramy, w co inwestować? |

:::wykladowca
Strategia i architektura obie patrzą w przyszłość. Strategia mówi, dokąd idziemy i co zrobić najpierw. Architektura mówi, jak całość ma być poskładana. Tabela serwerów z numerami wersji to jeszcze nie architektura. To spis elementów, czyli konfiguracja w procesie BAI10. A po udanym pilotażu w APO04 o pieniądzach decyduje portfel, czyli APO05.
:::

---

<!-- slajd: przyklad -->
# Jedna uczelnia, dwa procesy

Uczelnia ma osobne systemy rekrutacji, dziekanatu i płatności. Dyrektor IT rysuje, jak wymieniają dane. Ustala zasadę: jeden numer studenta we wszystkich systemach. To **APO03**.

Zespół IT testuje w jednym wydziale aplikację z planem zajęć. Po semestrze przedstawia rekomendację. To **APO04**.

:::wykladowca
Zauważ różnicę w wyniku pracy. W APO03 wynikiem jest model całości i zasada budowy. W APO04 wynikiem jest opis próby i rekomendacja. Pytanie na egzaminie często opisuje taką pracę bez nazwy procesu. Pytaj wtedy: jaki jest wynik?
:::

:::sb przyklad
Sklep internetowy testuje w jednym mieście dostawy dronem. Pilotaż się udał. Zarząd ma jednak jeszcze trzy inne pomysły i pieniądze na dwa. Wybór, które pomysły sfinansować, to już nie APO04. To zarządzanie portfelem, czyli APO05.
:::

---

<!-- slajd: wniosek -->
# Co zapamiętać

**Wniosek:** APO03 opisuje, jak całość jest poskładana i według jakich zasad, a APO04 sprawdza nowości i kończy się rekomendacją.

:::zapamietaj
- APO03 (*Enterprise Architecture*) – model całości i zasady budowy.
- APO04 (*Innovation*) – trendy, pilotaż, rekomendacja.
- Wybór inwestycji to już APO05.
:::

:::wykladowca
Zapamiętaj dwa pytania. Jak całość jest poskładana? To APO03. Czy ta nowość nam pomoże? To APO04. Nazw egzaminacyjnych tych procesów nie potwierdziliśmy w arkuszu, więc rozpoznawaj je po kodzie i po angielskich słowach.
:::
