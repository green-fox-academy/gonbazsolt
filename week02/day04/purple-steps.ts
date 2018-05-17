export = { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawRectangles(x: number, y: number) {
  ctx.fillStyle = 'purple';
  ctx.fillRect(x, y, 10, 10);
  ctx.strokeStyle = "black";
  ctx.strokeRect(x, y, 10, 10);
}

for (let xStart = 0; xStart < 400; xStart += 10) {
  drawRectangles(xStart, xStart);
}
