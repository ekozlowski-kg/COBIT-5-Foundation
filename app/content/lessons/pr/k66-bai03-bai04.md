---
id: pr-k66-bai03-bai04
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: "BAI03 i BAI04: budowa rozwiązania oraz dostępność i pojemność"
lekcja: "1.66"
dzien: 6
format: krotki
sylabus: [PR-01-04]
minuty: 7
zgadnij: []
cwiczenia: ["q-fin-pliki-29", "q-proces-apo01"]
zapas: ["q-proces-apo02"]
wprowadza: [proc-bai03, proc-bai04]
wymaga: [pr-k65-bai01-bai02]
cel: "Potrafię odróżnić budowę i testy rozwiązania (BAI03) od planowania mocy na szczyt (BAI04) oraz BAI04 od przetrwania katastrofy (DSS04)."
priorytet: 2
---

<!-- slajd: start -->
# Restauracja przed sylwestrem

Właściciel restauracji ma nowe menu. Kucharz przygotowuje dania i próbuje każde przed podaniem.

W sylwestra przyjdzie trzy razy więcej gości. Czy starczy stolików i kucharzy?

Przygotowanie dań i plan na tłok to dwie różne prace.

:::wykladowca
Pierwsza praca to budowa i sprawdzenie, czy wyszło dobrze. Druga to myślenie z wyprzedzeniem o tłoku. W domenie BAI te prace mają dwa sąsiednie procesy. Oba łatwo pomylić z innymi, więc przyjrzyjmy się im z bliska.
:::

---

<!-- slajd: pojecie -->
# BAI03 – projektujemy, budujemy, testujemy

**[[proc-bai03]]** (*Manage Solutions Identification and Build*)

**Po co:** wybiera sposób rozwiązania, projektuje je, buduje albo kupuje i testuje, czy robi to, co zapisano w wymaganiach.

**Przykład:** zespół programistów sklepu buduje nowy koszyk i testuje go.

> „BAI03 Zarządzanie identyfikacją i budowaniem rozwiązań”

:::zrodlo FW-PL 33 16
:::

:::wykladowca
BAI03 odpowiada na pytanie: jak to zrobimy? Wybór rozwiązania, projekt techniczny, programowanie albo zakup, konfiguracja i testy zespołu budującego. Testy w BAI03 sprawdzają, czy rzecz zbudowano dobrze. Odbiór przez użytkowników i przejście na nowe rozwiązanie to już inny proces, BAI07.
:::

---

<!-- slajd: pojecie -->
# BAI04 – czy wystarczy mocy

**[[proc-bai04]]** (*Manage Availability and Capacity*)

**Po co:** planuje z wyprzedzeniem, żeby systemy działały wtedy, gdy są potrzebne, i wytrzymały szczyt ruchu.

**Przykład:** sklep internetowy przed Black Friday dokupuje moc serwerów w chmurze.

> „BAI04 Zarządzanie dostępnością i pojemnością”

:::zrodlo FW-PL 33 16
:::

:::wykladowca
BAI04 to dostępność i pojemność. Pojemność to pytanie, ile ruchu system wytrzyma. Dostępność to pytanie, czy działa wtedy, kiedy jest potrzebny. Proces patrzy w przyszłość: prognozuje obciążenie i planuje rozbudowę. Słowa-klucze to szczyt, prognoza, wydajność, moc.
:::

---

<!-- slajd: porownanie -->
# Z kim mylą się BAI03 i BAI04?

| Para | Pytanie rozstrzygające |
|---|---|
| BAI03 / [[proc-bai02|BAI02]] | JAK to zbudujemy czy CO ma działać? |
| BAI03 / BAI07 | Testy zespołu budującego czy odbiór przez użytkowników? |
| BAI04 / DSS04 | Za dużo ruchu czy katastrofa? |

:::wykladowca
BAI04 i DSS04 to klasyczna pułapka. Oba mówią o tym, żeby usługa działała. BAI04 dotyczy zwykłego dnia i szczytu: czy wystarczy mocy. DSS04 dotyczy katastrofy: jak przetrwać, gdy padnie centrum danych. DSS04 poznasz w lekcji o domenie DSS.
:::

---

<!-- slajd: przyklad -->
# Uczelnia i rekrutacja online

Uczelnia buduje nowy system rekrutacji. Programiści piszą formularz i testują go na danych próbnych. To **BAI03**.

W lipcu jednego dnia zgłasza się 20 tysięcy kandydatów. Zespół IT wcześniej prognozuje ruch i dokłada serwery. To **BAI04**.

:::wykladowca
Jedna uczelnia, dwa pytania. Czy system robi to, co zapisano? To BAI03. Czy wytrzyma najgorszy dzień rekrutacji? To BAI04. Gdyby zalało serwerownię i trzeba było przenieść system w inne miejsce, to byłoby DSS04, czyli ciągłość.
:::

:::sb przyklad
Szpital kupuje gotowy system laboratoryjny zamiast pisać własny. Wybór dostawcy rozwiązania, konfiguracja i testy integracji to nadal BAI03, bo proces obejmuje też nabywanie. Natomiast kontrakt i ocena dostawcy w czasie współpracy to APO10.
:::

---

<!-- slajd: wniosek -->
# Co zapamiętać

**Wniosek:** BAI03 buduje i testuje rozwiązanie, a BAI04 dba, żeby wystarczyło mocy w zwykły dzień i w szczycie.

:::zapamietaj
- BAI03 (*Solutions Identification and Build*) – wybór, budowa, testy.
- BAI04 (*Availability and Capacity*) – moc i dostępność na przyszłość.
- Katastrofa i odtworzenie to DSS04, a nie BAI04.
:::

:::wykladowca
Zapamiętaj dwie pary. BAI03 i BAI07: kto testuje i po co. BAI04 i DSS04: tłok czy katastrofa. Nazw egzaminacyjnych procesów nie potwierdziliśmy, więc patrz na kod i angielskie słowa: Build oraz Capacity.
:::
