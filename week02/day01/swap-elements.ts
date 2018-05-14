'use strict';

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`
let abc: string[] = ["Arthur", "Boe", "Chloe"];
let temp: string;

console.log(abc);

temp = abc[0];
abc[0] = abc[2];
abc[2] = temp;

console.log(`1st and 3rd element were swapped: ${abc}`);
