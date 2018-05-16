'use strict';

declare function require(path: string): any;
const fs = require('fs');

try {
  let fileContent = fs.readFileSync('my-text.txt', 'utf-8');
  console.log(fileContent);
}

catch(error) {
  console.log('Unable to read file: my-file.txt');
}
