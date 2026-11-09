// Rozbiór pytania egzaminacyjnego („Jak czytać to pytanie”) i pomoc AI.
// Nie zdradza odpowiedzi: wskazuje słowa-sygnały w treści, typ pytania, pojęcia z treści i strategię.
import { esc } from './md.js';
import * as C from './content.js';

const strip = (s) => String(s || '').replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2').replace(/\[\[([^\]]+)\]\]/g, '$1').replace(/<[^>]+>/g, ' ').replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();

// Sygnały w treści pytania: [wyrażenie, etykieta, co to znaczy dla Ciebie]
const SYGNALY = [
  [/\bNIE\b|\bnie (jest|należy|stanowi|zalicza|odpowiada|dotyczy|opisuje|wchodzi|występuje|ma|są)\b|z wyjątkiem|wyjątkiem/, 'Przeczenie („NIE”)',
    'Szukasz jedynej odpowiedzi FAŁSZYWEJ. Trzy pozostałe są zgodne z COBIT 5. Przy każdej opcji zadaj sobie pytanie „czy to prawda w COBIT 5?” i skreślaj te, które są prawdziwe.'],
  [/(któr\w+|co) (\p{L}+ )?(jest|są) (prawdziw|poprawn|zgodn)|stwierdzeni\w* (jest|są) prawdziw|prawdziw\w+ (jest|są)\?/, 'Szukasz prawdziwego',
    'Tylko jedna odpowiedź jest w pełni zgodna z COBIT 5. W pozostałych zwykle jedno słowo zmienia sens (np. „zawsze”, „tylko”, zamienione role). Czytaj każdą opcję do końca.'],
  [/najlepiej|najlepsz|najtrafniej|najbardziej|najwłaściwsz|najprawdopodob|najczęściej|rzeczywist/, 'Stopniowanie („najlepiej”)',
    'Kilka odpowiedzi może być po części prawdziwych. Wybierz najpełniejszą według podręcznika COBIT 5, a nie według praktyki z Twojej pracy.'],
  [/główn|podstawow|najważniejsz|kluczow|nadrzędn|przede wszystkim/, 'Cel nadrzędny („główny”)',
    'Pytanie dotyczy głównego celu albo roli, a nie szczegółu. Odrzuć odpowiedzi prawdziwe, ale drugorzędne.'],
  [/pierwsz|najpierw|kolejnoś|następn|na początku|ostatni|faz/, 'Kolejność lub faza',
    'Liczy się kolejność kroków (np. faz cyklu wdrożenia albo kroków kaskady celów). Ułóż w myślach całą sekwencję i dopiero wtedy wybierz.'],
  [/\b(EDM|APO|BAI|DSS|MEA)\d{0,2}\b|któr\w+ proces|domen/, 'Proces lub domena',
    'Najpierw ustal, czy to Ład (EDM: Oszacuj, Kieruj, Monitoruj), czy Zarządzanie (APO, BAI, DSS, MEA: Planuj, Twórz, Wykonuj i Monitoruj). Potem dobierz proces po słowie-kluczu.'],
  [/poziom\w* zdolno|\bPA ?\d|atrybut|\bN\/P\/L\/F|\bN\/C\/W\/P|ocen\w+ proces|zdolnoś|jaki poziom|któr\w+ poziom|poziom \d/, 'Model zdolności procesu',
    'Na polskim egzaminie skala to N – Nieosiągnięty, C – Częściowy, W – Większościowy i P – Pełny. Uwaga: P znaczy Pełny, a nie „Partially”. Poziom jest osiągnięty, gdy jego atrybuty mają ocenę W lub P, a wszystkie atrybuty niższych poziomów mają P. Sprawdzaj poziom po poziomie od dołu.'],
  [/odpowiedzialn|\bRACI\b|rozliczan|kto (jest|powinien|odpowiada)|\brol[aięiy]\b/, 'Role i RACI',
    'A (Odpowiedzialny decyzyjnie) jest tylko jeden, a R (Odpowiedzialny wykonawczo) może być wielu. Rozróżnij, kto decyduje i rozlicza, a kto wykonuje.'],
  [/zasad/, 'Zasady COBIT 5',
    'Dopasuj opis do jednej z 5 zasad: 1 Realizacja potrzeb interesariusza, 2 Pokrycie całej organizacji, 3 Zastosowanie Pojedynczej Zintegrowanej Struktury Ramowej, 4 Aktywacja holistycznego podejścia, 5 Oddzielenie Ładu od Zarządzania.'],
  [/aktywator|wymiar|polityk|kultur|etyk|struktur\w* organizac|komitet|umiejętnoś|kompetencj|infrastruktur|aplikacj|usług\w* IT/, 'Aktywatory',
    'Siedem kategorii aktywatorów: Zasady, Polityki i Struktury ramowe; Procesy; Struktury organizacyjne; Kultura, Etyka i Zachowanie; Informacja; Usługi, Infrastruktura i Aplikacje; Ludzie, Umiejętności i Kompetencje. Każdy ma 4 wymiary: interesariusze, cele, cykl życia, dobre praktyki. Ustal, o którą kategorię albo który wymiar chodzi.'],
  [/nazywa się|nazw\w+ (na|z) (polskim )?egzamin|na (polskim )?egzaminie|po angielsku|angielsk|oryginał/, 'Nazwa z egzaminu',
    'Pytanie o nazwę. Wybierz wersję z polskiego egzaminu, a nie z podręcznika i nie dosłowne tłumaczenie. Pułapki nazw ćwiczysz w zakładce „Ćwiczenie nazw”.'],
  [/różni|odróżni|zamiast|\ba nie\b|w odróżnieniu/, 'Rozróżnienie pojęć',
    'Pytanie o różnicę między dwoma podobnymi pojęciami. Najpierw nazwij cechę, która je odróżnia (np. kto decyduje, a kto wykonuje), i sprawdź ją w każdej opcji.'],
  [/\bkto\b|\bKto\b/, 'Pytanie „kto?”',
    'Szukasz roli albo struktury, a nie działania. Ład należy do Organu Ładu (np. zarządu lub rady), a Zarządzanie do kierownictwa wykonawczego pod przewodnictwem dyrektora generalnego.'],
  [/kaskad|cel\w* (IT|korporacyjn|organizacj|aktywator)|potrzeb\w* interesariuszy/, 'Kaskada celów',
    'Kaskada idzie od wyznaczników przez potrzeby interesariuszy do celów organizacji, potem do celów IT i do celów aktywatorów. Ustal, na którym szczeblu jest pytanie.'],
  [/wdroż|zarządzani\w* zmian|aktywowani\w* zmian|ciągł\w+ doskonal|program/, 'Wdrożenie',
    'Cykl wdrożenia ma 7 faz i 3 pierścienie: Zarządzanie programem, Aktywowanie zmiany i Główny cykl życia ciągłego doskonalenia. Ustal, czy pytanie dotyczy fazy, czy pierścienia.'],
  [/według COBIT|zgodnie z COBIT|w COBIT 5|wg COBIT/, 'Perspektywa COBIT 5',
    'Odpowiadaj tak, jak mówi podręcznik COBIT 5, nawet jeśli w Twojej organizacji robi się to inaczej.'],
];

