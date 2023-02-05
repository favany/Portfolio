import './style.css';
import { setupCounter, setupContract, setupQili, setupBlog } from './counter';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Ucely.com</h1>
    <div class="card">
      Emaples: 
      <button id="blog" type="button"></button> 
      <button id="counter" type="button"></button> 
      <button id="contract" type="button"></button>
      <button id="qili" type="button"></button>
    </div>
  </div>
`;

setupBlog(document.querySelector<HTMLButtonElement>('#blog')!);
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
setupContract(document.querySelector<HTMLButtonElement>('#contract')!);
setupQili(document.querySelector<HTMLButtonElement>('#qili')!);
