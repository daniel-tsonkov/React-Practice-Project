const mongoose = require('mongoose');
require('dotenv').config();

const categories = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        maxLength: 100,
        required: [true, 'You need a category name']
    },
    date: {

    }
});

const Category = mongoose.model('Category', categoriesSchema);
module.exports = { Category };