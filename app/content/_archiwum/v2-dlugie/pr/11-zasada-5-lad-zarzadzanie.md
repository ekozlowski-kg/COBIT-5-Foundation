---
id: pr-11-zasada-5
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: Zasada 5 – Oddzielenie Ładu od Zarządzania i ich interakcje
lekcja: "1.11"
dzien: 4
sylabus: [PR-02-14, PR-02-15]
minuty: 35
zgadnij: [q-pre-pr-11-zasada-5]
cwiczenia: [q-pr-11-01, q-pr-11-02, q-pr-11-03, q-pr-11-04, q-men-pr-11-zasada-5-1]
wprowadza: [pbrm]
wymaga: [m0-27-lad-czym-nie-jest, pr-08-zasada-4]
cel: "Potrafię powiedzieć, co robi Ład, a co Zarządzanie. Potrafię opisać, jak te dwie dziedziny się ze sobą łączą."
priorytet: 1
zapas: [q-zap-pr-11-zasada-5-1, q-zap-pr-11-zasada-5-2]
wielkiObraz: 5
twierdzenia: ["Ład: Oszacuj – Kieruj – Monitoruj.", "Zarządzanie: Planuj – Twórz – Wykonuj – Monitoruj.", "Zarządzanie realizuje kierunek wyznaczony przez organ Ładu.", "Ład i Zarządzanie łączą aktywatory i informacje zwrotne.", "Ład sprawuje zarząd pod przywództwem prezesa."]
typowePytania: [{"pytanie": "Czyli Ład to po prostu wyższe piętro zarządzania?", "odpowiedz": "Nie. Ład to inna dziedzina, a nie wyższy szczebel. Ład ocenia, kieruje i monitoruje, a Zarządzanie planuje, tworzy, wykonuje i monitoruje."}, {"pytanie": "Skoro Ład jest oddzielony od Zarządzania, to oni ze sobą nie rozmawiają?", "odpowiedz": "Rozmawiają. Ład wyznacza kierunek, a Zarządzanie melduje, jak idzie. Łączą ich aktywatory i informacje zwrotne."}, {"pytanie": "Monitoruj w Ładzie i Monitoruj w MEA to to samo?", "odpowiedz": "Nie. W Ładzie organ Ładu sprawdza, czy kierunek wcielono w życie. MEA to monitorowanie po stronie Zarządzania."}]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "etap 3 – do przeglądu użytkownika"}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Czy sprawny dział informatyki to już dobry nadzór nad informatyką?

Armator decyduje, **dokąd i po co** płynie statek, i co jakiś czas sprawdza, czy statek trzyma kurs.

Kapitan z załogą planuje trasę, steruje, omija mielizny i melduje armatorowi pozycję.

To dwie różne role, ale bez rozmowy między nimi statek nie dopłynie.

**Wniosek:** nawet najlepszy kapitan nie zastąpi decyzji armatora o tym, dokąd i po co płynąć.

:::wykladowca
Zacznijmy od statku. Armator to właściciel, który decyduje, dokąd i po co statek płynie. Kapitan z załogą planuje trasę, steruje i pilnuje maszyn. Armator nie staje za sterem, a kapitan nie zmienia sam portu docelowego. Teraz komenda w Modrzewiowie. Informatycy pracują sumiennie, a jednak Syrena zawiodła w czasie pożaru. Dlaczego? Nikt na górze nie zdecydował, jak bardzo system musi być niezawodny i ile można na to wydać. Dziś nazwiemy te dwie role: Ład i Zarządzanie.
:::

:::pytanie-uczestnika
pytanie: Czy to znaczy, że informatycy zrobili coś źle?
odpowiedz: Niekoniecznie. Mogli zrobić wszystko dobrze w ramach tego, co im zlecono. Zabrakło decyzji, co jest najważniejsze. Tę decyzję podejmuje Ład, a nie informatycy.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku (od życia do COBIT 5) -->
<!-- podpowiedz: Wrzos ocenia, kieruje, sprawdza; Sikora planuje, buduje, uruchamia, mierzy. -->
# Kto w domu, w biurze i w komendzie decyduje, a kto wykonuje?

:::kontekst zycie
**Remont mieszkania.** Ty decydujesz, na co wydajesz pieniądze i co jest najważniejsze, na przykład bezpieczna instalacja elektryczna, a nie drogie płytki. Ekipa remontowa planuje prace, kupuje materiały, wykonuje je i mówi Ci, jak idzie. Ty co jakiś czas sprawdzasz, czy remont idzie w dobrą stronę.
:::

:::kontekst biuro
**Wspólny folder w biurze.** Kierownik ustala, kto ma widzieć jakie dokumenty. Informatyk nadaje te uprawnienia, pilnuje, żeby działały, i zgłasza kierownikowi problemy.
:::

