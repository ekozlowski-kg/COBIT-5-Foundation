---
id: pc-01-zdolnosc
modul: PC
modulNazwa: Moduł 4 – Model zdolności procesu
temat: Od modelu dojrzałości do modelu zdolności (ISO/IEC 15504)
lekcja: "4.1"
dzien: 8
sylabus: [PC-02-05]
minuty: 31
zgadnij: [q-pre-pc-01]
cwiczenia: [q-pc-01-01, q-pc-01-02, q-pc-01-03, q-men-pc-01-zdolnosc-1, q-men-pc-01-zdolnosc-2]
wprowadza: [model-zdolnosci]
wymaga: [pr-12-prm-edm, en-02-procesy]
cel: "Potrafię wyjaśnić, czym model zdolności procesu z COBIT 5 różni się od starego modelu dojrzałości."
priorytet: 1
zapas: [q-zap-pc-01-zdolnosc-1, q-zap-pc-01-zdolnosc-2]
wielkiObraz: 7
twierdzenia: ["Model zdolności procesu COBIT 5 opiera się na normie ISO/IEC 15504.", "Model zdolności ocenia pojedyncze procesy.", "Model zdolności ma 9 atrybutów procesu.", "W COBIT 5 wyniki ocen są zwykle niższe niż w COBIT 4.1.", "Ocena procesów nie daje pełnego obrazu Ładu."]
typowePytania: [{"pytanie": "Czyli audytorka oceni, jak dojrzała jest cała komenda?", "odpowiedz": "Nie. Model zdolności ocenia jeden proces naraz, np. powiadamianie o alarmie. Nie ocenia całej komendy."}, {"pytanie": "Skoro teraz wyszło 1, a kiedyś 2, to pracujemy gorzej?", "odpowiedz": "Niekoniecznie. Nowa skala jest surowsza. Poziom 1 dostajesz dopiero wtedy, gdy proces naprawdę osiąga swój cel."}, {"pytanie": "Jak procesy są dobre, to cały Ład jest w porządku?", "odpowiedz": "Nie. Procesy to tylko jeden z siedmiu aktywatorów. Ocena procesów nie daje pełnego obrazu Ładu."}]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "etap 3 – do przeglądu użytkownika"}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Czy „2” z jednej skali znaczy to samo co „2” z drugiej?

W szkole dostajesz oceny 1–6. Na egzaminie na prawo jazdy obowiązuje osobna lista kontrolna: albo spełniasz wymagania, albo nie.

Obie skale mają liczby, ale **nie da się ich bezpośrednio porównać**. Tak samo jest z COBIT 4.1 (starszą wersją) i [[cobit-5|COBIT 5]].

**Wniosek:** dwie skale z liczbami od 0 do 5 mogą mierzyć zupełnie różne rzeczy.

:::wykladowca
Zacznijmy od czegoś znanego. W szkole dostajecie oceny od 1 do 6. Na egzaminie na prawo jazdy egzaminator ma listę i sprawdza każde wymaganie. Obie oceny mają liczby. Czy szóstka z matematyki mówi, że umiecie prowadzić auto? Nie. Z COBIT jest podobnie. Starsza wersja, COBIT 4.1, miała model dojrzałości, po angielsku maturity model, czytamy „meczuriti model”. COBIT 5 ma model zdolności procesu, po angielsku process capability model, czytamy „prołses kejpabiliti model”. Obie skale mają poziomy od 0 do 5, ale mierzą co innego. Dziś zobaczycie, czym się różnią i dlaczego ich wyników nie wolno wprost porównywać.
:::

:::pytanie-uczestnika
pytanie: Po co zmieniano skalę, skoro stara działała?
odpowiedz: Nowa skala opiera się na międzynarodowej normie. Daje bardziej powtarzalne wyniki i mniej sporów o to, kto ma rację. Pełną listę korzyści zobaczysz za kilka slajdów.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (nazwa i karta terminu) -->
<!-- podpowiedz: Model zdolności mierzy, jak dobrze działa każdy proces z osobna. -->
# Na czym opiera się model zdolności procesu COBIT 5?

