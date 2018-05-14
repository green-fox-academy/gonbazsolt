'use strict';

let matrix: string[][] = [];
let tempMatrix: string[] = [];

for (let i = 0; i < 4; i++) {
  tempMatrix = [];
  for (let j = 0; j < 4; j++) {
    if ( j == (3 -i)) {
      tempMatrix.push("1");
    } else {
      tempMatrix.push("0");
    }
  }
  matrix.push(tempMatrix);
}

console.log(matrix);
