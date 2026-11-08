---
id: mt-02-kaskada-od-konca
modul: MT
modulNazwa: Moduł MT – Ścieżka mentora
temat: "Kaskada celów od końca – po co istnieje ten proces?"
lekcja: "MT.2"
dzien: 12
sylabus: [PR-02-02, PR-02-03, PR-02-05, PR-02-06, PR-02-07]
minuty: 22
priorytet: 3
wielkiObraz: 2
cel: "Potrafię przejść kaskadę celów wstecz: od procesu i jego celu do potrzeby interesariusza i wyznacznika. Potrafię pokazać kursantowi, gdzie takie rozumowanie wstecz zawodzi."
wprowadza: []
wymaga: [pr-03-kaskada-celow, pr-04-cele-organizacji, pr-05-po-co-kaskada, pr-09b-kategorie-celow-aktywatora]
twierdzenia: ["Kaskadę czyta się wstecz pytaniem „po co?”: od celu aktywatora do potrzeby interesariusza.", "Jeden cel aktywatora może wspierać kilka celów związanych z informatyką, a jeden cel organizacji wymaga wielu celów IT.", "Tabele mapowania kaskady nie zawierają uniwersalnej prawdy i trzeba je dostosować.", "Wyznacznik zmienia potrzeby, a potrzeba przekłada się na cele organizacji."]
typowePytania: [{"pytanie": "Po co iść od końca, skoro kaskada płynie z góry na dół?", "odpowiedz": "Bo kursant zwykle zna swój proces, a nie strategię. Pytanie „po co?” prowadzi go od tego, co robi codziennie, do potrzeby interesariusza."}, {"pytanie": "Czyli każdy proces ma jeden cel organizacji nad sobą?", "odpowiedz": "Nie. Powiązania są wiele do wielu. Jeden proces wspiera kilka celów IT, a jeden cel IT wspiera kilka celów organizacji."}, {"pytanie": "Jeśli nie znajdę celu organizacji nad procesem, to proces jest zbędny?", "odpowiedz": "To sygnał do pytań, a nie wyrok. Może brakuje powiązania w Waszej kaskadzie, a może proces faktycznie ma niski priorytet."}]
zgadnij: [q-pre-mt-02]
cwiczenia: [q-men-mt-02-1, q-men-mt-02-2, q-mt-02-01, q-mt-02-04]
zapas: [q-mt-02-02, q-mt-02-03]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "Autokontrola autora (AI) wykonana 2026-11-08: źródła FW-PL s. 17–20 (il. 4–6). Konkretne powiązania DSS04 → cel IT → cel organizacji są przykładem kursu, bo Załączników B i C nie ma w korpusie. Czeka na przegląd człowieka."}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Dlaczego kursant nie widzi sensu „swojego” procesu?

Ola Dudek, informatyczka komendy, co kwartał testuje zapasowy serwer Syreny (systemu alarmowego komendy). Pyta: „Po co ja to robię? Serwer główny przecież działa”.

Kaskada celów zwykle płynie z góry na dół. Ola stoi na samym dole. Mentor prowadzi ją **w górę**, pytając „po co?”.

**Wniosek:** kto zna tylko swój proces, zrozumie kaskadę najszybciej, idąc od końca.

:::wykladowca
Zacznijmy od pytania, które słyszy każdy mentor. Ktoś wykonuje pracę, która wydaje mu się bez sensu. Ola testuje zapasowy serwer, choć główny działa od miesięcy. Jeśli zaczniecie od potrzeb interesariuszy i celów organizacji, Ola się wyłączy. To dla niej abstrakcja. Zróbcie odwrotnie. Zacznijcie od jej testu i pytajcie: po co? Każda odpowiedź przesunie Was o jeden szczebel w górę. Na końcu dojdziecie do pani Kaczmarek z Lipowej 7 i do strychu, który spłonął. Wtedy test nabierze sensu.
:::

:::pytanie-uczestnika
pytanie: Czy nie lepiej po prostu powiedzieć Oli, że tak każe procedura?
odpowiedz: Procedura mówi „co”, a kaskada mówi „po co”. Kto rozumie „po co”, sam zauważy, gdy procedura przestanie służyć celowi.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: B – objaśniający (zjawisko na pięciu przykładach) -->
# Pytanie „po co?” działa wszędzie

