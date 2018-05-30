'use strict';

import {Animal} from './zoo'
import {Mammal} from './zoo'
import {Reptile} from './zoo'
import {Bird} from './zoo'

let mammal = new Mammal('lion', 5, 'Hero');
let reptile = new Reptile('lizard', 3, 'Sweety', 30);
let bird = new Bird('chicken', 2, 'Big Bird', 40, false);

console.log('some basic information:');
mammal.getAgeTribeAndSomethingPersonal();
reptile.getAgeTribeAndSomethingPersonal();
bird.getAgeTribeAndSomethingPersonal();

console.log('\r\nHow do they breed?')
console.log(`A ${mammal.reachTribe()} is breeding by ${mammal.breed()}`);
console.log(`A ${reptile.reachTribe()} is breeding by ${reptile.breed()}`);
console.log(`A ${bird.reachTribe()} is breeding by ${bird.breed()}`);
