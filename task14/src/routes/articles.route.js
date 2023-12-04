import express from "express";
import {
    addNewArticle,
    allArticles,
    articleById,
    deleteArticle,
    testAsync,
    updateArticle
} from "../controllers/articles.controller.js";
import { isAdmins, isAuth } from "../middlewares/auth.middleware.js";
import { catchAsyncError } from "../utils/handers.js";

const router = express.Router();

router.get("/all", isAuth, allArticles);
router.get("/another", testAsync);
router.get("/one/:id", isAuth, articleById);
router.post("/create", isAuth, isAdmins, addNewArticle);
router.put("/update", isAuth, isAdmins, updateArticle);
router.delete("/delete", isAuth, isAdmins, deleteArticle);
const contr = (req, res, next) => {
    res.status(200).json({ message: "Ok testing krlo bro" });
};
const cont2 = catchAsyncError((req, res) => {
    const ok = hjj;
    res.status(200).json("Hello working nice");
});
router.get("/testing", cont2);
export default router;

// {
//     "title":"this is title of article",
//     "description":"description of article",
//     "content":"content of article ",
//     "urlToImage":"url-of-Image"
// }
