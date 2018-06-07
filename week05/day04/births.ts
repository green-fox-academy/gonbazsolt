'use strict';

const fs = require('fs');
let fileContent: string;
let contentArray: string[];
let births: Object = { };

function openFile(curPath: string): string {

  try {
    return fs.readFileSync(curPath, 'utf-8');
  }
  
  catch(error) {
    return `\r\n*** Error: Unable to read file - ${curPath} ***`;
  }
}

fileContent = openFile('births.csv');

if (fileContent.indexOf('Error') === -1) {
  contentArray = fileContent.split('\r\n');

  for (let i: number = 0; i < contentArray.length; i++) {
    if (births.hasOwnProperty(contentArray[i].split(';')[1].split('-')[0])) {
      births[contentArray[i].split(';')[1].split('-')[0]] += 1;
    } else {
      births[contentArray[i].split(';')[1].split('-')[0]] = 1;
    }
  }

  let max: number = 0;
  let keyMax: string;
  for (let key in births) {
    if (parseInt(births[key], 10) > max) {
      max = parseInt(births[key], 10);
      keyMax = key;
    }
  }

  console.log(keyMax);
} else {
  console.log(fileContent);
}
