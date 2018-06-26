'use strict'

const xhr = new XMLHttpRequest();

xhr.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=Gw5ciHWnn5Yu8UX4u2AUMq2vZsJA5rdS&q=mushroom&limit=15`, true);
xhr.onload = () => {
  const response = JSON.parse(xhr.responseText);
  const container = document.querySelector('#pics');

  response.data.forEach((element) => {
    const image = document.createElement('img');

    image.src = element.images.fixed_height_still.url;
    image.addEventListener('click', () => {
      let attribute = image.getAttribute('src');
      if (attribute === element.images.fixed_height.url){
        image.setAttribute('src', element.images.fixed_height_still.url);
      } else {
        image.setAttribute('src', element.images.fixed_height.url);
      }
    });

    container.appendChild(image);
  });
}

const button = document.querySelector('#get-images');
button.addEventListener('click', () => {
  xhr.send();
})