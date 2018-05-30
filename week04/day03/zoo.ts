'use strict';

export abstract class Animal {
  name: string;
  age: number;
  private tribe: string;
  abstract isPredator: boolean;

  constructor(tribe: string, age: number, name?: string) {
    (name === undefined) ? this.name = 'no name' : this.name = name;
    this.age = age;
    this.tribe = tribe;
  }

  abstract getAgeTribeAndSomethingPersonal(): void;

  reachTribe(): string {
    return this.tribe;
  }

  abstract breed(): string;
}

export class Mammal extends Animal {
  numberOfLegs: number;
  isPredator: boolean;

  constructor(tribe: string, age: number, name?: string, numLegs: number = 4, predator: boolean = true) {
    super(tribe, age, name);
    this.numberOfLegs = numLegs;
    this.isPredator = predator;
  }

  getAgeTribeAndSomethingPersonal(): void {
    console.log(`there is a ${this.age} years old ${this.reachTribe()} and it has ${this.numberOfLegs} legs`);
  }

  breed(): string {
    return 'giving birth';
  }

  rename(newName: string): void {
    this.name = newName;
  }
}

export class Reptile extends Animal {
  currentTempreture: number;
  isPredator: boolean;

  constructor(tribe: string, age: number, name?: string, curTemp: number = 27, predator: boolean = true) {
    super(tribe, age, name);
    this.currentTempreture = curTemp;
    this.isPredator = predator;
  }

  getAgeTribeAndSomethingPersonal(): void {
    console.log(`there is a ${this.age} years old ${this.reachTribe()} and its current temperature is ${this.currentTempreture}`);
  }

  breed(): string {
    return 'laying eggs';
  }

  sunBathing(hours: number): void {
    this.currentTempreture += hours * 1.1;
  }
}

export class Bird extends Animal {
  wingspan: number;
  isPredator: boolean;

  constructor(tribe: string, age: number, name?: string, wingspan: number = 50, predator: boolean = true) {
    super(tribe, age, name);
    this.wingspan = wingspan;
    this.isPredator = predator;
  }

  getAgeTribeAndSomethingPersonal(): void {
    console.log(`there is a ${this.age} years old ${this.reachTribe()} and its wingspan is ${this.wingspan}`);
  }

  breed(): string {
    return 'laying eggs';
  }

  mainNutrition(): string {
    if (this.isPredator) {
      return 'meat';
    } else {
      return 'vegetable';
    }
  }
}
