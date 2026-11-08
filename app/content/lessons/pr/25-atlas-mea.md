---
id: pr-25-atlas-mea
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: "Wyniki, kontrole, przepisy – co sprawdza MEA i jak zmieścić 37 procesów na jednej kartce?"
lekcja: "1.25"
dzien: 8
sylabus: [PR-01-04]
minuty: 17
priorytet: 2
wielkiObraz: 5
cel:
  - "Potrafię odróżnić MEA01, MEA02 i MEA03 oraz monitorowanie w MEA od monitorowania w EDM."
  - "Potrafię narysować z pamięci 5 domen z liczbą procesów i podać przykład procesu z każdej."
wprowadza: [proc-mea01, proc-mea02, proc-mea03]
wymaga: [pr-24-atlas-dss-b]
twierdzenia:
  - "MEA01 mierzy wyniki, porównuje je z celami, raportuje i pilnuje działań korygujących."
  - "MEA02 ocenia, czy mechanizmy kontroli wewnętrznej naprawdę działają."
  - "MEA03 rozpoznaje wymogi zewnętrzne (prawo, regulacje, umowy) i sprawdza, czy je spełniamy."
  - "MEA to monitorowanie w Zarządzaniu, a Ład monitoruje kierunek w EDM."
  - "37 procesów = EDM 5 + APO 13 + BAI 10 + DSS 6 + MEA 3."
typowePytania: [{"pytanie": "MEA to domena Ładu, skoro „monitoruje”?", "odpowiedz": "Nie. MEA to Zarządzanie, które sprawdza swoją pracę. Ład ma własne monitorowanie w EDM i ocenia raporty względem kierunku."}, {"pytanie": "„Zgodność” w MEA01 i MEA03 to to samo?", "odpowiedz": "Nie. MEA01 to zgodność z naszymi celami i ustaleniami (conformance). MEA03 to zgodność z wymogami zewnętrznymi (compliance)."}, {"pytanie": "Kontrola wymagana przepisem to od razu MEA03?", "odpowiedz": "Nie zawsze. Czy przepis jest rozpoznany i spełniony – MEA03. Czy nasza kontrola, która ma go spełnić, działa – MEA02."}]
zgadnij: [q-atl-mea-01]
cwiczenia: [q-atl-mea-02, q-atl-mea-03, q-atl-mea-04]
zapas: [q-atl-mea-05, q-atl-mea-06]
kontrolaAutora: { data: null, kto: null, uwagi: "atlas procesów – do przeglądu" }
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Trzy osoby sprawdzają Syrenę – czy robią to samo?

:::kontekst psp
**Trzy sprawdzenia w jednym tygodniu**
Kpt. Marek Sikora, naczelnik informatyki, składa miesięczny raport: średni czas alarmu to 50 sekund, a cel to 40. Ewa Lis, audytorka wewnętrzna, sprawdza na próbce nocnych alarmów, czy dyżurni nie zamykają czerwonego okna bez telefonu. A przed kontrolą z komendy wojewódzkiej Sikora spisuje przepisy i umowy, które dotyczą Syreny. Wszyscy „monitorują”, ale to trzy procesy domeny [[mea|MEA]]: [[proc-mea01|MEA01]], [[proc-mea02|MEA02]] i [[proc-mea03|MEA03]].
:::

**Wniosek:** w MEA zawsze pytaj, **co** sprawdzamy: wyniki, kontrole czy wymogi z zewnątrz.

:::wykladowca
To ostatnia lekcja atlasu procesów. Zostały trzy procesy domeny MEA, czyli Monitoruj, Oszacuj i Oceń. Wszystkie trzy sprawdzają, więc różnicę trzeba znaleźć w przedmiocie sprawdzania. Sikora sprawdza wyniki względem celów. Lis sprawdza, czy działają zabezpieczenia w procesie. A przed kontrolą Sikora sprawdza, czy komenda spełnia przepisy i umowy. Trzy przedmioty, trzy procesy. Na końcu lekcji zobaczycie wszystkie 37 procesów na jednej mapie. Dostaniecie też prosty sposób, żeby zapamiętać liczby procesów w domenach.
:::

