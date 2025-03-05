const passport = require('passport');
const { ApiError } = require('./apiError');
const httpStatus = require('http-status');
const { verify } = require('jsonwebtoken');


const auth = () => async (req, res, next) => {
    return new Promise((resolve, reject) => {

    })
        .then(() => next())
        .catch((err) => next(err))
    passport.authenticate('jwt', { session: false }, verify(req, res))(req, res, next)
};

module.exports = auth;