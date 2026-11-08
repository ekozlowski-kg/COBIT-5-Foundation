---
id: m0-07-cobit-standardy
modul: M0
modulNazwa: Moduł 0 – Fundamenty
temat: COBIT 5 na tle innych standardów
lekcja: "0.7"
dzien: 2
sylabus: [M0-00-07]
minuty: 26
zgadnij: [q-pre-m0-07-cobit-standardy]
cwiczenia: [q-m0-07-01, q-m0-07-02]
wprowadza: [itil, iso-27001, cobit-2019]
wymaga: [m0-00-zanim-zaczniesz, m0-06-lad-zarzadzanie]
cel: "Potrafię powiedzieć, czym COBIT 5 różni się od ITIL, ISO/IEC 27001 i COBIT 2019 i że łączy inne standardy, a nie je zastępuje."
priorytet: 2
zapas: [q-zap-m0-07-cobit-standardy-1, q-zap-m0-07-cobit-standardy-2]
wielkiObraz: 3
twierdzenia: ["COBIT 5 to struktura ramowa Ładu i Zarządzania informatyką w całej organizacji.", "COBIT 5 integruje inne standardy, a nie je zastępuje.", "ITIL dotyczy zarządzania usługami IT.", "ISO/IEC 27001 to norma bezpieczeństwa informacji z certyfikacją.", "COBIT 5 ma 5 zasad, 7 kategorii aktywatorów i 37 procesów."]
typowePytania: [{"pytanie": "Skoro mamy COBIT 5, to ITIL możemy wyrzucić?", "odpowiedz": "Nie. COBIT 5 nie zastępuje innych standardów, tylko je łączy w całość. ITIL dalej mówi, jak prowadzić usługi IT na co dzień."}, {"pytanie": "Czy komenda może dostać certyfikat COBIT 5?", "odpowiedz": "Nie. Organizacji nie certyfikuje się na COBIT. Certyfikat Foundation dostaje osoba, która zda egzamin."}, {"pytanie": "W internecie piszą o 40 celach. To ile jest procesów?", "odpowiedz": "W COBIT 5 jest 37 procesów. 40 celów to COBIT 2019, czyli inna wersja, o którą egzamin nie pyta."}]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "etap 3 – do przeglądu użytkownika"}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Kto spina wiele przepisów w jedną całość?

Dla kierowcy obowiązuje kodeks drogowy, dla budowlańca prawo budowlane, a dla restauracji przepisy sanepidu.

Ktoś jednak musi spiąć to wszystko w strategię miasta, czyli plan na lata. Ktoś musi też sprawdzać, czy całość działa.

COBIT 5 robi to samo dla informatyki w organizacji: **spina** całość.

**Wniosek:** wiele szczegółowych przepisów potrzebuje jednej ramy, która pokazuje cel i odpowiedzialność za całość.

:::wykladowca
Wyobraźcie sobie miasto. Kierowców obowiązuje kodeks drogowy. Budowlańców obowiązuje prawo budowlane. Restauracje pilnuje sanepid. Każdy z tych przepisów jest dobry w swoim kawałku. Ale żaden z nich nie mówi, dokąd zmierza całe miasto i kto za to odpowiada. Do tego potrzebna jest strategia miasta i ktoś, kto sprawdza, czy całość działa. W informatyce jest podobnie. Istnieje wiele standardów, a każdy opisuje swój fragment. COBIT 5 jest ramą, która spina je w całość. Dziś zobaczymy, jak to wygląda.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający -->
<!-- podpowiedz: Zapamiętaj trzy liczby: 5 zasad, 7 aktywatorów, 37 procesów. -->
# Czym jest COBIT 5 i dla jakich organizacji powstał?

[[cobit-5|COBIT 5]] to [[struktura-ramowa]] (po ludzku: „rama”, czyli uporządkowany zestaw zasad i wskazówek). Opracowała ją w 2012 roku ISACA (wym. „ajsaka”), międzynarodowe stowarzyszenie specjalistów od kontroli i nadzoru nad informatyką. Służy do [[lad|Ładu]] i [[zarzadzanie|Zarządzania]] informatyką w **całej** organizacji. Ład wyznacza kierunek, Zarządzanie go realizuje.

- 5 zasad (podstawowych reguł)
- 7 kategorii [[aktywator|aktywatorów]] (poznasz je w lekcji 1.8), czyli tego, co pomaga informatyce działać dobrze
- 37 [[proces|procesów]] (stałych sposobów pracy): 5 Ładu + 32 Zarządzania

