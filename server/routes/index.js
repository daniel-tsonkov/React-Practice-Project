const express = require('express');
const router = express.Router();

//routes
const articlesRoute = require('./articles.route');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');

const routesIndex = [
    {
        path: '/articles',
        route: articlesRoute
    },
    {
        path: '/auth',
        route: authRoute
    },
    {
        path: '/users',
        route: userRoute
    }
]

routesIndex.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;