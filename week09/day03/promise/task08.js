var attachTitle = (name) => {
  return `DR. ${name}`;
}

var resolvedPromise = Promise.resolve('MANHATTAN');

resolvedPromise.then(attachTitle).then(console.log);