:::pytanie-uczestnika
pytanie: Czy MEA to nie jest po prostu audyt?
odpowiedz: Audyt to jeden ze sposobów. MEA obejmuje też stałe mierzenie wyników przez kierownictwo i samoocenę kontroli.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta procesu) -->
<!-- podpowiedz: MEA01 = mierz, porównaj z celem, raportuj, popraw. -->
# MEA01: mierzysz wyniki, porównujesz z celem i zlecasz poprawki

**[[proc-mea01]]** · EN: *MEA01 Monitor, Evaluate and Assess Performance and Conformance* (wym. „moniter iweljuejt end ases performens end konformens”).
Nazwa egzaminu PL niepotwierdzona: rozpoznawaj proces po kodzie i słowach *Performance and Conformance*.

**Po ludzku:** zbierasz liczby o tym, jak idzie praca, porównujesz je z celami i raportujesz, co trzeba poprawić.

:::kontekst zycie
**Cel: minus 5 kg do wakacji.** Co niedzielę stajesz na wadze i zapisujesz wynik. Gdy przez dwa tygodnie waga stoi, zmieniasz plan treningów.
:::

:::glebiej proc-mea01
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** MEA01 to monitorowanie w Zarządzaniu: kto zbiera dane, liczy i raportuje, ten pracuje w MEA01.

:::wykladowca
MEA01 to Monitor, Evaluate and Assess Performance and Conformance. Po polsku: monitorowanie, ocena i oszacowanie wydajności i zgodności. Sikora co miesiąc zbiera wskaźniki Syreny. Porównuje je z celem „alarm w 40 sekund”, raportuje komendantce i zleca poprawki. To MEA01. Słowo „zgodność” znaczy tu conformance, czyli zgodność z naszymi celami i ustaleniami. Teraz najważniejsza pułapka. Komendantka Wrzos czyta ten raport i decyduje o kierunku. Ona też monitoruje, ale robi to w Ładzie, w EDM. Ten sam raport jest wyjściem MEA01 i wejściem dla Ładu.
:::

:::sb nie-mylic
Mierników używa wiele procesów, np. APO11 (system jakości) do własnego doskonalenia. Samo słowo „miernik” nie przesądza o MEA01.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta procesu) -->
<!-- podpowiedz: MEA02 = czy nasze zabezpieczenia działają naprawdę? -->
# MEA02: sprawdzasz, czy zabezpieczenia działają, a nie tylko są na papierze

**[[proc-mea02]]** · EN: *MEA02 Monitor, Evaluate and Assess the System of Internal Control* (wym. „moniter iweljuejt end ases de system ow internal kontrołl”).
Nazwa egzaminu PL niepotwierdzona: rozpoznawaj proces po kodzie i słowach *Internal Control*.

**Po ludzku:** sprawdzasz, czy wszystkie zabezpieczenia i zasady kontroli w organizacji naprawdę działają, a nie tylko są na papierze.

:::kontekst zycie
**Czujnik dymu.** Raz w roku wciskasz przycisk testu i odkrywasz, że bateria padła pół roku temu. Czujnik wisiał, ale nie działał.
:::

:::glebiej proc-mea02
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** MEA02 nie projektuje zabezpieczeń – monitoruje i ocenia, czy system kontroli wewnętrznej jest skuteczny.

