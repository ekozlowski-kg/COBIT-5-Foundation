---
id: it0-06-konto-logowanie
modul: IT0
modulNazwa: Podstawy cyfrowe
temat: "Zalogowałam się, a folder się nie otwiera – dlaczego? Konto, uwierzytelnianie i autoryzacja"
lekcja: "0A.6"
dzien: 0
sylabus: [M0-00-07]
minuty: 14
priorytet: 2
wielkiObraz: 4
cel:
  - "Potrafię wyjaśnić, czym jest konto użytkownika (account) i dlaczego nie wolno go pożyczać."
  - "Potrafię odróżnić uwierzytelnianie (authentication) od autoryzacji (authorization) na przykładzie z pracy."
wprowadza: [it-konto, it-uwierzytelnianie, it-autoryzacja]
wymaga: [it0-04-serwer-usluga]
twierdzenia: ["Konto użytkownika (account) to osobisty zapis w systemie: nazwa użytkownika, sposób potwierdzenia tożsamości i uprawnienia.", "Uwierzytelnianie (authentication) sprawdza, kim jesteś.", "Autoryzacja (authorization) ustala, co wolno Ci zrobić po zalogowaniu.", "Każdy powinien mieć tylko tyle uprawnień, ile potrzebuje do pracy."]
typowePytania: [{"pytanie": "Skoro się zalogowałam, to czemu nie mogę otworzyć folderu?", "odpowiedz": "Logowanie potwierdziło, kim jesteś. To, co możesz otworzyć, ustala osobno autoryzacja – Twoje konto nie ma uprawnień do tego folderu."}, {"pytanie": "Czy mogę zalogować koleżankę na swoje konto, bo jeszcze nie ma własnego?", "odpowiedz": "Nie. System zapisuje działania na Twoje konto. Za jej błędy odpowiadałabyś Ty, a nikt nie wiedziałby, kto naprawdę coś zrobił."}]
zgadnij: [q-pre-it0-06]
cwiczenia: [q-it0-06-01, q-it0-06-02, q-it0-06-03]
zapas: [q-zap-it0-06-1, q-zap-it0-06-2]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "Wersja robocza – do przeglądu przez człowieka (test laika)."}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy; krok 1: pokaż zjawisko -->
# Zalogowałam się, a folder się nie otwiera – czy komputer się zepsuł?

Rano wpisujesz hasło i komputer w pracy Cię wpuszcza. Klikasz folder „Kadry”. Na ekranie pojawia się: **„Brak dostępu”**.

Komputer Cię zna. A jednak czegoś nie pozwala.

**Wniosek:** wpuszczenie do systemu i pozwolenie na konkretną rzecz to dwie różne sprawy.

:::wykladowca
Wyobraźcie sobie poranek w pracy. Wpisujecie hasło, komputer Was wpuszcza. Wszystko działa. Klikacie folder „Kadry” i widzicie napis „Brak dostępu”. Pierwsza myśl: coś się zepsuło. Ale nie. Komputer wie, kim jesteście, bo przecież Was wpuścił. Po prostu nie pozwala Wam na tę jedną rzecz. To dwa osobne kroki, które ludzie często mylą. Dziś je rozdzielimy i nazwiemy. Zaczniemy od tego, co w ogóle oznacza „być w systemie”.
:::

:::pytanie-uczestnika
pytanie: Czyli to nie awaria?
odpowiedz: Nie. Serwer działa i odpowiedział – odmową. Z lekcji 0A.4 wiesz, że odmowa to też odpowiedź.
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający; kroki 2–4: wyjaśnij, nazwij, każdy element -->
# Konto, uwierzytelnianie, autoryzacja – trzy różne rzeczy

| | Na jakie pytanie odpowiada? | Przykład | EN (wymowa) |
|---|---|---|---|
| **[[it-konto|Konto użytkownika]]** | „Czy ta osoba istnieje w systemie?” | login „k.nowik” w „Syrenie” | *account* („akaunt”) |
| **[[it-uwierzytelnianie|Uwierzytelnianie]]** | „Kim jesteś? Udowodnij.” | hasło i kod z SMS-a | *authentication* („otentikejszyn”) |
| **[[it-autoryzacja|Autoryzacja]]** | „Co wolno Ci zrobić?” | może wysłać alarm, nie może zmieniać numerów | *authorization* („otorajzejszyn”) |

