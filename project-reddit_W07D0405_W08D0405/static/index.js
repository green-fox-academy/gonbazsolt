'use strict';

const btn = document.querySelector('button.login');
let username = '';

btn.addEventListener('click', () => {
  const input = document.querySelector('input.login');

  username = input.value;
  if (username !== '') {
    const h4Login = document.querySelector('h4.login');

    activeItemsByUser(username);

    h4Login.textContent = `${username} logged in`;
    input.value = '';
    input.focus();
  } else {
    alert('Please fill username input field before press the Login button !!!')
  }
});

// main function: show all posts

const httpGetPosts = new XMLHttpRequest();

httpGetPosts.open('GET', 'http://localhost:3000/posts', true);
httpGetPosts.onload = () => {
  const response = JSON.parse(httpGetPosts.responseText);
  const content = document.querySelector('div.content_div');

  for (let i = 0; i < response.posts.length; i++) {
    if (response.posts[i].display) {
      let divPost = document.createElement('div');
      divPost.setAttribute('class', `post idnr${response.posts[i].id}`);

      let divLeft = document.createElement('div');
      divLeft.setAttribute('class', 'post-left');

      let divCenter = document.createElement('div');
      divCenter.setAttribute('class', 'post-center');

      let divRight = document.createElement('div');
      divRight.setAttribute('class', 'post-right');

      let divId = document.createElement('div');
      divId.setAttribute('class', 'id');
      divId.textContent = `id #${response.posts[i].id}`;

      let divScoreVote = document.createElement('div');
      divScoreVote.setAttribute('class', 'score-vote');

      let divScore = document.createElement('div');
      divScore.setAttribute('class', 'score');
      divScore.textContent = response.posts[i].score;

      let divUsersVoted = document.createElement('div');
      divUsersVoted.setAttribute('class', 'voted-user');
      divUsersVoted.textContent = response.posts[i].vote_user;

      let divValuesVoted = document.createElement('div');
      divValuesVoted.setAttribute('class', 'voted-value');
      divValuesVoted.textContent = response.posts[i].vote_value;

      let divTitle = document.createElement('div');
      divTitle.setAttribute('class', 'title');
      divTitle.textContent = response.posts[i].title;

      let divUrl = document.createElement('div');
      divUrl.setAttribute('class', 'url');
      divUrl.textContent = response.posts[i].url;

      let divOwnModDel = document.createElement('div');
      divOwnModDel.setAttribute('class', 'ow-mo-de');

      let aModify = document.createElement('a');
      aModify.setAttribute('class', 'modify');
      aModify.textContent = 'Modify';

      let aDelete = document.createElement('a');
      aDelete.setAttribute('class', 'delete');
      aDelete.textContent = 'Delete';

      let divOwner = document.createElement('div');
      divOwner.setAttribute('class', 'owner');
      divOwner.textContent = `owner: ${response.posts[i].owner}`;

      let divLastMod = document.createElement('div');
      divLastMod.setAttribute('class', 'last-mod');
      divLastMod.textContent = `${response.posts[i].last_modified.substring(0, 10)} <${response.posts[i].last_modified.substring(11, 19)}>`;

      let imgUpvote = document.createElement('img');
      imgUpvote.setAttribute('class', 'upvote');
      imgUpvote.setAttribute('src', '/views/upvote.png');

      imgUpvote.addEventListener('click', () => {
        upvoteByUser(response.posts[i].id, imgUpvote, imgDownvote, divScore);
      });

      let imgDownvote = document.createElement('img');
      imgDownvote.setAttribute('class', 'downvote');
      imgDownvote.setAttribute('src', '/views/downvote.png');

      imgDownvote.addEventListener('click', () => {
        downvoteByUser(response.posts[i].id, imgUpvote, imgDownvote, divScore);
      });

      divScore.appendChild(divUsersVoted);
      divScore.appendChild(divValuesVoted);

      divScoreVote.appendChild(imgUpvote);
      divScoreVote.appendChild(divScore);
      divScoreVote.appendChild(imgDownvote);

      divOwnModDel.appendChild(divOwner);
      divOwnModDel.appendChild(aModify);
      divOwnModDel.appendChild(aDelete);

      divRight.appendChild(divOwnModDel);
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
}
httpGetPosts.send();

// up and down vote images change by username
function activeItemsByUser(user) {
  const upVoteImgs = document.querySelectorAll('img.upvote');
  const downVoteImgs = document.querySelectorAll('img.downvote');
  const votedUsers = document.querySelectorAll('div.voted-user');
  const votedValues = document.querySelectorAll('div.voted-value');
  const modifyAnchors = document.querySelectorAll('a.modify');
  const deleteAnchors = document.querySelectorAll('a.delete');
  const owners = document.querySelectorAll('div.owner');

  for (let i = 0; i < votedUsers.length; i++) {
    upVoteImgs[i].src = '/views/upvote.png';
    downVoteImgs[i].src = '/views/downvote.png';
    modifyAnchors[i].removeAttribute('href');
    deleteAnchors[i].removeAttribute('href');
    modifyAnchors[i].style.fontWeight = 400;
    deleteAnchors[i].style.fontWeight = 400;

    if (votedUsers[i].textContent.indexOf(user) !== -1) {
      let voteUsers = votedUsers[i].textContent.split('|');
      let voteValues = votedValues[i].textContent.split('|');
      let userVoteIndex = voteUsers.indexOf(user);

      if (voteValues[userVoteIndex] === '1') {
        upVoteImgs[i].src = '/views/upvoted.png';
      } else {
        downVoteImgs[i].src = '/views/downvoted.png';
      }
    }

    if (owners[i].textContent.indexOf(user) !== -1) {
      modifyAnchors[i].setAttribute('href', '');
      modifyAnchors[i].style.fontWeight = 700;
      deleteAnchors[i].setAttribute('href', '');
      deleteAnchors[i].style.fontWeight = 700;
    }
  }
}

function upvoteByUser(id, upImg, downImg, sc) {

  if (username !== '') {
    const httpPutUpvote = new XMLHttpRequest();

    httpPutUpvote.open('PUT', `http://localhost:3000/posts/${id}/upvote`, true);
    httpPutUpvote.setRequestHeader('username', username);
    httpPutUpvote.onload = () => {
      const response = JSON.parse(httpPutUpvote.responseText);

      //ki kell javitani, a score szamitasanal a belso tartalom eltunik, szoval azt vissza kell csinalni
      //DOWNVOTE-nal is!!!!

      if (response.error) {
        alert(response.error);
      } else {
      
        let divUsersVoted = document.createElement('div');
        divUsersVoted.setAttribute('class', 'voted-user');
        divUsersVoted.textContent = response.up_voted[0].vote_user;

        let divValuesVoted = document.createElement('div');
        divValuesVoted.setAttribute('class', 'voted-value');
        divValuesVoted.textContent = response.up_voted[0].vote_value;

        let score = parseInt(sc.innerText);
        score += 1;
        sc.innerText = score.toString();

        sc.appendChild(divUsersVoted);
        sc.appendChild(divValuesVoted);

        if (downImg.getAttribute('src') === '/views/downvoted.png') {
          downImg.setAttribute('src', '/views/downvote.png');
        } else {
          upImg.setAttribute('src', '/views/upvoted.png');
        }
      }
    }
    httpPutUpvote.send();
    
  } else {
    alert('Nobody has logged in. Upvote is not possible !!!');
  }
}

function downvoteByUser(id, upImg, downImg, sc) {

  if (username !== '') {
    const httpPutDownvote = new XMLHttpRequest();

    httpPutDownvote.open('PUT', `http://localhost:3000/posts/${id}/downvote`, true);
    httpPutDownvote.setRequestHeader('username', username);
    httpPutDownvote.onload = () => {
      const response = JSON.parse(httpPutDownvote.responseText);

      if (response.error) {
        alert(response.error);
      } else {

        let divUsersVoted = document.createElement('div');
        divUsersVoted.setAttribute('class', 'voted-user');
        divUsersVoted.textContent = response.down_voted[0].vote_user;

        let divValuesVoted = document.createElement('div');
        divValuesVoted.setAttribute('class', 'voted-value');
        divValuesVoted.textContent = response.down_voted[0].vote_value;

        let score = parseInt(sc.innerText);
        score -= 1;
        sc.innerText = score.toString();

        sc.appendChild(divUsersVoted);
        sc.appendChild(divValuesVoted);

        if (upImg.getAttribute('src') === '/views/upvoted.png') {
          upImg.setAttribute('src', '/views/upvote.png');
        } else {
          downImg.setAttribute('src', '/views/downvoted.png');
        }
      }
    }
    httpPutDownvote.send();
    
  } else {
    alert('Nobody has logged in. Upvote is not possible !!!');
  }
}
