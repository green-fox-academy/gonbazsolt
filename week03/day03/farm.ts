import { Animal } from "./animal";

'use strict';

class Farm {
  animals: Animal[];
  slots: number;
  breed() {
    if (this.slots !== 0) {
      this.animals.push(new Animal());
    }
    this.slots -= 1;
  }

  slaughter() {
    let leastHungryAnimalIndex: number = 0;
    this.animals.forEach((value, index) => {
      if (value.hunger < this.animals[leastHungryAnimalIndex].hunger) {
        leastHungryAnimalIndex = index;
      }
    });
    this.animals.splice(leastHungryAnimalIndex, 1);
    this.slots += 1;
  }
}

function initAnimal(hung: number, thir: number): Animal {
  let oneAnimal: Animal = new Animal();
  oneAnimal.hunger = hung;
  oneAnimal.thirst = thir;
  return oneAnimal;
}

function initAnimals(animalsArray: Animal[], howManyToInit: number): Animal[] {
  let randomHunger: number;
  let randomThirst: number;
  animalsArray = [];

  for (let i = 0; i < howManyToInit; i++) {
    randomHunger = Math.floor(Math.random() * 50);
    randomThirst = Math.floor(Math.random() * 50);
    animalsArray.push(initAnimal(randomHunger, randomThirst));
  }
  return animalsArray;
}

let farm = new Farm();

farm.animals = initAnimals(farm.animals, 10);

console.log('list of animals (original)');
farm.animals.forEach((value, index) => {
  console.log(index, value);
});

farm.slots = 1;
console.log(`free slots: ${farm.slots}`)
farm.breed();

console.log('\n\rlist of animals (after breed)');
farm.animals.forEach((value, index) => {
  console.log(index, value);
});
console.log(`free slots: ${farm.slots}`)

farm.slaughter();

console.log('\n\rlist of animals (after slaughter)');
farm.animals.forEach((value, index) => {
  console.log(index, value);
});
console.log(`free slots: ${farm.slots}`)
