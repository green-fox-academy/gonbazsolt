export = { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawSquareGridByCenter(centX: number, centY: number, sideSize: number, gridWidth: number) {

  ctx.fillRect(centX - sideSize / 2 - gridWidth, centY - sideSize / 2 - gridWidth, sideSize, gridWidth);
  ctx.fillRect(centX - sideSize / 2 - gridWidth, centY - sideSize / 2 - gridWidth, gridWidth, sideSize);
  ctx.fillRect(centX + sideSize / 2 - gridWidth - gridWidth, centY - sideSize / 2 - gridWidth, gridWidth, sideSize);
  ctx.fillRect(centX - sideSize / 2 - gridWidth, centY + sideSize / 2 - gridWidth - gridWidth, sideSize, gridWidth);  

}

function draw4SquareGrids(centerX: number, centerY: number, sideSize, gridWidth: number) {
let modifier: number[][] = [[-1, -1], [1, -1], [1, 1], [-1, 1]];

  for (let i = 0; i < 4; i++) {
    drawSquareGridByCenter(centerX + modifier[i][0] * sideSize / 2, centerY + modifier[i][1] * sideSize / 2, sideSize / 2, gridWidth / 2);
  }
  
  if (gridWidth < 3) {
    return;
  } else {
    for (let i = 0; i < 4; i++) {
      draw4SquareGrids(centerX + modifier[i][0] * sideSize / 2, centerY + modifier[i][1] * sideSize / 2, sideSize / 2, gridWidth / 2);
    }
  }  
}

drawSquareGridByCenter(300, 300, 300, 30);
draw4SquareGrids(300, 300, 300, 30);
