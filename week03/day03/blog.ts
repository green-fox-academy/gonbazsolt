import { BlogPost } from "./blog-post";

'use strict';

class Blog {
  listOfBlogPosts: BlogPost[] = [];

  add(aBlogPost) {
    this.listOfBlogPosts.push(aBlogPost);
  }

  delete(index) {
    this.listOfBlogPosts.splice(index, 1);
  }

  update(index, aBlogPost) {
    this.listOfBlogPosts.splice(index, 0, aBlogPost);
  }
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

let blog = new Blog();

blog.add(object1);
blog.add(object2);
blog.add(object3);

console.log('\r\nList of blog posts:\r\n');
blog.listOfBlogPosts.forEach((index, value) => {
  console.log(index, value);
});

blog.delete(0);

console.log('\r\nfirst blog post was deleted:\r\n');
blog.listOfBlogPosts.forEach((index, value) => {
  console.log(index, value);
});

blog.update(1, object1);

console.log('\r\nthe deleted blog post was placed back into second index\r\n');
blog.listOfBlogPosts.forEach((index, value) => {
  console.log(index, value);
});