:::kontekst zycie
**Tankowanie przed trasą.** Po co tankujesz? Żeby dojechać. Po co dojechać? Bo babcia ma urodziny. Po co jechać na urodziny? Bo rodzinie zależy na tym, żeby być razem.
:::

:::kontekst biuro
**Kopia zapasowa w sekretariacie.** Po co kopia? Żeby nie stracić umów. Po co umowy? Żeby firma mogła wystawić faktury i dostać pieniądze.
:::

:::kontekst organizacja
**Przegląd wind w szpitalu.** Po co przegląd? Żeby winda nie stanęła. Po co winda? Żeby pacjent szybko trafił na blok operacyjny. Tego potrzebuje pacjent.
:::

:::kontekst psp
**Scena: „Po co mi ten zapasowy serwer?”.** Ola Dudek testuje zapasowy serwer Syreny. Naczelnik Marek Sikora pyta ją kolejno „po co?”. Dochodzą do nocy na Lipowej, gdy OSP Zawilce nie dostała alarmu. To właśnie [[kaskada-celow|kaskada celów]] czytana od końca.
:::

:::kontekst it
**COBIT 5.** Cel aktywatora (np. cel procesu) → cel związany z informatyką → cel organizacji → potrzeba interesariusza → wyznacznik (FW-PL s. 17–18, Rysunek 4).
:::

**Wniosek:** każde „po co?” to jeden szczebel kaskady w górę.

:::wykladowca
Ten mechanizm znacie z życia. Tankujecie, bo chcecie dojechać, a dojechać chcecie, bo rodzina chce być razem. W biurze robicie kopię, bo umowy dają pieniądze. W szpitalu przegląd windy ratuje czas pacjenta. Zauważcie, że łańcuch zawsze kończy się na człowieku i jego potrzebie. W COBIT 5 te szczeble mają nazwy. Na dole jest cel aktywatora, na przykład cel procesu. Wyżej cel związany z informatyką, potem cel organizacji, potrzeba interesariusza, a na samej górze wyznacznik, czyli to, co tę potrzebę zmieniło.
:::

---

<!-- slajd: proces -->
<!-- typ SD: C – procesowy (kaskada wstecz na historii Syreny) -->
# Pięć kroków wstecz: od testu serwera do nocy na Lipowej

| Krok wstecz | Szczebel kaskady | W komendzie (przykład kursu) |
|---|---|---|
| 0 | proces | DSS04 Zarządzanie ciągłością: Ola testuje zapasowy serwer |
| 1 | cel aktywatora (cel procesu) | „Syrena alarmuje także wtedy, gdy padnie serwer główny” |
| 2 | cel związany z informatyką | 07 „Dostarczanie usług IT zgodnie z wymogami biznesowymi” |
| 3 | cel organizacji | 7 „Ciągłość i dostępność usług biznesowych” (wymiar Klient) |
| 4 | potrzeba interesariusza | mieszkańcy i OSP: pomoc dociera szybko, także w nocy |
| 5 | wyznacznik | pożar przy Lipowej 7 i zapowiedź kontroli czasów dojazdu |

Numery i nazwy celów: FW-PL s. 19 (Rysunek 5 i Rysunek 6). Samo powiązanie DSS04 → cel IT 07 → cel 7 to **przykład kursu**. Oficjalne tabele są w Załącznikach B i C, których nie cytujemy.

:::zrodlo FW-PL 19 5
:::

**Wniosek:** rozumowanie wstecz kończy się dopiero na potrzebie i wyznaczniku, a nie na celu IT.

:::wykladowca
Przejdźmy łańcuch razem, szczebel po szczeblu. Ola testuje zapasowy serwer w procesie DSS04, czyli Zarządzanie ciągłością. Po co? Żeby Syrena alarmowała, nawet gdy padnie serwer główny. To cel procesu, czyli cel aktywatora. Po co? Żeby usługa alarmowania działała tak, jak potrzebuje komenda. To cel związany z informatyką. Po co? Żeby komenda zapewniała ciągłość swojej usługi, czyli pomocy. To cel organizacji siódmy. Po co? Bo mieszkańcy i OSP potrzebują szybkiej pomocy. A co tę potrzebę wyostrzyło? Pożar na Lipowej i zapowiedź kontroli. To wyznacznik.
:::

