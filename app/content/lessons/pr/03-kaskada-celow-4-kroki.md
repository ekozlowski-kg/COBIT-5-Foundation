---
id: pr-03-kaskada-celow
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: Kaskada Celów – cztery kroki
lekcja: "1.3"
dzien: 3
sylabus: [PR-02-02, PR-02-03, PR-02-05, PR-02-06]
minuty: 39
zgadnij: [q-pre-pr-03-kaskada-celow]
cwiczenia: [q-pr-03-01, q-pr-03-02, q-pr-03-03, q-pr-03-04, q-pr-03-05, q-kol-kaskada]
wprowadza: [kaskada-celow, cele-organizacji, cele-zwiazane-z-it, cele-aktywatorow]
wymaga: [pr-02-tworzenie-wartosci, m0-02-potrzeba]
cel: "Potrafię ułożyć pięć poziomów Kaskady Celów w kolejności. Potrafię przypisać przykład z komendy do właściwego poziomu."
priorytet: 1
zapas: [q-zap-pr-03-kaskada-celow-1, q-zap-pr-03-kaskada-celow-2]
wielkiObraz: 1
twierdzenia: ["Wyznaczniki wpływają na potrzeby interesariuszy.", "Potrzeby interesariuszy przekładają się najpierw na cele organizacji.", "Cele organizacji przekładają się na cele związane z informatyką.", "Cele związane z informatyką przekładają się na cele aktywatorów.", "COBIT 5 opisuje 17 celów organizacji i 17 celów związanych z informatyką."]
typowePytania: [{"pytanie": "Czyli kaskada to schemat, kto komu podlega?", "odpowiedz": "Nie. Kaskada pokazuje, jak jeden cel wynika z drugiego. Kto komu podlega, opisują struktury i role, a nie kaskada."}, {"pytanie": "Czy potrzeby mieszkańców trafiają od razu do informatyków?", "odpowiedz": "Nie. Najpierw zamieniasz potrzeby na cele całej organizacji. Dopiero z nich wynikają cele związane z informatyką."}, {"pytanie": "Muszę znać na pamięć wszystkie 17 celów?", "odpowiedz": "Nie. Zapamiętaj kolejność poziomów i to, że celów organizacji i celów IT jest po 17. Przykłady rozpoznasz po sensie."}]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "etap 3 – do przeglądu użytkownika"}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Jak z postanowienia „chcemy być zdrowsi” zrobić zadanie na poniedziałek?

Rodzina postanawia: **chcemy być zdrowsi**.

Samo postanowienie niczego nie zmienia. Trzeba je przełożyć na coraz bardziej konkretne cele, aż ktoś będzie wiedział, co zrobić w poniedziałek rano.

**Wniosek:** ogólne postanowienie działa dopiero wtedy, gdy rozpiszesz je na coraz bardziej konkretne cele.

:::wykladowca
Każdy z nas kiedyś coś postanowił. Od jutra zdrowiej, od poniedziałku oszczędniej, od nowego roku więcej ruchu. Ile z tych postanowień przetrwało tydzień? Zwykle niewiele. Dlaczego? Bo postanowienie jest ogólne, a nikt nie wie, co konkretnie ma zrobić rano. Dziś poznamy narzędzie, które temu zapobiega w organizacji. Po angielsku nazywa się Goals Cascade, czytamy „gołlz keskejd”. Po polsku: Kaskada Celów. Kaskada schodzi od ogólnego postanowienia do konkretnego zadania, stopień po stopniu.
:::

:::pytanie-uczestnika
pytanie: Czy to nie jest po prostu zwykłe planowanie?
odpowiedz: Tak, to planowanie, ale uporządkowane w stałe poziomy. COBIT 5 nadaje każdemu poziomowi nazwę i daje tabele, które łączą sąsiednie poziomy.
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający (zjawisko, bez terminów COBIT) -->
# Jak rodzina schodzi od ogółu do szczegółu?

1. **Co wywołało zmianę?** Lekarz zalecił zmianę diety ([[wyznacznik|wyznacznik]]).
2. **Czego potrzebujemy?** Zdrowszej rodziny ([[potrzeba|potrzeba]]).
3. **Cele rodziny:** mniej fast foodu, więcej ruchu.
4. **Co musi zapewnić „domowa technologia”?** Aplikacja z przepisami, lista zakupów w telefonie.
5. **Cele konkretnych narzędzi:** lista robiona co niedzielę, karnet na basen, każdy umie obsłużyć aplikację.

Tak właśnie działa [[kaskada-celow|Kaskada Celów]].

:::uproszczenie
Przykład dydaktyczny. [[cobit-5|COBIT 5]] stosuje kaskadę do [[lad|Ładu]] i [[zarzadzanie|Zarządzania]] informatyką.
:::

:::progresja
0: Postanawiasz „chcę mieć oszczędności” i ustawiasz w telefonie stałe przypomnienie o odkładaniu pieniędzy.

1: Biuro: kierownik chce „mniej zaległych pism”, więc każdy pracownik dostaje dzienny limit spraw do zamknięcia.

2: Organizacja: firma chce zadowolonych klientów, więc dział obsługi ma odpowiadać na e-maile w ciągu doby.