:::kontekst psp
**Kto ocenia, a kto robi**
Komendantka Anna Wrzos raz w kwartale czyta raport o Syrenie, systemie alarmowym SK (stanowiska kierowania). Ocenia, czego komenda potrzebuje, ustala kierunek („alarm ma docierać do wszystkich jednostek”) i sprawdza, czy ten kierunek jest realizowany. Kpt. Marek Sikora, szef informatyki komendy, planuje prace, buduje poprawki, pilnuje codziennego działania i co tydzień mierzy wyniki. Spotykają się na odprawie: Wrzos słucha meldunku Sikory i koryguje kurs. Wrzos to [[lad|Ład]] (Oszacuj, Kieruj, Monitoruj), a Sikora to [[zarzadzanie|Zarządzanie]] (Planuj, Twórz, Wykonuj, Monitoruj).
:::

:::kontekst psp
**Ład (komendant i zastępcy):** ocenia potrzeby i warianty modernizacji SK, ustala priorytet („skrócić czas dysponowania”) i apetyt na ryzyko, co kwartał monitoruje wskaźniki.
**Zarządzanie (naczelnicy, kierownik SK):**
- planuje wdrożenie – APO (Align, Plan and Organise – Dostosuj, Planuj i Organizuj);
- kupuje i wdraża system – BAI (Build, Acquire and Implement – Twórz, Nabywaj i Wdrażaj);
- utrzymuje go 24/7 – DSS (Deliver, Service and Support – Dostarczaj, Obsługuj i Wspieraj);
- mierzy wydajność i zgodność – MEA (Monitor, Evaluate and Assess – Monitoruj, Oszacuj i Oceń).
**Interakcja:** polityka SK zatwierdzona przez komendanta i kwartalny raport kierownika SK.
:::

:::kontekst it
**Ryzyko informatyczne (IT) w COBIT 5.** W procesie EDM03 (Zapewnienie optymalizacji ryzyka) zarząd ustala apetyt na ryzyko IT i sprawdza, czy nie jest przekraczany. W procesie APO12 (Zarządzanie ryzykiem) kierownictwo rozpoznaje, analizuje i obsługuje konkretne ryzyka w tych granicach. Wyniki raportuje do Ładu.
:::

**Wniosek:** jedna strona **ocenia, kieruje i sprawdza**, a druga **planuje, buduje, wykonuje i mierzy**.

:::wykladowca
Zobaczcie, że ten podział znamy z życia. Przy remoncie to Ty decydujesz, co jest ważne, a ekipa to robi. W biurze kierownik decyduje o dostępie do folderu, a informatyk go ustawia. W komendzie komendantka Wrzos ocenia, ustala kierunek i sprawdza. Kapitan Sikora planuje, buduje, utrzymuje i mierzy. Ostatni przykład pokazuje to samo w języku COBIT 5. O apetycie na ryzyko decyduje zarząd w procesie EDM03. Codzienną pracę z ryzykiem wykonuje kierownictwo w procesie APO12.
:::

:::sb nie-mylic
O tym, czy ktoś działa w Ładzie, czy w Zarządzaniu, decyduje czynność i zakres decyzji, a nie nazwa stanowiska. FW-PL mówi, że struktury mogą należeć do przestrzeni nadzoru albo zarządzania w zależności od ich składu i zakresu decyzji (s. 31).
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający -->
<!-- podpowiedz: Dwie dziedziny – inne działania, inne zespoły, inne cele. -->
# Czym różnią się dwie dziedziny z zasady 5?

[[zasada-5|Oddzielenie Ładu od Zarządzania]]. Każda z tych dziedzin:
- obejmuje działania o **odmiennym charakterze**,
- wymaga różnych struktur organizacyjnych (zespołów i stanowisk, które decydują),
- służy innym celom.

| | [[lad|Ład]] | [[zarzadzanie|Zarządzanie]] |
|---|---|---|
| Czasowniki | Oszacuj, Kieruj, Monitoruj (EDM – Evaluate, Direct and Monitor; więcej w lekcji 1.12) | [[pbrm|Planuj, Twórz, Wykonuj, Monitoruj]] (PBRM – Plan, Build, Run and Monitor) |
| Kto | zarząd (najwyższe władze organizacji) pod przywództwem prezesa | kierownictwo pod przywództwem CEO (Chief Executive Officer – dyrektor generalny) |

:::zrodlo FW-PL 31
:::

:::progresja
0: Rodzina decyduje, że w tym roku jedzie nad morze, a Ty rezerwujesz bilety i nocleg.

1: Kierownik biura ustala, kto widzi dokumenty kadrowe, a informatyk nadaje uprawnienia.

2: W programie do obiegu wniosków jedna osoba zatwierdza wniosek, a inna go realizuje.

3: Organizacja ma osobno zarząd i kierowników działów, z różnymi zadaniami.

4: Zarząd ustala priorytety i apetyt na ryzyko, a kierownictwo przygotowuje warianty i je wdraża.

5: W COBIT 5 to zasada 5. Ład ma 5 procesów EDM, a Zarządzanie 32 procesy w domenach APO, BAI, DSS i MEA (FW-PL s. 31–33).
:::

**Wniosek:** Ład i Zarządzanie różnią się czynnościami, strukturami, które je wykonują, i celami, którym służą.

