const mongoose=require("mongoose");


const connectDB=async()=>{
    try{
        const connect=await   mongoose.connect("mongodb+srv://atifahmad2219:ecommerceapp@cluster0.malln0y.mongodb.net/store?retryWrites=true&w=majority");
        console.log("connected successfully Database ",connect.connection.host);
    }catch(error){
        console.log("Connection Error ",error);
    }
}


module.exports=connectDB;