export { };
'use strict';

let name: string = 'Greenfox';

function greet (argName: string ='reader') {
  console.log(`Greetings, dear ${argName}`);
}

greet(name);