:::wykladowca
Teraz nazwy. Governance, czytamy „gawernens”: na egzaminie PL Ład, w podręczniku nadzór. Management, czytamy „menydżment”: Zarządzanie. Zasada 5 po angielsku to „Separating Governance From Management”. Podręcznik podaje trzy różnice. Inne działania, inne struktury organizacyjne i inne cele. Spójrzcie na tabelę. Ład to trzy czasowniki: Oszacuj, Kieruj, Monitoruj. Zarządzanie to cztery: Planuj, Twórz, Wykonuj, Monitoruj. Ład zwykle sprawuje zarząd z prezesem. Zarządzanie sprawuje kierownictwo z dyrektorem generalnym.
:::

:::sb kontrowersja
„Governance” nie ma idealnego jednowyrazowego odpowiednika. Egzamin PL używa słowa „Ład”, podręcznik PL – „nadzór”, a literatura branżowa także „ład informatyczny”. Status tłumaczenia: **C – sporny**. Kurs przyjmuje „Ład (Governance)”.
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: Pierwszy krok Ładu to ocena, nie decyzja. -->
# Od czego Ład zaczyna? Oszacuj (Evaluate)

:::atom
twierdzenie: Ład **ocenia** potrzeby interesariuszy, warunki i możliwe warianty (Oszacuj).
poLudzku: Szefowie najpierw sprawdzają, czego ludzie potrzebują i jakie są możliwości.
zycie: Przed kupnem auta rodzina sprawdza, ile osób będzie jeździć i na co ją stać.
komenda: Wrzos czyta raport o Syrenie i pyta dyżurnych oraz OSP, czego potrzebują.
sprawdz: F :: Ład najpierw kupuje system, a potem pyta o potrzeby. :: Ład najpierw ocenia, dopiero potem kieruje.
:::

:::zrodlo FW-PL 31
:::

**Wniosek:** Ład zaczyna od oceny potrzeb, warunków i wariantów, a nie od decyzji.

:::wykladowca
Pierwszy czasownik Ładu to Evaluate, czytamy „iweljuejt”. Na egzaminie PL: Oszacuj. W podręczniku: ocena. Zanim ktokolwiek zdecyduje, trzeba sprawdzić trzy rzeczy. Czego potrzebują interesariusze? W jakich warunkach działamy? Jakie mamy możliwe warianty? Rodzina przed kupnem auta liczy osoby i pieniądze. Komendantka przed decyzją o Syrenie czyta raport i rozmawia z dyżurnymi oraz z ochotnikami. Dopiero na tej podstawie ustala kierunek. Podręcznik mówi o „zrównoważonych, uzgodnionych celach”, które mają wyniknąć z tej oceny.
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: Kierować to wyznaczyć kierunek, a nie wykonywać pracę. -->
# Co znaczy, że Ład kieruje? Kieruj (Direct)

:::atom
twierdzenie: Ład **kieruje**: wyznacza kierunek przez priorytety i decyzje (Kieruj).
poLudzku: Szefowie mówią, dokąd idziemy i co jest najważniejsze.
zycie: Rodzice ustalają: w tym roku oszczędzamy na wakacje, a nie na nowy telewizor.
komenda: Wrzos ustala: „alarm ma docierać do wszystkich jednostek”.
sprawdz: F :: Kierować znaczy samemu konfigurować serwer. :: Ład wyznacza kierunek, a pracę wykonuje Zarządzanie.
:::

**Wniosek:** Ład kieruje, nadając priorytety i podejmując decyzje, ale samej pracy nie wykonuje.

:::wykladowca
Drugi czasownik to Direct, czytamy „dajrekt”. Na egzaminie PL: Kieruj. Uwaga, to słowo bywa mylące. Po polsku „kierować” może znaczyć też „prowadzić samochód” albo „zarządzać zespołem”. W COBIT 5 znaczy wyłącznie „wyznaczać kierunek”. Robi się to na dwa sposoby: przez priorytety i przez decyzje. Rodzice mówią: w tym roku wakacje, a nie telewizor. Komendantka mówi: alarm ma docierać do wszystkich jednostek. Ani rodzice, ani komendantka nie wykonują samej pracy. To robi Zarządzanie.
:::

:::sb nie-mylic
„Kieruj” w Ładzie to nie „kierowanie zespołem” na co dzień. Codzienne prowadzenie ludzi i prac to Zarządzanie. Ład wyznacza kierunek przez „nadanie priorytetów i podejmowanie decyzji” (FW-PL s. 31).
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: Monitoruje organ Ładu – czy kierunek wcielono w życie. -->
# Co sprawdza Ład, gdy monitoruje? Monitoruj (Monitor)

:::atom
twierdzenie: Ład **monitoruje**, czy wyznaczony kierunek jest realizowany i czy cele są osiągane (Monitoruj).
poLudzku: Szefowie sprawdzają, czy to, co postanowili, naprawdę się dzieje.
zycie: Rodzice pod koniec miesiąca zaglądają do skarbonki, czy oszczędzanie idzie zgodnie z planem.
komenda: Wrzos co kwartał sprawdza w raporcie, czy alarm dociera do wszystkich jednostek.
sprawdz: P :: Organ Ładu sprawdza, czy jego kierunek wcielono w życie. :: To praktyka Monitoruj po stronie Ładu.
:::