Model opiera się na normie dwóch organizacji: ISO (International Organization for Standardization – Międzynarodowa Organizacja Normalizacyjna) i IEC (International Electrotechnical Commission – Międzynarodowa Komisja Elektrotechniczna).

[[model-zdolnosci|Model zdolności procesu]] opiera się na międzynarodowej normie **ISO/IEC 15504** (ocena procesów). Norma to po ludzku oficjalny wzorzec uzgodniony przez ekspertów z wielu krajów.

Model służy do **pomiaru sprawności** każdego [[proces|procesu]], czyli powtarzalnej pracy, która ma swój cel. Obejmuje procesy [[lad|Ładu]], czyli [[edm|EDM]] (Evaluate, Direct and Monitor – Oszacuj, Kieruj i Monitoruj). Obejmuje też procesy [[zarzadzanie|Zarządzania]], czyli [[pbrm|PBRM]] (Plan, Build, Run and Monitor – Planuj, Twórz, Wykonuj i Monitoruj). Pokazuje też **obszary do usprawnienia**.

:::zrodlo FW-PL 41
:::

:::progresja
0: „Jakoś to działa” – nikt niczego nie sprawdza.

1: Sprawdzasz tylko, czy rzecz daje efekt, np. czy rachunki są zapłacone.

2: Oceniasz osobno każdą powtarzalną czynność w domu albo w biurze.

3: Oceniasz według spisanej listy kryteriów, takiej samej dla wszystkich.

4: Używasz uznanego wzorca, więc wyniki różnych ocen da się porównać.

5: COBIT 5: model zdolności procesu według ISO/IEC 15504 – 6 poziomów, 9 atrybutów, każdy proces oceniany osobno.
:::

**Wniosek:** model zdolności mierzy każdy proces według wspólnej, międzynarodowej miary.

:::wykladowca
Teraz nazwa i źródło. Process capability model, czytamy „prołses kejpabiliti model”, na egzaminie PL to model zdolności procesu. Polski podręcznik pisze „model potencjału procesu”. To ten sam model. Opiera się na normie ISO/IEC 15504, czyli międzynarodowym wzorcu oceny procesów. Zapamiętajcie: model mierzy sprawność każdego procesu z osobna. Obejmuje pięć procesów Ładu z domeny EDM i trzydzieści dwa procesy Zarządzania. Do tego pokazuje, co trzeba usprawnić. Słowo „proces” już znacie: to powtarzalna praca, która ma swój cel. Na dole slajdu widzicie drabinkę: od „jakoś to działa” do oceny według normy.
:::

:::sb kontrowersja
*Process capability*: egzamin PL – „zdolność procesu”, podręcznik PL – „potencjał procesu” (FW-PL s. 41). Status tłumaczenia: **C – sporny**. Kurs przyjmuje „zdolność procesu (process capability)”, bo tak pyta egzamin.
:::

:::glebiej model-zdolnosci
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: Zapamiętaj numer normy: ISO/IEC 15504. -->
# Według jakiej miary COBIT 5 ocenia procesy?

:::atom
twierdzenie: Model zdolności procesu opiera się na normie **ISO/IEC 15504**.
poLudzku: COBIT 5 mierzy procesy według międzynarodowego wzorca, a nie własnej miarki.
zycie: Samochód na przeglądzie sprawdzają według tej samej listy w każdej stacji w kraju.
komenda: Audytorka Ewa Lis ocenia powiadamianie według normy, więc wynik da się porównać z inną komendą.
sprawdz: F :: Model zdolności COBIT 5 to własna skala ISACA, niezwiązana z żadną normą. :: Opiera się na normie ISO/IEC 15504.
:::

**Wniosek:** COBIT 5 nie wymyśla własnej miarki, tylko korzysta z normy ISO/IEC 15504.

