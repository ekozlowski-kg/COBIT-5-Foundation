---
id: pr-24-atlas-dss-b
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: "Czarna godzina, codzienna ochrona, zabezpieczenia w procesie – czym różnią się DSS04, DSS05 i DSS06?"
lekcja: "1.24"
dzien: 7
sylabus: [PR-01-04]
minuty: 14
priorytet: 2
wielkiObraz: 5
cel:
  - "Potrafię przypisać działanie do DSS04, DSS05 albo DSS06."
  - "Potrafię odróżnić DSS05 od APO13 oraz DSS06 od MEA02 jednym pytaniem rozstrzygającym."
wprowadza: [proc-dss04, proc-dss05, proc-dss06]
wymaga: [pr-23-atlas-dss-a]
twierdzenia:
  - "DSS04 przygotowuje przetrwanie poważnego zakłócenia, żeby najważniejsze sprawy działały dalej."
  - "Plan ciągłości trzeba ćwiczyć i poprawiać, a nie tylko mieć."
  - "DSS05 wykonuje codzienną ochronę, a APO13 organizuje system zarządzania bezpieczeństwem."
  - "DSS06 to zabezpieczenia wbudowane w proces biznesowy, a ich ocena należy do MEA02."
typowePytania: [{"pytanie": "Ciągłość to odtworzenie serwera z kopii?", "odpowiedz": "Nie tylko. DSS04 dba o ciągłość działania organizacji, np. ręczne alarmowanie OSP, gdy Syrena nie działa."}, {"pytanie": "APO13 i DSS05 to ten sam proces w dwóch domenach?", "odpowiedz": "Nie. APO13 ustanawia i utrzymuje system zarządzania bezpieczeństwem. DSS05 na co dzień chroni: konta, antywirus, dostęp, monitorowanie."}, {"pytanie": "Mechanizmy kontrolne w DSS06 to kontrole audytora?", "odpowiedz": "Nie. DSS06 to zabezpieczenia wbudowane w proces, np. „dwie pary oczu”. Ocena, czy działają, to MEA02."}]
zgadnij: [q-atl-dss-b-01]
cwiczenia: [q-atl-dss-b-02, q-atl-dss-b-03, q-atl-dss-b-04]
zapas: [q-atl-dss-b-05, q-atl-dss-b-06]
kontrolaAutora: { data: null, kto: null, uwagi: "atlas procesów – do przeglądu" }
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Kontrola zapowiedziana – co komenda musi pokazać poza sprawną Syreną?

:::kontekst psp
**Lista Ostrowskiej**
Mł. bryg. Lucyna Ostrowska z komendy wojewódzkiej zapowiada kontrolę i przysyła listę pytań. Co zrobicie, gdy serwerownię zaleje woda? Kto blokuje konta dyżurnych, którzy odeszli? Czy dyżurny może sam zmienić numer OSP bez niczyjej zgody? Kpt. Marek Sikora, naczelnik informatyki, widzi, że każde pytanie dotyczy innego procesu: [[proc-dss04|DSS04]], [[proc-dss05|DSS05]] i [[proc-dss06|DSS06]].
:::

**Wniosek:** sprawny system to za mało – trzeba umieć przetrwać katastrofę, chronić dostęp i zabezpieczyć sam proces pracy.

:::wykladowca
Domykamy domenę DSS. Poprzednio była codzienna rutyna, incydent i problem. Dziś trzy procesy, o które pyta każda kontrola. Ostrowska pyta o trzy rzeczy. Pierwsza: co zrobicie, gdy wydarzy się katastrofa. To ciągłość. Druga: kto pilnuje kont i dostępu. To codzienna ochrona, czyli usługi bezpieczeństwa. Trzecia: czy dyżurny może sam zmienić numer OSP. To zabezpieczenie wbudowane w sam proces pracy komendy. Wszystkie trzy brzmią podobnie, bo dotyczą bezpieczeństwa w szerokim sensie. Po tej lekcji rozdzielicie je bez trudu.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta procesu) -->
<!-- podpowiedz: DSS04 = plan na czarną godzinę, przećwiczony. -->
# DSS04: masz przećwiczony plan na czarną godzinę

**[[proc-dss04]]** · EN: *DSS04 Manage Continuity* (wym. „menydż kontinjuiti”).
Nazwa egzaminu PL niepotwierdzona: rozpoznawaj proces po kodzie i słowie *Continuity*.

**Po ludzku:** masz plan na czarną godzinę: co robisz, gdy padnie wszystko, żeby najważniejsze sprawy dalej działały.

:::kontekst zycie
**Szafka na czarną godzinę.** Latarka, zapas wody, powerbank i lista telefonów na kartce. Zdjęcia rodzinne mają kopię w chmurze. Raz w roku sprawdzasz, czy latarka świeci.
:::

:::glebiej proc-dss04
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** DSS04 dba o ciągłość działania organizacji, a plan, którego nikt nie przećwiczył, nie spełnia celu procesu.

