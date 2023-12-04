const express=require("express");
const mongoose=require("mongoose");
const connectDB = require("./src/database/connection");
const app = require("./src/app");

const PORT=5000;
connectDB();
//write movie schema
const personSchema = new mongoose.Schema({
    name: {
      type: String,
      maxLength: [10, "name is too lengthy "],
      minLength: [5, "name must be 5"],
    },
  
    role:{
      type:String,  
      required:true,
      enum:["ADMIN","USER"],
      default:"USER"//when not given it also set default value
    },
    age: {
      type: Number,
      min: [3, "age must be Greater then 3 "],
      max: [18, "age must be Less then 18 "],
      required: true,
    },
    balance:{
      type:String,
      default:10//when not given it also set default value
    },
    city: { type: String },
    password:{
      type:String,
      required:true,
      select:false,
      minLength:[10,"password must be Lese then 10"],
      minLength:[20,"password must be Greater then 10"],
    }
  });
  
  const PersonModel = mongoose.model("person", personSchema);
  

app.listen(PORT,()=>{
    console.log("server running on PORT",PORT);
});





