var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var clueSchema = new Schema({
	'sequence_number' : Number,
	'question' : String,
	'answer' : String,
	'possible_answers' : Array,
	'latitude' : Number,
	'longitude' : Number,
	'geo_range' : Number,
	'clue_text' : String,
  'completion_message' : String,
  'hunt_id' : {
       type: Schema.Types.ObjectId,
       ref: 'hunt'
   }
});

module.exports = mongoose.model('clue', clueSchema);
