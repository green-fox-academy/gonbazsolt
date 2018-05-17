export = {};
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawRectangles(x: number, y: number, sx: number, sy: number, col: number[]) {
  ctx.fillStyle = `rgb(${col[0]}, ${col[1]}, ${col[2]})`;
  ctx.fillRect(x, y, sx, sy);
}

let xStart: number;
let yStart: number;
let xSize: number;
let ySize: number;
let rgbCode: number[] = [];

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 3; j++) {
    rgbCode[j] = Math.floor(Math.random() * 255);
  }
  xStart = Math.floor(Math.random() * 600);
  yStart = Math.floor(Math.random() * 400);
  xSize = Math.floor(Math.random() * (600 - xStart));
  ySize = Math.floor(Math.random() * (400 - yStart));
  drawRectangles(xStart,yStart,xSize,ySize,rgbCode);
}
