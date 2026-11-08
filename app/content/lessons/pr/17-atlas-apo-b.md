---
id: pr-17-atlas-apo-b
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: "APO05–APO07: Zarządzanie wybiera inwestycje, pilnuje pieniędzy i dba o ludzi"
lekcja: "1.17"
dzien: 6
sylabus: [PR-01-04]
minuty: 16
priorytet: 2
wielkiObraz: 5
cel:
  - "Potrafię rozpoznać APO05, APO06 i APO07 po kodzie, nazwie polskiej i słowie-kluczu z nazwy angielskiej."
  - "Potrafię odróżnić APO05 od BAI01 i EDM02, APO06 od APO05 oraz APO07 od EDM04 i BAI09."
wprowadza: [proc-apo05, proc-apo06, proc-apo07]
wymaga: [pr-16-atlas-apo-a]
twierdzenia:
  - "APO05 wybiera i równoważy cały zestaw inwestycji IT, a nie prowadzi pojedynczego projektu."
  - "APO06 planuje budżet IT, śledzi koszty i wyjaśnia odchylenia."
  - "APO07 dba o ludzi w IT: obsadę, kompetencje, szkolenia, zastępstwa i ocenę."
  - "Na egzaminie APO05 to „Zarządzanie Portfelem”, a w podręczniku „Zarządzanie portfelem projektów”."
typowePytania:
  - { pytanie: "Portfel to lista projektów, więc APO05 i BAI01 to to samo?", odpowiedz: "Nie. APO05 wybiera i równoważy zestaw inwestycji. BAI01 prowadzi jeden program albo projekt do końca." }
  - { pytanie: "APO06 decyduje, które projekty dostaną pieniądze?", odpowiedz: "Nie. Wybór inwestycji to APO05. APO06 planuje budżet, śledzi wydatki i wyjaśnia, skąd biorą się koszty." }
  - { pytanie: "Każde pytanie o ludzi w IT to EDM04, bo ludzie są zasobem?", odpowiedz: "Nie. Szkolenia, obsada i zastępstwa to APO07. EDM04 to kierunek Ładu dla wszystkich zasobów naraz." }
zgadnij: [q-atl-apo-b-01]
cwiczenia: [q-atl-apo-b-02, q-atl-apo-b-03, q-atl-apo-b-04]
zapas: [q-atl-apo-b-05, q-atl-apo-b-06]
kontrolaAutora: { data: null, kto: null, uwagi: "atlas procesów – do przeglądu" }
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Co zrobić, gdy pomysłów jest pięć, pieniędzy na dwa, a ekspert tylko jeden?

:::kontekst psp
**Poniedziałek z księgową**
Kpt. Marek Sikora, naczelnik informatyki, ma listę pięciu pomysłów dla Syreny (systemu do wysyłania alarmów). Budżet starczy na dwa. Główna księgowa Halina Mak przynosi faktury: koszt SMS-ów po ćwiczeniach wzrósł. A tryb awaryjny Syreny zna tylko dyżurny Paweł Grab. Sikora musi wybrać inwestycje, wyjaśnić koszty i zadbać o zastępstwo dla Graba. To trzy procesy APO: APO05 (portfel), APO06 (budżet i koszty) i APO07 (ludzie).
:::

**Wniosek:** wybór inwestycji, kontrola pieniędzy i opieka nad ludźmi to trzy różne prace Zarządzania.

:::wykladowca
W poprzedniej lekcji Sikora zorganizował wydział, napisał strategię i ułożył architekturę. Teraz zderza się z rzeczywistością. Pomysłów jest więcej niż pieniędzy. Koszty rosną szybciej, niż planował. A najważniejszą umiejętność ma jedna osoba. Każdy z tych kłopotów rozwiązuje inny proces domeny APO. Uwaga: wszystkie trzy dotyczą pieniędzy albo zasobów. Dlatego na egzaminie łatwo je pomylić ze sobą i z procesami Ładu, które już znacie: EDM02 i EDM04.
:::

:::pytanie-uczestnika
pytanie: Czy księgowa w ogóle pracuje w procesach COBIT 5?
odpowiedz: Tak. Procesy dotyczą całej organizacji, nie tylko działu IT. Księgowa Mak pracuje razem z Sikorą w APO06.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (karta procesu) -->
<!-- podpowiedz: APO05 = wybór i równowaga całego zestawu inwestycji. Egzamin: „Zarządzanie Portfelem”. -->
# APO05: w które pomysły wydać ograniczone pieniądze?

