---
id: pr-k50-apo-bai
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: APO i BAI – planowanie oraz budowanie zmian
lekcja: "1.50"
dzien: 4
format: krotki
sylabus: [PR-01-04]
minuty: 8
zgadnij: []
cwiczenia: [q-prb-50-1, q-prb-50-2, q-prb-50-3]
zapas: [q-prb-50-z1]
wprowadza: [apo, bai]
wymaga: [pr-k49-cztery-domeny]
cel: "Potrafię rozpoznać, czy zadanie należy do domeny APO, czy BAI, i podać przykładowe procesy każdej z nich."
priorytet: 1
---

<!-- slajd: start -->
# Najpierw plan, potem budowa

Bank chce nowej aplikacji mobilnej.

Najpierw ktoś ustala strategię, budżet, dostawcę i poziom ryzyka.

Potem ktoś prowadzi projekt, spisuje wymagania, testuje i wdraża aplikację.

Gdzie kończy się planowanie, a zaczyna budowanie?

:::wykladowca
To dwa różne rodzaje pracy. Pierwszy odpowiada na pytanie: co, za ile i z kim. Drugi odpowiada na pytanie: jak to zbudować i uruchomić. W COBIT 5 każda z tych prac ma swoją domenę.
:::

---

<!-- slajd: pojecie -->
# APO – 13 procesów planowania

**[[apo|Dostosuj, Planuj i Organizuj]]** (*Align, Plan and Organise*, APO; w podręczniku: dopasowanie, planowanie i organizacja):

| | | |
|---|---|---|
| 01 metodyka zarządzania IT | 06 budżet i koszty | 11 jakość |
| 02 strategia | 07 zasoby ludzkie | 12 ryzyko |
| 03 architektura korporacyjna | 08 relacje | 13 bezpieczeństwo |
| 04 innowacje | 09 umowy o świadczenie usług | |
| 05 portfel | 10 dostawcy | |

:::zrodlo FW-PL 33 16
:::

:::wykladowca
Każdy proces APO zaczyna się w podręczniku od słowa „Zarządzanie”, na przykład APO02 – Zarządzanie strategią. APO to strategia, pieniądze, ludzie, dostawcy, ryzyko i bezpieczeństwo. Architektura korporacyjna to plan, jak systemy i dane pasują do siebie. Portfel to zestaw wszystkich inwestycji w IT.
:::

---

<!-- slajd: pojecie -->
# BAI – 10 procesów budowania i zmian

**[[bai|Twórz, Nabywaj i Wdrażaj]]** (*Build, Acquire and Implement*, BAI; w podręczniku: budowanie, nabywanie i wdrażanie):

| | |
|---|---|
| 01 programy i projekty | 06 zmiany |
| 02 definiowanie wymagań | 07 akceptacja zmian i przejście |
| 03 identyfikacja i budowanie rozwiązań | 08 wiedza |
| 04 dostępność i pojemność | 09 zasoby (aktywa) |
| 05 wdrażanie zmian organizacyjnych | 10 konfiguracja |

:::zrodlo FW-PL 33 16
:::

:::wykladowca
BAI to miejsce, gdzie coś nowego powstaje albo zmienia się to, co już jest. Pojemność w BAI04 to pytanie, czy system udźwignie obciążenie. Zasoby w BAI09 to aktywa: sprzęt i licencje. Konfiguracja w BAI10 to spis i ustawienia elementów systemów.
:::

---

<!-- slajd: przyklad -->
# Wdrożenie systemu ERP

Producent mebli wdraża system ERP do zarządzania całą firmą.

- wybór inwestycji w portfelu → APO05 (portfel)
- wybór i umowa z dostawcą → APO10 (dostawcy)
- prowadzenie projektu → BAI01 (programy i projekty)
- spisanie wymagań działów → BAI02 (wymagania)
- szkolenie i przekonanie pracowników → BAI05 (zmiany organizacyjne)

:::wykladowca
Zauważ granicę. Decyzja, w co inwestujemy i z kim, to APO. Praca nad samym wdrożeniem to BAI. Szkolenie ludzi i zmiana sposobu ich pracy to też BAI, a dokładnie BAI05. To częsty temat pytań.
:::

:::sb przyklad
Uczelnia przenosi pocztę do chmury. APO09 (umowy o świadczenie usług) ustala umowę o poziomie usług z dostawcą. BAI06 (zmiany) wprowadza zmianę techniczną w systemach. BAI07 (akceptacja zmian i przejście) prowadzi testy akceptacyjne i przejście na nowy system. BAI08 (wiedza) zapisuje wiedzę: instrukcje dla helpdesku i dla studentów.
:::

---

<!-- slajd: nie-jest -->
# Czego nie mylić?

- **BAI05** wdrażanie zmian **organizacyjnych** (ludzie, sposób pracy) ≠ **BAI06** zmiany (techniczne, w systemach).
- APO12 (ryzyko) – rejestr ryzyk i reakcje ≠ **EDM03** – granica ryzyka ustalana przez Ład.
- **APO05** portfel (wybór inwestycji) ≠ **BAI01** (prowadzenie projektu).

:::wykladowca
Rozróżniaj procesy po tym, czego dotyczą, a nie po podobnym słowie. Słowo „zmiany” jest w BAI05 i w BAI06. Słowo „ryzyko” jest w APO12 i w EDM03. Zawsze pytaj: czy to decyzja Ładu, plan, czy budowa?
:::

---

<!-- slajd: wniosek -->
# Co zapamiętać

**Wniosek:** APO planuje i organizuje (13 procesów), a BAI buduje, kupuje i wdraża rozwiązania oraz zmiany (10 procesów).

:::zapamietaj
- APO: strategia, portfel, budżet, ludzie, dostawcy, ryzyko, bezpieczeństwo.
- BAI: projekty, wymagania, rozwiązania, pojemność, zmiany, wiedza, aktywa, konfiguracja.
- BAI05 = ludzie; BAI06 = systemy.
:::
