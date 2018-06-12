'use strict';

export class Animal {
  hunger: number = 50;
  thirst: number = 50;

  eat(): void {
    this.hunger -= 1;
  }

  drink(): void {
    this.thirst -= 1;
  }

  play(): void {
    this.hunger += 1;
    this.thirst += 11;
  }
}
