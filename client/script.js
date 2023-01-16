import bot from './assets/bot.svg';
import user from "./assets/user.svg";

const form = document.querySelector('form');
const chatContainer = document.querySelector('chat_container');

let loadInterval;


function loader(e) {
  e.textContent = '';

  loadInterval = setInterval(() => {
    e.textContent += '.';

    if (e.textContent === '....') {
      e.textContent = '';
    }
  }, 300);
}

function typeText(e, text) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      e.innerHTML += text.chartAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}
