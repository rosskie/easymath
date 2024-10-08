'use strict';

const DEFAULT_N_OF_ELEMENTS = 2;
const MAX_N_OF_ELEMENTS = 5;
const DEFAULT_DIGIT = 1;
const MAX_DIGIT = 2;
const BASE_10 = 10;
const SIGNS = ['+', '-'];

import { changeButtonText } from '../util/change_element_text';

const params = new URL(location.href).searchParams;
const numberOfElements = getParam(
  'n',
  DEFAULT_N_OF_ELEMENTS,
  MAX_N_OF_ELEMENTS,
);
const digit = getParam('digit', DEFAULT_DIGIT, MAX_DIGIT);
const digitMultiplier = Math.pow(BASE_10, digit);
const mode = params.get('mode') || 'random';

export function showProblem(element: HTMLDivElement) {
  let text = '';
  let result = 0;
  let prevSign = '+';
  for (let i = 1; i <= numberOfElements; i++) {
    const number = Math.floor(Math.random() * digitMultiplier);
    const sign = i === numberOfElements ? '=' : getSign(mode, i);

    // prep output
    text += `${number} ${sign} `;
    element.textContent = text;
    changeButtonText('answer');

    // determine answer
    if (i <= 1) {
      result = number;
    } else {
      switchprevSign: switch (prevSign) {
        case '-':
          result -= number;
          break switchprevSign;
        case '+':
        default:
          result += number;
      }
    }
    prevSign = sign;
  }
  localStorage.setItem('easyResult', result.toString());
}

function getParam(
  paramName: string,
  defaultVal: number,
  maxVal: number,
): number {
  return Math.min(parseInt(params.get(paramName) || '') || defaultVal, maxVal);
}

function getSign(mode: string | '', i: number | 0): string {
  switch (mode) {
    case '+':
    case 'plus':
      return '+';
    case '-':
    case 'minus':
      return '-';
    case '+-':
    case 'plusminus':
      return SIGNS[i % SIGNS.length];
    case '-+':
    case 'minusplus':
      return SIGNS[(i + 1) % SIGNS.length];
    case 'random':
    default:
      return SIGNS[Math.floor(Math.random() * SIGNS.length)];
  }
}
