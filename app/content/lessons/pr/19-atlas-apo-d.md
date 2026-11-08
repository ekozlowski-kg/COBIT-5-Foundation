---
id: pr-19-atlas-apo-d
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: "APO11–APO13: Zarządzanie ustala standard jakości, prowadzi rejestr ryzyk i buduje system bezpieczeństwa informacji"
lekcja: "1.19"
dzien: 6
sylabus: [PR-01-04]
minuty: 16
priorytet: 2
wielkiObraz: 5
cel:
  - "Potrafię rozpoznać APO11, APO12 i APO13 po kodzie, nazwie polskiej i słowie-kluczu z nazwy angielskiej."
  - "Potrafię odróżnić APO11 od MEA01, APO12 od EDM03 i MEA02 oraz APO13 od DSS05."
wprowadza: [proc-apo11, proc-apo12, proc-apo13]
wymaga: [pr-18-atlas-apo-c]
twierdzenia:
  - "APO11 ustala, co znaczy „dobrze zrobione”, pilnuje tego i stale poprawia procesy i usługi IT."
  - "APO12 rozpoznaje, ocenia i obsługuje ryzyko IT w granicach apetytu ustalonego przez Ład."
  - "APO13 buduje system zarządzania bezpieczeństwem informacji: politykę, plan i przegląd."
  - "Codzienna ochrona, czyli konta, hasła i antywirus, to DSS05, a nie APO13."
typowePytania:
  - { pytanie: "APO11 to kontrola jakości, więc należy do domeny MEA?", odpowiedz: "Nie. APO11 jest w domenie APO. Framework umieszcza jakość w domenie najbliższej jej charakterowi." }
  - { pytanie: "APO12 ustala apetyt na ryzyko?", odpowiedz: "Nie. Apetyt ustala Ład w EDM03. APO12 pracuje w jego granicach: prowadzi rejestr ryzyk i dobiera reakcje." }
  - { pytanie: "Informatyczka blokuje podejrzane konto. To APO13?", odpowiedz: "Nie. Wykrycie i blokada to codzienna usługa bezpieczeństwa, czyli DSS05. APO13 to polityka i plan bezpieczeństwa." }
zgadnij: [q-atl-apo-d-01]
cwiczenia: [q-atl-apo-d-02, q-atl-apo-d-03, q-atl-apo-d-04]
zapas: [q-atl-apo-d-05, q-atl-apo-d-06]
kontrolaAutora: { data: null, kto: null, uwagi: "atlas procesów – do przeglądu" }
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Jak dopilnować, żeby Syrena była dobra, bezpieczna i odporna na to, co może pójść źle?

:::kontekst psp
**Lista kontrolna, tablica i polityka**
Po awarii z Lipowej kpt. Marek Sikora, naczelnik informatyki, robi trzy rzeczy. Ustala standard: alarm testowy do OSP (ochotniczej straży) w każdy poniedziałek i lista kontrolna po każdej aktualizacji Syreny. Na tablicy w gabinecie wypisuje, co może zawieść: zasięg, prąd, nieaktualne numery. Pisze też politykę bezpieczeństwa informacji dla listy numerów i danych alarmów. To trzy ostatnie procesy APO: APO11 (jakość), APO12 (ryzyko) i APO13 (bezpieczeństwo).
:::

**Wniosek:** jakość, ryzyko i bezpieczeństwo to trzy osobne procesy planowania, a nie codzienna obsługa.

:::wykladowca
To ostatnia lekcja domeny APO. Sikora robi trzy rzeczy, które wyglądają podobnie, bo wszystkie coś „pilnują”. Pierwsza to standard jakości: co znaczy, że Syrena działa dobrze. Druga to lista zagrożeń i reakcji na nie. Trzecia to system bezpieczeństwa informacji. Każda z nich ma sąsiada w innej domenie. Jakość myli się z pomiarem w MEA. Ryzyko myli się z Ładem w EDM03. Bezpieczeństwo myli się z codzienną ochroną w DSS. Dziś nauczycie się je rozdzielać.
:::

:::pytanie-uczestnika
pytanie: Czy Sikora nie powinien po prostu kupić lepszego antywirusa?
odpowiedz: Antywirus to codzienna ochrona. Bez polityki i planu nie wiadomo jednak, co chronić najbardziej i jak sprawdzać, czy ochrona działa.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (karta procesu) -->
<!-- podpowiedz: APO11 = standard jakości, zadowolenie klientów, doskonalenie. -->
# APO11: co znaczy „dobrze zrobione” i jak to stale poprawiać?