:::wykladowca
MEA02 to Monitor, Evaluate and Assess the System of Internal Control. Po polsku: system kontroli wewnętrznej. W poprzedniej lekcji poznaliście zabezpieczenia w procesie, czyli DSS06. Na przykład czerwone okno, gdy OSP nie potwierdzi alarmu. MEA02 patrzy na to z boku. Ewa Lis co kwartał bierze próbkę nocnych alarmów i sprawdza, czy dyżurni nie zamykają okna bez telefonu. Wyniki idą do komendantki, a poprawki wracają do właścicieli procesów. Audyt to jeden ze sposobów, ale MEA02 obejmuje też stałe monitorowanie i samoocenę kontroli przez kierownictwo.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta procesu) -->
<!-- podpowiedz: MEA03 = wymogi z zewnątrz: prawo, regulator, umowa. -->
# MEA03: ustalasz, jakie przepisy i umowy obowiązują, i sprawdzasz, czy je spełniasz

**[[proc-mea03]]** · EN: *MEA03 Monitor, Evaluate and Assess Compliance with External Requirements* (wym. „moniter iweljuejt end ases komplajens łiz eksternal rikłajerments”).
Nazwa egzaminu PL niepotwierdzona: rozpoznawaj proces po kodzie i słowach *Compliance with External Requirements*.

**Po ludzku:** ustalasz, jakie przepisy i umowy z zewnątrz musisz spełniać, i sprawdzasz, czy naprawdę je spełniasz.

:::kontekst zycie
**Przegląd techniczny auta.** Sprawdzasz, czego wymagają przepisy: światła, hamulce, opony. Robisz listę i odhaczasz, co jest w porządku.
:::

:::glebiej proc-mea03
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** o MEA03 decyduje źródło wymogu: prawo, regulator albo umowa, czyli coś z zewnątrz.

:::wykladowca
MEA03 to Monitor, Evaluate and Assess Compliance with External Requirements. Po polsku: zgodność z wymogami zewnętrznymi. Słowo compliance oznacza tu wymogi, które przychodzą z zewnątrz. To prawo, regulacje i umowy. Przed kontrolą Ostrowskiej Sikora spisuje przepisy i umowy dotyczące Syreny i sprawdza, które komenda spełnia. To MEA03. Zapamiętajcie dwie granice. Zgodność z własnymi celami i politykami to raczej MEA01, czyli conformance. A to, czy działa nasze zabezpieczenie, które ma spełnić przepis, ocenia MEA02. MEA03 pyta tylko: jakie wymogi obowiązują i czy je spełniamy.
:::

---

<!-- slajd: porownanie -->
<!-- typ SD: E – porównawczy -->
<!-- podpowiedz: Kto mierzy, a kto ocenia kierunek? Co sprawdzamy? -->
# Cztery pary, w których wszyscy „monitorują”

| Para | Pytanie rozstrzygające | Odpowiedź |
|---|---|---|
| MEA01 / EDM (Monitoruj) | Kto mierzy i raportuje, a kto ocenia raport względem kierunku? | mierzy i raportuje → MEA01 (Zarządzanie); ocenia kierunek → EDM (Ład) |
| MEA01 / MEA03 | Zgodność z czym? | z naszymi celami i ustaleniami (*conformance*) → MEA01; z prawem, regulacją, umową (*compliance*) → MEA03 |
| MEA02 / MEA03 | Co sprawdzamy? | nasze mechanizmy kontrolne → MEA02; wymogi z zewnątrz → MEA03 |
| DSS06 / MEA02 | Kontrola działa w procesie czy ktoś ją ocenia z boku? | zabezpieczenie w pracy → DSS06; ocena skuteczności → MEA02 |

:::mapa domena-mea
Domena MEA: 3 procesy monitorowania w Zarządzaniu.
:::

:::zrodlo FW-PL 32
:::

**Wniosek:** Ład też monitoruje, ale w EDM ocenia kierunek, a MEA mierzy bieżącą pracę Zarządzania.

