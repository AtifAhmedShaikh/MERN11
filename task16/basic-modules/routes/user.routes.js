const express=require("express");
const { GetUsers,addUser } = require("../controllers/User.controller");

const router=express.Router();

router.get("/",GetUsers);
router.post("/add",addUser);



module.exports=router;


