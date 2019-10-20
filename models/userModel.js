var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	'email' : String,
	'password' : String,
	'current_hunts' : Array,
	'completed_hunts' : Array
});

module.exports = mongoose.model('user', userSchema);
