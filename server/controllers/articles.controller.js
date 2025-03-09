const httpStatus = require('http-status');
const { articlesService } = require('../services')

const articlesController = {
    async createCategory(req, res, next) {
        try {
            const category = await articlesService.addCategory(req.body);
        } catch (err) {
            next(err);
        }
    }
};

module.exports = articlesController;