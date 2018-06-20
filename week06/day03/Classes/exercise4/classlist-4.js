let p = document.body.getElementsByTagName('p');
let style = document.head.getElementsByTagName('style');

style[0].textContent += '  .less-balloon-like {\r\n        border-radius: 10%;\r\n      }';

p[1].classList.add('less-balloon-like');
