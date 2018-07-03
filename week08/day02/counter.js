'use strict';

const button = document.querySelector('button');

button.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let pResult = document.querySelector('p.result');

  pResult.textContent = ul.children.length;
});
