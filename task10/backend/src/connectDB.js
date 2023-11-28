const mongoose = require("mongoose");
const connectDatabase = async () => {
  const connect = await mongoose.connect("mongodb+srv://atifahmad2219:ecommerceapp@cluster0.malln0y.mongodb.net/store?retryWrites=true&w=majority");//don't show this Ok
  console.log("Database connect successfully",connect.connection.host);
};


module.exports=connectDatabase