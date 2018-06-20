let li = document.querySelectorAll('li');
let newContents = ['apple', 'banana', 'cat', 'dog'];

for (let i = 0; i < li.length; i++) {
  li[i].textContent = newContents[i];
}
