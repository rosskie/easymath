import './style.css';
import { adjustTextSize } from './modules/adjust_text_size';
import { setupNext } from './modules/next_problem';
import { showProblem } from './modules/show_problem';

const app = document.querySelector<HTMLDivElement>('#app');
if (app) {
  app.innerHTML = `
    <section class="top_frame"></section>
    <section class="middle_frame">
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
