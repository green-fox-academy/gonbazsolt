'use strict';

const app = require('./routes');
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Yey, I'm running on port ${PORT}`);
});
