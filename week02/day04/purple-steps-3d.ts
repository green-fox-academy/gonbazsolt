export = { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawRectangles(x: number, y: number, multi: number) {
  ctx.fillStyle = 'purple';
  ctx.fillRect(x, y, multi * 10, multi * 10);
  ctx.strokeStyle = "black";
  ctx.strokeRect(x, y, multi * 10, multi * 10);
}

let xStart: number = 0;
let i: number = 0;
while (i * 10 < 400) {
  drawRectangles(xStart, xStart, i);
  xStart += i * 10;
  i += 1;
  if (xStart + i * 10 > 400) {
    break;
  }
}
