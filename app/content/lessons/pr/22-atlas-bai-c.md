---
id: pr-22-atlas-bai-c
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: "Instrukcja, majątek, mapa systemu – dlaczego „zasoby” w BAI09 to nie ludzie?"
lekcja: "1.22"
dzien: 7
sylabus: [PR-01-04]
minuty: 16
priorytet: 2
wielkiObraz: 5
cel:
  - "Potrafię odróżnić BAI08 Wiedza, BAI09 Zasoby (majątek) i BAI10 Konfiguracja na przykładzie z pracy."
  - "Potrafię przetłumaczyć słowo „zasoby” z powrotem na angielski i wskazać BAI09, APO07 albo EDM04."
wprowadza: [proc-bai08, proc-bai09, proc-bai10]
wymaga: [pr-21-atlas-bai-b]
twierdzenia:
  - "BAI08 dba, żeby wiedza była spisana, aktualna i dostępna, a nie tylko w czyjejś głowie."
  - "BAI09 „Zarządzanie zasobami” dotyczy aktywów (assets): sprzętu, oprogramowania i licencji."
  - "BAI10 utrzymuje aktualny opis elementów systemu, ich ustawień i powiązań."
  - "Ludzie to APO07, a decyzja Ładu o wszystkich zasobach to EDM04."
typowePytania: [{"pytanie": "BAI09 „Zarządzanie zasobami” dotyczy ludzi?", "odpowiedz": "Nie. Po angielsku to Manage Assets, czyli aktywa: sprzęt, oprogramowanie, licencje. Ludzie to APO07 Zarządzanie zasobami ludzkimi."}, {"pytanie": "Spis sprzętu i baza konfiguracji to to samo?", "odpowiedz": "Nie. Ten sam serwer bywa w obu. BAI09 patrzy na koszt, gwarancję i cykl życia, a BAI10 na ustawienia, wersję i powiązania z usługą."}, {"pytanie": "Zarządzanie wiedzą to szkolenia?", "odpowiedz": "Nie tylko. Kompetencje ludzi to głównie APO07. BAI08 dba, żeby wiedza była spisana, dostępna i aktualna."}]
zgadnij: [q-atl-bai-c-01]
cwiczenia: [q-atl-bai-c-02, q-atl-bai-c-03, q-atl-bai-c-04]
zapas: [q-atl-bai-c-05, q-atl-bai-c-06]
kontrolaAutora: { data: null, kto: null, uwagi: "atlas procesów – do przeglądu" }
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Trzy pytania o Syrenę, trzy różne „bazy” – który proces za nie odpowiada?

:::kontekst psp
**Trzy pytania na jednej zmianie**
St. ogn. Kasia Nowik, młoda dyżurna, pyta: „Jak krok po kroku przełączyć Syrenę w tryb awaryjny?”. Księgowa Halina Mak pyta: „Ile mamy licencji Syreny i kiedy wygasają?”. A kpt. Marek Sikora, naczelnik informatyki, pyta: „Z czym połączony jest serwer Syreny, zanim wgramy aktualizację?”. Odpowiedzi leżą w trzech różnych miejscach i należą do trzech procesów: [[proc-bai08|BAI08]], [[proc-bai09|BAI09]] i [[proc-bai10|BAI10]].
:::

**Wniosek:** „informacja o Syrenie” to trzy różne rzeczy: jak pracować, co posiadamy i z czego system się składa.

:::wykladowca
Zamykamy dziś domenę BAI trzema ostatnimi procesami. Wszystkie trzy przechowują jakąś informację, więc łatwo je pomylić. Posłuchajcie trzech pytań z komendy. Kasia pyta, jak coś zrobić. To jest wiedza. Halina Mak pyta, ile czegoś mamy i ile to kosztuje. To jest majątek. Sikora pyta, z czym połączony jest serwer. To jest konfiguracja. Do tego dochodzi pułapka językowa. Proces o majątku nazywa się po polsku „Zarządzanie zasobami”, choć nie dotyczy ludzi. Za chwilę nauczycie się, jak tę pułapkę rozbroić jednym odruchem.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta procesu) -->
<!-- podpowiedz: BAI08 = jak to zrobić i czego się nauczyliśmy. -->
# BAI08: wiedza ma być spisana, a nie tylko w czyjejś głowie

