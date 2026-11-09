// node --test app/tests/question-history.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
const memory = new Map();
globalThis.localStorage = {
  getItem: (key) => memory.get(key) ?? null,
  setItem: (key, value) => memory.set(key, String(value)),
  removeItem: (key) => memory.delete(key),
};
const { store } = await import('../js/store.js');
const { sourceLabel } = await import('../js/md.js');
const question = (id) => ({ id, sylabus: ['PC-02-04'], opcje: [{}, {}, {}, {}] });

test('pierwsza odpowiedź pozostaje oddzielona od powtórki między trybami', () => {
  store.reset();
  const q = question('shared');
  const freshInDeck = store.markQuestionSeen(q.id);
  assert.equal(freshInDeck, true);
  store.recordFirstAttempt(q, false, freshInDeck, { mode: 'podręcznik' });
  const freshInExam = store.markQuestionSeen(q.id);
  assert.equal(freshInExam, false);
  store.recordFirstAttempt(q, true, freshInExam, { mode: 'egzamin' });
  assert.equal(store.get().firstAttempts[q.id].correct, false);
  assert.equal(store.get().firstAttempts[q.id].mode, 'podręcznik');
});

test('obejrzane lub wspomagane pytanie nie wraca jako pierwsza samodzielna próba', () => {
  store.reset();
  const q = question('help');
  store.recordFirstAttempt(q, true, store.markQuestionSeen(q.id), { hinted: true });
  assert.equal(store.get().firstAttempts[q.id], undefined);
  assert.equal(store.markQuestionSeen(q.id), false);
  const seen = question('abandoned');
  store.markQuestionSeen(seen.id);
  store.recordFirstAttempt(seen, true, store.markQuestionSeen(seen.id));
  assert.equal(store.get().firstAttempts[seen.id], undefined);
});

test('starsze odpowiedzi, pretest i rezerwacja egzaminu są znanymi pytaniami', () => {
  store.import(JSON.stringify({ answers: { old: { tries: 1 } }, pretest: { pre: { ok: true } }, examUsed: ['exam'] }));
  for (const id of ['old', 'pre', 'exam']) assert.equal(store.markQuestionSeen(id), false);
  const fresh = question('new');
  store.recordFirstAttempt(fresh, true, store.markQuestionSeen(fresh.id));
  const backup = store.export();
  store.reset();
  assert.deepEqual(store.get().firstAttempts, {});
  store.import(backup);
  assert.equal(store.questionSeen(fresh.id), true);
  assert.equal(store.get().firstAttempts[fresh.id].correct, true);
});

test('ćwiczenia bez czterech opcji nie trafiają do wyniku pierwszych MCQ', () => {
  store.reset();
  const q = { ...question('open'), opcje: [] };
  store.recordFirstAttempt(q, true, store.markQuestionSeen(q.id));
  assert.deepEqual(store.get().firstAttempts, {});
});

test('odwołania do rozdziału PAM zachowują lokalizator bez wymyślania strony', () => {
  assert.equal(sourceLabel('PAM', null, null, '4.2, PA 2.2'), 'COBIT 5 PAM, sekcja 4.2, PA 2.2');
  assert.equal(sourceLabel('FW-PL', 42, '19'), 'COBIT 5 Framework (PL), s. 42, il. 19');
});
