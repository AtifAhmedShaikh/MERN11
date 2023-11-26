const mongoose = require("mongoose");
const connectDatabase = async () => {
  try {
    try{
      const connect = await mongoose.connect("my-connection-string-of-campass");//don't show this Ok
      console.log("Database connect successfully",connect.connection.host);
    }catch(error){
      console.log("Database connection Error !",error);
    }
  } catch (error) {
    console.log(error);
  }
};



module.exports=connectDatabase