:::wykladowca
DSS04 to Manage Continuity, czyli zarządzanie ciągłością. Chodzi o poważne zakłócenie: pożar, zalanie, długi brak prądu. Zwykła obsługa awarii wtedy nie wystarczy. Sikora pisze plan: kopia Syreny w innym budynku, ręczne alarmowanie OSP i papierowa lista numerów. Zwróćcie uwagę na dwie rzeczy. Po pierwsze, ciągłość dotyczy działania komendy, a nie tylko serwera. OSP musi dostać alarm także bez Syreny. Po drugie, plan trzeba ćwiczyć. Gruby plan w szafie, którego nikt nie sprawdził, to plan niepewny. Pamiętajcie też parę z lekcji 1.20: tłok to BAI04, katastrofa to DSS04.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta procesu) -->
<!-- podpowiedz: DSS05 wykonuje ochronę. APO13 ją organizuje. -->
# DSS05: codzienna ochrona – konta, hasła, drzwi i alerty

**[[proc-dss05]]** · EN: *DSS05 Manage Security Services* (wym. „menydż sikjuriti serwisiz”).
Nazwa egzaminu PL niepotwierdzona: rozpoznawaj proces po kodzie i słowach *Security Services*.

**Po ludzku:** codzienna ochrona: antywirus, hasła, uprawnienia, zamknięte drzwi i pilnowanie, czy ktoś się nie włamuje.

:::kontekst zycie
**Zwykły dzień.** Zamykasz drzwi na klucz, w telefonie masz blokadę ekranu, a w banku podwójne logowanie. Na dziwny SMS z linkiem nie klikasz. Gdy zgubisz klucze, wymieniasz zamek.
:::

:::glebiej proc-dss05
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** DSS05 wykonuje ochronę na co dzień; słowo „usługi” w nazwie wskazuje na pracę operacyjną.

:::wykladowca
DSS05 to Manage Security Services, czyli zarządzanie usługami bezpieczeństwa. To codzienna, operacyjna ochrona. Dudek zakłada konta, blokuje konto dyżurnego, który odszedł, aktualizuje antywirusa i przegląda alerty logowania. Do DSS05 należy też dostęp fizyczny do serwerowni oraz ochrona dokumentów i nośników. Najważniejsza para to DSS05 i APO13. APO13 to plan i system zarządzania bezpieczeństwem: zasady, role i organizacja. DSS05 te zasady wykonuje dzień po dniu. A ktoś trzeci, z boku, sprawdza, czy ochrona działa naprawdę. To już monitorowanie, które poznacie w lekcji 1.25.
:::

:::sb nie-mylic
[[proc-apo13]] organizuje bezpieczeństwo (system zarządzania bezpieczeństwem informacji). DSS05 je wykonuje. Ocena, czy zabezpieczenia działają, należy do domeny MEA.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta procesu) -->
<!-- podpowiedz: DSS06 = kontrola działa w procesie, w chwili pracy. -->
# DSS06: zabezpieczenia wbudowane w codzienną pracę organizacji

**[[proc-dss06]]** · EN: *DSS06 Manage Business Process Controls* (wym. „menydż biznes prołses kontrołlz”).
Nazwa egzaminu PL niepotwierdzona: rozpoznawaj proces po kodzie i słowach *Business Process Controls*. W obiegu jest też forma „Zarządzanie kontrolami procesów biznesowych”.

**Po ludzku:** wbudowane w codzienną pracę zabezpieczenia, które pilnują, żeby dane były kompletne, poprawne i zatwierdzone przez właściwą osobę.

:::kontekst zycie
**Domowy budżet.** Przelew powyżej 1000 zł wymaga zgody drugiej osoby. Bank sam blokuje przelew bez numeru konta. Te zabezpieczenia działają w chwili wydawania pieniędzy, a nie po fakcie.
:::

:::glebiej proc-dss06
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** DSS06 to kontrola, którą robi sam proces, w chwili pracy; za proces i jego kontrole odpowiada zwykle właściciel procesu biznesowego.

:::wykladowca
DSS06 to Manage Business Process Controls, czyli mechanizmy kontrolne procesów biznesowych. „Biznesowych” znaczy tu: procesów organizacji, a nie samego działu IT. W komendzie takim procesem jest alarmowanie. Syrena pokazuje czerwone okno, gdy OSP nie potwierdzi alarmu w 60 sekund. Zmianę numeru OSP wpisuje Dudek, a zatwierdza Sikora. To dwie pary oczu. Te zabezpieczenia działają w trakcie pracy. Uwaga na dwie pary. Techniczne konta i hasła to DSS05, a to, kto w procesie może co zatwierdzać, to DSS06. Ocena, czy te zabezpieczenia naprawdę działają, to już MEA02.
:::

---

<!-- slajd: porownanie -->
<!-- typ SD: E – porównawczy -->
<!-- podpowiedz: Tłok czy katastrofa? Organizuje czy wykonuje? Działa w procesie czy ocenia z boku? -->
# Cztery pary wokół ciągłości i bezpieczeństwa