Nadaje się dla firm i organizacji non-profit, czyli niedziałających dla zysku, np. fundacji. Nadaje się też dla sektora publicznego, czyli urzędów i służb, np. PSP.

:::zrodlo FW-PL 13
:::

**Wniosek:** COBIT 5 to jedna rama Ładu i Zarządzania informatyką dla organizacji każdego rodzaju: 5 zasad, 7 aktywatorów, 37 procesów.

:::wykladowca
COBIT 5 czytamy „kołbit pięć”. Opracowało go w 2012 roku stowarzyszenie ISACA, czytamy „ajsaka”. To międzynarodowa organizacja specjalistów od kontroli i nadzoru nad informatyką. Po angielsku COBIT 5 to Framework, czytamy „frejmłerk”. Na polskim egzaminie: Struktura ramowa. Służy do Ładu i Zarządzania informatyką w całej organizacji, a nie tylko w dziale IT. Zapamiętajcie trzy liczby: pięć zasad, siedem aktywatorów i 37 procesów. Podręcznik na stronie 13 mówi też, dla kogo jest COBIT 5. Dla firm, organizacji non-profit i sektora publicznego, czyli także dla PSP.
:::

:::sb skrot
**COBIT** (wym. „kołbit”) – dawniej skrót od *Control Objectives for Information and related Technology*, czyli „Cele kontrolne dotyczące informacji i powiązanych technologii”. W COBIT 5 używa się już tylko akronimu, bez rozwijania (FW-PL s. 90).
**ISACA** (wym. „ajsaka”) – stowarzyszenie, które wydaje COBIT 5. Dziś także używa tylko akronimu.
:::

:::pytanie-uczestnika
pytanie: Czy COBIT 5 jest tylko dla wielkich korporacji?
odpowiedz: Nie. Podręcznik mówi, że metodyka ma charakter ogólny i nadaje się dla przedsiębiorstw każdej wielkości: komercyjnych, non-profit i publicznych (FW-PL s. 13).
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku -->
<!-- podpowiedz: Każdy standard ma swój kawałek, a COBIT 5 patrzy na całość od góry. -->
# Czy jeden standard wystarczy, żeby komenda miała porządek w informatyce?

:::kontekst zycie
**Ulotki i lekarz rodzinny.** Każda ulotka mówi, jak brać jeden lek. Lekarz rodzinny patrzy na całe zdrowie i decyduje, które leki brać razem i po co. Ulotek nie wyrzuca, tylko łączy ich wskazówki w jeden plan leczenia.
:::

:::kontekst biuro
**Biuro rachunkowe.** Księgowa stosuje przepisy podatkowe, a kadrowa – kodeks pracy. Szefowa biura pilnuje, żeby całość dawała klientom wartość i żeby było wiadomo, kto za co odpowiada.
:::

:::kontekst organizacja
**Szpital.** Laboratorium ma swoje normy jakości, apteka swoje, a informatycy swoje. Dyrekcja potrzebuje jednej ramy, która pokaże, po co to wszystko i kto o czym decyduje.
:::

:::kontekst psp
**Sikora przynosi książkę**
Kpt. Marek Sikora kładzie na stole podręcznik COBIT 5. Komenda szuka porządku po awarii systemu alarmowego Syrena. Na półce stoją już inne standardy, czyli powszechnie przyjęte, spisane sposoby robienia czegoś. „[[itil|ITIL]] mówi, jak prowadzić usługi IT (informatyczne), np. jak przyjmować zgłoszenia o awarii” – tłumaczy Sikora. „[[iso-27001|ISO 27001]] mówi, jak chronić informacje, np. numery telefonów ochotników” – dodaje. [[cobit-5|COBIT 5]] spina całość od góry: kto decyduje, po co komendzie informatyka i czy daje jej wartość.
:::

:::kontekst it
**COBIT 5.** Podręcznik pokazuje, gdzie inne standardy „wchodzą” w COBIT 5. ITIL V3 2011 obejmuje część procesów domen DSS (Dostarczaj, Obsługuj i Wspieraj) i BAI (Twórz, Nabywaj i Wdrażaj). Obejmuje też niektóre procesy APO (Dostosuj, Planuj i Organizuj). ISO/IEC 27000 obejmuje procesy bezpieczeństwa i ryzyka w domenach EDM, APO i DSS (FW-PL s. 60; Rysunek 25, w podręczniku Ilustracja 25, s. 61).
:::

**Wniosek:** każdy standard dobrze opisuje swój kawałek, a COBIT 5 patrzy na całość od góry i wskazuje, gdzie kawałki pasują.

