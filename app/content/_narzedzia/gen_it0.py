# Pytania do modułu IT0 „Podstawy cyfrowe” (METODYKA §17.3). Wiedza ogólna o IT – status „uproszczenie” (wyjaśnienie kursu).
import json
OUT = '/Users/emilkozlowski_kgpsp/Documents/Code/cobit5-foundation/app/content/questions/it0.json'
Q = []
LEK = {1: "it0-01-komputer-program", 2: "it0-02-dane-informacja", 3: "it0-03-siec-internet", 4: "it0-04-serwer-usluga",
       5: "it0-05-baza-danych", 6: "it0-06-konto-logowanie", 7: "it0-07-infrastruktura-aplikacje", 8: "it0-08-gdy-cos-sie-psuje",
       9: "it0-09-bezpieczenstwo-ryzyko", 10: "it0-10-projekt-program"}
SYL = {9: ["M0-00-07", "M0-00-04"], 10: ["M0-00-05", "M0-00-07"]}

import importlib.util as _u, os as _os
_sp = _u.spec_from_file_location("dys", _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "it0_dystraktory.py"))
_m = _u.module_from_spec(_sp); _sp.loader.exec_module(_m); DYS = _m.D

def q(id, n, tresc, opcje, typ="egzamin", pre=False, bloom="rozumienie"):
    zam = dict(DYS.get(id, []))
    opcje = [((zam.get(t, t)), ok, w, pk) for t, ok, w, pk in opcje]
    o = []
    corr = [x for x in opcje if x[1]]; wrong = [x for x in opcje if not x[1]]
    k = len(Q) % len(opcje)
    opcje = wrong[:k] + corr + wrong[k:]
    for t, ok, w, pk in opcje:
        d = {"tekst": t, "poprawna": ok, "wyjasnienie": w}
        if not ok and typ in ("egzamin", "studium"): d["pulapka"] = pk
        o.append(d)
    x = {"id": id, "typ": typ, "sylabus": SYL.get(n, ["M0-00-07"]), "lekcja": LEK[n], "bloom": bloom, "trudnosc": 1,
         "tresc": tresc, "status": "uproszczenie", "opcje": o}
    if pre: x["pretest"] = True
    Q.append(x)

P, F = True, False
# ---- 0A.1 Sprzęt i program
q("q-pre-it0-01", 1, "Telefon raz robi zdjęcia, a raz płaci rachunki. Co się wtedy zmienia?", [
  ("Program, który w danej chwili działa w telefonie", P, "Sprzęt zostaje ten sam, a zmienia się oprogramowanie, czyli aplikacja.", None),
  ("Sprzęt w środku telefonu", F, "Sprzęt (hardware) jest cały czas ten sam.", None),
  ("Bateria", F, "Bateria tylko zasila sprzęt.", None)], typ="rozpoznanie", pre=True, bloom="wiedza")
q("q-it0-01-01", 1, "Który element komputera to sprzęt (hardware)?", [
  ("Przeglądarka internetowa", F, "To program (software).", "inna-kategoria"),
  ("Klawiatura", P, "Sprzęt to to, czego można dotknąć: klawiatura, ekran, dysk.", None),
  ("Edytor tekstu", F, "To program (software).", "inna-kategoria"),
  ("System Windows", F, "To system operacyjny, czyli oprogramowanie.", "inna-kategoria")], bloom="wiedza")
q("q-it0-01-02", 1, "Czym system operacyjny (operating system) różni się od aplikacji (application)?", [
  ("System operacyjny organizuje pracę całego urządzenia, a aplikacja wykonuje jedno zadanie dla użytkownika", P, "Bez systemu operacyjnego aplikacja nie ruszy. To on zarządza sprzętem i uruchamia programy.", None),
  ("System operacyjny to sprzęt, a aplikacja to program", F, "Oba są oprogramowaniem.", "inna-kategoria"),
  ("Niczym – to dwie nazwy tego samego", F, "To różne rodzaje oprogramowania.", "falsz"),
  ("Aplikacja uruchamia system operacyjny", F, "Odwrotnie: system operacyjny uruchamia aplikacje.", "odwrocone")])
q("q-it0-01-03", 1, "Microsoft Word to:", [
  ("system operacyjny", F, "Word działa w systemie operacyjnym, ale nim nie jest.", "inna-kategoria"),
  ("sprzęt", F, "Wordu nie da się dotknąć – to program.", "inna-kategoria"),
  ("aplikacja (program użytkowy)", P, "Word wykonuje jedno zadanie dla użytkownika: pisanie dokumentów.", None),
  ("sieć komputerowa", F, "Word nie łączy urządzeń.", "falsz")], bloom="wiedza")
q("q-zap-it0-01-1", 1, "Dyżurny mówi: „Komputer się zepsuł, bo nie otwiera się program do map”. Ekran i klawiatura działają, inne programy też. Co najpewniej zawiodło?", [
  ("Sprzęt", F, "Sprzęt działa – inne programy się uruchamiają.", "zbyt-waskie"),
  ("Oprogramowanie, czyli ta jedna aplikacja", P, "Gdy tylko jeden program nie działa, problem dotyczy oprogramowania, a nie sprzętu.", None),
  ("Internet", F, "Nie wiemy, czy program w ogóle korzysta z Internetu.", "prawda-nie-na-temat"),
  ("Klawiatura", F, "Klawiatura działa.", "falsz")], bloom="zastosowanie")
