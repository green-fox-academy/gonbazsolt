'use strict';

const mapWith = (array, callback) => {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.

  return output
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which remove every second letter from a string

const removeSecondLetter = (text) => {
  let textArray = text.split('');

  for (let i = 0; i < textArray.length; i++) {
    if (i % 2 === 1) {
      textArray.splice(i, 1, '');
    }
  }
  text = textArray.join('');
  return text;
}

const words = ['map', 'reduce', 'filter'];

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']