3: Komenda: z potrzeby „szybka pomoc” powstaje cel „ciągłość usług”, a z niego zadanie „aktualna lista numerów OSP”.

4: Kierownictwo układa cele w stałe poziomy i sprawdza, czy każdy niższy cel wspiera cel wyższy.

5: COBIT 5: Kaskada Celów przekłada potrzeby interesariuszy na cele organizacji, cele związane z IT i cele aktywatorów (FW-PL s. 17–18, Ilustracja 4).
:::

**Wniosek:** każdy niższy poziom mówi, jak osiągnąć poziom wyższy.

:::wykladowca
Przejdźmy z rodziną po stopniach. Najpierw coś się zmienia: lekarz zaleca dietę. To przyczyna. Potem pojawia się potrzeba: chcemy być zdrowsi. Z potrzeby robimy cele rodziny: mniej fast foodu, więcej ruchu. Następnie pytamy, co musi zapewnić domowa technologia. Na przykład aplikacja z przepisami i lista zakupów w telefonie. Na samym dole są konkretne zadania dla narzędzi i ludzi. Lista powstaje co niedzielę, a każdy umie obsłużyć aplikację. Zauważcie, że każdy niższy stopień odpowiada na pytanie „jak?”. Każdy wyższy odpowiada na pytanie „po co?”.
:::

:::sb wyobraz
Wyobraź sobie kaskadę, czyli wodospad schodzący po kamiennych stopniach. Woda zawsze spada z wyższego stopnia na niższy i żadnego nie przeskakuje. Tak samo cele: z potrzeb do celów organizacji, z nich do celów IT, a z nich do celów aktywatorów.
:::

---

<!-- slajd: schemat -->
<!-- typ SD: C – procesowy (cztery kroki, każdy poziom objaśniony) -->
# Jakie pięć poziomów ma Kaskada Celów COBIT 5?

Na schemacie pojawia się skrót BSC (Balanced Scorecard – zrównoważona karta wyników). IT BSC to taka sama karta dla informatyki.

```
Wyznaczniki interesariuszy (środowisko, ewolucja technologii…)
        │  krok 1: wpływają na
        ▼
Potrzeby interesariuszy  ─── korzyści · ryzyko · zasoby
        │  krok 2: kaskada do        (Załącznik D)
        ▼
Cele organizacji                (17 · BSC · Ilustracja 5)
        │  krok 3: kaskada do        (Załącznik B)
        ▼
Cele związane z informatyką     (17 · IT BSC · Ilustracja 6)
        │  krok 4: kaskada do        (Załącznik C)
        ▼
Cele aktywatora                 (np. cele procesów)
```

Jak czytać schemat: im wyżej, tym bardziej ogólnie („po co?”), im niżej, tym bardziej konkretnie („co robimy?”).
- **BSC** poznasz w lekcji 1.4: to [[bsc|zrównoważona karta wyników]], czyli patrzenie na organizację z czterech stron.
- IT BSC to taka sama karta dla informatyki.
- Załączniki B, C i D to tabele z tyłu podręcznika. Pokazują, który cel łączy się z którym.

Schemat odtwarza Ilustrację 4 z podręcznika. Na egzaminie ten sam obraz nazywa się „Rysunek 4”.

:::zrodlo FW-PL 18 4
:::

**Wniosek:** kaskada ma pięć poziomów i cztery kroki, a każdy krok łączy dwa sąsiednie poziomy.

:::wykladowca
To najważniejszy schemat dzisiejszego dnia. Czytajmy go od góry, prostokąt po prostokącie. Na górze są wyznaczniki, po angielsku drivers. Krok pierwszy: wpływają na potrzeby interesariuszy. Krok drugi: potrzeby przekładają się na cele organizacji, po angielsku enterprise goals. Jest ich siedemnaście. Krok trzeci: cele organizacji przekładają się na cele związane z informatyką, po angielsku IT-related goals. Też jest ich siedemnaście. Krok czwarty: cele IT przekładają się na cele aktywatora, po angielsku enabler goals. Przy strzałkach widzicie Załączniki D, B i C. To tabele, które łączą sąsiednie poziomy.
:::

:::sb kontrowersja
Nazwy poziomów mają w kursie status tłumaczenia **C – sporny**. Egzamin PL: „Cele organizacji”, „Cele związane z informatyką”, „Cele aktywatora”. Podręcznik PL: „Cele przedsiębiorstwa”, „Cele związane z IT”, „Cele czynników umożliwiających”. Na egzaminie zaznaczaj formy egzaminacyjne.
:::

---

<!-- slajd: mapa -->
# Gdzie to leży w COBIT 5?

:::mapa kaskada
:::

Kaskada Celów to narzędzie **Zasady 1**. Jej ostatni poziom, cele aktywatora, łączy ją z modelem aktywatora (Zasada 4; model poznasz w lekcji 1.9). Aktywator to po ludzku wszystko, co pomaga osiągnąć cel: ludzie, zasady, narzędzia, informacje.