:::wykladowca
Zatrzymajmy się przy jednym zdaniu, bo egzamin lubi je odwracać. Model zdolności opiera się na normie ISO/IEC 15504. Dzięki normie wynik z Modrzewiowa da się porównać z wynikiem innej komendy. Tak jak na stacji kontroli pojazdów: w całym kraju obowiązuje ta sama lista. Jeśli w pytaniu przeczytacie, że to „własna skala ISACA bez związku z normą”, od razu odrzućcie tę odpowiedź. ISACA, czyli stowarzyszenie, które wydaje COBIT, oparło się tu na uznanym, zewnętrznym wzorcu. Właśnie to daje ocenie wiarygodność.
:::

---

<!-- slajd: mapa -->
# Gdzie to leży w COBIT 5?

:::mapa model-zdolnosci
:::

To czwarty obszar egzaminu (**PC** – Process Capability, czyli zdolność procesu). Dotyczy tylko [[aktywator|aktywatora]] **Procesy**, więc ocena procesów **nie daje pełnego obrazu** Ładu. Aktywator to po ludzku jedna z siedmiu rzeczy, które muszą zagrać, żeby informatyka działała dobrze.

:::wykladowca
Spójrzcie na mapę COBIT 5. Model zdolności to osobny, czwarty obszar egzaminu, oznaczony literami PC. Zwróćcie uwagę na jedno zdanie z podręcznika. Model ocenia tylko aktywator Procesy, czyli jeden z siedmiu aktywatorów. Dlatego ocena procesów nie daje pełnego obrazu Ładu. Struktury organizacyjne, kultura, informacja, ludzie i pozostałe aktywatory też muszą zagrać. Ten wniosek wróci za chwilę w tezie do przemyślenia. Na mapie widzicie też, co nas czeka w tym module: poziomy, atrybuty, skalę ocen, wymiary oceny i przewodniki.
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: Oceniasz jeden proces naraz, a procesy to tylko 1 z 7 aktywatorów. -->
# Czy oceniamy całą organizację, czy jeden proces?

:::atom
twierdzenie: Model zdolności ocenia **jeden** proces naraz, a nie całą organizację.
poLudzku: Oceniasz konkretną, powtarzalną pracę, np. wysyłanie alarmu.
zycie: Mechanik ocenia hamulce, a nie mówi ogólnie, że samochód jest „dojrzały”.
komenda: Lis nie ocenia całej komendy, tylko proces powiadamiania.
sprawdz: F :: Ocena zdolności procesów daje pełny obraz Ładu. :: Procesy to tylko 1 z 7 aktywatorów, więc obraz nie jest pełny.
:::

:::teza porownawcza
sytuacja: Komendantka Wrzos chce usłyszeć jedną liczbę: „jak dojrzała jest nasza komenda”.
pytanie: Czy wysoka zdolność procesów oznacza dojrzałą organizację i dobry Ład?
teza: Nie. Zdolność procesu to cecha jednego procesu, a nie dojrzałość całej organizacji.
uzasadnienie: FW-PL s. 41: procesy są tylko jednym z siedmiu aktywatorów. Dlatego ocena procesów nie zapewni pełnego obrazu stanu Ładu i trzeba ocenić pozostałe aktywatory.
powiazanie: Zasada 4 „Aktywacja holistycznego podejścia”; aktywator Procesy
przyklad: Powiadamianie ma wysoki poziom, ale dyżurni boją się zgłaszać błędy. Kultura, czyli inny aktywator, wciąż psuje wynik.
status: oficjalne
zrodlo: FW-PL 41
refleksja: Jaki inny aktywator sprawdziłbyś w komendzie, zanim powiesz „mamy dobry Ład”?
:::

**Wniosek:** ocena dotyczy jednego procesu, więc nie mówi wszystkiego o Ładzie.

:::wykladowca
To drugie zdanie, które trzeba umieć. Model zdolności ocenia jeden proces naraz. Audytorka nie wystawia oceny całej komendzie. Bierze konkretną, powtarzalną pracę, na przykład powiadamianie o alarmie. Mechanik też nie mówi, że samochód jest „dojrzały”. Mówi, że hamulce są sprawne, a opony zużyte. Zapamiętajcie dwa angielskie słowa. Capability, czytamy „kejpabiliti”, to zdolność. Maturity, czytamy „meczuriti”, to dojrzałość. W tezie zobaczycie, dlaczego dobre procesy to jeszcze nie dobry Ład.
:::

