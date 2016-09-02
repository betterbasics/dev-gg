var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    sku: {
      type : String
    },
    name:{
        type : String
    },
    subtitle:{
        type : String
    },
    description:{
        type : String
    },
    brand:{
        type : String
    },
    msrp:{
        type : Number
    },
    providers : {
        amazon :  {price:Number, link:String},
        bbb : {price:Number, link:String},
        target : [{price:Number, link:String}]
    },
    image : {
        type : String
    },
    gallery : {
        type : [String]
    },
    product : {
      variants : {
          variable : {
              type : [String]
          },
          values : {
              type : [String]
          }
      }
    },
    specs : {
        title : {
            type : String
        },
        description : {
            type : String
        }
    },
    featured : {
        type : Boolean
    },
    commingsoon : {
        type : Boolean
    }
});

mongoose.model('Product', productSchema);
