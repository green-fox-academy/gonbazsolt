'use strict';

import { test } from 'tape';
import { Apple } from './apple';

test('test Apple object getApple method', t => {
  const apple = new Apple();

  var actual = apple.getApple();
  var expected = 'apple';

  t.equal(actual, expected);
  t.end();
});
