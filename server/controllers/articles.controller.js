const httpStatus = require('http-status');
const { articlesService } = require('../services')

const articlesController = {
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
            res.json(category);//?????????
        } catch (err) {
            next(err);
        }
    }
};

module.exports = articlesController;