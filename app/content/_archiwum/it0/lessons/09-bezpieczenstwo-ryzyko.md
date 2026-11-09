---
id: it0-09-bezpieczenstwo-ryzyko
modul: IT0
modulNazwa: Podstawy cyfrowe
temat: "Hasło na karteczce – drobiazg czy ryzyko? Bezpieczeństwo informacji, dostępność i ryzyko IT"
lekcja: "0A.9"
dzien: 0
sylabus: [M0-00-07, M0-00-04]
minuty: 14
priorytet: 2
wielkiObraz: 1
cel:
  - "Potrafię wymienić trzy cechy bezpieczeństwa informacji (information security): poufność, integralność i dostępność (availability)."
  - "Potrafię odróżnić ryzyko związane z IT (IT-related risk) od incydentu i od zagrożenia."
wprowadza: [it-bezpieczenstwo-informacji, it-dostepnosc, it-ryzyko-it]
wymaga: [it0-06-konto-logowanie, it0-08-gdy-cos-sie-psuje]
twierdzenia: ["Bezpieczeństwo informacji (information security) to ochrona poufności, integralności i dostępności informacji.", "Dostępność (availability) oznacza, że usługa albo informacja działa wtedy, gdy jest potrzebna.", "Ryzyko związane z IT to prawdopodobieństwo i skutek zdarzenia, które może się wydarzyć w informatyce.", "Ryzyko dotyczy przyszłości; zdarzenie, które już nastąpiło, to incydent."]
typowePytania: [{"pytanie": "Czy bezpieczeństwo to jak najwięcej haseł i zamków?", "odpowiedz": "Nie. Za mocne zamknięcie psuje dostępność. Chodzi o równowagę trzech cech: poufności, integralności i dostępności."}, {"pytanie": "Czy włamywacz to ryzyko?", "odpowiedz": "Włamywacz to zagrożenie, czyli źródło. Ryzyko to szansa, że wykradnie dane, razem ze skutkami."}, {"pytanie": "Czy 99% dostępności to prawie zawsze?", "odpowiedz": "Nie. 99% to ponad 3,5 doby przerwy w roku. Dla alarmów to bardzo dużo."}]
zgadnij: [q-pre-it0-09]
cwiczenia: [q-it0-09-01, q-it0-09-02, q-it0-09-03]
zapas: [q-zap-it0-09-1, q-zap-it0-09-2]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "Wersja robocza – do przeglądu przez człowieka (test laika)."}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy; krok 1: pokaż zjawisko -->
# Hasło przyklejone do monitora – co może się stać?

Na monitorze dyżurnego wisi żółta karteczka z hasłem do „Syreny”. Nic złego się dotąd nie stało.

Czy to znaczy, że jest bezpiecznie?

**Wniosek:** to, że nic się jeszcze nie stało, nie oznacza, że nic się nie może stać.

:::wykladowca
Spójrzcie na monitor dyżurnego Pawła Graba. Wisi na nim żółta karteczka z hasłem. Grab mówi: „Wisi od roku i nic się nie stało”. Ma rację, nic się nie stało. Ale czy coś może się stać? Ktoś może przeczytać hasło i zalogować się jako Grab. Może zmienić numery strażaków. Na tej lekcji nazwiemy dwie sprawy. Pierwsza to ochrona informacji. Druga to myślenie o tym, co może pójść źle, zanim się to wydarzy.
:::

:::pytanie-uczestnika
pytanie: Przecież w komendzie są sami swoi. Kto miałby to wykorzystać?
odpowiedz: Na przykład gość, serwisant albo ktoś, kto zrobi zdjęcie ekranu. Wystarczy jedna osoba i jedna chwila.
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający; kroki 2–4: wyjaśnij, nazwij, każdy element -->
# Trzy rzeczy, których pilnujemy: poufność, integralność, dostępność

**[[it-bezpieczenstwo-informacji|Bezpieczeństwo informacji]]** (EN: *information security*, wym. „informejszyn sekjuriti”) to dbanie o trzy cechy:

| Cecha | Pytanie | Przykład z „Syreny” | EN |
|---|---|---|---|
| **poufność** | Czy widzą to tylko uprawnieni? | numery ochotników widzą tylko dyżurni | *confidentiality* |
| **integralność** | Czy nikt tego nie zmienił bez zgody? | nikt nie nadpisał numeru Pietrzaka | *integrity* |
| **[[it-dostepnosc|dostępność]]** | Czy działa wtedy, gdy trzeba? | lista działa o 3 w nocy | *availability* („awejlabiliti”) |

