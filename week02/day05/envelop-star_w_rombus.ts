export = { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.strokeStyle = "green";

for (let i = 0; i<21; i++) {
  ctx.beginPath();
  ctx.moveTo(300,0 + i * 10);
  ctx.lineTo(300 - i * 15,200);
  ctx.lineTo(300,400 - i * 10);
  ctx.lineTo(300 + i * 15,200);
  ctx.closePath();
  ctx.stroke();
} 