export = { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawSquare(topLeftX: number, topLeftY: number, sideSize: number) {
  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(topLeftX, topLeftY);
  ctx.lineTo(topLeftX, topLeftY + sideSize);
  ctx.lineTo(topLeftX + sideSize, topLeftY + sideSize);
  ctx.lineTo(topLeftX + sideSize, topLeftY);
  ctx.lineTo(topLeftX, topLeftY);
  ctx.closePath();
  ctx.stroke();
}

function draw4Squares(centerPointX: number, centerPointY: number, sideSize: number) {
  drawSquare(centerPointX - sideSize / 2, centerPointY - 3 * sideSize / 2, sideSize);
  drawSquare(centerPointX - 3 * sideSize / 2, centerPointY - sideSize / 2, sideSize);
  drawSquare(centerPointX - sideSize / 2, centerPointY + sideSize / 2, sideSize);
  drawSquare(centerPointX + sideSize / 2, centerPointY - sideSize / 2, sideSize);

  if (sideSize < 7) {
    return;
  } else {
  draw4Squares(centerPointX - sideSize, centerPointY, sideSize / 3);
  draw4Squares(centerPointX + sideSize, centerPointY, sideSize / 3);
  draw4Squares(centerPointX, centerPointY + sideSize, sideSize / 3);
  draw4Squares(centerPointX, centerPointY - sideSize, sideSize / 3);
  }
}

draw4Squares(300,300,200);
