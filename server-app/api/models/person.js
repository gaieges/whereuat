var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

PersonSchema = new Schema({
      user:     {type: String, trim: true},
      name:     {type: String, trim: true},
      loc: {
        lat: { type: Number },
        lon: { type: Number },
      }
  });

mongoose.model('Person', PersonSchema);
module.exports = mongoose;



// Some dummy test data
// var Person = mongoose.model( "Person" );
// for( var i=0; i<2000; i++) {
//   var people = new Person({
//     name:"test-name-"+i,
//     user:"usr-name-"+i,
//     loc:{
//       lat: (i*15.3)%50.3,
//       lon: (i*135.32)%50.6}
//     });
//   people.save();
// }
