---
id: en-k46-trzy-architektury
modul: EN
modulNazwa: Moduł 2 – Aktywatory COBIT 5
temat: Architektura referencyjna, docelowa i przejściowa
lekcja: "2.46"
dzien: 6
format: krotki
sylabus: [EN-02-20]
minuty: 6
zgadnij: []
cwiczenia: ["q-en-08-01", "q-enk-47-1"]
zapas: ["q-enk-47-3"]
wprowadza: []
wymaga: [en-k45-uslugi-zdolnosc]
cel: "Potrafię odróżnić architekturę referencyjną, docelową i przejściową oraz wymienić dobre praktyki aktywatora Usługi, Infrastruktura i Aplikacje."
priorytet: 1
---

<!-- slajd: start -->
# Remont etapami

Dziś mieszkanie ma starą kuchnię i starą łazienkę.

Za rok wszystko ma być nowe.

W wakacje kuchnia jest już nowa, a łazienka jeszcze stara.

Trzy plany jednego mieszkania.

:::wykladowca
Pierwszy plan opisuje stan dzisiejszy. Drugi opisuje cel. Trzeci opisuje etap w drodze do celu. Organizacje planują swoje systemy dokładnie w ten sam sposób. COBIT 5 nazywa te plany architekturami.
:::

---

<!-- slajd: rozklad -->
# Trzy architektury

| Architektura | Co opisuje |
|---|---|
| **Referencyjna** (bazowa) | obecną zdolność usługową |
| **Docelowa** | przyszłą, planowaną zdolność usługową |
| **Przejściowa** | etapy pośrednie w drodze do docelowej |

> „Aktualna zdolność do świadczenia usług wykorzystywana do dostarczania bieżących usług IT została opisana w architekturze referencyjnej”

:::zrodlo FW-PL 85
:::

:::wykladowca
Architektura to po ludzku plan: z jakich systemów się składamy i jak są połączone. Architektura docelowa opisuje przyszłe aplikacje i docelowy model infrastruktury. Przejściową definiuje się wtedy, gdy droga do celu jest długa. Pokazuje, co działa na każdym etapie zmiany.
:::

---

<!-- slajd: przyklad -->
# Bank przenosi systemy do chmury

- Dziś wszystko działa we własnym centrum danych → **referencyjna**.
- Za dwa lata większość systemów ma działać w chmurze → **docelowa**.
- Po pół roku system kart jest już w chmurze, a system kredytów jeszcze nie → **przejściowa**.

:::wykladowca
Słowa-klucze to „już” i „jeszcze nie”. Gdy część jest nowa, a część stara, mówimy o architekturze przejściowej. Bank może mieć kilka takich etapów. Każdy z nich trzeba opisać, żeby usługi działały w trakcie zmiany.
:::

---

<!-- slajd: rozklad -->
# Dobre praktyki aktywatora

- **pryncypia architektury** (następna lekcja),
- **punkty widzenia** architektury – modele, katalogi, macierze,
- **repozytorium** architektury – miejsce na wszystkie opisy,
- **poziomy usług**, które dostawcy muszą zdefiniować i osiągnąć.

Źródła zewnętrzne: TOGAF (*The Open Group Architecture Framework*) i ITIL.

:::zrodlo FW-PL 86
:::

:::wykladowca
Punkty widzenia to różne sposoby pokazania architektury różnym interesariuszom. Na przykład schemat połączeń między aplikacjami. Repozytorium przechowuje pryncypia, normy i modele referencyjne. TOGAF daje gotowe modele architektury, a ITIL wytyczne dla usług.
:::

---

<!-- slajd: pulapka -->
# Referencyjna to nie repozytorium referencyjne

:::pulapka
Dobre praktyki usług obejmują poziomy usług, zasady architektury i jej definicję: architekturę bazową, docelową, analizę luk i architektury przejściowe. Przykładowe zasady to ponowne użycie, zakup zamiast budowy, zwinność, otwartość i prostota. Baseline architecture to architektura bazowa; nie należy utożsamiać jej z reference architecture.

Nie myl jej z **repozytorium referencyjnym** ani z **modelem referencyjnym architektury**. To zbiory opisów, a nie stan obecny.
:::

:::zrodlo FW-PL 86
:::

:::wykladowca
Słowo „referencyjny” pojawia się w tym aktywatorze kilka razy. Tylko architektura referencyjna opisuje stan dzisiejszy. Repozytorium to magazyn opisów. Model referencyjny to wzorzec, na przykład z TOGAF. Na egzaminie czytaj całe wyrażenie, nie tylko jedno słowo.
:::

---

<!-- slajd: wniosek -->
# Co zapamiętać

**Wniosek:** architektura referencyjna to stan dziś, docelowa to cel, a przejściowa to etapy w drodze do celu.

:::zapamietaj
- Referencyjna (bazowa) – obecna zdolność usługowa.
- Docelowa – przyszła; przejściowa – etapy pośrednie.
- Dobre praktyki: pryncypia, punkty widzenia, repozytorium, poziomy usług.
:::
