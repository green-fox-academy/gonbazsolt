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

function decryptEncodedLines(content: string) {
  let linesOfContent: string[] = [];
  let newLineContent: string = '';
  let result: string = '';
  let char: string = '';

  linesOfContent = content.split('\r\n');
  for (let i = 0; i < linesOfContent.length; i++) {
    newLineContent = '';
    for (let j = 0; j < linesOfContent[i].length; j++) {
      if (linesOfContent[i][j] == ' ') {
        newLineContent = newLineContent.concat(linesOfContent[i][j]);
      } else {
        newLineContent = newLineContent.concat(String.fromCharCode((linesOfContent[i][j].charCodeAt(0) - 1)));
      }
    }
    newLineContent = newLineContent.concat('\r\n');
    result = result.concat(newLineContent);
  }
  return result;
}

let currentPath: string = 'encoded-lines.txt';
let currentFileContent: string = '';

currentFileContent = openFile(currentPath);
console.log(decryptEncodedLines(currentFileContent));
