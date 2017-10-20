var express = require('express');
var app = express();

app.use(express.static('public'));
app.listen(9000);

/*
  For simplicity, index.html was placed in /public but it so can be placed
  in /src/view which is useful if you have multiple react apps that need to
  use seperate html files.

  Uncomment code below to allow express to send the file when the root path
  is accessed. Similar code would be written to send seperate html files.
*/

/*
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
*/
