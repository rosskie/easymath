import './style.css';
import { setupNext } from './modules/prep_next_problem';
import { showProblem } from './modules/show_problem';
import { adjustTextSize } from './util/text/adjust_text_size';

const app = document.querySelector<HTMLDivElement>('#app');
if (app) {
  app.innerHTML = `
    <section class="top_frame"></section>
    <section id="js_middle" class="middle_frame">
      <div id="js_card" class="card">
        <div id="js_quiz" class="big_problem">1 + 1 =</div>
        <button id="js_next" class="next_button" type="button">next</button>
      </div>
    </section>
    <section class="bottom_frame"></section>
  `;
}

const quiz = document.querySelector<HTMLDivElement>('#js_quiz');
if (quiz) {
  showProblem(quiz);
  adjustTextSize(quiz, true, true);
}
const nextButton = document.querySelector<HTMLButtonElement>('#js_next');
if (nextButton) {
  setupNext(nextButton);
}
