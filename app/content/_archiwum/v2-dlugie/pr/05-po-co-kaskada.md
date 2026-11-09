---
id: pr-05-po-co-kaskada
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: Do czego służy Kaskada Celów i jak jej (nie) używać
lekcja: "1.5"
dzien: 3
sylabus: [PR-02-07, PR-02-03]
minuty: 30
zgadnij: [q-pre-pr-05-po-co-kaskada]
cwiczenia: [q-pr-05-01, q-pr-05-02, q-pr-05-03, q-pr-05-04]
wprowadza: []
wymaga: [pr-03-kaskada-celow, pr-04-cele-organizacji]
cel: "Potrafię powiedzieć, do czego służy Kaskada Celów. Potrafię wyjaśnić, dlaczego jej tabele trzeba dostosować do własnej organizacji."
priorytet: 1
zapas: [q-zap-pr-05-po-co-kaskada-1, q-zap-pr-05-po-co-kaskada-2]
wielkiObraz: 1
twierdzenia: ["Kaskada Celów przekłada potrzeby interesariuszy na konkretne cele.", "Kaskada Celów wspiera dopasowanie potrzeb organizacji do rozwiązań i usług IT.", "Kaskada Celów filtruje bazę wiedzy COBIT 5.", "Tabele mapowania nie są uniwersalną prawdą.", "Pytania interesariuszy są danymi wejściowymi dla kaskady."]
typowePytania: [{"pytanie": "Skoro podręcznik ma gotowe tabele, to po co cokolwiek zmieniać?", "odpowiedz": "Bo każda organizacja ma inne priorytety, wielkość i branżę. Tabele to punkt wyjścia. Najpierw nadajesz celom wagi dla swojej organizacji."}, {"pytanie": "Kaskada opisuje wejścia i wyjścia procesów?", "odpowiedz": "Nie. Wejścia i wyjścia opisują procesy. Kaskada tłumaczy potrzeby na cele i łączy organizację z informatyką."}, {"pytanie": "Czyli wybieramy cele, które najmniej kosztują?", "odpowiedz": "Nie. Priorytety wynikają z celów i ryzyka, a nie z samego kosztu. Komenda stawia na alarm, który zawsze dochodzi, bo od tego zależy życie ludzi."}]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "etap 3 – do przeglądu użytkownika"}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Czy przepis z książki trzeba wykonać co do grama?

Przepis podaje „200 g cukru”.

Robisz ciasto dla diabetyka, a piekarnik grzeje mocniej niż standardowy.

**Gotujesz dokładnie według przepisu czy go dostosowujesz?**

**Wniosek:** gotowy przepis to dobry punkt wyjścia, ale nie rozkaz.

:::wykladowca
Zacznijmy od kuchni, a nie od podręcznika. Książka kucharska podaje dokładne ilości. Autor nie zna jednak Waszego piekarnika ani Waszych gości. Jeśli pieczecie dla osoby z cukrzycą, dacie mniej cukru. Jeśli piekarnik grzeje mocniej, skrócicie czas pieczenia. Nikt rozsądny nie powie, że wtedy łamiecie przepis. Dziś zobaczymy, że z Kaskadą Celów w COBIT 5 jest tak samo. Podręcznik daje gotowe tabele, a Wy dopasowujecie je do swojej organizacji. Najpierw jednak przypomnimy, do czego kaskada w ogóle służy.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający -->
<!-- podpowiedz: Kaskada to tłumacz potrzeb na cele i most między organizacją a IT. -->
# Do czego służy Kaskada Celów?

[[kaskada-celow|Kaskada Celów]] to schodzenie od ogólnych potrzeb do coraz bardziej konkretnych celów. Podręcznik opisuje ją tak:

> Kaskada Celów to mechanizm przełożenia potrzeb interesariuszy na określone, wykonalne i dostosowane cele organizacji, cele związane z informatyką i cele aktywatorów.

[[interesariusz|Interesariusze]] to wszyscy, których sprawa obchodzi. Aktywatory to wszystko, co pomaga osiągnąć cel: ludzie, zasady, narzędzia, informacje. Dokładnie poznasz je w lekcji 1.8.

Dzięki temu kaskada **wspiera** dopasowanie (ujednolicenie) potrzeb organizacji do rozwiązań i usług IT (informatyki). Po ludzku: pilnuje, żeby informatyka robiła to, czego organizacja naprawdę potrzebuje.

