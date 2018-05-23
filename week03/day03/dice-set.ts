class DiceSet {
  dices: number[];
  readonly numOfDices: number = 6;

  roll(): number[] {
    this.dices = [];
    for(var i = 0; i < this.numOfDices; i++) { 
        this.dices.push(Math.floor(Math.random() * 6 + 1));
    }
    return this.dices;
  }

  reroll(index?: number) {
    if(index == undefined) {
        for(var i = 0; i < this.numOfDices; i++) { 
            this.dices[i] = Math.floor(Math.random() * 6 + 1);
        }
    } else {
        this.dices[index] = Math.floor(Math.random() * 6 + 1);
    }
  }
  
  getCurrent(index?: number) {
    if(index == undefined) {
        for(var i = 0; i < this.numOfDices; i++) { 
            console.log(`${i + 1}. dice: ${this.dices[i]}`);
        }
    } else {
        console.log(`${index + 1}. dice: ${this.dices[index]}`);
    }        
  }
}
  
let diceSet = new DiceSet();
let j: number;

diceSet.roll();
console.log('1st roll ............')
diceSet.getCurrent();
console.log();

for (let i = 0; i < 6; i++) {
  j = 1;
  while (diceSet.dices[i] != 6) {
    console.log(`${j}. reroll at ${i + 1}. dice`);
    diceSet.reroll(i);
    diceSet.getCurrent(i);
    j += 1;
  }
  if ((diceSet.dices[i] == 6) && (j == 1)) {
    console.log(`${i + 1}. dice has already been 6`);
  }
  console.log();
}

console.log('final set:')
diceSet.getCurrent();
