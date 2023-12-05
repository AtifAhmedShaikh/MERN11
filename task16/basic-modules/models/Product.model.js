const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
   name:{
    type:String,
   },
   available:{
    type:Boolean
   },
   price:{
    type:Number,
   },
 category:{
    type:String,
    enum:["MOBILE","PHONE"],
    default:"MOBILE",
 }
});

const ProductModel = mongoose.model("product", ProductSchema);
module.exports = ProductModel;

