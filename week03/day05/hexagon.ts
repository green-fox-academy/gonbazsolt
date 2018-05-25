export = { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawHexagon(centerX: number, centerY: number, rad: number) {
  ctx.strokeStyle = 'red';
  let modX: number = 0;
  let modY: number = 0;
  
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    modX = rad * Math.cos(i / 3 * Math.PI);
    modY = rad * Math.sin(i / 3 * Math.PI);
    if (i == 0) {
      ctx.moveTo(centerX + modX, centerY + modY);
    } else {
      ctx.lineTo(centerX + modX, centerY + modY);
    }
  }
  ctx.closePath();
  ctx.stroke();
}

function draw6Hexagon(centerPointX: number, centerPointY: number, radius: number) {
let modiX: number[] = [];
let modiY: number[] = [];

  for (let i = 0; i < 6; i++) {
    modiX[i] = radius * 4 / 3 * Math.cos(i / 3 * Math.PI) / 2;
    modiY[i] = radius * 4 / 3 * Math.sin(i / 3 * Math.PI) / 2;
    drawHexagon(centerPointX + modiX[i], centerPointY + modiY[i], radius / 3);
  }

  if (radius < 20) {
    return;
  } else {
    for (let i = 0; i < 6; i++) {
      modiX[i] = radius * 4 / 3 * Math.cos(i / 3 * Math.PI) / 2;
      modiY[i] = radius * 4 / 3 * Math.sin(i / 3 * Math.PI) / 2;
      draw6Hexagon(centerPointX + modiX[i], centerPointY + modiY[i], radius / 3);
    }
  }
}

drawHexagon(300,300,300);
draw6Hexagon(300,300,300);
