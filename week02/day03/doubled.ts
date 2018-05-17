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

function decryptDouble(content: string) {
  let linesOfContent: string[] = [];
  let newLineContent: string = '';
  let result: string = '';

  linesOfContent = content.split('\r\n');
  for (let i = 0; i < linesOfContent.length; i++) {
    newLineContent = '';
    for (let j = 0; j < linesOfContent[i].length; j++) {
      if (j % 2 == 0) {
        newLineContent = newLineContent.concat(linesOfContent[i][j]);
      }
    }
    newLineContent = newLineContent.concat('\r\n');
    result = result.concat(newLineContent);
  }
  return result;
}

let currentPath: string = 'duplicated-chars.txt';
let currentFileContent: string = '';

currentFileContent = openFile(currentPath);
console.log(decryptDouble(currentFileContent));
