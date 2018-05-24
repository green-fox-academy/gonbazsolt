'use strict';

class Station {
  gasAmount: number;

  refill(car: Car) {
    this.gasAmount -= car.capacity;
    car.gasAmount += car.capacity;
  }
}

class Car {
  gasAmount: number;
  capacity: number;

  constructor() {
    this.gasAmount = 0;
    this.capacity = 100;
  }
}

let car = new Car();
let station = new Station();

station.gasAmount = 220;
console.log(car.gasAmount, station.gasAmount);

station.refill(car);
console.log(car.gasAmount, station.gasAmount);
