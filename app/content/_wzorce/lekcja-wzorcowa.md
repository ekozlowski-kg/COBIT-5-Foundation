---
# WZORZEC PRODUKCYJNY (METODYKA §17.16) – nie trafia do kursu, bo leży poza lessons/.
# Każda nowa lub przerabiana lekcja ma mieć te same elementy (SD II: 12 elementów konstrukcyjnych).
id: wzor-lad-zarzadzanie
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: "Governance vs Management – dlaczego sprawny dział IT to jeszcze nie Ład?"   # SD 1: tytuł i cel
lekcja: "1.11"
dzien: 2
sylabus: [PR-02-14, PR-02-15]
minuty: 25
priorytet: 1
wielkiObraz: 5                 # §16.1 – „Kto co robi?”
cel:                           # §11.5 – mierzalny efekt (SD XI)
  - "Potrafię powiedzieć po polsku i po angielsku, czym różni się Governance (Ład) od Management (Zarządzanie)."
  - "Potrafię wskazać, czy decyzja z komendy należy do Ładu, czy do Zarządzania."
wprowadza: [lad, zarzadzanie, edm, pbrm]     # §11.1 – ≤ 4 nowe pojęcia
wymaga: [m0-06-lad-zarzadzanie-intuicja, it0-07-infrastruktura-aplikacje]   # §17.3 – IT0 jako wymaganie
twierdzenia:                   # §16.2 – 3–5 twierdzeń-atomów
  - "Ład ocenia potrzeby i warunki interesariuszy."
  - "Ład wyznacza kierunek przez priorytety i decyzje."
  - "Ład monitoruje wyniki względem kierunku."
  - "Zarządzanie planuje, tworzy, wykonuje i monitoruje działania zgodnie z kierunkiem."
typowePytania:                 # §13.3 – karta prowadzącego
  - { pytanie: "Czyli Ład robi informatyk?", odpowiedz: "Nie. Ład sprawuje zarząd (najwyższe kierownictwo). Informatyk wykonuje Zarządzanie." }
  - { pytanie: "Skoro obie strony „monitorują”, to czym się różnią?", odpowiedz: "Ład sprawdza, czy obrany kierunek jest realizowany (EDM). Zarządzanie mierzy bieżące działanie (MEA)." }
zgadnij: [q-pre-pr-11-zasada-5]
cwiczenia: [q-pr-11-01, q-pr-11-02, q-pr-11-03]
zapas: [q-pr-11-04, q-pr-11-05]
kontrolaAutora: { data: null, kto: null, uwagi: "wzorzec" }   # §17.14 – bez daty lekcja ma etykietę „wersja robocza”
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Czy sprawny dział IT to już dobry nadzór nad IT?

W komendzie w Modrzewiowie informatycy pracują szybko i sumiennie. A jednak nowy system alarmowy „Syrena” zawiódł w czasie pożaru.

Nikt wcześniej nie zdecydował, **jak bardzo** ten system musi być niezawodny.

**Wniosek:** dobra praca informatyków nie zastępuje decyzji o tym, czego organizacja potrzebuje.

:::wykladowca
Zacznijmy od sytuacji, a nie od definicji. Informatycy w komendzie są dobrzy w tym, co robią: instalują, naprawiają i pilnują. A jednak system zawiódł. Dlaczego? Bo nikt na samej górze nie powiedział: „ten system musi działać zawsze, także w nocy i w święta, i godzimy się na koszty, żeby tak było”. To nie jest zadanie informatyka. To decyzja kogoś, kto odpowiada za całą komendę. Dziś nazwiemy te dwie różne role i nauczymy się ich angielskich nazw.
:::

:::pytanie-uczestnika
pytanie: Czy to znaczy, że informatycy zrobili coś źle?
odpowiedz: Niekoniecznie. Mogli zrobić wszystko dobrze w ramach tego, co im zlecono. Zabrakło decyzji, co jest najważniejsze.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: B – objaśniający (zjawisko, bez terminów) -->
# Dwie różne role w każdej organizacji

:::kontekst zycie
**Remont mieszkania.** Ty decydujesz, na co wydajesz pieniądze i co jest najważniejsze, na przykład bezpieczna instalacja elektryczna, a nie drogie płytki. Ekipa remontowa planuje prace, kupuje materiały, wykonuje je i mówi Ci, jak idzie. Ty co jakiś czas sprawdzasz, czy remont idzie w dobrą stronę.
:::