**[[proc-bai08]]** · EN: *BAI08 Manage Knowledge* (wym. „menydż nolydż”).
Nazwa egzaminu PL niepotwierdzona: rozpoznawaj proces po kodzie i słowie *Knowledge*.

**Po ludzku:** dbasz, żeby potrzebna wiedza była spisana, aktualna i łatwa do znalezienia, a nie tylko w czyjejś głowie.

:::kontekst zycie
**Piec dziadka.** Tylko dziadek wie, jak odpowietrzyć piec. Wnuk nagrywa go telefonem i przykleja przy piecu kartkę z krokami. Gdy piec się zmieni, kartkę wymienia.
:::

:::glebiej proc-bai08
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** BAI08 odpowiada na pytanie „jak to zrobić i czego się nauczyliśmy?”, także przez wycofanie starej wiedzy.

:::wykladowca
BAI08 to Manage Knowledge, czyli zarządzanie wiedzą. W komendzie tylko Grab umiał włączyć tryb awaryjny Syreny. Gdyby zachorował, nikt by tego nie zrobił. Sikora prosi go o spisanie kroków. Dudek wrzuca instrukcję do wspólnej bazy i ustala, że po każdej zmianie ktoś ją sprawdza. Stara wersja trafia do archiwum. To trzy części BAI08: spisać, udostępnić i utrzymać aktualne. Podręcznik łączy BAI08 z BAI05. Razem sprawiają, że ludzie umieją efektywnie korzystać z systemów. BAI05 przekonuje do nowego sposobu pracy, a BAI08 daje do niego instrukcję.
:::

:::sb nie-mylic
Szkolenia i kompetencje ludzi to głównie APO07 i BAI05. BAI08 dba o samą wiedzę: żeby była spisana, dostępna i aktualna niezależnie od jednej osoby.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta procesu) -->
<!-- podpowiedz: „Zasoby” w BAI09 = Assets = majątek. Przetłumacz na angielski! -->
# BAI09: „zasoby” to tu majątek – sprzęt i licencje, a nie ludzie

**[[proc-bai09]]** · EN: *BAI09 Manage Assets* (wym. „menydż esets”).
Nazwa egzaminu PL niepotwierdzona: rozpoznawaj proces po kodzie i słowie *Assets*.

**Po ludzku:** prowadzisz spis sprzętu i licencji: co masz, gdzie to jest, ile kosztuje i kiedy wymienić.

:::kontekst zycie
**Domowa teczka.** Zapisujesz, kiedy kupiłeś pralkę i do kiedy masz gwarancję. Pilnujesz odnowienia antywirusa. Stary laptop czyścisz z danych i oddajesz do elektrośmieci.
:::

:::pulapka
**„Zasoby” w BAI09 = *Assets*, czyli aktywa (majątek).** To nie *Human Resources* (APO07 Zarządzanie zasobami ludzkimi) ani *Resource Optimisation* (EDM04 Zapewnienie optymalizacji zasobów).
:::

:::glebiej proc-bai09
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** gdy widzisz „zasoby”, przetłumacz na angielski: *Assets* to rzeczy z numerem inwentarzowym, czyli BAI09.

:::wykladowca
BAI09 to Manage Assets. Polskie tłumaczenie brzmi „Zarządzanie zasobami” i to jest pułapka. Assets to aktywa, czyli majątek: sprzęt, oprogramowanie i licencje. Ola Dudek wpisuje każdy radiotelefon i serwer do ewidencji. Notuje numer, przydział, datę zakupu i koniec gwarancji. Halina Mak widzi z tego koszty i plan wymiany. Licencja Syreny wygasa w grudniu, więc odnowienie trafia do kalendarza. BAI09 prowadzi rzecz przez cały cykl życia: od zakupu do wycofania. Odruch na egzamin: słowo „zasoby” zawsze tłumaczcie z powrotem na angielski. Dopiero wtedy wybierajcie proces.
:::

