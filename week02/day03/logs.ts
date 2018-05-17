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

function uniqueIPadresses(content: string) {
  let arrayOfIPadresses: string[] = [];
  let fieldsOfLine: string[] = [];
  let result: string[] = [];
  let j: number = 0;

  arrayOfIPadresses = content.split('/');
  for (let i = 0; i < arrayOfIPadresses.length; i++) {
    fieldsOfLine = arrayOfIPadresses[i].split(' ');
    arrayOfIPadresses[i] = fieldsOfLine[8];
  }
  arrayOfIPadresses.sort();

  result[j] = arrayOfIPadresses[0];
  for (let i = 1; i < arrayOfIPadresses.length; i++) {
    if (result[j] != arrayOfIPadresses[i]) {
      j = result.push(arrayOfIPadresses[i]) - 1;
    }
  }
  return result;
}

function getAndPostRatio(content: string) {
  let arrayOfIPadresses: string[] = [];
  let getHappened: number = 0;
  let postHappened: number = 0;
  let fieldsOfLine: string[] = [];

  arrayOfIPadresses = content.split('/');
  for (let i = 0; i < arrayOfIPadresses.length; i++) {
    fieldsOfLine = arrayOfIPadresses[i].split(' ');
    arrayOfIPadresses[i] = fieldsOfLine[8];
    if (fieldsOfLine[11] == 'GET') {
      getHappened += 1;
    } else if (fieldsOfLine[11] == 'POST') {
      postHappened += 1;
    }
  }
  return getHappened / postHappened;
}

let currentPath: string = 'log.txt';
let currentFileContent: string = '';
let uniqueIP: string[] = [];

currentFileContent = openFile(currentPath);
uniqueIP = uniqueIPadresses(currentFileContent);
console.log('The first 10 unique and sorted IP address:');
for (let i=0; i<10; i++) (console.log(uniqueIP[i]));
console.log(`GET/POST ratio: ${getAndPostRatio(currentFileContent)}`);
