'use strict';

function lowXRemove(s: string) {
  
  if (s == '') {
    return '';
  } else {
    if (s.slice(s.length - 1, s.length) == 'x') {
      s = s.slice(0, s.length - 1);
      return lowXRemove(s);  
    } else {
      return lowXRemove(s.slice(0, s.length - 1)).concat(s.slice(s.length - 1, s.length));
    }
  }
}

console.log(lowXRemove('x-1234-x-123456-xx-123-xxx-12-x-12345'));
