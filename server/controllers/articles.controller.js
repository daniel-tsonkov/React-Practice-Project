const httpStatus = require('http-status');
const { articlesService } = require('../services')


const articlesController = {
    async createArticle(req, res, next) {
        try {
            const article = await articlesService.addArticle(req.body)
            res.json(article);
        } catch (error) {
            next(error);
        }
    },
    async getArticleById(req, res, next) {
        try {
            const _id = req.params.id;
            const article = await articlesService.getArticleById(_id, req.user);
            res.json(article);
        } catch (error) {
            next(error);
        }
    },
    async updateArticleById(req, res, next) {
        try {
            const _id = req.params.id;
            const article = await articlesService.updateArticleById(_id, req.body);
            res.json(article);
        } catch (error) {
            next(error);
        }
    },
    async createCategory(req, res, next) {
        try {
            const category = await articlesService.addCategory(req.body);
            res.json(category);
        } catch (error) {
            next(error);
        }
    },
    async getAllCategories(req, res, next) {
        try {
            const categories = await articlesService.findAllCategories();
            res.json(categories);
        } catch (error) {
            next(error);
        }
    }
}


module.exports = articlesController;