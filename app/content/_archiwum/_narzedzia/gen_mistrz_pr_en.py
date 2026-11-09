# Generator F3 – pytania mistrzowskie (METODYKA §15). Część 1: PR i EN.
# Format: (id, sylabus, strony FW-PL, ilustracja|None, tresc, [(tekst, poprawna, wyjasnienie, pulapka|None)...])
Q = []
def q(id, syl, strony, il, tresc, opcje, bloom="rozumienie"):
    Q.append(dict(id=id, syl=syl, strony=strony, il=il, tresc=tresc, opcje=opcje, bloom=bloom))

# ---------------- PR ----------------
q("q-fn-m-01", ["PR-02-01"], [17], "3",
  "Skarbnik powiatu mówi komendantce Wrzos: „Tworzenie wartości to po prostu największa korzyść za najmniejsze pieniądze”. Które sformułowanie NAJLEPIEJ oddaje cel Ładu według COBIT 5?",
  [("Osiąganie korzyści przy optymalnym wykorzystaniu zasobów i optymalizacji ryzyka", True, "Tak definiuje to FW s. 17: korzyści, zasoby i ryzyko są trzema składnikami tworzenia wartości.", None),
   ("Maksymalizacja korzyści finansowych przy minimalnych kosztach", False, "Za wąsko: korzyść nie musi być finansowa (w urzędzie to usługa publiczna), a brakuje ryzyka.", "zbyt-waskie"),
   ("Zredukowanie ryzyka IT do zera przy stałym budżecie", False, "COBIT mówi o optymalizacji ryzyka, nie o jego eliminacji.", "falsz"),
   ("Dostarczanie usług IT zgodnie z umowami o poziomie usług", False, "To rezultat zarządzania (DSS/APO09), a nie cel Ładu.", "inna-kategoria")])

q("q-fn-m-02", ["PR-02-01"], [17], "3",
  "Przy każdej decyzji o „Syrenie” komendantka chce zadawać trzy pytania, które COBIT 5 wiąże z tworzeniem wartości. Które to pytania?",
  [("Czy potrzeby interesariuszy są zaspokojone? Czy cele osiągnięto? Czy cykl życia jest zarządzany?", False, "To pytania zarządzania wydajnością aktywatora (s. 29), nie tworzenia wartości.", "inna-kategoria"),
   ("Kto odnosi korzyści? Kto ponosi ryzyko? Jakie zasoby są wymagane?", True, "FW s. 17: te trzy pytania należy zadać przy każdej decyzji.", None),
   ("Kto decyduje? Kto wykonuje? Kto monitoruje?", False, "Brzmi jak opis Ładu i Zarządzania, ale to nie są pytania z FW.", "falsz"),
   ("Jakie są wyznaczniki? Gdzie jesteśmy? Dokąd zmierzamy?", False, "To pytania faz 1–3 cyklu życia wdrożenia (s. 38).", "inna-kategoria")])

q("q-fn-m-03", ["PR-02-02"], [17], "4",
  "Komenda wojewódzka ogłasza nowe wymagania dotyczące czasu powiadamiania zastępów. W KASKADZIE CELÓW COBIT 5 ta zmiana jest przede wszystkim:",
  [("zdarzeniem wyzwalającym, które otwiera okno na zmianę", False, "Tak nazwiemy ją w cyklu życia wdrożenia (s. 37), ale pytanie dotyczy kaskady celów.", "prawda-nie-na-temat"),
   ("celem organizacji w zrównoważonej karcie wyników", False, "Cel organizacji powstaje dopiero z potrzeb interesariuszy (krok 2).", "inna-kategoria"),
   ("wyznacznikiem wpływającym na potrzeby interesariuszy", True, "Krok 1 kaskady (s. 17): zmiany regulacyjne, strategiczne i technologiczne wpływają na potrzeby interesariuszy.", None),
   ("celem związanym z Informatyką w obszarze zgodności", False, "To krok 3 kaskady.", "inna-kategoria")], bloom="zastosowanie")

