---
id: it0-04-serwer-usluga
modul: IT0
modulNazwa: Podstawy cyfrowe
temat: "Skąd Twój telefon „wie”, jaka jest pogoda? Serwer, klient i usługa IT"
lekcja: "0A.4"
dzien: 0
sylabus: [M0-00-07]
minuty: 13
priorytet: 2
wielkiObraz: 4
cel:
  - "Potrafię własnymi słowami powiedzieć, czym jest serwer (server) i klient (client) i jak wymieniają żądanie i odpowiedź (request, response)."
  - "Potrafię odróżnić usługę IT (IT service) od jej składników: aplikacji i serwera."
wprowadza: [it-serwer, it-klient, it-zadanie-odpowiedz, it-usluga-it]
wymaga: [it0-01-komputer-program, it0-02-dane-informacja, it0-03-siec-internet]
twierdzenia: ["Serwer to komputer albo program, który wykonuje zadania na prośbę innych urządzeń.", "Klient to urządzenie albo program, który o coś prosi.", "Klient wysyła żądanie (request), a serwer odsyła odpowiedź (response).", "Usługa IT to to, co informatyka daje ludziom do pracy, np. „alarm wychodzi całą dobę”."]
typowePytania: [{"pytanie": "Czy serwer to zawsze duża szafa z kablami?", "odpowiedz": "Nie. Serwer to rola. Może nim być zwykły komputer albo sam program."}, {"pytanie": "Czy odpowiedź „brak dostępu” oznacza, że serwer się zepsuł?", "odpowiedz": "Nie. Serwer działa i odpowiedział – tylko odmówił."}, {"pytanie": "Czy usługa IT to serwer?", "odpowiedz": "Nie. Serwer to składnik. Usługa to efekt dla ludzi, np. „poczta działa”."}]
zgadnij: [q-pre-it0-04]
cwiczenia: [q-it0-04-01, q-it0-04-02, q-it0-04-03]
zapas: [q-zap-it0-04-1, q-zap-it0-04-2]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "Wersja robocza na podstawie _wzorce/lekcja-it0-wzorcowa.md – do przeglądu przez człowieka."}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy; krok 1: pokaż zjawisko -->
# Skąd Twój telefon „wie”, jaka jest pogoda?

Otwierasz w telefonie prognozę pogody. Po sekundzie widzisz temperaturę w Modrzewiowie.

Telefon nie ma termometru na dachu. Sam tego nie zmierzył. Skąd to wziął?

**Wniosek:** informacje często przychodzą do nas z innego urządzenia, które je dla nas przygotowało.

:::wykladowca
Zanim padnie jakiekolwiek trudne słowo, pomyślcie, skąd telefon wie, jaka jest pogoda. Nie ma termometru na dachu. Nie patrzy w niebo. Musiał o tę informację kogoś poprosić. Ten „ktoś” to inny komputer, daleko od nas, połączony z telefonem przez Internet. Poznaliście Internet w poprzedniej lekcji. Na tej lekcji zobaczymy, jak taka prośba wygląda krok po kroku. Nazwiemy też jej uczestników i to, co dzięki nim dostajemy.
:::

:::pytanie-uczestnika
pytanie: Czy ten drugi komputer to Internet?
odpowiedz: Nie. Internet to droga, którą idzie prośba. Komputer na końcu drogi, który odpowiada, ma osobną nazwę – poznasz ją za chwilę.
:::

---

<!-- slajd: proces -->
<!-- typ SD: C – procesowy; kroki 2–5: wyjaśnij, nazwij, każdy element, współpraca -->
# Prośba i odpowiedź – krok po kroku

1. Twój telefon **prosi**: „podaj pogodę dla Modrzewiowa”. Ta prośba to **żądanie** (EN: *request*, wym. „rikłest”).
2. Prośba leci przez **sieć** i Internet (lekcja 0A.3) do innego komputera.
3. Ten komputer **przygotowuje** odpowiedź. Taki komputer nazywamy **[[it-serwer|serwerem]]** (EN: *server*, wym. „serwer”).
4. Odpowiedź (EN: *response*, wym. „rispons”) wraca do telefonu. Prośbę i odpowiedź razem nazywamy **[[it-zadanie-odpowiedz|żądaniem i odpowiedzią]]**.
5. Telefon jest **[[it-klient|klientem]]** (EN: *client*, wym. „klajent”), bo to on prosił.

**Wniosek:** klient prosi, a serwer odpowiada – to dwie role w jednej wymianie.

:::wykladowca
Przejdźmy to po kolei. Telefon wysyła prośbę, która po angielsku nazywa się request. Prośba idzie siecią do innego komputera. Ten komputer przygotowuje odpowiedź, czyli response, i odsyła ją. Komputer, który odpowiada, to serwer. Urządzenie, które prosi, to klient. Zapamiętajcie: serwer to nie rodzaj sprzętu, tylko rola. Zwykły laptop też może być serwerem, jeśli odpowiada na prośby innych. A odpowiedź „nie mam takiej strony” to też odpowiedź – serwer działa, tylko odmawia.
:::