:::sb kontrowersja
Uczciwie: Framework PL podaje nazwy 17 celów organizacji i 17 celów IT (s. 19). Tabele, który cel IT wspiera który cel organizacji, są w Załączniku B, a powiązania z procesami w Załączniku C. Nasz łańcuch jest dydaktyczny, a nie odczytem z tabel.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (przypadek graniczny 1) -->
# Wstecz to nie jest jedna linia, tylko sieć

Kursant szuka „tego jednego” celu nad procesem. Tymczasem:
- jeden proces ma zwykle **kilka** celów i wspiera **kilka** celów IT;
- jeden cel IT wspiera **kilka** celów organizacji;
- tabele mapowania mają dwa poziomy siły powiązania: **P** (podstawowa) i **S** (wspierająca).

Cel organizacji 7 „Ciągłość i dostępność usług biznesowych” ma relację P tylko z **optymalizacją ryzyka**. Nie ma relacji z realizacją korzyści (FW-PL s. 19, Rysunek 5).

:::zrodlo FW-PL 19 5
:::

:::glebiej kaskada-celow
Szczebel „skrajny” pokazuje, dlaczego tabeli mapowania nie przepisuje się mechanicznie.
:::

**Wniosek:** idąc wstecz, wybierasz najważniejszą ścieżkę, ale mówisz kursantowi, że ścieżek jest więcej.

:::wykladowca
Tu zaczyna się poziom mentora. Kursant idzie wstecz i chce znaleźć jedną odpowiedź. Tymczasem kaskada to sieć. Test zapasowego serwera wspiera też bezpieczeństwo informacji i zarządzanie ryzykiem. Zobaczcie też ciekawostkę z Rysunku 5. Ciągłość usług ma relację podstawową z optymalizacją ryzyka, a nie z realizacją korzyści. To zaskakuje, bo kursant myśli: „ciągłość to korzyść”. Framework mówi: ciągłość to przede wszystkim ochrona przed ryzykiem przerwy. Taką obserwację warto pokazać kursantowi, bo uczy czytać tabele, a nie zgadywać.
:::

:::sb nie-mylic
P na Rysunku 5 to relacja **podstawowa** w kaskadzie. Nie ma nic wspólnego z oceną P (Pełny) w skali N/C/W/P.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku (przypadek graniczny 2 i teza) -->
# Gdy „po co?” nie znajduje odpowiedzi

Sikora idzie wstecz od raportu, który Dudek drukuje co tydzień od 2015 roku. Nikt go nie czyta. Żadne „po co?” nie prowadzi do celu organizacji.

:::teza praktyczna
sytuacja: Raport drukowany co tydzień nie wspiera żadnego celu IT ani celu organizacji komendy.
pytanie: Czy to znaczy, że trzeba go natychmiast skasować?
teza: Brak ścieżki w górę to sygnał do przeglądu, a nie automatyczny wyrok. Mentor uczy pytać: czy brakuje powiązania, czy brakuje sensu?
uzasadnienie: Kaskada pomaga ustalać priorytety wdrożenia, doskonalenia i audytu (FW-PL s. 20). Ostatecznie decyzję o priorytetach podejmuje Ład, a nie wykonawca.
powiazanie: Zasada 1; kaskada celów; EDM02
przyklad: Okazuje się, że raport czyta audytorka Ewa Lis przed kontrolą. Powiązanie istniało, tylko nikt go nie zapisał.
status: uproszczenie
refleksja: Jak zapytasz właściciela procesu, żeby nie poczuł się oskarżony o bezsensowną pracę?
:::

:::teza krytyczna
sytuacja: Sikora chce przepisać tabele mapowania z Frameworka jeden do jednego.
pytanie: Czy wierność tabelom to wierność COBIT 5?
teza: Nie. COBIT 5 sam mówi, że kaskada nie zawiera uniwersalnej prawdy i nie należy jej stosować mechanicznie.
uzasadnienie: Tabele nie uwzględniają wielkości organizacji ani branży. Pierwszą czynnością jest dostosowanie mapowania do własnej sytuacji.
powiazanie: Zasada 1; kaskada celów
przyklad: Komenda nadaje wagi celom organizacji: cel 7 dostaje najwyższą wagę po pożarze.
status: oficjalne
zrodlo: FW-PL 20
refleksja: Co odpowiesz kursantowi, który mówi: „Skoro to w COBIT, to tak musi być”?
:::