:::wykladowca
Zobaczcie ten sam układ w kilku miejscach. Ulotka mówi o jednym leku, a lekarz rodzinny układa z ulotek jeden plan. W biurze rachunkowym każdy stosuje swoje przepisy, a szefowa pilnuje całości. W szpitalu każdy dział ma swoje normy, a dyrekcja potrzebuje jednej ramy. W komendzie Sikora pokazuje dwa standardy z półki: ITIL i ISO 27001. COBIT 5 ich nie wyrzuca. Ostatni przykład pochodzi z podręcznika. Na stronie 60 opisano, które części COBIT 5 pokrywa ITIL, a które norma ISO 27000.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający -->
<!-- podpowiedz: COBIT 5 dokłada ramę nad innymi standardami – nikogo nie wyrzuca. -->
# Czy COBIT 5 zastępuje inne standardy?

:::atom
twierdzenie: COBIT 5 **integruje** inne standardy, a nie je zastępuje.
poLudzku: COBIT 5 zbiera inne zbiory zasad w jedną całość i zostawia je w użyciu.
zycie: Segregator rodzinny trzyma razem umowę za prąd, polisę auta i książeczkę zdrowia; żadnej z nich nie wyrzucasz.
komenda: Sikora dalej prowadzi zgłoszenia według ITIL, a COBIT 5 mówi, kto w komendzie o tym decyduje.
sprawdz: F :: Po wprowadzeniu COBIT 5 komenda powinna przestać stosować ITIL. :: COBIT 5 łączy standardy w całość; ITIL dalej działa w swoim obszarze.
:::

**Wniosek:** COBIT 5 łączy standardy w całość i zostawia każdy z nich w jego obszarze.

:::wykladowca
To jest najważniejsze zdanie lekcji. COBIT 5 integruje inne standardy, a nie je zastępuje. Integrować znaczy łączyć w jedną całość. Pomyślcie o segregatorze z domowymi dokumentami. Trzymacie w nim umowę za prąd, polisę auta i książeczkę zdrowia. Segregator niczego nie wyrzuca, tylko porządkuje. W komendzie Sikora dalej obsługuje zgłoszenia według ITIL. COBIT 5 dodaje odpowiedź na inne pytanie: kto o tym decyduje i po co. Na egzaminie odpowiedź „COBIT 5 zastępuje inne standardy” jest zawsze błędna.
:::

---

<!-- slajd: mapa -->
# Gdzie to leży w COBIT 5?

:::mapa integracja
:::

To, że COBIT 5 łączy inne standardy, to [[zasada-3|Zasada 3]] (poznasz ją w lekcji 1.1). Jej pełna nazwa to Zastosowanie Pojedynczej Zintegrowanej Struktury Ramowej. Po ludzku: jedna rama, która zbiera w sobie wszystkie inne.

:::wykladowca
Na mapie COBIT 5 łączenie standardów ma swoje miejsce. To Zasada 3. Po angielsku Applying a Single Integrated Framework, czytamy „aplajing e singl integrejtyd frejmłerk”. Na egzaminie polskim: Zastosowanie Pojedynczej Zintegrowanej Struktury Ramowej. Nazwa jest długa, ale sens prosty. Jedna rama zbiera w sobie inne standardy i wytyczne. Zapamiętajcie numer zasady i słowo „zintegrowana”. Pięć zasad poznacie razem w lekcji 1.1, a Zasadę 3 dokładniej w lekcji 1.7.
:::

:::sb kontrowersja
Ta sama zasada ma dwie polskie nazwy. Egzamin PL: **Zastosowanie Pojedynczej Zintegrowanej Struktury Ramowej**. Podręcznik PL: „Stosowanie jednej zintegrowanej metodyki” (FW-PL s. 25). Różnica wynika z przekładu słowa Framework, które ma status **C – sporny**.
:::

---

<!-- slajd: porownanie -->
<!-- typ SD: E – porównawczy -->
# Który standard odpowiada na jakie pytanie?

| Standard | Czego dotyczy | Jedno zdanie |
|---|---|---|
| **COBIT 5** | Ład i Zarządzanie IT (informatyką) w całej organizacji | „czy IT tworzy wartość i kto za to odpowiada” |
| [[itil|ITIL]] | zarządzanie usługami IT (np. pocztą, obsługą zgłoszeń o awarii) | „jak dobrze świadczyć usługi IT” |
| [[iso-27001|ISO/IEC 27001]] | bezpieczeństwo informacji, certyfikacja (oficjalne potwierdzenie przez niezależną firmę, że spełniasz normę) | „jak chronić informację według normy” |
| TOGAF (standard architektury) | architektura korporacyjna (plan, jak wszystkie systemy firmy do siebie pasują) | „jak projektować architekturę” |
| PRINCE2 (metodyka projektów) / PMBOK (zbiór wiedzy o projektach) | zarządzanie [[projekt|projektami]] | „jak prowadzić projekt” |

