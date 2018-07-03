'use strict';

const navButton = document.querySelectorAll('[data-action="move"]');
const zoomButton = document.querySelectorAll('[data-action="zoom"]');
const style = document.styleSheets[0].cssRules[3].style;
let BGPosXNumber;
let BGPosYNumber;
let interval;

for (let i = 0; i < 2; i++) {
  zoomButton[i].addEventListener('click', () => {
    if (zoomButton[i].getAttribute('data-direction') === 'in') {
      let BGSizeNumber = parseInt(style.backgroundSize);
      BGSizeNumber += 20;
      style.backgroundSize = BGSizeNumber.toString().concat('%');
    } else {
      let BGSizeNumber = parseInt(style.backgroundSize);
      BGSizeNumber -= 20;
      style.backgroundSize = BGSizeNumber.toString().concat('%');
    }
  });
}

for (let i = 0; i < 4; i++) {
  navButton[i].addEventListener('mousedown', () => {
    switch (navButton[i].getAttribute('data-direction')) {
      case 'up':
        interval = setInterval(() => {
          (style.backgroundPositionY) ? BGPosYNumber = parseInt(style.backgroundPositionY) : BGPosYNumber = 0;
          BGPosYNumber -= 10;
          style.backgroundPositionY = BGPosYNumber.toString().concat('px');
        }, 15);
        break;
      case 'down':
        interval = setInterval(() => {
          (style.backgroundPositionY) ? BGPosYNumber = parseInt(style.backgroundPositionY) : BGPosYNumber = 0;
          BGPosYNumber += 10;
          style.backgroundPositionY = BGPosYNumber.toString().concat('px');
        }, 15);
        break;  
      case 'left':
        interval = setInterval(() => {
          (style.backgroundPositionX) ? BGPosXNumber = parseInt(style.backgroundPositionX) : BGPosXNumber = 0;
          BGPosXNumber -= 10;
          style.backgroundPositionX = BGPosXNumber.toString().concat('px');
        }, 15);
        break;
      case 'right':
        interval = setInterval(() => {
          (style.backgroundPositionX) ? BGPosXNumber = parseInt(style.backgroundPositionX) : BGPosXNumber = 0;
          BGPosXNumber += 10;
          style.backgroundPositionX = BGPosXNumber.toString().concat('px');
        }, 15);
        break;
    }
  })
  
  navButton[i].addEventListener('mouseup', () => {
    clearInterval(interval)
  });
}