:::zrodlo FW-PL 17
:::

**Wniosek:** kaskada zamienia ogólne potrzeby w konkretne cele i łączy organizację z IT.

:::wykladowca
Przypomnijmy nazwę z poprzednich lekcji. Po angielsku to Goals Cascade, czytamy „gołlz keskejd”. Na egzaminie i w podręczniku to Kaskada Celów. Kaskada to woda spadająca stopniami. Tak samo cele schodzą stopniami w dół. Zaczynają się od potrzeb interesariuszy, po angielsku stakeholders, czytamy „stejkhołders”. Potem są cele organizacji, cele związane z IT i cele aktywatorów. Zobaczcie dwa słowa z definicji. Pierwsze to „przełożenie”: z ogólnego życzenia robimy konkret. Drugie to „dopasowanie”: informatyka ma robić to, czego organizacja naprawdę potrzebuje. Te dwa słowa są odpowiedzią na najczęstsze pytanie egzaminacyjne o kaskadę.
:::

:::pytanie-uczestnika
pytanie: Czym różni się potrzeba od celu?
odpowiedz: Potrzeba jest ogólna, np. „chcemy szybszej pomocy”. Cel jest konkretny i da się go sprawdzić, np. „alarm dochodzi do OSP (ochotniczej straży pożarnej) w 60 sekund”. Kaskada prowadzi od jednego do drugiego.
:::

:::sb zrodlo
Definicja kaskady: FW-PL s. 17, a schemat czterech kroków to Ilustracja 4 (na egzaminie: Rysunek 4). Przypis 3 na s. 20 podaje, że kaskadę oparto na badaniach Antwerp Management School, IT Alignment and Governance Institute w Belgii.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (atom) -->
<!-- podpowiedz: Ogólne „chcemy” zamieniasz w konkret, który da się zrobić. -->
# Jak ogólne „chcemy” staje się konkretnym celem?

:::atom
twierdzenie: Kaskada Celów **przekłada** potrzeby interesariuszy na konkretne i wykonalne cele.
poLudzku: Z ogólnego życzenia robisz konkretne zadania.
zycie: Postanowienie „chcemy oszczędzać” zamieniasz na „odkładam 200 zł miesięcznie na osobne konto”.
komenda: Z potrzeby „szybka pomoc” komenda robi konkret: numery OSP w Syrenie są zawsze aktualne.
sprawdz: P :: Kaskada Celów zamienia ogólne potrzeby w konkretne cele. :: To jej główny cel (s. 17).
:::

**Wniosek:** dobry cel z kaskady jest konkretny i wiadomo, jak go wykonać.

:::wykladowca
Ten atom ma jedno ważne słowo: „przekłada”. Zobaczcie przykład z oszczędzaniem. „Chcemy oszczędzać” to życzenie. Nie wiadomo, co jutro rano zrobić. „Odkładam 200 zł miesięcznie na osobne konto” to już cel. Wiadomo, co zrobić i jak sprawdzić, czy się udało. W komendzie jest tak samo. „Szybka pomoc” to potrzeba mieszkańców. Konkret brzmi: numery ochotników w Syrenie są zawsze aktualne. Kliknijcie teraz „Prawda” albo „Fałsz” pod atomem i sprawdźcie się.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (atom z progresją) -->
<!-- podpowiedz: Dopasowanie znaczy: informatyka robi to, czego potrzebuje organizacja. -->
# Po co łączyć potrzeby organizacji z informatyką?

:::atom
twierdzenie: Kaskada Celów wspiera **dopasowanie** potrzeb organizacji do rozwiązań i usług IT.
poLudzku: Pilnuje, żeby informatyka robiła to, czego organizacja naprawdę potrzebuje.
zycie: Zanim kupisz babci telefon, sprawdzasz, do czego go używa. Potrzebuje dużych przycisków, a nie trzech aparatów.
komenda: Kpt. Sikora sprawdza, czy każda funkcja Syreny służy szybszej pomocy mieszkańcom.
sprawdz: F :: Kaskada służy do opisu wejść i wyjść procesu. :: To robią procesy, a kaskada łączy potrzeby organizacji z IT.
:::

:::progresja
0: Kupujesz babci telefon z dużymi przyciskami, bo tego potrzebuje, a nie najdroższy model.

1: W biurze wybierasz drukarkę z drukiem dwustronnym, bo księgowość drukuje grube raporty.

