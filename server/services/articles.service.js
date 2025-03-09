const httpStatus = require('http-status');
const { Category } = require('../models/category');
const { ApiError } = require('../middleware/apiError');


const addCategory = async (body) => {
    try {
        //validation
        const category = new Category({
            ...body
        });
        await category.save();
    } catch (err) {
        throw err;
    }
}

module.exports = {
    addCategory
}