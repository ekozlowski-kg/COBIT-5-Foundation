---
id: it0-07-infrastruktura-aplikacje
modul: IT0
modulNazwa: Podstawy cyfrowe
temat: "Na czym stoi „Syrena” i kto za nią odpowiada? Infrastruktura, aplikacje, dostawca i outsourcing"
lekcja: "0A.7"
dzien: 0
sylabus: [M0-00-07]
minuty: 13
priorytet: 2
wielkiObraz: 4
cel:
  - "Potrafię odróżnić infrastrukturę IT (IT infrastructure) od aplikacji (application) i od usługi IT."
  - "Potrafię wyjaśnić, czym jest dostawca (supplier) i outsourcing, i dlaczego outsourcing nie zdejmuje odpowiedzialności z organizacji."
wprowadza: [it-infrastruktura, it-dostawca, it-outsourcing]
wymaga: [it0-04-serwer-usluga, it0-05-baza-danych]
twierdzenia: ["Infrastruktura IT to podstawa, na której działają aplikacje: sprzęt, sieć, serwery, systemy operacyjne i serwerownia.", "Aplikacje stoją na infrastrukturze, a usługa IT to efekt ich działania dla ludzi.", "Dostawca (supplier) to firma zewnętrzna, która dostarcza organizacji sprzęt, programy albo usługi.", "Outsourcing to stałe zlecenie pracy dostawcy; odpowiedzialność za wynik zostaje w organizacji."]
typowePytania: [{"pytanie": "Czy „Syrena” to infrastruktura?", "odpowiedz": "Nie. „Syrena” to aplikacja. Infrastruktura to serwer, łącze i sieć, na których ona działa."}, {"pytanie": "Skoro oddaliśmy utrzymanie firmie, to za awarię odpowiada ona?", "odpowiedz": "Wobec komendy – z umowy tak. Wobec mieszkańców nadal odpowiada komenda. Dlatego musi pilnować umowy."}]
zgadnij: [q-pre-it0-07]
cwiczenia: [q-it0-07-01, q-it0-07-02, q-it0-07-03]
zapas: [q-zap-it0-07-1, q-zap-it0-07-2]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "Wersja robocza – do przeglądu przez człowieka (test laika)."}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy; krok 1: pokaż zjawisko -->
# Łazienka w porządku, a wody nie ma – gdzie szukać przyczyny?

Rano odkręcasz kran. Wody nie ma. Twoja łazienka jest sprawna: kran nowy, rury w ścianie całe.

Pękła rura w piwnicy bloku. Nie widzisz jej, a wszystko od niej zależy.

**Wniosek:** to, z czego korzystamy, stoi na niewidocznej podstawie – i gdy ona zawodzi, zawodzi wszystko.

:::wykladowca
Pomyślcie o swoim mieszkaniu. Kran działa, prysznic działa. Ale pewnego ranka nie ma wody. W łazience wszystko jest w porządku. Kłopot jest w piwnicy, gdzie pękła wspólna rura. Rury nie widzicie na co dzień, a bez niej nie umyjecie zębów. W informatyce jest dokładnie tak samo. Aplikacje, z których korzystacie, stoją na podstawie, której nie widać. Dziś ją nazwiemy. Powiemy też, kto ją dostarcza i co się dzieje, gdy oddamy jej utrzymanie obcej firmie.
:::

:::pytanie-uczestnika
pytanie: Czy ta „podstawa” to po prostu serwer?
odpowiedz: Serwer to jej część. Do podstawy należy też sieć, łącze z Internetem, systemy operacyjne i pomieszczenie z prądem.
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający; kroki 2–4: wyjaśnij, nazwij, każdy element -->
# Trzy piętra informatyki: infrastruktura, aplikacje, usługa