**APO05** – [[proc-apo05|Zarządzanie Portfelem]] (podręcznik: „Zarządzanie portfelem projektów”)
EN: *Manage Portfolio* (wym. „menydż portfołlioł”)

**Po ludzku:** wybieranie, w które pomysły wydać ograniczone pieniądze, i pilnowanie, żeby cały zestaw się opłacał.

:::kontekst zycie
Masz 20 tys. zł i pięć pomysłów: auto, kurs językowy, wakacje, remont, lokata. Nie starczy na wszystko. Wybierasz zestaw, który da najwięcej, a co pół roku sprawdzasz, czy wybór był dobry.
:::

:::glebiej proc-apo05
Szczebel „skrajny”: kiedy decyzja o jednym projekcie należy do portfela, a nie do projektu.
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** APO05 decyduje o zestawie inwestycji, a projekt prowadzi BAI01, a wartość rozlicza EDM02.

:::wykladowca
Pierwszy proces tej lekcji to APO05, po angielsku Manage Portfolio. Na egzaminie brzmi „Zarządzanie Portfelem”. W podręczniku jest „Zarządzanie portfelem projektów”, ale portfel obejmuje też programy i działające usługi IT. Sikora porównuje pięć pomysłów: korzyści, koszty i ryzyka. Wybiera dwa, a resztę odkłada. Gdy jeden projekt drożeje, w portfelu decyduje, czy go kontynuować. Pamiętajcie trzy poziomy. Ład w EDM02 rozlicza wartość. Zarządzanie w APO05 wybiera i równoważy zestaw. Kierownik projektu w BAI01 dowozi jeden projekt.
:::

:::sb skrot
*Manage* – zarządzaj; *Portfolio* – portfel, czyli zestaw programów, projektów i usług, w które organizacja inwestuje.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (karta procesu) -->
<!-- podpowiedz: APO06 = budżet, śledzenie kosztów, odchylenia, podział kosztów. -->
# APO06: ile kosztuje informatyka i skąd biorą się te koszty?

**APO06** – [[proc-apo06|Zarządzanie budżetem i kosztami]]
EN: *Manage Budget and Costs* (wym. „menydż badżyt end kosts”)

**Po ludzku:** planowanie, ile pieniędzy pójdzie na informatykę, pilnowanie wydatków i wyjaśnianie, skąd biorą się koszty.

*Nazwa egzaminacyjna nie jest potwierdzona i może brzmieć inaczej.* Rozpoznawaj proces po kodzie APO06 i słowach EN *Budget and Costs*.

:::kontekst zycie
Prowadzisz zeszyt wydatków domowych. Planujesz miesiąc, zapisujesz każdy rachunek i sprawdzasz, czemu prąd kosztował więcej. Koszt wspólnego internetu dzielisz między współlokatorów.
:::

:::glebiej proc-apo06
Szczebel „skrajny”: jedna podwyżka u dostawcy dotyka aż czterech procesów.
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** APO06 liczy i kontroluje pieniądze na IT, ale nie wybiera, w co inwestować.

:::wykladowca
Drugi proces to APO06, po angielsku Manage Budget and Costs. Sikora z księgową Mak układa budżet IT komendy. Co miesiąc sprawdzają faktury za abonament Syreny i SMS-y. Gdy koszt rośnie, wyjaśniają dlaczego: więcej alarmów czy wyższa stawka. Koszty dzielą też między jednostki, które korzystają z Syreny. Na egzaminie słowa „budżet IT”, „śledzenie kosztów”, „odchylenia” i „rozliczanie kosztów” wskazują APO06. Jeśli pytanie brzmi „które projekty finansujemy?”, to już APO05.
:::

:::sb skrot
*Manage* – zarządzaj; *Budget* – budżet; *Costs* – koszty. Uchwalony budżet to nie koniec pracy: APO06 śledzi koszty przez cały rok.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (karta procesu) -->
<!-- podpowiedz: APO07 = ludzie: obsada, kompetencje, szkolenia, zastępstwa. -->
# APO07: kto w IT umie to zrobić i kto go zastąpi?

**APO07** – [[proc-apo07|Zarządzanie zasobami ludzkimi]]
EN: *Manage Human Resources* (wym. „menydż hjumen rizorsiz”)

**Po ludzku:** dbanie o ludzi w informatyce: kogo zatrudnić, czego ich nauczyć, kto kogo zastąpi i jak ich oceniać.

