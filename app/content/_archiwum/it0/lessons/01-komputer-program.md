---
id: it0-01-komputer-program
modul: IT0
modulNazwa: Podstawy cyfrowe
temat: "Dlaczego ten sam telefon raz robi zdjęcia, a raz płaci rachunki? Sprzęt i program"
lekcja: "0A.1"
dzien: 0
sylabus: [M0-00-07]
minuty: 13
priorytet: 2
wielkiObraz: 4
cel:
  - "Potrafię odróżnić sprzęt (hardware) od oprogramowania (software) i podać przykład każdego."
  - "Potrafię powiedzieć, czym system operacyjny (operating system) różni się od aplikacji (application)."
wprowadza: [it-hardware, it-software, it-system-operacyjny, it-aplikacja]
wymaga: []
twierdzenia: ["Sprzęt (hardware) to wszystko w urządzeniu, co można dotknąć.", "Oprogramowanie (software) to zapisane polecenia, które mówią sprzętowi, co ma robić.", "System operacyjny uruchamia urządzenie i pozwala działać innym programom.", "Aplikacja to program, którego człowiek używa do konkretnego zadania."]
typowePytania: [{"pytanie": "Czy Word to system operacyjny?", "odpowiedz": "Nie. Word to aplikacja do pisania, która działa w systemie operacyjnym, np. w Windowsie."}, {"pytanie": "Skoro telefon ma aplikacje, to czy telefon jest aplikacją?", "odpowiedz": "Nie. Telefon to sprzęt. Aplikacje to programy zapisane w telefonie."}, {"pytanie": "Czy „system Syrena” to system operacyjny?", "odpowiedz": "Nie. To aplikacja do wysyłania alarmów. W pracy słowo „system” zwykle oznacza właśnie aplikację."}]
zgadnij: [q-pre-it0-01]
cwiczenia: [q-it0-01-01, q-it0-01-02, q-it0-01-03]
zapas: [q-zap-it0-01-1, q-zap-it0-01-2]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "Wersja robocza – do przeglądu przez człowieka (czy laik zrozumie początek, czy didaskalia da się wypowiedzieć)."}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy; krok 1: pokaż zjawisko -->
# Jak to możliwe, że jeden telefon robi zdjęcia, dzwoni i płaci?

Masz w ręku jeden telefon. Rano robisz nim zdjęcie. W południe dzwonisz do przychodni. Wieczorem płacisz za prąd.

W telefonie nic się nie przestawia. Zmienia się tylko to, **co mu każesz zrobić**.

**Wniosek:** w każdym urządzeniu są dwie różne rzeczy: samo urządzenie i polecenia, które ono wykonuje.

:::wykladowca
Zacznijmy od czegoś, co macie w kieszeni. Od telefonu. Ten sam telefon rano robi zdjęcia, w południe dzwoni, a wieczorem płaci rachunki. W środku nic się nie przestawia. Nikt nie dokręca śrubek. Zmienia się tylko to, jaki „przepis” telefon w danej chwili wykonuje. Dziś rozdzielimy te dwie rzeczy: samo urządzenie i zapisane w nim polecenia. Każda z nich ma swoją nazwę po polsku i po angielsku. To rozróżnienie wróci w całym kursie, także na egzaminie.
:::

:::pytanie-uczestnika
pytanie: Czy muszę wiedzieć, co jest w środku telefonu?
odpowiedz: Nie. Wystarczy, że odróżnisz samo urządzenie od poleceń, które w nim działają.
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający; kroki 2–4: wyjaśnij, nazwij, każdy element osobno -->
# Co w telefonie możesz dotknąć, a czego nie?

| Co to jest? | Czy można dotknąć? | Nazwa PL | Nazwa EN (wymowa) |
|---|---|---|---|
| ekran, przyciski, bateria, aparat | tak | **[[it-hardware|sprzęt komputerowy]]** | *hardware* („hardłer”) |
| polecenia: co i kiedy zrobić | nie | **[[it-software|oprogramowanie]]** | *software* („softłer”) |

- **Sprzęt** to wszystko, co fizyczne: obudowa, ekran, klawiatura, myszka, drukarka, kable.
- **Oprogramowanie** to zapisane polecenia. Mówią sprzętowi, co ma zrobić krok po kroku.
- Jeden zestaw takich poleceń to **program**.

**Wniosek:** sprzęt to „ciało” urządzenia, a oprogramowanie to polecenia, które to ciało wykonuje.

:::wykladowca
Teraz nadajmy nazwy. Wszystko, co możecie dotknąć ręką, to sprzęt komputerowy. Po angielsku hardware, czytamy „hardłer”. Ekran, przyciski, bateria i kable to sprzęt. Drugiej rzeczy nie dotkniecie. To zapisane polecenia, które mówią sprzętowi, co ma robić. Po polsku oprogramowanie, po angielsku software, czytamy „softłer”. Jeden zestaw takich poleceń nazywamy programem. Pomyślcie o kuchni i przepisie. Garnki i kuchenka to sprzęt, a przepis to program. Bez przepisu garnki stoją. Bez garnków przepisu nie da się wykonać.
:::

