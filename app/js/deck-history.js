// Po redakcji zmieniają się pozycje i brzmienia quizów. Nie przypisuj dawnych odpowiedzi nowym pytaniom.
export function migrateDeckEntry(entry, deck, slides, sample = {}) {
  if (!deck.bankRevision || entry.bankRevision === deck.bankRevision) return entry;
  const previous = { q: entry.q || {}, qa: entry.qa || {}, bankRevision: entry.bankRevision || 'legacy' };
  const next = { ...entry, bankRevision: deck.bankRevision, q: {}, qa: {} };
  next.quizHistory = [...(entry.quizHistory || []), previous];
  // Zachowaj wyniki prywatnego SP1 według ID, nawet gdy przesunęły się slajdy.
  const oldOrder = (deck.legacySp1Order || []).filter((slot) => !slot?.sp1 || sample[slot.sp1]);
  slides.forEach((slide, index) => {
    if (!slide.sp || !slide.quiz?.id) return;
    const oldIndex = oldOrder.findIndex((slot) => slot?.sp1 === slide.quiz.id);
    const saved = entry.sp1Answers?.[slide.quiz.id];
    if (saved) {
      next.qa[index] = saved.pick;
      next.q[index] = saved.correct;
    } else if (!entry.bankRevision && oldIndex >= 0 && typeof previous.qa[oldIndex] === 'number') {
      next.qa[index] = previous.qa[oldIndex];
      next.q[index] = previous.q[oldIndex];
    }
  });
  return next;
}
