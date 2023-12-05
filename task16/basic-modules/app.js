const express = require("express");
const cors = require("cors");

const todoRoutes = require("./routes/todo.routes");
const connectDatabase = require("./database/connection");
const handleError = require("./middleware/error");
const userRouter = require("./routes/user.routes");
const productRouter = require("./routes/product.routes");

connectDatabase();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/todo", todoRoutes);
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use(handleError);

module.exports = app; // default export
