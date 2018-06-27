'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('./routes.js');

test('/doubling/ endpoint (with correct input)', (t) => {
  request(app)
    .get('/doubling/?input=5')
    .expect('Content-Type', /json/)
    .expect(200, { "received": 5, "result": 10 })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/doubling/ endpoint (without correct input)', (t) => {
  request(app)
    .get('/doubling/?inp=5')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide an input!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/greeter/ endpoint (with correct inputs)', (t) => {
  request(app)
    .get('/greeter/?title=student&name=gonba')
    .expect('Content-Type', /json/)
    .expect(200, { "welcome_message": "Oh, hi there gonba, my dear student!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/greeter/ endpoint (without name)', (t) => {
  request(app)
    .get('/greeter/?title=student')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide a name!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/greeter/ endpoint (without title)', (t) => {
  request(app)
    .get('/greeter/?name=gonba')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide a title!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/greeter/ endpoint (neither name nor title)', (t) => {
  request(app)
    .get('/greeter/')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide both a name and a title!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/appenda/ endpoint (appendable provided)', (t) => {
  request(app)
    .get('/appenda/bazook')
    .expect('Content-Type', /json/)
    .expect(200, { "appended": "bazooka" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/appenda/ endpoint (no appendable provided)', (t) => {
  request(app)
    .get('/appenda/')
    .expect(404)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/dountil/sum endpoint (number provided)', (t) => {
  request(app)
    .post('/dountil/sum')
    .send({ until: 5 })
    .expect('Content-Type', /json/)
    .expect(200, { 'result': 15 })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/dountil/sum endpoint (no number provided)', (t) => {
  request(app)
    .post('/dountil/sum')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide a number!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/dountil/factor endpoint (number provided)', (t) => {
  request(app)
    .post('/dountil/factor')
    .send({ until: 5 })
    .expect('Content-Type', /json/)
    .expect(200, { 'result': 120 })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/dountil/factor endpoint (no number provided)', (t) => {
  request(app)
    .post('/dountil/factor')
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide a number!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/dountil/ endpoint (neither sum nor factor)', (t) => {
  request(app)
    .post('/dountil/')
    .expect(404)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/arrays/ endpoint (an empty object provided)', (t) => {
  request(app)
    .post('/arrays/')
    .send({ })
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide numbers to could do anything with them!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/arrays/ endpoint (array of numbers provided but no what-to-do)', (t) => {
  request(app)
    .post('/arrays/')
    .send({ "numbers": [1, 2, 5, 10] })
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide what to do with the numbers!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/arrays/ endpoint (what:"sum" and array of numbers provided)', (t) => {
  request(app)
    .post('/arrays/')
    .send({ "what": "sum", "numbers": [1, 2, 5, 10] })
    .expect('Content-Type', /json/)
    .expect(200, { "result": 18 })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/arrays/ endpoint (what:"sum" provided but no number property)', (t) => {
  request(app)
    .post('/arrays/')
    .send({ "what": "sum" })
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide numbers to could do anything with them!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/arrays/ endpoint (what:"sum" an empty number array provided)', (t) => {
  request(app)
    .post('/arrays/')
    .send({ "what": "sum", "numbers": [] })
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide the numbers to could summarize them!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/arrays/ endpoint (what:"multiply" and array of numbers provided)', (t) => {
  request(app)
    .post('/arrays/')
    .send({ "what": "multiply", "numbers": [1, 2, 5, 10] })
    .expect('Content-Type', /json/)
    .expect(200, { "result": 100 })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/arrays/ endpoint (what:"multiply" provided but no number property)', (t) => {
  request(app)
    .post('/arrays/')
    .send({ "what": "multiply" })
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide numbers to could do anything with them!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/arrays/ endpoint (what:"multiply" an empty number array provided)', (t) => {
  request(app)
    .post('/arrays/')
    .send({ "what": "multiply", "numbers": [] })
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide the numbers to could multiply them!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/arrays/ endpoint (what:"double" and array of numbers provided)', (t) => {
  request(app)
    .post('/arrays/')
    .send({ "what": "double", "numbers": [1, 2, 5, 10] })
    .expect('Content-Type', /json/)
    .expect(200, { "result": [2, 4, 10, 20] })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/arrays/ endpoint (what:"double" provided but no number property)', (t) => {
  request(app)
    .post('/arrays/')
    .send({ "what": "double" })
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide numbers to could do anything with them!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/arrays/ endpoint (what:"double" an empty number array provided)', (t) => {
  request(app)
    .post('/arrays/')
    .send({ "what": "double", "numbers": [] })
    .expect('Content-Type', /json/)
    .expect(200, { "error": "Please provide the numbers to could double each of the elements!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/sith/ endpoint (not a string provided)', (t) => {
  request(app)
    .post('/sith/')
    .send({ "text": 178 })
    .expect('Content-Type', /json/)
    .expect(200, { 'error': 'Feed me some text you have to, padawan young you are. Hmmm.' })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/sith/ endpoint (an empty string provided)', (t) => {
  request(app)
    .post('/sith/')
    .send({ "text": "" })
    .expect('Content-Type', /json/)
    .expect(200, { 'error': 'Feed me some text you have to, padawan young you are. Hmmm.' })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/sith/ endpoint (an empty JSON provided)', (t) => {
  request(app)
    .post('/sith/')
    .send({ })
    .expect('Content-Type', /json/)
    .expect(200, { 'error': 'Feed me some text you have to, padawan young you are. Hmmm.' })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/sith/ endpoint (an empty string provided)', (t) => {
  request(app)
    .post('/sith/')
    .send({ })
    .expect('Content-Type', /json/)
    .expect(200, { 'error': 'Feed me some text you have to, padawan young you are. Hmmm.' })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/sith/ endpoint (string provided)', (t) => {

  request(app)
    .post('/sith/?case=test')
    .send({ "text": "This is my cool example sentence. Just for fun." })
    .expect('Content-Type', /json/)
    .expect(200, { "sith_text": 'Is this cool my sentence example. For just fun.' })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/translate/ endpoint (empty object provided)', (t) => {

  request(app)
    .post('/translate/')
    .send({ })
    .expect('Content-Type', /json/)
    .expect(200, { "error": "I can't translate that!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/translate/ endpoint (empty string provided)', (t) => {

  request(app)
    .post('/translate/')
    .send({ "text": "" })
    .expect('Content-Type', /json/)
    .expect(200, { "error": "I can't translate that!" })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/translate/ endpoint (string provided; lang: hu; no consecutive double vowel)', (t) => {

  request(app)
    .post('/translate/')
    .send({
      "text": "Ez egy peldamondat. Remelem celbatalal.",
      "lang": "hu"
    })
    .expect('Content-Type', /json/)
    .expect(200, {
      "translated": "Evez evegy peveldavamovondavat. Revemevelevem cevelbavatavalaval.",
      "lang": "teve"
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/translate/ endpoint (string provided; lang: hu; consecutive vowels)', (t) => {

  request(app)
    .post('/translate/')
    .send({
      "text": "Ez egy peldamondat. Koreaiak fiai.",
      "lang": "hu"
    })
    .expect('Content-Type', /json/)
    .expect(200, {
      "translated": "Evez evegy peveldavamovondavat. Kovoreveavaiviavak fiviavaivi.",
      "lang": "teve"
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/translate/ endpoint (string provided; lang: en; no consecutive double vowel; no vowel at any word first position)', (t) => {

  request(app)
    .post('/translate/')
    .send({
      "text": "Responds with the translated text.",
      "lang": "en"
    })
    .expect('Content-Type', /json/)
    .expect(200, {
      "translated": "Ridigespidigonds widigith thidige tridiganslidigatidiged tidigext.",
      "lang": "gibberish"
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/translate/ endpoint (string provided; lang: en; consecutive vowels; vowel at any word first position)', (t) => {

  request(app)
    .post('/translate/')
    .send({
      "text": "Creek. Example repeat the rules for each.",
      "lang": "en"
    })
    .expect('Content-Type', /json/)
    .expect(200, {
      "translated": "Cridigeek. Idigexidigamplidige ridigepidigeat thidige ridigulidiges fidigor idigeach.",
      "lang": "gibberish"
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
