import app from "./src/app.js";
import { port } from "./src/config/exportEnv.js";
import connectDB from "./src/database/connection.js";
connectDB();
//app listen on given port
app.listen(port, () => {
    console.log("server running on port :", port);
});
