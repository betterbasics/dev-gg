var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	username: String,
	password: String, //hash created from password
	created_at: {type: Date, default: Date.now}
})

mongoose.model('User', userSchema);
