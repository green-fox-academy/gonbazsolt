'use strict';

function freakBunnyEarsCounter(n: number) {
  
  if (n == 0) {
    return 0;
  } else if (n % 2 == 0) {
    return 3 + freakBunnyEarsCounter(n - 1);
  } else {
    return 2 + freakBunnyEarsCounter(n - 1);
  }
}

for (let i = 0; i < 11; i++) {
  console.log(freakBunnyEarsCounter(i));
}
