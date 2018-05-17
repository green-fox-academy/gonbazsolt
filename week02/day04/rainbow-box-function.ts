export = { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawRectangles(size: number, col: number[]) {
  ctx.strokeStyle = `rgb(${col[0]}, ${col[1]}, ${col[2]})`;
  ctx.strokeRect((300 - size / 2), (200 - size / 2), size, size);
}

let rgbCode: number[] = [];

for (let squareSize = 2; squareSize < 600; squareSize += 2) {
  for (let j = 0; j < 3; j++) {
    rgbCode[j] = Math.floor(Math.random() * 255);
  }
  drawRectangles(squareSize, rgbCode);
}
