'use strict';

let lineCount: number = 4;
let starString: string = '*';

for (let iter: number = 0; iter < lineCount; iter++) {
  console.log(starString);
  starString += '*';
}
