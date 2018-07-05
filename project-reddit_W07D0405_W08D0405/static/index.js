'use strict';

const btn = document.querySelector('button.login');
let username;

btn.addEventListener('click', () => {
  const input = document.querySelector('input.login');

  username = input.value;
  if (username !== '')  {
    const h4Login = document.querySelector('h4.login');

    h4Login.textContent = `${username} logged in`;
    input.value = '';
    input.focus();
  } else {
    alert('Please fill username input field before press the Login button !!!')
  }
});

// main function: show all posts

const http = new XMLHttpRequest();

http.open('GET', 'http://localhost:3000/posts', true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  const content = document.querySelector('div.content');

  console.log(response.posts);

  for (let i = 0; i < response.posts.length; i++) {
    let divPost = document.createElement('div');
    divPost.setAttribute('class','post');

    let divLeft = document.createElement('div');
    divLeft.setAttribute('class','post-left');

    let divCenter = document.createElement('div');
    divCenter.setAttribute('class','post-center');

    let divRight = document.createElement('div');
    divRight.setAttribute('class','post-right');

    let divId = document.createElement('div');
    divId.setAttribute('class','id');
    divId.textContent = `id #${response.posts[i].id}`;

    let divScoreVote = document.createElement('div');
    divScoreVote.setAttribute('class', 'score-vote');

    /*let divUpvote = document.createElement('div');
    divUpvote.setAttribute('class', 'upvote');

    let divDownvote = document.createElement('div');
    divDownvote.setAttribute('class', 'downvote');*/

    let divScore = document.createElement('div');
    divScore.setAttribute('class','score');
    divScore.textContent = response.posts[i].score;

    let divTitle = document.createElement('div');
    divTitle.setAttribute('class','title');
    divTitle.textContent = response.posts[i].title;

    let divUrl = document.createElement('div');
    divUrl.setAttribute('class','url');
    divUrl.textContent = response.posts[i].url;

    let divOwner = document.createElement('div');
    divOwner.setAttribute('class','owner');
    divOwner.textContent = `owner: ${response.posts[i].owner}`;

    let divLastMod = document.createElement('div');
    divLastMod.setAttribute('class','last-mod');
    divLastMod.textContent = response.posts[i].last_modified;

    let imgUpvote = document.createElement('img');
    imgUpvote.setAttribute('class', 'upvote');
    imgUpvote.setAttribute('src', '/views/upvote.png');

    let imgDownvote = document.createElement('img');
    imgDownvote.setAttribute('class', 'downvote');
    imgDownvote.setAttribute('src', '/views/downvote.png');

    divScoreVote.appendChild(imgUpvote);
    divScoreVote.appendChild(divScore);
    divScoreVote.appendChild(imgDownvote);

    divRight.appendChild(divOwner);
    divRight.appendChild(divLastMod);

    divCenter.appendChild(divTitle);
    divCenter.appendChild(divUrl);

    divLeft.appendChild(divId);
    divLeft.appendChild(divScoreVote);

    divPost.appendChild(divLeft);
    divPost.appendChild(divCenter);
    divPost.appendChild(divRight);
    
    content.appendChild(divPost);
  }
}
http.send();
