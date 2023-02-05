import './style.css';
import { setupCounter, setupContract } from './counter';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Ucely.com</h1>
    <div class="card">
      Emaples: 
      <button id="counter" type="button"></button> 
      <button id="contract" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
setupContract(document.querySelector<HTMLButtonElement>('#contract')!);
