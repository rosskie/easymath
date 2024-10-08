'use strict';

import { changeButtonText } from '../util/change_element_text';

export function showAnswer(element: HTMLDivElement) {
  const answer = localStorage.getItem('easyResult');
  element.textContent = answer;
  changeButtonText();
}
