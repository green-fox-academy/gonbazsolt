var all = (promise1, promise2) => {
  return newPromise = new Promise((res, rej) => {
    let counter = 0;
    let resValue = [];

    promise1.then((value) => {
      counter += 1;
      resValue.unshift(value);
      
      if (counter === 2) {
        res(resValue);
      }
    });

    promise2.then((value) => {
      counter += 1;
      resValue.unshift(value);

      if (counter === 2) {
        res(resValue);
      }
    });
  });
}

all(getPromise1(), getPromise2()).then(console.log);

/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    'use strict';

    // global getPromise1, getPromise2

    function all(a, b) {
      return new Promise(function (fulfill, reject) {
        var counter = 0;
        var out = [];

        a.then(function (val) {
          out[0] = val;
          counter++;

          if (counter >= 2) {
            fulfill(out);
          }
        });

        b.then(function (val) {
          out[1] = val;
          counter++;

          if (counter >= 2) {
            fulfill(out);
          }
        });
      });
    }

    all(getPromise1(), getPromise2())
      .then(console.log);


────────────────────────────────────────────────────────────────────────────────
*/
