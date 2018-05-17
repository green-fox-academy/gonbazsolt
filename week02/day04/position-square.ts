export = { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawRectangles(x: number, y: number) {
  ctx.fillStyle = `blue`;
  let xSize: number;
  let ySize: number;
  if (x + 50 > 600) {
    xSize = 600 - x;
  } else {
    xSize = 50;
  }
  if (y + 50 > 400) {
    ySize = 400 - y;
  } else {
    ySize = 50;
  }

  ctx.fillRect(x, y, xSize, ySize);
}

let xStart: number;
let yStart: number;

for (let i = 0; i < 3; i++) {
  xStart = Math.floor(Math.random() * 600);
  yStart = Math.floor(Math.random() * 400);
  drawRectangles(xStart,yStart);
}
