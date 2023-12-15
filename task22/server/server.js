const express=require("express");

const port =6000;
const app=express();
const router=express.Router();

router.get("/",(req,res)=>{
    res.status(200).json({message:"hello home route of small server"});

})
router.post("/cartData",(req,res)=>{
    const {cartData}=req.body;
    res.status(200).json({cart:cartData});
});

app.use(router);
app.listen(port,()=>{
    console.log("Hello from small server");
});


