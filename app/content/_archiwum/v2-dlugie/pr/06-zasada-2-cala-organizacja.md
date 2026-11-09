---
id: pr-06-zasada-2
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: Zasada 2 – Pokrycie całej organizacji i Podejście do Ładu
lekcja: "1.6"
dzien: 3
sylabus: [PR-02-08, PR-02-09]
minuty: 35
zgadnij: [q-pre-pr-06-zasada-2]
cwiczenia: [q-pr-06-01, q-pr-06-02, q-pr-06-03, q-pr-06-04, q-men-pr-06-zasada-2-1]
wprowadza: [system-ladu, zakres-ladu, role-dzialania-relacje, organ-ladu]
wprowadzaListe: [komponent-cel-ladu, rola-interesariusze, aktywatory-ladu, rola-kierownictwo, rola-operacyjne]
wymaga: [pr-01-piec-zasad, pr-02-tworzenie-wartosci, m0-27-lad-czym-nie-jest]
cel: "Potrafię wyjaśnić, że Ład nad IT dotyczy całej organizacji. Potrafię wymienić 4 komponenty Podejścia do Ładu i powiedzieć, co robi każda z 4 ról."
priorytet: 1
zapas: [q-zap-pr-06-zasada-2-1, q-zap-pr-06-zasada-2-2]
wielkiObraz: 2
twierdzenia: ["Ład nad IT jest częścią ładu korporacyjnego.", "Interesariusze delegują.", "Organ Ładu wyznacza kierunek i jest rozliczany.", "Kierownictwo instruuje i dopasowuje oraz monitoruje.", "Role operacyjne wykonują i raportują."]
typowePytania: [{"pytanie": "Skoro to ład nad IT, to decyduje szef informatyki?", "odpowiedz": "Nie. Ład nad IT jest częścią kierowania całą organizacją. Kierunek wyznacza organ Ładu, np. komendantka, a nie sam naczelnik informatyki."}, {"pytanie": "Czy to interesariusze pilnują, czy wszystko idzie dobrze?", "odpowiedz": "Nie. Według Ilustracji 9 interesariusze tylko delegują. Realizację monitoruje kierownictwo, a organ Ładu odpowiada przed interesariuszami."}, {"pytanie": "Zakres Ładu to to samo co Zasada 2?", "odpowiedz": "Nie. Zasada 2 mówi, że COBIT obejmuje całą organizację. Zakres Ładu to komponent, w którym ustalasz, czego dotyczy konkretny system Ładu."}]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "etap 3 – do przeglądu użytkownika"}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Czy wyciek danych to tylko sprawa informatyka?

W urzędzie wyciekły dane mieszkańców. Urzędnik wysłał arkusz mailem do złego adresata.

Kierownik mówi: **„Bezpieczeństwo to sprawa informatyka”**.

Czy na pewno?

**Wniosek:** informacje przetwarza każdy pracownik, więc dbanie o nie nie jest zadaniem jednego działu.

:::wykladowca
Zacznijmy od zdarzenia, które mogło się zdarzyć w każdym urzędzie. Urzędnik pomylił adres i wysłał arkusz z danymi mieszkańców do obcej osoby. Serwer działał dobrze. Program pocztowy też. Zawiódł człowiek przy zwykłej, codziennej czynności. Kierownik od razu mówi, że to sprawa informatyka. Zastanówcie się, czy informatyk mógł temu zapobiec sam. Mógł pomóc narzędziem, ale nie wyśle maila za urzędnika. Dziś poznamy zasadę COBIT 5, która odpowiada na to pytanie.
:::

:::pytanie-uczestnika
pytanie: Przecież to informatyk zna się na komputerach. Dlaczego to nie tylko jego sprawa?
odpowiedz: Informatyk zna technikę, ale maila wysłał urzędnik. Zasady pracy z danymi ustala kierownictwo, a stosuje je każdy pracownik. Informatyk pomaga, ale nie zastąpi ich wszystkich.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (z progresją) -->
<!-- podpowiedz: Słowo-klucz Zasady 2 to „cała”: wszystkie funkcje, także zewnętrzne. -->
# Co znaczy, że Ład obejmuje całą organizację?

[[zasada-2|Pokrycie całej organizacji]]:

1. [[lad|Ład]] nad IT jest **częścią** ładu korporacyjnego, a nie osobnym systemem działu IT.
2. Obejmuje wszystkie funkcje i [[proces|procesy]], w których przetwarza się informacje, także usługi i procesy zewnętrzne.

Po ludzku:
- IT to informatyka: komputery, programy, sieci i dane.
- Ład to sposób, w jaki władze wyznaczają kierunek i pilnują, czy organizacja nim idzie. Ład korporacyjny dotyczy całej [[organizacja|organizacji]], a ład nad IT jest jego kawałkiem.
- Funkcje to działy i zadania, np. księgowość, kadry, obsługa klientów.
- Usługi zewnętrzne to to, co robi dla nas ktoś z zewnątrz, np. dostawca systemu.

Informacja i technologia to aktywa (cenny majątek), którymi zajmuje się każdy pracownik.

