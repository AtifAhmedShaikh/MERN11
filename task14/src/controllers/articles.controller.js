import {
    deleteArticleById,
    findArticleById,
    findArticles,
    updateArticleById,
    writeArticle
} from "../services/article.service.js";
import { catchAsyncError } from "../utils/handers.js";

export const allArticles = async (req, res) => {
    const articles = await findArticles();
    res.status(200).json({ articles });
};
export const testAsync = catchAsyncError(async (req, res, next) => {
    const articles = await findArticles();
    let a = hello;
    res.status(200).json({ articles });
});
export const articleById = async (req, res) => {
    const { id } = req.params;
    const article = await findArticleById(id);
    res.status(200).json({ article });
};

export const addNewArticle = async (req, res) => {
    try {
        const { content, description, title, urlToImage } = req.body;
        const authorId = req.user._id;
        const newArticle = await writeArticle({
            title,
            description,
            content,
            urlToImage,
            author: authorId
        });

        res.status(200).json({ article: newArticle });
    } catch (error) {
        console.log(error);
        res.status(200).json({ error });
    }
};

export const updateArticle = async (req, res) => {
    const { id } = req.params;
    const { updatedArticle } = req.body;
    await updateArticleById(id, updatedArticle);
    res.status(200).json({ message: "article has successfully updated " });
};

export const deleteArticle = async (req, res) => {
    const { id } = req.params;
    await deleteArticleById(id);
    res.status(200).json({ message: "article has successfully deleted " });
};
