const mongoose = require("mongoose");
const connectDatabase = async () => {
  try {
    try{
      const connect = await mongoose.connect("mongodb+srv://atifahmad2219:ecommerceapp@cluster0.malln0y.mongodb.net/store?retryWrites=true&w=majority");//don't show this Ok
      console.log("Database connect successfully",connect.connection.host);
    }catch(error){
      console.log("Database connection Error !",error);
    }
  } catch (error) {
    console.log(error);
  }
};



module.exports=connectDatabase