:::zrodlo FW-PL 14
:::

:::zrodlo FW-PL 23
:::

:::progresja
0: W domu hasło do bankowości zna kilka osób, więc o bezpieczeństwo dba każda z nich.

1: W biurze każdy pracownik sam decyduje, komu wysyła plik z danymi klientów.

2: Firma zleca płace biuru zewnętrznemu, ale dane pracowników nadal są jej odpowiedzialnością.

3: Komenda korzysta z Syreny od dostawcy, ale to komenda odpowiada za to, czy alarm dochodzi.

4: Kierownictwo ustala zasady pracy z informacją dla wszystkich działów i dla dostawców.

5: Zasada 2 COBIT 5 obejmuje wszystkie funkcje i procesy oraz wewnętrzne i zewnętrzne usługi IT (FW-PL s. 23).
:::

**Wniosek:** Zasada 2 obejmuje wszystkie miejsca, w których przetwarza się informacje, także poza organizacją.

:::wykladowca
Po angielsku ta zasada brzmi: Principle 2, Covering the Enterprise End-to-End. Czytamy „prinsipl tu, kawering de enterprajz endtuend”. Na egzaminie PL to „Pokrycie całej organizacji”. Słowo-klucz to „cała”. Ład nad IT nie jest osobnym światem informatyków. Jest kawałkiem ładu korporacyjnego, po angielsku corporate governance, czytamy „korporejt gawernens”. Obejmuje każde miejsce, gdzie ktoś pracuje z informacją: księgowość, kadry, dyżurnych, a nawet dostawcę z zewnątrz. Przeczytajcie progresję pod definicją. Zaczyna się od domowego hasła, a kończy na Zasadzie 2.
:::

:::sb kontrowersja
Ta sama zasada ma trzy polskie nazwy. Egzamin PL: „Pokrycie całej organizacji”. Podręcznik PL: „Uwzględnienie wszystkich aspektów działania przedsiębiorstwa” (FW-PL s. 23). Status tłumaczenia: **C – sporny**. Na egzaminie zaznaczaj nazwę egzaminacyjną.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (atom z tezą reaktywną) -->
<!-- podpowiedz: Ład nad IT to kawałek kierowania całą organizacją, a nie osobny świat. -->
# Czy ład nad IT to osobny świat działu IT?

:::atom
twierdzenie: Ład nad IT jest **częścią** ładu korporacyjnego.
poLudzku: Decyzje o informatyce to kawałek decyzji o całej organizacji.
zycie: Zakup rodzinnego samochodu to część planowania domowego budżetu, a nie osobna sprawa jednej osoby.
komenda: O Syrenie decyduje komendantka razem z całą komendą, a nie tylko wydział informatyki.
sprawdz: F :: Ład nad IT to osobny system działu IT. :: Jest częścią ładu całej organizacji (s. 23).
:::

:::teza interpretacyjna
sytuacja: Urzędnik wysłał dane mieszkańców do złego adresata, a kierownik zrzuca sprawę na informatyka.
pytanie: Czy za bezpieczeństwo informacji odpowiada tylko dział IT?
teza: Nie. Ład nad informacją i technologią dotyczy wszystkich funkcji organizacji, nie tylko działu IT.
uzasadnienie: FW-PL s. 23: COBIT 5 uwzględnia wszystkie funkcje i procesy we wszystkich miejscach, gdzie przetwarza się informacje. Obejmuje zakresy odpowiedzialności funkcji IT i funkcji biznesowych.
powiazanie: Zasada 2; Podejście do Ładu
przyklad: W komendzie o Syrenie rozmawiają też księgowość, kadry, dyżurni i naczelnik OSP Zawilce.
status: oficjalne
zrodlo: FW-PL 23
refleksja: Kto w Twoim miejscu pracy przetwarza informacje, choć nie jest informatykiem?
:::

**Wniosek:** decyzje o informatyce są częścią decyzji o całej organizacji.

:::wykladowca
Ten atom mówi o kawałku i całości. Zakup rodzinnego samochodu nie jest sprawą jednej osoby. To część domowego budżetu, a o budżecie decyduje rodzina. W organizacji jest tak samo. Ład nad IT jest częścią ładu całej organizacji. Kto więc decyduje o Syrenie? Komendantka razem z komendą, a nie tylko wydział informatyki. Pod atomem pojawi się teza do przemyślenia. Najpierw sami odpowiedzcie na pytanie, a dopiero potem odsłońcie tezę.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku -->
<!-- podpowiedz: Zwróć uwagę, kogo komendantka zaprasza i jakie role rozpisuje. -->
# Kto ma coś do powiedzenia o Syrenie?

:::kontekst zycie
**Winda w bloku.** O remoncie windy nie decyduje sam konserwator. Właściciele mieszkań głosują, zarząd wspólnoty pilnuje wykonania, a firma remontowa wykonuje pracę. Winda dotyczy wszystkich, więc wszyscy mają głos.
:::

