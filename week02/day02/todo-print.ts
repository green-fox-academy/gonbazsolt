'use strict';

let todoText: string = ' - Buy milk\n';

todoText = 'My todo:'.concat(String.fromCharCode(10)).concat(todoText);
todoText = todoText.concat(' - Download games');
todoText = todoText.concat(String.fromCharCode(10));
todoText = todoText.concat('     - Diablo');

console.log(todoText);