COBIT 5 integruje te standardy, czyli łączy je w jedną całość (Zasada 3). Nie zastępuje ich.

:::zrodlo FW-PL 15
:::

**Wniosek:** każdy standard odpowiada na inne pytanie, a COBIT 5 na pytanie o wartość i odpowiedzialność za całość.

:::wykladowca
Przeczytajmy tę tabelę wiersz po wierszu. COBIT 5 pyta: czy informatyka tworzy wartość i kto za to odpowiada? ITIL pyta: jak dobrze świadczyć usługi informatyczne? ISO/IEC 27001 pyta: jak chronić informację według normy? TOGAF, czytamy „togaf”, pyta: jak projektować architekturę, czyli układ systemów? PRINCE2, czytamy „prins tu”, i PMBOK, czytamy „pimbok”, pytają: jak prowadzić projekt? Podręcznik na stronie 15 wymienia te standardy jako te, z którymi COBIT 5 jest powiązany. Zapamiętajcie: każdy ma swój kawałek, a COBIT 5 spina całość.
:::

:::sb skrot
**ITIL** (wym. „ajtil”) – Information Technology Infrastructure Library, biblioteka infrastruktury informatycznej.
**ISO** (wym. „ajsoł” albo „izo”) – International Organization for Standardization, Międzynarodowa Organizacja Normalizacyjna. **IEC** – International Electrotechnical Commission, Międzynarodowa Komisja Elektrotechniczna.
**TOGAF** – The Open Group Architecture Framework. **PRINCE2** – Projects in Controlled Environments 2. **PMBOK** – Project Management Body of Knowledge.
:::

:::teza porownawcza
sytuacja: Ola Dudek pyta: „Skoro ITIL opisuje obsługę zgłoszeń, a COBIT 5 też ma proces o zgłoszeniach, to który jest ważniejszy?”
pytanie: Czy ITIL i COBIT 5 konkurują ze sobą o te same zadania?
teza: Nie. ITIL szczegółowo opisuje część obszarów, które COBIT 5 obejmuje szerzej. COBIT 5 wskazuje, gdzie te wskazówki pasują w całości.
uzasadnienie: Podręcznik podaje, że ITIL V3 2011 i ISO/IEC 20000 obejmują podzbiór procesów domen DSS i BAI oraz niektóre procesy APO.
powiazanie: Zasada 3; domeny DSS, BAI i APO
przyklad: Ola obsługuje awarię Syreny według ITIL, a komendantka Wrzos ustala, jak szybko awarie mają być usuwane.
status: oficjalne
zrodlo: FW-PL 60
refleksja: Jaka część pracy wydziału Sikory wychodzi poza ITIL i wymaga decyzji Ładu?
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający -->
<!-- podpowiedz: ITIL to codzienne usługi informatyczne, np. pomoc przy awarii. -->
# Czego dotyczy ITIL i czym różni się od COBIT 5?

:::atom
twierdzenie: [[itil|ITIL]] dotyczy zarządzania **usługami** IT.
poLudzku: ITIL podpowiada, jak na co dzień dobrze obsługiwać ludzi, którzy korzystają z komputerów i programów.
zycie: Serwis samochodowy ma ustalone zasady: przyjęcie auta, diagnoza, naprawa, telefon do klienta.
komenda: Ola Dudek przyjmuje zgłoszenie o awarii Syreny i obsługuje je krok po kroku według ITIL.
sprawdz: F :: ITIL to inna nazwa COBIT 5. :: ITIL dotyczy usług IT, a COBIT 5 Ładu i Zarządzania informatyką w całej organizacji.
:::

**Wniosek:** ITIL mówi, jak świadczyć usługi informatyczne na co dzień, a COBIT 5 – po co i kto o nich decyduje.

:::wykladowca
Teraz ITIL, czytamy „ajtil”. Skrót pochodzi od Information Technology Infrastructure Library. ITIL dotyczy usług informatycznych. Usługa to coś, z czego korzystają ludzie, na przykład poczta albo pomoc przy awarii. Pomyślcie o serwisie samochodowym. Przyjmuje auto, diagnozuje usterkę, naprawia i dzwoni do klienta. Zawsze w tej samej kolejności. W komendzie Ola Dudek obsługuje według ITIL zgłoszenie o awarii Syreny. Na egzaminie pamiętajcie, że ITIL nie jest inną nazwą COBIT 5. To osobny standard o węższym zakresie.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający -->
<!-- podpowiedz: ISO/IEC 27001 to norma o ochronie informacji – organizacja może dostać na nią certyfikat. -->
# Czego dotyczy ISO/IEC 27001 i co daje organizacji?