:::pytanie-uczestnika
pytanie: Czyli jak wszystkie procesy mają poziom 3, to komenda ma poziom 3?
odpowiedz: Nie. Każdy proces ma swój wynik, a komenda nie dostaje jednej liczby. Do tego procesy to tylko jeden z siedmiu aktywatorów (FW-PL s. 41).
:::

---

<!-- slajd: porownanie -->
<!-- typ SD: E – porównawczy -->
# Czym model zdolności COBIT 5 różni się od modelu dojrzałości COBIT 4.1?

Porównanie opiera się na Ilustracji 18 i 19 z podręcznika (na egzaminie: Rysunek 18 i 19).

| COBIT 4.1: model dojrzałości | COBIT 5: model zdolności |
|---|---|
| poziomy 0–5: nie istnieje, ad hoc, powtarzalny, zdefiniowany, zarządzany i wymierny, zoptymalizowany | poziomy 0–5: niekompletny, wykonywany, zarządzany, ustanowiony, przewidywalny, zoptymalizowany |
| 6 atrybutów dojrzałości | **9 atrybutów procesu** |
| osobny model dojrzałości dla każdego procesu | **brak** osobnych modeli. Wspólna skala ISO 15504 |
| proces mógł mieć poziom 1–2 bez pełnego osiągnięcia celów | wyniki zwykle **niższe** (0 lub 1) |

Po ludzku: *ad hoc* znaczy „doraźnie, bez planu”. [[atrybuty-procesu|Atrybut procesu]] (poznasz go w lekcji 4.2b) to cecha, którą sprawdza oceniający.

[[prm|Model referencyjny procesu]] podaje trzy rzeczy:
- **opis procesu z celem**;
- **praktyki bazowe** (= praktyki nadzoru i zarządzania), czyli to, co trzeba robić;
- **produkty pracy** (= wejścia i wyjścia), czyli dokumenty i inne ślady pracy.

:::zrodlo FW-PL 43
:::

**Wniosek:** COBIT 5 ma inne poziomy, 9 atrybutów, jedną wspólną skalę i surowsze wyniki.

:::wykladowca
Ten slajd to rdzeń lekcji. Po lewej stary model dojrzałości z COBIT 4.1, po prawej nowy model zdolności. Zobaczcie trzy różnice. Po pierwsze, poziomy mają inne nazwy i inne znaczenie. Po drugie, zamiast sześciu atrybutów dojrzałości jest dziewięć atrybutów procesu, po angielsku process attributes, czytamy „prołses etribjuts”. Po trzecie, nie ma już osobnego modelu dla każdego procesu. Jest jedna skala z normy. W zamian model referencyjny procesu, po angielsku Process Reference Model, podaje cel procesu, praktyki bazowe i produkty pracy. Te trzy pojęcia rozwiniemy w lekcji 4.4.
:::

:::sb nie-mylic
Ta sama nazwa, inny poziom. W COBIT 4.1 poziom 4 to „zarządzany i mierzalny”. W COBIT 5 „zarządzany” to poziom **2** (FW-PL s. 44, Ilustracja 20). Nie przenoś numeru razem ze słowem.
:::

---

<!-- slajd: pojecie -->
<!-- podpowiedz: Nowa skala jest surowsza: poziom 1 wymaga osiągnięcia celu procesu. -->
# Czy w COBIT 5 łatwiej, czy trudniej o wysoki poziom?

:::atom
twierdzenie: W COBIT 5 wyniki są zwykle **niższe** niż w COBIT 4.1.
poLudzku: Poziom 1 dostajesz dopiero wtedy, gdy proces naprawdę osiąga swój cel.
zycie: Gdy egzamin na prawo jazdy robi się surowszy, mniej osób zdaje za pierwszym razem.
komenda: Obsługa zgłoszeń miała kiedyś poziom 2, a teraz dostaje 0, bo cel osiąga tylko w co trzecim przypadku (PA 1.1 = C).
sprawdz: F :: W COBIT 5 łatwiej dostać wysoki poziom niż w COBIT 4.1. :: Jest odwrotnie. Wyniki są zwykle niższe.
:::