q("q-zap-it0-01-2", 1, "Który zestaw zawiera WYŁĄCZNIE oprogramowanie (software)?", [
  ("Android, przeglądarka, aplikacja bankowa", P, "Wszystkie trzy to programy: system operacyjny i dwie aplikacje.", None),
  ("Ekran, Android, myszka", F, "Ekran i myszka to sprzęt.", "zbyt-waskie"),
  ("Drukarka, Word, dysk", F, "Drukarka i dysk to sprzęt.", "zbyt-waskie"),
  ("Procesor, pamięć, Windows", F, "Procesor i pamięć to sprzęt.", "zbyt-waskie")], bloom="wiedza")
# ---- 0A.2 Dane i informacja
q("q-pre-it0-02", 2, "Na kartce jest zapisane tylko „7:15”. Co to jest?", [
  ("Dane – sama liczba bez kontekstu", P, "Dopiero kontekst („wyjazd zastępu o 7:15”) zamienia dane w informację.", None),
  ("Informacja – bo to godzina", F, "Bez kontekstu nie wiemy, czego dotyczy ta godzina.", None),
  ("Plik", F, "Plik to porcja zapisanych danych na dysku, a nie zapis na kartce.", None)], typ="rozpoznanie", pre=True, bloom="wiedza")
q("q-it0-02-01", 2, "Czym różnią się dane (data) od informacji (information)?", [
  ("Informacja to dane z kontekstem, które coś nam mówią", P, "„37,9” to dane. „Strażak ma 37,9°C gorączki” to informacja.", None),
  ("Dane są zawsze liczbami, a informacja zawsze tekstem", F, "Dane mogą być też tekstem lub obrazem.", "falsz"),
  ("Niczym – to synonimy", F, "W informatyce to dwa różne pojęcia.", "falsz"),
  ("Dane są w komputerze, a informacja na papierze", F, "Nośnik nie decyduje o tym, co jest daną, a co informacją.", "inna-kategoria")])
q("q-it0-02-02", 2, "Czym jest plik (file)?", [
  ("Nazwaną porcją danych zapisaną na dysku, np. dokumentem albo zdjęciem", P, "Plik ma nazwę i zawartość, np. „raport.docx”.", None),
  ("Miejscem na dysku, które grupuje wiele dokumentów", F, "To folder (katalog).", "inna-kategoria"),
  ("Programem do pisania dokumentów", F, "To aplikacja.", "inna-kategoria"),
  ("Połączeniem dwóch komputerów", F, "To sieć.", "falsz")], bloom="wiedza")
q("q-it0-02-03", 2, "Kasia chce trzymać wszystkie raporty z wyjazdów w jednym miejscu na dysku. Czego użyje?", [
  ("Folderu „Raporty z wyjazdów”", P, "Folder (folder) porządkuje pliki tak jak segregator kartki.", None),
  ("Jednego pliku z nazwą „Raporty”", F, "Plik to jeden dokument, a nie miejsce na wiele dokumentów.", "zbyt-waskie"),
  ("Systemu operacyjnego", F, "System operacyjny zarządza całym komputerem, nie porządkuje raportów Kasi.", "inna-kategoria"),
  ("Hasła", F, "Hasło chroni dostęp, a nie porządkuje pliki.", "prawda-nie-na-temat")], bloom="zastosowanie")
q("q-zap-it0-02-1", 2, "Które zdanie to już INFORMACJA, czyli dane z kontekstem?", [
  ("„12”", F, "Sama liczba bez kontekstu to dane.", "zbyt-waskie"),
  ("„Lipowa 7”", F, "Sam adres bez kontekstu to dane.", "zbyt-waskie"),
  ("„Pożar przy ul. Lipowej 7, zgłoszony o 12:04”", P, "Dane z kontekstem coś nam mówią – to informacja.", None),
  ("„12:04”", F, "Sama godzina to dane.", "zbyt-waskie")], bloom="zastosowanie")
q("q-zap-it0-02-2", 2, "Plik „grafik_luty.xlsx” ma końcówkę „.xlsx”. Co ona mówi?", [
  ("Jakim rodzajem pliku jest grafik, czyli którym programem go otworzyć", P, "Końcówka (rozszerzenie) mówi o typie pliku, np. arkusz kalkulacyjny.", None),
  ("W jakim folderze leży plik", F, "Końcówka nie mówi nic o folderze.", "falsz"),
  ("Kto jest autorem pliku", F, "Końcówka nie zawiera autora.", "falsz"),
  ("Że plik jest zabezpieczony hasłem", F, "Końcówka nie mówi o zabezpieczeniu.", "falsz")])
# ---- 0A.3 Sieć i Internet
q("q-pre-it0-03", 3, "W komendzie działa Wi-Fi, ale żadna strona internetowa się nie otwiera. Co najpewniej nie działa?", [
  ("Połączenie komendy z Internetem", P, "Wi-Fi łączy urządzenia w budynku. Internet to połączenie ze światem – może paść osobno.", None),
  ("Wi-Fi", F, "Wi-Fi działa, bo urządzenia są połączone.", None),
  ("Komputery", F, "Komputery działają.", None)], typ="rozpoznanie", pre=True)
