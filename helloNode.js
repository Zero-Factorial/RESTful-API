var express = require('express');
var helloNode = express();
app.get('/', function (req, res) {
  res.send('Hello Node!');
});
app.listen(2000, function () {
  console.log('Example app listening on port 2000!');
});