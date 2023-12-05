const express=require("express");
const { productsContr } = require("../controllers/Product.controller");

const router=express.Router();



router.get("/",productsContr);



module.exports=router