| Piętro | Co to jest? | Przykład z komendy | EN (wymowa) |
|---|---|---|---|
| **usługa IT** (lekcja 0A.4) | to, co dostaje człowiek | „alarm wychodzi całą dobę” | *IT service* |
| **aplikacje** (lekcja 0A.1) | programy do zadań ludzi | „Syrena” | *applications* („eplikejszyns”) |
| **[[it-infrastruktura|infrastruktura IT]]** | podstawa, na której działają aplikacje | serwer pod schodami, łącze, sieć | *IT infrastructure* („infrastrakczer”) |

Do infrastruktury należą:
- **techniczna**: sprzęt, systemy operacyjne, serwery, sieć;
- **fizyczna**: pomieszczenie serwerowni, prąd, chłodzenie.

**Wniosek:** usługa stoi na aplikacjach, a aplikacje stoją na infrastrukturze.

:::wykladowca
Ułóżmy informatykę w trzy piętra. Na samej górze jest usługa IT, czyli to, co dostaje człowiek: „alarm wychodzi”. Niżej są aplikacje, czyli programy, takie jak „Syrena”. Na samym dole jest podstawa, na której wszystko stoi. Nazywamy ją infrastrukturą IT, po angielsku IT infrastructure. Należą do niej sprzęt, systemy operacyjne, serwery i sieć. To infrastruktura techniczna. Należy do niej też pomieszczenie z prądem i chłodzeniem. To infrastruktura fizyczna. Gdy zawodzi dolne piętro, górne też przestają działać.
:::

:::sb wyobraz
Dom: fundamenty i rury to infrastruktura, sprzęty kuchenne to aplikacje, a ciepły obiad to usługa.
:::

:::sb powiazanie
W COBIT 5 te trzy piętra tworzą razem jeden aktywator: [[uslugi-infrastruktura-aplikacje|Usługi, infrastruktura i aplikacje]] – poznasz go w lekcji 2.8 (dzień 3).
:::

:::zrodlo FW-PL 86
:::

---

<!-- slajd: proces -->
<!-- typ SD: C – procesowy; krok 5: jak elementy współpracują; krok 7: organizacja -->
# Kto dostarcza infrastrukturę i aplikacje? Dostawca i outsourcing

Mało która organizacja robi wszystko sama. Kupuje od firm zewnętrznych.

1. **[[it-dostawca|Dostawca]]** (EN: *supplier*, wym. „saplajer”) – firma spoza organizacji, która sprzedaje sprzęt, programy, łącze albo pomoc techniczną.
2. Z dostawcą podpisuje się **umowę**: co dostajemy, jak szybko dostawca naprawia awarię i co grozi, gdy nie dotrzyma słowa.
3. Gdy organizacja oddaje dostawcy **na stałe** całą pracę, np. utrzymanie serwerów albo nocny dyżur, to **[[it-outsourcing|outsourcing]]** (wym. „autsorsing”; słowo zostaje w oryginale).
4. Organizacja **nadal odpowiada** za wynik: sprawdza raporty dostawcy i reaguje, gdy usługa jest zła.

**Wniosek:** pracę można zlecić dostawcy, ale odpowiedzialności za skutki – nie.

:::wykladowca
Teraz pytanie: kto to wszystko dostarcza? Zwykle firmy z zewnątrz. Firmę, od której kupujemy sprzęt, programy albo łącze, nazywamy dostawcą, po angielsku supplier. Z dostawcą podpisujemy umowę. Dobra umowa mówi, co dostajemy i jak szybko dostawca naprawi awarię. Czasem organizacja idzie dalej i oddaje dostawcy na stałe całą pracę, na przykład utrzymanie serwerów. To outsourcing. To słowo zostawiamy po angielsku. I najważniejsze: pracę można zlecić, ale odpowiedzialności za skutki nie.
:::

