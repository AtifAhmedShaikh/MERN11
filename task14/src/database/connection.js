import mongoose from "mongoose"
import { connectionString } from "../config/exportEnv.js";
const connectDB=async()=>{
    try{
        const connect=await mongoose.connect(connectionString)
        console.log("Database connected successfully !",connect.connection.host);
    }catch(error){
        console.log(error)
        console.log("Connection Error !",error);
    }
}
export default connectDB;