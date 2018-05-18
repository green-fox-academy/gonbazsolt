export = { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

for (let i = 0; i < 20; i++) {
  
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(0 + i * 30, 0);
  ctx.lineTo(600, 0 + i * 20);
  ctx.stroke();

  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(0, 0 + i *20);
  ctx.lineTo(0 + i *30, 400);
  ctx.stroke();
}

