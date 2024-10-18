export function changeColor(elements: HTMLElement[], isProblem = false): void {
  const backgroundColor = isProblem ? '#646cff' : '#888';
  const textColor = isProblem ? '#fff' : '#ccc';
  for (const el of elements) {
    el.style.backgroundColor = backgroundColor;
    el.style.color = textColor;
  }
}
