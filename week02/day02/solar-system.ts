
'use strict';

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];

function putSaturn(listOfPlanets: string[]) {
  return listOfPlanets.concat('Saturn');
}

console.log(putSaturn(planetList));

export = putSaturn;
