'use strict';

export class Animal {
  hunger: number = 50;
  thirst: number = 50;

  eat() {
    this.hunger -= 1;
  }

  drink() {
    this.thirst -= 1;
  }

  play() {
    this.hunger += 1;
    this.thirst += 11;
  }
}