**Wniosek:** rozumowanie wstecz to test sensu, a tabele to wytyczna do dostosowania.

:::wykladowca
Ten slajd ma dwie tezy, bo dotyczy dwóch skrajności. Pierwsza: łańcuch „po co?” urywa się. Kursant od razu chce skasować proces. Nauczcie go ostrożności. Brak ścieżki może znaczyć, że nikt nie zapisał powiązania. Raport czytała audytorka. Druga skrajność to mechaniczne kopiowanie tabel. Na stronie 20 Framework mówi wprost: kaskada nie zawiera uniwersalnej prawdy. Każda organizacja ma ją dostosować, na przykład nadać wagi swoim celom. Mentor, który to rozumie, nie będzie bronił tabeli przed zdrowym rozsądkiem.
:::

---

<!-- slajd: porownanie -->
<!-- typ SD: E – porównawczy (wyznacznik a potrzeba) -->
# Szczyt kaskady: wyznacznik, potrzeba i zdarzenie wyzwalające

| Fakt | Pytanie o kaskadę celów | Pytanie o wdrożenie |
|---|---|---|
| Pożar przy Lipowej 7 | wyznacznik, który zmienia potrzeby | punkt zapalny („coś boli”) |
| Zapowiedź kontroli komendy wojewódzkiej | wyznacznik (zmiana w otoczeniu) | zdarzenie wyzwalające |
| „Pomoc ma docierać szybko” | potrzeba interesariusza | – |
| „Kupmy drugi serwer” | ani potrzeba, ani cel – to gotowe rozwiązanie | – |

:::zrodlo FW-PL 17
:::

**Wniosek:** ten sam fakt może być wyznacznikiem i zdarzeniem wyzwalającym; o nazwie decyduje pytanie.

:::wykladowca
Na szczycie łańcucha kursanci mylą trzy rzeczy. Wyznacznik to coś, co zmienia potrzeby interesariuszy, na przykład nowe przepisy albo pożar. Potrzeba to stan, który interesariusze chcą osiągnąć: szybka pomoc. Gotowe rozwiązanie, jak „kupmy drugi serwer”, nie jest ani potrzebą, ani celem. To pomysł, który trzeba sprawdzić kaskadą. Do tego zapowiedź kontroli jest wyznacznikiem w kaskadzie, a w module wdrożenia tym samym faktem, który nazywamy zdarzeniem wyzwalającym. Uczcie kursanta patrzeć na pytanie, a nie tylko na fakt.
:::

---

<!-- slajd: mapa -->
# Gdzie leży kaskada w COBIT 5?

:::mapa kaskada
Pięć szczebli kaskady: wyznaczniki → potrzeby interesariuszy → cele organizacji → cele związane z informatyką → cele aktywatora. Rozumowanie wstecz idzie po tych samych węzłach od prawej do lewej.
:::

**Wniosek:** rozumowanie wstecz nie dodaje nowych szczebli; przechodzi te same węzły w odwrotnej kolejności.

:::wykladowca
Spójrzcie na mapę. Kaskada ma pięć węzłów. Rozumowanie wstecz nie tworzy nowego modelu. Przechodzi te same węzły od końca. Zauważcie jedno: na mapie nie ma węzła „proces”. Proces to jeden z siedmiu aktywatorów. Jego cele są przykładem celów aktywatora. Jeśli kursant powie, że kaskada kończy się na procesach, pokażcie mu ten węzeł. Ostatni szczebel to cele aktywatora, a mogą je mieć także informacja, kultura czy struktury.
:::

---

<!-- slajd: rozwiazany -->
<!-- podpowiedz: Na którym szczeblu kaskady stoi zdanie „Syrena alarmuje mimo awarii serwera głównego”? -->
# Rozwiązujemy razem

:::rozwiazany
Mentor prowadzi kursanta wstecz od procesu DSS04. Zdanie „Syrena alarmuje także wtedy, gdy padnie serwer główny” to w kaskadzie:
- A. potrzeba interesariusza
- B. cel organizacji
- C. cel aktywatora
- D. wyznacznik
+++
**Krok 1 – co jest pytane?** Słowo-klucz: zdanie jest **konkretne** i przypięte do jednego procesu.
+++
**Krok 2 – jaka kategoria COBIT?** Szczeble kaskady: wyznacznik, potrzeba, cel organizacji, cel IT, cel aktywatora (FW-PL s. 18).
+++
**Krok 3 – eliminacja.** A – *inna kategoria*: potrzeba mówi o szybkiej pomocy, a nie o serwerze. B – *inna kategoria*: cel organizacji nie wspomina technologii. D – *odwrócone*: wyznacznik zmienia potrzeby, a to zdanie jest skutkiem kaskady.
+++
**Odpowiedź: C.** Dlaczego: konkretny, sprawdzalny cel jednego aktywatora (procesu) to cel aktywatora, czwarty krok kaskady.
:::