// Hasła zbyt ogólne, żeby tłumaczyć je w rozbiorze pytania.
const OCZYWISTE = new Set(['COBIT 5', 'COBIT', 'Organizacja', 'Proces', 'Internet', 'Działania', 'Aplikacja', 'Działanie']);

const SKRAJNE = /\b(zawsze|nigdy|wyłącznie|tylko|jedynie|całkowicie|wszystkie|wszystkich|żaden|żadne|każd\w+|musi|bez wyjątku)\b/i;

export function questionType(q) {
  const t = strip(q.tresc);
  const sentences = t.split(/(?<=[.!?])\s+/).filter(Boolean);
  if (q.scenariusz || q.kontekst || t.split(' ').length > 32 || (sentences.length >= 2 && !/\?$/.test(sentences[0]))) return ['Scenariusz', 'Przeczytaj najpierw ostatnie zdanie, czyli właściwe pytanie, a dopiero potem opis sytuacji. Z opisu wyłów 2–3 fakty, które pasują do pojęć COBIT 5. Resztę opisu potraktuj jako tło.'];
  if (/czym jest|co to jest|co oznacza|definic|najlepiej opisuje|czym (się )?różni/.test(t)) return ['Definicja', 'Pytanie o definicję: przypomnij sobie najpierw własnymi słowami, czym jest pojęcie, i dopiero potem czytaj odpowiedzi. Uważaj na odpowiedzi, które opisują pojęcie sąsiednie.'];
  if (/któr\w+ z poniższych|które z poniższych|wybierz/.test(t)) return ['Wybór z listy', 'Przy każdej opcji osobno oceń „prawda / fałsz według COBIT 5”. Nie szukaj od razu „najlepszej” odpowiedzi: najpierw odrzuć fałszywe.'];
  return ['Pytanie wprost', 'Zakryj odpowiedzi, sformułuj w myślach własną odpowiedź i dopiero wtedy znajdź opcję, która się z nią zgadza.'];
}