:::wykladowca
Spójrzcie na mapę. Kaskada Celów należy do Zasady 1, czyli Realizacji potrzeb interesariusza. To logiczne. Zasada 1 mówi, że wszystko zaczyna się od potrzeb, a kaskada pokazuje, jak te potrzeby zamienić w konkretną pracę. Zwróćcie uwagę na dolny koniec kaskady. Ostatni poziom to cele aktywatora. Tu kaskada dotyka Zasady 4, czyli aktywatorów. Aktywator to po angielsku enabler, czytamy „inejbler”. Po ludzku to wszystko, co pomaga osiągnąć cel. Kaskada łączy więc dwie zasady: zaczyna się w pierwszej, a kończy w czwartej.
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: Potrzeby idą najpierw do celów całej organizacji, nie do informatyki. -->
# Od czego zaczyna się kaskada i dokąd najpierw trafiają potrzeby?

- **Krok 1.** [[wyznacznik|Wyznaczniki]] wpływają na [[potrzeba|potrzeby interesariuszy]]. Wyznacznikiem może być zmiana strategii, czyli długofalowego planu. Może nim być zmiana rynku i przepisów albo nowa technologia.
- **Krok 2.** Potrzeby przekładają się na [[cele-organizacji|cele organizacji]]: 17 typowych celów w 4 wymiarach [[bsc|zrównoważonej karty wyników]] (poznasz ją w lekcji 1.4).

:::zrodlo FW-PL 17
:::

**Wniosek:** potrzeby interesariuszy trafiają najpierw do celów całej organizacji.

:::wykladowca
Przyjrzyjmy się dwóm pierwszym krokom. Krok pierwszy: coś się zmienia w otoczeniu. Może to być nowa strategia, czyli długofalowy plan. Mogą to być nowe przepisy albo nowa technologia. Taka zmiana wpływa na to, czego ludzie potrzebują. Krok drugi: te potrzeby zamieniamy na cele całej organizacji. Uwaga, całej organizacji, a nie działu informatyki. COBIT 5 podsuwa listę siedemnastu typowych celów. Są ułożone według czterech stron zrównoważonej karty wyników. Kartę poznacie dokładnie w następnej lekcji.
:::

:::sb ekspert
Tabelę, która łączy potrzeby interesariuszy z celami organizacji, zawiera Załącznik D (FW-PL s. 18). Lista 17 celów nie jest wyczerpująca. Większość celów konkretnej organizacji da się jednak przypisać do jednego lub kilku celów z listy (FW-PL s. 17–18).
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: Wyznacznik to przyczyna zmiany, a nie jej skutek. -->
# Co uruchamia całą kaskadę?

:::atom
twierdzenie: Wyznaczniki **wpływają** na potrzeby interesariuszy.
poLudzku: Coś się zmienia w otoczeniu i przez to ludzie zaczynają czegoś potrzebować.
zycie: Lekarz zaleca dietę i rodzina nagle potrzebuje zdrowszych posiłków.
komenda: Zapowiedź kontroli czasów dojazdu sprawia, że mieszkańcy i KW oczekują szybszej pomocy.
sprawdz: F :: Wyznacznik to cel informatyki. :: Wyznacznik to zmiana, która wywołuje nowe potrzeby (krok 1).
:::

**Wniosek:** wyznacznik to przyczyna nowych potrzeb, a nie cel.

:::wykladowca
Krok pierwszy w jednym zdaniu: wyznaczniki wpływają na potrzeby interesariuszy. Po angielsku: stakeholder drivers influence stakeholder needs, czytamy „stejkhołder drajwerz influens stejkhołder nidz”. Wyznacznik to przyczyna, a potrzeba to skutek. Lekarz zaleca dietę, więc rodzina potrzebuje zdrowszych posiłków. W komendzie komenda wojewódzka, w skrócie KW, zapowiada kontrolę czasów dojazdu. Przez to mieszkańcy i KW oczekują szybszej pomocy. Pamiętajcie, że wyznacznik niczego nie postanawia. On tylko zmienia to, czego ludzie oczekują.
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: Najpierw cele organizacji, dopiero potem cele IT. -->
# Dokąd trafiają potrzeby interesariuszy w kroku 2?

:::atom
twierdzenie: Potrzeby interesariuszy przekładają się **najpierw** na cele organizacji.
poLudzku: Najpierw ustalasz, czego chce cała organizacja.
zycie: Rodzina chce być zdrowsza, więc ustala cele domu: mniej fast foodu, więcej ruchu.
komenda: Z potrzeby „szybka pomoc” komenda robi cel nr 7: ciągłość i dostępność usług.
sprawdz: F :: Potrzeby trafiają od razu do celów związanych z informatyką. :: Najpierw powstają cele organizacji (krok 2).
:::

**Wniosek:** w kroku 2 potrzeby zamieniają się w cele całej organizacji, a nie w cele informatyki.

:::wykladowca
Krok drugi to najczęstsza pułapka egzaminacyjna z kaskady. Potrzeby interesariuszy przekładają się najpierw na cele organizacji. Po angielsku: enterprise goals, czytamy „enterprajz gołlz”. Rodzina chce być zdrowsza, więc ustala cele domu. Dopiero potem myśli o aplikacji w telefonie. Komenda chce szybkiej pomocy, więc przyjmuje cel numer siedem: ciągłość i dostępność usług. Dopiero z niego wyniknie cel dla informatyki. W pytaniach egzaminacyjnych szukajcie odpowiedzi, która przeskakuje ten krok. Ona jest błędna.
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: Cel związany z informatyką opisuje rezultat IT potrzebny organizacji. -->
# Co musi zapewnić informatyka, żeby organizacja osiągnęła swoje cele?

