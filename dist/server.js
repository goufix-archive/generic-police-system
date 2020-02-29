var express = require('express');
var app = express();
app.use(express.json());
app.get('/', function () {
    return { message: 'Hello world' };
});
app.listen(3333);