- **Konto** zakłada administrator, czyli osoba, która zarządza systemem. Konto ma nazwę użytkownika (login) i przypisane uprawnienia.
- **Uwierzytelnianie** to sprawdzenie dowodu: hasła, kodu z telefonu, odcisku palca.
- **Autoryzacja** to sprawdzenie uprawnień przy każdej czynności.

**Wniosek:** konto to Twoje miejsce w systemie, uwierzytelnianie sprawdza, czy to Ty, a autoryzacja – co Ci wolno.

:::wykladowca
Pierwsza rzecz to konto, po angielsku account. To Wasze miejsce w systemie, z nazwą użytkownika, czyli loginem. Konto zakłada administrator. Druga rzecz to uwierzytelnianie, po angielsku authentication. System pyta: kim jesteś, udowodnij. Dowodem jest hasło, kod z telefonu albo odcisk palca. Trzecia rzecz to autoryzacja, po angielsku authorization. System pyta: co wolno tej osobie? Może czytać folder, ale nie zmieniać? Może wysłać alarm, ale nie poprawiać numerów? Zapamiętajcie dwa pytania: kim jesteś i co Ci wolno.
:::

:::sb wyobraz
Hotel. Recepcja sprawdza Twój dowód osobisty (uwierzytelnianie) i daje klucz tylko do Twojego pokoju (autoryzacja). Rezerwacja na Twoje nazwisko to konto.
:::

:::sb kontrowersja
Słownik FW-PL definiuje „uwierzytelnienie” jako weryfikację tożsamości **oraz** uprawnień dostępu (s. 89). W praktyce informatyków te dwa kroki się rozdziela. Kurs uczy rozdzielania, ale pamiętaj o definicji COBIT 5.
:::

---

<!-- slajd: proces -->
<!-- typ SD: C – procesowy; krok 5: jak elementy współpracują -->
# Od wpisania hasła do „Brak dostępu” – krok po kroku

1. Wpisujesz **nazwę użytkownika**. To deklaracja: „jestem Kasia”.
2. Wpisujesz **hasło** i **kod z SMS-a**. To dowody. System porównuje je z zapisanym wzorem – to **uwierzytelnianie**.
3. Dowody się zgadzają. System otwiera **Twoje konto**.
4. Klikasz folder „Kadry”. Twój komputer (klient) wysyła żądanie do serwera plików.
5. Serwer sprawdza listę uprawnień konta – to **autoryzacja** – i odpowiada: „Brak dostępu”.

Dwa dowody różnego rodzaju naraz (coś, co **wiesz**, i coś, co **masz**) to **uwierzytelnianie wieloskładnikowe** (EN: *multi-factor authentication*). Trudniej je oszukać niż samo hasło.

**Wniosek:** najpierw system sprawdza, kim jesteś, a dopiero potem – przy każdej czynności – co Ci wolno.

:::wykladowca
Przejdźmy całą drogę. Nazwa użytkownika to tylko deklaracja: „to ja”. Każdy może ją wpisać. Dowodem jest hasło, a coraz częściej także kod z telefonu. Gdy dowody się zgadzają, system otwiera Wasze konto. To było uwierzytelnianie. Potem klikacie folder. Serwer plików sprawdza listę uprawnień Waszego konta. To jest autoryzacja. Jeśli folderu nie ma na liście, serwer odpowiada odmową. Zauważcie: dwa dowody różnego rodzaju, hasło i telefon, są dużo bezpieczniejsze niż jedno hasło.
:::

:::teza praktyczna
sytuacja: Dyżurny Paweł Grab mówi nowej koleżance: „Zaloguj się na moim koncie, swojego jeszcze nie masz”.
pytanie: Czy pożyczenie konta to tylko drobna przysługa?
teza: Nie. System zapisuje wszystko, co zrobiono na koncie. Przy pożyczonym koncie nie wiadomo, kto naprawdę wysłał alarm albo popełnił błąd.
uzasadnienie: Konto jest przypisane jednej osobie, a uwierzytelnianie ma potwierdzić, że przy klawiaturze siedzi właśnie ona.
powiazanie: Bezpieczeństwo informacji (lekcja 0A.9)
przyklad: W zapisach „Syreny” widać, że alarm wysłał Grab, choć w tym czasie był na urlopie.
status: uproszczenie
refleksja: Co zrobisz, gdy nowa osoba w pracy nie ma jeszcze własnego konta?
:::

