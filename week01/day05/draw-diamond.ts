export { };
'use strict';

let lineCount: number = 7;
let lineString: string;
let lineIndexSum: number;
let lineIndexDiff: number;
let howManyLinesToMiddle: number;

howManyLinesToMiddle = Math.round(lineCount / 2) - 1;

for (let iter: number = 1; iter < (lineCount + 1); iter++) {
  lineString = "";
  
  for (let iter2: number = 1; iter2 < (lineCount + 1); iter2++) {
    lineIndexSum = iter + iter2;
    lineIndexDiff = Math.abs(iter - iter2);
    
    if (((lineIndexSum >= 2 + howManyLinesToMiddle) && (lineIndexSum <= (lineCount * 2 - howManyLinesToMiddle))) 
        && ((lineIndexDiff >= 0) && (lineIndexDiff <= (lineCount - 1 - howManyLinesToMiddle)))) {
      lineString += '*';
    } else {
      lineString += ' ';
    }
  }
  console.log(lineString);
}
