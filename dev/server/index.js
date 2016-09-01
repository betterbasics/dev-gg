var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

//initialize mongoose schemas
require('./models/books');
var Book = mongoose.model('Book');

// Create the application.
var app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Connect to MongoDB
//mongoose.connect('mongodb://localhost/devggapp');
mongoose.connect('mongodb://localhost/books');
mongoose.connection.once('open', function() {

  console.log('Listening on port 3000...');
  app.listen(process.env.PORT);
});

app.get('/bbdev/server/',function(req,res){
	var data = {
		"Data":""
	};
	data["Data"] = "Welcome to Book Store DEMO using Mongodbsdsdsds...";
	res.json(data);
});

app.get('/bbdev/server/api/book',function(req,res){
	var data = {
		"Data":""
	};
    Book.find(function(err, books) {
      if (err){
		data["Books"] = "Error fetching data";
		res.json(data);
      }
      else{
		if(!!books && books.length != 0){
			data["error"] = 0;
			data["Books"] = books;
			res.json(data);
		}else{
			data["error"] = 1;
			data["Books"] = 'No books Found..';
			res.json(data);
		}
      }
    });
});

