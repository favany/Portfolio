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

export function setupQili(element: HTMLButtonElement) {
  const setCounter = () => {
    element.innerHTML = `绮丽世界`;
  };
  element.addEventListener('click', () => open('https://qili.world'));
  setCounter();
}

export function setupBlog(element: HTMLButtonElement) {
  const setCounter = () => {
    element.innerHTML = `技术博客`;
  };
  element.addEventListener('click', () => open('https://know.ucely.com'));
  setCounter();
}