:::kontekst biuro
**Wspólny folder w biurze.** Kierownik ustala, kto ma widzieć jakie dokumenty. Informatyk nadaje te uprawnienia i pilnuje, żeby działały.
:::

:::kontekst psp
**Scena: „Kto mówi, ile ma kosztować niezawodność?”** Komendantka Wrzos decyduje, że „Syrena” musi działać całą dobę. Naczelnik Sikora planuje zapasowy serwer i dyżury techników, a potem raportuje, czy się udało.
:::

**Wniosek:** jedna strona **decyduje i sprawdza**, a druga **planuje i wykonuje**.

:::wykladowca
Zobaczcie, że ten podział znamy z życia. Przy remoncie to Ty decydujesz, co jest ważne, a ekipa to robi. Gdy Ty zaczniesz kłaść płytki, a ekipa zacznie decydować o budżecie, zrobi się bałagan. W organizacji jest tak samo. Kierownictwo decyduje i sprawdza, a specjaliści planują i wykonują. Za chwilę nadamy tym rolom nazwy.
:::

:::sb wyobraz
Wyobraź sobie statek. Kapitan wyznacza kurs i co godzinę go sprawdza. Sternik trzyma ster i omija mielizny. Kapitan nie stoi przy sterze, a sternik nie zmienia portu docelowego.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta terminu) -->
# Governance (Ład): ocenia, wyznacza kierunek, monitoruje

**Governance** (wym. „gawernens”), na egzaminie PL: **[[lad|Ład]]**, w podręczniku: „nadzór”.

Ład to trzy czynności:
1. **Evaluate** – Oszacuj: sprawdź potrzeby i warunki;
2. **Direct** – Kieruj: ustal priorytety i podejmij decyzje;
3. **Monitor** – Monitoruj: sprawdzaj, czy kierunek jest realizowany.

Skrót: **[[edm|EDM]]** – Evaluate, Direct and Monitor.

:::zrodlo FW-PL 31
:::

**Wniosek:** Ład odpowiada na pytanie „czy robimy właściwe rzeczy?”.

:::wykladowca
Teraz nazwa. Po angielsku: Governance, czytamy „gawernens”. Na polskim egzaminie to słowo „Ład”, a w polskim podręczniku „nadzór”. Zapamiętajcie wszystkie trzy formy, ale na egzaminie zaznaczajcie „Ład”. Ład to trzy czasowniki: Evaluate, czyli Oszacuj; Direct, czyli Kieruj; Monitor, czyli Monitoruj. Pierwsze litery dają skrót EDM. Ten skrót spotkacie jako nazwę grupy procesów.
:::

:::sb kontrowersja
„Governance” nie ma idealnego jednowyrazowego odpowiednika. Egzamin PL używa słowa „Ład”, podręcznik PL – „nadzór”, a literatura branżowa także „ład informatyczny”. Status tłumaczenia: **C – sporny**. Kurs przyjmuje „Ład (Governance)”.
:::

:::sb nie-mylic
Ład to nie „kontrola pracy informatyków”. To szerszy mechanizm: decyzje o tym, czego organizacja potrzebuje, jakie ryzyko akceptuje i co ma dać IT.
:::

---

<!-- slajd: pojecie -->
# Management (Zarządzanie): planuje, tworzy, wykonuje, monitoruje

**Management** (wym. „menedżment”), na egzaminie PL: **[[zarzadzanie|Zarządzanie]]**.

Zarządzanie to cztery czynności, zgodnie z kierunkiem wyznaczonym przez Ład:
**Plan, Build, Run, Monitor** – na egzaminie PL: **[[pbrm|Planuj, Twórz, Wykonuj i Monitoruj]]** (PBRM).

:::zrodlo FW-PL 31
:::

**Wniosek:** Zarządzanie odpowiada na pytanie „czy robimy te rzeczy dobrze?”.

:::wykladowca
Druga rola to Management, po polsku Zarządzanie. To ludzie, którzy biorą decyzję Ładu i zamieniają ją w działanie. Planują, czyli Plan. Tworzą albo kupują rozwiązania, czyli Build. Utrzymują je w działaniu, czyli Run. Mierzą, jak to działa, czyli Monitor. Uwaga: słowo „monitoruj” jest i w Ładzie, i w Zarządzaniu. Różnicę pokaże następny slajd.
:::

