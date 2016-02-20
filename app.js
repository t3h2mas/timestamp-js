var express = require('express');
var app = express();

app.get('/', (req, res) => res.end("Hello World!") );

app.listen(1337, function () {
  console.log('Example app listening on port 1337!');
});