:::teza krytyczna
sytuacja: Po pierwszej ocenie naczelnik Sikora słyszy „poziom 1” i proponuje: „Celujmy od razu w poziom 5 we wszystkich procesach”.
pytanie: Czy każdy proces powinien dążyć do poziomu 5?
teza: Nie. Organizacja sama wybiera poziom docelowy, ważąc koszty, korzyści i wykonalność.
uzasadnienie: FW-PL s. 42–43: poziom docelowy wybiera się na podstawie rachunku kosztów i korzyści oraz analizy wykonalności. Bardzo rzadko jest nim jeden z najwyższych poziomów. Już poziom 1 to ważne osiągnięcie.
powiazanie: Model zdolności procesu; cele oceny (lekcja 4.5)
przyklad: Komendantka Wrzos wybiera wysoki poziom dla powiadamiania o alarmie. Dla archiwizacji starych dokumentów wystarczy jej poziom 1.
status: oficjalne
zrodlo: FW-PL 42, 43
refleksja: Który proces w Twojej pracy zasługuje na wysoki poziom, a któremu wystarczy poziom 1?
:::

**Wniosek:** niski wynik w COBIT 5 często oznacza surowszą miarę, a nie gorszą pracę.

:::wykladowca
Trzecie zdanie: w COBIT 5 wyniki są zwykle niższe. Dlaczego? Bo poziom 1 dostajecie dopiero wtedy, gdy proces naprawdę osiąga swój cel. W COBIT 4.1 proces mógł mieć poziom 1 albo 2, choć celów w pełni nie osiągał. Teraz taki proces dostanie 0 albo 1. To nie znaczy, że ludzie nagle pracują gorzej. Zmieniła się miara. Druga ważna myśl jest w tezie. Podręcznik mówi wprost, że już poziom 1 to ważne osiągnięcie. Nie każdy proces musi iść na sam szczyt, bo wyższy poziom kosztuje.
:::

---

<!-- slajd: rozklad -->
# Co organizacja zyskuje na nowym modelu? (s. 44–45)

1. Większe skupienie na **realizowanym procesie**: czy osiąga swój cel.
2. **Uproszczenie**: bez powielania treści.
3. Większa **niezawodność i powtarzalność** ocen, mniej sporów.
4. Większa **użyteczność**: podstawa formalnej, rygorystycznej (ścisłej, według reguł) oceny.
5. **Zgodność z uznanym standardem**, czyli wsparcie na rynku.

**Wniosek:** nowy model daje oceny skupione na celu procesu, prostsze, powtarzalne i uznawane na rynku.

:::wykladowca
Po co ta zmiana? Podręcznik podaje pięć korzyści. Pierwsza: większe skupienie na tym, czy proces osiąga swój cel. Druga: uproszczenie. W COBIT 4.1 do oceny trzeba było łączyć kilka elementów, a treści się powtarzały. Trzecia: oceny są bardziej niezawodne i powtarzalne. Dwie osoby oceniające dojdą do podobnego wyniku, więc jest mniej sporów. Czwarta: wynik może być podstawą formalnej oceny, wewnętrznej albo zewnętrznej. Piąta: zgodność z uznanym standardem, czyli wsparcie na rynku. W pytaniach o korzyści szukajcie właśnie tych pięciu myśli.
:::

:::sb dlaczego
Powtarzalność oznacza, że wynik nie zależy od tego, kto ocenia. FW-PL s. 44 mówi o ograniczeniu dyskusji i nieporozumień między interesariuszami co do wyników oceny.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku -->
<!-- podpowiedz: Lis nie ocenia całej komendy, tylko jeden konkretny proces. -->
# Dlaczego Lis nie ocenia „dojrzałości całej komendy”?

:::kontekst zycie
**Domowe sprawy na jednej skali.** Rodzina ocenia płacenie rachunków, sprzątanie i gotowanie tą samą skalą 0–5. Rachunki mają poziom 3, bo wszyscy płacą według jednej spisanej listy. Sprzątanie ledwie 1: jakoś się robi, ale bez planu. Nie da się uczciwie powiedzieć, że „cały dom ma 2”.
:::