q("q-it0-03-01", 3, "Czym jest sieć komputerowa (network)?", [
  ("Połączeniem kilku urządzeń tak, żeby mogły wymieniać dane", P, "Np. komputery i drukarka w komendzie połączone ze sobą.", None),
  ("Tylko Internetem", F, "Internet to jedna, ogólnoświatowa sieć. Sieć w budynku też jest siecią.", "zbyt-waskie"),
  ("Programem do przeglądania stron", F, "To przeglądarka.", "inna-kategoria"),
  ("Hasłem do Wi-Fi", F, "Hasło chroni sieć, ale nią nie jest.", "inna-kategoria")], bloom="wiedza")
q("q-it0-03-02", 3, "Co to jest Internet?", [
  ("Ogólnoświatowa sieć łącząca ze sobą miliony mniejszych sieci", P, "Internet łączy sieci domów, firm i urzędów na całym świecie.", None),
  ("Bezprzewodowe połączenie w budynku", F, "To Wi-Fi.", "inna-kategoria"),
  ("Przeglądarka internetowa", F, "Przeglądarka to program do korzystania z Internetu.", "inna-kategoria"),
  ("Serwer komendy", F, "Serwer to komputer, który odpowiada na prośby innych.", "inna-kategoria")], bloom="wiedza")
q("q-it0-03-03", 3, "Łącze z Internetem w komendzie padło. Co NADAL może działać?", [
  ("Drukowanie na drukarce sieciowej w budynku", P, "Sieć wewnętrzna działa bez Internetu.", None),
  ("Wysyłanie e-maili do OSP Zawilce", F, "E-mail na zewnątrz potrzebuje Internetu.", "falsz"),
  ("Otwieranie stron internetowych", F, "Strony wymagają Internetu.", "falsz"),
  ("Pobieranie prognozy pogody", F, "Prognoza przychodzi z Internetu.", "falsz")], bloom="zastosowanie")
q("q-zap-it0-03-1", 3, "Które zdanie jest prawdziwe?", [
  ("Wi-Fi to jeden ze sposobów podłączenia urządzenia do sieci – bez kabla", P, "Wi-Fi to łączność bezprzewodowa. Sieć może być też na kablach.", None),
  ("Wi-Fi to inna nazwa Internetu", F, "Wi-Fi łączy urządzenie z siecią, a sieć dopiero z Internetem.", "falsz"),
  ("Bez Wi-Fi nie ma żadnej sieci", F, "Sieci kablowe działają bez Wi-Fi.", "falsz"),
  ("Wi-Fi działa tylko w telefonach", F, "Z Wi-Fi korzystają też komputery i drukarki.", "falsz")])
q("q-zap-it0-03-2", 3, "Dyżurny mówi: „Nie działa sieć”. O co warto dopytać, żeby zrozumieć problem?", [
  ("Czy działa coś w budynku (np. drukarka), a nie działa tylko łączność ze światem", P, "To odróżnia awarię sieci wewnętrznej od awarii łącza z Internetem.", None),
  ("Jaki ma system operacyjny", F, "To mniej ważne niż ustalenie, co nie działa.", "prawda-nie-na-temat"),
  ("Ile ma plików na pulpicie", F, "Nie ma związku z siecią.", "falsz"),
  ("Czy zmienił hasło do poczty", F, "Hasło nie tłumaczy braku sieci.", "prawda-nie-na-temat")], bloom="zastosowanie")
# ---- 0A.4 Serwer i usługa
q("q-pre-it0-04", 4, "Telefon pokazuje prognozę pogody. Skąd ją ma?", [
  ("Prosi inny komputer (serwer) i dostaje od niego odpowiedź", P, "Telefon jest klientem: wysyła żądanie, a serwer odsyła odpowiedź.", None),
  ("Sam mierzy temperaturę", F, "Telefon nie ma termometru na dachu.", None),
  ("Z pliku zapisanego przy zakupie", F, "Prognoza zmienia się codziennie, więc musi przyjść z zewnątrz.", None)], typ="rozpoznanie", pre=True)
q("q-it0-04-01", 4, "Kto w tej wymianie jest klientem (client)? Dyżurny klika „Alarm”, a komputer wysyła prośbę do serwera „Syreny”.", [
  ("Komputer dyżurnego", P, "Klient to ten, kto prosi. Serwer to ten, kto odpowiada.", None),
  ("Serwer „Syreny”", F, "Serwer odpowiada na prośby.", "odwrocone"),
  ("Firma Kwant-Sygnał", F, "Dostawca to nie jest rola w wymianie żądanie–odpowiedź.", "inna-kategoria"),
  ("Internet", F, "Internet to droga, którą idzie prośba.", "inna-kategoria")], bloom="zastosowanie")