:::pytanie-uczestnika
pytanie: Czy BAI09 to wykonawcza część EDM04?
odpowiedz: Nie. EDM04 to decyzja Ładu o wszystkich zasobach: ludziach, pieniądzach i sprzęcie. BAI09 to codzienne prowadzenie aktywów IT w ich cyklu życia.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta procesu) -->
<!-- podpowiedz: BAI10 = z czego system się składa i co od czego zależy. -->
# BAI10: aktualna mapa systemu – części, ustawienia i powiązania

**[[proc-bai10]]** · EN: *BAI10 Manage Configuration* (wym. „menydż konfigjurejszyn”).
Nazwa egzaminu PL niepotwierdzona: rozpoznawaj proces po kodzie i słowie *Configuration*.

**Po ludzku:** prowadzisz aktualną mapę: z jakich części składa się system, jak są ustawione i co od czego zależy.

:::kontekst zycie
**Schemat instalacji elektrycznej.** W szafce wisi kartka: który bezpiecznik obsługuje kuchnię, a który łazienkę. Gdy elektryk dołoży gniazdko, dopisujesz je. Przy awarii od razu wiesz, co wyłączyć.
:::

:::glebiej proc-bai10
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** BAI10 odpowiada na pytanie „z czego to się składa i co od czego zależy?” i aktualizuje opis po każdej zmianie.

:::wykladowca
BAI10 to Manage Configuration, czyli zarządzanie konfiguracją. Konfiguracja to opis systemu: z jakich elementów się składa, jakie mają wersje i ustawienia oraz jak są połączone. Dudek opisuje Syrenę: serwer, wersję programu, zapasową bramkę SMS i łącze do OSP Zawilce. Gdy Kwant-Sygnał proponuje aktualizację, Sikora od razu widzi, czego ona dotknie. Dlatego BAI10 pomaga przy ocenie zmian w BAI06. Pomaga też przy diagnozie awarii. Opis trzeba aktualizować po każdej zmianie i regularnie porównywać z rzeczywistością. Mapa, która kłamie, jest gorsza niż brak mapy.
:::

---

<!-- slajd: porownanie -->
<!-- typ SD: E – porównawczy -->
<!-- podpowiedz: Jak? Co mamy? Z czego się składa? Kogo mamy? -->
# Instrukcja, majątek, mapa – i cztery znaczenia słowa „zasoby”

| Para | Pytanie rozstrzygające | Odpowiedź |
|---|---|---|
| BAI08 / BAI10 | „Jak to zrobić?” czy „z czego to się składa?” | instrukcja, obejście, wnioski → BAI08; elementy i powiązania → BAI10 |
| BAI09 / BAI10 | Rzecz jako majątek czy jako część systemu? | koszt, gwarancja, licencja, wymiana → BAI09; wersja, ustawienia, powiązania → BAI10 |
| BAI09 / APO07 / EDM04 / BAI10 | Jak brzmi „zasoby” po angielsku? | *Assets* → BAI09; *Human Resources* → APO07; *Resource Optimisation* → EDM04; *Configuration* → BAI10 |

:::mapa domena-bai
Cała domena BAI: 10 procesów, od projektu (BAI01) do konfiguracji (BAI10).
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** ten sam serwer bywa w BAI09 i w BAI10, ale każdy proces patrzy na niego inaczej.

:::wykladowca
Ten slajd rozbraja pułapki dzisiejszej lekcji. Pierwszy wiersz: obie rzeczy są w komputerze, ale instrukcja mówi, jak pracować, a konfiguracja, z czego składa się system. Drugi wiersz: ten sam serwer ma numer inwentarzowy i gwarancję, to BAI09. Ma też wersję i połączenia, to BAI10. Trzeci wiersz to odruch na egzamin. Słowo „zasoby” tłumaczcie na angielski. Assets to majątek, BAI09. Human Resources to ludzie, APO07. Resource Optimisation to decyzja Ładu o wszystkich zasobach, EDM04. Na mapie widzicie teraz całą domenę BAI, wszystkie dziesięć procesów.
:::

