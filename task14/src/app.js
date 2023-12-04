import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { appPath } from "./config/exportEnv.js";
import articlesRouter from "./routes/articles.route.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import ArticleModel from "./models/Article.model.js";
import { handleError } from "./utils/handers.js";
const app = express();
const corConfig = {
    origin: [appPath],
    credential: true,
    methods: "GET,POST,PUT,PATCH,HEAD"
};
app.use(cors(corConfig));
app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.json());

// Define routers for respective routes
app.use("/api/v1/articles", articlesRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.get("/test", async (req, res) => {
    const resp = await ArticleModel.deleteMany();
    res.status(200).json({ message: "deleted all succ", resp });
});
app.use(handleError);
export default app;
