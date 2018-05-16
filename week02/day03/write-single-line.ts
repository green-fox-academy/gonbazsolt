export = { };
'use script';

declare function require(path: string): any;
const fs = require('fs');

try {
  let fileContent = fs.readFileSync('my-text.txt', 'utf-8');
}

catch(error) {
  console.log('Unable to read file: my-file.txt');
  console.log('but now it is being created...');
}

fs.writeFileSync('my-text.txt','Zsolt Galamb');
