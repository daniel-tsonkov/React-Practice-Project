const httpStatus = require('http-status');
const { User } = require('../models/user');

const createUser = async (email, password) => {
    try {
        if (await User.emailTaken(email)) {

        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createUser
}