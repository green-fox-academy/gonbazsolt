export = { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawSquareByCenter(centX: number, centY: number, sideSize: number) {

  ctx.fillRect(centX - sideSize / 2, centY - sideSize / 2, sideSize, sideSize);
}

function draw9Squares(centerX: number, centerY: number, sideSize) {
let modifier: number[][] = [[0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1]];

  for (let i = 0; i < 8; i++) {
    drawSquareByCenter(centerX + modifier[i][0] * sideSize, centerY + modifier[i][1] * sideSize, sideSize / 3);
  }
  
  if (sideSize < 5) {
    return;
  } else {
    for (let i = 0; i < 8; i++) {
      draw9Squares(centerX + modifier[i][0] * sideSize, centerY + modifier[i][1] * sideSize, sideSize / 3);
    }
  }  
}

drawSquareByCenter(300, 300, 200);
draw9Squares(300, 300, 200);
