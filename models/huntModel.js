var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var huntSchema = new Schema({
	'title' : String,
	'displayable_name' : String,
	'description' : String,
	'publication_date' : Date,
	'num_of_completions' : Number,
  'num_of_downloads' : Number,
  'user_id' : {
       type: Schema.Types.ObjectId,
       ref: 'user'
   }

});

module.exports = mongoose.model('hunt', huntSchema);