**APO11** – [[proc-apo11|Zarządzanie jakością]]
EN: *Manage Quality* (wym. „menydż kłoliti”)

**Po ludzku:** ustalenie, co znaczy „dobrze zrobione”, pilnowanie tego i ciągłe poprawianie pracy, żeby użytkownicy byli zadowoleni.

*Nazwa egzaminacyjna nie jest potwierdzona i może brzmieć inaczej.* Rozpoznawaj proces po kodzie APO11 i słowie EN *Quality*.

:::kontekst zycie
Piekarnia ustala, że chleb ma ważyć 500 gramów i mieć chrupiącą skórkę. Piekarz waży losowe bochenki i słucha klientów. Gdy coś nie gra, zmienia przepis.
:::

:::glebiej proc-apo11
Szczebel „skrajny”: dlaczego samo słowo „miernik” nie rozstrzyga między APO11 a MEA01.
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** APO11 ustala wymagania jakości i doskonali procesy, a przekrojowy pomiar wyników to MEA01.

:::wykladowca
Pierwszy proces to APO11, po angielsku Manage Quality. Sikora ustala standard: alarm testowy co tydzień i lista kontrolna po aktualizacji. Raz na kwartał pyta dyżurnych o zadowolenie i poprawia procedurę. Zwróćcie uwagę, gdzie leży ten proces. Jakość kojarzy się z kontrolą, więc ludzie szukają jej w MEA. Framework mówi jednak, że procesy umieszcza w domenie najbliższej ich charakterowi. Jakość to w COBIT 5 planowanie i organizowanie, więc APO. Pomiar wyników ze wszystkich procesów i raport dla kierownictwa to osobny proces, MEA01.
:::

:::sb ekspert
FW-PL s. 33: procesy dotyczące np. jakości i bezpieczeństwa są umieszczane w domenach odpowiadających zasadniczo najwłaściwszemu obszarowi działania. Dlatego jakość (APO11) i bezpieczeństwo (APO13) leżą w APO, choć dotyczą całej informatyki.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (karta procesu) -->
<!-- podpowiedz: APO12 = rejestr ryzyk, profil ryzyka, analiza, reakcja. -->
# APO12: co może pójść źle i co wtedy zrobimy?

**APO12** – [[proc-apo12|Zarządzanie ryzykiem]]
EN: *Manage Risk* (wym. „menydż risk”)

**Po ludzku:** ciągłe wyszukiwanie, co może pójść źle w informatyce, ocenianie tego i przygotowanie, co wtedy zrobimy.

*Nazwa egzaminacyjna nie jest potwierdzona i może brzmieć inaczej.* Rozpoznawaj proces po kodzie APO12 i słowach EN *Manage Risk*.

:::kontekst zycie
Przed wyjazdem na wakacje spisujesz, co może pójść źle: kradzież, zalanie, zgubiony paszport. Oceniasz, co najgroźniejsze. Kupujesz ubezpieczenie, prosisz sąsiada o zaglądanie i robisz kopię paszportu.
:::

:::glebiej proc-apo12
Szczebel „skrajny”: kto decyduje, gdy reakcja na ryzyko wymaga zmiany priorytetów komendy.
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** APO12 prowadzi rejestr ryzyk i reakcje w granicach apetytu, który ustala Ład w EDM03.

:::wykladowca
Drugi proces to APO12, po angielsku Manage Risk. Sikora wypisuje na tablicy, co może zawieść w Syrenie. Ocenia każde ryzyko i dobiera reakcję, na przykład comiesięczną weryfikację numerów OSP. Raz w miesiącu aktualizuje rejestr ryzyk. To praca ciągła, a nie raz w roku. Pamiętajcie lekcję 1.14. Apetyt na ryzyko ustaliła komendantka w EDM03. APO12 pracuje w tych granicach. Jeśli ryzyko przekracza granicę, decyzja wraca do komendantki. APO12 obejmuje całe ryzyko IT: projekty, dostawców, ludzi i awarie, a nie tylko bezpieczeństwo.
:::

:::sb skrot
*Manage* – zarządzaj; *Risk* – ryzyko. Słowa-klucze: rejestr ryzyk, profil ryzyka, analiza scenariuszy, reakcja na ryzyko.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (karta procesu) -->
<!-- podpowiedz: APO13 = system bezpieczeństwa informacji: polityka, plan, przegląd. -->
# APO13: jak zbudować cały system ochrony informacji, a nie tylko zamknąć drzwi?

