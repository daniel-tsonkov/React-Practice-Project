const { authService } = require('../services');

const authController = {
    async register(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await authService.createUser(email, password);
        } catch (err) {
            console.log(err);
        }
    }
};

module.exports = authController;