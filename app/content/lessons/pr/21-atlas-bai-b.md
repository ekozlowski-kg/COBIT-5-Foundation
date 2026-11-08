---
id: pr-21-atlas-bai-b
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: "Czy wolno, czy działa, czy ludzie z tego korzystają – jak odróżnić BAI05, BAI06 i BAI07?"
lekcja: "1.21"
dzien: 7
sylabus: [PR-01-04]
minuty: 16
priorytet: 2
wielkiObraz: 5
cel:
  - "Potrafię przypisać działanie przy wdrażaniu zmiany do BAI05, BAI06 albo BAI07."
  - "Potrafię wyjaśnić, dlaczego zmiana awaryjna przy incydencie nadal podlega BAI06."
wprowadza: [proc-bai05, proc-bai06, proc-bai07]
wymaga: [pr-20-atlas-bai-a]
twierdzenia:
  - "BAI05 dba, żeby ludzie przyjęli nowy sposób pracy i nie wrócili do starych nawyków."
  - "BAI06 ocenia, zatwierdza i kontroluje każdą zmianę w systemach i procesach."
  - "BAI07 prowadzi testy akceptacyjne z użytkownikami i przejście do eksploatacji."
  - "Zmiana awaryjna idzie szybszą ścieżką BAI06, ale jej nie omija."
typowePytania: [{"pytanie": "„Zarządzanie zmianami” to przekonywanie ludzi do zmiany?", "odpowiedz": "Nie. Ludzie, opór i nawyki to BAI05. BAI06 „Zarządzanie zmianami” ocenia i zatwierdza zmiany w systemach i procesach."}, {"pytanie": "Testy są w BAI03 i w BAI07. Czym się różnią?", "odpowiedz": "BAI03 sprawdza, czy rozwiązanie zbudowano dobrze. BAI07 sprawdza z użytkownikami, czy można je uruchomić, i przeprowadza przejście."}, {"pytanie": "W nocy nie ma czasu na procedury. Zmiana awaryjna jest poza BAI06?", "odpowiedz": "Nie. Zmianę awaryjną wolno wprowadzić szybciej, ale trzeba ją zarejestrować oraz ocenić i zatwierdzić po fakcie."}]
zgadnij: [q-atl-bai-b-01]
cwiczenia: [q-atl-bai-b-02, q-atl-bai-b-03, q-atl-bai-b-04]
zapas: [q-atl-bai-b-05, q-atl-bai-b-06]
kontrolaAutora: { data: null, kto: null, uwagi: "atlas procesów – do przeglądu" }
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Dlaczego słowo „zmiana” prowadzi do trzech różnych procesów?

:::kontekst psp
**Trzy pytania jednej zmiany**
Ola Dudek, informatyczka w komendzie, chce przestawić w Syrenie kolejność alarmów: najpierw OSP, potem JRG (jednostka ratowniczo-gaśnicza). Rada ds. Informatyki pyta: „Czy wolno to zrobić i kiedy?”. Dyżurni pytają: „Czy to działa w prawdziwym alarmie?”. A asp. sztab. Paweł Grab, doświadczony dyżurny, mówi: „Ja i tak zadzwonię do OSP z telefonu”. Każde pytanie należy do innego procesu: [[proc-bai06|BAI06]], [[proc-bai07|BAI07]] i [[proc-bai05|BAI05]].
:::

**Wniosek:** jedna zmiana stawia trzy pytania: czy wolno, czy działa i czy ludzie z tego korzystają.

:::wykladowca
Ta trójka procesów myli się na egzaminie częściej niż inne. Wszystkie trzy mają w nazwie słowo „zmiana”. A jednak każdy odpowiada na inne pytanie. Pierwsze pytanie zadaje Rada ds. Informatyki: czy wolno to zmienić i kiedy. Drugie zadają dyżurni: czy to naprawdę działa w realnym alarmie i czy możemy się przełączyć. Trzecie pytanie zadaje sobie komendantka, patrząc na Graba: czy ludzie w ogóle będą z tego korzystać. Dziś nazwiemy te trzy pytania. Po lekcji każde z nich przypiszecie do właściwego procesu bez patrzenia na nazwę.
:::