q("q-it0-04-02", 4, "Czy serwer (server) to zawsze duża szafa w serwerowni?", [
  ("Nie – serwer to rola; może nim być zwykły komputer albo program, który odpowiada na prośby", P, "Liczy się to, co robi, a nie jak wygląda.", None),
  ("Tak – serwer to zawsze specjalny sprzęt", F, "Serwerem może być nawet laptop.", "zbyt-waskie"),
  ("Tak – inaczej nie mógłby odpowiadać", F, "Odpowiadać może każdy komputer z odpowiednim programem.", "falsz"),
  ("Nie – serwer to inna nazwa Internetu", F, "Internet to sieć, a serwer to uczestnik wymiany.", "inna-kategoria")])
q("q-it0-04-03", 4, "Dla dyżurnego najważniejsze jest, że „alarm wychodzi do OSP”. Jak nazywamy to, co informatyka daje mu do pracy?", [
  ("Usługa IT (IT service)", P, "Usługa to efekt pracy serwerów i programów, który ma znaczenie dla ludzi.", None),
  ("Serwer", F, "Serwer to tylko jeden ze składników usługi.", "zbyt-waskie"),
  ("Aplikacja", F, "Aplikacja to też tylko składnik usługi.", "zbyt-waskie"),
  ("Sieć", F, "Sieć to droga, a nie to, co dostaje dyżurny.", "zbyt-waskie")])
q("q-zap-it0-04-1", 4, "Ułóż w kolejności: (1) serwer przygotowuje odpowiedź, (2) klient wysyła żądanie, (3) odpowiedź wraca do klienta.", [
  ("2 → 1 → 3", P, "Najpierw prośba (request), potem przygotowanie i odpowiedź (response).", None),
  ("1 → 2 → 3", F, "Serwer nie odpowiada, zanim ktoś go poprosi.", "odwrocone"),
  ("3 → 2 → 1", F, "Odpowiedź nie może przyjść przed prośbą.", "odwrocone"),
  ("2 → 3 → 1", F, "Odpowiedź wraca dopiero po jej przygotowaniu.", "falsz")], bloom="zastosowanie")
q("q-zap-it0-04-2", 4, "Bankomat pyta bank, czy na koncie są pieniądze. Kto jest serwerem?", [
  ("Komputer banku, który sprawdza konto i odpowiada", P, "Bankomat prosi (klient), bank odpowiada (serwer).", None),
  ("Bankomat", F, "Bankomat prosi – jest klientem.", "odwrocone"),
  ("Karta płatnicza", F, "Karta to sposób potwierdzenia, kim jesteś.", "inna-kategoria"),
  ("Klient banku", F, "Pomylone znaczenia słowa „klient”: chodzi o rolę w wymianie danych.", "inna-kategoria")], bloom="zastosowanie")
# ---- 0A.5 Baza danych
q("q-pre-it0-05", 5, "Dyżurny w sekundę znajduje numer telefonu strażaka. Jak to możliwe?", [
  ("Numery są w uporządkowanym zbiorze danych, który komputer szybko przeszukuje", P, "To baza danych: uporządkowane informacje do szybkiego wyszukiwania.", None),
  ("Dyżurny zna wszystkie numery na pamięć", F, "To nie jest mechanizm informatyczny.", None),
  ("Numer jest w każdym pliku na dysku", F, "Rozrzucone pliki trzeba by długo przeszukiwać.", None)], typ="rozpoznanie", pre=True)
q("q-it0-05-01", 5, "Czym jest baza danych (database)?", [
  ("Uporządkowanym zbiorem informacji, który można szybko przeszukiwać, dodawać i zmieniać", P, "Jak elektroniczna kartoteka.", None),
  ("Programem, w którym oglądamy dane", F, "Program to narzędzie. Baza to miejsce uporządkowanego przechowywania.", "inna-kategoria"),
  ("Dowolnym plikiem na dysku", F, "Plik nie musi być uporządkowanym zbiorem do wyszukiwania.", "zbyt-waskie"),
  ("Serwerem w piwnicy", F, "Baza może leżeć na serwerze, ale nim nie jest.", "inna-kategoria")], bloom="wiedza")
q("q-it0-05-02", 5, "Czy aplikacja „Syrena” i jej baza danych to to samo?", [
  ("Nie – aplikacja to narzędzie, a baza to miejsce, w którym leżą dane, np. lista strażaków", P, "Aplikacja korzysta z bazy, ale nią nie jest.", None),
  ("Tak – to dwie nazwy jednego programu", F, "To częsta pomyłka laika.", "falsz"),
  ("Tak – bo obie są na tym samym serwerze", F, "Miejsce nie czyni ich tym samym.", "prawda-nie-na-temat"),
  ("Nie – baza to sprzęt, a aplikacja to program", F, "Baza danych to dane, a nie sprzęt.", "inna-kategoria")])
q("q-it0-05-03", 5, "Co komenda MOŻE trzymać w bazie danych?", [
  ("Listę strażaków, wozy, numery telefonów i historię zgłoszeń", P, "Każdy uporządkowany zbiór informacji nadaje się do bazy danych.", None),
  ("Tylko liczby", F, "Baza przechowuje też teksty, daty i inne dane.", "zbyt-waskie"),
  ("Tylko hasła użytkowników", F, "To tylko jeden z wielu przypadków.", "zbyt-waskie"),
  ("Sprzęt komputerowy", F, "Sprzętu nie da się zapisać w bazie, można tylko wpisać informacje o nim.", "falsz")], bloom="zastosowanie")
