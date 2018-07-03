'use strict';

const button1 = document.getElementsByTagName('button')[0];
const button2 = document.getElementsByTagName('button')[1];

console.log(button1, button2);

function logCurrentTime() {
  console.log(Date.now());

  button1.removeEventListener('click', logCurrentTime);
}

button1.addEventListener('click', logCurrentTime);

button2.addEventListener('click', () => {
  console.log(Date.now());

  button2.setAttribute('disabled', true);
});