| Para | Pytanie rozstrzygające | Odpowiedź |
|---|---|---|
| BAI04 / DSS04 | Za dużo ruchu czy katastrofa? | tłok, moc → BAI04; przetrwanie i odtworzenie → DSS04 |
| APO13 / DSS05 | Organizuje bezpieczeństwo czy je wykonuje? | plan, zasady, system zarządzania → APO13; konta, antywirus, dostęp, alerty → DSS05 |
| DSS05 / DSS06 | Techniczne konto czy prawo do zatwierdzania w procesie? | konta i dostęp → DSS05; rozdział obowiązków, autoryzacja → DSS06 |
| DSS06 / MEA02 (lekcja 1.25) | Kontrola działa w procesie czy ktoś ją ocenia? | zabezpieczenie w pracy → DSS06; ocena skuteczności kontroli → MEA02 |

:::mapa domena-dss
Cała domena DSS: 6 procesów, od eksploatacji do mechanizmów kontrolnych.
:::

:::wlasne-slowa
Wytłumacz Kasi Nowik w 3 zdaniach, czym różni się DSS05 od APO13. Podaj po jednym przykładzie z komendy.
???
„APO13 Manage Security organizuje bezpieczeństwo: Sikora spisuje zasady, kto może mieć konto i kto odpowiada za ochronę. DSS05 Manage Security Services wykonuje tę ochronę na co dzień: Dudek blokuje konto byłego dyżurnego i przegląda alerty logowania. APO13 to plan i system, a DSS05 to codzienna praca według niego.”
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** „bezpieczeństwo” to kilka procesów: APO13 organizuje, DSS05 wykonuje, DSS06 zabezpiecza proces, a MEA02 ocenia.

:::wykladowca
Zbierzmy pary. Pierwsza wraca z lekcji 1.20: tłok to BAI04, katastrofa to DSS04. Druga to bezpieczeństwo w dwóch domenach. APO13 planuje i organizuje, a DSS05 wykonuje. Trzecia dotyczy uprawnień. Konto i hasło w systemie to DSS05. Zasada, że numer OSP zmienia jedna osoba, a zatwierdza druga, to DSS06. Czwarta para to zapowiedź następnej lekcji. Zabezpieczenie działające w procesie to DSS06. Ocena, czy ono naprawdę działa, to MEA02. Na mapie widzicie teraz całą domenę DSS. Wytłumaczcie Kasi różnicę między DSS05 a APO13.
:::

---

<!-- slajd: rozwiazany -->
# Rozwiązujemy razem

:::rozwiazany
W urzędzie gminy system podatkowy nie pozwala jednej osobie i wprowadzić zwrotu nadpłaty, i go zatwierdzić. Zatwierdza zawsze kierownik referatu. System odrzuca też wniosek bez numeru PESEL (numeru ewidencyjnego). Który proces COBIT 5 najlepiej opisuje te zabezpieczenia?
- A. DSS05 Zarządzanie usługami bezpieczeństwa
- B. APO13 Zarządzanie bezpieczeństwem
- C. MEA02 Monitorowanie, ocena i oszacowanie systemu kontroli wewnętrznej
- D. DSS06 Zarządzanie mechanizmami kontrolnymi procesów biznesowych
+++
**Krok 1 – co jest pytane?** Słowa-klucze: **jedna osoba nie może i wprowadzić, i zatwierdzić**, a system **odrzuca niekompletny wniosek**. Zabezpieczenia działają w trakcie pracy.
+++
**Krok 2 – jaka kategoria COBIT?** Codzienne działanie organizacji to domena DSS. Kontrole w procesie biznesowym mają tam własny proces.
+++
**Krok 3 – eliminacja.** A – *zbyt wąskie*: DSS05 prowadzi techniczne konta i dostęp, ale nie ustala, kto w procesie co zatwierdza. B – *inna kategoria*: APO13 organizuje system zarządzania bezpieczeństwem. C – *odwrócone*: MEA02 ocenia, czy takie kontrole działają, ale ich nie wykonuje.
+++
**Odpowiedź: D.** Dlaczego: rozdział obowiązków i sprawdzanie kompletności danych w procesie to DSS06.
:::

**Co dalej i dlaczego:** następna lekcja to 3.1 „Kontekst wdrożenia – czynniki środowiskowe i czynniki sukcesu”. Po niej będziesz umieć: wskazać, co w otoczeniu komendy trzeba uwzględnić przy wdrożeniu COBIT 5. Wiem też, co pomaga wdrożeniu się udać.

:::wykladowca
Rozwiążmy to razem. Jedna osoba nie może i wprowadzić zwrotu, i go zatwierdzić. System odrzuca wniosek bez numeru. To zabezpieczenia wbudowane w proces podatkowy gminy. Działają w chwili pracy, a nie po fakcie. Dlatego DSS06. DSS05 kusi, bo chodzi o uprawnienia. Ale DSS05 prowadzi techniczne konta, a nie zasadę, kto co zatwierdza. APO13 to organizacja całego bezpieczeństwa. MEA02 to ocena, czy takie kontrole działają. Odpowiedź to DSS06. W ostatniej lekcji atlasu poznacie domenę MEA i zobaczycie wszystkie 37 procesów na jednej mapie.
:::
