export = { };
'use strict';

declare function require(path: string): any;
const fs = require('fs');

function openFile(curPath: string) {
  try {
    let fileContent = fs.readFileSync(curPath, 'utf-8');
    return fileContent;
  }
  
  catch(error) {
    console.log(`Unable to read file: ${curPath}`);
  }
}

function mostCommonNumbers(content: string) {
  let arrayOflines: string[] = [];
  let fieldsOfLine: string[] = [];
  let drawNumbers: number[] = [];
  let howManyTimesItDrawn: number[] = [];
  let result: number[] = [];
  let j: number = 0;

  arrayOflines = content.split('\r\n');
  for (let i = 0; i < arrayOflines.length; i++) {
    fieldsOfLine = arrayOflines[i].split(';');
    drawNumbers.push(parseInt(fieldsOfLine[11], 10));
    drawNumbers.push(parseInt(fieldsOfLine[12], 10));
    drawNumbers.push(parseInt(fieldsOfLine[13], 10));
    drawNumbers.push(parseInt(fieldsOfLine[14], 10));
    drawNumbers.push(parseInt(fieldsOfLine[15], 10));
    }
  for (let i = 1; i < 91; i++) {
    howManyTimesItDrawn[i] = 0;
  }
  for (let i = 0; i < drawNumbers.length; i++) {
    howManyTimesItDrawn[drawNumbers[i]] += 1;
  }
  for (let i = 1; i < 91; i++) {
    howManyTimesItDrawn[i] = howManyTimesItDrawn[i] * 1000 + i;
  }
  howManyTimesItDrawn.sort().reverse();

  result[j] = howManyTimesItDrawn[1] % 1000;
  for (let i = 1; i < howManyTimesItDrawn.length - 1; i++) {
    if ((result[j] == result[j -1]) || (j < 5)) {
    j = result.push(howManyTimesItDrawn[i+1] % 1000) - 1;
    }
  }
  for (let i = 0; i < result.length; i++) {
    console.log(`number ${howManyTimesItDrawn[i + 1] % 1000} was drawn ${Math.floor(howManyTimesItDrawn[i + 1] / 1000)} times`);
  }
  return result;
}

let currentPath: string = 'lottery.csv';
let currentFileContent: string = '';

currentFileContent = openFile(currentPath);
console.log(`5 (or more if there are numbers with same incidence from the 5 most common) most common numbers: ${mostCommonNumbers(currentFileContent)}`);
