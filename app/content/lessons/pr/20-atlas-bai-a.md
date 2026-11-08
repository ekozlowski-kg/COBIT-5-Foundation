---
id: pr-20-atlas-bai-a
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: "Projekt, wymagania, budowa, moc – dlaczego BAI zaczyna się od czterech różnych pytań?"
lekcja: "1.20"
dzien: 6
sylabus: [PR-01-04]
minuty: 16
priorytet: 2
wielkiObraz: 5
cel:
  - "Potrafię przypisać zadanie z przedsięwzięcia IT do BAI01, BAI02, BAI03 albo BAI04."
  - "Potrafię jednym pytaniem odróżnić BAI02 od BAI03 oraz BAI04 od DSS04."
wprowadza: [proc-bai01, proc-bai02, proc-bai03, proc-bai04]
wymaga: [pr-19-atlas-apo-d]
twierdzenia:
  - "BAI01 prowadzi zatwierdzone programy i projekty do końca i do korzyści."
  - "BAI02 ustala, CO rozwiązanie ma robić, i daje to do zatwierdzenia."
  - "BAI03 ustala, JAK to zrobić: projektuje, buduje albo kupuje i testuje rozwiązanie."
  - "BAI04 planuje z wyprzedzeniem, żeby system wytrzymał szczyt i był dostępny."
  - "Przetrwanie poważnej awarii lub katastrofy to DSS04, a nie BAI04."
typowePytania: [{"pytanie": "BAI01 decyduje, które projekty robimy?", "odpowiedz": "Nie. Wybór i priorytety to portfel, czyli APO05. BAI01 prowadzi projekty, które już zatwierdzono."}, {"pytanie": "Skoro wymagania są techniczne, to już BAI03?", "odpowiedz": "Nie. Wymaganie może być techniczne i nadal należy do BAI02, bo mówi, CO ma działać. BAI03 opisuje, JAK to zrobimy."}, {"pytanie": "Dostępność to codzienna eksploatacja, więc DSS?", "odpowiedz": "Nie. Planowanie dostępności i pojemności to BAI04. Plan na katastrofę to DSS04, a dane o obciążeniu daje DSS01."}]
zgadnij: [q-atl-bai-a-01]
cwiczenia: [q-atl-bai-a-02, q-atl-bai-a-03, q-atl-bai-a-04]
zapas: [q-atl-bai-a-05, q-atl-bai-a-06]
kontrolaAutora: { data: null, kto: null, uwagi: "atlas procesów – do przeglądu" }
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Dlaczego jedna naprawa Syreny to aż cztery różne procesy?

:::kontekst psp
**Naprawa rusza**
Komendantka Anna Wrzos zatwierdziła naprawę Syreny, czyli systemu, który wysyła alarmy do jednostek. Kpt. Marek Sikora, naczelnik informatyki, dostaje cztery zadania naraz. Ma poprowadzić całe przedsięwzięcie do 30 kwietnia. Ma spisać z dyżurnymi, czego potrzebują. Firma Kwant-Sygnał ma zbudować poprawki. A w sylwestra Syrena musi udźwignąć tłok zgłoszeń. To cztery pierwsze procesy domeny [[bai|BAI]].
:::

**Wniosek:** jedno przedsięwzięcie w BAI to kilka rodzajów pracy, a każdy ma swój proces.

:::wykladowca
Dziś otwieramy domenę BAI, czyli Twórz, Nabywaj i Wdrażaj. Znacie ją z lekcji o domenach: to szuflada, w której coś powstaje albo się zmienia. Teraz zaglądamy do środka. Zobaczcie zadania Sikory. Prowadzenie przedsięwzięcia do terminu to jedna praca. Spisanie z dyżurnymi, czego potrzebują, to druga. Budowa poprawek przez dostawcę to trzecia. Sprawdzenie, czy system wytrzyma sylwestra, to czwarta. Każda odpowiada na inne pytanie. Dlatego COBIT 5 daje im cztery osobne procesy: od BAI01 do BAI04 – po jednym na każdą pracę. Na końcu lekcji rozpoznacie każdy z nich po jednym pytaniu.
:::

:::pytanie-uczestnika
pytanie: Czy to nie jest po prostu jeden projekt?
odpowiedz: To jeden projekt, ale w nim dzieją się różne rodzaje pracy. Prowadzenie projektu to BAI01, a wymagania, budowa i moc systemu mają własne procesy.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta procesu) -->
<!-- podpowiedz: BAI01 prowadzi wybrane projekty. Wybór projektów to APO05. -->
# BAI01: prowadzisz wybrany projekt do mety i do korzyści