:::wykladowca
Rozwiążmy to razem. Słowo-klucz to konkret. Zdanie mówi o jednym systemie i jednym rodzaju awarii. Takie zdania leżą na samym dole kaskady. Potrzeba interesariusza jest szersza: szybka pomoc. Cel organizacji nie zawiera słowa o technologii. Wyznacznik jest na samej górze i to on zmienia potrzeby. Zostaje cel aktywatora. Zwróćcie uwagę, że kroki eliminacji są gotowym scenariuszem rozmowy z kursantem. Możecie je zadać jako pytania, zamiast podawać odpowiedź.
:::

---

<!-- slajd: wlasne-slowa -->
# W roli mentora: wytłumacz to Kasi Nowik

:::wlasne-slowa
Wytłumacz to kursantce Kasi Nowik, dyżurnej SK (stanowiska kierowania). Kasia aktualizuje co miesiąc listę numerów OSP w Syrenie i pyta: „Po co ja to robię?”. Przeprowadź ją wstecz przez kaskadę: 4–5 pytań „po co?” i nazwy szczebli. Dodaj jedno ostrzeżenie o przypadku granicznym.
???
„Po co aktualizujesz listę? Żeby numery w Syrenie były aktualne – to cel aktywatora Informacja. Po co? Żeby informacja była wiarygodna i dostępna, gdy dyżurny wysyła alarm – to cel związany z informatyką. Po co? Żeby komenda zapewniała ciągłość i dostępność swojej usługi – to cel organizacji. Po co? Bo mieszkańcy i OSP potrzebują szybkiej pomocy – to potrzeba. A potrzebę wyostrzył pożar przy Lipowej – to wyznacznik. Uwaga: Twoja lista wspiera też inne cele, a nasza ścieżka to tylko najważniejsza z nich.”
:::

:::wykladowca
Teraz Wy prowadzicie rozmowę. Kasia zna swoją listę numerów, ale nie zna kaskady. Nie zaczynajcie od definicji. Zadawajcie pytania „po co?” i dopiero przy każdej odpowiedzi podawajcie nazwę szczebla. Sprawdźcie, czy w Waszej wersji jest pięć szczebli: cel aktywatora, cel IT, cel organizacji, potrzeba i wyznacznik. Sprawdźcie też, czy dodaliście ostrzeżenie, że ścieżek jest więcej. Porównajcie się ze wzorcem i oceńcie uczciwie. Jeśli pominęliście wyznacznik, wróćcie do slajdu porównawczego.
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący -->
# Co już umiesz

- Umiesz przejść kaskadę wstecz pytaniem „po co?”: cel aktywatora → cel IT → cel organizacji → potrzeba → wyznacznik.
- Umiesz powiedzieć, że powiązania tworzą sieć z relacjami P i S, a nie jedną linię.
- Umiesz wyjaśnić, że tabel mapowania nie stosuje się mechanicznie (FW-PL s. 20).
- Umiesz odróżnić wyznacznik, potrzebę i gotowe rozwiązanie.

**Co dalej i dlaczego:** w lekcji MT.3 rozłożysz jeden incydent na siedem aktywatorów. Cele aktywatorów z tej lekcji staną się tam konkretne.

:::wykladowca
Podsumujmy. Kaskada płynie z góry na dół, ale kursant najczęściej stoi na dole. Dlatego mentor prowadzi go w górę pytaniem „po co?”. Po drodze pilnujecie trzech pułapek. Ścieżek jest wiele, a nie jedna. Tabele trzeba dostosować, a nie kopiować. Na górze wyznacznik i potrzeba to co innego niż gotowe rozwiązanie. Powiedzcie na głos łańcuch dla testu zapasowego serwera. Jeśli potraficie to zrobić bez patrzenia, przejdźcie do ćwiczeń.
:::
