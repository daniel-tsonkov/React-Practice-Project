const httpStatus = require('http-status');
const { ApiError } = require('../middleware/apiError');


const userController = {
    async profile(req, res, next) {
        try {
            const user = await userService.findUserById();
        } catch (err) {
            next(err);
        }
    }
};

module.exports = userController;