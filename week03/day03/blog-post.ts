'use strict';

export class BlogPost {
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;
}

let object1 = new BlogPost();
object1.authorName = 'John Doe';
object1.title = 'Lorem Ipsum';
object1.text = 'Lorem ipsum dolor sit amet.';
object1.publicationDate = '2000.05.04.';

let object2 = new BlogPost();
object2.authorName = 'Tim Urban';
object2.title = 'Wait but why';
object2.text = 'A popular long-form, stick-figure-illustrated blog about almost everything.';
object2.publicationDate = '2010.10.10.';

let object3 = new BlogPost();
object3.authorName = 'William Turton';
object3.title = 'One Engineer Is Trying to Get IBM to Reckon With Trump';
object3.text = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.';
object3.publicationDate = '2017.03.28.';

console.log(object1);
console.log(object2);
console.log(object3);