:::sb nie-mylic
Serwer to nie to samo co Internet. Internet to droga, którą idzie prośba. Serwer to ten, kto na końcu drogi odpowiada.
:::

:::sb wyobraz
Restauracja: gość (klient) zamawia, kelner (serwer) przyjmuje zamówienie, idzie do kuchni i wraca z daniem (odpowiedź).
:::

:::teza interpretacyjna
sytuacja: Dyżurna klika „Alarm” i po chwili widzi napis „brak uprawnień”.
pytanie: Czy to znaczy, że serwer się zepsuł?
teza: Nie. Serwer odebrał żądanie i odesłał odpowiedź – odmowną. Awarią byłby dopiero brak jakiejkolwiek odpowiedzi.
uzasadnienie: Odmowa to poprawna odpowiedź działającego serwera. Brak odpowiedzi oznacza kłopot z serwerem albo z siecią po drodze.
powiazanie: Konto i uprawnienia (lekcja 0A.6)
przyklad: „Brak dostępu do folderu Kadry” to odpowiedź serwera plików, który działa poprawnie.
status: uproszczenie
refleksja: Jaką odpowiedź dostajesz, gdy wpiszesz złe hasło do banku? Czy bank wtedy „nie działa”?
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający; krok 6–7: EN i zastosowanie w organizacji -->
# Co dostaje człowiek? Usługa IT (informatyczna)

Użytkownika rzadko obchodzi, który serwer odpowiada. Liczy się to, co dostaje: „pogoda się wyświetla”, „poczta działa”, „alarm wychodzi”.

To, co informatyka daje ludziom do pracy, to **[[it-usluga-it|usługa IT]]**. Skrót IT (czytaj „aj-ti”) pochodzi od angielskiego *Information Technology* – technologia informacyjna, czyli po prostu informatyka. Po angielsku usługa IT to *IT service* (wym. „aj-ti serwis”).

Na usługę składają się:
- **aplikacje** (lekcja 0A.1), np. „Syrena”;
- **serwery** i **sieć**, na których aplikacje działają;
- **ludzie**, którzy pomagają, gdy coś nie działa (np. telefon do informatyka).

**Wniosek:** usługa IT to efekt dla ludzi, a aplikacje, serwery i wsparcie to jej składniki.

:::wykladowca
Teraz najważniejsze słowo tej lekcji. Gdy dzwonicie po taksówkę, nie pytacie, jaki silnik ma samochód. Chcecie, żeby auto stało pod domem za pięć minut. Z informatyką jest tak samo. Pracownik nie pyta, który serwer odpowiada. Chce, żeby poczta działała. To, co dostaje, nazywamy usługą IT, po angielsku IT service. IT to skrót od Information Technology, czyli informatyka. Na usługę składają się aplikacje, serwery, sieć i ludzie, którzy pomagają. Wszystkie te składniki muszą zagrać razem.
:::

:::sb wyobraz
Ciepła woda w kranie. Nie widzisz pieca ani rur – liczy się, że po odkręceniu leci ciepła.
:::

:::sb skrot
**IT** – *Information Technology*, technologia informacyjna, czyli informatyka (wym. „aj-ti”).
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku; kroki 6–8: EN, organizacja, znaczenie specjalistyczne -->
# Od bankomatu do „Syreny”: ten sam mechanizm

:::kontekst zycie
**Bankomat.** Bankomat (klient) prosi serwer banku: „czy na koncie są pieniądze?”. Serwer odpowiada „tak” i bankomat wypłaca gotówkę. Usługa to „mogę wypłacić pieniądze o każdej porze”.
:::

:::kontekst biuro
**Wspólny folder.** Komputer w biurze prosi serwer plików: „otwórz folder działu”. Serwer sprawdza uprawnienia i wysyła pliki. Usługa to „wspólne foldery dostępne od 7 do 19”.
:::

:::kontekst organizacja
**Sklep internetowy.** Setki telefonów klientów naraz proszą serwer sklepu o listę towarów. Usługa to „zakupy przez Internet całą dobę”.
:::

:::kontekst psp
**Scena: „Serwer pod schodami”.** Dyżurna Kasia Nowik z komendy w Modrzewiowie klika „Alarm”. Jej komputer prosi serwer „Syreny”: „wyślij SMS-y do OSP Zawilce”. Serwer stoi w schowku pod schodami i nie ma zasilania awaryjnego. Gdy on stoi, żaden dyżurny nie wyśle alarmu.
:::