:::kontekst biuro
**Wspólna drukarka.** O tym, kto może drukować w kolorze, decyduje kierowniczka biura, a nie serwisant. Serwisant ustawia uprawnienia, a pracownicy zgłaszają usterki.
:::

:::kontekst psp
**Syrena to nie tylko sprawa informatyków**
Komendantka straży Anna Wrzos zwołuje naradę o Syrenie, systemie, który wysyła alarmy do strażaków. Zaprasza nie tylko kpt. Marka Sikorę, naczelnika informatyki, ale też księgową, kadry, dyżurnych SK (stanowiska kierowania) i naczelnika OSP Zawilce (ochotniczej straży ze wsi). „Syrena dotyczy całej komendy, więc każdy ma tu coś do powiedzenia” – mówi. Potem rozpisuje role: mieszkańcy powierzają komendzie zadanie, ona wyznacza kierunek, Sikora instruuje i sprawdza, a dyżurni i informatycy wykonują i raportują. To jest [[zasada-2|Pokrycie całej organizacji]], a podział ról to część [[system-ladu|Podejścia do Ładu]].
:::

:::kontekst it
**COBIT 5.** Zasada 2 obejmuje też usługi z zewnątrz. Syrenę dostarcza firma Kwant-Sygnał, więc komenda musi zarządzać także relacją z dostawcą. W COBIT 5 służy do tego proces APO10 (Zarządzanie dostawcami, ang. Manage Suppliers). APO (Align, Plan and Organise – Dostosuj, Planuj i Organizuj) to domena planowania i organizowania IT.
:::

**Wniosek:** system IT dotyczy całej organizacji i jej dostawców, a każdy ma w nim inną rolę.

:::wykladowca
Zobaczcie trzy sytuacje o tym samym mechanizmie. W bloku o windzie decydują właściciele, a nie konserwator. W biurze o kolorowym druku decyduje kierowniczka, a nie serwisant. W komendzie komendantka zaprasza na naradę wszystkich, których Syrena dotyczy. Każdy dostaje inną rolę: jedni powierzają zadanie, inni wyznaczają kierunek, jeszcze inni wykonują. Ostatni przykład pokazuje, że Zasada 2 sięga też poza komendę. Dostawca systemu jest częścią tej układanki, a COBIT 5 ma na to osobny proces.
:::

---

<!-- slajd: mapa -->
# Gdzie to leży w COBIT 5?

:::mapa podejscie-do-ladu
:::

[[system-ladu|Podejście do Ładu]] (Ilustracja 8, na egzaminie: Rysunek 8) to rozwinięcie **Zasady 2**. Składa się z komponentów, czyli części składowych. Pierwszym jest [[tworzenie-wartosci|Cel Ładu]] z Zasady 1.

:::wykladowca
Spójrzcie na mapę. Podświetlone jest Podejście do Ładu. Po angielsku to Governance approach, czytamy „gawernens aprołcz”. W podręczniku PL nazywa się „Podejście do nadzoru”. To rozwinięcie Zasady 2. Skoro Ład obejmuje całą organizację, trzeba opisać, z czego się składa. Na egzaminie ten schemat to Rysunek 8, a w podręczniku Ilustracja 8. Ma cztery komponenty, czyli części składowe. Pierwszy znacie już z Zasady 1. To Cel Ładu, czyli tworzenie wartości.
:::

---

<!-- slajd: schemat -->
<!-- typ SD: B – objaśniający (schemat) -->
# Z jakich czterech części składa się Podejście do Ładu? (Rysunek 8 / Ilustracja 8)

| Komponent | Pytanie | Przykład PSP |
|---|---|---|
| **[[tworzenie-wartosci|Cel Ładu]]** | Po co? | wartość: korzyści, ryzyko, zasoby |
| **Aktywatory Ładu** | Czym? | regulaminy, procesy, SK (stanowisko kierowania), systemy, ludzie |
| **[[zakres-ladu|Zakres Ładu]]** | Czego dotyczy? | cała komenda albo tylko system SK |
| **[[role-dzialania-relacje|Role, działania i relacje]]** | Kto i jak? | komendant, naczelnicy, dyżurni |

Aktywatory to wszystko, co pomaga osiągnąć cel. Dokładnie poznasz je w lekcji 1.8.

:::zrodlo FW-PL 23 8
:::

**Wniosek:** każdy system Ładu opisujesz czterema pytaniami: po co, czym, czego dotyczy oraz kto i jak.

:::wykladowca
Przejdźmy przez tabelę wiersz po wierszu. Cel Ładu, po angielsku governance objective, to tworzenie wartości. Składa się z korzyści, ryzyka i zasobów. Aktywatory Ładu, governance enablers, czytamy „gawernens inejblers”, to narzędzia Ładu. Zakres Ładu, governance scope, czytamy „gawernens skołp”, mówi, czego Ład dotyczy. Może to być cała komenda albo jeden system. Ostatni komponent to Role, działania i relacje, po angielsku roles, activities and relationships. Mówi, kto co robi i jak się ze sobą komunikuje. Zapamiętajcie cztery pytania: po co, czym, czego dotyczy, kto i jak.
:::

