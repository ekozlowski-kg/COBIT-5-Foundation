// Trening pojęć korzysta wyłącznie ze wspólnego, recenzowanego banku.
import * as C from '../content.js';
import { runSequence } from '../quiz.js';

export async function renderDrill(main) {
  const questions = [...(await C.questions()).values()].filter((q) =>
    q.sylabus.some((code) => code.startsWith('EN-') || code.startsWith('PC-')));
  function draw() {
    const pool = questions.slice();
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    main.innerHTML = `<div class="page page-narrow"><h1>Trening pojęć COBIT 5</h1>
      <p class="page-lead">10 pytań z recenzowanej puli: znaczenie pojęć i ich zastosowanie, z uzasadnieniem każdej opcji. Poprawne polskie synonimy nie są błędami.</p>
      <p><a href="#/egzamin">Wybierz pełny zestaw z mini lekcjami</a> · <a href="#/slownik">Słownik EN i PL</a></p>
      <div id="termTraining"></div><button class="btn" id="nextTermSet" hidden style="margin-top:20px">Następne 10 pytań</button></div>`;
    main.querySelector('#nextTermSet').addEventListener('click', draw);
    runSequence(main.querySelector('#termTraining'), pool.slice(0, 10), {
      title: 'Pojęcia w kontekście',
      onEnd: () => { main.querySelector('#nextTermSet').hidden = false; },
    });
  }
  draw();
}