:::sb nie-mylic
„Poziom uprawnień” w COBIT 5 to coś innego: uprawnienia decyzyjne zespołu, np. co może postanowić rada (dzień 3). Tu chodzi o dostęp do plików i funkcji systemu.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku; kroki 6–8: EN, organizacja, znaczenie specjalistyczne -->
# Uprawnienia w telefonie, w biurze i w komendzie

:::kontekst zycie
**Telefon.** Logujesz się do banku hasłem i kodem z SMS-a (uwierzytelnianie). Telefon pyta: „Czy aplikacja Mapy może znać Twoją lokalizację?”. To Ty decydujesz o uprawnieniu (autoryzacja).
:::

:::kontekst biuro
**Wspólny dysk.** Pracownik sprzedaży otwiera folder „Oferty”, ale folder „Płace” pokazuje mu „Brak dostępu”.
:::

:::kontekst organizacja
**Bank.** Kasjer może wypłacić do 10 000 zł. Większą wypłatę musi zatwierdzić kierownik, bo ma szersze uprawnienia. Gdy pracownik odchodzi z banku, jego konta blokuje się tego samego dnia.
:::

:::kontekst psp
**Scena: „Kto może zmieniać numery?”.** Informatyczka komendy w Modrzewiowie, Ola Dudek, przegląda uprawnienia w „Syrenie”. Okazuje się, że wszyscy dyżurni mogą zmieniać numery strażaków w bazie. Ktoś mógł więc przez pomyłkę nadpisać numer naczelnika OSP Zawilce. Ola zostawia tę możliwość tylko sobie i zastępcy. Dyżurni nadal mogą wysyłać alarmy.
:::

:::kontekst it
**COBIT 5.** Konta i uprawnienia to część procesu DSS05 (Zarządzanie usługami bezpieczeństwa, FW-PL s. 33). Słownik FW-PL definiuje „uwierzytelnienie” na s. 89. Procesy COBIT 5 poznasz w dniu 2.
:::

:::zrodlo FW-PL 89
:::

**Wniosek:** dobra autoryzacja daje każdemu tylko tyle uprawnień, ile potrzebuje do swojej pracy.

:::wykladowca
Zobaczcie, że autoryzację znacie z telefonu. Gdy aplikacja pyta o dostęp do aparatu czy lokalizacji, decydujecie o jej uprawnieniach. W biurze i w banku robi to administrator, według stanowiska. W komendzie w Modrzewiowie wszyscy dyżurni mogli zmieniać numery. To było za dużo. Zasada jest prosta: każdy dostaje tylko to, czego potrzebuje do pracy. Informatycy nazywają ją zasadą najmniejszych uprawnień. W COBIT 5 zajmuje się tym proces o nazwie DSS05, Zarządzanie usługami bezpieczeństwa.
:::

:::teza egzaminacyjna
sytuacja: W pytaniu opisano pracownika, który zalogował się poprawnie, ale nie może otworzyć dokumentu.
pytanie: Który mechanizm go zatrzymał?
teza: Autoryzacja, a nie uwierzytelnianie. Uwierzytelnianie się udało, skoro system go wpuścił.
uzasadnienie: Uwierzytelnianie potwierdza tożsamość, a autoryzacja ustala uprawnienia. W praktyce IT to osobne kroki, choć słownik FW-PL łączy je w definicji uwierzytelnienia (s. 89).
powiazanie: DSS05 Zarządzanie usługami bezpieczeństwa
przyklad: Kasia zalogowała się do komputera, ale „Kadry” są dla niej zamknięte.
status: uproszczenie
refleksja: Jak brzmiałby przykład, w którym zawodzi uwierzytelnianie, a nie autoryzacja?
:::

---

<!-- slajd: rozwiazany -->
# Rozwiązujemy razem

:::rozwiazany
Kasia Nowik wpisała poprawne hasło i kod z telefonu. „Syrena” ją wpuściła, ale nie pozwala jej zmienić numeru strażaka. Co zatrzymało Kasię?
- A. Uwierzytelnianie, bo kod z telefonu był błędny
- B. Autoryzacja, bo jej konto nie ma uprawnienia do zmiany numerów
- C. Awaria serwera „Syreny”
- D. Brak konta w „Syrenie”
+++
**Krok 1 – co jest pytane?** Słowo-klucz: „wpuściła, ale nie pozwala”. Pytamy o to, co działo się **po** zalogowaniu.
+++
**Krok 2 – który mechanizm działa po zalogowaniu?** Po wpuszczeniu do systemu działa autoryzacja: sprawdza, co wolno temu kontu.
+++
**Krok 3 – eliminacja.** A – *fałsz*: skoro system ją wpuścił, uwierzytelnianie się udało. C – *fałsz*: serwer działa, bo odpowiedział odmową. D – *fałsz*: bez konta nie mogłaby się zalogować.
+++
**Odpowiedź: B.** Uwierzytelnianie potwierdziło, że to Kasia. Autoryzacja ustaliła, że jej konto nie może zmieniać numerów.
:::