:::sb wyobraz
Fortepian sam milczy. Muzyka powstaje dopiero, gdy ktoś zagra z nut. Fortepian to sprzęt, a nuty to oprogramowanie.
:::

:::sb nie-mylic
Gdy „komputer nie działa”, zapytaj: zawiódł sprzęt (np. ekran) czy program? Naprawia się je inaczej: sprzęt się wymienia, a program poprawia albo instaluje od nowa.
:::

---

<!-- slajd: proces -->
<!-- typ SD: C – procesowy; krok 5: jak elementy współpracują -->
# Co się dzieje, gdy włączasz komputer i otwierasz pocztę?

1. Naciskasz przycisk. Rusza **sprzęt**.
2. Najpierw startuje główny program: **[[it-system-operacyjny|system operacyjny]]** (EN: *operating system*, wym. „operejting sistem”; skrót OS – od angielskiej nazwy). Pokazuje ekran startowy z ikonami, czyli małymi obrazkami programów.
3. Klikasz ikonę „Poczta”. System operacyjny uruchamia ten program.
4. Program do konkretnego zadania człowieka to **[[it-aplikacja|aplikacja]]** (EN: *application*, wym. „eplikejszyn”). Na telefonie mówimy „apka”.
5. Aplikacja prosi system operacyjny o ekran, klawiaturę albo drukarkę. System to załatwia.

Systemy operacyjne to np. Windows, macOS, Android, iOS. Aplikacje to np. poczta, przeglądarka (program do oglądania stron) czy aplikacja banku.

**Wniosek:** system operacyjny obsługuje samo urządzenie, a aplikacja obsługuje zadanie człowieka.

:::wykladowca
Zobaczmy, jak te części współpracują. Naciskacie przycisk i rusza sprzęt. Zanim cokolwiek zrobicie, startuje jeden szczególny program. To system operacyjny, po angielsku operating system. Znacie jego nazwy: Windows na komputerze, Android albo iOS na telefonie. On pokazuje ekran z ikonami. Gdy klikniecie ikonę poczty, system operacyjny uruchamia pocztę. Poczta to aplikacja, po angielsku application. Aplikacja służy Wam do zadania. System operacyjny służy samemu komputerowi. Aplikacja nie musi wiedzieć, jak działa drukarka. Prosi system operacyjny, a on już wie.
:::

:::pytanie-uczestnika
pytanie: Czy Microsoft Word jest systemem operacyjnym?
odpowiedz: Nie. Word to aplikacja do pisania, która działa w systemie operacyjnym, np. w Windowsie.
:::

:::teza interpretacyjna
sytuacja: Urzędnik mówi: „Wczoraj zainstalowali nam nowy system”. Okazuje się, że chodzi o program do spraw kadrowych.
pytanie: Czy „system” w takiej rozmowie to system operacyjny?
teza: Zwykle nie. W pracy „system” najczęściej oznacza aplikację z danymi do konkretnego zadania, a nie system operacyjny komputera.
uzasadnienie: System operacyjny obsługuje samo urządzenie. Program kadrowy służy do zadań ludzi, więc jest aplikacją.
powiazanie: Aplikacje w aktywatorze Usługi, infrastruktura i aplikacje (poznasz go w dniu 3)
przyklad: „System Syrena” w komendzie to aplikacja do wysyłania alarmów, działająca w systemie operacyjnym.
status: uproszczenie
refleksja: Jak nazwiesz program, w którym w Twojej pracy zapisuje się sprawy albo zgłoszenia?
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku; kroki 6–8: EN, organizacja, znaczenie specjalistyczne -->
# Te same cztery słowa w domu, w biurze i w komendzie

:::kontekst zycie
**Telefon.** Ekran i bateria to sprzęt. Android to system operacyjny. Aplikacja banku to aplikacja.
:::

:::kontekst biuro
**Biurko w sekretariacie.** Komputer, monitor i drukarka to sprzęt. Windows to system operacyjny. Program do pism i program do faktur to aplikacje.
:::

:::kontekst organizacja
**Urząd miasta kupuje sprzęt i programy osobno.** W budżecie są dwie pozycje: 50 komputerów (sprzęt) i licencje, czyli prawo do używania programów (oprogramowanie).
:::

:::kontekst psp
**Scena: „Komputer dyżurnej”.** Na stanowisku kierowania (SK) komendy straży w Modrzewiowie siedzi dyżurna Kasia Nowik. Ma dwa monitory, klawiaturę i słuchawki – to sprzęt. Po włączeniu komputera loguje się do systemu operacyjnego. Potem uruchamia aplikację „Syrena”, która wysyła alarmy strażakom. Gdy „Syrena” się zawiesza, Kasia wie, że zawiódł program, a nie monitor.
:::

:::kontekst it
**COBIT 5.** COBIT 5 to zbiór zasad zarządzania informatyką, który poznasz od dnia 1. Sprzęt, oprogramowanie systemowe i sieć nazywa „infrastrukturą techniczną”, a aplikacje opisuje osobno (FW-PL s. 86).
:::

