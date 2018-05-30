'use strict';

import {Animal} from './zoo'

interface Flyable {
  land(): void;
  fly(): void;
  takeOff(): void;
}

abstract class Vehicle {
  protected numberOfWheels: number;
  protected serialNumber: string;
  protected owner: string;

  constructor(owner: string = 'unknown', numberOfWheels: number = 4, serialNumber?: string) {
    this.owner = owner;
    this.numberOfWheels = numberOfWheels;
    (serialNumber === undefined) ? this.serialNumber = '000000' : this.serialNumber = serialNumber;
  }
}

class Helicopter extends Vehicle implements Flyable {
  driver: string;

  constructor(driver: string, owner: string, numberOfWheels: number = 0, serialNumber?: string) {
    super(owner, numberOfWheels, serialNumber);
    this.driver = driver;
  }

  land(): void {
    console.log(`Helicopter ${typeof this} is landing`);
  }

  fly(): void {
    console.log(`Helicopter ${typeof this} is flying`);
  }

  takeOff():void {
    console.log(`Helicopter ${typeof this} is taking off`);
  }
}

class Bird extends Animal implements Flyable {
  color: string;
  isPredator: boolean;

  constructor(tribe: string, age: number, name?: string, color: string = 'light brown', predator: boolean = true) {
    super(tribe, age, name);
    this.color = color;
    this.isPredator = predator;
  }

  getAgeTribeAndSomethingPersonal(): void {
    console.log(`there is a ${this.age} years old ${this.reachTribe()} and its color is ${this.color}`);
  }

  breed(): string {
    return 'laying eggs';
  }

  land(): void {
    console.log(`Bird ${typeof this} is landing`);
  }

  fly(): void {
    console.log(`Bird ${typeof this} is flying`);
  }

  takeOff():void {
    console.log(`Bird ${typeof this} is taking off`);
  }
}

let helicopter = new Helicopter('Officer Frank Murphy', 'LAPD');
let bird = new Bird('eagle', 3, 'Tweety');

helicopter.takeOff();
helicopter.fly();
helicopter.land();

console.log('\r');

bird.getAgeTribeAndSomethingPersonal();
console.log(`and it is breeding by ${bird.breed()}\r\n`);
bird.takeOff();
bird.fly();
bird.land();