:::pytanie-uczestnika
pytanie: Czy to nie wystarczy, że system działa?
odpowiedz: Nie. System może być zatwierdzony i odebrany, a ludzie i tak wrócą do starego telefonu. Wtedy zmiana nie daje korzyści.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta procesu) -->
<!-- podpowiedz: BAI05 = ludzie, kultura, opór, nawyki. -->
# BAI05: zmieniasz nawyki ludzi, a nie tylko ekran

**[[proc-bai05]]** · EN: *BAI05 Manage Organisational Change Enablement* (wym. „menydż organajzejszynal czejndż inejblment”).
Nazwa egzaminu PL niepotwierdzona: rozpoznawaj proces po kodzie i słowach *Organisational Change*.

**Po ludzku:** przygotowujesz ludzi na nowy sposób pracy, żeby go zrozumieli, przyjęli i nie wrócili do starych nawyków.

:::kontekst zycie
**Babcia i smartfon.** Wnuczka nie tylko daje babci telefon. Tłumaczy, po co są wideorozmowy, uczy po kawałku i chwali za pierwszy SMS. Przez miesiąc dzwoni zapytać, jak idzie.
:::

:::glebiej proc-bai05
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** BAI05 to ludzka strona zmiany: komunikacja, opór, szkolenie i utrwalenie nowych nawyków.

:::wykladowca
BAI05 po angielsku to Manage Organisational Change Enablement. Podręcznik mówi: zarządzanie wdrażaniem zmian organizacyjnych. Chodzi o ludzi. Nowy system może działać idealnie, a ludzie i tak będą robić po staremu. Tak jest z Grabem, który woli telefon. BAI05 tłumaczy, po co jest zmiana, szuka sojuszników i ogłasza pierwsze sukcesy. W komendzie Kasia Nowik zostaje „ambasadorką” i pomaga kolegom na zmianach. Ważne: BAI05 nie kończy się na szkoleniu. Obejmuje też utrwalenie zmiany, żeby ludzie nie wrócili do starych nawyków po miesiącu.
:::

:::sb nie-mylic
Opór, kultura i nawyki to BAI05, a nie BAI06. Podręcznikowa nazwa BAI06 „Zarządzanie zmianami” kusi przy pytaniach o ludzi.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta procesu) -->
<!-- podpowiedz: BAI06 = zgłoś, oceń wpływ, zatwierdź, wprowadź, zapisz. -->
# BAI06: żadna poprawka w systemie nie wchodzi „na dziko”

**[[proc-bai06]]** · EN: *BAI06 Manage Changes* (wym. „menydż czejndżyz”).
Nazwa egzaminu PL niepotwierdzona: rozpoznawaj proces po kodzie i słowie *Changes*.

**Po ludzku:** każdą poprawkę w systemach najpierw zgłaszasz, oceniasz i zatwierdzasz, a dopiero potem wprowadzasz i zapisujesz.

:::kontekst zycie
**Nowy domofon w bloku.** Administrator zgłasza pomysł, zarząd wspólnoty sprawdza koszt i wpływ na mieszkańców. Wyznacza termin i ogłasza go na klatce. Nikt nie wymienia domofonu w nocy bez zgody.
:::

:::glebiej proc-bai06
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** BAI06 odpowiada na pytanie „czy wolno to zmienić i kiedy?”, także w trybie awaryjnym.

:::wykladowca
BAI06 to Manage Changes, po polsku po prostu „Zarządzanie zmianami”. To kontrola zmian w systemach i procesach. Ola Dudek składa wniosek. Rada ds. Informatyki ocenia wpływ: co, jeśli zmiana zablokuje alarmy w nocy? Rada zatwierdza termin. Po wdrożeniu Dudek zamyka wniosek i aktualizuje dokumentację. A co z nocną awarią, kiedy nie ma czasu na radę? Przywrócenie usługi to obsługa incydentu, którą poznacie w lekcji 1.23. Ale jeśli przy tym zmieniacie ustawienie systemu, to jest zmiana awaryjna. Ona też należy do BAI06: szybsza ścieżka, rejestracja i zatwierdzenie po fakcie.
:::

