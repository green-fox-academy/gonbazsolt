'use strict';

import { test } from 'tape';
import { Apple } from './apple';

test('test Apple object getApple method', t => {
  const apple: Apple = new Apple();

  var actual: string = apple.getApple();
  var expected: string = 'apple';

  t.equal(actual, expected);
  t.end();
});
