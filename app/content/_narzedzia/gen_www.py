# F2 – pytania inspirowane publicznymi źródłami (METODYKA §15). Treść własna, fakty wg FW-PL.
import json
from collections import Counter
OUT = '/Users/emilkozlowski_kgpsp/Documents/Code/cobit5-foundation/app/content/questions/final-www.json'
U = {
 'goconqr': 'https://www.goconqr.com/en/quiz/2031198/cobit-5-foundation-sample-questions',
 'goodel': 'https://goodelearning.com/cobit-5-generic-enablers-a-quick-overview/',
 'isaca': 'https://www.isaca.org/resources/news-and-trends/industry-news/2018/how-to-prepare-for-the-cobit-5-foundation-exam',
 'wiki': 'https://sites.google.com/view/management-wiki/cobit/cobit-principles',
 'itwiz': 'https://itwiz.pl/cobit-5-praktyce-pryncypia-czynniki-umozliwiajace/',
 'simpl': 'https://www.simplilearn.com/cobit-5-exam-questions-free-practice-test',
}
Q = []
def q(id, syl, url, strony, tresc, opcje, bloom="rozumienie"):
    Q.append(dict(id=id, syl=syl, url=U[url], strony=strony, tresc=tresc, opcje=opcje, bloom=bloom))

q("q-fn-w-01", ["PR-01-01"], "goconqr", [13],
  "Zarządy coraz częściej dążą do celów, które skłoniły do stworzenia COBIT 5. Który z poniższych NIE jest jednym z nich?",
  [("Utrzymanie wysokiej jakości informacji do podejmowania decyzji", False, "Jest na liście (s. 13).", "falsz"),
   ("Utrzymanie ryzyka IT na akceptowalnym poziomie", False, "Jest na liście (s. 13).", "falsz"),
   ("Przeniesienie całej odpowiedzialności za IT na dział informatyki", True, "Odwrotnie: FW s. 13 mówi, że zarząd i kadra (biznes i IT) muszą działać wspólnie.", None),
   ("Zapewnienie zgodności z przepisami i umowami", False, "Jest na liście (s. 13).", "falsz")])

q("q-fn-w-02", ["PR-02-03", "PR-02-07"], "goconqr", [14],
  "Każda organizacja ma inne cele. Jak zasada 1 pozwala dopasować COBIT 5 do konkretnej komendy?",
  [("Przez wybór procesów wiodących spośród 37", False, "Wybór procesów jest skutkiem, a nie mechanizmem dopasowania.", "zbyt-waskie"),
   ("Przez kaskadę celów", True, "FW s. 14: dopasowanie polega na wykorzystaniu kaskady celów.", None),
   ("Przez ocenę zdolności procesów", False, "Ocena mierzy procesy, ale nie przekłada celów.", "inna-kategoria"),
   ("Przez certyfikację zgodności z COBIT 5", False, "COBIT 5 nie certyfikuje organizacji.", "falsz")])

q("q-fn-w-03", ["PR-02-12"], "goconqr", [28],
  "Po co wszystkie aktywatory mają ten sam zbiór czterech wymiarów?",
  [("Żeby każdemu aktywatorowi przypisać poziom zdolności 0–5", False, "Model zdolności dotyczy procesów, a nie wymiarów aktywatora.", "inna-kategoria"),
   ("Żeby podzielić aktywatory na aktywatory Ładu i aktywatory Zarządzania w modelu", False, "Wymiary niczego takiego nie dzielą.", "falsz"),
   ("Żeby zastąpić tabelę RACI w opisie procesów jednolitym modelem odpowiedzialności", False, "RACI zostaje częścią opisu procesu.", "falsz"),
   ("Żeby używać ich w prosty, ustrukturyzowany sposób i panować nad interakcjami", True, "FW s. 28 wymienia te cele wspólnego zbioru wymiarów.", None)])