Cele organizacji → [[cele-zwiazane-z-it|cele związane z informatyką]]. Jest ich 17 w wymiarach IT BSC (karty wyników dla informatyki).

Opisują [[rezultat|rezultaty]] związane z IT, potrzebne do osiągnięcia celów organizacji. IT to informatyka: komputery, programy, sieci, dane.

:::zrodlo FW-PL 18
:::

:::teza krytyczna
sytuacja: Księgowa Halina Mak czyta kaskadę i pyta: „Czyli cel komendy osiągnie sam wydział kpt. Sikory?”
pytanie: Czy cele związane z IT wystarczą, żeby organizacja osiągnęła swoje cele?
teza: Nie. Do celów organizacji przyczyniają się też inne działy, np. finanse i kadry. COBIT 5 opisuje tylko część związaną z IT.
uzasadnienie: Przypis 2 w podręczniku mówi, że rezultaty IT nie są jedynymi potrzebnymi do celów przedsiębiorstwa. COBIT 5 uwzględnia jednak tylko działania i cele związane z IT (FW-PL s. 18).
powiazanie: Zasada 1; krok 3 Kaskady Celów
przyklad: Cel „ciągłość usług” wymaga sprawnej Syreny, ale też grafiku dyżurów z kadr i paliwa w wozach z kwatermistrzostwa.
status: oficjalne
zrodlo: FW-PL 18
refleksja: Jakie cele Twojej organizacji w ogóle nie zależą od informatyki?
:::

**Wniosek:** cele związane z informatyką opisują rezultaty IT, których organizacja potrzebuje do swoich celów.

:::wykladowca
Krok trzeci. Z celów organizacji wyprowadzamy cele związane z informatyką. Po angielsku: IT-related goals, czytamy „ajti rilejtyd gołlz”. Słowo „związane” jest ważne. Nie chodzi o cele działu informatyki. Chodzi o rezultaty informatyki, których potrzebuje cała organizacja. Takich typowych celów jest siedemnaście. Są ułożone według karty wyników dla informatyki, w skrócie IT BSC. Zatrzymajmy się przy tezie. Informatyka to tylko jeden z dostawców sukcesu. Kadry, finanse i logistyka też pracują na cele komendy. COBIT 5 zajmuje się tylko częścią związaną z IT.
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: Z celu całej organizacji wynika, co musi zapewnić informatyka. -->
# Jak z celu komendy wynika cel dla informatyki?

:::atom
twierdzenie: Cele organizacji przekładają się na cele **związane** z informatyką.
poLudzku: Z celu całej organizacji wynika, co musi zapewnić informatyka.
zycie: Skoro rodzina ma jeść zdrowiej, telefon ma mieć aplikację z przepisami i listę zakupów.
komenda: Z celu nr 7 „ciągłość usług” kpt. Sikora wyprowadza głównie cele IT 04, 10 i 14, a w mniejszym stopniu 07 (Przykład 7, s. 49).
sprawdz: P :: Cele związane z informatyką wynikają z celów organizacji. :: To krok 3 Kaskady Celów.
:::

**Wniosek:** cel dla informatyki zawsze wynika z celu całej organizacji.

:::wykladowca
Zobaczmy krok trzeci w akcji. Rodzina chce jeść zdrowiej. Z tego wynika, że telefon ma mieć aplikację z przepisami i listę zakupów. Telefon nie jest celem sam w sobie. Pomaga osiągnąć cel rodziny. W komendzie jest tak samo. Cel komendy brzmi: ciągłość i dostępność usług. Kapitan Sikora wyprowadza z niego cele dla informatyki. Podręcznik w Przykładzie 7 podaje, że ten cel zależy przede wszystkim od celów IT numer cztery, dziesięć i czternaście. To ryzyko biznesowe związane z IT, bezpieczeństwo informacji i infrastruktury oraz wiarygodne informacje. Cel numer siedem, czyli dostarczanie usług IT zgodnie z wymogami, liczy się w mniejszym stopniu. Zauważcie kierunek. Najpierw jest cel komendy, a dopiero z niego wynika cel informatyki.
:::

:::sb nie-mylic
„Związane z IT” nie znaczy „należące do działu IT”. Podręcznik wyjaśnia, że chodzi o informacje i powiązaną technologię (FW-PL s. 18). Cel związany z IT może dotyczyć np. księgowości, jeśli opiera się ona na danych i systemach.
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: Cele aktywatorów są najniżej i dotyczą wszystkich aktywatorów, nie tylko procesów. -->
# Dlaczego na dole kaskady nie ma samych procesów?

Cele związane z informatyką → [[cele-aktywatorow|cele aktywatora]]. Dotyczą konkretnych [[proces|procesów]], struktur (zespołów i stanowisk), informacji, ludzi…

> „Same procesy jednak nie wystarczą.”

:::zrodlo FW-PL 21
:::

**Wniosek:** cele aktywatora dotyczą wszystkich aktywatorów, a nie tylko procesów.