:::teza krytyczna
sytuacja: Po nocnym pożarze handlowiec dostawcy mówi: „System działa zgodnie z umową”. W umowie nie zapisano, jak szybko trzeba naprawić awarię.
pytanie: Czy komenda może uznać, że to wyłącznie sprawa dostawcy?
teza: Nie. Dostawca odpowiada wobec komendy tylko za to, co zapisano w umowie. Wobec mieszkańców za alarmy odpowiada nadal komenda.
uzasadnienie: FW-PL wymienia uzależnienie od zewnętrznych dostawców i ocenę umów o outsourcing IT jako pytania, które musi sobie zadać organizacja (s. 22).
powiazanie: APO10 (Zarządzanie dostawcami), dzień 2
przyklad: Komenda dopisuje do umowy: awaria zgłoszona w nocy – technik reaguje w 15 minut.
status: oficjalne
zrodlo: FW-PL 22
refleksja: Co Twoja organizacja powinna zapisać w umowie z firmą, która utrzymuje jej komputery?
:::

:::sb nie-mylic
Kupno drukarki to zakup od dostawcy, a nie outsourcing. Outsourcing to **stałe** zlecenie wykonywania pracy albo usługi.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku; kroki 6–8: EN, organizacja, znaczenie specjalistyczne -->
# Od biura rachunkowego do Kwant-Sygnału

:::kontekst zycie
**Domowa księgowość.** Zamiast samemu rozliczać podatki, płacisz biuru rachunkowemu. Biuro jest dostawcą, a stałe zlecenie to outsourcing. Jeśli biuro się spóźni, karę z urzędu i tak dostaniesz Ty.
:::

:::kontekst biuro
**Firma bez informatyka.** Mała firma ma umowę z zewnętrzną firmą, która raz w tygodniu przyjeżdża i pomaga przy awariach. Router, serwer plików i drukarka sieciowa to infrastruktura biura.
:::

:::kontekst organizacja
**Szpital.** Oddaje firmie zewnętrznej prowadzenie serwerowni. W umowie zapisano: przestój nie dłuższy niż 4 godziny w roku. Co miesiąc szpital sprawdza raport.
:::

:::kontekst psp
**Scena: „System działa zgodnie z umową”.** Komenda straży w Modrzewiowie kupiła „Syrenę” od firmy Kwant-Sygnał. Infrastruktura to jeden serwer pod schodami bez zasilania awaryjnego i jedno łącze internetowe. Po pożarze przy Lipowej handlowiec dostawcy, Igor Wolny, mówi: „System działa zgodnie z umową”. Główna księgowa Halina Mak czyta umowę: nie ma w niej, jak szybko trzeba naprawić awarię.
:::

:::kontekst it
**COBIT 5.** FW-PL wymienia „dostawców zatrudnionych w ramach outsourcingu” wśród interesariuszy usług (s. 85). „Problemy z realizacją usług w ramach outsourcingu” podaje jako typowy sygnał kłopotów (s. 36). Relacjami z dostawcami zajmuje się proces APO10 (Zarządzanie dostawcami, s. 33).
:::

:::zrodlo FW-PL 85
:::

**Wniosek:** organizacja musi znać swoją infrastrukturę, wybierać dostawców i pilnować umów – także przy outsourcingu.

:::wykladowca
Ten sam schemat widać w domu, w biurze i w szpitalu. W komendzie w Modrzewiowie widać też jego słabe strony. Infrastruktura „Syreny” to jeden serwer bez zasilania awaryjnego i jedno łącze. Dostawca mówi, że wszystko jest zgodne z umową. I ma rację, bo w umowie niczego nie zapisano. COBIT 5 zwraca na to uwagę wprost. Wymienia dostawców i outsourcing wśród spraw, którymi trzeba zarządzać. Problemy z outsourcingiem podaje jako typowy sygnał, że organizacja potrzebuje porządku w informatyce.
:::