q("q-fn-w-04", ["IM-02-04"], "goconqr", [39],
  "Który element NIE należy do minimalnej zawartości uzasadnienia biznesowego według COBIT 5?",
  [("Pełna specyfikacja techniczna wszystkich systemów", True, "Nie ma jej na liście z s. 39. Są tam korzyści, zmiany, inwestycje, koszty, ryzyko, role i sposób monitorowania.", None),
   ("Docelowe korzyści i ich beneficjenci", False, "Jest wymagane (s. 39).", "falsz"),
   ("Wymagane inwestycje", False, "Jest wymagane (s. 39).", "falsz"),
   ("Role, odpowiedzialność i rozliczalność", False, "Jest wymagane (s. 39).", "falsz")])

q("q-fn-w-05", ["PR-02-01", "PR-02-14"], "goconqr", [17],
  "Dyżurni chcą prostego systemu, inspektorka – bezpiecznego, a księgowa – taniego. Jaka jest rola Ładu wobec tych sprzecznych oczekiwań?",
  [("Wybrać oczekiwania najważniejszego interesariusza i jemu podporządkować resztę", False, "Ład waży interesy wszystkich, a nie jednego.", "zbyt-waskie"),
   ("Negocjować i decydować, biorąc pod uwagę oczekiwania wszystkich stron", True, "FW s. 17: Ład polega na negocjowaniu i podejmowaniu decyzji dotyczących wartości dla różnych interesariuszy.", None),
   ("Przekazać decyzję dostawcy systemu jako najlepszemu ekspertowi", False, "To oddanie Ładu stronie zewnętrznej.", "falsz"),
   ("Zawsze wybierać rozwiązanie najtańsze, bo optymalizuje zasoby", False, "Optymalizacja zasobów to tylko jeden z trzech składników wartości.", "zbyt-waskie")], bloom="zastosowanie")

q("q-fn-w-06", ["PR-02-02", "PR-02-05"], "goconqr", [17, 18],
  "Uzupełnij luki: „Wyznaczniki → ______ → cele organizacji → ______ → cele aktywatorów”.",
  [("cele związane z Informatyką; potrzeby interesariuszy", False, "Kolejność odwrócona.", "odwrocone"),
   ("potrzeby interesariuszy; procesy", False, "Procesy to jeden aktywator, a nie krok kaskady.", "inna-kategoria"),
   ("potrzeby interesariuszy; cele związane z Informatyką", True, "Kroki 1–4 kaskady (s. 17–18).", None),
   ("tworzenie wartości; wymiary aktywatora", False, "To nie są kroki kaskady.", "inna-kategoria")], bloom="wiedza")

q("q-fn-w-07", ["PR-02-10"], "goconqr", [25],
  "Co na Rysunku 10 (zintegrowana struktura ramowa) gromadzi obecne wytyczne ISACA, nowe materiały i inne standardy?",
  [("Referencyjny Model Procesu", False, "To model procesów, a nie miejsce integracji wiedzy.", "inna-kategoria"),
   ("Kaskada Celów", False, "Kaskada przekłada cele.", "inna-kategoria"),
   ("Baza wiedzy COBIT 5", True, "Il. 10 (s. 25): baza wiedzy zawiera aktualne treści i strukturę dla przyszłych treści.", None),
   ("Model Zdolności Procesu", False, "To model oceny.", "inna-kategoria")])

q("q-fn-w-08", ["PR-01-04"], "goconqr", [32],
  "Który z poniższych NIE jest celem ani cechą Referencyjnego Modelu Procesu COBIT 5?",
  [("Wspólny język dla kierownictwa IT i biznesu", False, "Jest (s. 32).", "falsz"),
   ("Podstawa pomiaru i monitorowania sprawności IT", False, "Jest (s. 32).", "falsz"),
   ("Ułatwienie audytu IT i komunikacji z dostawcami", False, "Jest (s. 32).", "falsz"),
   ("Narzucenie każdej organizacji dokładnie 37 procesów", True, "FW s. 32: model nie ma charakteru normatywnego, a każda organizacja definiuje własny zbiór procesów.", None)])