Narzędzia, które już znasz: konto i hasło (uwierzytelnianie), uprawnienia (autoryzacja), kopia zapasowa, plan ciągłości.

**Wniosek:** bezpieczeństwo informacji to równowaga trzech cech – zamknięte, nienaruszone i dostępne w chwili potrzeby.

:::wykladowca
Bezpieczeństwo informacji, po angielsku information security, to pilnowanie trzech rzeczy. Pierwsza to poufność: informację widzą tylko ci, którzy powinni. Druga to integralność: nikt jej nie zmienił bez zgody. Trzecia to dostępność, po angielsku availability: informacja działa wtedy, gdy jest potrzebna. Te trzy cechy trzeba trzymać w równowadze. System zamknięty tak szczelnie, że dyżurny nie może go użyć w nocy, nie jest bezpieczny. Zawodzi wtedy dostępność. Narzędzia już znacie: hasła, uprawnienia, kopie i plan ciągłości.
:::

:::sb wyobraz
Pamiętnik z kłódką: zamknięty przed rodzeństwem (poufność), bez wyrwanych kartek (integralność), a właścicielka zawsze ma kluczyk (dostępność).
:::

:::sb dlaczego
Dostępność mierzy się w procentach czasu. 99,9% brzmi świetnie, a to prawie 9 godzin przerwy w roku. 99% to ponad 3,5 doby. Ile dostępności potrzeba, decyduje kierownictwo, ważąc koszt.
:::

---

<!-- slajd: proces -->
<!-- typ SD: C – procesowy; krok 5: jak elementy współpracują -->
# Co może pójść źle? Ryzyko związane z IT krok po kroku

Weź coś, co **może** się wydarzyć w informatyce. Dodaj, jak bardzo jest to prawdopodobne i jak bardzo by zabolało. Razem to **[[it-ryzyko-it|ryzyko związane z IT]]** (EN: *IT-related risk*, wym. „aj-ti rilejtid risk”).

1. **Spisz**, co może pójść źle: „ktoś przeczyta hasło z karteczki”.
2. **Oceń prawdopodobieństwo**: jak łatwo to się może zdarzyć?
3. **Oceń skutek**: co się stanie, jeśli się zdarzy? Np. ktoś zmieni numery i alarm nie dojdzie.
4. **Zdecyduj**: zmniejszamy ryzyko (np. drugi dowód przy logowaniu), przenosimy (np. umowa z dostawcą), unikamy (rezygnujemy z działania) albo świadomie akceptujemy.
5. **Sprawdzaj co jakiś czas**, czy ocena jest aktualna.

Gdy zdarzenie **już nastąpiło**, to nie jest ryzyko, tylko **incydent** (lekcja 0A.8). Źródło kłopotów, np. włamywacz albo burza, to **zagrożenie**.

**Wniosek:** ryzyko to prawdopodobieństwo i skutek tego, co może się wydarzyć; zarządzanie ryzykiem to świadoma decyzja, co z nim zrobić.

:::wykladowca
Teraz drugie słowo tej lekcji: ryzyko. Ryzyko to coś, co może się wydarzyć, razem z dwiema miarami. Jak bardzo jest prawdopodobne. I jak bardzo by zabolało. W informatyce mówimy o ryzyku związanym z IT, po angielsku IT-related risk. Z ryzykiem postępuje się na cztery sposoby. Zmniejszamy je, przenosimy na kogoś, unikamy albo świadomie akceptujemy. Uwaga na dwa pomylenia. Burza czy włamywacz to zagrożenie, czyli źródło. A wczorajsza awaria to już incydent, a nie ryzyko.
:::

:::teza problemowa
sytuacja: Naczelnik informatyki mówi: „Sam ustalę, jaka przerwa w Syrenie jest do przyjęcia”.
pytanie: Czy informatyk powinien sam decydować, ile ryzyka organizacja akceptuje?
teza: Nie. Informatyk ocenia ryzyko i mówi, ile kosztuje jego zmniejszenie, ale ile ryzyka jest do przyjęcia, decyduje kierownictwo całej organizacji.
uzasadnienie: Ryzyko IT dotyczy zadań, budżetu i ludzi całej organizacji. W COBIT 5 decyzje o apetycie na ryzyko należą do najwyższego kierownictwa (poznasz to w lekcji 1.11).
powiazanie: EDM03 (Zapewnienie optymalizacji ryzyka) i APO12 (Zarządzanie ryzykiem), dzień 2; [[ryzyko|Ryzyko]] – pełne hasło poznasz w lekcji 0.4
przyklad: Komendantka decyduje: „Syrena” może nie działać najwyżej 5 minut w roku. Naczelnik liczy, ile to kosztuje.
status: uproszczenie
refleksja: Kto w Twojej organizacji decyduje, czy warto zapłacić za zapasowy serwer?
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku; kroki 6–8: EN, organizacja, znaczenie specjalistyczne -->
# Od klucza pod wycieraczką do „pięciu minut w roku”

