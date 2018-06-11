'use strict';

import { test } from 'tape';
import { Sharpie } from './sharpie';

test('Sharpie class, constructor', function (t: any): any {
  let sharpie: Sharpie = new Sharpie('black', 10);

  t.deepEqual(sharpie, { color: 'black', width: 10, inkAmount: 100});
  t.end();
});

test('Sharpie class, use() method', function (t: any): any {
  let sharpie: Sharpie = new Sharpie('black', 10);

  sharpie.use();
  t.equal(sharpie.inkAmount, 99);
  t.end();
});
