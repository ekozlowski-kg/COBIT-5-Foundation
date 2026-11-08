---
# WZORZEC PRODUKCYJNY lekcji P0/P1 (METODYKA §17.3, SD-2 §3: zjawisko → wyjaśnij → nazwij → każdy element → współpraca → EN → organizacja → znaczenie specjalistyczne → sprawdź)
id: it0-04-serwer-usluga
modul: IT0
modulNazwa: Moduł 0A – Podstawy cyfrowe
temat: "Co się dzieje, gdy otwierasz stronę internetową? Serwer i usługa"
lekcja: "0A.4"
dzien: 0
minuty: 15
priorytet: 1
wielkiObraz: 4
cel:
  - "Potrafię własnymi słowami powiedzieć, czym jest serwer (server) i czym jest usługa IT (IT service)."
wprowadza: [it-serwer, it-klient, it-zadanie-odpowiedz, it-usluga]
wymaga: [it0-01-komputer-program, it0-03-siec-internet]
twierdzenia:
  - "Serwer to komputer albo program, który wykonuje zadania na prośbę innych urządzeń."
  - "Klient to urządzenie albo program, który o coś prosi."
  - "Usługa IT to coś, co informatyka daje ludziom do wykonywania ich pracy."
typowePytania:
  - { pytanie: "Czy serwer to zawsze duża szafa z kablami?", odpowiedz: "Nie. Serwer to rola. Może nim być zwykły komputer albo program." }
cwiczenia: []
kontrolaAutora: { data: null, kto: null, uwagi: "wzorzec" }
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy; krok 1: pokaż zjawisko -->
# Skąd Twój telefon „wie”, jaka jest pogoda?

Otwierasz w telefonie prognozę pogody. Po sekundzie widzisz temperaturę w Modrzewiowie.

Telefon sam tego nie zmierzył. Skąd to wziął?

**Wniosek:** informacje często przychodzą do nas z innego urządzenia.

:::wykladowca
Zanim padnie jakiekolwiek trudne słowo: pomyślcie, skąd telefon wie, jaka jest pogoda. Nie ma termometru na dachu. Musiał o tę informację kogoś poprosić. Ten „ktoś” to inny komputer, daleko od nas. Na tej lekcji zobaczymy, jak taka prośba wygląda i jak się nazywają jej uczestnicy.
:::

---

<!-- slajd: proces -->
<!-- typ SD: C – procesowy; kroki 2–5: wyjaśnij, nazwij, każdy element, współpraca -->
# Prośba i odpowiedź – krok po kroku

1. Twój telefon **prosi**: „podaj pogodę dla Modrzewiowa”. Ta prośba to **żądanie** (EN: *request*).
2. Prośba leci przez **sieć** (lekcja 0A.3) do innego komputera.
3. Ten komputer **przygotowuje** odpowiedź. Taki komputer nazywamy **serwerem** (EN: *server*, wym. „serwer”).
4. Odpowiedź (EN: *response*) wraca do telefonu.
5. Telefon jest **klientem** (EN: *client*, wym. „klajent”), bo to on prosił.

**Wniosek:** serwer odpowiada na prośby klientów.

:::wykladowca
Przejdźmy to po kolei. Telefon wysyła prośbę, która po angielsku nazywa się request. Prośba idzie siecią do innego komputera. Ten komputer przygotowuje odpowiedź, czyli response, i odsyła ją. Komputer, który odpowiada, to serwer. Urządzenie, które prosi, to klient. Zapamiętajcie: serwer to nie rodzaj sprzętu, tylko rola. Zwykły laptop też może być serwerem, jeśli odpowiada na prośby innych.
:::

:::sb nie-mylic
Serwer to nie to samo co Internet. Internet to droga, którą idzie prośba. Serwer to ten, kto na końcu drogi odpowiada.
:::

---

<!-- slajd: przyklad -->
<!-- kroki 6–8: EN, organizacja, znaczenie specjalistyczne -->
# Od pogody do „Syreny”: usługa IT

:::kontekst zycie
Bankomat prosi serwer banku: „czy na koncie są pieniądze?”. Serwer odpowiada i bankomat wypłaca gotówkę.
:::

:::kontekst biuro
Komputer w biurze prosi serwer: „otwórz wspólny folder działu”. Serwer sprawdza uprawnienia i wysyła pliki.
:::

:::kontekst psp
Dyżurny klika „Alarm”. Jego komputer prosi serwer „Syreny”: „wyślij SMS-y do OSP Zawilce”.
:::

To, co serwer i programy dają ludziom do pracy, na przykład „wysyłanie alarmów”, to **usługa IT** (EN: *IT service*). W COBIT 5 usługi są częścią aktywatora **Services, Infrastructure and Applications** (Usługi, infrastruktura i aplikacje).

:::zrodlo FW-PL 27
:::

**Wniosek:** usługa IT to wynik pracy serwerów i programów, który ma znaczenie dla ludzi.

:::wykladowca
Ten sam mechanizm działa w bankomacie, w biurze i w komendzie. Dla dyżurnego nieważne jest, który serwer odpowiada. Ważne jest, że alarm wychodzi. To „wychodzenie alarmu” nazywamy usługą IT. Właśnie usługami zajmuje się później COBIT: kto o nich decyduje, kto je utrzymuje i jak mierzymy, czy działają.
:::

:::atom
twierdzenie: Serwer wykonuje zadania na prośbę innych urządzeń (klientów).
poLudzku: Serwer to „ten, kto odpowiada”.
zycie: Kelner przyjmuje zamówienie i przynosi danie.
komenda: Serwer „Syreny” przyjmuje kliknięcie dyżurnego i wysyła SMS-y.
sprawdz: F :: Serwer to zawsze duża szafa w serwerowni. :: Serwer to rola – może nią być zwykły komputer albo program.
:::
