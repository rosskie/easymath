'use strict';

import { showProblem } from './show_problem';
import { showAnswer } from './show_answer';
import { changeColor } from './change_color';
import { adjustTextSize } from './adjust_text_size';

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
  btnElement.addEventListener('click', () => next());
  document.addEventListener('keyup', (event) => {
    if (NEXT_EVENTS.includes(event.code)) {
      next();
    }
  });
}
