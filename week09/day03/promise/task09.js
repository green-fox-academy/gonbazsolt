var parsePromised = () => {
  try {
    return Promise.resolve(JSON.parse(process.argv[2]));
  }

  catch (err) {
    return Promise.reject(err.message);
  }
}

parsePromised().then(null, console.log);
