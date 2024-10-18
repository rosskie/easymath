const COLOR_PALETTE = {
  // problem
  p1: '#e9ccb4',
  p2: '#eabbb3',
  p3: '#e39d9c',
  p4: '#df8686',
  p5: '#bd726b',
  // answer
  a1: '#f1f8fd',
  a2: '#aad4da',
  a3: '#18a2c9',
  a4: '#138aa4',
  a5: '#127397',
};

export function changeColor(isProblem = false): void {
  const colors = getColorOfTextAndBackground(isProblem);

  const bgElements: HTMLElement[] | [] = [
    ...document.querySelectorAll('section'),
  ];
  for (const el of bgElements) {
    el.style.backgroundColor = colors.background;
    el.style.color = colors.text;
  }

  const btnEl = document.getElementById('js_next');
  if (btnEl) {
    btnEl.style.color = colors.text;
  }
}

type ColorOfTextAndBackground = {
  background: string;
  text: string;
};

function getColorOfTextAndBackground(
  isProblem = false,
): ColorOfTextAndBackground {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches; // true if dark mode

  if (isDarkMode) {
    return isProblem
      ? { background: COLOR_PALETTE.p5, text: COLOR_PALETTE.p2 }
      : { background: COLOR_PALETTE.a5, text: COLOR_PALETTE.a2 };
  }
  return isProblem
    ? { background: COLOR_PALETTE.p2, text: COLOR_PALETTE.p5 }
    : { background: COLOR_PALETTE.a2, text: COLOR_PALETTE.a5 };
}
