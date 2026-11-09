---
id: pr-k52-domeny-pomylki
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: Procesy o podobnych nazwach – jak ich nie pomylić
lekcja: "1.52"
dzien: 4
format: krotki
sylabus: [PR-01-04, PR-01-03]
minuty: 7
zgadnij: []
cwiczenia: [q-prb-52-1, q-prb-52-2, q-prb-52-3]
zapas: [q-prb-52-z1]
wprowadza: []
wymaga: [pr-k51-dss-mea]
cel: "Potrafię rozróżnić procesy o podobnych nazwach (zasoby, bezpieczeństwo, kontrola) po tym, czego dotyczą."
priorytet: 1
---

<!-- slajd: start -->
# Trzy razy „zasoby”

W nazwach procesów COBIT 5 słowo „zasoby” pojawia się trzy razy.

Dyrektor szpitala pyta o budżet IT. Kierownik kadr pyta o szkolenia informatyków. Administrator liczy licencje.

Czy to ten sam proces?

:::wykladowca
Po polsku wszystkie trzy sprawy brzmią jak „zasoby”. Po angielsku to trzy różne słowa: Resource, Human Resources i Assets. Właśnie dlatego egzamin lubi te pary. Ta lekcja zbiera najczęstsze pomyłki w jednym miejscu.
:::

---

<!-- slajd: pulapka -->
# Trzy „zasoby”

:::pulapka
| Proces | EN | Czego dotyczy |
|---|---|---|
| EDM04 – Zapewnienie optymalizacji zasobów | *Resource Optimisation* | Ład: wszystkie zasoby IT |
| APO07 – Zarządzanie zasobami ludzkimi | *Human Resources* | ludzie |
| BAI09 – Zarządzanie zasobami | *Assets* | aktywa: sprzęt, licencje |
:::

:::zrodlo FW-PL 33 16
:::

:::wykladowca
Nazwa BAI09 w podręczniku to po prostu „Zarządzanie zasobami”. To najbardziej myląca nazwa w całym modelu. Angielskie słowo Assets mówi jasno, że chodzi o aktywa, czyli sprzęt i licencje. Forma egzaminacyjna BAI09 nie jest potwierdzona, więc rozpoznawaj go po kodzie.
:::

---

<!-- slajd: porownanie -->
# Bezpieczeństwo i kontrola – po dwa razy

| Plan lub ocena | Codzienna praca |
|---|---|
| APO13 (bezpieczeństwo) – system zarządzania bezpieczeństwem | DSS05 (usługi bezpieczeństwa) – codzienna ochrona |
| MEA02 (system kontroli wewnętrznej) – czy kontrole działają | DSS06 (mechanizmy kontrolne procesów biznesowych) – kontrole w codziennej pracy |

:::zrodlo FW-PL 33 16
:::

:::wykladowca
Lewa kolumna planuje albo ocenia. Prawa kolumna wykonuje codzienną pracę. APO13 ustala, jak organizacja zarządza bezpieczeństwem. DSS05 codziennie chroni systemy, na przykład przed złośliwym oprogramowaniem. MEA02 sprawdza, czy kontrole działają, a DSS06 je stosuje.
:::

---

<!-- slajd: przyklad -->
# Który proces?

- Sklep przed świętami sprawdza, czy serwery udźwigną trzy razy większy ruch → **BAI04**
- Centrum danych zalane, sklep działa z zapasowego → **DSS04**
- Codzienna aktualizacja ochrony antywirusowej → **DSS05**
- Polityka i plan bezpieczeństwa informacji na trzy lata → **APO13**

:::wykladowca
Pierwszy przykład kusi słowem „ciągłość”, ale chodzi o pojemność systemu. To BAI04 Zarządzanie dostępnością i pojemnością. Drugi przykład to praca mimo poważnej awarii, czyli DSS04. Trzeci to codzienna ochrona. Czwarty to plan, więc APO13.
:::

---

<!-- slajd: egzamin -->
# Trzy pytania kontrolne

:::egzamin
1. **Ład czy Zarządzanie?** Kierunek i granice → EDM. Praca → APO, BAI, DSS, MEA.
2. **Który etap?** Plan → APO, budowa i zmiana → BAI, codzienne działanie → DSS, sprawdzanie → MEA.
3. **Jakie słowo-klucz po angielsku?** *Assets*, *Human Resources*, *Resource*…
:::

:::zrodlo FW-PL 33
:::

:::wykladowca
Te trzy pytania rozwiązują większość zadań o procesach. Najpierw odróżnij Ład od Zarządzania. Potem ustal etap pracy. Na końcu, gdy wciąż masz wątpliwości, przypomnij sobie słowo z nazwy angielskiej. Podręcznik mówi, że proces trafia do domeny według głównego obszaru działania.
:::

---

<!-- slajd: wniosek -->
# Co zapamiętać

**Wniosek:** procesy o podobnych nazwach rozróżniaj po tym, czego dotyczą i w jakiej domenie leżą, a nie po polskim słowie w nazwie.

:::zapamietaj
- EDM04 wszystkie zasoby ≠ APO07 ludzie ≠ BAI09 aktywa.
- APO13 plan bezpieczeństwa ≠ DSS05 codzienna ochrona.
- BAI04 pojemność ≠ DSS04 ciągłość.
:::
