'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawLineToCenter(x: number, y: number) {
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(300, 200);
  ctx.stroke();
}

let xStart: number;
let yStart: number;

for (let i = 0; i < 3; i++) {
  xStart = Math.floor(Math.random() * 600);
  yStart = Math.floor(Math.random() * 400);
  
  drawLineToCenter(xStart, yStart);
}
