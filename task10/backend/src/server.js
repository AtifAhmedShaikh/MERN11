const express=require("express");
const router = require("./router");
const connectDatabase = require("./connectDB");
const app=express();
const port=6000;
app.use(express.json());
connectDatabase();
app.use(router);
app.listen(port,()=> console.log("Hello Todo App server !"));