:::atom
twierdzenie: [[iso-27001|ISO/IEC 27001]] to norma **bezpieczeństwa** informacji z certyfikacją.
poLudzku: To spisane zasady, jak chronić dane przed wyciekiem, utratą i zniszczeniem.
zycie: Sejf na dokumenty w domu i zasada, że klucz ma tylko dwóch domowników.
komenda: Numery telefonów ochotników muszą być chronione, żeby nikt obcy ich nie zmienił ani nie wykradł.
sprawdz: P :: Organizacja może uzyskać certyfikat na zgodność z ISO/IEC 27001. :: Tak, w przeciwieństwie do COBIT 5 to norma z certyfikacją organizacji.
:::

**Wniosek:** ISO/IEC 27001 opisuje ochronę informacji i pozwala organizacji uzyskać certyfikat zgodności.

:::wykladowca
ISO/IEC 27001 czytamy „ajsoł aj i si dwadzieścia siedem tysięcy jeden”. ISO to Międzynarodowa Organizacja Normalizacyjna, a IEC to Międzynarodowa Komisja Elektrotechniczna. Ta norma dotyczy bezpieczeństwa informacji. Chodzi o to, żeby dane nie wyciekły, nie zginęły i nie zostały zniszczone. W domu to sejf i zasada, że klucz mają tylko dwie osoby. W komendzie chronimy na przykład numery telefonów ochotników. Ważna różnica: organizacja może dostać certyfikat zgodności z ISO/IEC 27001. Certyfikatu COBIT 5 dla organizacji nie ma.
:::

:::progresja
0: Ustawiasz kod blokady w swoim telefonie.

1: W biurze akta pracowników leżą w szafie zamykanej na klucz.

2: Firma nadaje pracownikom uprawnienia: każdy widzi tylko te dane, których potrzebuje.

3: Komenda chroni numery telefonów ochotników w Syrenie i zapisuje, kto je zmieniał.

4: Kierownictwo określa, jakie ryzyko utraty danych jest do przyjęcia, i rozlicza z tego zespół.

5: W COBIT 5 tym obszarem zajmuje się m.in. APO13 (Zarządzanie bezpieczeństwem), a szczegółowe wymagania dają normy ISO/IEC serii 27000.
:::

---

<!-- slajd: nie-jest -->
<!-- typ SD: E – porównawczy (czym pojęcie nie jest) -->
# Czym COBIT 5 NIE jest?

- **≠ norma do certyfikacji organizacji.** Firmy nie certyfikuje się „na COBIT”. Certyfikat Foundation (poziom podstawowy, czyli ten egzamin) dostaje osoba.
- **≠ szczegółowa instrukcja.** To rama, którą trzeba dostosować.
- **≠ tylko dla działu IT.** Obejmuje całą organizację (Zasada 2, poznasz ją w dniu 3, w lekcji 1.6).
- **≠ [[cobit-2019|COBIT 2019]].** To inna, nowsza wersja z innymi pojęciami.

**Wniosek:** COBIT 5 to rama dla całej organizacji, którą się dopasowuje, a nie norma z certyfikatem ani instrukcja krok po kroku.

:::wykladowca
Teraz cztery rzeczy, którymi COBIT 5 nie jest. Po pierwsze, to nie norma do certyfikacji organizacji. Certyfikat Foundation dostaje osoba, która zda egzamin, a nie komenda. Po drugie, to nie szczegółowa instrukcja. Trzeba go dopasować do swojej organizacji. Po trzecie, nie jest tylko dla działu informatyki. Obejmuje całą organizację. To Zasada 2, poznacie ją w dniu 3. Po czwarte, to nie COBIT 2019. Nazwa podobna, ale pojęcia są inne. Każdy z tych punktów bywa błędną odpowiedzią na egzaminie.
:::

