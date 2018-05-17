'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawHorizontalLine(x: number, y: number) {
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(x, y);
  if (x + 50 < 601) {
    ctx.lineTo(x +50 , y);
  } else {
    ctx.lineTo(600, y);
  }
  ctx.stroke();
}

let xStart: number;
let yStart: number;

for (let i = 0; i < 3; i++) {
  xStart = Math.floor(Math.random() * 600);
  yStart = Math.floor(Math.random() * 400);
  
  drawHorizontalLine(xStart, yStart);
}
