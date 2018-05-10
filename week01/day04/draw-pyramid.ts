export{};
'use strict';

let lineCount: number = 4;
let lineString: string;
let iter2: number;

for (let iter: number = 0; iter < lineCount; iter++) {
  lineString = '';
  iter2 = lineCount - 1 - iter;
  while (iter2 > 0) {
    lineString += ' ';
    iter2 -= 1;
  }
  lineString += '*';
  for (let iter3: number = 1; iter3 < (iter + 1); iter3++) {
    lineString += '**';
  }
  iter2 = lineCount - 1 - iter;
  while (iter2 > 0) {
    lineString += ' ';
    iter2 -= 1;
  }
  console.log(lineString);
}
