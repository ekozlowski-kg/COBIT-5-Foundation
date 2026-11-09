---
id: pr-23-atlas-dss-a
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: "Rutyna, awaria, przyczyna – dlaczego incydent to jeszcze nie problem?"
lekcja: "1.23"
dzien: 7
sylabus: [PR-01-04]
minuty: 14
priorytet: 2
wielkiObraz: 5
cel:
  - "Potrafię przypisać zdarzenie z codziennej pracy IT do DSS01, DSS02 albo DSS03."
  - "Potrafię odróżnić incydent od problemu jednym pytaniem: przywracamy usługę czy usuwamy przyczynę?"
wprowadza: [proc-dss01, proc-dss02, proc-dss03]
wymaga: [pr-22-atlas-bai-c]
twierdzenia:
  - "DSS01 to zaplanowana rutyna i monitorowanie, które utrzymują systemy w działaniu."
  - "DSS02 szybko przywraca usługę po incydencie i załatwia zgłoszenia użytkowników."
  - "DSS03 szuka przyczyny źródłowej, żeby incydenty przestały wracać."
  - "Trwała poprawka znaleziona w DSS03 przechodzi jako zmiana przez BAI06."
typowePytania: [{"pytanie": "Awaria i problem to to samo?", "odpowiedz": "Nie. Awaria, którą trzeba szybko usunąć, to incydent (DSS02). Nieznana przyczyna jednego lub wielu incydentów to problem (DSS03)."}, {"pytanie": "Prośba o nowe hasło to też DSS02, skoro nic się nie zepsuło?", "odpowiedz": "Tak. DSS02 obsługuje i incydenty, i zwykłe zgłoszenia serwisowe użytkowników."}, {"pytanie": "Jeśli system jest w chmurze dostawcy, DSS01 nas nie dotyczy?", "odpowiedz": "Dotyczy. DSS01 obejmuje też eksploatację usług zleconych na zewnątrz. Zmienia się rola, nie odpowiedzialność."}]
zgadnij: [q-atl-dss-a-01]
cwiczenia: [q-atl-dss-a-02, q-atl-dss-a-03, q-atl-dss-a-04]
zapas: [q-atl-dss-a-05, q-atl-dss-a-06]
kontrolaAutora: { data: null, kto: null, uwagi: "atlas procesów – do przeglądu" }
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Jedna noc w SK – ile różnych procesów DSS w niej działa?

:::kontekst psp
**Noc z niedzieli na poniedziałek**
O 22:00 st. ogn. Kasia Nowik, dyżurna SK (stanowiska kierowania), prosi o odblokowanie hasła. O 2:10 Syrena nie wysyła SMS-a do OSP Zawilce. Ola Dudek, informatyczka, restartuje bramkę i po 5 minutach alarm wychodzi. Rano Dudek jak co dzień sprawdza dzienniki nocnych zadań. Widzi, że to już trzeci taki restart w miesiącu. Kpt. Sikora zleca szukanie przyczyny. Ta noc to trzy procesy domeny [[dss|DSS]].
:::

**Wniosek:** codzienna rutyna, szybkie gaszenie awarii i szukanie przyczyny to trzy różne procesy.

:::wykladowca
Wchodzimy do domeny DSS, czyli Dostarczaj, Obsługuj i Wspieraj. To codzienność: systemy już działają i trzeba je utrzymać. Spójrzcie na jedną noc w komendzie. Kasia prosi o nowe hasło. To zgłoszenie, choć nic się nie zepsuło. O drugiej w nocy Syrena milknie. Dudek restartuje bramkę i alarm wychodzi. To gaszenie pożaru. Rano Dudek robi swoją rutynę i sprawdza dzienniki. A kiedy widzi, że awaria wraca trzeci raz, zaczyna się szukanie przyczyny. Dziś poznacie trzy procesy, które to rozdzielają: DSS01 – eksploatację, DSS02 – incydenty i DSS03 – problemy.
:::

:::pytanie-uczestnika
pytanie: Skoro restart pomógł, to po co szukać przyczyny?
odpowiedz: Bo awaria wraca. Restart przywraca usługę na dziś, ale nie mówi, dlaczego bramka pada. Bez przyczyny awaria wróci w najgorszym momencie.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta procesu) -->
<!-- podpowiedz: DSS01 = zaplanowana rutyna. Nic się nie psuje, a wszystko działa. -->
# DSS01: zaplanowana rutyna, dzięki której nic się nie psuje

**[[proc-dss01]]** · EN: *DSS01 Manage Operations* (wym. „menydż operejszyns”).
Nazwa egzaminu PL niepotwierdzona: rozpoznawaj proces po kodzie i słowie *Operations*. W obiegu jest też forma „Zarządzanie operacjami”.

**Po ludzku:** codzienna, rutynowa robota, dzięki której systemy chodzą: zaplanowane zadania, pilnowanie sprzętu, prądu i serwerowni.

