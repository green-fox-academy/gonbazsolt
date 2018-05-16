export = { };
'use strict';

let path: string = 'c:/Users/Zsolt Galamb/Desktop/GF_secret/gonbazsolt/week02/day03/my-text2.txt';
let wordToWriteOut: string = 'Hello';
let expectedLinesOfFile: number = 3;

declare function require(path: string): any;
const fs = require('fs');

function writeContentToFile(pa: string, co: string, nu: number) {
  let content = co.concat('\n');
  for (let i = 1; i < nu; i++) {
    content = content.concat(co).concat('\n');
  }
  fs.writeFileSync(pa,content);
  console.log(`a new text file was created with this content: ${nu} lines of string '${wordToWriteOut}'`);
  console.log(`path: ${pa}`);
}

writeContentToFile(path, wordToWriteOut, expectedLinesOfFile);
