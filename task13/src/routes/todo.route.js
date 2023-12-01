const express=require("express");
const router=express.Router();
const bcrypt=require("bcrypt")
router.get("/add",(req,res)=>{
    res.status(200).json({message:"Hello Index route of Todo"});
});
router.get("/add",(req,res)=>{
    res.status(200).json({message:"Hello Add route of Todo"});
});
router.get("/delete",(req,res)=>{
    res.status(200).json({message:"Hello Delete route of Todo"});
});


const schema={};

schema.methods.checkPassword=async(pass)=>{
    console.log("your operations ");
    const isMatch=await bcrypt.compare(pass,this.passsord);
    return isMatch
}


module.exports=router;