:::teza interpretacyjna
sytuacja: Kasia Nowik czyta, że „Ład monitoruje”, i dochodzi do wniosku, że komendantka powinna codziennie sprawdzać, czy Syrena działa.
pytanie: Czy monitorowanie w Ładzie to bieżące pilnowanie systemów?
teza: Nie. Ład monitoruje względem kierunku: sprawdza, w jakim stopniu jego decyzje wcielono w życie. Bieżące działanie mierzy Zarządzanie.
uzasadnienie: FW-PL opisuje monitorowanie Ładu „w odniesieniu do uzgodnionego kierunku i szczegółowych celów” (s. 14). Przypis 5 mówi, że organ nadzorujący sprawdza, w jakim stopniu kierunek wcielono w życie (s. 32).
powiazanie: Zasada 5; EDM vs MEA
przyklad: Wrzos co kwartał czyta raport i pyta: „czy alarm dociera do wszystkich jednostek?”. Ile awarii było w nocy, liczy Sikora.
status: oficjalne
zrodlo: FW-PL 14, 32
refleksja: Co by się stało, gdyby komendantka codziennie sama sprawdzała serwer?
:::

**Wniosek:** Ład też monitoruje, ale względem swojego kierunku, a nie bieżącej pracy.

:::wykladowca
Trzeci czasownik to Monitor, czytamy „moniter”. Na egzaminie PL: Monitoruj. To słowo jest w obu dziedzinach, więc łatwo się pomylić. Ład monitoruje, ale z określonego punktu widzenia. Pyta: czy to, co postanowiłam, naprawdę się dzieje? Rodzice zaglądają do skarbonki pod koniec miesiąca, a nie co godzinę. Komendantka czyta raport raz w kwartale. Zatrzymajcie się przy tezie. Kasia myśli, że komendantka ma codziennie pilnować serwera. To błąd, bo bieżące działanie mierzy Zarządzanie.
:::

:::sb ekspert
Uwaga na Rysunek 9 (Ilustracja 9, s. 24: kluczowe role, działania i relacje). Tam relacja „monitorowanie” należy do Kierownictwa, czyli Zarządzania. Nie myl tego z praktyką Monitoruj w Ładzie (EDM), która dotyczy kierunku (s. 14 i s. 32, przypis 5).
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: Zarządzanie robi, ale w kierunku wyznaczonym przez Ład. -->
# Czy Zarządzanie samo wybiera kierunek? Planuj, Twórz, Wykonuj, Monitoruj

:::atom
twierdzenie: Zarządzanie planuje, tworzy, wykonuje i monitoruje działania zgodnie z **kierunkiem** wyznaczonym przez organ Ładu.
poLudzku: Kierownicy robią pracę i pilnują jej, ale idą tam, gdzie wskazali szefowie.
zycie: Kierowca wybiera trasę i prowadzi auto, ale cel podróży ustaliła rodzina.
komenda: Sikora planuje poprawki Syreny, wdraża je i mierzy wyniki, żeby spełnić polecenie Wrzos.
sprawdz: F :: Zarządzanie samo ustala kierunek organizacji. :: Kierunek wyznacza organ Ładu, a Zarządzanie go realizuje.
:::

:::zrodlo FW-PL 31
:::

**Wniosek:** Zarządzanie planuje, tworzy, wykonuje i monitoruje, ale zawsze w kierunku wyznaczonym przez Ład.

:::wykladowca
Druga dziedzina to Management, czytamy „menydżment”, czyli Zarządzanie. Ma cztery czasowniki: Plan, Build, Run, Monitor. Czytamy „plen, bild, ran, moniter”. Na egzaminie PL: Planuj, Twórz, Wykonuj i Monitoruj. Skrót: PBRM. Zarządzanie planuje, tworzy albo kupuje rozwiązania, utrzymuje je w działaniu i mierzy wyniki. Najważniejsze są ostatnie słowa definicji: zgodnie z kierunkiem wyznaczonym przez organ Ładu. Kierowca wybiera trasę i prowadzi, ale cel podróży ustaliła rodzina. Sikora planuje poprawki, ale cel wskazała Wrzos.
:::

:::sb kontrowersja
„Build” ma w obiegu trzy polskie formy: „Twórz” (egzamin PL, SP1, czyli Sample Paper 1), „Wytwarzaj” (zestawienie Altkom) i „Budowanie” (podręcznik). W tekście FW-PL jest też „planowanie, budowanie, realizacja i monitorowanie” (s. 31). Status tłumaczenia: **C – sporny**. Na egzaminie szukaj „Twórz”.
:::

---

<!-- slajd: porownanie -->
<!-- typ SD: E – porównawczy -->
# Czym różnią się dwa „Monitoruj” – w Ładzie i w Zarządzaniu?

| | Governance (Ład) – EDM | Management (Zarządzanie) – MEA |
|---|---|---|
| Co sprawdza? | czy **kierunek** jest realizowany | czy **bieżące działania** idą dobrze |
| Kto? | zarząd pod przywództwem prezesa | kierownictwo pod przywództwem CEO (dyrektora generalnego) |
| Komenda | Wrzos: czy „Syrena” spełnia decyzję „całą dobę”? | Sikora: ile było awarii w miesiącu? |

