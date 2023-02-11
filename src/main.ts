import './style.css';
import {
  setupCounter,
  setupContract,
  setupQili,
  setupBlog,
  setupChatgpt,
} from './counter';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Ucely.com</h1>
    <div class="card">
      你好👋，我是刘俊。就职于泛微 · 今承达。是一名前端开发的爱好者。
      <br />
      <br />
      <br />
      以下是我部分的作品，给诸位献丑了:
      <br /> 
      <!-- <button id="qili" type="button"></button> -->
      <button id="chatgpt" type="button"></button> 
      <button id="blog" type="button"></button> 
      <button id="counter" type="button"></button> 
      <button id="contract" type="button"></button>
      <a href="https://know.ucely.com/others/donate.html">赞助我</a>
    </div>
  </div>
`;

setupChatgpt(document.querySelector<HTMLButtonElement>('#chatgpt')!);
setupBlog(document.querySelector<HTMLButtonElement>('#blog')!);
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
setupContract(document.querySelector<HTMLButtonElement>('#contract')!);
setupQili(document.querySelector<HTMLButtonElement>('#qili')!);
