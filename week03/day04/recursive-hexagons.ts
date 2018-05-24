export = { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawHexagon(centerX: number, centerY: number, sideSize: number) {
  ctx.strokeStyle = 'red';
  let modX: number = 0;
  let modY: number = 0;
  
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    modX = sideSize * Math.cos(i / 3 * Math.PI);
    modY = sideSize * Math.sin(i / 3 * Math.PI);
    if (i == 0) {
      ctx.moveTo(centerX + modX, centerY + modY);
    } else {
      ctx.lineTo(centerX + modX, centerY + modY);
    }
  }
  ctx.closePath();
  ctx.stroke();
}

function draw3Hexagon(centerPointX: number, centerPointY: number, sideSize: number) {
let modiX: number[] = [];
let modiY: number[] = [];

  for (let i = 0; i < 3; i++) {
    modiX[i] = sideSize * Math.cos(2 * i / 3 * Math.PI) / 2;
    modiY[i] = sideSize * Math.sin(2 * i / 3 * Math.PI) / 2;
    drawHexagon(centerPointX + modiX[i], centerPointY + modiY[i], sideSize / 2);
  }

  if (sideSize < 20) {
    return;
  } else {
  draw3Hexagon(centerPointX + modiX[0], centerPointY + modiY[0], sideSize / 2);
  draw3Hexagon(centerPointX + modiX[1], centerPointY + modiY[1], sideSize / 2);
  draw3Hexagon(centerPointX + modiX[2], centerPointY + modiY[2], sideSize / 2);
  }
}

drawHexagon(300,300,300);
draw3Hexagon(300,300,300);