q("q-fn-w-09", ["PR-01-04"], "goconqr", [32],
  "Mała OSP Zawilce chce stosować COBIT 5. Czy musi mieć wszystkie 37 procesów?",
  [("Tak, bo inaczej formalnie nie stosuje COBIT 5", False, "FW s. 32 wprost temu przeczy.", "falsz"),
   ("Nie, jeśli mniejsza liczba procesów obejmuje wszystkie konieczne cele", True, "FW s. 32: mniejsze organizacje mogą mieć mniej procesów.", None),
   ("Nie, bo małej jednostce wystarczy 5 procesów EDM", False, "Same procesy Ładu nie obejmują celów Zarządzania.", "zbyt-waskie"),
   ("Tak, ale może je wdrażać stopniowo przez kilka lat", False, "Rozłożenie w czasie nie zmienia zasady.", "falsz")], bloom="zastosowanie")

q("q-fn-w-10", ["PR-02-07"], "isaca", [20],
  "Która korzyść z kaskady celów jest wymieniona w COBIT 5?",
  [("Daje uniwersalne mapowanie, które stosuje się mechanicznie", False, "FW s. 20: nie należy jej stosować mechanicznie.", "odwrocone"),
   ("Zastępuje ocenę zdolności procesów", False, "Nie zastępuje.", "falsz"),
   ("Wyznacza wysokość budżetu IT", False, "Kaskada nie liczy budżetu.", "falsz"),
   ("Filtruje bazę wiedzy COBIT 5, żeby dobrać wytyczne do projektu", True, "FW s. 20 wymienia tę korzyść.", None)])

q("q-fn-w-11", ["PR-02-07"], "isaca", [20],
  "Komenda zaczyna korzystać z tabel mapowania kaskady celów. Co według COBIT 5 powinna zrobić NAJPIERW?",
  [("Dostosować mapowanie do własnej sytuacji", True, "FW s. 20: pierwszą czynnością zawsze jest dostosowanie mapowania.", None),
   ("Przyjąć tabele bez zmian, bo są wynikiem badań", False, "Tabele nie są uniwersalną prawdą.", "falsz"),
   ("Ocenić zdolność wszystkich 37 procesów", False, "To może przyjść później, ale nie najpierw.", "prawda-nie-na-temat"),
   ("Wybrać procesy z relacją S (wspierającą)", False, "Relacje P i S to tylko wskazówki.", "falsz")], bloom="zastosowanie")

q("q-fn-w-12", ["PR-02-14"], "isaca", [31],
  "Na egzaminie pada pytanie, kto zwykle odpowiada za Ład. W Twojej komendzie robi to w praktyce naczelnik informatyki. Co zaznaczasz?",
  [("Naczelnika informatyki, bo tak jest w mojej organizacji", False, "Na egzaminie odpowiada się według COBIT, a nie według praktyki własnej organizacji.", "prawda-nie-na-temat"),
   ("Zarząd (organ Ładu) pod przewodnictwem prezesa", True, "FW s. 31: w większości organizacji za Ład odpowiada zarząd pod przywództwem prezesa.", None),
   ("Kadrę zarządzającą pod kierunkiem dyrektora generalnego (CEO)", False, "Tak COBIT opisuje odpowiedzialność za Zarządzanie.", "odwrocone"),
   ("Audytora wewnętrznego", False, "Audyt monitoruje, ale nie sprawuje Ładu.", "inna-kategoria")], bloom="zastosowanie")

q("q-fn-w-13", ["PR-01-01"], "wiki", [14, 23],
  "Co oznacza zasada 2 dla traktowania informacji i technologii w komendzie?",
  [("Są sprawą wyłącznie Wydziału Łączności i Informatyki komendy", False, "Zasada 2 mówi o całej organizacji.", "zbyt-waskie"),
   ("Są aktywami, o które dbają wszyscy pracownicy", True, "FW s. 14: informacja i technologia są aktywami, które uwzględniają wszyscy.", None),
   ("Są ważne tylko wtedy, gdy wspierają procesy EDM", False, "Nie ma takiego ograniczenia.", "falsz"),
   ("Zarządza się nimi osobno, poza ładem korporacyjnym", False, "Odwrotnie: Ład IT jest częścią ładu korporacyjnego (s. 23).", "odwrocone")])

