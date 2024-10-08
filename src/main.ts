'use strict';

import './style.css';
import { setupNext } from './modules/next_problem';
import { showProblem } from './modules/show_problem';
import { adjustTextSize } from './modules/adjust_text_size';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section class="top_frame"></section>
  <section class="middle_frame">

    
    <div id="js_card" class="card">
      <div id="js_quiz" class="big_problem">1 + 1 =</div>
      <button id="js_next" class="next_button" type="button">next</button>
    </div>
  </section>
  <section class="bottom_frame"></section>
`;

const quiz = document.querySelector<HTMLDivElement>('#js_quiz')!;
showProblem(quiz);
setupNext(document.querySelector<HTMLButtonElement>('#js_next')!);
adjustTextSize(quiz, true, true);
