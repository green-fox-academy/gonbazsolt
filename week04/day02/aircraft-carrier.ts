'use strict';

class Aircraft {
  ammoStock: number = 0;
  maxAmmo: number;
  baseDamage: number;
  type: string;

  constructor(maxAmmo: number, baseDamage: number, type: string) {
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.type = type;
  }

  fight(): number {
    let ammoShot: number = this.ammoStock;

    this.ammoStock = 0;
    return ammoShot * this.baseDamage
  }

  refill(amountOfAmmo): number {
    let restOfAmmo: number;

    if ((this.maxAmmo - this.ammoStock) < amountOfAmmo) {
      restOfAmmo = amountOfAmmo + this.ammoStock - this.maxAmmo;
      this.ammoStock = this.maxAmmo;
    } else {
      this.ammoStock += amountOfAmmo;
      restOfAmmo = 0;
    }

    return restOfAmmo;
  }

  getType(): string {
    return this.type;
  }

  getStatus(): string {
    return `Type ${this.getType()}, Ammo: ${this.ammoStock}, Base Damage: ${this.baseDamage}, All Damage: ${this.ammoStock * this.baseDamage}`;
  }

  isPriority(): boolean {
    let answer: boolean;

    (this.type === 'F35') ? answer = true : answer = false;

    return answer;
  }
}

class F16 extends Aircraft {

  constructor(type: string = 'F16') {
    super(8, 30, type);
  }
}

class F35 extends Aircraft {

  constructor(type: string = 'F35') {
    super(12, 50, type);
  }
}

class Carrier {
  aircrafts: Aircraft[] = [];
  storeOfAmmo: number;
  health: number;

  constructor(initAmmo: number, initHealth: number) {
    this.storeOfAmmo = initAmmo;
    this.health = initHealth;
  }

  add(aircraft: Aircraft): void {
    this.aircrafts.push(aircraft);
  }

  fill(): void {
    let requiredAmmoToFillAllAircraft: number = 0;

    if (this.storeOfAmmo !== 0) {
      this.aircrafts.forEach(element => {
        requiredAmmoToFillAllAircraft += (element.maxAmmo - element.ammoStock);
      });

      console.log(`required ammo: ${requiredAmmoToFillAllAircraft} stored ammo: ${this.storeOfAmmo}\r\n`);
      if (requiredAmmoToFillAllAircraft <= this.storeOfAmmo) {
        this.aircrafts.forEach(element => {
          this.storeOfAmmo = element.refill(this.storeOfAmmo);
        });
      } else {
        for (let i: number = 0; i < this.aircrafts.length; i++) {
          if ((this.aircrafts[i].isPriority()) && (this.storeOfAmmo > 0)) {
            this.storeOfAmmo = this.aircrafts[i].refill(this.storeOfAmmo);
          } else if (this.storeOfAmmo === 0) {
            return;
          } 
        }

        for (let i: number = 0; i < this.aircrafts.length; i++) {
          if ((!this.aircrafts[i].isPriority()) && (this.storeOfAmmo > 0)) {
            this.storeOfAmmo = this.aircrafts[i].refill(this.storeOfAmmo);
          } else if (this.storeOfAmmo === 0) {
            return;
          } 
        }
      }
    } else {
      throw 'No ammo to fill aircrafts...';
    }
  }

  fight(carrier: Carrier): void {
    let aircraftsAllDamage: number = 0;

    this.aircrafts.forEach(element => {
      aircraftsAllDamage += element.fight();
    });

    carrier.health -= aircraftsAllDamage;
    if (carrier.health < 0) {
      carrier.health = 0;
    }
  }

  getStatus(): void {
    let statusAnswer: string = '';
    let maxDamage: number = 0;

    if (this.health === 0) {
      console.log(`It's dead Jim :(\r`);
    } else {
      this.aircrafts.forEach(element => {
      maxDamage += element.ammoStock * element.baseDamage;
      });
      statusAnswer = statusAnswer.concat(`HP: ${this.health}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.storeOfAmmo}, Total damage: ${maxDamage}`);
      statusAnswer = statusAnswer.concat('\r\nAircrafts:\r\n');

      for (let i: number = 0; i < this.aircrafts.length; i++) {
        statusAnswer = statusAnswer.concat(this.aircrafts[i].getStatus()).concat('\r\n');
      }

      console.log(statusAnswer, '\r');
    }
  }
}

let carrier1 = new Carrier(51, 5000);
let carrier2 = new Carrier(0, 2200);

let aircraft1 = new F35();
carrier1.add(aircraft1);

let aircraft4 = new F16();
carrier1.add(aircraft4);
carrier2.add(aircraft4);

let aircraft2 = new F35();
carrier1.add(aircraft2);
carrier2.add(aircraft2);

let aircraft3 = new F35();
carrier1.add(aircraft3);

let aircraft5 = new F16();
carrier1.add(aircraft5);

console.log('Carrier One after creation...');
carrier1.getStatus();

console.log('Carrier One filling aircrafts... (first round)');
carrier1.fill();

try {
  console.log('Carrier One filling aircrafts...(second round - exception expected)');
  carrier1.fill();
}

catch(exp) {
  console.log(exp, '\r\n');
}

console.log('Carrier One after filling...');
carrier1.getStatus();

console.log('Carrier Two before fight...');
carrier2.getStatus();

carrier1.fight(carrier2);

console.log('Carrier One after fight...');
carrier1.getStatus();

console.log('Carrier Two after fight...');
carrier2.getStatus();