2: Sklep wybiera program kasowy, który przyjmuje płatności kartą, bo tak płacą jego klienci.

3: Komenda sprawdza, czy każda funkcja Syreny skraca czas dotarcia alarmu do strażaków.

4: Kierownictwo ustala priorytety informatyki na podstawie celów całej organizacji, a nie mody na nowinki.

5: W COBIT 5 Kaskada Celów łączy cele organizacji z celami związanymi z IT, a te z celami aktywatorów (FW-PL s. 17).
:::

**Wniosek:** dopasowanie oznacza, że informatyka służy celom organizacji, a nie odwrotnie.

:::wykladowca
Drugi atom to dopasowanie. Po angielsku mówi się alignment, czytamy „elajnment”. Babcia nie potrzebuje najdroższego telefonu. Potrzebuje dużych przycisków i głośnego dzwonka. Dobry wnuk najpierw pyta, do czego telefon ma służyć, a dopiero potem kupuje. Kaskada robi to samo w organizacji. Najpierw pyta o cele, a potem wskazuje, co ma dać informatyka. Pod atomem widzicie progresję od życia do COBIT 5. Przeczytajcie ją od poziomu zero do pięciu. Zobaczcie, że na każdym poziomie działa ten sam mechanizm.
:::

---

<!-- slajd: mapa -->
# Gdzie to leży w COBIT 5?

:::mapa kaskada
:::

To wciąż **Kaskada Celów**. Tym razem patrzysz, do czego służy całość i jak jej nie nadużywać.

:::wykladowca
Spójrzcie na mapę COBIT 5. Podświetlone miejsce to Kaskada Celów. Wyrasta z Zasady 1, czyli z Realizacji potrzeb interesariusza. Ostatnio uczyliśmy się, jak kaskada schodzi w dół w czterech krokach. Dziś patrzymy na nią z innej strony. Pytamy, po co ona jest i jak jej nie nadużywać. To ważne także na egzaminie. Pytania często nie sprawdzają samych kroków, tylko cel i właściwe użycie kaskady. Zapamiętajcie miejsce na mapie i przejdźmy do korzyści.
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający (z tezą reaktywną) -->
# Co daje organizacji kaskada? Trzy korzyści (s. 20)

1. **Definiuje** istotne i wymierne cele na różnych poziomach odpowiedzialności.
2. **Filtruje** bazę wiedzy [[cobit-5|COBIT 5]] (wszystkie jego podręczniki i wytyczne). Dzięki temu wybierasz wytyczne właściwe dla [[projekt|projektu]] wdrożenia, doskonalenia lub audytu (sprawdzenia przez niezależną osobę).
3. **Pokazuje i komunikuje**, jak aktywatory pomagają osiągać cele organizacji.

Pozwala też ustalić priorytety wdrożenia, doskonalenia i audytu na podstawie celów i [[ryzyko|ryzyka]].

:::zrodlo FW-PL 20
:::

:::teza interpretacyjna
sytuacja: Komenda ma w tym roku pieniądze tylko na część usprawnień w informatyce.
pytanie: Czy kaskada to tylko ładny schemat, czy narzędzie do podejmowania decyzji?
teza: Kaskada jest narzędziem do ustalania priorytetów. Wskazuje, co wdrożyć, poprawić i sprawdzić najpierw.
uzasadnienie: Według FW-PL s. 20 kaskada pozwala ustalić priorytety wdrożenia, doskonalenia i audytu. Podstawą są cele organizacji i związane z nimi ryzyko.
powiazanie: Zasada 1; Kaskada Celów; korzyści ze s. 20
przyklad: Komendantka Wrzos zaczyna od alarmowania OSP, bo tu ryzyko dla mieszkańców jest największe.
status: oficjalne
zrodlo: FW-PL 20
refleksja: Co w domu albo w pracy robisz jako pierwsze, gdy brakuje pieniędzy na wszystko? Na jakiej podstawie to wybierasz?
:::

**Wniosek:** kaskada pomaga zdecydować, czym zająć się najpierw i czego szukać w COBIT 5.