:::kontekst zycie
**Domowa rutyna.** W niedzielę wynosisz śmieci, co miesiąc czyścisz filtr w okapie, a zimą sprawdzasz ciśnienie w piecu. Nic się nie psuje, a dom działa.
:::

:::glebiej proc-dss01
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** DSS01 to plan i rutyna, a nie naprawa awarii.

:::wykladowca
DSS01 to Manage Operations. Podręcznik tłumaczy to jako zarządzanie eksploatacją. To zaplanowana, powtarzalna praca. Dudek co rano patrzy na panel Syreny i dzienniki nocnych zadań. Co tydzień sprawdza zasilanie awaryjne w serwerowni. Prąd, klimatyzacja i porządek w serwerowni też tu należą. DSS01 ma wykrywać kłopoty i im zapobiegać. Gdy coś jednak przestaje działać, sprawa przechodzi do DSS02. I jeszcze jedno: jeśli system działa w chmurze dostawcy, DSS01 nie znika. Komenda nadal pilnuje, czy dostawca robi swoje. Zlecić można wykonanie, ale nie odpowiedzialność.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta procesu) -->
<!-- podpowiedz: DSS02 = przywróć działanie teraz albo załatw prośbę. -->
# DSS02: najpierw przywracasz działanie, przyczyna może poczekać

**[[proc-dss02]]** · EN: *DSS02 Manage Service Requests and Incidents* (wym. „menydż serwis rikłests end insidents”).
Nazwa egzaminu PL niepotwierdzona: rozpoznawaj proces po kodzie i słowach *Service Requests and Incidents*.

**Po ludzku:** gdy coś przestaje działać albo ktoś prosi o pomoc, szybko przywracasz działanie i załatwiasz prośbę.

:::kontekst zycie
**Internet w niedzielę wieczorem.** Pada internet, a dziecko ma jutro lekcje zdalne. Restartujesz router i internet wraca. Nie wiesz, dlaczego padł, ale teraz najważniejsze, żeby działał.
:::

:::glebiej proc-dss02
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** DSS02 kończy się, gdy usługa działa normalnie, a nie wtedy, gdy znamy przyczynę.

:::wykladowca
DSS02 to Manage Service Requests and Incidents. Po polsku: zgłoszenia serwisowe i incydenty. Incydent to przerwa albo pogorszenie usługi. Syrena nie wysyła SMS-a, więc Dudek restartuje bramkę. Usługa wraca. Incydent jest zamknięty, choć nikt jeszcze nie wie, dlaczego bramka padła. Drugi rodzaj pracy w DSS02 to zgłoszenia serwisowe, czyli zwykłe prośby: nowe konto, odblokowanie hasła, instrukcja. Nic się nie zepsuło, a i tak to DSS02. Często punktem kontaktu jest service desk, po polsku punkt obsługi zgłoszeń. Jego miarą jest to, jak szybko wraca usługa.
:::

:::sb nie-mylic
Jeśli przywrócenie usługi wymaga zmiany ustawienia w systemie, to zmiana awaryjna. Ona podlega [[proc-bai06]]: szybsza ścieżka, rejestracja i zatwierdzenie po fakcie.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta procesu) -->
<!-- podpowiedz: DSS03 = przyczyna źródłowa, żeby awaria nie wracała. -->
# DSS03: gdy ta sama usterka wraca, szukasz jej prawdziwej przyczyny

**[[proc-dss03]]** · EN: *DSS03 Manage Problems* (wym. „menydż problems”).
Nazwa egzaminu PL niepotwierdzona: rozpoznawaj proces po kodzie i słowie *Problems*.

**Po ludzku:** gdy ta sama usterka wraca, szukasz jej prawdziwej przyczyny i usuwasz ją na dobre.

:::kontekst zycie
**Bezpiecznik w łazience.** Wybija trzeci raz w tygodniu. Zamiast znowu go podnosić, wołasz elektryka. Ten znajduje przyczynę: stara suszarka ma uszkodzony kabel.
:::

:::glebiej proc-dss03
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** problem to nieznana przyczyna jednego lub wielu incydentów; DSS03 ją znajduje i inicjuje trwałe rozwiązanie.

:::wykladowca
DSS03 to Manage Problems, czyli zarządzanie problemami. W COBIT słowo „problem” ma wąskie znaczenie. To nieznana przyczyna jednego albo wielu incydentów. Dudek zestawia zgłoszenia i znajduje wzór: bramka pada, gdy w kolejce jest ponad 200 SMS-ów. To praca DSS03. Do czasu naprawy restart zostaje zapisanym obejściem. Problem pozostaje otwarty, dopóki przyczyna nie zniknie. Trwałą poprawkę Dudek nie wgrywa po cichu. Wprowadza ją jako zmianę przez BAI06. DSS03 działa też z wyprzedzeniem. Może wykryć problem w danych, zanim wywoła on pierwszą awarię.
:::

---

<!-- slajd: porownanie -->
<!-- typ SD: E – porównawczy -->
<!-- podpowiedz: Przywracamy usługę czy usuwamy przyczynę? -->
# Rutyna, incydent, problem – i dwie pary z sąsiednich domen