q("q-fn-w-14", ["PR-01-01"], "wiki", [23],
  "Komenda przeniosła serwery „Syreny” do firmy Kwant-Sygnał. Czy ta zewnętrzna usługa mieści się w zakresie COBIT 5?",
  [("Nie, COBIT 5 dotyczy tylko zasobów własnych", False, "FW s. 23: obejmuje także zewnętrzne usługi IT.", "falsz"),
   ("Tylko wtedy, gdy dostawca ma ważny certyfikat ISO/IEC 27001", False, "Certyfikat nie decyduje o zakresie COBIT.", "falsz"),
   ("Tak – zasada 2 obejmuje także zewnętrzne usługi IT", True, "FW s. 23 podaje to wprost.", None),
   ("Tak, ale wyłącznie w domenie DSS", False, "Usługa zewnętrzna dotyczy wielu domen, np. APO10 (dostawcy).", "zbyt-waskie")], bloom="zastosowanie")

q("q-fn-w-15", ["PR-02-14"], "wiki", [31],
  "Dlaczego COBIT 5 oddziela Ład od Zarządzania?",
  [("Bo to inne działania, inne struktury i inne cele", True, "FW s. 31 podaje to wprost.", None),
   ("Bo Ład dotyczy IT, a Zarządzanie biznesu", False, "Oba dotyczą IT w organizacji.", "falsz"),
   ("Bo Ład jest potrzebny tylko w dużych firmach z radą nadzorczą", False, "COBIT 5 nadaje się dla organizacji każdej wielkości.", "falsz"),
   ("Bo Ład wykonuje procesy MEA, a Zarządzanie EDM", False, "Odwrotnie: EDM to Ład, a MEA to Zarządzanie.", "odwrocone")])

q("q-fn-w-16", ["M0-00-08", "PR-01-01"], "itwiz", [14, 31],
  "W artykule branżowym czytasz o „pryncypiach COBIT 5” i o „ładzie informatycznym”. Jak przełożyć te słowa na język egzaminu PL?",
  [("pryncypia = polityki; ład informatyczny = Ład", False, "Pryncypia to nie polityki.", "inna-kategoria"),
   ("pryncypia = zasady; ład informatyczny = Zarządzanie", False, "„Ład informatyczny” to governance, czyli Ład.", "odwrocone"),
   ("pryncypia = aktywatory; ład informatyczny = Struktura ramowa", False, "Pomieszane kategorie.", "falsz"),
   ("pryncypia = zasady (5 zasad); ład informatyczny = Ład", True, "Trzeci wariant terminologii: egzamin mówi „zasady” i „Ład”, podręcznik „zasady” i „nadzór”.", None)])

q("q-fn-w-17", ["PR-01-05", "PR-02-13"], "goodel", [29],
  "Uzupełnij luki: „Pytania o potrzeby interesariuszy i o osiągnięcie celów mierzy się wskaźnikami ______, a pytania o cykl życia i dobre praktyki – wskaźnikami ______”.",
  [("wiodącymi; opóźnionymi", False, "Odwrotnie.", "odwrocone"),
   ("opóźnionymi; wiodącymi", True, "FW s. 29: dwa pierwsze pytania dotyczą wyniku (opóźnione), dwa ostatnie przebiegu (wiodące).", None),
   ("wyprzedzającymi; następującymi", False, "To nazwy z podręcznika. Na egzaminie: wiodące i opóźnione. Kolejność też jest odwrócona.", "forma-podrecznikowa"),
   ("opóźnionymi; opóźnionymi", False, "Cykl życia i praktyki to wskaźniki wiodące.", "zbyt-waskie")], bloom="wiedza")

q("q-fn-w-18", ["PR-02-12", "PR-02-10"], "goodel", [29],
  "Komenda nie znajduje w COBIT 5 szczegółowych dobrych praktyk dla aktywatora Usługi, infrastruktura i aplikacje. Co według COBIT 5 robi?",
  [("Uznaje, że ten aktywator nie ma wymiaru dobrych praktyk", False, "Każdy aktywator ma ten wymiar.", "falsz"),
   ("Pomija ten aktywator", False, "Zasada 4 wymaga podejścia całościowego.", "falsz"),
   ("Korzysta z wytycznych innych standardów i metodyk", True, "FW s. 29: przy aktywatorach bez przykładów w COBIT można użyć innych standardów.", None),
   ("Czeka na ocenę zdolności tego aktywatora", False, "Ocena zdolności dotyczy procesów.", "inna-kategoria")], bloom="zastosowanie")

