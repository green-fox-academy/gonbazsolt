export = { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawRectangles(size: number, col: number[]) {
  ctx.strokeStyle = `rgb(${col[0]}, ${col[1]}, ${col[2]})`;
  ctx.strokeRect((300 - size / 2), (200 - size / 2), size, size);
}

let squareSize: number;
let rgbCode: number[] = [];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    rgbCode[j] = Math.floor(Math.random() * 255);
  }
  squareSize = Math.floor(Math.random() * 400);
  drawRectangles(squareSize, rgbCode);
}
