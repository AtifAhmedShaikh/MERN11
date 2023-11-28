const express=require("express");
const TaskModel = require("./Models");
const router=express.Router();



router.get("/",(req,res)=>{
    res.status(200).json({message:"Welcome home Page !"})
});

router.get("/todos",async (req,res)=>{
    const todoList=await TaskModel.find();
    res.status(200).json({todoList});
});
router.get("/todos/complted",async (req,res)=>{
    const completed=await TaskModel.find({status:true});
    res.status(200).json({completed});
});
router.get("/todos/inComplted",async (req,res)=>{
    const inCompleted=await TaskModel.find({status:false});
    res.status(200).json({inCompleted});
});

router.post("/create",async(req,res)=>{
    const {taskText,status}=req.body;
    const newTask=new TaskModel({
        taskText,status
    });
    await newTask.save();
    res.status(200).json({taskText,status});
});

router.put("/update/:todoId",async (req,res)=>{
    const {todoId}=req.params;
    const {taskText,status}=req.body;
    const todo=await TaskModel.findByIdAndUpdate(todoId,{taskText,status});
    res.status(200).json({message:"successfully updated todo",todo});
});
router.delete("/delete/:todoId",async (req,res)=>{
    const {todoId}=req.params;
    const {taskText,status}=req.body;
    const todo=await TaskModel.findByIdAndDelete(todoId);
    res.status(200).json({message:"successfully Deleted todo",todo});
});


module.exports=router;