q("q-fn-w-19", ["PR-02-12"], "goodel", [29],
  "Który etap NIE jest fazą cyklu życia aktywatora?",
  [("Projektowanie", False, "Jest fazą (s. 29).", "falsz"),
   ("Certyfikacja", True, "Fazy to: planowanie, projektowanie, budowanie/nabywanie/tworzenie/wdrażanie, użytkowanie/obsługa, ocena/monitorowanie, aktualizacja/pozbywanie się.", None),
   ("Ocena/monitorowanie", False, "Jest fazą (s. 29).", "falsz"),
   ("Aktualizacja/pozbywanie się", False, "Jest fazą (s. 29).", "falsz")], bloom="wiedza")

q("q-fn-w-20", ["PR-02-06"], "goodel", [29],
  "Dane alarmowe „Syreny” mają być widoczne tylko dla uprawnionych dyżurnych. Do której kategorii celów aktywatora należy ten wymóg?",
  [("Do celów dotyczących dokładności i obiektywności danych", False, "To jakość wewnętrzna.", "inna-kategoria"),
   ("Do celów dotyczących dopasowania danych do zadania", False, "To jakość kontekstowa.", "inna-kategoria"),
   ("Do sposobu wdrożenia aktywatora, czyli praktyk", False, "To wymiar dobrych praktyk, a nie kategoria celów.", "inna-kategoria"),
   ("Do celów dotyczących dostępu i zabezpieczenia wyników", True, "FW s. 29: wyniki zabezpieczone, dostępne tylko dla uprawnionych.", None)])

q("q-fn-w-21", ["EN-02-07", "M0-00-01"], "goodel", [28, 29],
  "Pani Kaczmarek z ul. Lipowej nie używa „Syreny”, ale ponosi skutki jej awarii. Czy jest interesariuszem tego aktywatora?",
  [("Tak, jako interesariusz zewnętrzny", True, "FW s. 28: interesariusze odgrywają aktywną rolę i/lub są zainteresowani. Bywają wewnętrzni i zewnętrzni.", None),
   ("Nie, bo nie odgrywa w systemie żadnej aktywnej roli", False, "Wystarczy być zainteresowanym.", "zbyt-waskie"),
   ("Tak, wewnętrznym, bo mieszka w Modrzewiowie", False, "Nie jest częścią komendy.", "falsz"),
   ("Nie, interesariuszami są tylko strony z tabeli RACI", False, "RACI dotyczy procesów. Pojęcie interesariusza jest szersze.", "zbyt-waskie")], bloom="zastosowanie")

q("q-fn-w-22", ["EN-01-01"], "goconqr", [27],
  "Które zdanie NAJLEPIEJ opisuje aktywator Procesy?",
  [("Kluczowe jednostki podejmujące decyzje w organizacji", False, "To struktury organizacyjne.", "inna-kategoria"),
   ("Uporządkowany zbiór praktyk i działań, który daje określone wyniki", True, "FW s. 27 podaje taką definicję.", None),
   ("Środek przełożenia pożądanych zachowań na praktyczne wytyczne", False, "To zasady, polityki i struktury ramowe.", "inna-kategoria"),
   ("Infrastruktura, technologia i aplikacje, które przetwarzają dane", False, "To usługi, infrastruktura i aplikacje.", "inna-kategoria")], bloom="wiedza")

