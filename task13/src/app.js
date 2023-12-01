const express = require("express");
const router=require("./routes/todo.route.js");

const app = express();
app.use(express.json());

app.use("/api/v1/todos",router);

module.exports = app;