**[[proc-bai01]]** · EN: *BAI01 Manage Programmes and Projects* (wym. „menydż prołgrems end prodżekts”).
Nazwa egzaminu PL niepotwierdzona: rozpoznawaj proces po kodzie i słowach *Programmes and Projects*.

**Po ludzku:** prowadzisz przedsięwzięcia z początkiem i końcem tak, żeby skończyły się na czas, w budżecie i dały obiecany efekt.

:::kontekst zycie
**Budowa domu.** Kierownik budowy ma harmonogram, kosztorys i listę etapów. Co tydzień sprawdza opóźnienia i od razu reaguje. Po odbiorze spisuje, co poszło źle.
:::

:::glebiej proc-bai01
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** BAI01 nie wybiera projektów, tylko prowadzi wybrane do końca i do korzyści.

:::wykladowca
Pierwszy proces to BAI01, po angielsku Manage Programmes and Projects. Słowo „programy” nie oznacza tu programów komputerowych. Program to grupa powiązanych projektów, które razem mają dać korzyść. BAI01 uruchamia projekt, planuje go, pilnuje terminu, kosztów i ryzyka, a na końcu go zamyka. Ważne: zamknięcie obejmuje przegląd, czy korzyść naprawdę się pojawiła. Projekt w terminie, ale bez efektu, to jeszcze nie sukces. Zapamiętajcie też granicę. To, które projekty w ogóle robimy, wybiera portfel, czyli APO05. BAI01 zaczyna się, gdy projekt już zatwierdzono.
:::

:::sb nie-mylic
APO05 (portfel) decyduje, CO robimy i w jakiej kolejności. BAI01 prowadzi to, co już wybrano. W podręczniku APO05 to „Zarządzanie portfelem projektów”, więc słowo „projekty” pada w obu nazwach.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta procesu) -->
<!-- podpowiedz: BAI02 = CO ma działać. Nie JAK. -->
# BAI02: zanim coś zbudujesz, spisz, CZEGO potrzebujesz

**[[proc-bai02]]** · EN: *BAI02 Manage Requirements Definition* (wym. „menydż rikłajerments definiszyn”).
Nazwa egzaminu PL niepotwierdzona: rozpoznawaj proces po kodzie i słowie *Requirements*.

**Po ludzku:** zanim coś kupisz albo zbudujesz, spisujesz dokładnie, czego potrzebujesz i po czym poznasz, że działa.

:::kontekst zycie
**Auto dla rodziny.** Zanim pójdziesz do salonu, piszesz na kartce: 7 miejsc, duży bagażnik, spalanie poniżej 7 litrów, cena do 90 tysięcy. Ta kartka to wymagania.
:::

:::glebiej proc-bai02
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** BAI02 odpowiada na pytanie „CO ma działać?”, a zatwierdza to strona, która będzie z rozwiązania korzystać.

:::wykladowca
BAI02 to Manage Requirements Definition, czyli definiowanie wymagań. Tu nic się jeszcze nie buduje. Spisujecie, co rozwiązanie ma robić i po czym poznacie, że działa. Wymagania to nie tylko lista funkcji. To także bezpieczeństwo, dostępność, wydajność i łatwość obsługi. Kto je zatwierdza? Strona biznesowa, czyli ci, którzy będą z rozwiązania korzystać. Dostawca może pomóc, ale nie decyduje za nich. W komendzie Sikora zbiera wymagania od dyżurnych i od OSP Zawilce, a komendantka zatwierdza listę. Te kryteria wrócą jeszcze przy odbiorze rozwiązania w kolejnej lekcji.
:::

:::pytanie-uczestnika
pytanie: Czy wymaganie „alarm w 30 sekund, także bez internetu” to już technika?
odpowiedz: Brzmi technicznie, ale mówi, CO ma być spełnione. Dlatego to nadal BAI02. Wybór konkretnej bramki SMS to już BAI03.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta procesu) -->
<!-- podpowiedz: BAI03 = JAK. Projekt, budowa albo zakup, testy. -->
# BAI03: projektujesz, budujesz albo kupujesz i sprawdzasz, czy działa

**[[proc-bai03]]** · EN: *BAI03 Manage Solutions Identification and Build* (wym. „menydż soluszyns ajdentifikejszyn end bild”).
Nazwa egzaminu PL niepotwierdzona: rozpoznawaj proces po kodzie i słowach *Solutions… Build*.

