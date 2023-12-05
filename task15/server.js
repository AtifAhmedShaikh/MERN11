const express=require("express");
const app=express();
const router=express.Router();
const PORT=6000;
const homeController=(req,res)=>{
    res.status(200).json({message:"Welcome home page !"});
}
const handleError=(error,req,res,next)=>{
    
}
router.get("/",homeController)
app.use(handleError);
app.listen(PORT,()=>{
    console.log("Server running on",PORT);
});