:::wykladowca
Ten slajd pochodzi prosto ze strony 20 podręcznika. Są na nim trzy korzyści. Pierwsza: kaskada definiuje cele, które da się zmierzyć, na każdym poziomie odpowiedzialności. Druga: filtruje bazę wiedzy, czyli z wielu podręczników wybiera to, co potrzebne. Trzecia: pokazuje, jak aktywatory pomagają osiągać cele. Po angielsku aktywator to enabler, czytamy „inejbler”. Zwróćcie uwagę na zdanie pod listą. Kaskada pomaga też ustalić priorytety na podstawie celów i ryzyka. Na egzaminie to częsta poprawna odpowiedź.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (atom) -->
<!-- podpowiedz: Filtrowanie to wybór tylko tych wytycznych, których teraz potrzebujesz. -->
# Jak z całej wiedzy COBIT 5 wybrać tylko to, co potrzebne?

:::atom
twierdzenie: Kaskada Celów **filtruje** bazę wiedzy COBIT 5.
poLudzku: Z dużej wiedzy wybierasz tylko to, co pasuje do Twojego zadania.
zycie: Z grubej książki kucharskiej wybierasz tylko przepisy na święta, bo te są teraz potrzebne.
komenda: Z całego COBIT 5 kpt. Sikora wybiera wytyczne potrzebne do naprawy powiadamiania.
sprawdz: P :: Kaskada pomaga wybrać wytyczne właściwe dla projektu. :: To jedna z korzyści z kaskady (s. 20).
:::

**Wniosek:** filtrowanie oszczędza czas, bo bierzesz tylko wytyczne pasujące do Twojego celu.

:::wykladowca
Wyobraźcie sobie grubą książkę kucharską. Nikt nie gotuje z niej wszystkiego naraz. Przed świętami szukacie tylko przepisów świątecznych. COBIT 5 to cała rodzina podręczników i wytycznych. Bez filtra człowiek by się w nich zgubił. Kaskada działa jak zakładki w książce. Mówi na przykład: Waszym celem są niezawodne alarmy, więc zajrzyjcie do tych procesów i praktyk. Kpt. Sikora nie czyta więc wszystkiego. Wybiera wytyczne potrzebne do naprawy powiadamiania. Sprawdźcie się w mikropytaniu pod atomem.
:::

---

<!-- slajd: nie-jest -->
<!-- typ SD: B – objaśniający (ograniczenia, z tezą krytyczną) -->
# Dlaczego tabel kaskady nie wolno stosować mechanicznie?

Tabele mapowania (tabele w podręczniku, które łączą cele kolejnych poziomów) **nie są uniwersalną prawdą**, bo:

- każda organizacja ma inne priorytety, które zmieniają się w czasie,
- tabele nie uwzględniają wielkości organizacji ani branży,
- podział na P i S (relacje podstawowe i wspierające z poprzedniej lekcji) upraszcza coś, co w rzeczywistości jest kontinuum. Kontinuum to płynna skala, a nie dwie szuflady.

Pierwszy krok zawsze polega na dostosowaniu mapowania do własnej sytuacji, np. nadaniu wag celom.

:::zrodlo FW-PL 20
:::

:::teza krytyczna
sytuacja: W tabeli mapowania przy celu stoi tylko litera P albo S.
pytanie: Czy dwie litery dokładnie opisują, jak mocno cele są ze sobą powiązane?
teza: Nie. Podział na P i S to uproszczenie, a w rzeczywistości siła powiązania jest płynna.
uzasadnienie: FW-PL s. 20 zastrzega, że mapowanie ma tylko dwa poziomy istotności. W rzeczywistości przypomina ono continuum różnych stopni powiązania.
powiazanie: Kaskada Celów; tabele mapowania
przyklad: W komendzie cel „ciągłość usług” wiąże się z alarmowaniem mocniej niż inne cele oznaczone tą samą literą P.
status: oficjalne
zrodlo: FW-PL 20
refleksja: Jaką wagę od 1 do 5 dałbyś celowi „zgodność z przepisami” w komendzie, a jaką w sklepie internetowym?
:::

**Wniosek:** tabele to wytyczna, którą najpierw dopasowujesz do swojej organizacji.

:::wykladowca
Tu podręcznik sam ostrzega przed własnymi tabelami, a to rzadkie. Po angielsku to mapping tables, czytamy „meping tejbls”. Łączą cele jednego poziomu z celami następnego. Podręcznik podaje trzy powody ostrożności. Każda organizacja ma inne priorytety, a one zmieniają się w czasie. Tabele nie znają wielkości ani branży organizacji. Litery P i S udają, że są tylko dwie szuflady, a w życiu to płynna skala. Wniosek jest jeden. Zanim użyjecie tabel, dopasujcie je do siebie.
:::

