var alwaysThrows = () => {
  throw 'OH NOES';
}

/* NICER SOLUTION

var alwaysThrows = () => {
  throw new Error('OH NOES');
}

var onReject = (error) => {
  console.log(error.message);
}

and to the bottom of the promise-chain:
.catch(onReject);

*/

var iterate = (integer) => {
  console.log(integer);
  return integer + 1;
}

var resolvedPromise = Promise.resolve(iterate(1));

resolvedPromise
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(null, console.log);