:::pytanie-uczestnika
pytanie: Czy BAI06 kończy się, gdy zmiana jest wprowadzona?
odpowiedz: Nie. Zmianę trzeba jeszcze zamknąć i udokumentować. Nowe ustawienie trafia też do opisu konfiguracji, czyli do BAI10.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta procesu) -->
<!-- podpowiedz: BAI07 = przymiarka, odbiór, przełączenie, wsparcie na starcie. -->
# BAI07: użytkownik sprawdza i odbiera, a potem bezpiecznie się przełączasz

**[[proc-bai07]]** · EN: *BAI07 Manage Change Acceptance and Transitioning* (wym. „menydż czejndż akseptens end trenziszyning”).
Nazwa egzaminu PL niepotwierdzona: rozpoznawaj proces po kodzie i słowach *Acceptance and Transitioning*. W obiegu jest też forma „akceptacja zmian i przekazanie do eksploatacji”.

**Po ludzku:** zanim nowe rozwiązanie zacznie działać naprawdę, użytkownicy je sprawdzają i odbierają, a potem bezpiecznie się przełączasz.

:::kontekst zycie
**Odbiór mieszkania.** Chodzisz z listą usterek, odkręcasz krany i sprawdzasz okna. Podpisujesz protokół i przenosisz meble. Przez pierwszy miesiąc deweloper szybciej reaguje na zgłoszenia.
:::

:::glebiej proc-bai07
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** BAI07 odpowiada na pytanie „czy działa u użytkownika i czy możemy się przełączyć?”.

:::wykladowca
BAI07 to Manage Change Acceptance and Transitioning, czyli akceptacja zmian i przejście. To przymiarka i odbiór. Grab i Nowik testują nową Syrenę na stanowisku zapasowym. Przechodzą scenariusz z życia: pożar w Zawilcach, alarm do OSP i potwierdzenie. Dopiero po podpisaniu odbioru Ola Dudek przełącza dyżurnych na nowy system. Przez dwa tygodnie jest pod telefonem. Zapamiętajcie różnicę z poprzedniej lekcji. Testy w BAI03 sprawdzają, czy zbudowano dobrze. Testy akceptacyjne w BAI07 sprawdzają z użytkownikami, czy rozwiązanie nadaje się do uruchomienia. Po starcie codzienną pracę przejmuje domena DSS.
:::

---

<!-- slajd: porownanie -->
<!-- typ SD: E – porównawczy -->
<!-- podpowiedz: System czy ludzie? Zgoda czy odbiór? -->
# Jedna zmiana, trzy pytania – i dwie pułapki obok

| Para | Pytanie rozstrzygające | Odpowiedź |
|---|---|---|
| BAI05 / BAI06 / BAI07 | Czy ludzie korzystają? Czy wolno? Czy działa i przełączamy? | ludzie → BAI05; zgoda → BAI06; odbiór i przejście → BAI07 |
| BAI03 / BAI07 | Kto testuje i po co? | zespół budujący, „zbudowane dobrze?” → BAI03; użytkownicy, „uruchamiamy?” → BAI07 |
| BAI06 / DSS02 (lekcja 1.23) | Przywracam usługę czy zmieniam system? | przywrócenie po awarii → DSS02; zmiana ustawienia, nawet awaryjna → BAI06 |

:::mapa domena-bai
BAI05, BAI06 i BAI07 leżą obok siebie – jak trzy etapy jednej zmiany.
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** pytaj „co trzeba zmienić – system czy ludzi?”, a potem „zgoda czy odbiór?”.

:::wykladowca
Zbierzmy to w tabeli. Pierwszy wiersz to sedno lekcji. Gdy pytanie dotyczy ludzi, ich oporu i nawyków, wybierasz BAI05. Gdy dotyczy zgody na zmianę, oceny wpływu i terminu, wybierasz BAI06. Gdy dotyczy testów z użytkownikami, odbioru i przełączenia, wybierasz BAI07. Drugi wiersz przypomina parę z lekcji 1.20: testy są i w BAI03, i w BAI07, ale robią je inni ludzie i w innym celu. Trzeci wiersz to zapowiedź. Nocna awaria to incydent w DSS02. Gdy przy naprawie zmieniacie system, wchodzi zmiana awaryjna w BAI06.
:::

