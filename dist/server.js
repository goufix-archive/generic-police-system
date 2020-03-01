const express = require('express');

const app = express();
app.use(express.json());
app.get('/', function() {
  return { message: 'Hello world' };
});
app.listen(3333);