q("q-fn-w-23", ["PC-01-01"], "simpl", [42],
  "Proces obsługi zgłoszeń w komendzie osiągnął dopiero poziom zdolności 1. Jak to ocenić według COBIT 5?",
  [("To porażka – sensowny jest dopiero poziom 3", False, "FW tego nie mówi.", "falsz"),
   ("Poziom 1 oznacza tylko, że proces jest udokumentowany", False, "Poziom 1 oznacza, że proces osiąga swój cel. Dokumentacja to nie to samo.", "falsz"),
   ("To ważne osiągnięcie – proces osiąga swój cel", True, "FW s. 42: osiągnięcie poziomu 1 jest już ważnym osiągnięciem.", None),
   ("Poziom 1 jest niemożliwy bez osiągnięcia poziomu 2", False, "Odwrotnie: wyższy wymaga niższego.", "odwrocone")])

q("q-fn-w-24", ["PC-02-04"], "simpl", [42],
  "Praktyki bazowe i produkty pracy to wskaźniki którego wymiaru oceny w Modelu Oceny Procesu?",
  [("Wskaźniki zdolności: typowe praktyki, zasoby i produkty", False, "Wymiar Zdolności mierzą typowe praktyki, typowe zasoby i typowe produkty pracy.", "odwrocone"),
   ("Wskaźniki wykonania procesu, czyli Wymiar Procesu", True, "Il. 19: wyniki procesu, praktyki bazowe i produkty pracy to wskaźniki wykonania (w podręczniku: „wskaźniki wydajności”) procesu.", None),
   ("Atrybuty dojrzałości przeniesione z COBIT 4.1", False, "COBIT 5 nie ocenia dojrzałości.", "falsz"),
   ("Wymiar interesariuszy z modelu aktywatora", False, "To wymiar aktywatora, a nie oceny.", "inna-kategoria")])

q("q-fn-w-25", ["IM-02-03"], "goconqr", [39],
  "Od czego według COBIT 5 powinno się zacząć inicjatywę wdrożeniową?",
  [("Od wyboru dostawcy narzędzi", False, "To nie jest pierwszy krok.", "falsz"),
   ("Od oceny zdolności wszystkich 37 procesów", False, "Ocena przychodzi w fazie 2, i to dla wybranych procesów.", "prawda-nie-na-temat"),
   ("Od szczegółowego harmonogramu prac", False, "Harmonogram to krok kolejny.", "odwrocone"),
   ("Od jasnego określenia pożądanych wyników biznesowych", True, "FW s. 39: pierwszy krok to jasne określenie pożądanych wyników biznesowych.", None)])

q("q-fn-w-26", ["IM-02-05"], "goconqr", [37],
  "Jak według COBIT 5 osiąga się trwałą poprawę przy wdrażaniu zmiany?",
  [("Przez zaangażowanie ludzi, a w razie potrzeby egzekwowanie zgodności", True, "FW s. 37 podaje to wprost.", None),
   ("Wyłącznie przez polecenia służbowe i kary dyscyplinarne", False, "To tylko jedna z dróg, i to nie główna.", "zbyt-waskie"),
   ("Wyłącznie przez wymianę starych narzędzi IT na nowe", False, "Narzędzia nie zmieniają zachowań.", "falsz"),
   ("Przez założenie, że ludzie chętnie przyjmą zmianę", False, "FW s. 37 każe nie zakładać chętnej akceptacji.", "odwrocone")])

q("q-fn-w-27", ["IM-02-05"], "goconqr", [37],
  "Co według COBIT 5 powinien określać plan komunikacji programu wdrożeniowego?",
  [("Wyłącznie harmonogram szkoleń dla użytkowników", False, "Za wąsko.", "zbyt-waskie"),
   ("Dla każdej fazy: treść, sposób i adresatów", True, "FW s. 37 podaje to wprost.", None),
   ("Tylko komunikaty kierowane do zarządu", False, "Adresaci zależą od fazy.", "zbyt-waskie"),
   ("Listę procesów objętych oceną zdolności", False, "To zakres oceny, a nie komunikacji.", "inna-kategoria")])

