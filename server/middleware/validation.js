const { check, validationResult } = require('express-validator');
const httpStatus = require('http-status');

const addArticleValidator = [
    check(''),
    (req, res, next) => {

        next();
    }
]

module.exports = {
    addArticleValidator
}