:::zrodlo FW-PL 32
:::

**Wniosek:** monitorowanie w EDM i w MEA różni się poziomem: kierunek albo bieżące działania.

:::wykladowca
Ten slajd rozwiązuje najczęstszą pomyłkę tej lekcji. W tabeli widzicie dwie kolumny i trzy wiersze. Pierwszy wiersz: co sprawdzamy. Ład sprawdza kierunek, a Zarządzanie bieżące działania. Drugi wiersz: kto sprawdza. Po stronie Ładu zarząd, po stronie Zarządzania kierownictwo. Trzeci wiersz: jak to wygląda w komendzie. Komendantka pyta: czy dostaję to, o czym zdecydowałam? Naczelnik pyta: jak dziś działają systemy? Informacja płynie od Zarządzania do Ładu. Ład na jej podstawie znowu ocenia i kieruje.
:::

:::sb ekspert
W COBIT 5 podział jest w samym modelu procesów. Pięć procesów EDM to Ład, a 32 procesy APO, BAI, DSS i MEA to Zarządzanie (FW-PL s. 32–33). Domeny EDM nie utożsamiamy z MEA.
:::

---

<!-- slajd: mapa -->
# Gdzie to leży w COBIT 5?

:::mapa lad-i-zarzadzanie
:::

**Zasada 5** dzieli model [[proces|procesów]]: Ład (EDM) i Zarządzanie (APO, BAI, DSS, MEA – cztery grupy procesów, poznasz je w lekcji 1.13). Interakcje (po ludzku: współpraca) między nimi idą przez 7 [[aktywator|aktywatorów]].

:::wykladowca
Spójrzcie na mapę. Zasady 1–4 już znacie. Teraz jesteśmy przy zasadzie 5, ostatniej. Ta zasada robi coś ważnego: dzieli cały model procesów COBIT 5 na dwie części. Po jednej stronie jest Ład z jedną domeną, czyli grupą procesów, o nazwie EDM. Po drugiej stronie jest Zarządzanie z czterema domenami: APO, BAI, DSS i MEA. Poznacie je w lekcji 1.13. Zwróćcie też uwagę na ostatnie zdanie. Obie strony łączy siedem aktywatorów, które znacie z zasady 4.
:::

---

<!-- slajd: schemat -->
<!-- typ SD: C – procesowy (przepływ) -->
# Jak informacja krąży między Ładem a Zarządzaniem? (Ilustracja 15 / Rysunek 15)

```
            Potrzeby biznesowe
                    │
        ┌─────── ŁAD ────────┐
        │  Oszacuj           │
        │  Kieruj ──────┐    │ ◀── informacje zwrotne
        │  Monitoruj ◀──┼────┤     dotyczące zarządzania
        └───────────────┼────┘
                        ▼
              ZARZĄDZANIE
   Planuj (APO) → Twórz (BAI) → Wykonuj (DSS) → Monitoruj (MEA)
```

Przepływ według uzasadnienia SP1 (Sample Paper 1, oficjalnego egzaminu próbnego): **Oszacuj → Kieruj → Planuj → … → Monitoruj (MEA) → Monitoruj (EDM) → Oszacuj**. Na egzaminie to „Rysunek 15”.

:::zrodlo FW-PL 32 15
:::

**Wniosek:** kierunek płynie z Ładu do Zarządzania, a informacje zwrotne wracają z Zarządzania do Ładu.

:::wykladowca
Przejdźmy przez ten schemat krok po kroku. Na górze są potrzeby biznesowe, czyli to, czego chce organizacja. Wchodzą do Ładu, który je ocenia. Potem Ład kieruje, czyli strzałka w dół do Zarządzania. Na dole Zarządzanie wykonuje cztery kroki: Planuj, Twórz, Wykonuj, Monitoruj. Ostatni z nich wysyła informacje zwrotne w górę. Strzałka po prawej wraca do Ładu, do jego Monitoruj. Ład porównuje wyniki z kierunkiem i znowu ocenia. Tak koło się zamyka.
:::

:::sb wyjasnij
„Informacje zwrotne dotyczące zarządzania” to po prostu meldunki od kierownictwa do Ładu: raporty, wskaźniki, informacje o ryzyku. Bez nich Ład nie miałby czego monitorować. Na Ilustracji 15 to jedyna strzałka, która idzie od Zarządzania w górę (FW-PL s. 32).
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający (każdy element tabeli) -->
# Przez co Ład i Zarządzanie się porozumiewają? (Ilustracja 14 / Rysunek 14)

| Aktywator | Jak łączy Ład i Zarządzanie |
|---|---|
| Procesy | osobne procesy Ładu i Zarządzania, tabele RACI (kto wykonuje, kto odpowiada – poznasz je w dniu 3) |
| Informacje | wymiana wejść i wyników (tego, co proces dostaje i oddaje) między procesami |
| Struktury organizacyjne | struktury Ładu (np. decyzje o portfelu, czyli zestawie wszystkich projektów, i apetycie na ryzyko, czyli ile ryzyka da się znieść) ↔ struktury wdrażające |
| Zasady i polityki | **instytucjonalizują** (zamieniają w obowiązujące reguły) decyzje Ładu w organizacji |
| Kultura i zachowanie | ustalane **odgórnie**, przez przywództwo i dawanie przykładu |
| Ludzie i kompetencje | obie strony muszą rozumieć różnicę między zadaniami |
| Usługi i infrastruktura | dostarczają organowi Ładu (osobom na samej górze, które wyznaczają kierunek) informacji do oceny i monitorowania |