q("q-fn-m-04", ["PR-02-06"], [29, 18], None,
  "Naczelnik Sikora twierdzi: „Kaskada celów kończy się na procesach, bo Rysunek 23 mapuje cele związane z Informatyką na procesy”. Jak to ocenić?",
  [("Ma rację – procesy są ostatnim, czwartym krokiem kaskady", False, "Procesy to tylko jeden z siedmiu aktywatorów.", "zbyt-waskie"),
   ("Nie ma racji – kaskada kończy się na celach aktywatorów", True, "FW s. 29: cele aktywatorów to ostateczny etap kaskady. Mapowanie na procesy jest przykładem dla jednego aktywatora.", None),
   ("Nie ma racji – kaskada kończy się na potrzebach interesariuszy", False, "Odwrotnie: potrzeby są na początku kaskady.", "odwrocone"),
   ("Ma rację – cele aktywatorów są zdefiniowane tylko dla procesów", False, "Cele są zdefiniowane dla każdego aktywatora (wymiar „Cele”).", "falsz")])

q("q-fn-m-05", ["PR-02-08"], [23, 24], "8",
  "Który element NIE jest składnikiem Podejścia do Ładu w COBIT 5?",
  [("Aktywatory Ładu", False, "To składnik (s. 24).", "falsz"),
   ("Zakres Ładu", False, "To składnik (s. 24).", "falsz"),
   ("Kaskada Celów", True, "Kaskada jest mechanizmem zasady 1, a nie składnikiem Podejścia do Ładu. Składniki to cel (tworzenie wartości), aktywatory, zakres oraz role, działania i relacje.", None),
   ("Role, działania i relacje", False, "To składnik (s. 24, il. 9).", "falsz")])

q("q-fn-m-06", ["PR-02-09"], [24], "9",
  "Na Rysunku 9 (kluczowe role, działania i relacje) jaka relacja łączy właścicieli i interesariuszy z organem Ładu?",
  [("Wyznaczanie kierunku", False, "Tę relację ma organ Ładu wobec Zarządzania.", "odwrocone"),
   ("Instruowanie i dopasowanie", False, "Tę relację ma Zarządzanie wobec eksploatacji i wykonania.", "inna-kategoria"),
   ("Monitorowanie i raportowanie", False, "Raportowanie płynie w górę, od wykonania do Zarządzania.", "odwrocone"),
   ("Delegowanie", True, "Właściciele delegują, a organ Ładu rozlicza się przed nimi.", None)])

q("q-fn-m-07", ["PR-02-14", "PR-02-15"], [31, 32], None,
  "Które działanie należy do Ładu, a NIE do Zarządzania?",
  [("Monitorowanie wydajności i zgodności IT w ramach MEA01", False, "Pułapka: słowo „monitorowanie” występuje w obu. MEA to domena Zarządzania.", "inna-kategoria"),
   ("Nadawanie priorytetów i podejmowanie decyzji, które wyznaczają kierunek", True, "FW s. 31: Ład ocenia, kieruje przez priorytety i decyzje oraz monitoruje względem uzgodnionego kierunku.", None),
   ("Planowanie, tworzenie, uruchamianie i monitorowanie działań zgodnie z kierunkiem", False, "To definicja Zarządzania (PBRM).", "odwrocone"),
   ("Opracowanie strategii IT (APO02)", False, "Strategia IT powstaje w domenie Zarządzania (APO), a Ład ją ocenia i zatwierdza.", "inna-kategoria")], bloom="zastosowanie")

