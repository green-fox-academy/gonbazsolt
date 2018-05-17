export = { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let shape1: number[][] = [[10, 10], [290,  10], [290, 290], [10, 290]];

ctx.beginPath();
ctx.strokeStyle = 'green';
for (let i = 0; i < 4; i++) {
  ctx.lineTo(shape1[i][0], shape1[i][1]);
}
ctx.closePath();
ctx.stroke();

let shape2: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130]];

ctx.beginPath();
ctx.fillStyle = 'red';
for (let i = 0; i < 7; i++) {
  ctx.lineTo(shape2[i][0], shape2[i][1]);
}
ctx.closePath();
ctx.fill();