q("q-fn-w-28", ["IM-01-01"], "goconqr", [37],
  "Komendantka chce „jednego projektu COBIT na pół roku i koniec”. Co odpowiada na to COBIT 5?",
  [("To dobry plan, bo wdrożenie kończy się w fazie 7", False, "Faza 7 to utrzymanie dynamiki, a cykl się powtarza.", "falsz"),
   ("To dobry plan, jeśli uzasadnienie biznesowe go obejmuje", False, "Uzasadnienie nie zmienia natury ciągłego doskonalenia.", "prawda-nie-na-temat"),
   ("Ciągłe doskonalenie nie jest projektem jednorazowym", True, "FW s. 37: cykl życia ciągłego doskonalenia nie jest projektem jednorazowym.", None),
   ("Wdrożenie COBIT 5 nie wymaga zmiany", False, "Wymaga, i to w krągu aktywowania zmiany.", "falsz")])

q("q-fn-w-29", ["PC-02-01"], "simpl", [45],
  "Czy ocenę zdolności procesów można przeprowadzić z różnym stopniem rygoru?",
  [("Nie – zawsze musi to być formalna certyfikacja zewnętrzna", False, "FW s. 45 dopuszcza cele wewnętrzne.", "zbyt-waskie"),
   ("Nie – ocena jest zawsze samooceną", False, "Ocena opiera się na dowodach.", "falsz"),
   ("Tak, ale tylko dla procesów Ładu (EDM)", False, "Dotyczy każdego procesu.", "falsz"),
   ("Tak – zależnie od celu: wewnętrznego albo zewnętrznego", True, "FW s. 45 podaje to wprost.", None)])

q("q-fn-w-30", ["PC-01-01", "PC-02-05"], "simpl", [42, 43],
  "Komendantka chce, żeby wszystkie procesy komendy osiągnęły poziom zdolności 5. Jak to ocenić według COBIT 5?",
  [("Poziom docelowy wybiera się według kosztów, korzyści i wykonalności", True, "FW s. 42–43 podaje to wprost.", None),
   ("To standardowy cel każdego wdrożenia COBIT 5", False, "Nie jest.", "falsz"),
   ("Poziom 5 jest wymagany tylko dla procesów Ładu EDM", False, "Nie ma takiej reguły.", "falsz"),
   ("Poziom 5 jest obowiązkowy w jednostkach sektora publicznego", False, "Nie ma takiego wymogu.", "falsz")])

out = []
for n, x in enumerate(Q):
    opts = x["opcje"]; ci = [i for i, o in enumerate(opts) if o[1]]; assert len(ci) == 1, x["id"]
    corr = opts[ci[0]]; wrong = [o for o in opts if not o[1]]; t = (n + 1) % 4
    new = wrong[:t] + [corr] + wrong[t:]
    opcje = []
    for tx, ok, w, pk in new:
        o = {"tekst": tx, "poprawna": ok, "wyjasnienie": w}
        if not ok: o["pulapka"] = pk
        opcje.append(o)
    zr = [{"doc": "WWW", "url": x["url"], "dostep": "2026-11-08", "uwaga": "inspiracja tematu – treść własna"}] + [{"doc": "FW-PL", "strona": s} for s in x["strony"]]
    out.append({"id": x["id"], "typ": "egzamin", "sylabus": x["syl"], "bloom": x["bloom"], "trudnosc": 3, "final": "www",
                "tresc": x["tresc"], "zrodlo": zr, "status": "oficjalne", "opcje": opcje})
json.dump({"_opis": "F2 – pytania inspirowane publicznymi źródłami (METODYKA §15). Treść własna, fakty zweryfikowane z FW-PL.", "pytania": out},
          open(OUT, "w"), ensure_ascii=False, indent=1)
print("pytań:", len(out), Counter(x["sylabus"][0][:2] for x in out))
print("litery:", Counter("ABCD"[[o["poprawna"] for o in x["opcje"]].index(True)] for x in out))
print("poprawna najdłuższa:", sum(1 for x in out if max(x["opcje"], key=lambda o: len(o["tekst"]))["poprawna"]), "/", len(out))
for x in out:
    L = sorted(((len(o["tekst"]), o["poprawna"]) for o in x["opcje"]), reverse=True)
    if L[0][1] and L[0][0] > 1.4 * L[1][0]: print("  wyraźnie najdłuższa:", x["id"], L[0][0], L[1][0])