q("q-fn-m-08", ["PR-01-04"], [32, 33], "16",
  "Ile procesów zawierają domeny Zarządzania w Referencyjnym Modelu Procesu COBIT 5?",
  [("37", False, "37 to wszystkie procesy, także 5 procesów EDM.", "zbyt-waskie"),
   ("34", False, "34 procesy miał COBIT 4.1, a nie COBIT 5.", "falsz"),
   ("32", True, "APO 13 + BAI 10 + DSS 6 + MEA 3 = 32. Razem z 5 procesami EDM daje to 37.", None),
   ("5", False, "5 to liczba procesów Ładu (EDM).", "odwrocone")], bloom="wiedza")

q("q-fn-m-09", ["PR-01-04"], [33], "16",
  "Audytorka Lis ma co kwartał sprawdzać, czy komenda spełnia wymogi zewnętrzne (przepisy, umowy z dostawcą). Który proces COBIT 5 to obejmuje?",
  [("MEA03 – ocena zgodności z wymogami zewnętrznymi", True, "MEA03 obejmuje zgodność z wymogami zewnętrznymi (il. 16).", None),
   ("EDM05 – zapewnienie przejrzystości wobec interesariuszy", False, "EDM05 to raportowanie interesariuszom na poziomie Ładu. EDM monitoruje realizację kierunku na poziomie Ładu. Bieżąca ocena zgodności to MEA.", "prawda-nie-na-temat"),
   ("APO12 – zarządzanie ryzykiem", False, "APO12 dotyczy ryzyka, a nie oceny zgodności.", "inna-kategoria"),
   ("DSS06 – mechanizmy kontrolne procesów biznesowych", False, "DSS06 to kontrole w procesach biznesowych, a nie ocena zgodności z wymogami zewnętrznymi.", "inna-kategoria")], bloom="zastosowanie")

q("q-fn-m-10", ["PR-01-03"], [31, 33], "16",
  "Komendantka Wrzos ustala apetyt na ryzyko dla systemów łączności i sprawdza, czy ryzyko IT mieści się w tej granicy. Który proces to opisuje?",
  [("APO12 – zarządzanie ryzykiem", False, "APO12 identyfikuje i analizuje ryzyko oraz na nie reaguje, czyli to Zarządzanie. Apetyt na ryzyko ustala Ład.", "odwrocone"),
   ("DSS04 – zarządzanie ciągłością", False, "Ciągłość działania to inny temat.", "inna-kategoria"),
   ("MEA02 – ocena systemu kontroli wewnętrznej", False, "To ocena kontroli, a nie ustalanie apetytu na ryzyko.", "inna-kategoria"),
   ("EDM03 – zapewnienie optymalizacji ryzyka", True, "FW s. 31: określanie apetytu na ryzyko to decyzja struktur Ładu, a EDM03 jest procesem Ładu dla ryzyka.", None)], bloom="zastosowanie")

q("q-fn-m-11", ["PR-02-10", "PR-02-11"], [25], "10",
  "Komenda stosuje ITIL w obsłudze zgłoszeń i ISO/IEC 27001 w bezpieczeństwie. Co według zasady 3 robi wobec nich COBIT 5?",
  [("Zastępuje je, bo zawiera wszystkie ich szczegóły", False, "COBIT nie zastępuje szczegółowych standardów.", "falsz"),
   ("Wymaga wybrania jednego z nich jako głównego", False, "Nie ma takiego wymogu.", "falsz"),
   ("Jest nadrzędną strukturą ramową, która je integruje i porządkuje", True, "FW s. 25: COBIT 5 jest spójny z innymi standardami i służy jako nadrzędna struktura, która je integruje.", None),
   ("Dotyczy wyłącznie Ładu, więc z ITIL się nie łączy", False, "COBIT 5 obejmuje zarówno Ład, jak i Zarządzanie.", "falsz")])

