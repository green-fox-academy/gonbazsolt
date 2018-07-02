'use strict';

const whoIsTheWinner = require('./dojo_poker');
const test = require('tape');

test('poker whoIsTheWinner: Tie', t => {
  const actual = whoIsTheWinner([['2', 'H'], ['3', 'H'], ['4', 'H'], ['5', 'D'], ['8', 'S']],
                                [['2', 'H'], ['3', 'H'], ['4', 'H'], ['5', 'D'], ['8', 'S']]);
  const expected = 'It\'s a draw';

  t.equal(actual, expected);
  t.end();
});

test('poker whoIsTheWinner: High Card (different 1st highest card in hands)', t => {
  const actual = whoIsTheWinner([['2', 'H'], ['9', 'H'], ['10', 'H'], ['5', 'D'], ['8', 'S']],
                                [['2', 'H'], ['3', 'H'], ['7', 'H'], ['5', 'D'], ['8', 'S']]);
  const expected = 'Black wins';

  t.equal(actual, expected);
  t.end();
});

test('poker whoIsTheWinner: High Card (same 1st highest but different 2nd highest card in hands)', t => {
  const actual = whoIsTheWinner([['2', 'H'], ['2', 'S'], ['10', 'H'], ['9', 'D'], ['8', 'S']],
                                [['2', 'H'], ['3', 'H'], ['10', 'H'], ['5', 'D'], ['8', 'S']]);
  const expected = 'Black wins';

  t.equal(actual, expected);
  t.end();
});