:::wykladowca
Krok czwarty, ostatni. Z celów związanych z informatyką wyprowadzamy cele aktywatora. Po angielsku: enabler goals, czytamy „inejbler gołlz”. Najłatwiej pomyśleć o procesach, bo to one opisują, co się robi. Ale podręcznik ostrzega: same procesy nie wystarczą. Cele trzeba ustalić także dla struktur, czyli zespołów i stanowisk. Także dla informacji, dla ludzi i ich umiejętności, dla kultury. Przypomnijcie sobie Zasadę 4, czyli podejście holistyczne. Tu widzicie ją w praktyce. Na dole kaskady pracuje wiele różnych aktywatorów naraz.
:::

:::sb zrodlo
Cytat pochodzi z Przykładu 1 – Kaskada celów, FW-PL s. 21. Sam krok 4 kaskady (aktywatory obejmują procesy, struktury organizacyjne i informacje) opisuje s. 18.
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: Cel aktywatora to konkret, który ktoś może zrobić w poniedziałek rano. -->
# Kto na samym dole kaskady dostaje konkretne zadanie?

:::atom
twierdzenie: Cele związane z informatyką przekładają się na cele **aktywatorów**.
poLudzku: Na końcu ustalasz konkret dla ludzi, procedur, danych i narzędzi.
zycie: Lista zakupów ma być gotowa w każdą niedzielę, a każdy domownik umie obsłużyć aplikację.
komenda: Informatyczka Ola Dudek pilnuje, żeby lista numerów OSP była zawsze aktualna.
sprawdz: F :: Cele aktywatorów dotyczą tylko procesów. :: Dotyczą wszystkich aktywatorów: procesów, struktur, informacji, ludzi i innych.
:::

**Wniosek:** na samym dole kaskady cel jest tak konkretny, że ktoś może go wykonać w poniedziałek rano.

:::wykladowca
Na samym dole kaskady cele są bardzo konkretne. W domu: lista zakupów gotowa w każdą niedzielę. Każdy domownik umie obsłużyć aplikację. W komendzie: informatyczka Ola Dudek pilnuje, żeby lista numerów OSP, czyli ochotniczej straży pożarnej, była zawsze aktualna. To cel dla informacji, a nie dla procesu. Pamiętacie noc pożaru przy Lipowej? Numer naczelnika OSP Zawilce był nieaktualny i SMS nie dotarł. Właśnie taki mały, konkretny cel na dole kaskady mógł temu zapobiec.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku (kaskada w sześciu kontekstach) -->
<!-- podpowiedz: Śledź, jak każda osoba schodzi o jeden stopień niżej. -->
# Jak wygląda cała kaskada w domu, w biurze i w komendzie?

:::kontekst zycie
**Wakacje nad morzem.** Ceny noclegów rosną (wyznacznik). Rodzina potrzebuje tańszego wyjazdu (potrzeba). Cel rodziny: odłożyć 4000 zł do czerwca. Cel dla „domowej technologii”: aplikacja banku sama przelewa 500 zł miesięcznie. Cel dla narzędzia: zlecenie stałe ustawione na dzień wypłaty.
:::

:::kontekst biuro
**Nowe przepisy o archiwizacji.** Nowe przepisy każą przechowywać faktury dłużej (wyznacznik). Szef potrzebuje pewności, że żadna faktura nie zginie (potrzeba). Cel biura: komplet faktur przez 5 lat. Cel dla informatyki: bezpieczne archiwum na serwerze. Cel dla aktywatora: kopia archiwum co piątek i jedna przeszkolona osoba.
:::

:::kontekst organizacja
**Szpital i kolejki.** Pacjenci skarżą się na kolejki (wyznacznik). Pacjenci potrzebują krótszego czekania (potrzeba). Cel szpitala: sprawna rejestracja. Cel dla informatyki: system rejestracji działa bez przerw. Cel dla aktywatora: rejestratorki przeszkolone, a dane pacjentów aktualne.
:::

:::kontekst psp
**Od „chcemy szybciej” do konkretu**
Po nocnym pożarze przy ul. Lipowej komenda wojewódzka zapowiada kontrolę czasów dojazdu straży. Komendantka Anna Wrzos mówi: „Mieszkańcy potrzebują szybkiej i pewnej pomocy”. Z tego zespół wyprowadza cel komendy: ciągłość i dostępność usług. Kpt. Marek Sikora, naczelnik informatyki, dopisuje cele dla informatyki: opanowane ryzyko IT, bezpieczna infrastruktura i wiarygodne informacje. Informatyczka Ola Dudek schodzi najniżej: lista numerów telefonów OSP (ochotniczej straży ze wsi) ma być zawsze aktualna. Tak zespół schodzi po stopniach [[kaskada-celow|Kaskady Celów]]: od wyznacznika do celu aktywatora.
:::

