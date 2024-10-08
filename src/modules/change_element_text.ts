'use strict';

export function changeElementText(element: HTMLElement, text = ''): void {
  element.textContent = text;
}

export function changeButtonText(text = 'next') {
  const element = document.getElementById('js_next');
  if (element) {
    changeElementText(element, text);
  }
}
