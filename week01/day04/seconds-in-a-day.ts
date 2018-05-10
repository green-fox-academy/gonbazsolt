'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let remainingSecondsFromTheDay: number;

remainingSecondsFromTheDay = 60 - currentSeconds + (60 - currentMinutes) * 60 + (24 - currentHours - 1) * 3600;
console.log(`current time: ${currentHours}h ${currentMinutes}m ${currentSeconds}s`);
console.log(`remaining seconds from the day: ${remainingSecondsFromTheDay}`);