:::teza krytyczna
sytuacja: Komendantka Wrzos pyta Sikorę: „Skoro mamy COBIT 5, to czy on nam powie, jak ustawić zapasowy serwer Syreny?”
pytanie: Czy COBIT 5 wystarczy, żeby rozwiązać każdy problem informatyczny komendy?
teza: Nie. COBIT 5 mówi, co trzeba zapewnić i kto za to odpowiada. Szczegółów technicznych trzeba szukać w innych standardach i u specjalistów.
uzasadnienie: COBIT 5 sam wskazuje inne standardy jako źródła szczegółowych wytycznych (FW-PL s. 60). Ocena, kiedy to nie wystarcza, to wniosek autora kursu.
powiazanie: Zasada 3; granice COBIT 5
przyklad: COBIT 5 każe zapewnić ciągłość działania Syreny. Konfigurację zapasowego serwera Sikora ustala z dostawcą Kwant-Sygnał.
status: opinia
refleksja: Do kogo w komendzie zwrócisz się po szczegóły techniczne, a do kogo po decyzję, ile przestoju jest do przyjęcia?
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający -->
<!-- podpowiedz: Jeśli materiał mówi o „40 celach” albo „czynnikach projektowych”, to COBIT 2019. -->
# Jak odróżnić COBIT 2019 od COBIT 5?

:::atom
twierdzenie: [[cobit-2019|COBIT 2019]] to nowsza wersja z **innymi** pojęciami; egzamin dotyczy COBIT 5.
poLudzku: Nazwa jest podobna, ale słowa i liczby są inne, więc łatwo się pomylić.
zycie: Instrukcja do nowego modelu pralki ma inne przyciski niż instrukcja do Twojego starego modelu.
komenda: Sikora odkłada broszurę o COBIT 2019, bo komenda uczy się do egzaminu z COBIT 5.
sprawdz: F :: „40 celów Ładu i Zarządzania” to pojęcie z COBIT 5. :: To pojęcie z COBIT 2019; COBIT 5 ma 37 procesów.
:::

**Wniosek:** COBIT 2019 rozpoznasz po innych słowach i liczbach, a egzamin pyta wyłącznie o COBIT 5.

:::wykladowca
COBIT 2019 czytamy „kołbit dwa tysiące dziewiętnaście”. To nowsza wersja tej samej rodziny. Nazwa jest prawie taka sama, ale pojęcia i liczby są inne. To jak instrukcja do nowego modelu pralki. Przyciski są w innych miejscach, więc stara wiedza nie pasuje. Nasz egzamin dotyczy wyłącznie COBIT 5. Jeśli w materiale widzicie „40 celów Ładu i Zarządzania”, to jest COBIT 2019. W COBIT 5 mówimy o 37 procesach. Sikora w naszej historii od razu odkłada broszurę o COBIT 2019 na bok.
:::

:::pytanie-uczestnika
pytanie: Skąd mam wiedzieć, którą wersję czytam?
odpowiedz: Sprawdź słowa i liczby. Materiał o COBIT 5 mówi o 5 zasadach, 7 aktywatorach i 37 procesach. Materiał o COBIT 2019 mówi o 40 celach, komponentach i czynnikach projektowych.
:::

---

<!-- slajd: pulapka -->
<!-- typ SD: E – porównawczy (pułapka) -->
<!-- podpowiedz: Sprawdź wersję materiału, zanim zaczniesz się z niego uczyć. -->
# ⚠ Dlaczego materiały z internetu mogą Cię zmylić?

:::pulapka
Większość darmowych materiałów dotyczy **COBIT 2019**. Jeśli widzisz:
- „40 celów Ładu i Zarządzania”,
- „komponenty systemu ładu”,
- „czynniki projektowe (design factors)”,

to nie jest COBIT 5. Na egzaminie takie pojęcia są błędnymi odpowiedziami.
:::

:::kontekst zycie
**Nowe wydanie książki kucharskiej.** Egzamin zdajesz z przepisów z piątego wydania. W internecie krążą przepisy z nowszego wydania. Wyglądają podobnie, ale proporcje i nazwy dań są inne.
:::

:::kontekst psp
**Kasia się myli**
Kasia Nowik znajduje w internecie listę „40 celów Ładu i Zarządzania” i uczy się jej na pamięć. Sikora prostuje: „To COBIT 2019. Na egzaminie z COBIT 5 liczy się 37 procesów, a nie 40 celów”.
:::

**Wniosek:** zanim zaczniesz się uczyć z materiału z internetu, sprawdź, czy dotyczy COBIT 5.

:::wykladowca
Uwaga, to praktyczna pułapka. Większość darmowych materiałów w internecie dotyczy nowszej wersji, czyli COBIT 2019. Pojawiają się w nich słowa: czterdzieści celów, komponenty systemu ładu, czynniki projektowe. Po angielsku design factors, czytamy „dizajn faktors”. Te pojęcia nie istnieją w COBIT 5. Na egzaminie są błędnymi odpowiedziami. Kasia Nowik nauczyła się listy czterdziestu celów i zmarnowała wieczór. Zanim zaczniecie się uczyć z jakiegoś materiału, sprawdźcie, czy mówi o 37 procesach i siedmiu aktywatorach.
:::

