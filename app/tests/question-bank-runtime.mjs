import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('aplikacja udostępnia dokładnie recenzowaną pulę, bez dodatkowych generatorów mapy', async () => {
  const { pytania } = JSON.parse(await readFile(new URL('../content/questions/reviewed.json', import.meta.url), 'utf8'));
  const mapa = JSON.parse(await readFile(new URL('../content/mapa-cobit.json', import.meta.url), 'utf8'));
  globalThis.fetch = async () => ({ ok: true, json: async () => ({ pytania, mapa }) });
  const C = await import('../js/content.js');
  const actual = await C.questions();
  assert.deepEqual(new Set(actual.keys()), new Set(pytania.map((q) => q.id)));
  assert.ok(actual.size <= 400);
});
