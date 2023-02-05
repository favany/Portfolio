export function setupCounter(element: HTMLButtonElement) {
  const setCounter = () => {
    element.innerHTML = `Shopping mall`;
  };
  element.addEventListener('click', () => open('https://crown.ucely.com'));
  setCounter();
}