:::teza porownawcza
sytuacja: Sikora, naczelnik informatyki, wylicza komendantce: serwer, łącze, „Syrena”, „alarm całą dobę”.
pytanie: Które z tych rzeczy to infrastruktura, które aplikacja, a które usługa?
teza: Serwer i łącze to infrastruktura, „Syrena” to aplikacja, a „alarm całą dobę” to usługa IT.
uzasadnienie: FW-PL rozróżnia infrastrukturę techniczną i fizyczną oraz aplikacje zapewniające funkcjonalność biznesową (s. 86); usługę tworzy ich działanie razem ze wsparciem (s. 92).
powiazanie: Aktywator Usługi, infrastruktura i aplikacje (dzień 3)
przyklad: Brak zasilania awaryjnego to słabość infrastruktury, a nie aplikacji.
status: oficjalne
zrodlo: FW-PL 86, 92
refleksja: Do którego piętra należy pomieszczenie pod schodami, w którym stoi serwer?
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący; krok 9: sprawdź zrozumienie -->
# Co już umiesz

| PL | EN (wymowa) | Jednym zdaniem |
|---|---|---|
| infrastruktura IT | IT infrastructure („infrastrakczer”) | podstawa, na której działają aplikacje |
| aplikacja | application („eplikejszyn”) | program do zadań ludzi, stojący na infrastrukturze |
| dostawca | supplier („saplajer”) | firma zewnętrzna, która coś dostarcza |
| outsourcing | outsourcing („autsorsing”) | stałe zlecenie pracy dostawcy |

:::progresja
0: Płacisz firmie za Internet w domu – to Twój dostawca.
1: Biuro ma umowę z firmą, która serwisuje drukarki.
2: Firma oddaje zewnętrznemu dostawcy całą pomoc techniczną – to outsourcing.
3: Organizacja zapisuje w umowach, jak szybko dostawca usuwa awarie, i co miesiąc to sprawdza.
4: Kierownictwo decyduje, co robić samemu, a co zlecić, i ile zależności od dostawców jest do przyjęcia.
5: W COBIT 5 dostawcami zarządza proces APO10, a infrastruktura należy do aktywatora Usługi, infrastruktura i aplikacje.
:::


**Co dalej i dlaczego:** następna lekcja to 0A.8 „Co robić, gdy „Syrena” milknie? Incydent, problem, zmiana, kopia zapasowa i ciągłość działania”.

:::wykladowca
Podsumujmy. Infrastruktura IT, po angielsku IT infrastructure, to podstawa: sprzęt, sieć, serwery, systemy operacyjne i serwerownia. Aplikacje stoją na infrastrukturze. Usługa to efekt dla ludzi. Dostawca, po angielsku supplier, to firma zewnętrzna, która coś nam dostarcza. Outsourcing to stałe zlecenie pracy dostawcy. Zapamiętajcie zdanie: pracę można zlecić, odpowiedzialności nie. Ono wróci w COBIT 5 wiele razy. Spróbujcie teraz wyjaśnić to własnymi słowami na przykładzie „Syreny”.
:::

:::wlasne-slowa
Wyjaśnij w 3 zdaniach, dlaczego komenda nie może powiedzieć „za Syrenę odpowiada Kwant-Sygnał”. Użyj słów „dostawca”, „outsourcing” i „infrastruktura”.
???
„Kwant-Sygnał to dostawca (supplier) – sprzedał aplikację i może utrzymywać infrastrukturę (serwer, łącze). Nawet przy outsourcingu dostawca odpowiada wobec komendy tylko za to, co zapisano w umowie. Za to, czy alarm dotrze do mieszkańców, odpowiada komenda, więc musi określić wymagania i pilnować ich wykonania.”
:::

:::atom
twierdzenie: Outsourcing przenosi na dostawcę wykonanie pracy, ale nie odpowiedzialność organizacji za wynik.
poLudzku: Możesz zlecić robotę, ale za skutki odpowiadasz nadal Ty.
zycie: Sąsiad kosi Ci trawnik, ale to Twój ogród zarasta, gdy przestanie przychodzić.
komenda: Kwant-Sygnał utrzymuje „Syrenę”, ale za alarmy wobec mieszkańców odpowiada komenda.
sprawdz: F :: Po outsourcingu za awarię odpowiada wyłącznie dostawca. :: Odpowiedzialność wobec interesariuszy zostaje w organizacji.
:::
