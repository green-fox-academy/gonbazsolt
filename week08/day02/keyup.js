'use strict';

document.addEventListener('keyup', (event) => {
  let p = document.getElementsByTagName('p');
  let body = document.getElementsByTagName('body')[0];
  let h1 = document.querySelector('h1');

  if (p.length) {
    p[1].textContent = p[1].textContent + event.key;
  } else {
    p = document.createElement('p');
    p.textContent = 'You pressed these keys in a row (see below):';
    body.appendChild(p);
    p = document.createElement('p');
    p.textContent = event.key;
    body.appendChild(p);
    console.log(event);
  }
  
  h1.textContent = `Last pressed key code is: ${event.keyCode}`;
});