// Nazwa hasła jako wyrażenie odporne na odmianę: każde słowo skrócone do rdzenia + dowolna końcówka.
const reCache = new Map();
function termRe(t) {
  if (reCache.has(t.id)) return reCache.get(t.id);
  const n = (t.plEgzamin || '').replace(/\s*\(.*\)$/, '').replace(/^[A-Z]{3}\d{2}\s+/, '').trim();
  const ws = n.split(/\s+/).filter(Boolean);
  let re = null;
  if (n.length >= 3 && ws.length <= 4 && !/[:\/]/.test(n)) {
    const part = (w) => { const x = w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); return w.length >= 6 ? x.slice(0, Math.max(4, w.length - 2)) + '\\p{L}*' : w.length >= 4 ? x.slice(0, w.length - 1) + '\\p{L}*' : x + '\\p{L}{0,2}'; };
    const body = ws.map(part).join('\\s+');
    // Krótkie nazwy (np. „Ład”) tylko z wielką literą, żeby nie łapać zwykłych słów.
    re = new RegExp('(?<!\\p{L})' + body + '(?!\\p{L})', ws.length === 1 && n.length <= 5 ? 'u' : 'iu');
  }
  reCache.set(t.id, re);
  return re;
}

// Analiza bez zdradzania odpowiedzi.
export function analyze(q, terms = C.termsSync()) {
  const stem = strip(`${q.scenariusz || ''} ${q.kontekst || ''} ${q.tresc || ''}`);
  // Przeczenie tylko wersalikami lub w zwrotach „nie jest…”; pozostałe sygnały bez względu na wielkość liter.
  const signals = SYGNALY.filter(([re], i) => (i === 0 ? re : new RegExp('(?<!\\p{L})(?:' + re.source + ')', 'iu')).test(stem)).map(([, l, d]) => ({ l, d }));
  const extreme = (q.opcje || []).map((o, i) => [i, strip(o.tekst || o.t)]).filter(([, t]) => SKRAJNE.test(t));
  const ids = C.termsOfQuestion(q).filter((id) => terms && terms.get(id));
  // Pojęcia, których nazwy padają w treści – „słowniczek” pytania.
  const named = [];
  if (terms) for (const t of terms.values()) {
    const re = termRe(t);
    if (re && re.test(stem) && !ids.includes(t.id)) named.push(t.id);
  }
  const all = [...new Set([...ids, ...named])].map((id) => terms.get(id)).filter((t) => !OCZYWISTE.has(t.plEgzamin)).slice(0, 6);
  return { type: questionType(q), signals, extreme, terms: all };
}

const firstSentence = (s) => { const m = strip(s).match(/^.*?[.!?](\s|$)/); return m ? m[0].trim() : strip(s); };
const LIT = ['A', 'B', 'C', 'D', 'E'];

export function analysisHTML(q, terms) {
  const a = analyze(q, terms);
  let h = `<div class="rozbior"><p class="rz-h">Jak czytać to pytanie</p>`;
  h += `<p><strong>Typ: ${esc(a.type[0])}.</strong> ${esc(a.type[1])}</p>`;
  if (a.signals.length) h += `<p class="rz-k">Słowa-sygnały w treści</p><ul>${a.signals.map((s) => `<li><strong>${esc(s.l)}</strong>: ${esc(s.d)}</li>`).join('')}</ul>`;
  if (a.terms.length) h += `<p class="rz-k">Pojęcia w pytaniu, czyli co znaczą trudne słowa</p><ul>${a.terms.map((t) => `<li><strong>${esc(t.plEgzamin)}</strong>${t.en ? ` <em class="muted">(${esc(t.en)})</em>` : ''}: ${esc(firstSentence(t.poLudzku || t.poziom1 || ''))}</li>`).join('')}</ul>`;
  if (a.extreme.length) h += `<p class="rz-k">Uwaga na słowa skrajne</p><p>${a.extreme.length === 1 ? 'Opcja' : 'Opcje'} ${a.extreme.map(([i]) => LIT[i]).join(', ')} ${a.extreme.length === 1 ? 'zawiera' : 'zawierają'} słowa typu „zawsze”, „tylko”, „wszystkie”. COBIT 5 jest elastyczny i nienormatywny, więc takie odpowiedzi zwykle są fałszywe. Zwykle, nie zawsze, więc sprawdź treść.</p>`;
  h += `</div>`;
  return h;
}

