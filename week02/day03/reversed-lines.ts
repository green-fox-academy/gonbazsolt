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

function decryptReversedLines(content: string) {
  let linesOfContent: string[] = [];
  let result: string = '';

  linesOfContent = content.split('\r\n');
  for (let i = 0; i < linesOfContent.length; i++) {
    linesOfContent[i] = linesOfContent[i].split("").reverse().join("");
    linesOfContent[i] = linesOfContent[i].concat('\r\n');
    result = result.concat(linesOfContent[i]);
  }
  return result;
}

let currentPath: string = 'reversed-lines.txt';
let currentFileContent: string = '';

currentFileContent = openFile(currentPath);
console.log(decryptReversedLines(currentFileContent));