:::zrodlo FW-PL 31 14
:::

**Wniosek:** oddzielone dziedziny łączy 7 aktywatorów, a każdy z nich przenosi coś między Ładem a Zarządzaniem.

:::wykladowca
Ta tabela odpowiada na pytanie: jak dwie oddzielone dziedziny ze sobą rozmawiają? Przez siedem aktywatorów. Przejdźmy wiersz po wierszu. Procesy: są osobne procesy Ładu i Zarządzania. Informacje: procesy wymieniają się wejściami i wynikami. Struktury: Ład decyduje o portfelu i apetycie na ryzyko, a inni wdrażają. Polityki zamieniają decyzje Ładu w obowiązujące reguły. Kulturę ustala się z góry, dając przykład. Ludzie muszą rozumieć różnicę ról. Usługi dostarczają Ładowi informacji. W podręczniku to Ilustracja 14, na egzaminie Rysunek 14.
:::

:::sb przyklad
W komendzie polityka powiadamiania zatwierdzona przez komendantkę Wrzos to aktywator „Zasady i polityki”. Zamienia jej decyzję „alarm do wszystkich jednostek” w regułę, której dyżurni i informatycy muszą przestrzegać. To przykład kursu, a nie opis z podręcznika.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku (z tezą reaktywną) -->
# Kto ustala, ile ryzyka akceptujemy?

Kpt. Sikora proponuje: „Sam ustalę, jaki przestój Syreny jest do przyjęcia”.

:::teza problemowa
sytuacja: Naczelnik informatyki chce sam ustalić akceptowalny poziom ryzyka dla systemu alarmowego.
pytanie: Czy osoba kierująca informatyką powinna sama ustalać, ile ryzyka organizacja akceptuje?
teza: Nie. Apetyt na ryzyko to decyzja Ładu, a Zarządzanie przygotowuje analizę i wykonuje.
uzasadnienie: FW-PL wskazuje określanie apetytu na ryzyko jako decyzję struktur Ładu (s. 31), a EDM03 to proces Ładu dla ryzyka (s. 33).
powiazanie: Zasada 5; EDM03 vs APO12
przyklad: Komendantka Wrzos decyduje: „najwyżej 5 minut przestoju w roku”. Sikora liczy, ile to kosztuje, i wdraża rozwiązanie.
status: oficjalne
zrodlo: FW-PL 31, 33
refleksja: Czy naczelnik może brać udział w tej decyzji? Jaką rolę wtedy pełni?
:::

**Wniosek:** Zarządzanie doradza i wykonuje, ale o ryzyku decyduje Ład.

:::wykladowca
Zatrzymajmy się przy tej tezie. Naczelnik ma najlepszą wiedzę techniczną, więc może się wydawać, że to on powinien zdecydować. Ale ryzyko dotyczy całej komendy, jej zadań i budżetu. Dlatego decyduje Ład. Naczelnik ma tu ważną rolę: przygotowuje analizę i mówi, ile kosztuje każda opcja. Decyzja należy jednak do komendantki. Po angielsku apetyt na ryzyko to „risk appetite”, czytamy „risk apetajt”. To pojęcie wróci w procesie EDM03 w następnej lekcji.
:::

---

<!-- slajd: nie-jest -->
<!-- typ SD: E – porównawczy (pułapki) -->
# Czego nie mylić, mówiąc o oddzieleniu Ładu od Zarządzania?

- **Oddzielenie ≠ brak kontaktu.** Ład i Zarządzanie muszą współdziałać przez informacje zwrotne.
- **Monitorowanie w EDM ≠ MEA.** W Ładzie monitoruje organ nadzorujący: sprawdza, czy kierunek wcielono w życie. MEA to domena Zarządzania.
- **Ład ≠ „wyższy szczebel zarządzania”.** To inna dziedzina, nie wyższe piętro.

**Wniosek:** oddzielenie Ładu od Zarządzania to podział czynności, a nie brak kontaktu ani kolejne piętro hierarchii.

:::wykladowca
Ten slajd zbiera trzy błędne skojarzenia. Pierwsze: słowo „oddzielenie” brzmi jak „rozdzielenie na zawsze”. Tymczasem obie strony muszą stale rozmawiać, inaczej koło z Ilustracji 15 się nie zamknie. Drugie: dwa razy „Monitoruj”. W Ładzie sprawdza się kierunek, a MEA to domena Zarządzania. Trzecie: Ład to nie „wyższe piętro” zarządzania. Armator nie jest „starszym kapitanem”. Robi coś innego niż kapitan. Ta różnica jest ważna, gdy będziecie tłumaczyć COBIT 5 innym.
:::

