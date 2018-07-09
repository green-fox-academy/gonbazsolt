const Sharpie = (col, wid) => {
  let color = col;
  let width = wid;
  let inkAmount = 100;

  const use = () => {
    inkAmount -= width;
  }

  const getInk = () => {
    return inkAmount;
  }

  return {color, width, inkAmount, use, getInk};
}

let sharpie = Sharpie('black', 3);

console.log(sharpie);

for (let i = 0; i < Math.ceil(sharpie.inkAmount / sharpie.width); i++) {
  sharpie.use()
}

console.log('current ink amount: ', sharpie.getInk());

//---------------------------------------------------------------------------------

function Sharpie2(col, wid) {
  this.color = col;
  this.width = wid;
  this.inkAmount = 100;

  this.use = () => {
    this.inkAmount -= this.width;
  }
}

let sharpie2 = new Sharpie2('red', 4);
let iterationLimit = Math.ceil(sharpie2.inkAmount / sharpie2.width)

console.log(sharpie2);

for (let i = 0; i < iterationLimit; i++) {
  sharpie2.use()
}

console.log('current ink amount: ', sharpie2.inkAmount);
