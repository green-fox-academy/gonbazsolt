'use strict';

import { test } from 'tape';
import { Animal } from './animal';

test('Animal class, creation, default vaues', function (t: any): any {
  let animal: Animal = new Animal();

  t.deepEqual(animal, { hunger: 50, thirst: 50});
  t.end();
});

test('Animal class, method drink()', function (t: any): any {
  let animal: Animal = new Animal();

  animal.drink()
  t.equal(animal.thirst, 49);
  t.end();
});

test('Animal class, method eat()', function (t: any): any {
  let animal: Animal = new Animal();

  animal.eat();
  t.equal(animal.hunger, 49);
  t.end();
});

test('Animal class, method play()', function (t: any): any {
  let animal: Animal = new Animal();

  animal.play();
  t.deepEqual(animal, { hunger: 51, thirst: 61});
  t.end();
});