:::pytanie-uczestnika
pytanie: To po co podręcznik w ogóle podaje tabele, skoro nie są prawdą?
odpowiedz: Bo są dobrym punktem wyjścia. Podręcznik nazywa je wspólnym mianownikiem dla wielu organizacji (s. 20). Ty bierzesz ten mianownik i dopasowujesz go do siebie.
:::

:::sb wyobraz
Wyobraź sobie rozmiary ubrań: S, M, L. Pasują „mniej więcej” wielu osobom. Krawiec i tak bierze miarę, zanim uszyje garnitur. Tabele mapowania to rozmiarówka, a dostosowanie to branie miary.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (atom) -->
<!-- podpowiedz: Tabele z podręcznika to punkt wyjścia, a nie gotowy przepis. -->
# Od czego zacząć pracę z tabelami mapowania?

:::atom
twierdzenie: Tabele mapowania trzeba **dostosować**, bo nie są uniwersalną prawdą.
poLudzku: Gotowe tabele zmieniasz pod swoją organizację.
zycie: Przepis podaje 200 g cukru, ale dla diabetyka zmieniasz ilość.
komenda: Komendantka Wrzos wybiera najważniejsze cele zamiast wszystkich siedemnastu naraz.
sprawdz: F :: Tabele mapowania stosuje się bez zmian w każdej organizacji. :: Pierwszy krok to dostosowanie, np. nadanie celom wag.
:::

**Wniosek:** pierwszym krokiem przy kaskadzie jest zawsze dostosowanie, np. nadanie celom wag.

:::wykladowca
To zdanie warto znać prawie na pamięć. Pierwszą czynnością przy korzystaniu z kaskady jest dostosowanie mapowania do własnej sytuacji. Tak pisze podręcznik na stronie 20. Jak to zrobić w praktyce? Na przykład nadajecie celom wagi, czyli mówicie, który jest ważniejszy. Komendantka Wrzos nie robi siedemnastu rzeczy naraz. Wybiera kilka najważniejszych celów i od nich zaczyna. Na egzaminie słowa „najpierw” albo „pierwszy krok” przy kaskadzie prowadzą zwykle właśnie do dostosowania.
:::

:::sb nie-mylic
Dostosowanie to nie wymyślanie kaskady od zera. Podręcznik każe opracować własną kaskadę, porównać ją z COBIT i dopracować szczegóły (FW-PL s. 20). Punkt odniesienia zostaje ten sam.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku (z tezą reaktywną) -->
<!-- podpowiedz: Każda organizacja daje najwyższą wagę innemu celowi. -->
# Dlaczego każda organizacja nada celom inne wagi?

:::kontekst zycie
**Domowy budżet.** Rodzina z małym dzieckiem najwyższą wagę daje bezpieczeństwu i zdrowiu. Para studentów stawia na niski czynsz. Obie wybierają z tej samej listy spraw, ale w innej kolejności.
:::

:::kontekst biuro
**Biuro rachunkowe.** W styczniu najważniejsze są terminy rozliczeń, więc kierowniczka odkłada wymianę komputerów na wiosnę. Priorytet zmienia się z porą roku.
:::

:::kontekst firma
Sklep internetowy daje najwyższą wagę celowi **8. Zwinność**, bo rynek zmienia się co tydzień.
:::

:::kontekst admin
Urząd daje najwyższą wagę celom **4. Zgodność z przepisami** i **15. Zgodność z politykami wewnętrznymi**.
:::

:::kontekst psp
**Kaskada to nie przepis na ciasto**
Kpt. Marek Sikora, naczelnik informatyki w komendzie straży, przynosi komendantce wszystkie 17 celów związanych z informatyką z podręcznika. „Zróbmy wszystkie naraz” – proponuje. Komendantka Anna Wrzos hamuje: „Nie mamy ludzi ani pieniędzy na siedemnaście rzeczy jednocześnie”. Razem wybierają to, co dla komendy najważniejsze: alarm ma zawsze dochodzić do strażaków. [[kaskada-celow|Kaskada Celów]] pomaga więc ustalić priorytety i trzeba ją dostosować, a nie kopiować w całości.
:::

