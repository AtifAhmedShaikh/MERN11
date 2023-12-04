const mongoose=require("mongoose");
const todoSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:[10,"text has at least 10 letters"],
        maxLength:[20,"text has maximum 20 letters"],
    },
    
    email:{
        type:String,
        required:true,
        minLength:[10,"text has at least 10 letters"],
        maxLength:[20,"text has maximum 20 letters"],
    },
    password:{
        type:String,
        required:true,
        minLength:[10,"text has at least 10 letters"],
        maxLength:[20,"text has maximum 20 letters"],
    },
    role:{
        type:String,
        enum:["student","teacher"],
        default:"student"
    }
},{
    timestamps:true
});


const TodoModel=mongoose.model("todo",todoSchema);

module.exports=TodoModel;