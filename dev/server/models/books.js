var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	bookname: String,
	authorname: String, //hash created from password
    price: Number
})

mongoose.model('Book', userSchema);
