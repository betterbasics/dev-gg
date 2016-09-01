var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

//initialize mongoose schemas
require('./models/books');
require('./models/products');
var Book = mongoose.model('Book');
var Product = mongoose.model('Product');

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

var baseurl = '/dev';
app.get(baseurl+'/server',function(req,res){
	var data = {
		"Data":""
	};
	data["Data"] = "Welcome to Book Store DEMO using Mongodbsdsdsds...";
	res.json(data);
});

app.get(baseurl+'/server/api/book',function(req,res){
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

//products api
app.get(baseurl+'/server/api/products', function(req, res){
    Product.find(function(err, products){
        if(err){
            return res.send(500, err);
        }
        res.json(products);
    });
});

app.get(baseurl+'/server/api/products/:_id', function(req, res){
    Product.findById(req.params._id, function(err, product){
        if(err){
            return res.send(500, err);
        }
        res.json(product);
    });
});

app.post(baseurl+'/server/api/products', function(req, res){
    var product = req.body;
    Product.create(product, function(err, product){
        if(err){
            return res.send(500, err);
        }
        res.json(product);
    });
});

app.put(baseurl+'/server/api/products/:_id', function(req, res){
    var id = req.params._id;
    var query = { _id:  req.params._id };
    var product = req.body;
    Product.findOneAndUpdate(query, product, {}, function(err, product){
        if(err){
           res.send(500, err);
        }
        res.json(product);
    });
});

app.delete(baseurl+'/server/api/products/:_id', function(req, res){
    var id = req.params._id;
    var query = { _id: id };
    Product.remove(query, function(err, product){
        if(err){
           return res.send(500, err);
        }
        res.json(product);
    });
});

