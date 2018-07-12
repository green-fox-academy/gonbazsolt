first().then(second).then(console.log);

/*
-----------------------------------------------------------------
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    'use strict';

    // global first, second 

    var firstPromise = first();

    var secondPromise = firstPromise.then(function (val) {
      return second(val);
    });

    secondPromise.then(console.log);
*/
