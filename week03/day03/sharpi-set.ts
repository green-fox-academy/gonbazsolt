import { Sharpie } from "./sharpie";

class SharpieSet {
  sharpies: Sharpie[] = [];

  countUsable() {
    let num: number = 0;

    this.sharpies.forEach( (array) => { 
      if (array.inkAmount > 0) {
        num += 1;
      }
    });

    return num;
  }

  removeTrash() {
    this.sharpies.forEach( (array, index) => { 
      if (array.inkAmount == 0) {
        this.sharpies.splice(index, 1);
      }
    });
  }
}

function initializeSharpies(sharpies: Sharpie[], howManyToInit: number) {
  for (let i = 0; i < howManyToInit; i++) {
    sharpies.push(initializeSharpie());
  }
  return sharpies;
}

function initializeSharpie() {
  return new Sharpie('black', 40);
}

let sharpieCollection = new SharpieSet();

initializeSharpies(sharpieCollection.sharpies, 10);
console.log(`There are ${sharpieCollection.countUsable()} pcs non-empty`);

sharpieCollection.sharpies[5].inkAmount = 0;

sharpieCollection.removeTrash();
console.log(`There are ${sharpieCollection.countUsable()} pcs non-empty`);
