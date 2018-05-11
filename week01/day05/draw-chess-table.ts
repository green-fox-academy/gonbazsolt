export{};
'use strict';

let lineCount: number = 8;
let lineString: string;
let isDark: boolean = true;

for (let iter: number = 1; iter < (lineCount + 1); iter++) {
  lineString = '';
  for (let iter2: number = 1; iter2 < (lineCount + 1); iter2++) {
    if (isDark) {
        lineString += '%';
        isDark = !isDark;
    } else {
        lineString += ' ';
        isDark = !isDark;
    }
  }
  console.log(lineString);
  isDark = !isDark;
}
