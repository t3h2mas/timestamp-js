var express = require('express');
var app = express();

var moment = require('moment');

app.use(express.static(__dirname + '/view'));

function parseDate(date) {
  var resp = {unix: null, natural: null};
  var date;

  if (isNaN(date)) {
    date = moment(date);
    console.log("Natural: " + date.format());
    resp.natural = date.format("MMMM D, YYYY");
    resp.unix = date.format("X");
    
    if (resp.natural === 'Invalid date')
      resp = {unix: null, natural: null};
  } else {
    // date should be unix
    // TODO: Error handling
    date = moment.unix(date);
    console.log("Unix: " + date.format());
    resp.unix = Number(date);
    resp.natural = date.format("MMMM D, YYYY");

    if (resp.natural === 'Invalid date')
      resp = {unix: null, natural: null};
  }
  return resp;
}

app.get('/:date', (req, res) => {
  if (req.params.date) {
    var resp = parseDate(req.params.date);
    res.json(resp);
    //res.json({"date": req.params.date});
  }
  else
    res.sendFile("index.html");
});

app.listen(1337, function () {
  console.log('Example app listening on port 1337!');
});
