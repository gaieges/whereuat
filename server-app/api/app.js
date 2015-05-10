//starting this file
var port = process.env.SVCPORT || 8000;


var express = require('express');
var app     = express();

console.log("Starting up web server on port " + port + " ..");


app.get('/', function(req, res) {
  res.type('text/plain');
  var output = 'endpoints: \n /friends - gets all friends\n';
  res.send( output );
})

app.get('/friends', function(req, res) {
  res.type('text/json');                  // set content-type
  res.send('friends show up here w/ location\n'); // send text response
});

app.get('/friends/:id', function(req, res) {
  res.type('text/json');                  // set content-type
  res.send("you sent " + req.params.id + "\n"); // send text response
});


app.listen( port );
