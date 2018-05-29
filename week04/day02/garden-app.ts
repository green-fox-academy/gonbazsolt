'use strict';

class Garden {
  plants: Plant[] = [];

  wateringGarden(watAllAmount: number, details?: boolean): void {
    let howManyPlantNeedsWater: number = 0;
    let statement: string;

    this.plants.forEach(element => {
      if (element.needsWater()) {
        howManyPlantNeedsWater += 1;
      }
    });

    if (howManyPlantNeedsWater === 0) {
      console.log('Watering is not necessary...');
      return;
    } else {
      console.log(`Watering with ${watAllAmount}`);
      if (details) {
        console.log(`${howManyPlantNeedsWater} kinds of plant need water.`);
      }
      this.plants.forEach(element => {
        if (details) {
          (element.needsWater()) ? statement = `${watAllAmount / howManyPlantNeedsWater} unit of water is added.` : statement = 'watering is not necessary.';
          console.log(`The water level of ${element.name} is ${element.water} so ${statement}`);
        }
        if (element.needsWater()) {
          element.wateringPlant(watAllAmount / howManyPlantNeedsWater);
        }
      });
      if (details) {
        console.log('\r');
      }
    }
  }

  waterReport(): void {
    let statement: string;
    for (let i: number = 0; i < this.plants.length; i++) {
      (this.plants[i].needsWater()) ? statement = 'needs' : statement = 'doesnt need';
      console.log(`The ${this.plants[i].name} ${statement} water (water level: ${this.plants[i].water})`);
    }
    console.log('\r');
  }
}

class Plant {
  name: string;
  water: number;
  itIsThirsty: number;
  wateringUtilizeRatio: number

  constructor(name: string, water: number, isThirsty: number, watUtilize: number) {
    this.water = water;
    this.name = name;
    this.itIsThirsty = isThirsty;
    this.wateringUtilizeRatio = watUtilize;
  }

  needsWater(): boolean {
    if (this.water < this.itIsThirsty) {
      return true;
    } else {
      return false;
    }
  }

  wateringPlant(watAmountForAPlant): void {
    this.water += this.wateringUtilizeRatio * watAmountForAPlant;
  }
}

class Flower extends Plant {
  
  constructor(name: string = 'yellow Flower', water: number = 0) {
    super(name, water, 5, 0.75);
  }
}

class Tree extends Plant {

  constructor(name: string = 'purple Tree', water: number = 0) {
    super(name, water, 10, 0.4);
  }
}

let garden = new Garden();

let flower1 = new Flower();
let flower2 = new Flower('blue Flower', 0);
let tree1 = new Tree();
let tree2 = new Tree('orange Tree', 0);

garden.plants.push(flower1);
garden.plants.push(flower2);
garden.plants.push(tree1);
garden.plants.push(tree2);

garden.waterReport();

garden.wateringGarden(40, true);
garden.waterReport();

garden.wateringGarden(70, true);
garden.waterReport();
