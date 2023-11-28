const express=require("express");
const mongoose=require("mongoose");
const app=express();
const PORT=7000;
const connectDB=async()=>{
    try {
        const connection=await mongoose.connect("my-local-string")//why i show them
        console.log("connected successfully !");
    } catch (error) {
    console.log("connection Error !");
    } 
}

app.listen(PORT,()=>{
    console.log("server started");
})