:::kontekst zycie
**Klucz pod wycieraczką.** Złodziej może go znaleźć – to mało prawdopodobne, ale skutek byłby duży. To ryzyko. Gdy ktoś naprawdę wejdzie, to już włamanie, czyli incydent. Kod blokady w telefonie chroni poufność Twoich zdjęć.
:::

:::kontekst biuro
**Szafa z danymi osobowymi.** Dokumenty leżą w zamykanej szafie, a pliki w folderze z ograniczonym dostępem. W biurze tylko jedna osoba zna hasło administratora – gdy zachoruje, nikt nie zmieni ustawień. To ryzyko, które szef zmniejsza.
:::

:::kontekst organizacja
**Przychodnia.** Szkoli pracowników, jak rozpoznać fałszywego maila, i wymaga dwóch dowodów przy logowaniu do kart pacjentów. System rejestracji ma działać od 7 do 19 – w nocy przerwa nikomu nie szkodzi.
:::

:::kontekst psp
**Scena: „Co jeszcze może pójść źle”.** Naczelnik informatyki komendy w Modrzewiowie, kpt. Marek Sikora, wypisuje na tablicy, co może zawieść w „Syrenie”: jedno łącze, brak zasilania awaryjnego, nieaktualne numery, hasło na karteczce. Każda pozycja to ryzyko związane z IT. Komendantka Anna Wrzos decyduje: przerwa nie dłuższa niż 5 minut w roku. To wymaganie dostępności na poziomie około 99,999%.
:::

:::kontekst it
**COBIT 5.** Cel związany z IT nr 10 to „Bezpieczeństwo informacji, infrastruktury przetwarzania i aplikacji”. Cel organizacji nr 7 to „Ciągłość i dostępność usług biznesowych” (FW-PL s. 19). Procesy: APO13 (Zarządzanie bezpieczeństwem), DSS05 (Zarządzanie usługami bezpieczeństwa), BAI04 (Zarządzanie dostępnością i pojemnością), APO12 (Zarządzanie ryzykiem) – FW-PL s. 33.
:::

:::zrodlo FW-PL 19
:::

**Wniosek:** bezpieczeństwo, dostępność i ryzyko to jedna rozmowa: co chronimy, kiedy ma działać i ile ryzyka akceptujemy.

:::wykladowca
Zobaczcie, jak te trzy słowa się łączą. Klucz pod wycieraczką to ryzyko. Zamknięta szafa to poufność. Godziny pracy systemu to dostępność. W komendzie w Modrzewiowie naczelnik wypisuje, co może zawieść, a komendantka decyduje, ile ryzyka akceptuje. Pięć minut przerwy w roku to bardzo wysoka dostępność. Będzie kosztować zapasowy serwer, drugie łącze i zasilanie awaryjne. COBIT 5 ma na to cele i procesy. Bezpieczeństwo informacji jest wprost jednym z celów związanych z IT. Kody procesów poznacie w dniu 2.
:::

:::progresja
0: Użytkownik ustawia hasło do komputera.
1: Organizacja stosuje uwierzytelnianie wieloskładnikowe, czyli dwa dowody przy logowaniu.
2: System zarządza uprawnieniami użytkowników.
3: Organizacja identyfikuje i ocenia ryzyka bezpieczeństwa.
4: Kierownictwo określa poziom akceptowalnego ryzyka.
5: W COBIT 5 analizuje się odpowiednie cele i procesy, m.in. APO13 (Zarządzanie bezpieczeństwem, EN: Manage Security).
:::

:::teza egzaminacyjna
sytuacja: W pytaniu opisano zdarzenie: „wczoraj padło łącze i alarmy nie dotarły”. Jedna z odpowiedzi nazywa to ryzykiem.
pytanie: Czy zdarzenie, które już nastąpiło, jest ryzykiem?
teza: Nie. Ryzyko dotyczy tego, co może się wydarzyć. Zdarzenie, które już nastąpiło, to incydent albo problem.
uzasadnienie: COBIT 5 definiuje ryzyko jako połączenie prawdopodobieństwa zdarzenia i jego konsekwencji (FW-PL s. 93) – czyli coś, co dopiero może nastąpić.
powiazanie: Ryzyko (lekcja 0.4); optymalizacja ryzyka (dzień 1)
przyklad: „Łącze może paść podczas burzy” to ryzyko; „łącze padło wczoraj” to incydent.
status: oficjalne
zrodlo: FW-PL 93
refleksja: Jak zamienić zdanie o wczorajszej awarii na zdanie o ryzyku?
:::