:::wykladowca
Tabela zbiera pary, w których wszyscy monitorują. Pierwsza para to poziom. Sikora mierzy i raportuje w MEA01, czyli w Zarządzaniu. Komendantka czyta raport i ocenia, czy kierunek jest realizowany. To Ład, czyli EDM. Druga para to dwa rodzaje zgodności. Conformance to zgodność z naszymi celami, czyli MEA01. Compliance to zgodność z wymogami z zewnątrz, czyli MEA03. Trzecia para to przedmiot sprawdzania: nasze kontrole w MEA02, wymogi z zewnątrz w MEA03. Czwarta para łączy domeny. Zabezpieczenie działa w procesie, w DSS06, a jego ocena jest w MEA02.
:::

---

<!-- slajd: mapa -->
<!-- typ SD: F – syntetyzujący -->
<!-- podpowiedz: 5 – 13 – 10 – 6 – 3. Ład decyduje, Zarządzanie planuje, tworzy, wykonuje, monitoruje. -->
# Cały atlas: 37 procesów na jednej mapie

:::mapa prm
:::

| Domena | Procesy | Rola | Przykład z komendy |
|---|---|---|---|
| **EDM** – Oszacuj, Kieruj i Monitoruj | 5 | Ład: decyduje i sprawdza kierunek | Wrzos ustala, ile ryzyka akceptuje |
| **APO** – Dostosuj, Planuj i Organizuj | 13 | Planuj | Sikora pisze strategię i umowę z dostawcą |
| **BAI** – Twórz, Nabywaj i Wdrażaj | 10 | Twórz | wymagania, budowa, zmiana, odbiór Syreny |
| **DSS** – Dostarczaj, Obsługuj i Wspieraj | 6 | Wykonuj | nocna awaria, przyczyna, plan ciągłości |
| **MEA** – Monitoruj, Oszacuj i Oceń | 3 | Monitoruj | raport z czasów alarmu, ocena kontroli |

:::zapamietaj
**5 · 13 · 10 · 6 · 3 = 37.** Ręka Ładu ma 5 palców. Pechowa trzynastka planuje. Okrągła dziesiątka buduje. Szóstka trzyma dyżur. Trójka sprawdza.
:::

:::uproszczenie
Mnemotechnika „ręka, trzynastka, dziesiątka, szóstka, trójka” to pomysł kursu, a nie termin COBIT 5. Poniżej droga jednej zmiany przez procesy, też w uproszczeniu:
- powstanie: APO05 wybór → BAI01 projekt → BAI02 wymagania → BAI03 budowa → BAI06 zgoda → BAI07 odbiór → BAI05 ludzie;
- działanie i ocena: DSS01 rutyna → DSS02 awaria → DSS03 przyczyna → MEA01 pomiar → EDM ocena.
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** każdy proces znajdziesz, gdy najpierw zgadniesz domenę: kto decyduje, czy planujemy, tworzymy, wykonujemy, czy sprawdzamy.

:::wykladowca
Oto cały atlas na jednej kartce. Pięć domen i trzydzieści siedem procesów. Jedna domena to Ład, cztery to Zarządzanie. Zapamiętajcie liczby obrazkiem. Ręka Ładu ma pięć palców, czyli pięć procesów EDM. Pechowa trzynastka planuje, to APO. Okrągła dziesiątka buduje, to BAI. Szóstka trzyma dyżur, to DSS. Trójka sprawdza, to MEA. Razem trzydzieści siedem. Pod tabelą macie drogę jednej zmiany przez procesy, od wyboru projektu po ocenę Ładu. To uproszczenie, ale pomaga ułożyć procesy w kolejności. Na egzaminie najpierw zgadnijcie domenę, a dopiero potem numer.
:::

---

<!-- slajd: wlasne-slowa -->
# Wytłumacz to Kasi