:::zrodlo FW-PL 86
:::

**Wniosek:** sprzęt, system operacyjny i aplikacje to trzy różne warstwy – w domu, w pracy i w COBIT 5.

:::wykladowca
Zobaczcie, że te cztery słowa pasują wszędzie. W telefonie, na biurku w urzędzie i na stanowisku dyżurnej w komendzie. Dla organizacji to rozróżnienie ma znaczenie praktyczne. Sprzęt i programy kupuje się osobno, osobno się je naprawia i osobno się za nie płaci. COBIT 5, który poznacie od jutra, też je rozdziela. Sprzęt i system operacyjny nazywa infrastrukturą techniczną. Aplikacje opisuje osobno. Kiedy więc usłyszycie słowo „aplikacje”, pomyślcie o programach do pracy ludzi, takich jak „Syrena”.
:::

:::teza praktyczna
sytuacja: Dyżurna mówi: „Syrena się zawiesiła, trzeba wymienić komputer”.
pytanie: Czy przy zawieszonej aplikacji trzeba od razu wymieniać sprzęt?
teza: Nie. Najpierw trzeba ustalić, czy zawiódł sprzęt, system operacyjny czy aplikacja, bo każdą z tych rzeczy naprawia się inaczej.
uzasadnienie: Sprzęt, system operacyjny i aplikacja to osobne warstwy. Awaria jednej nie oznacza awarii pozostałych.
powiazanie: Infrastruktura techniczna i aplikacje (FW-PL s. 86)
przyklad: Ekran świeci, inne programy działają, a „Syrena” nie odpowiada – kłopot leży w aplikacji.
status: uproszczenie
refleksja: Po czym poznasz, że zawiódł sprzęt, a nie program?
:::

:::sb ekspert
FW-PL wymienia osobno „infrastrukturę techniczną, w tym sprzęt, oprogramowanie systemowe oraz infrastrukturę sieciową” i aplikacje zapewniające funkcjonalność biznesową (s. 86). System operacyjny mieści się w oprogramowaniu systemowym.
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący; krok 9: sprawdź zrozumienie -->
# Co już umiesz

| PL | EN (wymowa) | Jednym zdaniem |
|---|---|---|
| sprzęt komputerowy | hardware („hardłer”) | to, co można dotknąć |
| oprogramowanie | software („softłer”) | zapisane polecenia dla sprzętu |
| system operacyjny | operating system („operejting sistem”) | główny program, który uruchamia urządzenie |
| aplikacja | application („eplikejszyn”) | program do zadania człowieka |

:::progresja
0: Włączasz telefon i otwierasz aplikację aparatu.
1: Aktualizujesz aplikację, bo telefon o to prosi.
2: Informatyk w biurze instaluje wszystkim ten sam program do pism.
3: Organizacja spisuje, jakie ma programy i ile płaci za prawo do ich używania.
4: Kierownictwo decyduje, które programy są niezbędne do pracy, a z których zrezygnować.
5: W COBIT 5 aplikacje są częścią aktywatora Usługi, infrastruktura i aplikacje (dzień 3).
:::


**Co dalej i dlaczego:** następna lekcja to 0A.2 „Dlaczego „7:15” na kartce jeszcze nic nie mówi? Dane, informacja, plik i folder”.

:::wykladowca
Podsumujmy. Powiedzcie na głos cztery pary słów, po polsku i po angielsku. Sprzęt – hardware. Oprogramowanie – software. System operacyjny – operating system. Aplikacja – application. Sprzęt można dotknąć. Oprogramowanie to polecenia. System operacyjny uruchamia urządzenie. Aplikacja służy człowiekowi do zadania. Spójrzcie jeszcze na schodki na slajdzie. Zaczynają się od Waszego telefonu, a kończą na COBIT 5. Jeśli potraficie to powiedzieć bez patrzenia, przejdźcie do ćwiczeń.
:::

:::wlasne-slowa
Wyjaśnij sąsiadce w 3 zdaniach, czym różni się telefon od aplikacji banku w tym telefonie. Użyj słów „sprzęt” i „aplikacja” oraz ich angielskich nazw.
???
„Telefon to sprzęt (hardware) – można go dotknąć. Aplikacja banku (application) to program zapisany w telefonie; działa dzięki systemowi operacyjnemu, np. Androidowi. Gdy pęknie ekran, psuje się sprzęt, a gdy aplikacja się zawiesi, zawodzi program.”
:::

:::atom
twierdzenie: Sprzęt (hardware) i oprogramowanie (software) to dwie różne rzeczy: urządzenie i polecenia, które ono wykonuje.
poLudzku: Rzecz, którą trzymasz, i „przepis”, który ona wykonuje.
zycie: Pralka to sprzęt, a program prania to oprogramowanie.
komenda: Komputer dyżurnej to sprzęt, a „Syrena” to aplikacja.
sprawdz: F :: Gdy aplikacja się zawiesza, zawsze trzeba wymienić komputer. :: Zawieszona aplikacja to zwykle kłopot programu, a sprzęt może być sprawny.
:::