:::kontekst psp
Komenda daje najwyższą wagę celowi **7. Ciągłość i dostępność usług**, bo przerwa w dysponowaniu (wysyłaniu wozów do akcji) jest nieakceptowalna.
:::

:::kontekst it
**COBIT 5.** Wagi nadane celom organizacji schodzą w kaskadzie niżej. Gdy komenda postawi na cel 7, kaskada doprowadzi m.in. do procesu DSS04 (Zarządzanie ciągłością, ang. Manage Continuity). DSS (Deliver, Service and Support – Dostarczaj, Obsługuj i Wspieraj) to domena codziennego działania IT.
:::

:::uproszczenie
Wybór wag to przykład autorski. COBIT wymaga dostosowania, ale nie narzuca wag.
:::

:::teza praktyczna
sytuacja: Naczelnik informatyki chce wdrożyć naraz wszystkie 17 celów związanych z informatyką.
pytanie: Ile celów warto wybrać na początek?
teza: W praktyce warto zacząć od kilku celów o najwyższej wadze, a resztę zaplanować na kolejne etapy.
uzasadnienie: COBIT 5 wymaga dostosowania i ustalania priorytetów (FW-PL s. 20), ale nie podaje liczby celów. Słowo „kilka” to ocena autora kursu, a nie zapis ISACA.
powiazanie: Kaskada Celów; wdrożenie COBIT 5 (moduł IM)
przyklad: Komendantka Wrzos wybiera na pierwszy rok trzy cele, a pozostałe wpisuje do planu na kolejne lata.
status: opinia
refleksja: Co się stanie z zespołem pięciu informatyków, który dostanie siedemnaście priorytetów naraz?
:::

**Wniosek:** ta sama kaskada daje różne priorytety, bo każda organizacja ma inne cele i ryzyka.

:::wykladowca
Zobaczcie, jak różnie można rozłożyć wagi. Zacznijmy od domu. Rodzina z dzieckiem i para studentów mają inne priorytety, choć wybierają z tej samej listy. W biurze rachunkowym priorytet zmienia się nawet z porą roku. Sklep internetowy stawia na zwinność, a urząd na zgodność z przepisami. Komenda stawia na ciągłość usług, bo przerwa w wysyłaniu wozów może kosztować życie. Na końcu widzicie, jak taka waga schodzi do konkretnego procesu COBIT 5. Pamiętajcie, że wagi w tych przykładach wymyśliliśmy my. ISACA, czyli stowarzyszenie wydające COBIT, wymaga tylko dostosowania.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający -->
<!-- podpowiedz: Pytania interesariuszy wchodzą do kaskady na samej górze. -->
# Skąd kaskada bierze dane wejściowe?

Ilustracja 7 (na egzaminie: Rysunek 7) zbiera typowe pytania interesariuszy o IT, na przykład:

- *Wewnętrzni:* „Jak kontrolować koszty IT?”, „Czy informacje, które przetwarzam, są dobrze zabezpieczone?”, „Jak postępować w przypadku braku dostępności IT?”
- *Zewnętrzni:* „Skąd wiadomo, że przedsiębiorstwo przestrzega obowiązujących przepisów?”

Wszystkie te pytania można powiązać z celami organizacji. Stanowią **dane wejściowe** dla kaskady (Załącznik D, tabela z tyłu podręcznika).

:::zrodlo FW-PL 22 7
:::

**Wniosek:** pytania interesariuszy o IT to dane wejściowe, od których zaczyna się kaskada.

:::wykladowca
Każde urządzenie potrzebuje czegoś na wejściu. Kaskada potrzebuje pytań interesariuszy. W podręczniku zebrano je na Ilustracji 7, a na egzaminie mówi się Rysunek 7. Są tam pytania osób z wewnątrz, na przykład zarządu albo kierowników. Są też pytania osób z zewnątrz, na przykład regulatorów i klientów. Zauważcie, że to zwykłe ludzkie pytania: „ile to kosztuje?”, „czy dane są bezpieczne?”. Każde takie pytanie da się powiązać z celem organizacji. Pełne powiązania są w Załączniku D.
:::

:::sb przyklad
Księgowa komendy Halina Mak pyta: „Ile kosztuje nas Syrena rocznie?”. To pytanie interesariusza wewnętrznego o koszty IT. Inspektorka z komendy wojewódzkiej pyta: „Czy dotrzymujecie czasów dojazdu?”. To pytanie interesariusza zewnętrznego.
:::

---

