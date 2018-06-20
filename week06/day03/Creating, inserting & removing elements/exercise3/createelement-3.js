const kids = [
  {
    pet_name: 'Wattled crane',
    owner: 'Bryant'
  },
  { pet_name: 'Devil, tasmanian',
    owner: 'Alejandro'
  },
  { pet_name: 'Mynah, common',
    owner: 'Nelie'
  },
  { pet_name: 'Dolphin, common',
    owner: 'Mariele'
  },
  { pet_name: 'Gray duiker',
    owner: 'Maddalena'
  },
  { pet_name: 'Crab (unidentified)',
    owner: 'Lucine'
  },
  { pet_name: 'Ant (unidentified)',
    owner: 'Lorianna'
  },
  { pet_name: 'Bison, american',
    owner: 'Tommie'
  },
  { pet_name: 'Yellow mongoose',
    owner: 'Vivyan'
  },
  { pet_name: 'Carpet snake',
    owner: 'Veda'
  },
  { pet_name: 'Lesser mouse lemur',
    owner: 'Isidor'
  }];

let divPets = document.querySelector('div#pets');
let newArticle;
let newH3;
let newP;

for (let i = 0; i < kids.length; i++) {
  newArticle = document.createElement('article');
  newH3 = document.createElement('h3');
  newH3.textContent = kids[i].owner;
  newP = document.createElement('p');
  newP.textContent = kids[i].pet_name;
  newArticle.appendChild(newH3);
  newArticle.appendChild(newP);
  divPets.appendChild(newArticle);
}