:::kontekst psp
1. **Wyznacznik:** nowe wymagania dotyczące czasu dysponowania (wysłania wozu do akcji).
2. **Potrzeba [[interesariusz|interesariuszy]]** (mieszkańcy, KW PSP, czyli komenda wojewódzka straży): szybka i pewna pomoc.
3. **Cel organizacji** nr 7: Ciągłość i dostępność usług.
4. **Cele związane z informatyką** (wg Przykładu 7, FW-PL s. 49). Główne: nr 04 (ryzyko biznesowe związane z IT), nr 10 (bezpieczeństwo informacji, infrastruktury i aplikacji) i nr 14 (wiarygodne i przydatne informacje). W mniejszym stopniu m.in. nr 07 Dostarczanie usług IT zgodnie z wymogami biznesowymi.
5. **Cele aktywatorów:** proces obsługi incydentów, czyli nagłych awarii (awaria SK, stanowiska kierowania, usunięta w czasie X). Procedura pracy awaryjnej, dyżurni przećwiczeni raz na kwartał, rezerwowe łącze.
:::

:::kontekst it
**Przykład z podręcznika COBIT 5 (FW-PL s. 21, Przykład 1).** Przedsiębiorstwo chce zwiększyć zadowolenie klientów. Podnosi więc priorytet celów organizacji 6, 7 i 8. Z Załącznika B wybiera powiązane cele związane z IT, a za priorytetowe uznaje cztery: 01, 04, 07 i 09. Z Załącznika C wybiera procesy. Na końcu ustala cele także dla kultury, struktur i umiejętności.
:::

:::uproszczenie
Numery celów pochodzą z Ilustracji 5 i 6. Powiązanie celu organizacji 7 z celami IT 04, 10, 14 (główne) i 07 (w mniejszym stopniu) to Przykład 7 (FW-PL s. 49). Pozostały dobór celów dla komendy to przykład autorski.
:::

:::teza problemowa
sytuacja: Kpt. Sikora chce od razu kupić zapasowy serwer, bo „i tak będzie potrzebny”. Komendantka pyta, z którego celu komendy to wynika.
pytanie: Czy kaskadę można zacząć od dołu, czyli od narzędzia?
teza: Kaskadę układa się od potrzeb interesariuszy w dół. Od dołu można ją najwyżej sprawdzać pytaniem „po co?”.
uzasadnienie: Podręcznik opisuje kaskadę jako przełożenie potrzeb interesariuszy na cele organizacji, cele IT i cele aktywatorów, w czterech kolejnych krokach (FW-PL s. 17–18). Sprawdzanie od dołu to technika kursu.
powiazanie: Zasada 1; Kaskada Celów, kroki 1–4
przyklad: Sikora pyta „po co serwer?”. Odpowiedź „żeby alarm działał przy awarii” prowadzi do celów IT 10 i 04 (a w mniejszym stopniu 07) i do celu komendy nr 7.
status: uproszczenie
refleksja: Co ryzykuje organizacja, która kupuje narzędzia, zanim ustali cele?
:::

**Wniosek:** w każdym kontekście kaskada schodzi tymi samymi stopniami: od wyznacznika do konkretnego celu aktywatora.

:::wykladowca
Ten slajd pokazuje kaskadę w sześciu miejscach. Zacznijcie od wakacji. Ceny rosną, więc rodzina chce taniej. Postanawia odłożyć pieniądze, a bank przelewa je sam. W biurze przepisy każą dłużej trzymać faktury. Na dole jest kopia archiwum co piątek. W szpitalu kolejki prowadzą do szkolenia rejestratorek. W komendzie kontrola czasów dojazdu prowadzi do aktualnej listy numerów OSP. Ostatni przykład pochodzi wprost z podręcznika. Przedsiębiorstwo chce zadowolonych klientów i schodzi od celów organizacji przez cele IT do procesów.
:::

---

<!-- slajd: nie-jest -->
<!-- typ SD: E – porównawczy (granice pojęcia) -->
# Czym Kaskada Celów NIE jest?

- **≠ hierarchia służbowa.** Kaskada dotyczy celów, a nie ludzi.
- **≠ tabela RACI** (Responsible, Accountable, Consulted, Informed – Odpowiedzialny wykonawczo, Rozliczany, Konsultowany, Informowany). To tabela „kto co robi”, poznasz ją w lekcji 2.3. Role i odpowiedzialności przypisuje się gdzie indziej.
- **≠ uniwersalna prawda.** Tabele mapowania (tabele w podręczniku, które łączą cele kolejnych poziomów) to punkt wyjścia, który trzeba dostosować do organizacji.
- **≠ tylko procesy.** Krok 4 obejmuje wszystkie aktywatory.

**Wniosek:** kaskada porządkuje cele, a nie ludzi, role ani gotowe odpowiedzi.

:::wykladowca
Ten slajd zbiera cztery pomyłki. Pierwsza: kaskada to nie schemat, kto komu podlega. Druga: kaskada to nie tabela RACI. RACI to skrót od czterech angielskich słów: Responsible, Accountable, Consulted, Informed. Ta tabela mówi, kto wykonuje, kto odpowiada, kogo pytamy i kogo informujemy. Poznacie ją w lekcji 2.3. Trzecia: tabele kaskady to nie prawda objawiona. Każda organizacja dostosowuje je do siebie. Czwarta: na dole kaskady nie ma samych procesów. Są wszystkie aktywatory. Każda z tych pomyłek może być błędną odpowiedzią na egzaminie.
:::