---

<!-- slajd: porownanie -->
<!-- typ SD: E – porównawczy -->
# Dwa „Monitoruj” – dwie różne rzeczy

| | Governance (Ład) – EDM | Management (Zarządzanie) – MEA |
|---|---|---|
| Co sprawdza? | czy **kierunek** jest realizowany | czy **bieżące działania** idą dobrze |
| Kto? | zarząd pod przywództwem prezesa | kierownictwo pod przywództwem CEO (dyrektora generalnego) |
| Komenda | Wrzos: czy „Syrena” spełnia decyzję „całą dobę”? | Sikora: ile było awarii w miesiącu? |

:::zrodlo FW-PL 31–32 15
:::

**Wniosek:** monitorowanie w EDM i w MEA różni się poziomem: kierunek albo bieżące działania.

:::wykladowca
Ten slajd rozwiązuje najczęstszą pomyłkę. Monitorowanie w Ładzie to pytanie komendantki: „czy dostaję to, o czym zdecydowałam?”. Monitorowanie w Zarządzaniu to pytanie naczelnika: „jak dziś działają systemy?”. Informacja płynie od Zarządzania do Ładu, a Ład na jej podstawie znowu ocenia i kieruje.
:::

:::sb ekspert
W COBIT 5 podział jest w samym modelu procesów: 5 procesów EDM to Ład, a 32 procesy APO, BAI, DSS i MEA to Zarządzanie (FW-PL s. 32–33). Domeny EDM nie utożsamiamy z MEA.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku (z tezą reaktywną) -->
# Kto ustala, ile ryzyka akceptujemy?

Naczelnik Sikora proponuje: „Sam ustalę, jaki przestój systemu jest do przyjęcia”.

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
Zatrzymajmy się przy tej tezie. Naczelnik ma najlepszą wiedzę techniczną, więc może się wydawać, że to on powinien zdecydować. Ale ryzyko dotyczy całej komendy, jej zadań i budżetu. Dlatego decyduje Ład. Naczelnik ma tu ważną rolę: przygotowuje analizę i mówi, ile kosztuje każda opcja. Decyzja należy jednak do komendantki.
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący -->
# Co już umiesz

- **Governance (Ład)** = Evaluate, Direct, Monitor (**EDM**) → „czy robimy właściwe rzeczy?”
- **Management (Zarządzanie)** = Plan, Build, Run, Monitor (**PBRM**) → „czy robimy je dobrze?”
- Monitorowanie w EDM dotyczy kierunku, a w MEA bieżących działań.

:::teza egzaminacyjna
teza: Na egzaminie wybieraj „Ład” dla oceny, priorytetów i decyzji kierunkowych, a „Zarządzanie” dla planowania, tworzenia, utrzymania i pomiaru.
uzasadnienie: Tak rozdziela to definicja z FW-PL s. 31; dystraktory często używają słowa „monitorowanie”.
powiazanie: Zasada 5
przyklad: „Opracowanie strategii IT” to Zarządzanie (APO02), a jej zatwierdzenie to Ład.
status: uproszczenie
refleksja: Do której strony należy „ustalenie priorytetów portfela projektów”?
:::

:::wykladowca
Podsumujmy trzema zdaniami i powiedzcie je na głos, po angielsku i po polsku: Governance – Evaluate, Direct, Monitor. Management – Plan, Build, Run, Monitor. Monitorowanie w EDM sprawdza kierunek, a w MEA bieżące działanie. Jeśli potraficie to powiedzieć bez patrzenia, przejdźcie do ćwiczeń.
:::

:::wlasne-slowa
Wyjaśnij koledze w 3 zdaniach, czym różni się Governance od Management. Użyj obu angielskich nazw.
???
„Governance (Ład) ocenia potrzeby, wyznacza kierunek i monitoruje, czy jest realizowany – to EDM. Management (Zarządzanie) planuje, tworzy, wykonuje i monitoruje działania zgodnie z tym kierunkiem – to PBRM. W komendzie Ład to komendantka, a Zarządzanie to naczelnik i jego wydział.”
:::
