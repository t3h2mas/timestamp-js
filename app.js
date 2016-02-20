var express = require('express');
var app = express();

app.use(express.static(__dirname + '/view'));

app.get('/:date', (req, res) => {
  if (req.params.date) {
    var resp = {unix: null, natural: null};
    res.json(resp);
    //res.json({"date": req.params.date});
  }
  else
    res.sendFile("index.html");
});

app.listen(1337, function () {
  console.log('Example app listening on port 1337!');
});
