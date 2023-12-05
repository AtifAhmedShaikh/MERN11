const {getAllUsers, addNewUser} = require("../services/User.service.js");

exports.GetUsers=async(req,res)=>{
    const users=await getAllUsers();
    res.status(200).json({message:"welcome to getting all user ",users});
}


exports.addUser=async(req,res)=>{
    const {user}=req.body;
    const response=await addNewUser(user);
    res.status(200).json({response});
}