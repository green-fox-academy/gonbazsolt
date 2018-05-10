'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let cuboidSideOneSize: number = 10.4;
let cuboidSideTwoSize: number = 20.11;
let cuboidSideThreeSize: number = 9.54;
let surface: number;

surface = cuboidSideOneSize * cuboidSideTwoSize * 2 + cuboidSideOneSize * cuboidSideThreeSize * 2 + cuboidSideTwoSize * cuboidSideThreeSize * 2;
console.log(`current cuboid volume (sides unit of measurement: cm): ${cuboidSideOneSize * cuboidSideTwoSize * cuboidSideThreeSize} cm3`);
console.log(`current cuboid surface (sides unit of measurement: cm): ${surface} cm2`);