:::sb wyjasnij
Aktywatory Ładu to zasoby organizacyjne Ładu: metodyki, zasady, struktury, procesy i praktyki. Należą do nich też zasoby organizacji, np. infrastruktura IT, aplikacje, ludzie i informacje. Brak któregoś z nich może osłabić tworzenie wartości (FW-PL s. 24).
:::

---

<!-- slajd: schemat -->
<!-- typ SD: C – procesowy (role i przepływ) -->
# Kto deleguje, kto kieruje, kto wykonuje? (Rysunek 9 / Ilustracja 9)

```
Interesariusze ──deleguje──▶ Organ Ładu ──wyznacza kierunek──▶ Kierownictwo ──instruuje i dopasowuje──▶ Role operacyjne
     ▲                           │   ▲                              │   ▲                                      │
     └──── jest rozliczany ──────┘   └──────── monitorowanie ───────┘   └─────────── raportowanie ─────────────┘
```

| Rola | Co robi |
|---|---|
| [[interesariusz|Interesariusze]] | **delegują** (powierzają zadanie i władzę), tylko tyle |
| [[organ-ladu|Organ Ładu i nadzoru]] | **wyznacza kierunek**, jest **rozliczany** |
| Kierownictwo | **instruuje i dopasowuje**, **monitoruje** realizację |
| Role operacyjne | **wykonują** i **raportują** |

Po ludzku: kierownictwo to szefowie, którzy organizują codzienną pracę. Role operacyjne to osoby, które tę pracę wykonują.

:::zrodlo FW-PL 24 9
:::

:::teza porownawcza
sytuacja: Na Rysunku 9 słowo „monitorowanie” stoi przy kierownictwie, a nie przy organie Ładu.
pytanie: Czy to znaczy, że Ład niczego nie monitoruje?
teza: Nie. Ład monitoruje względem wyznaczonego kierunku, a Rysunek 9 przypisuje kierownictwu monitorowanie bieżącej realizacji.
uzasadnienie: FW-PL s. 14: Ład monitoruje sprawność i zgodność względem uzgodnionego kierunku. Uzasadnienia egzaminacyjne do Rysunku 9 łączą monitorowanie z kierownictwem.
powiazanie: Zasada 2 (Rysunek 9); Zasada 5 (Oszacuj, Kieruj, Monitoruj)
przyklad: Sikora co tydzień sprawdza, czy numery OSP są aktualne. Wrzos raz na kwartał sprawdza, czy alarm zawsze dochodzi.
status: uproszczenie
refleksja: Czym różni się pytanie „czy praca idzie zgodnie z planem?” od pytania „czy idziemy w dobrą stronę?”?
:::

**Wniosek:** każda z czterech ról ma swoje czynności, a informacja wraca w górę strzałkami na dole.

:::wykladowca
Czytajcie schemat od lewej do prawej. Interesariusze, po angielsku owners and stakeholders, delegują, czyli powierzają zadanie. Organ Ładu, governing body, czytamy „gawerning bodi”, wyznacza kierunek. Kierownictwo, management, instruuje i dopasowuje pracę. Role operacyjne, operations and execution, wykonują zadania. Teraz dolne strzałki, które biegną z powrotem. Role operacyjne raportują kierownictwu. Kierownictwo monitoruje realizację. Organ Ładu jest rozliczany przed interesariuszami, po angielsku accountable. Tak informacja płynie w dół i wraca w górę.
:::

:::pytanie-uczestnika
pytanie: Skoro interesariusze tylko delegują, to nie mają nic do powiedzenia?
odpowiedz: Mają. Ich potrzeby są punktem wyjścia całej kaskady. Na Rysunku 9 ich czynnością jest jednak delegowanie, a organ Ładu rozlicza się przed nimi.
:::

:::sb kontrowersja
W podręczniku PL role na Ilustracji 9 nazywają się: „Właściciele oraz interesariusze”, „Organ nadzorujący”, „Zarządzanie”, „Eksploatacja i wykonanie” (FW-PL s. 24). Kurs używa nazw ze slajdu, a dla organu – nazwy egzaminacyjnej „Organ Ładu i nadzoru”.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (atom) -->
<!-- podpowiedz: Interesariusze tylko powierzają zadanie – nie kierują i nie monitorują. -->
# Co robią interesariusze? Tylko delegują

:::atom
twierdzenie: Interesariusze **delegują** zadanie organowi Ładu.
poLudzku: Ci, których sprawa obchodzi, powierzają ją komuś, kto będzie nią kierował.
zycie: Mieszkańcy bloku wybierają zarząd wspólnoty i powierzają mu decyzje o budynku. Sami nie zarządzają nim na co dzień.
komenda: Mieszkańcy Modrzewiowa i komenda wojewódzka powierzają komendzie zadanie ratowania ludzi.
sprawdz: F :: Interesariusze monitorują realizację zadań. :: Interesariusze tylko delegują.
:::

**Wniosek:** interesariusze powierzają zadanie organowi Ładu, ale sami nim nie kierują.

