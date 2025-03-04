const httpStatus = require('http-status');
const { User } = require('../models/user');

const createUser = async (email, password) => {
    try {
        if (await User.emailTaken(email)) {
            throw new Error('Sorry email taken!!!')
        }

        const user = new User({
            email,
            password
        });
        await user.save();
        return user;
    } catch (error) {
        throw error;
    }
}

const genAuthToken = (user) => {
    const token = user.generateAuthToken();
    return token;
}

const signInWithEmailAndPassowr = async (email, password) => {
    try {
        //check email


        //validate password
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createUser,
    genAuthToken,
    signInWithEmailAndPassowr
}