<!-- slajd: wlasne-slowa -->
# Czy potrafisz własnymi słowami powiedzieć, po co jest kaskada?

:::wlasne-slowa
Do czego służy Kaskada Celów? Podaj główny cel i dwie korzyści.
???
Główny cel: przekłada potrzeby interesariuszy na konkretne cele. Wspiera dopasowanie potrzeb organizacji do rozwiązań i usług IT.

Korzyści:
- definiuje wymierne cele na różnych poziomach;
- filtruje bazę wiedzy COBIT 5;
- komunikuje rolę aktywatorów;
- pomaga ustalać priorytety.
:::

**Wniosek:** porównaj swoją odpowiedź ze wzorcem i dopisz to, czego zabrakło.

:::wykladowca
Teraz Wasza kolej. Zamknijcie na chwilę notatki. Powiedzcie na głos albo zapiszcie, do czego służy Kaskada Celów. Podajcie główny cel i dwie korzyści. Nie musicie używać słów z podręcznika. Ważne, żeby sens był ten sam. Dopiero potem odsłońcie wzorzec i porównajcie. Jeśli czegoś zabrakło, dopiszcie to swoimi słowami. Takie wydobywanie z pamięci uczy mocniej niż ponowne czytanie. Dlatego robimy to przed pytaniami egzaminacyjnymi.
:::

---

<!-- slajd: wlasne-slowa -->
# Dlaczego nie wystarczy skopiować tabel z podręcznika?

:::wlasne-slowa
Dlaczego tabel kaskady nie można po prostu skopiować z podręcznika?
???
Bo każda organizacja ma inne priorytety, które zmieniają się w czasie. Tabele nie znają wielkości organizacji ani branży. Podział na P i S upraszcza płynną skalę. Dlatego najpierw dostosowujesz mapowanie, np. nadajesz celom wagi.
:::

**Wniosek:** dobra odpowiedź podaje co najmniej dwa powody ze strony 20.

:::wykladowca
To pytanie sprawdza zrozumienie, a nie pamięć. Wyobraźcie sobie, że kolega z pracy mówi: „Po co to zmieniać, przecież eksperci wszystko policzyli”. Co mu odpowiecie? Spróbujcie podać trzy powody. Podpowiem tylko, że jeden dotyczy czasu, drugi wielkości i branży, a trzeci liter P i S. Potem porównajcie się ze wzorcem. Jeśli umiecie przekonać kolegę, umiecie też uczyć innych. A to jest nasz cel na końcu kursu.
:::

---

<!-- slajd: egzamin -->
# Jak egzamin pyta o cel kaskady?

:::egzamin
Pytanie brzmi: **„do czego służy Kaskada Celów”**? Szukaj jednej z dwóch odpowiedzi (s. 17):
- przełożenie potrzeb interesariuszy na konkretne cele;
- wspieranie dopasowania potrzeb organizacji do rozwiązań i usług IT.

Wejścia i wyjścia procesu, architektura korporacyjna oraz role i odpowiedzialności to działania procesów, a nie cel kaskady.
:::

:::zapamietaj
Kaskada = tłumacz potrzeb na cele i most między biznesem a IT. Trzeba ją dostosować, nie kopiować.
:::

:::teza egzaminacyjna
sytuacja: W pytaniu pada „Kaskada Celów służy do…”, a cztery odpowiedzi brzmią równie fachowo.
pytanie: Jak szybko odrzucić dystraktory?
teza: Odrzucaj odpowiedzi o wejściach i wyjściach, rolach albo architekturze. Zostaw przełożenie potrzeb na cele albo dopasowanie do IT.
uzasadnienie: Cel kaskady opisuje FW-PL s. 17. Wejścia, wyjścia i role to elementy opisu procesów, czyli innej kategorii.
powiazanie: Zasada 1; Kaskada Celów; Procesy (aktywator 2)
przyklad: Odpowiedź „opisuje wejścia i wyjścia procesu” jest prawdziwa o procesach, ale nie o kaskadzie.
status: uproszczenie
refleksja: Jakie inne zdanie prawdziwe, ale z innej kategorii, mogłoby udawać cel kaskady?
:::

**Wniosek:** na pytanie o cel kaskady pasują tylko dwa sformułowania ze strony 17.