q("q-fn-m-12", ["PR-02-13"], [29], "13",
  "Który miernik dla nowej polityki powiadamiania jest wskaźnikiem WIODĄCYM?",
  [("Spadek liczby opóźnionych alarmów w kwartale po wdrożeniu", False, "To efekt, czyli osiągnięcie celu. To wskaźnik opóźniony.", "odwrocone"),
   ("Zadowolenie dyżurnych z polityki", False, "Dotyczy potrzeb interesariuszy, więc to wskaźnik opóźniony.", "odwrocone"),
   ("Odsetek dyżurnych przeszkolonych z polityki przed jej wejściem w życie", True, "Mierzy stosowanie praktyk i cykl życia, czyli przebieg. FW s. 29: to wskaźniki wiodące.", None),
   ("Stopień osiągnięcia celów polityki", False, "Osiągnięcie celów to wskaźnik opóźniony.", "odwrocone")], bloom="zastosowanie")

# ---------------- EN ----------------
q("q-fn-m-13", ["PR-01-02"], [27, 24], "12",
  "Które trzy aktywatory COBIT 5 są JEDNOCZEŚNIE zasobami organizacji, którymi trzeba zarządzać?",
  [("Zasady, polityki i struktury ramowe; Procesy; Struktury organizacyjne", False, "To aktywatory, ale nie zasoby.", "odwrocone"),
   ("Informacja; Usługi, infrastruktura i aplikacje; Ludzie, umiejętności i kompetencje", True, "FW s. 27, il. 12: te trzy aktywatory są oznaczone jako zasoby.", None),
   ("Procesy; Informacja; Kultura, etyka i zachowanie", False, "Procesy i kultura nie są zasobami.", "falsz"),
   ("Wszystkie siedem aktywatorów", False, "FW wskazuje tylko trzy.", "falsz")], bloom="wiedza")

q("q-fn-m-14", ["PR-02-12"], [28, 29], "13",
  "Do którego wymiaru aktywatora należą „produkty pracy (wejścia i wyjścia)”?",
  [("Cele", False, "Wyniki brzmią jak cele, ale na Rysunku 13 produkty pracy są w dobrych praktykach.", "inna-kategoria"),
   ("Cykl życia", False, "Cykl życia to fazy: od planowania do pozbywania się.", "inna-kategoria"),
   ("Dobre praktyki", True, "Il. 13 i s. 29: dobre praktyki obejmują praktyki oraz produkty pracy (wejścia i wyjścia); w podręczniku: „produkty działań”.", None),
   ("Interesariusze", False, "Interesariusze to strony wewnętrzne i zewnętrzne.", "inna-kategoria")])

q("q-fn-m-15", ["EN-02-17"], [82], None,
  "Raport dla komendantki zawiera dane sprzed trzech miesięcy, choć potrzebne są bieżące. Którą kategorię jakości informacji to narusza?",
  [("Jakość wewnętrzną", False, "Jakość wewnętrzna dotyczy zgodności z prawdą (dokładność, obiektywność, wiarygodność, reputacja).", "inna-kategoria"),
   ("Jakość kontekstową", True, "Aktualność należy do jakości kontekstowej (i reprezentacji), bo zależy od zadania, do którego używamy informacji (s. 82).", None),
   ("Dostęp i bezpieczeństwo", False, "Raport jest dostępny, tylko nieaktualny.", "inna-kategoria"),
   ("Warstwę empiryczną", False, "To warstwa modelu informacji (dostęp), a nie kategoria jakości.", "inna-kategoria")], bloom="zastosowanie")

q("q-fn-m-16", ["EN-02-17"], [82], None,
  "Informacja pochodzi z cenionego źródła, np. z oficjalnego komunikatu komendy głównej. Ta cecha to „reputacja”. Do której kategorii jakości informacji należy?",
  [("Jakość wewnętrzna", True, "FW s. 82: jakość wewnętrzna obejmuje dokładność, obiektywność, wiarygodność i reputację.", None),
   ("Jakość kontekstowa", False, "Reputacja nie zależy od zadania, tylko od źródła i treści.", "inna-kategoria"),
   ("Dostęp i bezpieczeństwo", False, "Reputacja nie dotyczy dostępu.", "inna-kategoria"),
   ("Warstwa świata społecznego", False, "To warstwa modelu informacji (kontekst), a nie kategoria jakości.", "inna-kategoria")])