| Para | Pytanie rozstrzygające | Odpowiedź |
|---|---|---|
| DSS01 / DSS02 | Zaplanowana praca czy przerwa w usłudze? | rutyna, monitorowanie → DSS01; awaria albo prośba użytkownika → DSS02 |
| DSS02 / DSS03 | Przywracamy usługę teraz czy usuwamy przyczynę? | szybki powrót usługi → DSS02; przyczyna źródłowa, znany błąd → DSS03 |
| BAI06 / DSS02 | Przywracam usługę czy zmieniam system? | przywrócenie → DSS02; zmiana ustawienia, nawet nocą → BAI06 (zmiana awaryjna) |
| BAI04 / DSS01 | Pilnuję dziś czy planuję na przyszłość? | bieżące dane o obciążeniu → DSS01; prognoza i rozbudowa → BAI04 |

:::mapa domena-dss
Pierwsze trzy procesy DSS: eksploatacja, incydenty, problemy.
:::

:::wlasne-slowa
Wytłumacz Kasi Nowik w 3 zdaniach, czym różni się incydent (DSS02) od problemu (DSS03). Użyj przykładu z restartem bramki.
???
„Incydent to przerwa w usłudze, którą trzeba szybko usunąć. Syrena nie wysłała SMS-a, Dudek zrestartował bramkę i alarm wyszedł – to DSS02 Manage Service Requests and Incidents. Problem to nieznana przyczyna takich awarii. Restart był już trzeci raz, więc Dudek szuka, dlaczego bramka pada – to DSS03 Manage Problems. DSS02 pyta, jak szybko wraca usługa, a DSS03, czy awarie przestały wracać.”
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** dobre wyniki DSS02 nie znaczą, że problem jest rozwiązany.

:::wykladowca
Zbierzmy pary. Rutyna czy przerwa? Rutyna to DSS01, przerwa to DSS02. Przywracamy czy usuwamy przyczynę? Przywracamy w DSS02, przyczynę usuwa DSS03. Trzeci wiersz łączy nas z poprzednimi lekcjami. Gdy w nocy zmieniacie ustawienie, żeby przywrócić usługę, sama naprawa to DSS02, ale zmiana to BAI06. Czwarty wiersz: DSS01 zbiera dane o obciążeniu dziś, a BAI04 na ich podstawie planuje na jutro. Zapamiętajcie zdanie z wniosku. Średni czas przywrócenia może być świetny, a ta sama awaria i tak wraca co tydzień. Teraz wytłumaczcie to Kasi.
:::

---

<!-- slajd: rozwiazany -->
# Rozwiązujemy razem

:::rozwiazany
W hurtowni drukarka etykiet zacina się prawie codziennie. Za każdym razem magazynier ją wyłącza i włącza, a praca rusza dalej. Kierowniczka prosi informatyka, żeby przejrzał wszystkie zgłoszenia z miesiąca i ustalił, co je łączy. Który proces COBIT 5 najlepiej opisuje zadanie informatyka?
- A. DSS03 Zarządzanie problemami
- B. DSS02 Zarządzanie zgłoszeniami serwisowymi i incydentami
- C. DSS01 Zarządzanie eksploatacją
- D. BAI06 Zarządzanie zmianami
+++
**Krok 1 – co jest pytane?** Słowa-klucze: **wszystkie zgłoszenia z miesiąca** i **co je łączy**. Nie chodzi o kolejny restart, tylko o przyczynę.
+++
**Krok 2 – jaka kategoria COBIT?** Codzienne działanie i awarie to domena DSS. W niej szukanie przyczyny powtarzających się awarii ma osobny proces.
+++
**Krok 3 – eliminacja.** B – *prawda nie na temat*: wyłączanie i włączanie to obsługa incydentu, ale zadanie informatyka jest inne. C – *inna kategoria*: eksploatacja to zaplanowana rutyna, a nie analiza awarii. D – *odwrócone*: zmiana może przyjść później, gdy przyczyna będzie znana.
+++
**Odpowiedź: A.** Dlaczego: analiza powtarzających się incydentów w poszukiwaniu przyczyny źródłowej to DSS03.
:::

**Co dalej i dlaczego:** w lekcji 1.24 poznasz resztę DSS: ciągłość, usługi bezpieczeństwa i mechanizmy kontrolne procesów biznesowych.

:::wykladowca
Przejdźmy to razem. Drukarka zacina się co dzień, a magazynier za każdym razem ją restartuje. Każdy taki restart to obsługa incydentu w DSS02. Ale pytanie dotyczy zadania informatyka. On ma przejrzeć zgłoszenia z miesiąca i znaleźć, co je łączy. To szukanie przyczyny źródłowej, czyli DSS03. Eksploatacja odpada, bo to nie zaplanowana rutyna. Zmiana też odpada, bo jeszcze nie wiadomo, co zmieniać. Zmiana przyjdzie, gdy przyczyna będzie znana. Odpowiedź to DSS03. W następnej lekcji domkniemy domenę DSS.
:::