:::wykladowca
Na egzaminie to pytanie wraca w różnych przebraniach. Raz pyta się o „cel”, raz o „główny cel”, raz o to, „do czego służy”. Odpowiedź jest zawsze jedna z dwóch. Kaskada przekłada potrzeby interesariuszy na konkretne cele albo wspiera dopasowanie potrzeb organizacji do IT. Dystraktory brzmią mądrze, bo mówią o wejściach, wyjściach, rolach czy architekturze. To prawdziwe rzeczy, ale opisują procesy, a nie kaskadę. Pamiętajcie stały wzór dystraktorów: zdanie prawdziwe, ale z innej szuflady.
:::

---

<!-- slajd: rozwiazany -->
<!-- podpowiedz: Słowo „najpierw” każe szukać pierwszego kroku przy tabelach kaskady. -->
# Co Sikora powinien zrobić najpierw? Rozwiązujemy razem

:::rozwiazany
Kpt. Sikora chce skopiować z podręcznika tabele mapowania i wdrożyć w komendzie naraz wszystkie 17 celów związanych z informatyką. Co według COBIT 5 powinien zrobić **najpierw**?
- A. Wdrożyć wszystkie cele, bo tabele mapowania są uniwersalne
- B. Dostosować mapowanie do sytuacji komendy, np. nadać celom wagi i ustalić priorytety
- C. Wybrać cele, które najmniej kosztują
- D. Opisać wejścia i wyjścia procesów dla każdego celu
+++
**Krok 1 – co jest pytane?** Słowo-klucz: **najpierw**. Pytanie dotyczy pierwszego kroku przy korzystaniu z tabel kaskady.
+++
**Krok 2 – jaka kategoria COBIT?** To **sposób używania Kaskady Celów** (s. 20). Tabele są punktem wyjścia, a nie gotowym przepisem.
+++
**Krok 3 – eliminacja.** A – *fałsz*: tabele mapowania nie są uniwersalną prawdą. C – *zbyt wąskie*: patrzy tylko na koszt, a priorytety wynikają z celów i ryzyka. D – *inna kategoria*: wejścia i wyjścia to sprawa procesów, a nie cel kaskady.
+++
**Odpowiedź: B.** Dlaczego: pierwszy krok to zawsze dostosowanie mapowania do własnej organizacji, np. przez nadanie wag celom.
:::

**Wniosek:** przy słowie „najpierw” szukaj kroku, który podręcznik każe wykonać jako pierwszy.

:::wykladowca
Rozwiążmy to pytanie razem, krok po kroku. Najpierw przeczytajcie treść i znajdźcie słowo-klucz. Tutaj to słowo „najpierw”. Nie pytają o najlepszy efekt ani o najtańszą drogę. Pytają o pierwszy krok. Potem zastanówcie się, do której szuflady COBIT 5 to należy. Tu chodzi o sposób używania kaskady. Na końcu odrzucajcie odpowiedzi jedna po drugiej i mówcie, dlaczego odpadają. Każdy krok odsłaniajcie dopiero wtedy, gdy sami spróbujecie odpowiedzieć.
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący -->
# Co już umiesz o celu i używaniu kaskady?

- Umiesz powiedzieć, do czego służy Kaskada Celów: przekłada potrzeby na cele i łączy organizację z IT.
- Umiesz wymienić korzyści z kaskady, np. filtrowanie bazy wiedzy COBIT 5.
- Umiesz wyjaśnić, dlaczego tabele mapowania trzeba najpierw dostosować.

**Co dalej i dlaczego:** następna lekcja to 1.6 „Zasada 2 – Pokrycie całej organizacji i Podejście do Ładu”. Po niej będziesz umieć: wyjaśnić, że Ład nad IT dotyczy całej organizacji. Potrafię wymienić 4 komponenty Podejścia do Ładu i powiedzieć, co robi każda z 4 ról.

:::wykladowca
Podsumujmy. Kaskada Celów, po angielsku Goals Cascade, ma dwa zadania. Przekłada potrzeby interesariuszy na konkretne cele i wspiera dopasowanie organizacji do IT. Daje trzy korzyści: wymierne cele, filtrowanie bazy wiedzy i pokazanie roli aktywatorów. Pomaga też ustalać priorytety. Jej tabel nie stosujemy mechanicznie. Pierwszy krok to zawsze dostosowanie, na przykład nadanie celom wag. Powiedzcie te zdania na głos. Jeśli wychodzą bez patrzenia, przejdźcie do ćwiczeń.
:::