---

<!-- slajd: wlasne-slowa -->
# Wytłumacz to Kasi

:::wlasne-slowa
Kasia Nowik słyszy na naradzie trzy razy słowo „zasoby”. Wytłumacz jej w 3–4 zdaniach, czym różni się BAI09 od APO07 i od BAI10.
???
„BAI09 Manage Assets to majątek: radiotelefony, serwery i licencje, ich koszt, gwarancja i wymiana. APO07 to zasoby ludzkie, czyli ludzie Sikory i ich kompetencje. BAI10 Manage Configuration opisuje ten sam serwer inaczej: jaką ma wersję, jak jest ustawiony i z czym połączony. Gdy słyszysz »zasoby«, przetłumacz to na angielski i dopiero wtedy wybieraj proces.”
:::

:::wykladowca
Wasza kolej. Kasia słyszała na naradzie słowo „zasoby” trzy razy i za każdym razem chodziło o coś innego. Wytłumaczcie jej różnicę w trzech albo czterech zdaniach. Pomóżcie sobie angielskimi nazwami, bo one rozstrzygają sprawę. Assets to majątek, Human Resources to ludzie, a Configuration to opis systemu. Spróbujcie podać przykład z komendy przy każdym procesie. Potem porównajcie z wzorcem. Jeśli w Waszej odpowiedzi BAI09 dotyczy ludzi, wróćcie do slajdu o BAI09 i jeszcze raz przeczytajcie ramkę z pułapką.
:::

---

<!-- slajd: rozwiazany -->
# Rozwiązujemy razem

:::rozwiazany
W szpitalu powiatowym kierownik informatyki prowadzi rejestr laptopów lekarzy. Zapisuje datę zakupu, koszt, koniec gwarancji i datę planowanej wymiany. Przed oddaniem starego laptopa każe trwale usunąć z niego dane. Który proces COBIT 5 najlepiej opisuje to działanie?
- A. EDM04 Zapewnienie optymalizacji zasobów
- B. BAI10 Zarządzanie konfiguracją
- C. APO07 Zarządzanie zasobami ludzkimi
- D. BAI09 Zarządzanie zasobami
+++
**Krok 1 – co jest pytane?** Słowa-klucze: **koszt**, **gwarancja**, **wymiana**, **wycofanie**. To pytanie o rzecz jako majątek w jej cyklu życia.
+++
**Krok 2 – jaka kategoria COBIT?** Codzienne prowadzenie aktywów IT to Zarządzanie w domenie BAI. *Assets* po angielsku.
+++
**Krok 3 – eliminacja.** A – *inna kategoria*: EDM04 to decyzja Ładu o wszystkich zasobach, a nie rejestr laptopów. B – *prawda nie na temat*: laptop jest też elementem konfiguracji, ale pytanie nie dotyczy ustawień ani powiązań. C – *forma podręcznikowa*: słowo „zasoby” kusi, ale APO07 dotyczy ludzi.
+++
**Odpowiedź: D.** Dlaczego: koszt, gwarancja i cykl życia sprzętu to BAI09 *Manage Assets*. Polskie „zasoby” znaczy tu majątek.
:::

**Co dalej i dlaczego:** w lekcji 1.23 wchodzisz do domeny DSS: codzienna eksploatacja, incydent i problem.

:::wykladowca
Rozwiążmy to razem. Kierownik zapisuje koszt, gwarancję i datę wymiany. Przed oddaniem laptopa usuwa dane. To cykl życia majątku: od zakupu do wycofania. Po angielsku Assets, więc BAI09. Dlaczego nie EDM04? Bo to decyzja Ładu o wszystkich zasobach organizacji, a nie rejestr laptopów. Dlaczego nie BAI10? Laptop jest też elementem konfiguracji, ale pytanie nie mówi o ustawieniach ani powiązaniach. Dlaczego nie APO07? Bo to ludzie. Polskie słowo „zasoby” kusi w trzech odpowiedziach. Odruch tłumaczenia na angielski rozwiązuje to pytanie. W następnej lekcji zaczynamy domenę DSS.
:::