q("q-zap-it0-05-1", 5, "Czym baza danych różni się od jednego pliku z tabelą (arkusza)?", [
  ("Baza jest zbudowana do porządnego przechowywania i szybkiego wyszukiwania dużej ilości danych przez wielu użytkowników naraz", P, "Arkusz nadaje się do prostych list, a baza do dużych zbiorów, z których korzysta wiele osób i programów.", None),
  ("Niczym – arkusz to baza danych", F, "Arkusz bywa używany jak prosta baza, ale to nie to samo.", "falsz"),
  ("Baza nie może zawierać tabel", F, "Bazy często składają się z tabel.", "falsz"),
  ("Arkusz jest zawsze bezpieczniejszy", F, "Bezpieczeństwo nie zależy od rodzaju narzędzia w ten sposób.", "falsz")])
q("q-zap-it0-05-2", 5, "Kasia wpisuje nowego strażaka w „Syrenie”. Gdzie trafia ta informacja?", [
  ("Do bazy danych, z której korzystają wszyscy dyżurni", P, "Aplikacja zapisuje dane w bazie, więc inni od razu je widzą.", None),
  ("Tylko na komputer Kasi", F, "Wtedy inni dyżurni by jej nie widzieli.", "zbyt-waskie"),
  ("Do systemu operacyjnego", F, "System operacyjny nie przechowuje danych o strażakach.", "inna-kategoria"),
  ("Do Wi-Fi", F, "Wi-Fi to łączność, a nie miejsce przechowywania danych.", "inna-kategoria")], bloom="zastosowanie")
# ---- 0A.6 Konto, uwierzytelnianie, autoryzacja
q("q-pre-it0-06", 6, "Kasia zalogowała się do komputera, ale folder kadr się nie otwiera. Dlaczego?", [
  ("Jest zalogowana, ale nie ma uprawnień do tego folderu", P, "Zalogowanie (kim jesteś) to co innego niż uprawnienia (co Ci wolno).", None),
  ("Komputer jest zepsuty", F, "Inne foldery się otwierają.", None),
  ("Źle wpisała hasło", F, "Wtedy w ogóle by się nie zalogowała.", None)], typ="rozpoznanie", pre=True)
q("q-it0-06-01", 6, "Uwierzytelnianie (authentication) odpowiada na pytanie:", [
  ("„Kim jesteś?” – np. hasło, karta, odcisk palca", P, "System sprawdza, czy jesteś tym, za kogo się podajesz.", None),
  ("„Co ci wolno?”", F, "To autoryzacja.", "odwrocone"),
  ("„Ile masz plików?”", F, "Nie ma związku.", "falsz"),
  ("„Czy jest Internet?”", F, "Nie ma związku.", "falsz")], bloom="wiedza")
q("q-it0-06-02", 6, "Autoryzacja (authorization) to:", [
  ("Sprawdzenie, co zalogowana osoba może zrobić lub zobaczyć", P, "Np. Kasia widzi grafiki, ale nie widzi płac.", None),
  ("Wpisanie hasła", F, "To uwierzytelnianie.", "odwrocone"),
  ("Założenie nowego komputera", F, "Nie ma związku.", "falsz"),
  ("Wysłanie e-maila", F, "Nie ma związku.", "falsz")], bloom="wiedza")
q("q-it0-06-03", 6, "Dlaczego nie wolno pożyczać swojego konta koledze?", [
  ("Bo wszystko, co zrobi kolega, system zapisze jako Twoje działanie", P, "Konto przypisuje działania do konkretnej osoby. Pożyczenie niszczy rozliczalność.", None),
  ("Bo konto się zepsuje", F, "Konto się nie psuje.", "falsz"),
  ("Bo kolega zobaczy Twój pulpit", F, "To mało ważny skutek.", "zbyt-waskie"),
  ("Bo system tego technicznie nie pozwala", F, "Technicznie często pozwala – dlatego jest zasada.", "falsz")])
q("q-zap-it0-06-1", 6, "Strażak przykłada kartę do czytnika i wpisuje PIN. Co to jest?", [
  ("Uwierzytelnianie", P, "Potwierdza, kim jest.", None),
  ("Autoryzacja", F, "Autoryzacja przychodzi potem: co mu wolno.", "odwrocone"),
  ("Kopia zapasowa", F, "Nie ma związku.", "inna-kategoria"),
  ("Usługa IT", F, "Logowanie jest częścią usługi, ale pytanie dotyczy samego sprawdzenia tożsamości.", "zbyt-waskie")], bloom="zastosowanie")
q("q-zap-it0-06-2", 6, "Kierownik prosi informatyka: „Daj Kasi dostęp do folderu grafików”. Co zmieni informatyk?", [
  ("Uprawnienia (autoryzację) konta Kasi", P, "Kasia już ma konto i się loguje – zmienia się tylko to, co jej wolno.", None),
  ("Hasło Kasi", F, "Hasło dotyczy tożsamości, nie zakresu dostępu.", "inna-kategoria"),
  ("System operacyjny", F, "Nie ma potrzeby go zmieniać.", "falsz"),
  ("Sieć Wi-Fi", F, "Nie ma związku.", "falsz")], bloom="zastosowanie")