---

<!-- slajd: wlasne-slowa -->
<!-- typ SD: F – syntetyzujący (wydobywanie z pamięci) -->
# Czy potrafisz w dwóch zdaniach odróżnić COBIT 5 od ITIL i ISO/IEC 27001?

:::wlasne-slowa
W dwóch zdaniach: czym COBIT 5 różni się od ITIL i ISO/IEC 27001?
???
COBIT 5 to struktura ramowa Ładu i Zarządzania IT w całej organizacji: czy IT tworzy wartość i kto odpowiada. ITIL dotyczy zarządzania usługami IT, a ISO/IEC 27001 to norma bezpieczeństwa informacji z certyfikacją. COBIT je integruje.
:::

**Wniosek:** jeśli w Twojej odpowiedzi każdy standard ma swój obszar, a COBIT 5 je łączy, różnica jest jasna.

:::wykladowca
Teraz Wy. Zakryjcie tabelę z poprzednich slajdów. Powiedzcie w dwóch zdaniach, czym COBIT 5 różni się od ITIL i od ISO/IEC 27001. Pierwsze zdanie niech mówi, czego dotyczy COBIT 5. Drugie zdanie niech mówi, czego dotyczą pozostałe dwa standardy. Spróbujcie użyć słów: usługi, bezpieczeństwo, certyfikat, integruje. Nie musicie mówić idealnie. Ważne, żeby każdy standard miał swój obszar, a COBIT 5 je łączył. Potem porównajcie swoją odpowiedź z wzorcem.
:::

---

<!-- slajd: wlasne-slowa -->
<!-- typ SD: F – syntetyzujący (wydobywanie z pamięci) -->
# Dlaczego COBIT 5 łączy inne standardy, zamiast je zastąpić?

:::wlasne-slowa
Dlaczego COBIT 5 łączy inne standardy, zamiast je zastąpić?
???
Bo każdy standard dobrze opisuje swój kawałek, np. ITIL usługi, a ISO/IEC 27001 bezpieczeństwo. Brakuje jednak kogoś, kto patrzy na całość i mówi, po co to wszystko i kto decyduje. Tę rolę bierze COBIT 5, a resztę zostawia na miejscu.
:::

**Wniosek:** odpowiedź „dlaczego” łączy dwie myśli: każdy standard jest dobry w swoim kawałku i komuś trzeba widzieć całość.

:::wykladowca
To pytanie sprawdza zrozumienie, a nie pamięć. Pomyślcie o lekarzu rodzinnym z wcześniejszego przykładu. Dlaczego nie wyrzuca ulotek leków? Bo każda ulotka mówi coś ważnego o jednym leku. Czego brakuje, gdy mamy same ulotki? Kogoś, kto patrzy na całość. Teraz przenieście to na COBIT 5, ITIL i ISO/IEC 27001. Odpowiedzcie własnymi słowami, a dopiero potem odsłońcie wzorzec. Jeśli Wasza odpowiedź mówi o całości, celu i odpowiedzialności, jesteście blisko wzorca.
:::

---

<!-- slajd: rozwiazany -->
<!-- typ SD: D – przypadku (rozwiązany przykład) -->
<!-- podpowiedz: Słowo „integruje” to klucz – szukaj odpowiedzi, w której nikt niczego nie wyrzuca. -->
# Rozwiązujemy razem: co zrobić z ITIL po przyjęciu COBIT 5?

:::rozwiazany
Komenda przyjmuje COBIT 5. Komendantka Wrzos pyta Sikorę, co teraz zrobić z ITIL, według którego jego wydział obsługuje zgłoszenia. Która odpowiedź jest **zgodna z COBIT 5**?
- A. Wycofać ITIL, bo COBIT 5 zastępuje wszystkie inne standardy
- B. Dalej stosować ITIL, a COBIT 5 połączy go z innymi standardami w jedną całość
- C. Uzyskać dla komendy certyfikat COBIT 5 zamiast ITIL
- D. Stosować wyłącznie ITIL, bo COBIT 5 jest tylko dla audytorów
+++
**Krok 1 – co jest pytane?** Słowa-klucze: zgodna z COBIT 5. Szukasz odpowiedzi, która pasuje do tego, jak COBIT 5 traktuje inne standardy.
+++
**Krok 2 – jaka kategoria COBIT?** Integracja standardów, czyli Zasada 3: jedna rama, która łączy inne standardy (s. 15).
+++
**Krok 3 – eliminacja.** A – *odwrócone*: COBIT 5 integruje standardy, a nie je zastępuje. C – *fałsz*: organizacji nie certyfikuje się na COBIT 5. D – *fałsz*: COBIT 5 dotyczy całej organizacji, a nie tylko audytorów.
+++
**Odpowiedź: B.** Dlaczego: COBIT 5 zostawia ITIL w jego obszarze i spina go z innymi standardami w jedną ramę.
:::

