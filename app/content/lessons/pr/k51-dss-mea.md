---
id: pr-k51-dss-mea
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: DSS i MEA – codzienne działanie oraz monitorowanie
lekcja: "1.51"
dzien: 4
format: krotki
sylabus: [PR-01-04]
minuty: 7
zgadnij: []
cwiczenia: [q-prb-51-1, q-prb-51-2, q-prb-51-3]
zapas: [q-prb-51-z1]
wprowadza: [dss, mea]
wymaga: [pr-k50-apo-bai]
cel: "Potrafię rozpoznać, czy zadanie należy do domeny DSS, czy MEA, i podać ich procesy."
priorytet: 1
---

<!-- slajd: start -->
# System już działa. I co dalej?

Szpital od roku korzysta z nowego systemu rejestracji pacjentów.

Ktoś musi go codziennie utrzymywać, usuwać awarie i chronić dane.

Ktoś inny sprawdza, czy praca idzie zgodnie z celami i przepisami.

Czy to ta sama praca?

:::wykladowca
Po wdrożeniu zaczyna się najdłuższa część życia systemu. Codzienne utrzymanie to jedna praca. Sprawdzanie, czy wszystko idzie dobrze, to druga. COBIT 5 ma na nie dwie osobne domeny Zarządzania.
:::

---

<!-- slajd: pojecie -->
# DSS – 6 procesów codziennego działania

**[[dss|Dostarczaj, Obsługuj i Wspieraj]]** (*Deliver, Service and Support*, DSS; w podręczniku: dostarczanie, obsługa i wsparcie):

01 eksploatacja · 02 zgłoszenia serwisowe i incydenty · 03 problemy · 04 ciągłość · 05 usługi bezpieczeństwa · 06 mechanizmy kontrolne procesów biznesowych

:::zrodlo FW-PL 33 16
:::

:::wykladowca
DSS to praca dzień po dniu. Incydent w DSS02 to nagła awaria, którą trzeba szybko usunąć. Problem w DSS03 to przyczyna powtarzających się awarii. Ciągłość w DSS04 to praca mimo poważnej awarii, na przykład w zapasowym centrum danych.
:::

---

<!-- slajd: pojecie -->
# MEA – 3 procesy monitorowania

**[[mea|Monitoruj, Oszacuj i Oceń]]** (*Monitor, Evaluate and Assess*, MEA; w podręczniku: monitorowanie, ocena i oszacowanie):

01 wydajność i zgodność · 02 system kontroli wewnętrznej · 03 zgodność z wymogami zewnętrznymi

MEA należy do **Zarządzania**.

:::zrodlo FW-PL 33 16
:::

:::wykladowca
MEA01 (wydajność i zgodność) mierzy wyniki i raportuje je w górę. MEA02 (kontrola wewnętrzna) sprawdza, czy mechanizmy kontrolne naprawdę działają. MEA03 (wymogi zewnętrzne) pilnuje zgodności z przepisami i umowami zewnętrznymi. To Zarządzanie, które sprawdza samo siebie. Ład korzysta z tych raportów, ale ma własne monitorowanie.
:::

---

<!-- slajd: przyklad -->
# W szpitalu

- codzienne kopie zapasowe i harmonogram zadań → DSS01 (eksploatacja)
- lekarz zgłasza, że system się zawiesił → DSS02 (incydenty)
- system zawiesza się co poniedziałek, szukamy przyczyny → DSS03 (problemy)
- serwerownia bez prądu, przełączamy się na zapasową → DSS04 (ciągłość)
- miesięczny raport dostępności dla dyrekcji → MEA01 (wydajność i zgodność)
- kontrola, czy szpital spełnia przepisy o danych medycznych → MEA03 (wymogi zewnętrzne)

:::wykladowca
Pierwsze cztery zadania to codzienne działanie, czyli DSS. Dwa ostatnie to sprawdzanie i raportowanie, czyli MEA. Zwróć uwagę na różnicę między DSS02 a DSS03. Jedna awaria to incydent, a jej powtarzająca się przyczyna to problem.
:::

---

<!-- slajd: nie-jest -->
# Czego nie mylić?

- **DSS02** incydent (przywróć działanie teraz) ≠ **DSS03** problem (usuń przyczynę).
- **DSS04** ciągłość (praca mimo awarii) ≠ **BAI04** pojemność (czy system udźwignie obciążenie).
- **MEA** (Zarządzanie mierzy pracę) ≠ **EDM** (Ład sprawdza kierunek).

:::wykladowca
Te pary pojawiają się w pytaniach najczęściej. Przy incydencie pytaj: czy chodzi o szybkie przywrócenie usługi? Przy problemie: czy szukamy przyczyny? Przy MEA i EDM pytaj, kto sprawdza i co sprawdza.
:::

---

<!-- slajd: wniosek -->
# Co zapamiętać

**Wniosek:** DSS utrzymuje usługi dzień po dniu (6 procesów), a MEA sprawdza wydajność, kontrolę wewnętrzną i zgodność (3 procesy).

:::zapamietaj
- DSS: eksploatacja, incydenty, problemy, ciągłość, bezpieczeństwo, kontrole.
- MEA: wydajność i zgodność, kontrola wewnętrzna, wymogi zewnętrzne.
- MEA to Zarządzanie.
:::