:::wykladowca
Pierwsza rola to interesariusze. Ich jedyna czynność na Rysunku 9 to delegowanie, po angielsku delegate, czytamy „deleget”. Pomyślcie o swoim bloku. Mieszkańcy wybierają zarząd wspólnoty i oddają mu decyzje o budynku. Nie naprawiają sami dachu i nie pilnują ekipy. W komendzie interesariuszami są mieszkańcy Modrzewiowa i komenda wojewódzka, w skrócie KW. Oni powierzają komendzie zadanie ratowania ludzi. Uwaga na egzaminie: jeśli przy interesariuszach widzicie „monitorują” albo „kierują”, to dystraktor.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (atom) -->
<!-- podpowiedz: Organ Ładu wskazuje kierunek i odpowiada za decyzję. -->
# Kto wyznacza kierunek i za niego odpowiada?

:::atom
twierdzenie: Organ Ładu wyznacza **kierunek** i jest rozliczany.
poLudzku: Najwyżsi szefowie decydują, dokąd idziemy, i odpowiadają za tę decyzję.
zycie: Zarząd wspólnoty decyduje o remoncie dachu i odpowiada za to przed mieszkańcami.
komenda: Komendantka Wrzos ustala, że alarm ma zawsze dochodzić, i odpowiada za to przed KW.
sprawdz: F :: Organ Ładu sam wykonuje prace i raportuje. :: To robią role operacyjne, a organ Ładu wyznacza kierunek.
:::

**Wniosek:** organ Ładu decyduje, dokąd idziemy, i rozlicza się z tego przed interesariuszami.

:::wykladowca
Druga rola to organ Ładu. Po angielsku governing body, czytamy „gawerning bodi”. Na egzaminie to „Organ Ładu i nadzoru”, a w podręczniku „Organ nadzorujący”. Ma dwie cechy. Wyznacza kierunek, po angielsku set direction. Jest też rozliczany, czyli odpowiada za decyzje przed interesariuszami. Zarząd wspólnoty decyduje o remoncie dachu i tłumaczy się z tego mieszkańcom. Komendantka Wrzos decyduje, że alarm ma zawsze dochodzić. Za tę decyzję odpowiada przed komendą wojewódzką.
:::

:::sb wyobraz
Wyobraź sobie statek handlowy. Właściciele ładunku powierzają go armatorowi. Armator (Ład) decyduje, dokąd i po co płynie statek, i odpowiada przed nimi. Kapitan z załogą (Zarządzanie) planuje trasę, steruje i raportuje armatorowi.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (atom) -->
<!-- podpowiedz: Kierownictwo przekłada kierunek na zadania i sprawdza wykonanie. -->
# Co robi kierownictwo między kierunkiem a wykonaniem?

:::atom
twierdzenie: Kierownictwo **instruuje** i dopasowuje pracę oraz monitoruje realizację.
poLudzku: Kierownicy rozdzielają zadania i sprawdzają, czy idą zgodnie z planem.
zycie: Kierownik budowy rozdziela pracę ekipie i sprawdza, czy ściany rosną zgodnie z projektem.
komenda: Kpt. Sikora przekazuje zadania Oli Dudek i sprawdza, czy numery OSP są aktualne.
sprawdz: P :: Kierownictwo monitoruje realizację kierunku. :: Tak wynika z Ilustracji 9.
:::

**Wniosek:** kierownictwo zamienia kierunek w zadania i sprawdza, jak idzie ich realizacja.

:::wykladowca
Trzecia rola to kierownictwo, po angielsku management, czytamy „menydżment”. Stoi pośrodku. Od organu Ładu dostaje kierunek. Ludziom wykonującym pracę daje instrukcje, po angielsku instruct and align, czyli instruuje i dopasowuje. Potem sprawdza, czy praca idzie zgodnie z planem. To jest monitorowanie realizacji. Kierownik budowy nie decyduje, jaki dom powstanie. Rozdziela pracę i pilnuje, żeby ściany rosły zgodnie z projektem. Kpt. Sikora robi to samo z zadaniami Oli Dudek.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: E – porównawczy (z tezą problemową) -->
<!-- podpowiedz: W każdym kontekście szukaj tych samych czterech ról. -->
# Czy te same cztery role widać w domu, biurze, firmie i komendzie?

| | Interesariusze | Organ Ładu | Kierownictwo | Role operacyjne |
|---|---|---|---|---|
| Życie | cała rodzina | rodzice | starsze rodzeństwo organizujące zakupy | młodsze rodzeństwo |
| Biuro | wspólnicy biura rachunkowego | zebranie wspólników | kierowniczka biura | księgowe i sekretarka |
| Firma | wspólnicy | rada nadzorcza | zarząd | pracownicy |
| Urząd | mieszkańcy | rada gminy, wójt | sekretarz, kierownicy | urzędnicy |
| PSP | społeczeństwo, KW/KG (komenda wojewódzka i główna) | komendant i zastępcy | naczelnicy, kierownik SK | dyżurni, informatycy |
| IT (COBIT 5) | właściciele, klienci, regulatorzy | zarząd pod przywództwem prezesa | kadra zarządzająca pod przywództwem CEO (dyrektora generalnego), w tym CIO (dyrektor ds. informatyki) | administratorzy i serwisanci IT |

