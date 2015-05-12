var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

PersonSchema = new Schema({
      username: {type: String, trim: true},
      name:     {type: String, trim: true},
      loc: {
        lat: { type: Number },
        lon: { type: Number },
      }
  });

mongoose.model('Person', PersonSchema);
