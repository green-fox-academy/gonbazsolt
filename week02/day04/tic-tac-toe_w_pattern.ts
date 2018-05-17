export = { };
'use strict';

declare function require(path: string): any;
const fs = require('fs');

let winPat: number[][] = [[1, 1, 1, 0, 0, 0, 0, 0, 0],
                          [0, 0, 0, 1, 1, 1, 0, 0, 0],
                          [0, 0, 0, 0, 0, 0, 1, 1, 1],
                          [1, 0, 0, 1, 0, 0, 1, 0, 0],
                          [0, 1, 0, 0, 1, 0, 0, 1, 0],
                          [0, 0, 1, 0, 0, 1, 0, 0, 1],
                          [1, 0, 0, 0, 1, 0, 0, 0, 1],
                          [0, 0, 1, 0, 1, 0, 1, 0, 0]];

function openFile(curPath: string) {
  try {
    let fileContent = fs.readFileSync(curPath, 'utf-8');
    return fileContent;
  }
  
  catch(error) {
    console.log(`Unable to read file: ${curPath}`);
  }
}

function makeStringChain(content: string) { 
  return content.replace(/\r\n/gi,'').split('');
}

function decFromBin(arrayOfFields: number[]) {
  let result: number = 0;
  
  for (let i = 0; i < arrayOfFields.length; i++) {
      result += arrayOfFields[i] * Math.pow(2, i);
  }
  return result;
}

function makeBinary(arrayOfFields: string[], whichChar: string) {
  let binary: number[] = [];
  
  for (let i = 0; i < arrayOfFields.length; i++) {
    if (arrayOfFields[i] == whichChar) {
      binary.push(1);
    } else {
      binary.push(0);
    }
  }
  return binary;
}

function isWinner(binNum: number[]) {
  let test: number[] = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < binNum.length; j++) {
      if (binNum[j] + winPat[i][j] == 2) {
        test.push(1);
      } else {
        test.push(0);
      }
    }
    
    for (let k = 0; k < 8; k++) {
      if ((decFromBin(test) == decFromBin(winPat[k])) || (decFromBin(test) == decFromBin(winPat[k]))) {
        return true;
      }
    }
    test = [];
  }
  return false;
}

let fileName: string = 'test_tictactoe.txt';
let fileContArr: string[] = makeStringChain(openFile(fileName));
console.log(openFile(fileName));

if (isWinner(makeBinary(fileContArr, 'X'))) {
  console.log('And the winner is X');
} else if (isWinner(makeBinary(fileContArr, 'O'))) {
  console.log('And the winner is O');
} else {
  console.log('It was a draw');
}
