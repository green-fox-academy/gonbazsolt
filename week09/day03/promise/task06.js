var resolvedPromise = Promise.resolve('SECRET VALUE');

function printOutErrorMessage(content) {
  console.log(content.message);
}

resolvedPromise.then(console.log);

var rejectedPromise = Promise.reject(new Error('REJECTED!'));

rejectedPromise.catch(printOutErrorMessage);
