'use strict';

function lowXChangeToY(s: string) {
  
  if (s == '') {
    return '';
  } else {
    if (s.slice(s.length - 1, s.length) == 'x') {
      s = s.slice(0, s.length - 1).concat('y');
    }
    return lowXChangeToY(s.slice(0, s.length - 1)).concat(s.slice(s.length - 1, s.length));
  }
}

console.log(lowXChangeToY('x1234x123456xx123xxx12x12345'));
