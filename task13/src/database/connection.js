const mongoose=require("mongoose");

const connectDB = async () => {
    try {
      const connection = await mongoose.connect(
        "mongodb+srv://atifahmad2219:ecommerceapp@cluster0.malln0y.mongodb.net/store?retryWrites=true&w=majority"
      );
      console.log("DB connected successfully");
    } catch (error) {
      console.log("DB connection Error");
    }
  };
  module.exports=connectDB
