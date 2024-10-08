'use strict';

export function changeColor(elements: HTMLElement[], isProblem = false): void {
  const backgroundColor = isProblem ? '#646cff' : '#888';
  const textColor = isProblem ? '#fff' : '#ccc';
  elements.forEach((el) => {
    el.style.backgroundColor = backgroundColor;
    el.style.color = textColor;
  });
}