:::pytanie-uczestnika
pytanie: Czy jedna osoba może działać i w Ładzie, i w Zarządzaniu?
odpowiedz: Tak. Liczy się czynność i zakres decyzji, a nie osoba. Komendantka, która ustala apetyt na ryzyko, działa w Ładzie. Gdy sama układa harmonogram wdrożenia, robi pracę Zarządzania (FW-PL s. 31).
:::

---

<!-- slajd: wlasne-slowa -->
# Czy opiszesz przepływ od potrzeb biznesowych do informacji zwrotnej?

:::wlasne-slowa
Opisz przepływ między Ładem a Zarządzaniem od potrzeb biznesowych do informacji zwrotnej.
???
Potrzeby biznesowe → Ład: Oszacuj, Kieruj → Zarządzanie: Planuj (APO), Twórz (BAI), Wykonuj (DSS), Monitoruj (MEA) → informacja zwrotna → Ład: Monitoruj → ponowne Oszacuj.
:::

**Wniosek:** jeśli opiszesz przepływ jako zamknięte koło, rozumiesz interakcję Ładu i Zarządzania.

:::wykladowca
Teraz Wasza kolej. Weźcie kartkę i narysujcie koło. Na górze napiszcie „Ład”, na dole „Zarządzanie”. Zacznijcie od potrzeb biznesowych. Dopiszcie po kolei wszystkie kroki ze strzałkami. Nie zaglądajcie do schematu, dopóki nie skończycie. Najtrudniejszy moment to koniec: co się dzieje po Monitoruj w Zarządzaniu? Informacja zwrotna wraca w górę do Ładu, do jego Monitoruj. Potem Ład znowu ocenia. Gdy skończycie, porównajcie rysunek ze wzorem i z Ilustracją 15.
:::

---

<!-- slajd: wlasne-slowa -->
# Dlaczego COBIT 5 w ogóle oddziela Ład od Zarządzania?

:::wlasne-slowa
Dlaczego COBIT 5 oddziela Ład od Zarządzania?
???
Bo to dwa różne rodzaje pracy. Ład decyduje, dokąd idziemy, i rozlicza z wyników. Zarządzanie planuje i wykonuje pracę. Gdy jedna osoba robi oba naraz, nikt jej nie sprawdza i łatwo zgubić cel. Tak było z Syreną: nikt nie wiedział, kto decyduje, a kto wykonuje.
:::

:::teza krytyczna
sytuacja: W małej komendzie ten sam oficer raz zatwierdza priorytety informatyki, a raz sam pilnuje wdrożenia.
pytanie: Czy w małej organizacji da się w pełni oddzielić Ład od Zarządzania?
teza: Nie zawsze w osobach, ale zawsze w czynnościach: trzeba wiedzieć, kiedy ktoś decyduje, a kiedy wykonuje.
uzasadnienie: To opinia autora kursu. FW-PL pisze, że obowiązki nadzoru można przekazać specjalnym strukturom, „szczególnie w większych, złożonych przedsiębiorstwach” (s. 14). W małych jest mniej osób do podziału ról.
powiazanie: Zasada 5; aktywator Struktury organizacyjne
przyklad: Zastępca komendanta zatwierdza na naradzie priorytety (Ład), a po naradzie sam sprawdza grafik szkoleń (Zarządzanie).
status: opinia
refleksja: Jak w małej organizacji zabezpieczyć się przed tym, że ktoś sam sobie wyznacza kierunek i sam siebie sprawdza?
:::

**Wniosek:** COBIT 5 oddziela Ład od Zarządzania, bo decyzja o kierunku i wykonanie pracy to różne czynności, które muszą się wzajemnie sprawdzać.

:::wykladowca
To pytanie dotyka sensu całej zasady. Zanim odsłonicie odpowiedź, wróćcie do Syreny. Gdy nikt nie wie, kto decyduje, a kto wykonuje, nikt też nie sprawdza wyników. Spróbujcie powiedzieć to w trzech zdaniach. Potem przeczytajcie tezę krytyczną. To opinia autora kursu, a nie stanowisko ISACA. W małej komendzie często ta sama osoba pełni obie role. Wtedy trzeba przynajmniej wiedzieć, w której roli ktoś właśnie działa. Mentor powinien umieć to wyjaśnić bez straszenia ludzi teorią.
:::

---

<!-- slajd: egzamin -->
<!-- typ SD: F – syntetyzujący (strategia egzaminacyjna) -->
# Jaką kolejność przepływu musisz znać na egzaminie?

:::egzamin
Kolejność przepływu (Rysunek 15): **Oszacuj → Kieruj → Planuj → Twórz → Wykonuj → Monitoruj (MEA) → Monitoruj (EDM)**.
Zarządzanie realizuje kierunek wyznaczony przez organ Ładu, aby osiągnąć cele organizacji (definicja, s. 31).
:::

:::zapamietaj
Ład: **Oszacuj, Kieruj, Monitoruj**, czyli zarząd i prezes. Zarządzanie: Planuj, Twórz, Wykonuj, Monitoruj, czyli kierownictwo i CEO. Łączą je aktywatory i informacje zwrotne.
:::

**Wniosek:** na egzaminie najważniejsze są kolejność przepływu i to, że Monitoruj (MEA) poprzedza Monitoruj (EDM).

