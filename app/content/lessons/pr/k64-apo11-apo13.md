---
id: pr-k64-apo11-apo13
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: "APO11–APO13: jakość, ryzyko i bezpieczeństwo w planowaniu"
lekcja: "1.64"
dzien: 6
format: krotki
sylabus: [PR-01-04]
minuty: 8
zgadnij: []
cwiczenia: [q-prc-64-1, q-prc-64-2, q-prc-64-3]
zapas: [q-prc-64-z1]
wprowadza: [proc-apo11, proc-apo12, proc-apo13]
wymaga: [pr-k63-apo08-apo10]
cel: "Potrafię rozpoznać APO11, APO12 i APO13 i odróżnić APO12 od EDM03 oraz APO13 od codziennej ochrony w DSS05."
priorytet: 2
---

<!-- slajd: start -->
# Dobrze, bezpiecznie i bez niespodzianek

Kupujesz mieszkanie. Sprawdzasz, czy jest dobrze wykończone.

Zastanawiasz się, co może pójść źle: zalanie, kradzież, utrata pracy.

Ustalasz też zasady: kto ma klucze i gdzie trzymasz dokumenty.

Jakość, ryzyko i bezpieczeństwo to trzy osobne pytania.

:::wykladowca
Te trzy pytania zadaje sobie każda organizacja. Co znaczy „dobrze zrobione”? Co może pójść źle? Jak chronimy informacje? W domenie APO każde z nich ma swój proces. To ostatnie trzy procesy tej domeny.
:::

---

<!-- slajd: pojecie -->
# APO11 – co znaczy „dobrze zrobione”

**[[proc-apo11]]** (*Manage Quality*)

**Po co:** ustala wymagania jakości, pilnuje ich i stale poprawia procesy, żeby klienci i użytkownicy byli zadowoleni.

**Przykład:** helpdesk ustala standard: każde zgłoszenie ma numer, opis i potwierdzenie zamknięcia.

> „APO11 Zarządzanie jakością”

:::zrodlo FW-PL 33 16
:::

:::wykladowca
APO11 to jakość. Organizacja określa, czego oczekuje od swojej pracy, i ciągle ją doskonali. Uwaga: zbieranie mierników ze wszystkich procesów i raportowanie wyników zarządowi to nie APO11. To monitorowanie w domenie MEA, czyli MEA01.
:::

---

<!-- slajd: pojecie -->
# APO12 – co może pójść źle

**[[proc-apo12]]** (*Manage Risk*)

**Po co:** stale wyszukuje i ocenia ryzyka IT, prowadzi ich rejestr i dobiera reakcje.

**Przykład:** bank wpisuje do rejestru ryzyko awarii centrum danych i plan reakcji.

> „procesy związane z zarządzaniem ryzykiem w domenach EDM i APO”

:::zrodlo FW-PL 60
:::

:::wykladowca
Ryzyko pojawia się w dwóch domenach. W EDM, czyli w Ładzie, zarząd ustala, ile ryzyka organizacja akceptuje. To EDM03. W APO Zarządzanie codziennie szuka ryzyk, ocenia je i planuje reakcje w tych granicach. To APO12.
:::

---

<!-- slajd: pojecie -->
# APO13 – system ochrony informacji

**[[proc-apo13]]** (*Manage Security*)

**Po co:** buduje system zarządzania bezpieczeństwem informacji: zasady, plan i regularny przegląd.

**Przykład:** ubezpieczyciel przyjmuje plan bezpieczeństwa i co roku go przegląda.

> „Bezpieczeństwo informacji, infrastruktury przetwarzania i aplikacji”

:::zrodlo FW-PL 51
:::

:::wykladowca
APO13 organizuje bezpieczeństwo. Podręcznik podaje go jako przykład procesu, który przede wszystkim wspiera cel IT: bezpieczeństwo informacji, infrastruktury i aplikacji. APO13 nie zakłada kont i nie instaluje antywirusa. Ustala system: zasady, plan i przegląd, czy to działa.
:::

---

<!-- slajd: porownanie -->
# Z kim mylą się APO11–APO13?

| Para | Pytanie rozstrzygające |
|---|---|
| APO11 / MEA01 | Poprawiamy standard czy raportujemy wyniki całości? |
| APO12 / [[proc-edm03|EDM03]] | Lista ryzyk i reakcje czy granica akceptowanego ryzyka (Ład)? |
| APO13 / DSS05 | System i plan bezpieczeństwa czy codzienna ochrona? |

:::wykladowca
To trzy pary, które często padają na egzaminie. Najważniejsza to APO13 i DSS05. APO13 planuje i organizuje bezpieczeństwo. DSS05 wykonuje ochronę na co dzień: konta, hasła, antywirus, monitorowanie zdarzeń. DSS05 poznasz w lekcji o domenie DSS.
:::

:::sb przyklad
Szpital ma politykę bezpieczeństwa i plan na trzy lata. To APO13. Administrator co rano przegląda alerty z zapory sieciowej i blokuje podejrzane konto. To DSS05. Audytor sprawdza, czy zabezpieczenia działają. To domena MEA. Trzy prace o bezpieczeństwie, trzy różne domeny.
:::

---

<!-- slajd: wniosek -->
# Co zapamiętać

**Wniosek:** APO11–APO13 planują i organizują jakość, ryzyko i bezpieczeństwo, ale nie wykonują codziennej ochrony.

:::zapamietaj
- APO11 (*Quality*) – standard jakości i doskonalenie.
- APO12 (*Risk*) – rejestr ryzyk i reakcje; granice ustala EDM03.
- APO13 (*Security*) – system bezpieczeństwa; codzienna ochrona to DSS05.
:::

:::wykladowca
Tak kończy się domena APO: 13 procesów planowania i organizacji. Reguła na egzamin: APO planuje i organizuje, DSS wykonuje na co dzień, MEA mierzy i ocenia, a EDM wyznacza granice. Nazw egzaminacyjnych tych procesów nie potwierdziliśmy, więc patrz na kod i angielskie słowo.
:::
