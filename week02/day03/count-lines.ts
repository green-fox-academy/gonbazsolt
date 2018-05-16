export = { };
'use strict';

let fileName: string = 'my-text.txt';

declare function require(path: string): any;
const fs = require('fs');

let numberOfLines: number = 0;

try {
  let fileContent = fs.readFileSync(fileName, 'utf-8');
  let fileContentByLines: string[] = fileContent.split('\n');
  numberOfLines = fileContentByLines.length;
}

catch(error) {
  
}

console.log(`lines number of the file ${fileName}: ${numberOfLines}`);
