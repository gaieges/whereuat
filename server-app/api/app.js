
require('./models/person.js');

var port = process.env.SVCPORT || 8000;

var bodyParser = require('body-parser');
var express    = require('express');
var mongoose   = require('mongoose');

// Make a new Express app
var app = express();

// Connect to mongodb
console.log( 'connecting to mongodb..' );
var connect = function() {
  mongoose.connect("mongodb://172.17.0.1/whereuat");
//  mongoose.connect("mongodb://127.0.0.1/whereuat");
};
connect();
mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

var Person = mongoose.model( "Person" );

app.get('/people', function (req, res){
  return Person.find({}, function (err, people) {
    if (err) return console.error(err);
    return res.json( people );
  });
});

// start it up now
console.log("Starting up web server on port " + port + " ..");
app.listen( port );

module.exports = app;
