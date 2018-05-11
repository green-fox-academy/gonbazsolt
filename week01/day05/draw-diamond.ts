export{};
'use strict';

let lineCount: number = 7;
let lineString: string;
let lineIndexSum: number;
let lineIndexDiff: number;
let howManyLinesToMiddle: number;

//ez a valtozo segit meghatarozni a kesobbi vizsgalatnal a megfelelo intervallum szamitasat, meghatarozasat
//az erteke azt mutatja meg, hogy a kozepso 1 vagy 2 darab vegig csillagos sorig mennyi sor van
howManyLinesToMiddle = Math.round(lineCount / 2) - 1;

for (let iter: number = 1; iter < (lineCount + 1); iter++) {
  lineString = "";
  for (let iter2: number = 1; iter2 < (lineCount + 1); iter2++) {
    //a matrixban jelenleg mennyi a sor es oszlop indexek osszege
    lineIndexSum = iter + iter2;
    //a matrixban jelenleg mennyi a sor es oszlop indexek abszolut erteku kulonbsege
    lineIndexDiff = Math.abs(iter - iter2);
    //meg elegansabb lenne ha a feltetel azt vizsgalna - marmint egyszerubb szintaktikaval, mert igy is ezt teszi -
    //hogy a kulonbseg es az osszeg benne van-e adott intervallomban
    //olyasmire gondolok hogy if sum in range() and diff in range()
    //rovidebb es atlathatobb is lenne a kod
    if ( ( ( lineIndexSum >= 2 + howManyLinesToMiddle) && ( lineIndexSum <= (lineCount *2 - howManyLinesToMiddle)) ) && ( (lineIndexDiff >= 0) && ( lineIndexDiff <= (lineCount - 1 -howManyLinesToMiddle)) ) ) {
      lineString += '*';
    } else {
      lineString += ' ';
    }
  }
  console.log(lineString);
}