:::kontekst biuro
**Reklamacje w biurze.** Audytorka sprawdza obsługę reklamacji. Reklamacje są załatwiane, więc proces osiąga cel. Nikt jednak nie planuje terminów ani nie sprawdza kompletności pism. Ocena dotyczy tylko tego procesu, a nie całego biura.
:::

:::kontekst psp
**Nie „dojrzałość”, tylko „zdolność”**
Ewa Lis jest audytorką wewnętrzną komendy, czyli osobą, która niezależnie sprawdza, czy praca idzie zgodnie z zasadami. Na odprawie komendantka Anna Wrzos pyta ją: „Jak dojrzała jest nasza komenda?”. Lis odpowiada, że nie będzie oceniać całej komendy naraz. Weźmie jeden konkretny proces, czyli powiadamianie o alarmie. Sprawdzi, czy osiąga on swój cel i jak dobrze nim zarządzamy. Tak działa [[model-zdolnosci|model zdolności procesu]] z COBIT 5, który zastąpił dawny model dojrzałości.
:::

:::kontekst psp
W COBIT 4.1 proces obsługi zgłoszeń mógł dostać poziom 2 („powtarzalny”), choć nie zawsze osiągał cel. W COBIT 5 dostanie **0**, jeśli nie osiąga swojego przeznaczenia (celu, dla którego istnieje). Poziom 1 jest przyznawany dopiero wtedy, gdy cel jest faktycznie osiągany, co najmniej w znacznym stopniu (PA 1.1 = W lub P).
:::

:::kontekst it
**Jeden proces COBIT 5.** Asesor ocenia DSS02 (Zarządzanie zgłoszeniami serwisowymi i incydentami) z domeny DSS (Deliver, Service and Support – Dostarczaj, Obsługuj i Wspieraj). Wynik, np. poziom 2, dotyczy tylko DSS02. Nic nie mówi o APO12 (Zarządzanie ryzykiem) ani o całym dziale informatyki.
:::

**Wniosek:** ocena zdolności dotyczy konkretnego procesu, a jej wynik jest surowszy niż dawna dojrzałość.

:::wykladowca
Zobaczcie tę samą myśl w czterech miejscach. W domu nie wystawiacie jednej oceny całemu domowi. Rachunki oceniacie osobno, a sprzątanie osobno. W biurze audytorka bierze jeden proces, na przykład reklamacje. W komendzie Ewa Lis odmawia oceny „dojrzałości całej komendy” i wybiera powiadamianie o alarmie. W informatyce asesor, po angielsku assessor, czytamy „asesor”, ocenia jeden proces COBIT 5, na przykład DSS02. Druga scena z komendy pokazuje surowość nowej skali. Proces, który kiedyś miał 2, teraz może dostać 0. Wystarczy, że nie osiąga swojego celu.
:::

---

<!-- slajd: pulapka -->
<!-- podpowiedz: Potencjał i zdolność procesu to ten sam termin. Na egzaminie mówimy „zdolność”. -->
# ⚠ Potencjał czy zdolność – dwa słowa, jeden termin?

:::pulapka
Podręcznik: „**potencjał** procesu”. Egzamin: „**zdolność** procesu”.
:::

:::kontekst psp
**Kasia się myli**
Młoda dyżurna Kasia Nowik uczy się z podręcznika i zapisuje „potencjał procesu”. Na teście nie widzi tego słowa i myśli, że „zdolność” to coś innego. Audytorka Lis prostuje: „To ten sam termin. Na egzaminie mówimy zdolność procesu”.
:::

**Wniosek:** na egzaminie wybieraj słowo „zdolność”, a „potencjał” traktuj jako formę z podręcznika.

:::wykladowca
To pułapka językowa, a nie merytoryczna. Angielskie słowo capability, czytamy „kejpabiliti”, ma po polsku dwa tłumaczenia. Polski podręcznik pisze „potencjał procesu”. Egzamin pisze „zdolność procesu”. To jest ten sam termin. Kasia z naszej historii uczyła się z podręcznika i na teście nie poznała słowa. Wy tego błędu nie zrobicie. Czytając podręcznik, w myślach podmieniajcie „potencjał” na „zdolność”. Na egzaminie wybierajcie zawsze formę „zdolność procesu”.
:::