:::wykladowca
Rozwiążmy to razem, krok po kroku. Najpierw szukamy słowa-klucza. Tu brzmi ono: „wpuściła, ale nie pozwala”. Pytanie dotyczy więc tego, co dzieje się po zalogowaniu. Po zalogowaniu pracuje autoryzacja. Teraz odrzucamy złe odpowiedzi. Uwierzytelnianie się udało, bo system ją wpuścił. Serwer nie jest zepsuty, bo odpowiedział. Konto istnieje, bo inaczej nie byłoby logowania. Zostaje odpowiedź B: autoryzacja. Tak samo będziecie rozwiązywać pytania na egzaminie: słowo-klucz, kategoria, eliminacja.
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący; krok 9: sprawdź zrozumienie -->
# Co już umiesz

| PL | EN (wymowa) | Pytanie, na które odpowiada |
|---|---|---|
| konto użytkownika | account („akaunt”) | Czy ta osoba istnieje w systemie? |
| uwierzytelnianie | authentication („otentikejszyn”) | Kim jesteś? |
| autoryzacja | authorization („otorajzejszyn”) | Co Ci wolno? |

:::progresja
0: Ustawiasz hasło do telefonu.
1: Bank wymaga hasła i kodu z SMS-a, czyli dwóch dowodów naraz.
2: W biurze administrator nadaje uprawnienia do folderów według stanowisk.
3: Organizacja blokuje konta odchodzących pracowników tego samego dnia.
4: Kierownictwo ustala zasadę: każdy ma tylko uprawnienia potrzebne do pracy.
5: W COBIT 5 zarządzanie dostępem należy do procesu DSS05 Zarządzanie usługami bezpieczeństwa.
:::


**Co dalej i dlaczego:** następna lekcja to 0A.7 „Na czym stoi „Syrena” i kto za nią odpowiada? Infrastruktura, aplikacje, dostawca i outsourcing”.

:::wykladowca
Podsumujmy trzema parami. Konto – account. Uwierzytelnianie – authentication. Autoryzacja – authorization. Konto to Wasze miejsce w systemie. Uwierzytelnianie odpowiada na pytanie „kim jesteś?”. Autoryzacja odpowiada na pytanie „co Ci wolno?”. Konta się nie pożycza. A uprawnień daje się tyle, ile trzeba do pracy, nie więcej. Spróbujcie teraz wyjaśnić koleżance, dlaczego widzi „Brak dostępu”, choć się zalogowała. Jeśli umiecie to zrobić bez zaglądania do tabeli, przejdźcie do ćwiczeń.
:::

:::wlasne-slowa
Wyjaśnij koleżance w 3 zdaniach, dlaczego zalogowała się do komputera, a nie może otworzyć folderu „Kadry”. Użyj słów „uwierzytelnianie” i „autoryzacja” oraz ich angielskich nazw.
???
„Gdy wpisałaś hasło, system sprawdził, kim jesteś – to uwierzytelnianie (authentication), i ono się udało. Przy otwieraniu folderu system sprawdza, co wolno Twojemu kontu – to autoryzacja (authorization). Twoje konto nie ma uprawnień do „Kadr”, więc serwer odpowiedział odmową.”
:::

:::atom
twierdzenie: Uwierzytelnianie sprawdza, kim jesteś, a autoryzacja ustala, co Ci wolno.
poLudzku: Najpierw „to naprawdę Ty?”, potem „czy możesz to zrobić?”.
zycie: Domofon wpuszcza Cię do klatki, ale klucz otwiera tylko Twoje mieszkanie.
komenda: Kasia loguje się do „Syreny”, ale numery może zmieniać tylko Ola Dudek.
sprawdz: F :: Kto się zaloguje, ma dostęp do wszystkiego. :: Po zalogowaniu autoryzacja sprawdza uprawnienia przy każdej czynności.
:::
