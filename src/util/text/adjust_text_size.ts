const FRAME_SIZE = 30;
const INIT_FONT_SIZE = 500;
const SMALLEST_FONT_SIZE = 30;

export function adjustTextSize(
  element: HTMLDivElement,
  isProblem = true,
  isFirst = true,
): void {
  element.style.fontSize = isProblem
    ? `${INIT_FONT_SIZE}px`
    : `${Math.floor(2 * Number.parseFloat(element.style.fontSize))}px`;

  const appEl = document.getElementById('app');
  if (!appEl) {
    return;
  }
  const prevBodyHeight = appEl.offsetHeight + 2 * FRAME_SIZE + 1;

  const resize = (prevHeight = prevBodyHeight): void => {
    const fontSize = Number.parseFloat(element.style.fontSize);
    const isFontTooSmall: boolean = fontSize <= SMALLEST_FONT_SIZE;
    if (isFontTooSmall) {
      return;
    }
    element.style.fontSize = `${fontSize - 5}px`;

    const innerHeight = Math.min(window.innerHeight, window.outerHeight);
    const bodyHeight = appEl.offsetHeight + 2 * FRAME_SIZE;

    const isOverflowing =
      element.clientHeight < element.scrollHeight ||
      (bodyHeight < prevHeight && innerHeight < bodyHeight);

    if (isOverflowing) {
      resize(bodyHeight);
    }
  };
  resize(prevBodyHeight);

  if (isFirst) {
    setTimeout(() => {
      const middle = document.getElementById('#js_middle');
      if (middle) {
        middle.scrollIntoView({
          behavior: 'auto',
          block: 'center',
          inline: 'center',
        });
      }
      resize();
    }, 50);
  }
}