:::kontekst it
**COBIT 5.** Słownik FW-PL: usługi IT to „codzienne zapewnianie klientom infrastruktury i aplikacji IT oraz wsparcia przy korzystaniu z nich” (s. 92). Usługi są częścią aktywatora Usługi, infrastruktura i aplikacje (s. 27).
:::

:::zrodlo FW-PL 92
:::

**Wniosek:** w każdej organizacji klient prosi, serwer odpowiada, a ludzie dostają z tego usługę.

:::wykladowca
Ten sam mechanizm działa w bankomacie, w biurze i w komendzie. Klient prosi, serwer odpowiada, a człowiek dostaje usługę. Dla dyżurnej nieważne jest, który serwer odpowiada. Ważne, że alarm wychodzi. Zobaczcie jednak, co się dzieje, gdy serwer jest jeden i stoi pod schodami bez zapasowego prądu. Jedna awaria zatrzymuje całą usługę. Właśnie usługami zajmuje się później COBIT 5: kto o nich decyduje, kto je utrzymuje i jak mierzymy, czy działają. Słownik COBIT 5 mówi o tym wprost.
:::

:::teza praktyczna
sytuacja: Naczelnik informatyki melduje komendantce: „Serwer działa, aplikacja działa”. Mimo to ochotnicy z OSP nie dostali alarmu.
pytanie: Czy działające składniki oznaczają działającą usługę?
teza: Nie. Usługa działa dopiero wtedy, gdy wszystkie składniki zagrają razem i człowiek dostaje efekt – tu: alarm u ochotników.
uzasadnienie: Usługa IT obejmuje infrastrukturę, aplikacje i wsparcie razem (FW-PL s. 92). Awaria jednego składnika, np. łącza, zatrzymuje usługę.
powiazanie: Aktywator Usługi, infrastruktura i aplikacje (dzień 3)
przyklad: Serwer i „Syrena” działają, ale padło łącze internetowe – SMS-y nie wychodzą.
status: oficjalne
zrodlo: FW-PL 92
refleksja: O co komendantka powinna pytać: o serwer czy o usługę?
:::

:::progresja
0: Sprawdzasz pogodę w telefonie – telefon prosi serwer o prognozę.
1: W biurze komputer prosi serwer plików o wspólny folder.
2: Dział informatyki opisuje usługę: „poczta działa od 7 do 19, pomoc pod numerem 100”.
3: Organizacja sprawdza, które usługi są najważniejsze i od jakich serwerów zależą.
4: Kierownictwo decyduje, jak niezawodna ma być każda usługa i ile to może kosztować.
5: W COBIT 5 usługi IT są częścią aktywatora Usługi, infrastruktura i aplikacje (FW-PL s. 27, 92).
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący; krok 9: sprawdź zrozumienie -->
# Co już umiesz

| PL | EN (wymowa) | Jednym zdaniem |
|---|---|---|
| serwer | server („serwer”) | ten, kto odpowiada na prośby |
| klient | client („klajent”) | ten, kto prosi |
| żądanie i odpowiedź | request / response („rikłest / rispons”) | prośba i wiadomość zwrotna |
| usługa IT | IT service („aj-ti serwis”) | to, co informatyka daje ludziom do pracy |


**Co dalej i dlaczego:** następna lekcja to 0A.5 „Jak dyżurny w sekundę znajduje numer strażaka? Baza danych”.

:::wykladowca
Powiedzcie na głos cztery pary. Serwer – server. Klient – client. Żądanie i odpowiedź – request i response. Usługa IT – IT service. Klient prosi, serwer odpowiada. Odmowa to też odpowiedź. Usługa to efekt dla ludzi, a serwer i aplikacja to tylko jej składniki. Uwaga na jedno słowo: w biznesie i w COBIT 5 „klient” to zwykle człowiek albo firma, a nie telefon. Zawsze patrzcie na kontekst. Teraz sprawdźcie się w ćwiczeniach.
:::

:::wlasne-slowa
Wyjaśnij w 3 zdaniach, co się dzieje, gdy dyżurna klika „Alarm” w „Syrenie”. Użyj słów „klient”, „serwer” i „usługa IT”.
???
„Komputer dyżurnej to klient (client) – wysyła żądanie (request) przez sieć. Serwer (server) „Syreny” je odbiera, wysyła SMS-y i odsyła odpowiedź (response). Dla dyżurnej liczy się usługa IT (IT service): alarm wychodzi do strażaków w kilka sekund.”
:::

:::atom
twierdzenie: Serwer wykonuje zadania na prośbę innych urządzeń (klientów).
poLudzku: Serwer to „ten, kto odpowiada”.
zycie: Kelner przyjmuje zamówienie i przynosi danie.
komenda: Serwer „Syreny” przyjmuje kliknięcie dyżurnej i wysyła SMS-y.
sprawdz: F :: Serwer to zawsze duża szafa w serwerowni. :: Serwer to rola – może nią być zwykły komputer albo program.
:::
