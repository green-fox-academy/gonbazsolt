const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }];

let ul = document.querySelector('ul');
let remLi = document.querySelector('li');
ul.removeChild(remLi);

let newLi;

for (let i = 0; i < planetData.length; i++) {
  if (planetData[i].asteroid) {
    newLi = document.createElement('li');
    newLi.setAttribute('class', planetData[i].category);
    newLi.textContent = planetData[i].content;
    ul.appendChild(newLi);
  }
}