---

<!-- slajd: wlasne-slowa -->
# Czy umiesz wymienić różnice własnymi słowami?

:::wlasne-slowa
Podaj trzy różnice między modelem dojrzałości COBIT 4.1 a modelem zdolności COBIT 5. Dodaj dwie korzyści nowego podejścia.
???
Różnice: oparcie na ISO/IEC 15504; 9 atrybutów zamiast 6; inne nazwy i znaczenie poziomów. Do tego brak osobnego modelu dla każdego procesu i zwykle niższe wyniki. Korzyści: skupienie na osiąganiu celu procesu, uproszczenie, powtarzalność ocen, podstawa formalnej oceny, zgodność ze standardem.
:::

**Wniosek:** jeśli potrafisz to powiedzieć bez patrzenia, różnicę między modelami masz opanowaną.

:::wykladowca
Teraz Wasza kolej. Zasłońcie poprzednie slajdy i spróbujcie powiedzieć na głos trzy różnice między modelami. Potem dodajcie dwie korzyści. Nie szukajcie idealnych słów. Ważne, żeby padły: norma ISO/IEC 15504, dziewięć atrybutów, inne poziomy i brak osobnych modeli dla procesów. Dopiero potem odsłońcie wzorzec i porównajcie. Jeśli czegoś zabrakło, wróćcie do slajdu z tabelą. Takie odtwarzanie z pamięci uczy dużo skuteczniej niż ponowne czytanie.
:::

---

<!-- slajd: wlasne-slowa -->
# Dlaczego ten sam proces dostaje dziś niższy wynik?

:::wlasne-slowa
Dlaczego ten sam proces w COBIT 5 często dostaje niższy wynik niż w COBIT 4.1?
???
Bo w COBIT 5 poziom 1 wymaga, żeby proces naprawdę osiągał swój cel. W COBIT 4.1 proces mógł mieć poziom 1–2 bez tego. Nowa skala jest surowsza i oparta na normie ISO/IEC 15504.
:::

**Wniosek:** niższy wynik wynika z surowszej reguły poziomu 1, a nie ze złej pracy.

:::wykladowca
To pytanie sprawdza zrozumienie, a nie pamięć. Wyobraźcie sobie, że komendantka pyta Was na korytarzu: „Dlaczego mamy gorzej niż rok temu?”. Odpowiedzcie jednym, dwoma zdaniami. Kluczowe słowa to: poziom 1 wymaga osiągnięcia celu procesu. W starym modelu proces mógł mieć poziom 1 albo 2 bez tego. Jeśli umiecie to wyjaśnić spokojnie i bez żargonu, jesteście już o krok od roli mentora.
:::

---

<!-- slajd: rozwiazany -->
<!-- podpowiedz: Szukaj cechy, która naprawdę należy do COBIT 5, a nie do COBIT 4.1. -->
# Jak odróżnić prawdziwą cechę COBIT 5 od cechy COBIT 4.1?

:::rozwiazany
Komendantka Anna Wrzos pyta audytorkę Ewę Lis, czym model zdolności z COBIT 5 różni się od modelu dojrzałości z COBIT 4.1. Która odpowiedź Lis jest poprawna?
- A. Model zdolności daje pełny obraz Ładu, bo ocenia całą komendę
- B. W modelu zdolności każdy proces ma własny, osobny model oceny
- C. Model zdolności opiera się na normie ISO/IEC 15504 i ma 9 atrybutów procesu
- D. Model zdolności zwykle daje wyższe wyniki, bo poziom 1 łatwiej zdobyć
+++
**Krok 1 – co jest pytane?** Słowo-klucz: **różni się**. Szukasz cechy, która naprawdę należy do COBIT 5.
+++
**Krok 2 – jaka kategoria COBIT?** Model zdolności procesu a model dojrzałości COBIT 4.1 (s. 41–43).
+++
**Krok 3 – eliminacja.** A – *fałsz*: model ocenia tylko procesy, czyli jeden z 7 aktywatorów, więc pełnego obrazu Ładu nie daje. B – *odwrócone*: osobne modele dla każdego procesu miał COBIT 4.1. D – *odwrócone*: w COBIT 5 wyniki są zwykle niższe, bo poziom 1 wymaga osiągnięcia celu procesu.
+++
**Odpowiedź: C.** Dlaczego: COBIT 5 ocenia procesy według normy ISO/IEC 15504, a ta używa 9 atrybutów.
:::

