export = { };
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function convertDegToRad(deg: number): number {
  return deg * Math.PI / 180;  
}

function convertOuterRadiusToInnerRadiusInHexagon(radOut: number): number {
  return radOut * Math.sqrt(0.75);
}

function drawKochLine(centX: number, centY: number, lineLength: number, relativeAngle: number): void {
  let modX: number;
  let modY: number;

  ctx.beginPath();
  //point 1 start
  modX = 1.5 * lineLength * Math.cos(convertDegToRad(relativeAngle));
  modY = 1.5 * lineLength * Math.sin(convertDegToRad(relativeAngle));
  ctx.moveTo(centX - modX, centY - modY);

  //point 2
  modX = 0.5 * lineLength * Math.cos(convertDegToRad(relativeAngle));
  modY = 0.5 * lineLength * Math.sin(convertDegToRad(relativeAngle));
  ctx.lineTo(centX - modX, centY - modY);
  
  //point 3 middle
  modX = lineLength * Math.cos(convertDegToRad(relativeAngle + 60)) - 0.5 * lineLength * Math.cos(convertDegToRad(relativeAngle));
  modY = lineLength * Math.sin(convertDegToRad(relativeAngle + 60)) - 0.5 * lineLength * Math.sin(convertDegToRad(relativeAngle));
  ctx.lineTo(centX + modX, centY + modY);
  
  //point 4
  modX = 0.5 * lineLength * Math.cos(convertDegToRad(relativeAngle));
  modY = 0.5 * lineLength * Math.sin(convertDegToRad(relativeAngle));
  ctx.lineTo(centX + modX, centY + modY);
  
  //point 5 end
  modX = 1.5 * lineLength * Math.cos(convertDegToRad(relativeAngle));
  modY = 1.5 * lineLength * Math.sin(convertDegToRad(relativeAngle));
  ctx.lineTo(centX + modX, centY + modY);
  ctx.stroke();
  ctx.closePath();
}

function recursiveKochLines(centerX: number, centerY: number, recLineLength: number, recRelativeAngle: number): void {
  let modiX: number;
  let modiY: number;

  //koch line 1
  modiX = recLineLength * Math.cos(convertDegToRad(recRelativeAngle));
  modiY = recLineLength * Math.sin(convertDegToRad(recRelativeAngle));
  drawKochLine(centerX - modiX, centerY - modiY, recLineLength / 3, recRelativeAngle);

  //koch line 2
  modiX = recLineLength * Math.cos(convertDegToRad(recRelativeAngle + 60)) / 2 - recLineLength * Math.cos(convertDegToRad(recRelativeAngle)) / 2;
  modiY = recLineLength * Math.sin(convertDegToRad(recRelativeAngle + 60)) / 2 - recLineLength * Math.sin(convertDegToRad(recRelativeAngle)) / 2;
  drawKochLine(centerX + modiX, centerY + modiY, recLineLength / 3, recRelativeAngle + 60);

  //koch line 3
  modiX = recLineLength * Math.cos(convertDegToRad(recRelativeAngle - 60)) / 2 - recLineLength * Math.cos(convertDegToRad(recRelativeAngle)) / 2;
  modiY = recLineLength * Math.sin(convertDegToRad(recRelativeAngle - 60)) / 2 - recLineLength * Math.sin(convertDegToRad(recRelativeAngle)) / 2;
  drawKochLine(centerX - modiX, centerY - modiY, recLineLength / 3, recRelativeAngle - 60);
  
  //koch line 4
  modiX = recLineLength * Math.cos(convertDegToRad(recRelativeAngle));
  modiY = recLineLength * Math.sin(convertDegToRad(recRelativeAngle));
  drawKochLine(centerX + modiX, centerY + modiY, recLineLength / 3, recRelativeAngle);

  if (recLineLength > 27) {

    //rec koch line 1
    modiX = recLineLength * Math.cos(convertDegToRad(recRelativeAngle));
    modiY = recLineLength * Math.sin(convertDegToRad(recRelativeAngle));
    recursiveKochLines(centerX - modiX, centerY - modiY, recLineLength / 3, recRelativeAngle);

    //rec koch line 2
    modiX = recLineLength * Math.cos(convertDegToRad(recRelativeAngle + 60)) / 2 - recLineLength * Math.cos(convertDegToRad(recRelativeAngle)) / 2;
    modiY = recLineLength * Math.sin(convertDegToRad(recRelativeAngle + 60)) / 2 - recLineLength * Math.sin(convertDegToRad(recRelativeAngle)) / 2;
    recursiveKochLines(centerX + modiX, centerY + modiY, recLineLength / 3, recRelativeAngle + 60);

    //rec koch line 3
    modiX = recLineLength * Math.cos(convertDegToRad(recRelativeAngle - 60)) / 2 - recLineLength * Math.cos(convertDegToRad(recRelativeAngle)) / 2;
    modiY = recLineLength * Math.sin(convertDegToRad(recRelativeAngle - 60)) / 2 - recLineLength * Math.sin(convertDegToRad(recRelativeAngle)) / 2;
    recursiveKochLines(centerX - modiX, centerY - modiY, recLineLength / 3, recRelativeAngle - 60);
    
    //rec koch line 4
    modiX = recLineLength * Math.cos(convertDegToRad(recRelativeAngle));
    modiY = recLineLength * Math.sin(convertDegToRad(recRelativeAngle));
    recursiveKochLines(centerX + modiX, centerY + modiY, recLineLength / 3, recRelativeAngle);
  } else {
    return;
  }
}

function drawHexagon(centerX: number, centerY: number, outerRadius: number) {
  let modX: number = 0;
  let modY: number = 0;
  let innerRadius: number = convertOuterRadiusToInnerRadiusInHexagon(outerRadius);

  for (let i = 0; i < 6; i++) {
    modX = innerRadius * Math.cos(i / 3 * Math.PI);
    modY = innerRadius * Math.sin(i / 3 * Math.PI);
    
    //drawKochLine(centerX + modX, centerY + modY, outerRadius / 3, 30 + (i + 4) * 60);
    recursiveKochLines(centerX + modX, centerY + modY, outerRadius / 3, 30 + (i + 4) * 60);
  }
}

ctx.strokeStyle = 'black';
drawHexagon(300, 300, 250);
