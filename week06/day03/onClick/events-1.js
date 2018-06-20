let button = document.querySelector('button');
let div = document.querySelector('div');

console.log(div);

button.onclick = () => {
	if (div.classList.contains('party')) {
		div.removeAttribute('class');
	} else {
		div.setAttribute('class', 'party');
	}
};