*Nazwa egzaminacyjna nie jest potwierdzona i może brzmieć inaczej.* Rozpoznawaj proces po kodzie APO07 i słowach EN *Human Resources*.

:::kontekst zycie
W rodzinnej piekarni tylko dziadek umie zrobić zakwas. Gdy zachoruje, nie ma chleba. Rodzina postanawia, że wnuczka uczy się od dziadka i co tydzień piecze z nim.
:::

:::glebiej proc-apo07
Szczebel „skrajny”: pytanie o „zależność od jednego eksperta” i cztery kuszące odpowiedzi.
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** APO07 to praca z ludźmi IT, a nie kierunek dla wszystkich zasobów (EDM04) ani spis sprzętu (BAI09).

:::wykladowca
Trzeci proces to APO07, po angielsku Manage Human Resources. Komendantka w EDM04 ustaliła kierunek: żadna kluczowa czynność nie może zależeć od jednej osoby. Sikora wykonuje to w APO07. Spisuje umiejętności potrzebne w każdej roli i planuje szkolenia. Dyżurna Kasia Nowik ćwiczy tryb awaryjny z Grabem, żeby móc go zastąpić. APO07 obejmuje też osoby z zewnątrz, które pracują dla IT. Uwaga: spisanie instrukcji trybu awaryjnego to wiedza, czyli BAI08 (Zarządzanie wiedzą). APO07 pilnuje, żeby kolejna osoba naprawdę umiała to zrobić.
:::

:::sb skrot
*Manage* – zarządzaj; *Human Resources* – zasoby ludzkie. Trzy „zasoby” po polsku: *Resource* (EDM04), *Human Resources* (APO07), *Assets* (BAI09).
:::

---

<!-- slajd: porownanie -->
<!-- typ SD: E – porównawczy -->
# Portfel, projekt, budżet, ludzie: która praca należy do którego procesu?

:::mapa domena-apo
APO05, APO06 i APO07 leżą w środku 13 procesów domeny APO.
:::

| Para | Proces z tej lekcji | Sąsiad | Pytanie rozstrzygające |
|---|---|---|---|
| APO05 / BAI01 | APO05 wybiera i równoważy zestaw inwestycji | BAI01 prowadzi jeden program albo projekt do końca | Decyzja **o** projekcie na tle innych czy decyzja **wewnątrz** projektu? |
| APO05 / EDM02 | APO05 wybiera inwestycje (Zarządzanie) | EDM02 ocenia, czy przyszła wartość (Ład) | „W co inwestujemy?” czy „czy to się opłaciło?” |
| APO06 / APO05 | APO06 liczy i kontroluje koszty | APO05 wybiera, co finansować | Liczymy pieniądze czy wybieramy inwestycję? |
| APO07 / EDM04 / BAI09 | APO07 dba o ludzi: obsada, szkolenia, zastępstwa | EDM04 to kierunek dla wszystkich zasobów; BAI09 to spis sprzętu i licencji | Ludzie, wszystkie zasoby naraz czy konkretne aktywa? |

BAI01 i BAI09 poznasz w części atlasu o domenie BAI.

**Wniosek:** przy pieniądzach i ludziach pytaj o poziom (Ład czy Zarządzanie) i o zakres (zestaw, jeden projekt, koszty, ludzie).

:::wykladowca
Ten slajd rozwiązuje najczęstsze pomyłki tej lekcji. Portfel i projekt dzieli zakres decyzji. Kierownik projektu zmienia harmonogram w BAI01. Sikora decyduje, czy projekt w ogóle kontynuować na tle innych, w APO05. Portfel i Ład dzieli poziom. Sikora wybiera, a komendantka ocenia wartość w EDM02. Budżet i portfel dzieli rodzaj pracy. Liczenie i kontrola to APO06, wybór to APO05. Przy ludziach pamiętajcie o trzech „zasobach”. Szkolenia i zastępstwa to APO07, kierunek Ładu to EDM04, a laptopy i licencje to BAI09.
:::

:::pytanie-uczestnika
pytanie: Co, jeśli opóźniony projekt blokuje pieniądze na inny?
odpowiedz: Wtedy decyzja „wstrzymać i przesunąć pieniądze” dotyczy całego zestawu inwestycji. To APO05, choć chodzi o jeden projekt.
:::

---