:::wlasne-slowa
Kasia Nowik pyta: „Przed kontrolą Ostrowskiej sprawdzamy przepisy i nasze zabezpieczenia. To jeden proces MEA?”. Wytłumacz jej w 3 zdaniach, czym różni się MEA02 od MEA03. Dodaj, gdzie w tym wszystkim jest MEA01.
???
„To dwa procesy. MEA03 Compliance with External Requirements ustala, jakie przepisy i umowy obowiązują komendę, i sprawdza, czy je spełniamy. MEA02 System of Internal Control sprawdza, czy nasze zabezpieczenia, np. czerwone okno w Syrenie, naprawdę działają – także te, które mają spełnić przepis. MEA01 to coś trzeciego: miesięczny raport Sikory o wynikach względem celów.”
:::

:::wykladowca
Wasza kolej. Kasia widzi przed kontrolą dwa sprawdzenia i myśli, że to jedno. Wytłumaczcie jej różnicę w trzech zdaniach. Pomóżcie sobie angielskimi słowami. External Requirements to wymogi z zewnątrz, czyli MEA03. Internal Control to nasze zabezpieczenia, czyli MEA02. Dodajcie zdanie o MEA01, który mierzy wyniki względem celów. Potem porównajcie z wzorcem i oceńcie się uczciwie. Jeśli chcecie sprawdzić cały atlas, spróbujcie jeszcze jednego: narysujcie z pamięci pięć domen z liczbą procesów i podajcie po jednym procesie z każdej.
:::

---

<!-- slajd: rozwiazany -->
# Rozwiązujemy razem

:::rozwiazany
W firmie kurierskiej kierownik IT co miesiąc zbiera wskaźniki: odsetek paczek doręczonych na czas i czas działania aplikacji kurierów. Porównuje je z celami na ten rok, wysyła raport zarządowi i zleca poprawki tam, gdzie wynik jest za słaby. Który proces COBIT 5 najlepiej opisuje to działanie?
- A. APO11 Zarządzanie jakością
- B. MEA02 Monitorowanie, ocena i oszacowanie systemu kontroli wewnętrznej
- C. MEA01 Monitorowanie, ocena i oszacowanie wydajności i zgodności
- D. EDM02 Zapewnienie realizacji korzyści
+++
**Krok 1 – co jest pytane?** Słowa-klucze: **zbiera wskaźniki**, **porównuje z celami**, **raportuje**, **zleca poprawki**. Robi to kierownik IT, a nie zarząd.
+++
**Krok 2 – jaka kategoria COBIT?** Mierzenie i raportowanie przez kierownictwo to monitorowanie w Zarządzaniu, czyli domena MEA.
+++
**Krok 3 – eliminacja.** A – *prawda nie na temat*: system jakości też używa mierników, ale tu chodzi o przekrojowy raport wyników. B – *inna kategoria*: MEA02 ocenia mechanizmy kontrolne, a nie wyniki. D – *odwrócone*: zarząd, który czyta raport i ocenia korzyści, działa w Ładzie (EDM), a pytanie dotyczy tego, kto raport przygotowuje.
+++
**Odpowiedź: C.** Dlaczego: mierzenie wyników względem celów, raport i działania korygujące to MEA01.
:::

**Co dalej i dlaczego:** atlas jest gotowy. Następna lekcja to 4.1 „Od modelu dojrzałości do modelu zdolności (ISO/IEC 15504)” – MEA sprawdza wyniki, a model zdolności pokaże, jak ocenić, jak dobrze działa sam proces.

:::wykladowca
Ostatni przykład atlasu. Kierownik IT zbiera wskaźniki, porównuje z celami, raportuje i zleca poprawki. Słowo-klucz to „kierownik”, a nie „zarząd”. To monitorowanie w Zarządzaniu, czyli MEA01. APO11 kusi, bo system jakości też mierzy, ale tu chodzi o przekrojowy raport wyników. MEA02 odpada, bo nie oceniamy kontroli. EDM02 to Ład, który czyta raport i ocenia korzyści. To druga strona tego samego raportu. Odpowiedź to MEA01. Gratuluję, przeszliście cały atlas trzydziestu siedmiu procesów. Przed próbnym egzaminem wróćcie do tabel porównań.
:::