**Wniosek:** dystraktory często podają cechę COBIT 4.1 albo odwracają kierunek zmiany.

:::wykladowca
Rozwiążmy to razem, krok po kroku. Najpierw słowo-klucz: „różni się”. Szukamy cechy, która naprawdę należy do COBIT 5. Potem kategoria: porównanie dwóch modeli. Teraz eliminacja. Odpowiedź A mówi o pełnym obrazie Ładu, a to fałsz. Odpowiedź B opisuje COBIT 4.1, więc jest odwrócona. Odpowiedź D też jest odwrócona, bo wyniki są niższe, a nie wyższe. Zostaje C: norma ISO/IEC 15504 i dziewięć atrybutów. Zapamiętajcie ten sposób, bo na egzaminie dystraktory są zbudowane bardzo podobnie.
:::

---

<!-- slajd: zapamietaj -->
# Co z tej lekcji musisz pamiętać na egzaminie?

:::zapamietaj
COBIT 5 = **ISO/IEC 15504**, 6 poziomów (0–5), **9 atrybutów**. Wyniki niższe niż w COBIT 4.1. Ocena procesów to tylko **1 z 7 aktywatorów**.
:::

:::wykladowca
Zapamiętajcie jedną normę i trzy liczby. Norma: ISO/IEC 15504. Liczby: sześć poziomów, od 0 do 5, dziewięć atrybutów procesu i jeden z siedmiu aktywatorów. Do tego jedna reguła: wyniki w COBIT 5 są zwykle niższe niż w COBIT 4.1. Powtórzcie to na głos dwa razy. Ta jedna linijka wystarczy, żeby odrzucić większość błędnych odpowiedzi w pytaniach o model zdolności. Resztę szczegółów dołożymy w kolejnych lekcjach.
:::

---

<!-- slajd: wniosek -->
# Co już umiesz

- Umiesz powiedzieć, że model zdolności opiera się na normie ISO/IEC 15504.
- Umiesz wymienić różnice wobec modelu dojrzałości COBIT 4.1.
- Umiesz wyjaśnić, dlaczego ocena procesów nie daje pełnego obrazu Ładu.

:::teza egzaminacyjna
teza: Na egzaminie łącz model zdolności z trzema cechami: ISO/IEC 15504, dziewięć atrybutów, jeden proces naraz.
uzasadnienie: Te cechy odróżniają model COBIT 5 od modelu dojrzałości COBIT 4.1 (FW-PL s. 41–43). Dystraktory często je odwracają.
powiazanie: Model zdolności procesu
przyklad: „Każdy proces ma własny model dojrzałości” to cecha COBIT 4.1, więc tę odpowiedź odrzucasz.
status: uproszczenie
refleksja: Którą z tych trzech cech najłatwiej Ci pomylić?
:::

**Co dalej i dlaczego:** w lekcji 4.2 poznasz poziomy zdolności, bo to drabinka, na której ustawiasz proces.

:::wykladowca
Podsumujmy. Wiecie już, że model zdolności, po angielsku process capability model, opiera się na normie ISO/IEC 15504. Wiecie, czym różni się od starego modelu dojrzałości: innymi poziomami, dziewięcioma atrybutami i surowszymi wynikami. Wiecie też, że ocena procesów to nie cała prawda o Ładzie. Procesy to tylko jeden z siedmiu aktywatorów. W następnej lekcji wejdziemy na drabinkę poziomów od 0 do 5. Zobaczycie, co dokładnie znaczy każdy szczebel.
:::