:::wykladowca
Na egzaminie ta lekcja wraca w dwóch formach. Pierwsza to pytanie o kolejność. Zapamiętajcie ją jako jedno zdanie: Oszacuj, Kieruj, Planuj, Twórz, Wykonuj, Monitoruj w MEA, Monitoruj w EDM. Najczęstszy błąd to zamiana dwóch ostatnich kroków. Najpierw mierzy Zarządzanie, a dopiero potem Ład porównuje wyniki z kierunkiem. Druga forma to definicja Zarządzania. Kluczowe są słowa „zgodnie z kierunkiem wyznaczonym przez organ Ładu”. Odpowiedź, w której Zarządzanie samo ustala kierunek, jest błędna.
:::

---

<!-- slajd: rozwiazany -->
<!-- podpowiedz: Kto sprawdza i czyj kierunek sprawdza? -->
# Jaką praktykę wykonuje Wrzos, gdy sprawdza swój własny kierunek?

:::rozwiazany
Komendantka Wrzos co kwartał sprawdza, czy kierunek, który sama wyznaczyła dla Syreny, został wcielony w życie. Jaką praktykę wykonuje?
- A. Monitoruj w domenie MEA
- B. Kieruj (Ład)
- C. Monitoruj (Ład)
- D. Planuj (Zarządzanie)
+++
**Krok 1 – co jest pytane?** Słowa-klucze: **kierunek, który sama wyznaczyła** i **sprawdza**. Osoba z góry sprawdza, czy jej decyzje są wykonywane.
+++
**Krok 2 – jaka kategoria COBIT?** Zasada 5: Ład (Oszacuj, Kieruj, Monitoruj) albo Zarządzanie (Planuj, Twórz, Wykonuj, Monitoruj). Wrzos jest organem Ładu.
+++
**Krok 3 – eliminacja.** A – *inna kategoria*: MEA to domena Zarządzania, a tu sprawdza organ Ładu. B – *prawda nie na temat*: Wrzos rzeczywiście kieruje, ale w tej sytuacji nie wyznacza kierunku, tylko sprawdza wykonanie. D – *inna kategoria*: planowanie to praca Sikory, czyli Zarządzanie.
+++
**Odpowiedź: C.** Dlaczego: w Ładzie monitoruje organ Ładu i sprawdza, czy kierunek wcielono w życie.
:::

**Wniosek:** gdy organ Ładu sprawdza, czy jego kierunek wcielono w życie, wykonuje praktykę Monitoruj w Ładzie.

:::wykladowca
Rozwiążmy to razem. Najpierw szukamy, kto działa i co robi. Działa komendantka, czyli organ Ładu. Robi jedną rzecz: sprawdza, czy jej kierunek wcielono w życie. Teraz eliminacja. Odpowiedź A kusi, bo ma słowo „Monitoruj”. Ale MEA to domena Zarządzania, a tu sprawdza Ład. Odpowiedź B to prawda nie na temat. Wrzos kieruje, ale nie w tej chwili. Odpowiedź D to praca Sikory. Zostaje C. Zapamiętajcie pytanie pomocnicze: kto sprawdza i czyj kierunek sprawdza?
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący -->
# Co już umiesz i co dalej?

- Umiesz podać czasowniki Ładu (Oszacuj, Kieruj, Monitoruj) i Zarządzania (Planuj, Twórz, Wykonuj, Monitoruj).
- Umiesz powiedzieć, kto sprawuje Ład (zarząd i prezes), a kto Zarządzanie (kierownictwo i CEO).
- Umiesz odróżnić Monitoruj w Ładzie od Monitoruj w MEA.
- Umiesz wyjaśnić, że Ład i Zarządzanie łączą aktywatory i informacje zwrotne.

:::teza egzaminacyjna
teza: Na egzaminie wybieraj „Ład” dla oceny, priorytetów i decyzji kierunkowych, a „Zarządzanie” dla planowania, tworzenia, utrzymania i pomiaru.
uzasadnienie: Tak rozdziela to definicja z FW-PL s. 31; dystraktory często używają słowa „monitorowanie”.
powiazanie: Zasada 5
przyklad: „Opracowanie strategii IT” to Zarządzanie (APO02 – Zarządzanie strategią), a jej zatwierdzenie to Ład.
status: uproszczenie
refleksja: Do której strony należy „ustalenie priorytetów portfela projektów”?
:::

**Co dalej i dlaczego:** Ład ma swoje konkretne procesy, więc w lekcji 1.12 poznasz Referencyjny Model Procesu i 5 procesów EDM.

:::wykladowca
Podsumujmy trzema zdaniami i powiedzcie je na głos, po angielsku i po polsku. Governance – Evaluate, Direct, Monitor, czyli Ład: Oszacuj, Kieruj, Monitoruj. Management – Plan, Build, Run, Monitor, czyli Zarządzanie: Planuj, Twórz, Wykonuj, Monitoruj. Monitorowanie w Ładzie sprawdza kierunek, a w MEA bieżące działanie. Pamiętajcie też o armatorze i kapitanie. Armator to Ład, kapitan z załogą to Zarządzanie. W następnej lekcji zobaczycie, jakie konkretne procesy ma Ład.
:::
