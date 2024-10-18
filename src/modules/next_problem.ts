import { isMobile } from '../util/is_mobile';
import { adjustTextSize } from './adjust_text_size';
import { changeColor } from './change_color';
import { showAnswer } from './show_answer';
import { showProblem } from './show_problem';

const NEXT_EVENTS = ['Space', 'Enter'];

let isProblem = false;

export function setupNext(btnElement: HTMLButtonElement) {
  const textElement: HTMLDivElement | null = document.querySelector('#js_quiz');
  const bgElements: HTMLElement[] | [] = [
    ...document.querySelectorAll('section'),
  ];
  if (!textElement) {
    return;
  }
  const next = () => {
    if (isProblem) {
      showProblem(textElement);
    } else {
      showAnswer(textElement);
    }
    changeColor(bgElements, isProblem);
    adjustTextSize(textElement, isProblem);
    isProblem = !isProblem;
  };
  if (isMobile) {
    for (const el of bgElements) {
      el.addEventListener('click', () => {
        next();
      });
    }
  } else {
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
}
