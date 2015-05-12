
require('./models/person.js');

var port = process.env.SVCPORT || 8000;

var bodyParser = require('body-parser');
var express    = require('express');
var mongoose   = require('mongoose');

// Make a new Express app
var app = express();

app.use(bodyParser);

// Connect to mongodb
console.log( 'connecting to mongodb..' );
mongoose.set('debug', true );
var connect = function() {
  mongoose.connect("mongodb://localhost/whereuat");
};
connect();
mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

var PeopleModel = mongoose.model( "Person", PersonSchema );

// for( var i = 1; i < 50; i++ ) {
//   var newperson = PeopleModel({
//     name:"fullname "+i,
//     username:"user"+i,
//     loc: {lat: i*5%50, lon: (i/2*10%50)}
//   });
//   newperson.save( );
// }

app.get('/people', function (req, res){
  return PeopleModel.find(function (err, people) {
    if (!err) {
      return res.json(people);
    } else {
      return console.log(err);
    }
  });
});

// start it up now
console.log("Starting up web server on port " + port + " ..");
app.listen( port );

module.exports = app;
