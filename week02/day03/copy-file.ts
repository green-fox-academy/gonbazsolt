export = { };
'use strict';

declare function require(path: string): any;
const fs = require('fs');

let pathSource: string = 'c:/Users/Zsolt Galamb/Desktop/GF_secret/gonbazsolt/week02/day03/my-text2.txt';
let pathDest: string = 'c:/Users/Zsolt Galamb/Desktop/GF_secret/gonbazsolt/week02/day03/my-text2_copied.txt';

function copyFile(from: string, to: string) {
  let isSuccesfull = true;
  try {
    let fileContent = fs.readFileSync(from, 'utf-8');
    fs.writeFileSync(to,fileContent);
  }

  catch {
    console.log(`Unable to read file: ${from}`);
    isSuccesfull = false;
  }

  return isSuccesfull;
}

if (copyFile(pathSource, pathDest)) {
  console.log('Succesfull file copy');
}