:::pytanie-uczestnika
pytanie: Skoro tabele z podręcznika trzeba dostosować, to po co one w ogóle są?
odpowiedz: Są punktem wyjścia. Podręcznik mówi, że mapowanie nie zawiera uniwersalnej prawdy i każda organizacja powinna opracować własną kaskadę (FW-PL s. 20). Więcej o tym w lekcji 1.5.
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: Kaskada to plan celów, a nie schemat, kto komu podlega. -->
# Czy kaskada mówi, kto jest czyim szefem?

:::atom
twierdzenie: Kaskada Celów porządkuje **cele**, a nie ludzi.
poLudzku: Kaskada mówi, z czego wynika zadanie, a nie kto jest czyim szefem.
zycie: Plan wesela schodzi od „udane przyjęcie” do „tort na 18:00”. To plan celów, a nie lista, kto komu podlega.
komenda: Kaskada nie mówi, że Ola Dudek podlega Sikorze. Mówi, z którego celu komendy wynika jej zadanie.
sprawdz: F :: Kaskada Celów to hierarchia służbowa. :: Kaskada dotyczy celów, a role opisuje się gdzie indziej.
:::

**Wniosek:** kaskada pokazuje, z czego wynika zadanie, a nie kto komu podlega.

:::wykladowca
To zdanie warto powtórzyć na głos: kaskada porządkuje cele, a nie ludzi. Dlaczego to takie ważne? Bo słowo „kaskada” kojarzy się z drabiną służbową. Szef na górze, podwładni na dole. To skojarzenie jest błędne. Pomyślcie o weselu. Plan schodzi od „udane przyjęcie” do „tort na osiemnastą”. Nikt nie twierdzi, że tort podlega młodej parze. W komendzie kaskada nie mówi, że Ola Dudek podlega kapitanowi Sikorze. Mówi tylko, z którego celu komendy wynika jej zadanie.
:::

---

<!-- slajd: wlasne-slowa -->
# Czy umiesz ułożyć pięć poziomów kaskady z pamięci?

:::wlasne-slowa
Narysuj lub wypisz 5 poziomów Kaskady Celów w kolejności.
???
Wyznaczniki → Potrzeby interesariuszy → Cele organizacji (17, BSC) → Cele związane z informatyką (17, IT BSC) → Cele aktywatora.
:::

**Wniosek:** jeśli rysujesz pięć poziomów bez patrzenia, znasz szkielet Zasady 1.

:::wykladowca
Weźcie kartkę i narysujcie pięć prostokątów, jeden pod drugim. Wpiszcie w nie poziomy kaskady, od góry do dołu. Między prostokątami narysujcie strzałki i podpiszcie je: krok pierwszy, drugi, trzeci, czwarty. Jeśli pamiętacie, dopiszcie liczbę siedemnaście przy dwóch poziomach. Nie zaglądajcie do schematu, dopóki nie skończycie. Potem porównajcie. Rysowanie z pamięci jest trudniejsze niż czytanie. Właśnie dlatego uczy mocniej. Taki rysunek przyda się Wam też, gdy będziecie tłumaczyć kaskadę innym.
:::

---

<!-- slajd: wlasne-slowa -->
# Dlaczego potrzeby interesariuszy nie trafiają od razu do informatyków?

:::wlasne-slowa
Dlaczego potrzeby interesariuszy nie trafiają od razu do informatyków?
???
Bo informatyka ma służyć celom całej organizacji. Najpierw trzeba ustalić, czego chce organizacja jako całość. Dopiero potem widać, co z tego musi zapewnić IT. Bez tego kroku IT robi rzeczy, których nikt nie potrzebuje.
:::

**Wniosek:** krok przez cele organizacji chroni przed informatyką, która robi rzeczy niepotrzebne organizacji.

:::wykladowca
To pytanie dotyczy sensu kroku drugiego. Spróbujcie odpowiedzieć własnymi słowami, zanim odsłonicie wzór. Podpowiedź: pomyślcie, co by się stało, gdyby informatycy sami zgadywali, czego chcą mieszkańcy. Mogliby zbudować piękną aplikację, której nikt nie potrzebuje. A zapomnieć o liście numerów OSP. Cele organizacji są jak tłumacz. Zamieniają potrzeby ludzi na język całej komendy. Dopiero z tego języka informatyka wyprowadza swoje zadania. Gdy umiecie to wyjaśnić na przykładzie, rozumiecie kaskadę.
:::

---

<!-- slajd: rozwiazany -->
<!-- podpowiedz: Ułóż wszystkie cztery elementy w kolejności kaskady – wyznacznik jest na samej górze. -->
# Który element sytuacji po pożarze jest wyznacznikiem?

