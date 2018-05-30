'use strict';

abstract class Instrument {
  protected name: string;

  constructor(name) {
    this.name = name;
  }

  abstract play(): void;
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;

  constructor(name, numOfString) {
    super(name);
    this.numberOfStrings = numOfString;
  }

  abstract sound(): void;

  play():void {
    console.log(`the sound of ${this.name} is "${this.sound()}" and it has ${this.numberOfStrings} strings`);
  }
}

class ElectricGuitar extends StringedInstrument {
  constructor(numOfString?: number) {
    if (numOfString === undefined) {
      numOfString = 6;
    }
    super('electric guitar', numOfString);
  }

  sound(): string {
    return 'Twang';
  }
}

class BassGuitar extends StringedInstrument {
  constructor(numOfString?: number) {
    if (numOfString === undefined) {
      numOfString = 4;
    }
    super('bass guitar', numOfString);
  }

  sound(): string {
    return 'Duum-duum-duum';
  }
}

class Violin extends StringedInstrument {
  constructor(numOfString?: number) {
    if (numOfString === undefined) {
      numOfString = 4;
    }
    super('violin', numOfString);
  }

  sound(): string {
    return 'Screech';
  }
}

console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();