# ---- 0A.7 Infrastruktura, dostawca, outsourcing
q("q-pre-it0-07", 7, "Komenda zleciła utrzymanie serwerów firmie zewnętrznej. Kto odpowiada przed mieszkańcami, jeśli alarm nie wyjdzie?", [
  ("Komenda – zlecenie pracy firmie nie przenosi odpowiedzialności", P, "Outsourcing przenosi wykonanie, ale nie odpowiedzialność.", None),
  ("Wyłącznie firma zewnętrzna", F, "Mieszkańcy rozliczają komendę.", None),
  ("Nikt", F, "Ktoś zawsze odpowiada.", None)], typ="rozpoznanie", pre=True)
q("q-it0-07-01", 7, "Co należy do infrastruktury IT (IT infrastructure)?", [
  ("Serwery, sieć, kable, systemy operacyjne", P, "Infrastruktura to „fundament”, na którym działają aplikacje.", None),
  ("Tylko aplikacja „Syrena”", F, "Aplikacja działa na infrastrukturze, ale nią nie jest.", "inna-kategoria"),
  ("Grafik dyżurów", F, "To informacja, nie infrastruktura.", "inna-kategoria"),
  ("Umowa z dostawcą", F, "Umowa dotyczy dostawcy, a nie samej infrastruktury.", "inna-kategoria")], bloom="wiedza")
q("q-it0-07-02", 7, "Firma Kwant-Sygnał sprzedała komendzie system „Syrena”. Kim jest dla komendy?", [
  ("Dostawcą (supplier)", P, "Dostawca to firma zewnętrzna, która coś dostarcza: sprzęt, program albo usługę.", None),
  ("Użytkownikiem", F, "Użytkownikami są dyżurni.", "odwrocone"),
  ("Infrastrukturą", F, "Firma to nie fundament techniczny.", "inna-kategoria"),
  ("Organem nadzoru", F, "Firma nie nadzoruje komendy.", "falsz")], bloom="wiedza")
q("q-it0-07-03", 7, "Czym jest outsourcing?", [
  ("Zleceniem firmie zewnętrznej pracy, którą organizacja mogłaby robić sama", P, "Np. utrzymanie serwerów przez Kwant-Sygnał.", None),
  ("Zakupem nowego komputera", F, "To zakup sprzętu.", "inna-kategoria"),
  ("Przeniesieniem odpowiedzialności za wynik na firmę zewnętrzną", F, "Odpowiedzialność zostaje w organizacji.", "falsz"),
  ("Pracą zdalną pracowników", F, "Nie ma związku.", "falsz")])
q("q-zap-it0-07-1", 7, "Który opis to USŁUGA IT, czyli to, co dostaje użytkownik?", [
  ("„Alarm dociera do OSP w 30 sekund”", P, "To efekt, który ma znaczenie dla ludzi – usługa.", None),
  ("„Serwer, sieć, baza danych”", F, "To składniki, czyli infrastruktura i dane.", "zbyt-waskie"),
  ("„Aplikacja Syrena w wersji 2.1”", F, "To składnik – aplikacja.", "zbyt-waskie"),
  ("„Umowa z Kwant-Sygnał”", F, "To relacja z dostawcą.", "inna-kategoria")], bloom="zastosowanie")
q("q-zap-it0-07-2", 7, "Dlaczego warto rozróżniać aplikację od infrastruktury?", [
  ("Bo awaria jednego nie zawsze oznacza awarię drugiego i za każde może odpowiadać ktoś inny", P, "Np. serwer działa, a aplikacja ma błąd – albo odwrotnie.", None),
  ("Bo aplikacja jest zawsze droższa", F, "Cena nie jest powodem rozróżnienia.", "falsz"),
  ("Bo infrastruktury nie trzeba utrzymywać", F, "Infrastruktura wymaga utrzymania.", "falsz"),
  ("Nie warto – to jedno i to samo", F, "To dwa różne poziomy.", "falsz")])
# ---- 0A.8 Incydent, problem, zmiana, kopia, ciągłość
q("q-pre-it0-08", 8, "„Syrena” trzeci raz w tym miesiącu przestaje wysyłać SMS-y. Co trzeba zrobić oprócz szybkiego przywrócenia działania?", [
  ("Szukać przyczyny, żeby awaria się nie powtarzała", P, "Szybkie przywrócenie to obsługa incydentu. Szukanie przyczyny to obsługa problemu.", None),
  ("Nic – wystarczy restart", F, "Restart pomaga na chwilę, ale awaria wróci.", None),
  ("Kupić nowe telefony strażakom", F, "Nie wiemy, czy wina leży w telefonach.", None)], typ="rozpoznanie", pre=True)
q("q-it0-08-01", 8, "Incydent (incident) to:", [
  ("Nieplanowana przerwa albo pogorszenie działania usługi, które trzeba szybko naprawić", P, "Np. dziś rano „Syrena” nie wysłała SMS-ów.", None),
  ("Przyczyna powtarzających się awarii", F, "To problem.", "inna-kategoria"),
  ("Zaplanowana aktualizacja systemu", F, "To zmiana.", "inna-kategoria"),
  ("Kopia danych na wypadek awarii", F, "To kopia zapasowa.", "inna-kategoria")], bloom="wiedza")