**Wniosek:** odpowiedzi „zastępuje”, „certyfikat COBIT 5 dla organizacji” i „tylko dla audytorów” odrzucaj od razu.

:::wykladowca
Rozwiążmy to razem. Słowa-klucze to „zgodna z COBIT 5”. Szukamy więc tego, jak COBIT 5 traktuje inne standardy. Przypominamy sobie kategorię: Zasada 3, czyli integracja. Teraz eliminacja. Odpowiedź A mówi „zastępuje”, a to odwrotność prawdy. Odpowiedź C mówi o certyfikacie COBIT 5 dla komendy, a takiego certyfikatu nie ma. Odpowiedź D mówi, że COBIT 5 jest tylko dla audytorów, a on obejmuje całą organizację. Zostaje B. Zapamiętajcie te trzy błędne wzory, bo wrócą w innych pytaniach.
:::

---

<!-- slajd: zapamietaj -->
<!-- typ SD: F – syntetyzujący -->
# Do zapamiętania: 5 zasad, 7 aktywatorów, 37 procesów

:::zapamietaj
COBIT 5: **5 zasad, 7 aktywatorów, 37 procesów, 6 poziomów zdolności (0–5)**. Poziomy zdolności to skala, na której ocenia się, jak dobrze działa proces (poznasz ją w dniu 7, w lekcji 4.2).
:::

:::wykladowca
Zapiszcie te cztery liczby. Pięć zasad. Siedem aktywatorów. 37 procesów. Sześć poziomów zdolności, od zera do pięciu. Ostatnia liczba jest nowa. Poziom zdolności, po angielsku capability level, czytamy „kejpabiliti lewel”, to ocena, jak dobrze działa proces. Zero znaczy, że proces nie osiąga celu. Pięć znaczy, że jest stale doskonalony. Szczegóły poznacie w dniu 7, w lekcji 4.2. Na razie wystarczy, że te cztery liczby powiecie bez zastanowienia. Na egzaminie pojawiają się bardzo często.
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący -->
# Co już umiesz: COBIT 5 spina standardy, a nie je zastępuje

- Umiesz powiedzieć, czym jest COBIT 5 i podać jego trzy liczby: 5, 7, 37.
- Umiesz odróżnić COBIT 5 od ITIL i ISO/IEC 27001.
- Umiesz rozpoznać pojęcia z COBIT 2019, które na egzaminie są błędne.

**Co dalej i dlaczego:** w lekcji 0.8 poznasz egzamin i jego pułapki, żeby nazwy z podręcznika Cię nie zmyliły.

:::teza egzaminacyjna
teza: Gdy odpowiedź mówi, że COBIT 5 zastępuje inny standard albo daje organizacji certyfikat, jest błędna.
uzasadnienie: COBIT 5 opisuje się jako jedną zintegrowaną strukturę, która łączy inne metodyki i normy (FW-PL s. 25). Certyfikaty ISACA dotyczą osób.
powiazanie: Zasada 3
przyklad: „Komenda uzyskała certyfikat zgodności z COBIT 5” – odpowiedź błędna. „Komenda łączy ITIL i ISO/IEC 27001 w ramach COBIT 5” – poprawna.
status: uproszczenie
refleksja: Jak krótko wyjaśnisz koledze, dlaczego „certyfikat COBIT 5 dla komendy” to błąd?
:::

:::wykladowca
Podsumujmy. COBIT 5 to struktura ramowa, po angielsku Framework, Ładu i Zarządzania informatyką w całej organizacji. Ma pięć zasad, siedem aktywatorów i 37 procesów. Nie zastępuje innych standardów, tylko je łączy. ITIL dotyczy usług informatycznych. ISO/IEC 27001 dotyczy bezpieczeństwa informacji i daje organizacji certyfikat. COBIT 2019 to inna wersja z innymi pojęciami. Przeczytajcie jeszcze tezę egzaminacyjną. Zawiera dwa błędne wzory, które pojawiają się w odpowiedziach bardzo często. W następnej lekcji poznacie sam egzamin.
:::
