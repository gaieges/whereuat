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
