export = { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//please use just these numbers: 4, 16, 64, 256
let partNum: number = 64;

function partition(partNumber: number) {
  let i: number = 0;

  while (i < Math.sqrt(partNumber)) {
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo((600 / Math.sqrt(partNumber)) * (i + 1), 0);
    ctx.lineTo((600 / Math.sqrt(partNumber)) * (i + 1), 400);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, (400 / Math.sqrt(partNumber)) * (i + 1));
    ctx.lineTo(600, (400 / Math.sqrt(partNumber)) * (i + 1));
    ctx.stroke();
    i += 1;
  }
}

function drawThatShape(partNumber: number) {
  let moveX: number = 0;
  let moveY: number = 0;
  let k: number = 10;
  let unitX: number = 600 / Math.sqrt(partNumber);
  let unitY: number = 400 / Math.sqrt(partNumber);
  let smallMoveX: number = unitX / k;
  let smallMoveY: number = unitY / k;
  let j1: number = 0;
  let j2: number = 0;

  while ((j1 < Math.sqrt(partNumber)) && (j2 < Math.sqrt(partNumber))) {
    moveX = j1 * 600 / Math.sqrt(partNumber);
    moveY = j2 * 400 / Math.sqrt(partNumber);
    
    for (let i = 0; i < k; i++) {
    
      ctx.strokeStyle = "green";
      ctx.beginPath();
      ctx.moveTo(0 + moveX + i * smallMoveX, 0 + moveY);
      ctx.lineTo(0 + moveX + unitX, 0 + moveY + i * smallMoveY);
      ctx.stroke();
    
      ctx.strokeStyle = "red";
      ctx.beginPath();
      ctx.moveTo(0 + moveX, 0 + moveY + i * smallMoveY);
      ctx.lineTo(0 + moveX + i * smallMoveX, 0 + moveY + unitY);
      ctx.stroke();
    }
    if (j1 < Math.sqrt(partNumber) - 1) {
      j1 += 1;
    } else {
      j1 = 0;
      j2 += 1;
    }
  }
}

partition(partNum);
drawThatShape(partNum);
