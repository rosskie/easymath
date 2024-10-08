'use strict';

const FRAME_SIZE = 30;
const INIT_FONT_SIZE = 500;
const SMALLEST_FONT_SIZE = 20;

export function adjustTextSize(
  element: HTMLDivElement,
  isProblem = true,
  isFirst = true,
): void {
  element.style.fontSize = isProblem
    ? `${INIT_FONT_SIZE}px`
    : `${Math.floor(2 * parseFloat(element.style.fontSize))}px`;

  const resize = () => {
    const fontSize = parseFloat(element.style.fontSize);
    const isFontTooSmall: boolean = fontSize <= SMALLEST_FONT_SIZE;
    if (isFontTooSmall) {
      return;
    }
    element.style.fontSize = `${fontSize - 5}px`;

    const innerHeight = Math.min(window.innerHeight, screen.availHeight);

    const isOverflowing =
      element.clientHeight < element.scrollHeight ||
      innerHeight <
        document.getElementById('app')!.offsetHeight + 2 * FRAME_SIZE;

    if (isOverflowing) {
      resize();
    }
  };
  resize();

  if (isFirst) {
    setTimeout(() => {
      resize();
    }, 50);
  }
}
