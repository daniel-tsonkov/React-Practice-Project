const httpStatus = require('http-status');
const { articlesService } = require('../services')

const articlesController = {
    async createArticle(req, res, next) {
        try {
            const article = articlesService.addArticle(req.body);
        } catch (err) {
            next(err);
        }
    },
    async createCategory(req, res, next) {
        try {
            const category = await articlesService.addCategory(req.body);
            res.json(category);
        } catch (err) {
            next(err);
        }
    },
    async getAllCategories(req, res, next) {
        try {
            const categories = await articlesService.findAllCategories();
            res.json(categories);
        } catch (err) {
            next(err);
        }
    }
};

module.exports = articlesController;