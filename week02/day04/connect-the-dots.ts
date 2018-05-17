export = { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let lastX: number = 0;
let lastY: number = 0;

function drawLineFromLastPoint(x: number, y: number, col: string) {
  if ((lastX == 0) && (lastY == 0)) {
    lastX = x;
    lastY = y;
  } else {
    ctx.strokeStyle = col;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    lastX = x;
    lastY = y;
  }
}

let shape1: number[][] = [[10, 10], [290,  10], [290, 290], [10, 290], [10, 10]];

for (let i = 0; i < 5; i++) {
  drawLineFromLastPoint(shape1[i][0], shape1[i][1], 'green');
}

let shape2: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];
lastX = 0;
lastY = 0;

for (let i = 0; i < 8; i++) {
  drawLineFromLastPoint(shape2[i][0], shape2[i][1], 'red');
}
