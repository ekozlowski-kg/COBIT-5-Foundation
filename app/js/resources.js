import { esc } from './md.js';
const query = document.getElementById('query');
const kind = document.getElementById('kind');
const priority = document.getElementById('priority');
const results = document.getElementById('results');
const count = document.getElementById('count');
const normalize = (s) => String(s).toLocaleLowerCase('pl').normalize('NFD').replace(/\p{Diacritic}/gu, '');
try {
  const response = await fetch('resources/catalog.json');
  if (!response.ok) throw new Error('catalog');
  const { zasoby } = await response.json();
  for (const [select, field] of [[kind, 'rodzaj'], [priority, 'priorytet']]) {
    for (const value of [...new Set(zasoby.map((r) => r[field]))]) {
      const option = document.createElement('option');
      option.value = option.textContent = value;
      select.append(option);
    }
  }
  function render() {
    const term = normalize(query.value.trim());
    const matches = zasoby.filter((r) => (!kind.value || r.rodzaj === kind.value)
      && (!priority.value || r.priorytet === priority.value)
      && (!term || normalize(Object.values(r).join(' ')).includes(term)));
    count.textContent = `Wyniki: ${matches.length} z ${zasoby.length}.`;
    results.innerHTML = matches.length ? matches.map((r) => `<article>
      <h2><a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.tytul)} ↗</a></h2>
      <div>${[r.rodzaj, r.wersja, r.jezyk, r.priorytet].map((v) => `<span class="tag">${esc(v)}</span>`).join('')}</div>
      <p class="muted">${esc(r.dostep)} · liczba: ${esc(r.liczba)}</p>
      <p><strong>Sprawdzono:</strong> ${esc(r.weryfikacja)}</p>
      <p><strong>Ocena:</strong> ${esc(r.ocena)}</p>
    </article>`).join('') : '<p>Brak wyników. Zmień filtr lub wpisane hasło.</p>';
  }
  for (const element of [query, kind, priority]) element.addEventListener('input', render);
  render();
} catch (e) {
  count.textContent = 'Nie udało się wczytać katalogu. Odśwież stronę lub uruchom aplikację przez serwer HTTP.';
}
