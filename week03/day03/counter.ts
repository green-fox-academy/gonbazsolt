'use strict';

class Counter {
  count: number;

  constructor(count?: number) {
    if (count == undefined) {
      this.count = 0;
    } else {
      this.count = count;
    }
  }

  add(num?: number) {
    console.log(num);
    if (num == undefined) {
      this.count += 1;
    } else {
      this.count += num;
    }
  }

  get() {
    return this.count.toString();
  }

  reset() {
    this.count = 0;
  }
}
