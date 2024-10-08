'use strict';

const FRAME_SIZE = 30;
const INIT_FONT_SIZE = 500;

export function adjustTextSize(
  element: HTMLDivElement,
  isProblem = true,
  isFirst = true,
): void {
  element.style.fontSize = isProblem
    ? `${INIT_FONT_SIZE}px`
    : `${Math.floor(2 * parseFloat(element.style.fontSize))}px`;

  const resize = () => {
    const fontSize = element.style.fontSize;
    element.style.fontSize = `${parseFloat(fontSize) - 5}px`;

    const isOverflowing =
      element.clientHeight < element.scrollHeight ||
      window.innerHeight <
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