**Po ludzku:** projektujesz, kupujesz albo budujesz rozwiązanie i sprawdzasz testami, że robi to, co zapisano.

:::kontekst zycie
**Nowa kuchnia.** Masz listę wymagań. Stolarz rysuje szafki, kupuje płyty i okucia, składa je i montuje. Na koniec sprawdza, czy szuflady się domykają.
:::

:::glebiej proc-bai03
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** BAI03 odpowiada na pytanie „JAK to zrobimy?” i sprawdza, czy rzecz zbudowano dobrze.

:::wykladowca
BAI03 to Manage Solutions Identification and Build. Po polsku: identyfikacja i budowanie rozwiązań. Tu powstaje odpowiedź na pytanie „jak?”. Ktoś projektuje rozwiązanie, pisze program albo kupuje gotowe elementy, łączy je i testuje. Zwróćcie uwagę na słowo „nabywaj” w nazwie domeny. Kupno gotowego systemu to też BAI03, nie tylko programowanie. W komendzie Kwant-Sygnał projektuje zapasową bramkę SMS i testuje ją w swoim laboratorium. Testy z BAI03 sprawdzają, czy zbudowano zgodnie z projektem. Czy użytkownicy to przyjmą, sprawdza się później, w BAI07.
:::

:::sb nie-mylic
Wybór dostawcy i pilnowanie umowy z nim to APO10 (Zarządzanie dostawcami). BAI03 korzysta z dostawcy, żeby zbudować albo kupić konkretne rozwiązanie.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta procesu) -->
<!-- podpowiedz: BAI04 = tłok i moc. Katastrofa to DSS04. -->
# BAI04: myślisz o tłoku, zanim goście staną w drzwiach

**[[proc-bai04]]** · EN: *BAI04 Manage Availability and Capacity* (wym. „menydż awejlabiliti end kapesiti”).
Nazwa egzaminu PL niepotwierdzona: rozpoznawaj proces po kodzie i słowach *Availability and Capacity*.

**Po ludzku:** planujesz z wyprzedzeniem, żeby system wytrzymał tłok i działał wtedy, kiedy jest potrzebny.

:::kontekst zycie
**Komunia na 30 osób.** Masz stół na 8. Tydzień wcześniej pożyczasz stoły i krzesła i sprawdzasz, czy piekarnik pomieści dwie blachy.
:::

:::glebiej proc-bai04
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** BAI04 pyta „czy wystarczy mocy w zwykłym dniu i w szczycie?”, a nie „jak przetrwać katastrofę?”.

:::wykladowca
BAI04 to Manage Availability and Capacity, czyli dostępność i pojemność. Pojemność to pytanie, ile system udźwignie. Dostępność to pytanie, czy działa wtedy, kiedy jest potrzebny. Sikora widzi, że z każdym miesiącem Syrena wysyła więcej SMS-ów, bo dochodzą nowe OSP. Za pół roku serwer nie wyrobi. Planuje rozbudowę, zanim to nastąpi. To jest BAI04. Uwaga na pułapkę: proces jest w BAI, choć brzmi jak codzienna eksploatacja. Dane o obciążeniu daje DSS01, a plan na pożar serwerowni to DSS04. BAI04 dotyczy zwykłych warunków i szczytu.
:::

:::pytanie-uczestnika
pytanie: Ilustracja 39 w podręczniku pokazuje „zarządzanie dostępnością” przy DSS. To jak?
odpowiedz: Ilustracja 39 to przykładowe umiejętności przy domenach. Nie zmienia przypisania procesu. Proces dostępności i pojemności to BAI04.
:::

---

<!-- slajd: porownanie -->
<!-- typ SD: E – porównawczy -->
<!-- podpowiedz: Szukaj pytania rozstrzygającego, a nie słowa z nazwy. -->
# Cztery pary, które mylą się najczęściej

| Para | Pytanie rozstrzygające | Odpowiedź |
|---|---|---|
| APO05 / BAI01 | Wybieramy projekt czy go prowadzimy? | wybór → APO05; prowadzenie → BAI01 |
| BAI02 / BAI03 | CO ma działać czy JAK to zrobimy? | CO → BAI02; JAK → BAI03 |
| BAI03 / BAI07 (lekcja 1.21) | Czy zbudowaliśmy dobrze, czy użytkownik to odbiera? | budowa i testy → BAI03; odbiór i przejście → BAI07 |
| BAI04 / DSS04 | Za dużo ruchu czy katastrofa? | tłok, moc → BAI04; przetrwanie i odtworzenie → DSS04 |

