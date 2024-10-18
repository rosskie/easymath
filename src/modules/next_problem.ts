import { isMobile } from '../util/is_mobile';
import { adjustTextSize } from './adjust_text_size';
import { changeColor } from './change_color';
import { showAnswer } from './show_answer';
import { showProblem } from './show_problem';

const NEXT_EVENTS = ['Space', 'Enter'];

let isProblem = false;

export function setupNext(btnElement: HTMLButtonElement) {
  if (isMobile) {
    // allow tap on the background to go to the next problem
    const bgElements: HTMLElement[] | [] = [
      ...document.querySelectorAll('section'),
    ];
    for (const el of bgElements) {
      el.addEventListener('click', () => {
        next();
      });
    }
  } else {
    // let users click the button or press the space key to go to the next problem
    btnElement.addEventListener('click', () => {
      next();
      setTimeout(() => {
        btnElement.blur();
      }, 100);
    });
    document.addEventListener('keyup', (event) => {
      if (NEXT_EVENTS.includes(event.code)) {
        next();
      }
    });
  }
  setupColorPreferenceListener();
}

// show the next problem or answer
function next(): void {
  const textElement: HTMLDivElement | null = document.querySelector('#js_quiz');
  if (!textElement) {
    return;
  }
  if (isProblem) {
    showProblem(textElement);
  } else {
    showAnswer(textElement);
  }
  changeColor(isProblem);
  adjustTextSize(textElement, isProblem);
  isProblem = !isProblem;
}

function setupColorPreferenceListener(): void {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
      changeColor(!isProblem);
    });
}
