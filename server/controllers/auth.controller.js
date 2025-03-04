const { authService } = require('../services');
const httpStatus = require('http-status');

const authController = {
    async register(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await authService.createUser(email, password);
            const token = await authService.genAuthToken(user);

            /// SEND VERIFICATION EMAIL
            res.cookie('x-access-token', token)
                .status(201).send({
                    user,
                    token
                })
        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).send(error.message);
        }
    },
    async signin(requ, res, next) {
        try {
            const { email, password } = req.body;
            const user = await authService.signInWithEmailAndPassowr(email, password)
        } catch (err) {

        }
    }
}


module.exports = authController;