<!-- slajd: rozwiazany -->
<!-- podpowiedz: Wybór z wielu wniosków i powtórny przegląd zestawu to portfel. -->
# Rozwiązujemy razem

:::rozwiazany
Kierownik informatyki szpitala powiatowego ma pięć wniosków o nowe systemy, a budżet na dwa. Porównuje korzyści i ryzyka, wybiera dwa wnioski, a trzy odkłada. Po pół roku sprawdza, czy ten zestaw nadal się opłaca, i jeden projekt wstrzymuje. Który proces COBIT 5 najlepiej opisuje tę pracę?
- A. APO05 Zarządzanie Portfelem
- B. APO06 Zarządzanie budżetem i kosztami
- C. BAI01 Zarządzanie programami i projektami
- D. EDM02 Zapewnienie realizacji korzyści
+++
**Krok 1 – co jest pytane?** Słowa-klucze: **wybiera dwa z pięciu**, **zestaw** i **wstrzymuje projekt** na tle innych.
+++
**Krok 2 – jaka kategoria COBIT?** Pracuje kierownik informatyki, więc to Zarządzanie. Wybór i równoważenie zestawu inwestycji to portfel w domenie APO.
+++
**Krok 3 – eliminacja.** B – *prawda nie na temat*: budżet jest tłem, ale APO06 liczy koszty, a nie wybiera inwestycji. C – *zbyt wąskie*: BAI01 prowadzi jeden projekt od środka. D – *inna kategoria*: EDM02 to Ład, a tu decyduje kierownik IT.
+++
**Odpowiedź: A.** Dlaczego: wybór, równoważenie i przegląd całego zestawu inwestycji IT to APO05.
:::

:::wykladowca
Najpierw słowa-klucze. Kierownik wybiera dwa wnioski z pięciu i patrzy na cały zestaw. Po pół roku jeden projekt wstrzymuje, bo zestaw musi się opłacać. To typowy portfel, czyli APO05. Budżet kusi, bo chodzi o pieniądze, ale APO06 liczy i kontroluje koszty. BAI01 kusi słowem „projekt”, ale tam decyduje się wewnątrz jednego projektu. EDM02 kusi słowem „korzyści”, ale to proces Ładu, a tu działa kierownik informatyki. Zapamiętajcie: decyzja o projekcie na tle innych to portfel.
:::

---

<!-- slajd: wlasne-slowa -->
<!-- typ SD: F – syntetyzujący -->
# Co już umiesz: pieniądze i ludzie w domenie APO

- **APO05** (*Portfolio*), na egzaminie „Zarządzanie Portfelem”: wybór i równowaga zestawu inwestycji ≠ BAI01 (jeden projekt) ≠ EDM02 (ocena wartości).
- **APO06** (*Budget and Costs*): budżet, koszty, odchylenia ≠ APO05 (wybór inwestycji).
- **APO07** (*Human Resources*): obsada, szkolenia, zastępstwa ≠ EDM04 (wszystkie zasoby) ≠ BAI09 (aktywa).

:::wlasne-slowa
Wytłumacz Kasi Nowik w 3–4 zdaniach, czym różni się APO05 od BAI01. Podaj przykład z Syreną.
???
„APO05 to portfel. Sikora wybiera w nim, które z pięciu pomysłów dla Syreny dostaną pieniądze, i pilnuje, żeby cały zestaw się opłacał. BAI01 to prowadzenie jednego projektu, na przykład zasilania awaryjnego: zakres, termin, budżet. Gdy kierownik projektu przesuwa testy, to BAI01. Gdy Sikora wstrzymuje projekt, żeby dać pieniądze innemu, to APO05.”
:::

**Co dalej i dlaczego:** w lekcji 1.18 poznasz APO08, APO09 i APO10, czyli relacje, umowy o usługi i dostawców.

:::wykladowca
Podsumujmy. APO05 wybiera i równoważy zestaw inwestycji. Na egzaminie nazywa się „Zarządzanie Portfelem”. APO06 liczy pieniądze i wyjaśnia koszty. APO07 dba o ludzi i zastępstwa. Teraz wytłumaczcie Kasi Nowik, czym portfel różni się od projektu. Pomóżcie sobie pytaniem: czy decyzja dotyczy wnętrza jednego projektu, czy jego miejsca wśród innych inwestycji? Pierwsza odpowiedź to BAI01, druga to APO05. Porównajcie wyjaśnienie ze wzorcem i dopiszcie, czego zabrakło.
:::
