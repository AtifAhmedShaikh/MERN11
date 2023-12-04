const mongoose=require("mongoose");
const todoSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true,
        minLength:[10,"text has at least 10 letters"],
        maxLength:[20,"text has maximum 20 letters"],
    },
    status:{
        type:Boolean,
        default:false,
        required:true
    },
    createdBy:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"student"
    }
},{
    timestamps:true
});


const TodoModel=mongoose.model("todo",todoSchema);

module.exports=TodoModel;