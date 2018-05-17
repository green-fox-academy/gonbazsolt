export = { };
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

let moves: number[] = [20, 0, 0, 20, -20, 0, 0, -20];
let phase: number = -2;
let xStart: number = 0;
let yStart: number = 0;

while (phase < 8) {
  drawLineToCenter(xStart, yStart);
  //console.log(phase, xStart, yStart);
  if ((xStart % 600 == 0) && (yStart % 400 == 0)) {
    phase += 2
  }
  xStart += moves[phase];
  yStart += moves[phase + 1];
}