q("q-fn-m-17", ["EN-02-18"], [83], None,
  "Ola Dudek usuwa zduplikowane rekordy i czyści dane w hurtowni zgłoszeń, żeby nadal były wartościowe. Która to faza cyklu informacji?",
  [("Aktualizacja/pozbywanie się", False, "Brzmi podobnie, ale FW przypisuje czyszczenie i scalanie do fazy oceny/monitorowania.", "zbyt-waskie"),
   ("Przechowywanie", False, "Przechowywanie to zapisywanie informacji.", "inna-kategoria"),
   ("Ocena/monitorowanie", True, "FW s. 83: dbanie o to, by informacja nadal miała wartość (wzbogacanie, czyszczenie, usuwanie duplikatów).", None),
   ("Wykorzystanie", False, "Wykorzystanie to użycie informacji do osiągnięcia celów.", "inna-kategoria")], bloom="zastosowanie")

q("q-fn-m-18", ["EN-02-19"], [84], None,
  "Przy projekcie nowej aplikacji zespół pyta: „Jak można uzyskać dostęp do informacji?”. Której warstwy modelu informacji dotyczy to pytanie?",
  [("Fizycznej", False, "Warstwa fizyczna odpowiada na pytanie, gdzie informacje są przechowywane.", "inna-kategoria"),
   ("Syntaktycznej", False, "Warstwa syntaktyczna to struktura i kodowanie.", "inna-kategoria"),
   ("Semantycznej", False, "Warstwa semantyczna to rodzaj i szczegółowość informacji.", "inna-kategoria"),
   ("Empirycznej", True, "FW s. 84, przykład 13: warstwa empiryczna = jak uzyskać dostęp do informacji.", None)], bloom="zastosowanie")

q("q-fn-m-19", ["EN-02-17"], [82], None,
  "Ola Dudek odpowiada za przechowywanie i utrzymanie danych w systemie „Syrena”. Do której OGÓLNEJ kategorii ról interesariuszy informacji należy?",
  [("Wytwórca informacji", False, "Wytwórca tworzy informacje.", "inna-kategoria"),
   ("Opiekun informacji", True, "FW s. 82: opiekun informacji odpowiada za przechowywanie i utrzymywanie informacji.", None),
   ("Konsument informacji", False, "Konsument korzysta z informacji.", "inna-kategoria"),
   ("Beneficjent", False, "To szczegółowa rola, a pytanie dotyczy kategorii ogólnych.", "zbyt-waskie")])

q("q-fn-m-20", ["EN-02-02"], [67], "28",
  "Komenda pisze dokument „Zasady łączności” i chce, żeby spełniał kryteria COBIT 5 dla ZASAD (a nie polityk). Co jest wymagane?",
  [("Ograniczona liczba, prosty język i możliwie precyzyjne wyrażenie podstawowych wartości", True, "FW s. 67: zasady muszą być nieliczne, napisane prostym językiem i precyzyjnie wyrażać podstawowe wartości.", None),
   ("Szczegółowe wytyczne, jak stosować reguły w codziennych decyzjach", False, "To opis polityk.", "odwrocone"),
   ("Opis wyjątków i konsekwencji nieprzestrzegania", False, "To elementy struktury polityk (s. 68).", "inna-kategoria"),
   ("Skuteczność, wydajność i nieinwazyjność", False, "To cechy dobrych polityk.", "odwrocone")])