// ---------- Pomoc AI ----------
const optsText = (q) => (q.opcje || []).map((o, i) => `${LIT[i]}. ${strip(o.tekst || o.t)}`).join('\n');

export function promptForQuestion(q, { picked = null, reveal = true } = {}) {
  const good = (q.opcje || []).findIndex((o) => o.poprawna || o.ok);
  const ctx = strip(`${q.scenariusz || ''} ${q.kontekst || ''}`);
  return [
    'Uczę się do egzaminu COBIT 5 Foundation (PeopleCert, wersja polska). Nie rozumiem tego pytania.',
    ctx ? `Opis sytuacji: ${ctx}` : '',
    `Pytanie: ${strip(q.tresc)}`,
    optsText(q),
    reveal && good >= 0 ? `Poprawna odpowiedź według klucza: ${LIT[good]}.` : '',
    picked !== null && picked >= 0 && picked !== good ? `Ja wybrałem: ${LIT[picked]}.` : '',
    '',
    'Proszę:',
    '1. Powiedz prostym językiem, o co właściwie pyta to pytanie i które słowa w treści są kluczowe.',
    reveal ? '2. Wyjaśnij, dlaczego poprawna odpowiedź jest poprawna, a każda z pozostałych błędna (odwołaj się do COBIT 5 – rozdział/zasada/aktywator/proces).' : '2. Nie podawaj odpowiedzi. Daj mi wskazówkę, jak dojść do niej samodzielnie.',
    '3. Daj przykład z firmy i z urzędu, który to ilustruje.',
    '4. Zadaj mi jedno podobne pytanie kontrolne w stylu egzaminu (4 odpowiedzi) i poczekaj na moją odpowiedź.',
    'Używaj polskich nazw z egzaminu COBIT 5 (np. Ład, Organ Ładu, Odpowiedzialny decyzyjnie), a w nawiasie podaj nazwę angielską.',
  ].filter((x) => x !== '').join('\n');
}

export function promptForTopic(topic) {
  return [
    `Uczę się do egzaminu COBIT 5 Foundation (PeopleCert, wersja polska). Mam problem z tematem: „${topic.tytul}”${topic.en ? ` (${topic.en})` : ''}.`,
    topic.zakres?.length ? `Zakres tematu: ${topic.zakres.join('; ')}.` : '',
    topic.zrodlo?.length ? `W podręczniku COBIT 5 (PL) to strony: ${topic.zrodlo.filter((z) => z.strona).map((z) => z.strona).join(', ')}.` : '',
    '',
    'Proszę:',
    '1. Wytłumacz ten temat krok po kroku prostym językiem, jak komuś bez doświadczenia w IT.',
    '2. Pokaż typowe pułapki egzaminacyjne i pomylenia z sąsiednimi pojęciami.',
    '3. Daj po jednym przykładzie z firmy i z urzędu.',
    '4. Zadaj mi 5 pytań w stylu egzaminu (4 odpowiedzi, jedna poprawna) – po jednym naraz – i po każdej mojej odpowiedzi wyjaśnij wszystkie opcje.',
    'Trzymaj się podręcznika COBIT 5 i polskich nazw z egzaminu (z nazwą angielską w nawiasie).',
  ].filter((x) => x !== '').join('\n');
}

export const AI_LINKS = [
  ['Claude', (p) => 'https://claude.ai/new?q=' + encodeURIComponent(p)],
  ['ChatGPT', (p) => 'https://chatgpt.com/?q=' + encodeURIComponent(p)],
];

export function aiButtonsHTML(label = 'Wyjaśnij z AI') {
  return `<div class="ai-row"><span class="small muted">${esc(label)}:</span>${AI_LINKS.map(([n], i) => `<button class="btn btn-sm" type="button" data-ai="${i}">${n} ↗</button>`).join('')}<button class="btn btn-sm btn-ghost" type="button" data-ai="copy">Kopiuj prompt</button></div>`;
}

export function bindAI(root, getPrompt) {
  root.querySelectorAll('[data-ai]').forEach((b) => b.addEventListener('click', async (e) => {
    e.stopPropagation();
    const p = getPrompt();
    try { await navigator.clipboard.writeText(p); } catch (err) { /* schowek niedostępny */ }
    if (b.dataset.ai === 'copy') { b.textContent = 'Skopiowano ✓'; setTimeout(() => { b.textContent = 'Kopiuj prompt'; }, 1800); return; }
    window.open(AI_LINKS[+b.dataset.ai][1](p), '_blank', 'noopener');
  }));
}