:::uproszczenie
Przypisanie konkretnych osób do ról to przykład autorski. COBIT definiuje role ogólnie.
:::

:::teza problemowa
sytuacja: Kpt. Sikora kieruje wydziałem informatyki, a do tego zasiada w radzie, która doradza komendantce w sprawach IT.
pytanie: Czy jedna osoba może pełnić dwie różne role z Rysunku 9?
teza: Tak. Rola to nie osoba. Ważne, żeby było jasne, kiedy Sikora doradza Ładowi, a kiedy zarządza wydziałem.
uzasadnienie: FW-PL s. 24 rozdziela działania Ładu i Zarządzania, ale wskazuje też wspólne płaszczyzny i osoby pełniące określone role.
powiazanie: Zasada 2 (role, działania i relacje); Zasada 5
przyklad: Na posiedzeniu rady Sikora przedstawia opcje i koszty. Decyzję podejmuje komendantka, a potem Sikora ją wykonuje.
status: uproszczenie
refleksja: Kiedy w Twojej rodzinie albo pracy ta sama osoba raz decyduje, a raz wykonuje?
:::

**Wniosek:** te same cztery role występują wszędzie, zmieniają się tylko osoby, które je pełnią.

:::wykladowca
Ta tabela to ćwiczenie dla oka. Przeczytajcie ją kolumnami, a nie wierszami. W kolumnie „Organ Ładu” są rodzice, zebranie wspólników, rada nadzorcza, wójt i komendant. To różne osoby, ale robią to samo: wyznaczają kierunek. Ostatni wiersz pokazuje język COBIT 5. Ład sprawuje zarząd pod przywództwem prezesa. Zarządzaniem kieruje CEO, czyli dyrektor generalny. Zapamiętajcie: rola to czynność, a nie nazwisko. Jedna osoba może w różnych sytuacjach pełnić różne role.
:::

---

<!-- slajd: nie-jest -->
<!-- typ SD: E – porównawczy (pułapki) -->
# Czego nie mylić z komponentami Podejścia do Ładu?

- **Zakres Ładu ≠ Zasada 2.** Zasada 2 mówi, że COBIT obejmuje całą organizację. Zakres Ładu to komponent, który trzeba zdefiniować w konkretnym systemie.
- **„Oszacuj, Kieruj, Monitoruj” ≠ komponent Podejścia do Ładu.** To praktyki procesów Ładu, czyli działania, które Ład wykonuje.
- **„Transparentność Interesariuszy” ≠ komponent.** To proces Ładu EDM05 (piąty z pięciu procesów Ładu).
- **Interesariusze ≠ odpowiedzialni za monitorowanie.** Oni tylko delegują.

**Wniosek:** komponenty Podejścia do Ładu to tylko cel, aktywatory, zakres oraz role, działania i relacje.

:::wykladowca
Egzamin lubi podsuwać rzeczy prawdziwe, ale z innej szuflady. Ten slajd pokazuje cztery takie pułapki. Zakres Ładu to nie Zasada 2. Zasada mówi o całej organizacji, a zakres ustala się dla konkretnego systemu. „Oszacuj, Kieruj, Monitoruj”, po angielsku Evaluate, Direct and Monitor, w skrócie EDM, to czynności Ładu. Nie są komponentem. „Transparentność Interesariuszy” to nazwa procesu EDM05. EDM to domena pięciu procesów Ładu. Interesariusze nie monitorują, tylko delegują. Jeśli odpowiedź nie jest jednym z czterech komponentów, odrzućcie ją.
:::

:::sb nie-mylic
Na Rysunku 9 „monitorowanie” stoi przy kierownictwie. Mimo to Ład też monitoruje, tylko względem wyznaczonego kierunku (FW-PL s. 14). Pytaj zawsze: monitorowanie czego – kierunku czy bieżącej realizacji?
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający; lista z bliska (§11.1 „lista jako jedno pojęcie”: każdy element z przypisem, zdaniem po ludzku i przykładem) -->
# Podejście do Ładu – komponenty i role: każdy element z bliska