q("q-fn-m-21", ["EN-02-03"], [67], None,
  "Nowa polityka haseł wywołuje u dyżurnych niepotrzebny opór, bo wydaje im się nielogiczna. Której cechy dobrej polityki brakuje?",
  [("Skuteczności", False, "Polityka może osiągać cel, a mimo to budzić opór.", "inna-kategoria"),
   ("Nieinwazyjności", True, "FW s. 67: dobra polityka jest nieinwazyjna (w podręczniku: „nieingerencyjna”), czyli wydaje się logiczna i nie budzi niepotrzebnego oporu.", None),
   ("Wydajności", False, "Wydajność to wdrożenie zasad najbardziej wydajnym sposobem.", "inna-kategoria"),
   ("Dostępności polityki", False, "Opór nie wynika z braku dostępu do dokumentu.", "prawda-nie-na-temat")], bloom="zastosowanie")

q("q-fn-m-22", ["EN-02-05", "EN-02-06"], [68], None,
  "Komenda A unika ryzyka, a komenda B jest gotowa je podejmować. Co według COBIT 5 powinno z tego wynikać dla ich polityk?",
  [("Obie powinny mieć identyczne polityki, bo przepisy są wspólne", False, "Polityki mają być dopasowane do apetytu na ryzyko.", "falsz"),
   ("Komenda B powinna mieć polityki bardziej restrykcyjne", False, "Odwrotnie: bardziej restrykcyjne ma ta, która unika ryzyka.", "odwrocone"),
   ("Apetyt na ryzyko dotyczy procesów, a nie polityk", False, "FW s. 68: apetyt na ryzyko powinien być odzwierciedlony w politykach.", "falsz"),
   ("Komenda A powinna mieć polityki bardziej restrykcyjne niż komenda B", True, "FW s. 68: przedsiębiorstwo niechętne ryzyku ma bardziej restrykcyjne polityki.", None)], bloom="zastosowanie")

q("q-fn-m-23", ["EN-02-14", "EN-02-16"], [80], None,
  "Wdrożenia w wydziale informatyki są ciągle zepsute, choć metodyka projektów jest dobra. Okazuje się, że premie zależą tylko od terminu i budżetu, a jakość się nie liczy. Który aktywator COBIT 5 jest tu kluczem do naprawy?",
  [("Kultura, etyka i zachowanie – zachęty promują niepożądane zachowanie", True, "FW s. 80: zachęty kształtują zachowanie, a system wynagradzania jest wyraźnie z nim powiązany.", None),
   ("Procesy – trzeba napisać nową metodykę projektów", False, "Metodyka jest dobra. FW pokazuje, że dobry proces nie działa przy złym zachowaniu.", "prawda-nie-na-temat"),
   ("Usługi, infrastruktura i aplikacje – potrzebne są lepsze narzędzia", False, "Problem nie leży w narzędziach.", "falsz"),
   ("Informacja – raporty projektowe są niedokładne", False, "Raporty mówią prawdę o terminie i budżecie. Problem leży w kryteriach ocen.", "falsz")], bloom="zastosowanie")

q("q-fn-m-24", ["EN-02-18"], [84], None,
  "Komenda zebrała ogromną, poprawną bazę danych o zdarzeniach, ale nikt jej nie używa. Ile ta informacja jest warta według COBIT 5?",
  [("Tyle, ile kosztowało jej zebranie", False, "Koszt nie jest miarą wartości informacji.", "falsz"),
   ("Ma wysoką wartość, bo jest dokładna i kompletna", False, "Jakość nie tworzy wartości bez wykorzystania.", "zbyt-waskie"),
   ("Wartość pojawi się dopiero wtedy, gdy informacja zostanie wykorzystana", True, "FW s. 84: informacje nie mają wartości same w sobie, a korzyści daje dopiero ich właściwe wykorzystanie.", None),
   ("Ma wartość, bo jest zasobem, a zasób zawsze ma wartość", False, "Informacja jest zasobem, ale jej wartość zależy od wykorzystania.", "prawda-nie-na-temat")])

