'use strict';

const app = require('./routes');
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Yey, I'm running on port ${PORT}`);
});
