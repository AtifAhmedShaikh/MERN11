import ArticleModel from "../models/Article.model.js";

export const findArticles = async () => {
    return await ArticleModel.find().populate("author");
};

export const findArticleById = async id => {
    return await ArticleModel.findById(id);
};

export const writeArticle = async data => {
    const newArr = new ArticleModel({ ...data });
    const saved = await newArr.save();
    return saved;
};

export const updateArticleById = async (id, updated) => {
    return await ArticleModel.findByIdAndUpdate(id, updated);
};

export const deleteArticleById = async id => {
    return await ArticleModel.findByIdAndDelete(id);
};
