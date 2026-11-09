import test from 'node:test';
import assert from 'node:assert/strict';
import { migrateDeckEntry } from '../js/deck-history.js';

test('redakcja nie przypisuje dawnej odpowiedzi nowemu pytaniu i zachowuje archiwum', () => {
  const old = { last: 8, max: 12, q: { 1: true }, qa: { 1: 2 } };
  const next = migrateDeckEntry(old, { bankRevision: 'new' }, [{ quiz: { id: 'changed' } }]);
  assert.deepEqual(next.q, {});
  assert.deepEqual(next.qa, {});
  assert.equal(next.last, 8);
  assert.equal(next.max, 12);
  assert.deepEqual(next.quizHistory[0].qa, old.qa);
  assert.equal(migrateDeckEntry(next, { bankRevision: 'new' }, []), next);
  assert.deepEqual(old.qa, { 1: 2 });
});

test('prywatny SP1 zachowuje odpowiedź po przesunięciu slajdu i kolejnej redakcji', () => {
  const deck = { bankRevision: 'new', legacySp1Order: [null, { sp1: 'sp-a' }, null, { sp1: 'sp-b' }] };
  const slides = [{ sp: true, quiz: { id: 'sp-b' } }];
  // sp-a nie ma w lokalnym pliku, więc nie liczył się do indeksów wyświetlanych slajdów.
  const old = { qa: { 2: 3 }, q: { 2: false } };
  const next = migrateDeckEntry(old, deck, slides, { 'sp-b': {} });
  assert.deepEqual(next.qa, { 0: 3 });
  assert.deepEqual(next.q, { 0: false });
  next.sp1Answers = { 'sp-b': { pick: 3, correct: false } };
  const later = migrateDeckEntry(next, { ...deck, bankRevision: 'later' }, [{ h: 'Nowy slajd' }, ...slides], { 'sp-b': {} });
  assert.deepEqual(later.qa, { 1: 3 });
});