| Element (EN, wymowa) | Po ludzku | Przykład z życia |
|---|---|---|
| [[komponent-cel-ladu|Cel Ładu (Tworzenie Wartości)]] – Governance objective: value creation (wym. „gawernens obdżektiw welju kriejszyn”) | Po co w ogóle decydujemy: żeby z wydanych pieniędzy i pracy był pożytek, bez zbędnego ryzyka. | Rodzina planuje zakup samochodu. Zanim wybierze model, ustala, po co. |
| [[rola-interesariusze|Interesariusze (właściciele) – delegują]] – Owners and stakeholders (wym. „ołners end stejkhołders”) | Ci, w czyim imieniu działa organizacja, np. właściciele czy mieszkańcy; to oni powierzają władzę szefostwu. | Mieszkańcy bloku na zebraniu wspólnoty wybierają zarząd i powierzają mu dbanie o budynek. Sami nie zlecają prac firmom. |
| [[aktywatory-ladu|Aktywatory Ładu]] – Governance enablers (wym. „gawernens inejblers”) | Wszystko, czym szefostwo się posługuje, żeby rządzić: zasady, zespoły, procedury, ludzie, informacje, sprzęt. | Rodzice chcą pilnować domowego budżetu. Używają do tego zasady „duże zakupy razem”, wspólnego konta, arkusza wydatków i comiesięcznej rozmowy. |
| [[rola-kierownictwo|Kierownictwo]] – Management (wym. „menydżment”) | Kierownicy, którzy dostają kierunek od szefostwa, rozdzielają pracę ludziom i pilnują, czy idzie dobrze. | Zarząd wspólnoty postanawia: w tym roku remont dachu. Administrator budynku wybiera firmę, ustala jej harmonogram i co tydzień sprawdza postęp. |
| [[rola-operacyjne|Role operacyjne]] – Operations and execution (wym. „operejszyns end eksekjuszyn”) | Ludzie, którzy na co dzień wykonują pracę i mówią przełożonym, jak im poszło. | Firma remontowa dostaje od administratora budynku zlecenie: dach do końca lipca. Dekarze kładą blachę i co piątek wysyłają administratorowi zdjęcia postępów. |

**Wniosek:** każdy element tej listy znasz teraz z nazwy egzaminacyjnej, z nazwy angielskiej i z przykładu z życia.

:::wykladowca
Zatrzymajmy się przy liście „Podejście do Ładu – komponenty i role”. Na egzaminie pytania często dotyczą jednego jej elementu, więc przejdźmy je po kolei. Przy każdym elemencie przeczytaj najpierw nazwę egzaminacyjną i angielską, powiedz ją na głos, a potem przeczytaj zdanie po ludzku i przykład z życia. Kliknij nazwę, jeśli chcesz zobaczyć pełną kartę z przykładem z komendy i z typowymi pomyłkami. Nie ucz się listy na pamięć słowo w słowo. Wystarczy, że przy każdym elemencie umiesz powiedzieć, do czego służy, i podać jeden przykład.
:::

---

<!-- slajd: wlasne-slowa -->
# Czy umiesz wymienić 4 komponenty i 4 role bez patrzenia?

:::wlasne-slowa
Wymień 4 komponenty Podejścia do Ładu i 4 role z Ilustracji 9 z ich czynnościami.
???
Komponenty: Cel Ładu, aktywatory Ładu, zakres Ładu, role/działania/relacje.

Role:
- interesariusze – delegują;
- organ Ładu – wyznacza kierunek (jest rozliczany);
- kierownictwo – instruuje, dopasowuje, monitoruje;
- role operacyjne – wykonują, raportują.
:::

**Wniosek:** porównaj swoją listę ze wzorcem, a każdy brak powtórz na głos.

:::wykladowca
Czas na wydobywanie z pamięci. Zakryjcie poprzednie slajdy. Wypiszcie najpierw cztery komponenty Podejścia do Ładu. Pomogą Wam cztery pytania: po co, czym, czego dotyczy, kto i jak. Potem wypiszcie cztery role z Rysunku 9. Przy każdej roli dopiszcie jej czynność. Dopiero wtedy odsłońcie wzorzec. Jeśli coś pomyliliście, nie przepisujcie wzorca. Powiedzcie poprawną wersję na głos i spróbujcie jeszcze raz za kilka minut.
:::

---

<!-- slajd: wlasne-slowa -->
# Dlaczego bezpieczeństwo informacji to nie tylko sprawa informatyka?

:::wlasne-slowa
Dlaczego bezpieczeństwo informacji nie jest tylko sprawą informatyka?
???
Bo informacje przetwarza każdy pracownik, a nie tylko dział IT. W urzędzie dane wyciekły przez maila urzędnika, a nie przez serwer. Dlatego Zasada 2 obejmuje wszystkie funkcje i procesy organizacji, także zewnętrzne.
:::

**Wniosek:** dobra odpowiedź łączy przykład z urzędu z treścią Zasady 2.

:::wykladowca
Wróćmy do urzędu z pierwszego slajdu. Teraz to Wy jesteście ekspertami. Wyobraźcie sobie, że kierownik znowu mówi: „Bezpieczeństwo to sprawa informatyka”. Odpowiedzcie mu w trzech zdaniach. W pierwszym powiedzcie, kto przetwarza informacje. W drugim przypomnijcie, co się stało z mailem. W trzecim nazwijcie Zasadę 2 i powiedzcie, co obejmuje. Potem porównajcie się ze wzorcem. Tak właśnie będziecie kiedyś tłumaczyć COBIT innym.
:::

---

<!-- slajd: egzamin -->
# Jak egzamin sprawdza Zasadę 2 i Rysunek 9?

Skróty z ramki: EDM („Oszacuj, Kieruj i Monitoruj”) to procesy Ładu. PBRM („Planuj, Twórz, Wykonuj i Monitoruj”) to domeny, czyli grupy procesów Zarządzania. Poznasz je w lekcjach o Zasadzie 5.