:::rozwiazany
Po pożarze przy Lipowej w komendzie dzieje się kilka rzeczy. Komenda wojewódzka zapowiada kontrolę czasów dojazdu. Mieszkańcy chcą szybkiej i pewnej pomocy. Komendantka Wrzos przyjmuje cel „ciągłość i dostępność usług”. Informatyczka Dudek pilnuje, żeby lista numerów OSP była aktualna. Który element jest **wyznacznikiem** w tej kaskadzie?
- A. Zapowiedź kontroli czasów dojazdu przez komendę wojewódzką
- B. Szybka i pewna pomoc dla mieszkańców
- C. Ciągłość i dostępność usług
- D. Aktualna lista numerów OSP
+++
**Krok 1 – co jest pytane?** Słowo-klucz: **wyznacznik**. Szukasz tego, co z zewnątrz wywołało zmianę i wpłynęło na potrzeby.
+++
**Krok 2 – jaka kategoria COBIT?** To **Kaskada Celów**. Ustaw elementy w kolejności: wyznacznik → potrzeba → cel organizacji → cel związany z informatyką → cel aktywatora. Wyznacznik jest na samej górze.
+++
**Krok 3 – eliminacja.** B – *odwrócone*: to potrzeba interesariuszy, czyli skutek wyznacznika, a nie jego przyczyna. C – *inna kategoria*: to cel organizacji (nr 7 na Ilustracji 5). D – *inna kategoria*: to cel aktywatora, najniższy poziom kaskady.
+++
**Odpowiedź: A.** Dlaczego: zapowiedź kontroli to zmiana w otoczeniu, która wpływa na potrzeby interesariuszy, czyli wyznacznik.
:::

**Wniosek:** gdy ułożysz elementy w kolejności kaskady, wyznacznik zawsze stoi na samej górze.

:::wykladowca
Rozwiążmy to razem. W pytaniu są cztery elementy z jednej historii. Każdy jest prawdziwy, ale każdy leży na innym poziomie kaskady. Krok pierwszy: co jest pytane? Wyznacznik, czyli przyczyna zmiany. Krok drugi: ułóżmy elementy w kolejności. Kontrola czasów dojazdu, potem potrzeba szybkiej pomocy, potem cel komendy, na końcu lista numerów. Krok trzeci: eliminacja. Potrzeba to skutek, a nie przyczyna. Cel komendy i lista numerów leżą niżej. Zostaje odpowiedź A. To typowy wzór: wszystkie odpowiedzi prawdziwe, ale z innego poziomu.
:::

---

<!-- slajd: zapamietaj -->
<!-- typ SD: F – syntetyzujący -->
# Jakiej kolejności poziomów nie wolno pomylić?

:::zapamietaj
**Wyznaczniki → Potrzeby interesariuszy → Cele organizacji → Cele związane z informatyką → Cele aktywatora**
:::

:::egzamin
Potrzeby interesariuszy przekładają się najpierw na cele organizacji. Nie trafiają od razu do celów związanych z informatyką (Ilustracja 4).
Opis „rezultaty związane z IT, wymagane do osiągnięcia celów organizacji” to definicja celów związanych z informatyką (s. 18).
:::

:::teza egzaminacyjna
sytuacja: Pytanie egzaminacyjne mówi o „17 celach” i każe wskazać poziom kaskady.
pytanie: Których poziomów dotyczy liczba 17?
teza: Liczba 17 dotyczy dwóch poziomów: celów organizacji i celów związanych z informatyką. Dla wyznaczników, potrzeb i celów aktywatora podręcznik nie podaje takiej listy.
uzasadnienie: Podręcznik definiuje 17 typowych celów przedsiębiorstwa (Ilustracja 5) i 17 celów związanych z IT (Ilustracja 6), FW-PL s. 18–19.
powiazanie: Zasada 1; Ilustracje 5 i 6 (na egzaminie: Rysunki 5 i 6)
przyklad: „COBIT 5 opisuje 17 celów aktywatora” – zdanie fałszywe.
status: oficjalne
zrodlo: FW-PL 18, 19
refleksja: Po czym odróżnisz w pytaniu cel organizacji od celu związanego z IT, skoro obu jest po 17?
:::

:::wykladowca
Na tym slajdzie jest jedno zdanie, które musicie umieć na pamięć. Wyznaczniki, potrzeby interesariuszy, cele organizacji, cele związane z informatyką, cele aktywatora. Powiedzcie je trzy razy na głos. Potem powiedzcie je po angielsku: drivers, stakeholder needs, enterprise goals, IT-related goals, enabler goals. Zapamiętajcie też liczbę siedemnaście. Dotyczy dwóch poziomów: celów organizacji i celów związanych z IT. Na egzaminie pułapka często przeskakuje poziom celów organizacji. Albo przypisuje liczbę siedemnaście niewłaściwemu poziomowi.
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący -->
# Co już umiesz o Kaskadzie Celów?

- Umiesz ułożyć pięć poziomów Kaskady Celów w kolejności.
- Umiesz rozpoznać wyznacznik, potrzebę, cel organizacji, cel IT i cel aktywatora w historii z komendy.
- Umiesz powiedzieć, że kaskada dotyczy celów, a nie ludzi.

**Co dalej i dlaczego:** w lekcji 1.4 poznasz zrównoważoną kartę wyników, bo według niej COBIT 5 układa 17 celów organizacji.

:::wykladowca
Podsumujmy. Kaskada Celów, po angielsku Goals Cascade, ma pięć poziomów i cztery kroki. Zaczyna się od wyznaczników, a kończy na celach aktywatora. Potrzeby trafiają najpierw do celów całej organizacji, a dopiero potem do informatyki. Kaskada porządkuje cele, a nie ludzi. Jeśli potraficie to powiedzieć i narysować bez patrzenia, przejdźcie do ćwiczeń. W następnej lekcji przyjrzymy się bliżej celom organizacji. Zobaczycie, jak COBIT 5 układa je na karcie z czterema polami.
:::
