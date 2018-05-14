'use strict';

let integers: number[] = [4, 5, 6, 7];

console.log('for loop is chosen');
for (let i = 0; i < integers.length; i++) {
  console.log(integers[i]);
}

console.log('forEach function is called');
integers.forEach(function (element) {
  console.log(element);
});
