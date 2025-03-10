const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('dotenv').config();


const articleSchema = mongoose.Schema({
    title: {
        type: String,
        maxLength: 100,
        required: [true, 'You need a title']
    },
    content: {
        type: String,
        required: [true, 'You need a content']
    },
    excerpt: {
        type: String,
        required: [true, 'You need a excerpt'],
        maxLength: 500
    },
    score: {
        score: Number,
        min: 0,
        max: 100,
        required: true
    },
    director: {
        type: String,
        required: true,
    },
    actors: {
        type: [String],
        required: true,
        validate: {
            validator: function (array) {
                return array.length >= 2
            },
            message: "You must add three at least"
        }
    },
    status: {},
    category: {},
    date: {}
});

const Article = mongoose.model('Article', articleSchema);
module.exports = { Article };