:::egzamin
Komponenty Podejścia do Ładu to **cel, aktywatory, zakres oraz role, działania i relacje** (Rysunek 8 / Ilustracja 8). Nazwy procesów Ładu (np. przejrzystość wobec interesariuszy), praktyki EDM i domeny PBRM należą do innych kategorii.
Według uzasadnień egzaminacyjnych do Rysunku 9 (Ilustracja 9) organ Ładu jest odpowiedzialny decyzyjnie. Kierownictwo odpowiada wykonawczo za monitorowanie. Role operacyjne raportują, a interesariusze tylko delegują.
:::

:::zapamietaj
Zasada 2 = cała organizacja. Podejście do Ładu = cel + aktywatory + zakres + role.
:::

**Wniosek:** na egzaminie najpierw rozpoznaj, czy pytają o komponent, czy o rolę z Rysunku 9.

:::wykladowca
Egzamin sprawdza tu dwie rzeczy. Pierwsza to komponenty z Rysunku 8. Dystraktory podsuwają nazwy procesów, praktyki EDM albo domeny PBRM, czyli Plan, Build, Run and Monitor. To prawdziwe elementy COBIT 5, ale z innej kategorii. Druga rzecz to role z Rysunku 9. Organ Ładu odpowiada decyzyjnie. Kierownictwo odpowiada wykonawczo za monitorowanie. Role operacyjne raportują, a interesariusze delegują. Zanim wybierzecie odpowiedź, zapytajcie siebie, czy pytanie dotyczy komponentu, czy roli.
:::

---

<!-- slajd: rozwiazany -->
<!-- podpowiedz: Przy interesariuszach wystarczy jedno słowo z Ilustracji 9. -->
# Co robią interesariusze według Rysunku 9? Rozwiązujemy razem

:::rozwiazany
Komendantka Wrzos przypomina na odprawie, że komenda działa w imieniu mieszkańców Modrzewiowa i komendy wojewódzkiej. Mieszkańcy i komenda wojewódzka są tu **interesariuszami**. Jaką czynność wykonują według Ilustracji 9?
- A. Wyznaczają kierunek i są rozliczani z decyzji
- B. Instruują i dopasowują pracę oraz monitorują realizację
- C. Delegują
- D. Wykonują zadania i raportują
+++
**Krok 1 – co jest pytane?** Słowo-klucz: **interesariusze**. Pytanie dotyczy jednej roli z Ilustracji 9 i jej czynności.
+++
**Krok 2 – jaka kategoria COBIT?** To **role, działania i relacje**, czwarty komponent Podejścia do Ładu. Każda z czterech ról ma swoją czynność.
+++
**Krok 3 – eliminacja.** A – *odwrócone*: to czynność organu Ładu, czyli komendantki, a nie interesariuszy. B – *inna kategoria*: tak działa kierownictwo, np. kpt. Sikora. D – *inna kategoria*: tak działają role operacyjne, np. dyżurni.
+++
**Odpowiedź: C.** Dlaczego: interesariusze tylko delegują, czyli powierzają zadanie organowi Ładu.
:::

**Wniosek:** przy pytaniu o rolę najpierw ustal, której z czterech ról dotyczy pytanie.

:::wykladowca
Rozwiążmy to razem. Przeczytajcie treść i znajdźcie słowo-klucz. Tutaj to „interesariusze”. Pytanie nie dotyczy komendantki ani naczelnika, tylko mieszkańców i komendy wojewódzkiej. Teraz ustalcie kategorię. To czwarty komponent Podejścia do Ładu: role, działania i relacje. Każda odpowiedź opisuje czynność jednej z czterech ról. Waszym zadaniem jest dopasować czynność do właściwej roli. Przy każdej odrzuconej odpowiedzi powiedzcie, do której roli ona pasuje. Spróbujcie sami, zanim odsłonicie kolejne kroki.
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący -->
# Co już umiesz o Zasadzie 2 i Podejściu do Ładu?

- Umiesz wyjaśnić, że ład nad IT jest częścią ładu całej organizacji.
- Umiesz wymienić 4 komponenty Podejścia do Ładu: cel, aktywatory, zakres oraz role, działania i relacje.
- Umiesz powiedzieć, co robią interesariusze, organ Ładu, kierownictwo i role operacyjne.

**Co dalej i dlaczego:** w lekcji 1.7 poznasz Zasadę 3, bo po pytaniu „czego to dotyczy” przychodzi pytanie „skąd bierzemy wiedzę”.

:::wykladowca
Podsumujmy po polsku i po angielsku. Zasada 2, Covering the Enterprise End-to-End, to Pokrycie całej organizacji. Ład nad IT jest częścią ładu korporacyjnego i obejmuje wszystkie funkcje, także zewnętrzne. Podejście do Ładu ma cztery komponenty: cel, aktywatory, zakres oraz role, działania i relacje. Rysunek 9 pokazuje cztery role. Interesariusze delegują. Organ Ładu wyznacza kierunek i jest rozliczany. Kierownictwo instruuje i monitoruje. Role operacyjne wykonują i raportują.
:::