:::mapa domena-bai
Właśnie poznałeś pierwsze cztery procesy BAI: 01–04.
:::

:::wlasne-slowa
Wytłumacz Kasi Nowik w 3 zdaniach, czym różni się BAI02 od BAI03. Użyj angielskich słów *Requirements* i *Build*.
???
„BAI02 Manage Requirements Definition spisuje, CO rozwiązanie ma robić, na przykład alarm do OSP w 30 sekund, i daje to do zatwierdzenia. BAI03 Manage Solutions Identification and Build wymyśla, JAK to zrobić: projektuje, buduje albo kupuje rozwiązanie i je testuje. Pytaj więc: czy ten zapis mówi, co ma działać, czy jak to zrobimy?”
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** nazwy procesów brzmią podobnie, więc rozstrzygaj pytaniem o to, co się naprawdę dzieje.

:::wykladowca
Ten slajd zbiera pułapki z dzisiejszej lekcji. Każdą parę rozstrzyga jedno pytanie. Wybieramy czy prowadzimy? Wybór to portfel w APO05, prowadzenie to BAI01. Co czy jak? Co to BAI02, jak to BAI03. Zbudowane dobrze czy odebrane przez użytkownika? Budowa i testy to BAI03, odbiór to BAI07, który poznacie w następnej lekcji. Tłok czy katastrofa? Tłok to BAI04, katastrofa to DSS04. Na mapie widzicie, gdzie te procesy leżą w domenie BAI. Potem wytłumaczcie Kasi własnymi słowami różnicę między BAI02 a BAI03.
:::

---

<!-- slajd: rozwiazany -->
# Rozwiązujemy razem

:::rozwiazany
Szkoła językowa chce zamówić system zapisów na kursy. Dyrektorka spotyka się z lektorami i sekretariatem. Razem ustalają: zapis przez telefon, przypomnienie SMS dzień przed zajęciami i raport wolnych miejsc. Dyrektorka podpisuje tę listę. Który proces COBIT 5 najlepiej opisuje to działanie?
- A. BAI03 Zarządzanie identyfikacją i budowaniem rozwiązań
- B. BAI01 Zarządzanie programami i projektami
- C. BAI02 Zarządzanie definiowaniem wymagań
- D. APO05 Zarządzanie portfelem
+++
**Krok 1 – co jest pytane?** Słowa-klucze: **ustalają**, czego potrzebują, i **podpisują listę**. Nikt jeszcze niczego nie buduje ani nie kupuje.
+++
**Krok 2 – jaka kategoria COBIT?** To praca przed budową w domenie BAI: opis, CO rozwiązanie ma robić.
+++
**Krok 3 – eliminacja.** A – *inna kategoria*: BAI03 to projekt i budowa, czyli JAK. B – *prawda nie na temat*: projekt zapewne istnieje, ale pytanie nie dotyczy harmonogramu ani budżetu. D – *inna kategoria*: portfel wybiera inwestycje, a tu wybór już zapadł.
+++
**Odpowiedź: C.** Dlaczego: ustalenie i zatwierdzenie, CO system ma robić, to definiowanie wymagań, czyli BAI02.
:::

**Co dalej i dlaczego:** następna lekcja to 2.6 „Aktywator 4 – Kultura, Etyka i Zachowanie”. Po niej będziesz umieć: odróżnić etykę organizacyjną od indywidualnej. Umiem podać dobre praktyki, które kształtują zachowanie ludzi.

:::wykladowca
Rozwiążmy jedno pytanie krok po kroku. Szkoła językowa jeszcze niczego nie ma. Dyrektorka z ludźmi ustala, czego potrzebują, i podpisuje listę. Słowo-klucz to „ustalają” i „podpisuje”. Nikt nie projektuje, nikt nie programuje. Dlatego odpada BAI03. BAI01 kusi, bo pewnie jest projekt, ale pytanie nie mówi o terminie ani budżecie. Portfel odpada, bo decyzja o zakupie już zapadła. Zostaje BAI02, czyli definiowanie wymagań. Teraz spróbujcie sami w ćwiczeniach. W następnej lekcji czeka Was najczęściej mylona trójka procesów w całej domenie BAI.
:::
