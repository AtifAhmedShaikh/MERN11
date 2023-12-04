const express=require("express");


const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true,limit:"20kb"}))//allow to Get data from Url of req

module.exports=app;
