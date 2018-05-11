'use strict';

let lineCount: number = 6;
let lineString: string;

for (let iter: number = 1; iter < (lineCount + 1); iter++) {
  lineString = "";
  for (let iter2: number = 1; iter2 < (lineCount + 1); iter2++) {
    if ( (iter == 1) || (iter == lineCount ) ) {
      lineString += '%';
    } else if ( (iter2 == 1) || (iter2 == lineCount) ) {
      lineString += '%';
    } else {
      lineString += ' ';
    }
  }
  console.log(lineString);
}