**APO13** – [[proc-apo13|Zarządzanie bezpieczeństwem]]
EN: *Manage Security* (wym. „menydż sikjuriti”)

**Po ludzku:** ustalenie całego sposobu dbania o bezpieczeństwo informacji: zasad, planu i regularnego sprawdzania, czy działa.

*Nazwa egzaminacyjna nie jest potwierdzona i może brzmieć inaczej.* Rozpoznawaj proces po kodzie APO13 i słowach EN *Manage Security*.

:::kontekst zycie
Rodzina ustala zasady: klucze mają tylko domownicy, alarm włączany na noc, raz w roku przegląd zamków. Spisuje, co jest najcenniejsze i jak to chronić. Sam zamek w drzwiach to tylko narzędzie.
:::

:::glebiej proc-apo13
Szczebel „skrajny”: blokada podejrzanego konta to DSS05, a przegląd polityki po tym zdarzeniu to APO13.
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** APO13 organizuje system bezpieczeństwa informacji, a codzienną ochronę daje DSS05.

:::wykladowca
Trzeci proces to APO13, po angielsku Manage Security. Sikora pisze politykę bezpieczeństwa informacji komendy. Ustala, co chronić najbardziej: listę numerów i dane alarmów. Planuje działania i przegląd co pół roku. Całość nazywa się ISMS, czyli system zarządzania bezpieczeństwem informacji. Hasła, konta i antywirusa na co dzień ustawia informatyczka Ola Dudek. To już DSS05, Zarządzanie usługami bezpieczeństwa. Rysunek 39 podpowiada to samo. Administracja bezpieczeństwa to umiejętność z domeny DSS, a nie z APO.
:::

:::sb skrot
*Manage* – zarządzaj; *Security* – bezpieczeństwo. ISMS (*Information Security Management System*) to system zarządzania bezpieczeństwem informacji, znany z ISO 27001.
:::

---

<!-- slajd: porownanie -->
<!-- typ SD: E – porównawczy -->
# Jakość, ryzyko, bezpieczeństwo: z którą domeną mylą się te procesy?

:::mapa domena-apo
APO11, APO12 i APO13 zamykają 13 procesów domeny APO.
:::

| Para | Proces z tej lekcji | Sąsiad | Pytanie rozstrzygające |
|---|---|---|---|
| APO11 / MEA01 | APO11 ustala wymagania jakości i doskonali procesy | MEA01 zbiera mierniki ze wszystkich procesów i raportuje kierownictwu i Ładowi | Poprawiamy standard czy raportujemy wyniki całości? |
| APO12 / EDM03 / MEA02 | APO12 rozpoznaje ryzyka i dobiera reakcje | EDM03 ustala apetyt na ryzyko (Ład); MEA02 ocenia, czy mechanizmy kontrolne działają | Lista ryzyk, granica ryzyka czy działanie kontroli? |
| APO13 / DSS05 | APO13 to polityka, plan i przegląd bezpieczeństwa | DSS05 to codzienna ochrona: konta, hasła, antywirus, monitorowanie zdarzeń | System i plan czy codzienne zabezpieczanie? |

MEA01, MEA02 i DSS05 poznasz w dalszej części atlasu.

**Wniosek:** APO planuje i organizuje, DSS chroni na co dzień, MEA mierzy i ocenia, a EDM wyznacza granice.

:::wykladowca
Każdy proces z tej lekcji ma sąsiada w innej domenie. Dlatego tu pomaga znajomość domen. APO planuje i organizuje. DSS dostarcza i chroni na co dzień. MEA mierzy i ocenia. EDM wyznacza kierunek i granice. Jakość w APO11 ustala standard i go poprawia, a MEA01 raportuje wyniki całości. Ryzyko ma aż trzy procesy. EDM03 ustala granicę, APO12 prowadzi rejestr i reakcje, a MEA02 sprawdza, czy kontrole działają. Bezpieczeństwo w APO13 to system i plan, a w DSS05 codzienna ochrona.
:::

:::pytanie-uczestnika
pytanie: Skoro APO13 to bezpieczeństwo, to po co jeszcze APO12?
odpowiedz: APO12 obejmuje całe ryzyko IT: projekty, dostawców, ludzi i awarie. Ryzyko bezpieczeństwa to tylko jego część, którą APO13 rozwija.
:::

