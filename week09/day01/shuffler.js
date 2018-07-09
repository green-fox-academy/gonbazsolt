const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit(amt) {
  }
};

const Cyprus = {
  cash: 0,
  name: 'Panama',
  tax: '5%',
  deposit(amt) {
  }
};

const Shuffler = {
  cash: 10000,
  counter: 0,
  pick: function() {
    this.counter += 1;
    this.counter %= 2;
    (this.counter) ? Panama.cash += 1000 : Cyprus.cash += 1000;
    this.cash -= 1000;
  }
};

Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000
Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000

console.log(Panama.cash); // 2000 
console.log(Cyprus.cash); // 2000 