q("q-it0-08-02", 8, "Czym różni się problem (problem) od incydentu?", [
  ("Problem to nieznana przyczyna jednego lub wielu incydentów", P, "Incydent gasimy, problem badamy, żeby nie wracał.", None),
  ("Problem to poważniejszy incydent", F, "Wielkość nie decyduje.", "falsz"),
  ("Niczym", F, "To dwa różne pojęcia.", "falsz"),
  ("Problem dotyczy tylko sprzętu", F, "Przyczyna może być w czymkolwiek.", "zbyt-waskie")])
q("q-it0-08-03", 8, "Czym kopia zapasowa (backup) różni się od ciągłości działania (business continuity)?", [
  ("Kopia chroni dane, a ciągłość działania to plan, jak pracować dalej, gdy system padnie", P, "Kopia to jeden ze składników planu ciągłości – ale nie całość.", None),
  ("To to samo", F, "Kopia bez planu nie zapewni pracy w czasie awarii.", "zbyt-waskie"),
  ("Ciągłość działania to kopia na pendrivie", F, "To zbyt wąsko.", "zbyt-waskie"),
  ("Kopia dotyczy ludzi, a ciągłość danych", F, "Odwrotnie i pomieszane.", "odwrocone")])
q("q-zap-it0-08-1", 8, "Informatyk chce zainstalować nową wersję „Syreny”, żeby usunąć przyczynę awarii. Jak to nazwać?", [
  ("Zmiana (change)", P, "Planowane wprowadzenie czegoś nowego lub poprawionego to zmiana – trzeba ją zaplanować i sprawdzić.", None),
  ("Incydent", F, "Incydent to nieplanowana awaria.", "inna-kategoria"),
  ("Kopia zapasowa", F, "Nie ma związku.", "inna-kategoria"),
  ("Problem", F, "Problem to przyczyna – a tu jest jej usuwanie.", "zbyt-waskie")], bloom="zastosowanie")
q("q-zap-it0-08-2", 8, "Co jest przykładem dbania o ciągłość działania w komendzie?", [
  ("Papierowa lista telefonów do OSP i ćwiczenie „noc bez Syreny”", P, "Ciągłość działania to umiejętność pracy także wtedy, gdy system nie działa.", None),
  ("Codzienne sprzątanie biura", F, "Nie ma związku.", "falsz"),
  ("Kupno szybszego komputera", F, "To nie plan na awarię.", "prawda-nie-na-temat"),
  ("Zmiana hasła do Wi-Fi", F, "To dbanie o bezpieczeństwo, a nie o ciągłość.", "inna-kategoria")], bloom="zastosowanie")
# ---- 0A.9 Bezpieczeństwo i ryzyko
q("q-pre-it0-09", 9, "Hasło do „Syreny” wisi na karteczce przy monitorze. Co to jest?", [
  ("Ryzyko – coś złego może się wydarzyć, choć jeszcze się nie wydarzyło", P, "Ryzyko to możliwość szkody. Incydent to szkoda, która już się dzieje.", None),
  ("Incydent", F, "Nic się jeszcze nie stało.", None),
  ("Drobiazg bez znaczenia", F, "Każdy może przeczytać hasło.", None)], typ="rozpoznanie", pre=True)
q("q-it0-09-01", 9, "Trzy cechy bezpieczeństwa informacji (information security) to:", [
  ("Poufność, integralność, dostępność", P, "Tylko uprawnieni widzą, dane są prawdziwe i nieuszkodzone, a system działa, gdy jest potrzebny.", None),
  ("Szybkość, cena, wygląd", F, "To nie są cechy bezpieczeństwa.", "falsz"),
  ("Hasło, karta, odcisk palca", F, "To sposoby uwierzytelniania.", "inna-kategoria"),
  ("Serwer, sieć, baza danych", F, "To składniki techniczne.", "inna-kategoria")], bloom="wiedza")
q("q-it0-09-02", 9, "„Syrena” jest dostępna tylko w dzień, a w nocy przestaje działać. Która cecha bezpieczeństwa jest naruszona?", [
  ("Dostępność (availability)", P, "System musi działać wtedy, gdy jest potrzebny – także w nocy.", None),
  ("Poufność", F, "Nikt niepowołany niczego nie zobaczył.", "inna-kategoria"),
  ("Integralność", F, "Dane nie zostały zmienione.", "inna-kategoria"),
  ("Żadna – to sprawa sprzętu", F, "Dostępność jest cechą bezpieczeństwa informacji.", "falsz")], bloom="zastosowanie")
q("q-it0-09-03", 9, "Czym ryzyko związane z IT (IT-related risk) różni się od incydentu?", [
  ("Ryzyko to możliwość szkody w przyszłości, a incydent to szkoda, która już się dzieje", P, "Ryzykiem zarządzamy zawczasu, incydent obsługujemy teraz.", None),
  ("Niczym", F, "To różne pojęcia.", "falsz"),
  ("Ryzyko dotyczy tylko pieniędzy", F, "Ryzyko IT dotyczy też ludzi, danych i usług.", "zbyt-waskie"),
  ("Incydent to przyszła szkoda, a ryzyko obecna", F, "Odwrotnie.", "odwrocone")])
