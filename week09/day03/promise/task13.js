var HTTP = require("q-io/http");

HTTP
  .read("http://localhost:7000/")
  .then((id) => {
    return HTTP.read(`http://localhost:7001/${id}`)
  })
  .then(JSON.parse)
  .then(console.log);
