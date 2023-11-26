const mongoose =require("mongoose");

const taskSchema=new mongoose.Schema({
    taskText:{
        type:String
    },   
    status:{
        type:Boolean
    }
});
const TaskModel=mongoose.model("task",taskSchema);
module.exports=TaskModel;
