'use strict';

// Define several things as a variable, then print their values
// Your name as a string
// Your age as an integer
// Your height in meters as a float
// Whether you are married or not as a boolean

let myName: string = 'gonba';
let myAge: number = 40;
let myHeightInM: number = 1.87;
let amIMarried: boolean = false;
let tempMarried: string;

if (amIMarried) {
  tempMarried = 'married'
} else {
  tempMarried = 'not married'
}

console.log(`Introduction in brief`);
console.log(`Hi, my name is ${myName}. I am ${myAge} years old. My height is ${myHeightInM}m and I am ${tempMarried}.`);