---

<!-- slajd: rozwiazany -->
# Rozwiązujemy razem

:::rozwiazany
Sikora pisze w rejestrze: „Burza może uszkodzić jedyne łącze internetowe; wtedy OSP Zawilce nie dostanie alarmu”. Czym jest ten wpis?
- A. Incydentem, bo dotyczy awarii łącza
- B. Zagrożeniem, bo mówi o burzy
- C. Problemem, bo wskazuje przyczynę awarii
- D. Ryzykiem, bo łączy możliwe zdarzenie z jego skutkiem
+++
**Krok 1 – co jest pytane?** Słowo-klucz: „**może** uszkodzić”. Zdarzenie jeszcze nie nastąpiło.
+++
**Krok 2 – jaka kategoria?** Coś, co może się wydarzyć, razem ze skutkiem, to ryzyko.
+++
**Krok 3 – eliminacja.** A – *fałsz*: incydent już się dzieje albo się wydarzył. B – *zbyt wąskie*: burza to tylko źródło, a wpis mówi też o skutku. C – *inna kategoria*: problem to przyczyna incydentów, które już nastąpiły.
+++
**Odpowiedź: D.** Wpis łączy możliwe zdarzenie (uszkodzenie łącza) z jego skutkiem (brak alarmu) – to ryzyko związane z IT.
:::

:::wykladowca
Rozwiążmy to razem. Słowo-klucz to „może”. Zdarzenie jeszcze nie nastąpiło. Coś, co może się wydarzyć, razem ze skutkiem, to ryzyko. Teraz odrzucamy. Incydent już się wydarzył, a tu nic się nie stało, więc A odpada. Burza to tylko źródło, czyli zagrożenie. Wpis mówi jednak więcej: także o skutku. Dlatego B jest zbyt wąskie. Problem to przyczyna incydentów, które już były, więc C to inna kategoria. Zostaje D. Takie słowa jak „może”, „już” i „wczoraj” często rozstrzygają pytanie.
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący; krok 9: sprawdź zrozumienie -->
# Co już umiesz

| PL | EN (wymowa) | Jednym zdaniem |
|---|---|---|
| bezpieczeństwo informacji | information security („informejszyn sekjuriti”) | poufność, integralność i dostępność |
| dostępność | availability („awejlabiliti”) | działa wtedy, gdy trzeba |
| ryzyko związane z IT | IT-related risk („aj-ti rilejtid risk”) | prawdopodobieństwo i skutek tego, co może się wydarzyć |


**Co dalej i dlaczego:** następna lekcja to 0A.10 „Pieniędzy starczy na dwie rzeczy z trzech – co wybrać? Projekt, program i portfel IT”.

:::wykladowca
Podsumujmy trzema parami. Bezpieczeństwo informacji – information security: poufność, integralność i dostępność. Dostępność – availability: działa wtedy, gdy trzeba. Ryzyko związane z IT – IT-related risk: prawdopodobieństwo i skutek tego, co może się wydarzyć. Zapamiętajcie też oś czasu. Przed zdarzeniem mamy ryzyko. Po zdarzeniu mamy incydent. Obok stoi zagrożenie, czyli źródło. Pełną definicję ryzyka z COBIT 5 poznacie jutro w lekcji 0.4.
:::

:::wlasne-slowa
Wyjaśnij Grabowi w 3 zdaniach, dlaczego hasło na karteczce to ryzyko, choć „od roku nic się nie stało”. Użyj słów „ryzyko”, „poufność” i „incydent”.
???
„Ryzyko (risk) dotyczy tego, co **może** się stać: ktoś przeczyta hasło i zaloguje się jako Ty. Zagrożona jest poufność (confidentiality), a gdy ktoś zmieni numery – także integralność. Jeśli to się wydarzy, będzie już incydent, a wtedy na zmianę karteczki jest za późno.”
:::

:::atom
twierdzenie: Ryzyko dotyczy tego, co może się wydarzyć; zdarzenie, które już nastąpiło, to incydent.
poLudzku: Ryzyko to „może się zdarzyć”, incydent to „właśnie się zdarzyło”.
zycie: Klucz pod wycieraczką to ryzyko, a włamanie to incydent.
komenda: „Burza może przerwać łącze” to ryzyko; „łącze padło wczoraj” to incydent.
sprawdz: F :: Wczorajsza awaria łącza to ryzyko. :: Wczorajsza awaria już nastąpiła, więc to incydent.
:::
