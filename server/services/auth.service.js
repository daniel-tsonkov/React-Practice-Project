const httpStatus = require('http-status');
const { User } = require('../models/user');

const createUser = async (email, password) => {
    try {
        if (await User.emailTaken(email)) {
            throw new Error('Email taken!!!');
        }

        const user = new User({
            email,
            password
        });

        await user.save();
        return user;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createUser
}