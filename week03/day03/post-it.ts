'use strict';

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;
}

let object1 = new PostIt();
object1.backgroundColor = 'orange';
object1.text = 'Idea 1';
object1.textColor = 'blue';

let object2 = new PostIt();
object2.backgroundColor = 'pink';
object2.text = 'Awesome';
object2.textColor = 'black';

let object3 = new PostIt();
object3.backgroundColor = 'yellow';
object3.text = 'Superb!';
object3.textColor = 'green';

console.log(object1);
console.log(object2);
console.log(object3);
