export = { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawRectangles(x: number, y: number, col: number[]) {
  ctx.fillStyle = `rgb(${col[0]}, ${col[1]}, ${col[2]})`;
  ctx.fillRect(x, y, 40, 40);
}

let xStart: number = 0;
let yStart: number = 0;
let rgbCode: number[] = [];
while (yStart < 400) {
  for (let j = 0; j < 3; j++) {
    rgbCode[j] = Math.floor(Math.random() * 255);
  }
  drawRectangles(xStart, yStart, rgbCode);
  xStart += 80;
  if (xStart > 600) {
    yStart += 40;
    if (yStart % 80 == 0) {
      xStart = 0;
    } else {
      xStart = 40
    }
  }
}
