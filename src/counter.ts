export function setupCounter(element: HTMLButtonElement) {
  const setCounter = () => {
    element.innerHTML = `Shopping mall`;
  };
  element.addEventListener('click', () => open('https://crown.ucely.com'));
  setCounter();
}

export function setupContract(element: HTMLButtonElement) {
  const setCounter = () => {
    element.innerHTML = `合同管理体验站`;
  };
  element.addEventListener('click', () => open('https://contract.ucely.com'));
  setCounter();
}