q("q-fn-m-25", ["EN-02-25"], [30], None,
  "Przy zakupie „Syreny” komendantka Wrzos ponosi ostateczną odpowiedzialność za decyzję. Sikora przygotowuje analizę, księgowa Mak opiniuje koszty, a dyżurni dostają informację o wyniku. Jak wygląda RACI dla tej czynności?",
  [("Wrzos – R, Sikora – A, Mak – C, dyżurni – I", False, "Pomylone R i A: A (rozliczany) to ostateczna odpowiedzialność, R to wykonawca.", "odwrocone"),
   ("Wrzos – A, Sikora – R, Mak – C, dyżurni – I", True, "A = rozliczany (ostateczna odpowiedzialność), R = odpowiedzialny (wykonuje), C = konsultowany, I = informowany (s. 30).", None),
   ("Wrzos – A, Sikora – R, Mak – I, dyżurni – C", False, "Mak opiniuje, więc jest C. Dyżurni tylko dostają informację, więc są I.", "odwrocone"),
   ("Wrzos – A, Sikora – A, Mak – C, dyżurni – I", False, "Dwie osoby rozliczane rozmywają odpowiedzialność. Sikora wykonuje (R).", "falsz")], bloom="zastosowanie")

q("q-fn-m-26", ["PR-01-02", "EN-02-12"], [27], "12",
  "W komendzie działa „Zespół ds. priorytetów IT”, który decyduje, które projekty będą realizowane. Który to aktywator?",
  [("Ludzie, bo zespół tworzą konkretne osoby z umiejętnościami", False, "Zespół składa się z ludzi, ale jako jednostka decyzyjna jest strukturą.", "zbyt-waskie"),
   ("Struktura organizacyjna, bo to jednostka podejmująca decyzje", True, "FW s. 27: struktury organizacyjne to kluczowe jednostki odpowiedzialne za podejmowanie decyzji.", None),
   ("Proces, bo wybór projektów to powtarzalna czynność", False, "Proces to uporządkowany zbiór praktyk i działań, a nie jednostka decyzyjna.", "inna-kategoria"),
   ("Polityka, bo zespół działa według regulaminu", False, "Regulamin zespołu jest polityką, ale sam zespół jest strukturą.", "inna-kategoria")])

q("q-fn-m-27", ["PR-01-02", "EN-02-16"], [28], None,
  "Który przykład NAJLEPIEJ pokazuje systemowy charakter aktywatorów (zasada 4)?",
  [("Polityka bezpieczeństwa jest formalnie zatwierdzona przez komendantkę", False, "Zdanie prawdziwe, ale nie pokazuje zależności między aktywatorami.", "prawda-nie-na-temat"),
   ("Każdy aktywator ma własny cykl życia od planowania do wycofania", False, "Zdanie prawdziwe, ale dotyczy wymiarów, a nie zależności.", "prawda-nie-na-temat"),
   ("Procesy dzielą się na procesy Ładu i Zarządzania", False, "To zasada 5.", "inna-kategoria"),
   ("Procedury bezpieczeństwa nie działają, bo kultura ich nie wspiera", True, "FW s. 28, przykład 4: jeden aktywator potrzebuje drugiego, inaczej nie działa.", None)])

q("q-fn-m-28", ["PR-02-12", "EN-02-09"], [30], None,
  "Nowo powołani kierownicy procesów w komendzie najpierw projektują i definiują proces obsługi zgłoszeń. Później podnoszą jego poziom zdolności. Który wymiar aktywatora Procesy opisuje tę sekwencję?",
  [("Cykl życia", True, "FW s. 30, przykład 5: proces trzeba zaprojektować, uruchomić, monitorować, dostosowywać, a w końcu wycofać.", None),
   ("Dobre praktyki", False, "Kierownicy korzystają z przewodnika Procesy umożliwiające, ale sekwencja „projektuj → uruchom → doskonal” to cykl życia.", "prawda-nie-na-temat"),
   ("Cele", False, "Cele to mierniki procesu, a nie jego fazy.", "inna-kategoria"),
   ("Interesariusze", False, "Interesariusze to strony z tabeli RACI.", "inna-kategoria")])
