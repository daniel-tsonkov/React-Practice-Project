const express = require('express');
const router = express.Router();

//routes
const articlesRoute = require('./article.route');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');

module.exports = router;