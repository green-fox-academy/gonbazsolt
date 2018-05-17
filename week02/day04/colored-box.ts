'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 250);
ctx.stroke();

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(100, 250);
ctx.lineTo(400, 250);
ctx.stroke();

ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(400, 250);
ctx.lineTo(400, 100);
ctx.stroke();

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(400, 100);
ctx.lineTo(100, 100);
ctx.stroke();
