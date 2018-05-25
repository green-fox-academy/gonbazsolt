export = { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'red';

function drawCircle(centX: number, centY: number, rad: number) {
  ctx.beginPath();
  ctx.arc(centX, centY, rad, 0, Math.PI * 2);
  ctx.stroke();
}

function draw3Circles(centerPointX: number, centerPointY: number, radius: number) {
  let modiX: number[] = [];
  let modiY: number[] = [];
  
    for (let i = 0; i < 3; i++) {
      modiX[i] = radius * Math.cos(1 / 6 * Math.PI + 2 * i / 3 * Math.PI) / 2;
      modiY[i] = radius * Math.sin(1 / 6 * Math.PI + 2 * i / 3 * Math.PI) / 2;
      drawCircle(centerPointX + modiX[i], centerPointY + modiY[i], radius / 2);
    }
  
    if (radius < 10) {
      return;
    } else {
      for (let i = 0; i < 3; i++) {
        modiX[i] = radius * Math.cos(1 / 6 * Math.PI + 2 * i / 3 * Math.PI) / 2;
        modiY[i] = radius * Math.sin(1 / 6 * Math.PI + 2 * i / 3 * Math.PI) / 2;
        draw3Circles(centerPointX + modiX[i], centerPointY + modiY[i], radius / 2);
      }
    }
  }

drawCircle(300, 300, 300);
draw3Circles(300, 300, 300);