q("q-zap-it0-09-1", 9, "Ktoś zmienił w bazie numer telefonu strażaka na błędny. Która cecha bezpieczeństwa jest naruszona?", [
  ("Integralność – dane przestały być prawdziwe", P, "Integralność znaczy, że dane są poprawne i nikt ich nie zmienił bez prawa.", None),
  ("Dostępność", F, "Baza działa.", "inna-kategoria"),
  ("Poufność", F, "Nikt nie zobaczył czegoś, czego nie powinien.", "inna-kategoria"),
  ("Żadna", F, "Błędne dane to naruszenie integralności.", "falsz")], bloom="zastosowanie")
q("q-zap-it0-09-2", 9, "Co jest najlepszą reakcją na ryzyko „hasło na karteczce”?", [
  ("Zmienić hasło i ustalić, gdzie bezpiecznie przechowywać hasła", P, "Działamy, zanim ryzyko zamieni się w incydent.", None),
  ("Czekać, aż ktoś się włamie", F, "To dopuszczenie do incydentu.", "falsz"),
  ("Wyłączyć „Syrenę”", F, "To odcina usługę, której potrzebujemy.", "falsz"),
  ("Kupić nowy monitor", F, "Nie ma związku.", "falsz")], bloom="zastosowanie")
# ---- 0A.10 Projekt, program, portfel
q("q-pre-it0-10", 10, "Pieniędzy starczy na dwie rzeczy z trzech: nowy system, kamery i szkolenia. Kto powinien wybrać?", [
  ("Kierownictwo – patrząc, co da komendzie najwięcej korzyści przy rozsądnym ryzyku", P, "Wybór między inicjatywami to decyzja o portfelu – należy do kierownictwa.", None),
  ("Informatyk, bo zna się na technice", F, "Informatyk doradza, ale nie wybiera priorytetów.", None),
  ("Dostawca", F, "Dostawca ma własny interes.", None)], typ="rozpoznanie", pre=True)
q("q-it0-10-01", 10, "Ułóż od największego: projekt, program, portfel.", [
  ("Portfel → program → projekt", P, "Portfel to wszystkie inicjatywy, program to grupa powiązanych projektów, projekt to jedno przedsięwzięcie.", None),
  ("Projekt → program → portfel", F, "Odwrotnie.", "odwrocone"),
  ("Program → portfel → projekt", F, "Portfel jest największy.", "falsz"),
  ("Wszystkie są tej samej wielkości", F, "To trzy różne poziomy.", "falsz")], bloom="wiedza")
q("q-it0-10-02", 10, "Dlaczego słowo „program” bywa mylące w kursie COBIT?", [
  ("Bo oznacza i aplikację (program komputerowy), i grupę powiązanych projektów (programme)", P, "Z kontekstu trzeba odczytać, o które znaczenie chodzi.", None),
  ("Bo w COBIT nie ma programów", F, "Są – np. program wdrożenia.", "falsz"),
  ("Bo program to zawsze sprzęt", F, "Program nigdy nie jest sprzętem.", "falsz"),
  ("Nie bywa mylące", F, "Ma dwa różne znaczenia.", "falsz")])
q("q-it0-10-03", 10, "Wdrożenie „Syreny”: zakup systemu, szkolenia dyżurnych i nowe procedury, prowadzone razem dla jednego celu. To:", [
  ("program (programme)", P, "Kilka powiązanych projektów, które razem dają jedną korzyść.", None),
  ("pojedynczy projekt", F, "To kilka powiązanych przedsięwzięć.", "zbyt-waskie"),
  ("portfel", F, "Portfel to wszystkie inicjatywy komendy, nie tylko „Syrena”.", "zbyt-waskie"),
  ("aplikacja", F, "Mylące znaczenie słowa „program”.", "inna-kategoria")], bloom="zastosowanie")
q("q-zap-it0-10-1", 10, "Czym jest projekt (project)?", [
  ("Jednorazowym przedsięwzięciem z celem, początkiem, końcem i budżetem", P, "Np. „zakup kamer do JRG 2 do marca”.", None),
  ("Stałą, powtarzalną pracą", F, "To proces.", "inna-kategoria"),
  ("Wszystkimi inicjatywami organizacji", F, "To portfel.", "inna-kategoria"),
  ("Programem komputerowym", F, "Mylące skojarzenie.", "inna-kategoria")], bloom="wiedza")
q("q-zap-it0-10-2", 10, "Komendantka przegląda wszystkie inicjatywy komendy i decyduje, które finansować w tym roku. Czym zarządza?", [
  ("Portfelem (portfolio)", P, "Portfel to zestaw wszystkich inicjatyw, między którymi wybieramy.", None),
  ("Jednym projektem", F, "Patrzy na wszystkie naraz.", "zbyt-waskie"),
  ("Procesem obsługi zgłoszeń", F, "To inna rzecz.", "inna-kategoria"),
  ("Infrastrukturą", F, "Nie ma związku.", "inna-kategoria")], bloom="zastosowanie")

json.dump({"_opis": "IT0 – Podstawy cyfrowe (METODYKA §17.3). Wiedza ogólna o IT, status uproszczenie. Autor: sesja koordynująca.", "pytania": Q},
          open(OUT, "w"), ensure_ascii=False, indent=1)
print(len(Q))