---

<!-- slajd: rozwiazany -->
<!-- podpowiedz: Polityka, zakres ochrony i plan na rok to system, a nie codzienna ochrona. -->
# Rozwiązujemy razem

:::rozwiazany
Biuro rachunkowe po wycieku danych klienta przegląda politykę bezpieczeństwa informacji. Kierownik ustala, które dane chronić najbardziej, i rozpisuje plan działań na rok. Planuje też przegląd całego systemu ochrony co pół roku. Który proces COBIT 5 najlepiej opisuje tę pracę?
- A. DSS05 Zarządzanie usługami bezpieczeństwa
- B. APO13 Zarządzanie bezpieczeństwem
- C. APO12 Zarządzanie ryzykiem
- D. EDM03 Zapewnienie optymalizacji ryzyka
+++
**Krok 1 – co jest pytane?** Słowa-klucze: **polityka bezpieczeństwa informacji**, **plan działań** i **przegląd całego systemu**.
+++
**Krok 2 – jaka kategoria COBIT?** Pracuje kierownik, który planuje i organizuje ochronę. To domena APO, proces bezpieczeństwa.
+++
**Krok 3 – eliminacja.** A – *inna kategoria*: DSS05 to codzienne zabezpieczanie, np. konta i antywirus, a tu powstaje polityka i plan. C – *zbyt wąskie*: APO12 obejmuje całe ryzyko IT, ale nie buduje systemu bezpieczeństwa informacji. D – *inna kategoria*: EDM03 to Ład i apetyt na ryzyko, a tu działa kierownik.
+++
**Odpowiedź: B.** Dlaczego: polityka, plan i przegląd systemu bezpieczeństwa informacji to APO13.
:::

:::wykladowca
Słowa-klucze to polityka, plan działań i przegląd całego systemu. Nikt tu nie ustawia haseł ani nie blokuje kont. Kierownik buduje system ochrony, więc to APO13. DSS05 kusi, bo też dotyczy bezpieczeństwa, ale to codzienna ochrona. APO12 kusi, bo wyciek to ryzyko. Ale tu nie chodzi o rejestr wszystkich ryzyk IT, tylko o system bezpieczeństwa informacji. EDM03 kusi słowem „ryzyko”, ale to proces Ładu. Zapamiętajcie: polityka i plan to APO13, ręce na klawiaturze to DSS05.
:::

---

<!-- slajd: wlasne-slowa -->
<!-- typ SD: F – syntetyzujący -->
# Co już umiesz: domena APO w całości

- **APO11** (*Quality*): standard jakości i doskonalenie ≠ MEA01 (przekrojowy pomiar i raport).
- **APO12** (*Risk*): rejestr ryzyk i reakcje ≠ EDM03 (apetyt na ryzyko) ≠ MEA02 (ocena kontroli).
- **APO13** (*Security*): polityka, plan i przegląd ISMS ≠ DSS05 (codzienna ochrona).
- Znasz już wszystkie 13 procesów APO: od organizacji pracy IT (APO01) po bezpieczeństwo (APO13).

:::wlasne-slowa
Wytłumacz Kasi Nowik w 3–4 zdaniach, czym różni się APO13 od DSS05. Podaj przykład z komendy.
???
„APO13 to system bezpieczeństwa informacji. Sikora pisze w nim politykę, ustala, co chronić najbardziej, na przykład listę numerów OSP, i co pół roku przegląda całość. DSS05 to codzienna ochrona. Ola Dudek nadaje konta, ustawia hasła, pilnuje antywirusa i blokuje podejrzane logowanie. APO13 mówi, jak chronimy, a DSS05 robi to każdego dnia.”
:::

**Co dalej i dlaczego:** domena APO jest zamknięta. W lekcji 1.20 przechodzisz do domeny BAI, w której plany zamieniają się w gotowe rozwiązania.

:::wykladowca
Zamknęliście domenę APO. Trzynaście procesów planowania i organizowania: od organizacji pracy IT po bezpieczeństwo. Dziś doszły jakość, ryzyko i bezpieczeństwo. Każdy z nich ma sąsiada w innej domenie i to jest najczęstsza pułapka egzaminu. Teraz wytłumaczcie Kasi Nowik różnicę między APO13 a DSS05. Kasia codziennie loguje się do Syreny, więc zna hasła i konta. Pokażcie jej, że to dopiero codzienna ochrona. Polityka i plan, które za tym stoją, to APO13.
:::
