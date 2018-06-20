let ul = document.querySelector('ul');
let newLi = document.createElement('li');

newLi.textContent = 'The Green Fox';
ul.appendChild(newLi);

newLi = document.createElement('li');
newLi.textContent = 'The Lamplighter';
ul.appendChild(newLi);

let divContainer = document.querySelector('div.container');
let newH2 = document.createElement('h2');
newH2.textContent = 'I can add elements to the DOM!';
divContainer.appendChild(newH2);

let newImg = document.createElement('img');
newImg.setAttribute('src', 'https://wallpaperbrowse.com/media/images/cool-pictures-24.jpg');
newImg.setAttribute('height', '200');
newImg.setAttribute('width', 'auto');
divContainer.appendChild(newImg);
