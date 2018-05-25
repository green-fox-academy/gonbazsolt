export = { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawTriangle(centerX: number, centerY: number, radius: number) {
  ctx.strokeStyle = 'red';
  let modX: number = 0;
  let modY: number = 0;
  
  ctx.beginPath();
  for (let i = 0; i < 3; i++) {
    modX = radius * Math.cos(1 / 6 * Math.PI + i / 1.5 * Math.PI);
    modY = radius * Math.sin(1 / 6 * Math.PI + i / 1.5 * Math.PI);
    if (i == 0) {
      ctx.moveTo(centerX + modX, centerY + modY);
    } else {
      ctx.lineTo(centerX + modX, centerY + modY);
    }
  }
  ctx.closePath();
  ctx.stroke();
}

function draw3Triangle(centerPointX: number, centerPointY: number, radius: number) {
  let modiX: number[] = [];
  let modiY: number[] = [];
  
    for (let i = 0; i < 3; i++) {
      modiX[i] = radius * Math.cos(1 / 6 * Math.PI + 2 * i / 3 * Math.PI) / 2;
      modiY[i] = radius * Math.sin(1 / 6 * Math.PI + 2 * i / 3 * Math.PI) / 2;
      drawTriangle(centerPointX + modiX[i], centerPointY + modiY[i], radius / 2);
    }
  
    if (radius < 10) {
      return;
    } else {
      for (let i = 0; i < 3; i++) {
        modiX[i] = radius * Math.cos(1 / 6 * Math.PI + 2 * i / 3 * Math.PI) / 2;
        modiY[i] = radius * Math.sin(1 / 6 * Math.PI + 2 * i / 3 * Math.PI) / 2;
        draw3Triangle(centerPointX + modiX[i], centerPointY + modiY[i], radius / 2);
      }
    }
  }


drawTriangle(350, 390, 350);
draw3Triangle(350, 390, 350);
