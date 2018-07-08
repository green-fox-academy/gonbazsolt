'use strict';

function convertUnixTimestampToDateTime(unix_format) {
  let date = new Date(unix_format);
  let year = date.getFullYear();
  let month = '0' + (parseInt(date.getMonth()) + 1).toString();
  let day = '0' + date.getDate();
  let hours = '0' + date.getHours();
  let minutes = '0' + date.getMinutes();
  let seconds = '0' + date.getSeconds();

  return `${year}-${month.substr(-2)}-${day.substr(-2)} <${hours.substr(-2)}:${minutes.substr(-2)}:${seconds.substr(-2)}>`;
}

const btn = document.querySelector('button.login');
let username = '';

btn.addEventListener('click', () => {
  const input = document.querySelector('input.login');

  username = input.value;
  if (username !== '') {
    const h4Login = document.querySelector('h4.login');

    activeItemsByUser(username);
    activeCreatePostWindow(username);

    h4Login.textContent = `${username} logged in`;
    input.value = '';
  } else {
    alert('Please fill username input field before press the Login button !!!');
    input.focus();
  }
});

function createOnePost(httpResponse, divContent, index) {
  let divPost = document.createElement('div');
  divPost.setAttribute('class', `post idnr${httpResponse.posts[index].id}`);

  let divLeft = document.createElement('div');
  divLeft.setAttribute('class', 'post-left');

  let divCenter = document.createElement('div');
  divCenter.setAttribute('class', 'post-center');

  let divRight = document.createElement('div');
  divRight.setAttribute('class', 'post-right');

  let divId = document.createElement('div');
  divId.setAttribute('class', 'id');
  divId.textContent = `id #${httpResponse.posts[index].id}`;

  let divScoreVote = document.createElement('div');
  divScoreVote.setAttribute('class', 'score-vote');

  let divScore = document.createElement('div');
  divScore.setAttribute('class', 'score');
  divScore.textContent = httpResponse.posts[index].score;

  let divUsersVoted = document.createElement('div');
  divUsersVoted.setAttribute('class', 'voted-user');
  divUsersVoted.textContent = httpResponse.posts[index].vote_user;

  let divValuesVoted = document.createElement('div');
  divValuesVoted.setAttribute('class', 'voted-value');
  divValuesVoted.textContent = httpResponse.posts[index].vote_value;

  let divTitle = document.createElement('div');
  divTitle.setAttribute('class', 'title');
  divTitle.textContent = httpResponse.posts[index].title;

  let divUrl = document.createElement('div');
  divUrl.setAttribute('class', 'url');
  divUrl.textContent = httpResponse.posts[index].url;

  let divOwnModDel = document.createElement('div');
  divOwnModDel.setAttribute('class', 'ow-mo-de');

  let aModify = document.createElement('a');
  aModify.setAttribute('class', 'modify');
  aModify.setAttribute('rel', 'no-refresh');
  aModify.textContent = 'Modify';

  let aDelete = document.createElement('a');
  aDelete.setAttribute('class', 'delete');
  aDelete.setAttribute('rel', 'no-refresh');
  aDelete.textContent = 'Delete';

  let divOwner = document.createElement('div');
  divOwner.setAttribute('class', 'owner');
  divOwner.textContent = `owner: ${httpResponse.posts[index].owner}`;

  let divLastMod = document.createElement('div');
  divLastMod.setAttribute('class', 'last-mod');
  divLastMod.textContent = convertUnixTimestampToDateTime(httpResponse.posts[index].last_modified);

  let imgUpvote = document.createElement('img');
  imgUpvote.setAttribute('class', 'upvote');
  imgUpvote.setAttribute('src', '/views/upvote.png');

  imgUpvote.addEventListener('click', () => {
    upvoteByUser(httpResponse.posts[index].id, imgUpvote, imgDownvote, divScore);
  });

  let imgDownvote = document.createElement('img');
  imgDownvote.setAttribute('class', 'downvote');
  imgDownvote.setAttribute('src', '/views/downvote.png');

  imgDownvote.addEventListener('click', () => {
    downvoteByUser(httpResponse.posts[index].id, imgUpvote, imgDownvote, divScore);
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

  divContent.appendChild(divPost);

  if (!httpResponse.posts[index].display) {
    divContent.setAttribute('hidden', 'hidden');
  }
}

// main function: show all posts

const httpGetPosts = new XMLHttpRequest();

httpGetPosts.open('GET', 'http://localhost:3000/posts', true);
httpGetPosts.onload = () => {
  const response = JSON.parse(httpGetPosts.responseText);
  const content = document.querySelector('div.content_div');

  for (let i = 0; i < response.posts.length; i++) {
    if (response.posts[i].display) {
      createOnePost(response, content, i);
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
  const id = document.querySelectorAll('div.id');
  const titleToModify = document.querySelectorAll('div.title');
  const urlToModify = document.querySelectorAll('div.url');
  const lastModified = document.querySelectorAll('div.last-mod');

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
      modifyAnchors[i].setAttribute('href', '#modify');
      modifyAnchors[i].style.fontWeight = 700;

      modifyAnchors[i].addEventListener('click', () => {
        const inputModify = document.querySelectorAll('input.modify');
        const inputCreate = document.querySelectorAll('input.create');
        const btnModify = document.querySelector('button.modify');
        const form = document.querySelector('form.modify-form');
        const h2Modify = document.querySelector('h2.modify');
        const imgForm = document.querySelectorAll('img.form');

        inputModify[0].removeAttribute('disabled');
        inputModify[0].value = titleToModify[i].textContent;
        inputModify[0].focus();
        inputModify[1].removeAttribute('disabled');
        inputModify[1].value = urlToModify[i].textContent;
        btnModify.removeAttribute('disabled');
        h2Modify.textContent = `MODIFY POST ID#${id[i].textContent.replace(/[^0-9\.]+/g, '')}`;

        form.addEventListener('submit', (event) => {
          event.preventDefault();

          const httpPost = new XMLHttpRequest();

          httpPost.open('PUT', `http://localhost:3000/posts/${id[i].textContent.replace(/[^0-9\.]+/g, '')}`, true);

          httpPost.setRequestHeader('Content-Type', 'application/json');
          httpPost.setRequestHeader('username', `${user}`);
          httpPost.onload = () => {
            const response = JSON.parse(httpPost.responseText);

            titleToModify[i].textContent = response.modified[0].title;
            urlToModify[i].textContent = response.modified[0].url;
            lastModified[i].textContent = convertUnixTimestampToDateTime(response.modified[0].last_modified);

            inputModify[0].setAttribute('disabled', 'disabled');
            inputModify[0].value = '';
            inputModify[1].setAttribute('disabled', 'disabled');
            inputModify[1].value = '';
            btnModify.setAttribute('disabled', 'disabled');
            h2Modify.textContent = `MODIFY POST ID#`;

            inputCreate[0].focus();

            if (response.error) {
              imgForm[1].setAttribute('src', '/views/red-cross_transparent.png');
              setTimeout(() => { imgForm[1].setAttribute('src', '/views/empty_transparent.png'); }, 2000);
            } else {
              imgForm[0].setAttribute('src', '/views/tick_transparent.png');
              setTimeout(() => { imgForm[0].setAttribute('src', '/views/empty_transparent.png'); }, 2000);
            }

            let body = {
              "title": `${event.target[0].value}`,
              "url": `${event.target[1].value}`
            }
            httpPost.send(JSON.stringify(body));
          }
        });
      });

      deleteAnchors[i].setAttribute('href', '#delete');
      deleteAnchors[i].style.fontWeight = 700;

      deleteAnchors[i].addEventListener('click', () => {
        const inputCreate = document.querySelectorAll('input.create');
        const httpPost = new XMLHttpRequest();

        httpPost.open('DELETE', `http://localhost:3000/posts/${id[i].textContent.replace(/[^0-9\.]+/g, '')}`, true);

        httpPost.setRequestHeader('username', `${user}`);
        httpPost.onload = () => {
          const response = JSON.parse(httpPost.responseText);

          let divPost = document.querySelector(`div.idnr${id[i].textContent.replace(/[^0-9\.]+/g, '')}`);
          console.log(divPost);

          if (response.error) {
            alert(response.error);
          } else {
            divPost.style.display = 'none';
            alert(`The post with id#${response.deleted[0].id} was deleted by ${user}!`);
          }

          inputCreate[0].focus();
        }

        httpPost.send();
      });
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

function activeCreatePostWindow(user) {
  const inputCreate = document.querySelectorAll('input.create');
  const btnCreate = document.querySelector('button.create');
  const form = document.querySelector('form.create-form');
  const imgForm = document.querySelectorAll('img.form');

  inputCreate[0].removeAttribute('disabled');
  inputCreate[0].focus();
  inputCreate[1].removeAttribute('disabled');
  btnCreate.removeAttribute('disabled');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const httpPost = new XMLHttpRequest();

    httpPost.open('POST', `http://localhost:3000/posts`, true);

    httpPost.setRequestHeader('Content-Type', 'application/json');
    httpPost.setRequestHeader('username', `${user}`);
    httpPost.onload = () => {
      const response = JSON.parse(httpPost.responseText);

      if (response.error) {
        imgForm[1].setAttribute('src', '/views/red-cross_transparent.png');
        setTimeout(() => { imgForm[1].setAttribute('src', '/views/empty_transparent.png'); }, 2000);
      } else {
        const content = document.querySelector('div.content_div');

        createOnePost(response, content, 0);

        imgForm[0].setAttribute('src', '/views/tick_transparent.png');
        setTimeout(() => { imgForm[0].setAttribute('src', '/views/empty_transparent.png'); }, 2000);

        inputCreate[0].value = '';
        inputCreate[1].value = '';
        inputCreate[0].focus();
      }
    }

    let body = {
      "title": `${event.target[0].value}`,
      "url": `${event.target[1].value}`
    }
    httpPost.send(JSON.stringify(body));
  });
}