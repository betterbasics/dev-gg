var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

//initialize mongoose schemas
require('./models/books');
require('./models/products');
require('./models/brands');
var Book = mongoose.model('Book');
var Product = mongoose.model('Product');
var Brand = mongoose.model('Brand');

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
app.get(baseurl+'/server/api/product', function(req, res){
    Product.find(function(err, products){
        if(err){
            return res.send(500, err);
        }
        res.json(products);
    });
});

app.get(baseurl+'/server/api/product/:_id', function(req, res){
    Product.findById(req.params._id, function(err, product){
        if(err){
            return res.send(500, err);
        }
        res.json(product);
    });
});

app.post(baseurl+'/server/api/product', function(req, res){
    var product = req.body;
    Product.create(product, function(err, product){
        if(err){
            return res.send(500, err);
        }
        res.json(product);
    });
});

app.put(baseurl+'/server/api/product/:_id', function(req, res){
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

app.delete(baseurl+'/server/api/product/:_id', function(req, res){
    var id = req.params._id;
    var query = { _id: id };
    Product.remove(query, function(err, product){
        if(err){
           return res.send(500, err);
        }
        res.json(product);
    });
});

/*brands api*/
var fs = require("fs");
var path = require("path");
var parseJSON = function (text){
    try{
        return JSON.parse(text);
    }
    catch (error){
        return text;
    }
};

app.get(baseurl+'/server/api/products', function(req, res, $http){
    var params = parseJSON(req.query);

    /**
    Product.find(function(err, products){
        if(err){
            return res.send(500, err);
        }
        res.json(products);
    }).sort({'_id': 1});
    /**/

    /**
    var brands;
    fs.readFile(path.join(__dirname, '..', 'client/json/brands.json'), 'utf8', function (err, data) {
        brands = parseJSON(data);
    });
    /**/

    /*using json file*/
    var products;
    fs.readFile(path.join(__dirname, '..', 'client/json/products.json'), 'utf8', function (err, data) {
        //res.json(variations);
        products = parseJSON(data);

        if(_.has(params, 'query')){
            var query = parseJSON(params.query);
            if(_.has(query, 'brand'))
                products = _.filter(products, {'brand': query.brand});
        }

        if(_.has(params, 'select')){
            var select = params.select.split(" ");
            products = _.map(products, item => _.pick(item, select));
        }

        if(_.has(params, 'populate')){
            var brands = parseJSON(fs.readFileSync('../client/json/brands.json', 'utf8'));
            var variations = parseJSON(fs.readFileSync('../client/json/variations.json', 'utf8'));
            //var populate = params.populate.split(" ");
            _.forEach(products, function(value, key) {
                //if(populate.indexOf('brand') > -1)
                    products[key].brand = _.find(brands, {_id:value.brand});
                    products[key].frontman = _.find(variations, {_id:value.frontman});
            });
        }

        res.json(products);
    });
    /**/
});

app.get(baseurl+'/server/api/products/:_id', function(req, res){
    /**
    Product.findById(req.params._id, function(err, product){
        if(err){
            return res.send(500, err);
        }
        res.json(product);
    });
    /**/

    /*using json file*/
    fs.readFile(path.join(__dirname, '..', 'client/json/products.json'), 'utf8', function (err, data) {
        var products;
        products = JSON.parse(data);
        var product = _.find(products, {_id:req.params._id});
        res.json(product);
    });
    /**/
});

app.get(baseurl+'/server/api/brands', function(req, res){
    Brand.find(function(err, brands){
        if(err){
            return res.send(500, err);
        }
        res.json(brands);
    }).sort({'_id': 1});

    /*using json file*
    fs.readFile(path.join(__dirname, '..', 'client/json/brands.json'), 'utf8', function (err, data) {
        var brands;
        brands = JSON.parse(data);
        res.json(brands);
    });
    /**/
});

app.get(baseurl+'/server/api/brands/:_id', function(req, res){
    Brand.findById(req.params._id, function(err, brand){
        if(err){
            return res.send(500, err);
        }
        res.json(brand);
    });

    /*using json file*
    fs.readFile(path.join(__dirname, '..', 'client/json/brands.json'), 'utf8', function (err, data) {
        var brands;
        brands = JSON.parse(data);
        var brand = _.find(brands, {_id:req.params._id});
        res.json(brand);
    });
    /**/
});

app.post(baseurl+'/server/api/brands', function(req, res){
    var brand = req.body;
    Brand.create(brand, function(err, brand){
        if(err){
            return res.send(500, err);
        }
        res.json(brand);
    });
});

app.get(baseurl+'/server/api/variations', function(req, res){
    var params = parseJSON(req.query);
    //res.json(params);

    //res.json(req.query.query);
    //var query = !req.query.query ? req.query.query : JSON.parse(req.query.query);
    //var featured_query = query ? query.featured : null;
    //var brand_query = query ? query.brand : null;
    //res.json(query);

    /*
    var query = JSON.parse(req.param('query'));
    var brand_query = query.brand
    res.json(brand_query);
    /**
    Brand.find(function(err, brands){
        if(err){
            return res.send(500, err);
        }
        res.json(brands);
    }).sort({'_id': 1});
    /**/

//    var brands;
//    fs.readFile(path.join(__dirname, '..', 'client/json/brands.json'), 'utf8', function (err, data) {
//        brands = JSON.parse(data);
//    });

    /*using json file*/
    fs.readFile(path.join(__dirname, '..', 'client/json/variations.json'), 'utf8', function (err, data) {
        var variations;
        variations = JSON.parse(data);

        if(_.has(params, 'query')){
            var query = parseJSON(params.query);
            if(_.has(query, 'featured')){
                variations = _.filter(variations, function(variation) {
                    return variation.featured != null;
                });
            }
            if(_.has(query, 'brand')){
                variations = _.filter(variations, {'brand': query.brand});
            }
            if(_.has(query, 'sku')){
                variations = _.find(variations, {'sku': query.sku});
            }
            if(_.has(query, '_id')){
                variations = _.find(variations, {'_id': query._id});
            }
        }

        if(_.has(params, 'populate')){
            var populate = params.populate.split(" ");
            if(_.has(params, 'expectOne')){
                if(params.expectOne){
                    if(populate.indexOf('brand') > -1){
                        var brands = parseJSON(fs.readFileSync('../client/json/brands.json', 'utf8'));
                        variations.brand = _.find(brands, {_id:variations.brand});
                    }
                    if(populate.indexOf('product') > -1){
                        var products = parseJSON(fs.readFileSync('../client/json/products.json', 'utf8'));
                        variations.product = _.find(products, {_id:variations.product});
                    }
                }
            } else{
                _.forEach(variations, function(value, key) {
                    if(populate.indexOf('brand') > -1){
                        var brands = parseJSON(fs.readFileSync('../client/json/brands.json', 'utf8'));
                        variations[key].brand = _.find(brands, {_id:value.brand});
                    }
                });
            }
        }

        res.json(variations);

        /*
        //res.json(variations);
        //if(query.featured != undefined)
        if(_.has(query, 'featured')){
            variations = _.filter(variations, function(variation) {
                return variation.featured != null;
            });
        }

        if(_.has(query, 'brand'))
            variations = _.filter(variations, {'brand': query.brand});
        //variations = _.find(variations, 'brand', brand_query);
        //var dat = "";
        /**
        _.forEach(variations, function(value, key) {
            //dat += key + " - " + value.brand + ", ";
            variations[key].brand = _.find(brands, {_id:value.brand});
        });
        /**
        res.json(variations);
        /**/
    });
    /**/
});

app.get(baseurl+'/server/api/variations/:_id', function(req, res){
    /**
    Brand.findById(req.params._id, function(err, brand){
        if(err){
            return res.send(500, err);
        }
        res.json(brand);
    });
    /**/

    /*using json file*/
    fs.readFile(path.join(__dirname, '..', 'client/json/variations.json'), 'utf8', function (err, data) {
        var variations;
        variations = JSON.parse(data);
        var variation = _.find(variations, {_id:req.params._id});
        res.json(variation);
    });
    /**/
});

app.get(baseurl+'/server/api/careers', function(req, res){
    var query = !req.query.query ? req.query.query : JSON.parse(req.query.query);
    //res.json(query);


    /**
    Career.find(function(err, careers){
        if(err){
            return res.send(500, err);
        }
        res.json(careers);
    }).sort({'_id': 1});
    /**/

    /*using json file*/
    fs.readFile(path.join(__dirname, '..', 'client/json/careers.json'), 'utf8', function (err, data) {
        var careers;
        careers = JSON.parse(data);

        if(_.has(query, '_id'))
            careers = _.find(careers, {'_id': query._id});

        res.json(careers);
    });
    /**/
});

app.get(baseurl+'/server/api/careers/:_id', function(req, res){
    /**
    Career.findById(req.params._id, function(err, career){
        if(err){
            return res.send(500, err);
        }
        res.json(career);
    });
    /**/

    /*using json file*/
    fs.readFile(path.join(__dirname, '..', 'client/json/careers.json'), 'utf8', function (err, data) {
        var careers;
        careers = JSON.parse(data);
        var career = _.find(careers, {_id:req.params._id});
        res.json(career);
    });
    /**/
});

app.get(baseurl+'/server/api/faq', function(req, res){
    var params = parseJSON(req.query);
    /**
    Career.find(function(err, careers){
        if(err){
            return res.send(500, err);
        }
        res.json(careers);
    }).sort({'_id': 1});
    /**/

    /*using json file*/
    fs.readFile(path.join(__dirname, '..', 'client/json/faq.json'), 'utf8', function (err, data) {
        var faq;
        faq = JSON.parse(data);

        if(_.has(params, 'query')){
            var query = parseJSON(params.query);
            if(_.has(query, 'product')){
                faq = _.find(faq, {'product': query.product});
            }
        }

        res.json(faq);
    });
    /**/
});

app.get(baseurl+'/server/api/html-guide', function(req, res){
    /**
    Career.find(function(err, careers){
        if(err){
            return res.send(500, err);
        }
        res.json(careers);
    }).sort({'_id': 1});
    /**/

    /*using json file*/
    var htmlGuideNode;
    htmlGuideNode = {};

    res.json(htmlGuideNode);
    /**/
});
