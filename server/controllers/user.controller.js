const httpStatus = require('http-status');
const { ApiError } = require('../middleware/apiError');

const { userService } = require('../services');

const userController = {
    async profile(req, res, next) {
        try {
            const user = await userService.findUserById(req.user._id);

            if (!user) {
                throw new ApiError(httpStatus.NOT_FOUND, 'User not found!!!')
            }

            // res.json(user._doc);
            // res.json(user);
            res.json(res.locals.permission.filter(user._doc));
        } catch (err) {
            next(err);
        }
    },
    async updateProfilq(req, res, next) {
        try {

        } catch (err) {
            console.log(err);
        }
    }
};

module.exports = userController;