---

<!-- slajd: wlasne-slowa -->
# Wytłumacz to Kasi

:::wlasne-slowa
Kasia Nowik pyta: „Zarządzanie zmianami to chyba przekonywanie ludzi do zmian, prawda?”. Wytłumacz jej w 3 zdaniach, czym różni się BAI05 od BAI06. Dodaj jedno zdanie o BAI07.
???
„Nie do końca. BAI06 Manage Changes to kontrola zmian w systemach: wniosek, ocena wpływu, zgoda, termin i zapis. Przekonywanie ludzi, ich opór i nawyki to BAI05 Manage Organisational Change Enablement. A testy z dyżurnymi i przełączenie na nową Syrenę to BAI07 Manage Change Acceptance and Transitioning.”
:::

:::wykladowca
Teraz Wasza kolej. Kasia zadaje pytanie, które zadaje wielu kursantów. Nazwa „Zarządzanie zmianami” brzmi tak, jakby chodziło o ludzi. Waszym zadaniem jest ją wyprowadzić z błędu. Powiedzcie trzy zdania, najlepiej na głos. Użyjcie angielskich nazw procesów, bo one najlepiej pokazują różnicę. Changes to zmiany w systemach. Organisational Change to zmiana w organizacji i w ludziach. Acceptance and Transitioning to odbiór i przejście. Potem porównajcie z wzorcem i oceńcie się uczciwie. Jeśli pomyliliście BAI05 z BAI06, wróćcie do porównania.
:::

---

<!-- slajd: rozwiazany -->
# Rozwiązujemy razem

:::rozwiazany
Biuro rachunkowe przechodzi na nowy program do faktur. Program jest gotowy i przetestowany przez dostawcę. Teraz trzy księgowe przez tydzień wystawiają w nim faktury z prawdziwego miesiąca i podpisują odbiór. W sobotę biuro przenosi dane i wyłącza stary program. Który proces COBIT 5 najlepiej opisuje to działanie?
- A. BAI05 Zarządzanie wdrażaniem zmian organizacyjnych
- B. BAI07 Zarządzanie procesem akceptacji zmian i przejścia
- C. BAI06 Zarządzanie zmianami
- D. BAI03 Zarządzanie identyfikacją i budowaniem rozwiązań
+++
**Krok 1 – co jest pytane?** Słowa-klucze: **użytkownicy testują**, **podpisują odbiór**, **przenoszą dane** i **wyłączają stary program**.
+++
**Krok 2 – jaka kategoria COBIT?** Rozwiązanie już zbudowano. Teraz trwa odbiór i przejście do codziennej pracy w domenie BAI.
+++
**Krok 3 – eliminacja.** A – *inna kategoria*: nikt się nie opiera, nie ma tu pracy z nawykami ludzi. C – *prawda nie na temat*: zgoda na zmianę mogła zapaść wcześniej, ale opis dotyczy odbioru. D – *zbyt wąskie*: testy dostawcy już się odbyły, a teraz testują użytkownicy.
+++
**Odpowiedź: B.** Dlaczego: testy akceptacyjne z użytkownikami, odbiór i przełączenie to BAI07.
:::

**Co dalej i dlaczego:** w lekcji 1.22 domkniesz domenę BAI: wiedza, „zasoby”, które są majątkiem, i konfiguracja.

:::wykladowca
Przejdźmy to razem. Dostawca już przetestował program, więc budowa jest za nami. Teraz testują księgowe, czyli użytkownicy. Pracują na prawdziwych danych, podpisują odbiór, a w sobotę następuje przełączenie. To klasyczny obraz BAI07. Dlaczego nie BAI05? Bo nikt się nie opiera i nie trzeba zmieniać nawyków. Dlaczego nie BAI06? Zgoda na zmianę mogła zapaść wcześniej, ale opis mówi o odbiorze. Dlaczego nie BAI03? Bo testy dostawcy już minęły. Odpowiedź to BAI07. W następnej lekcji domkniemy domenę BAI trzema ostatnimi procesami.
:::
