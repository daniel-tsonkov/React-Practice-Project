const mongoose = require('mongoose');
const validator = require('validator');
require('dotenv').config();

//here we define evrithing needen for user
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) { //validate email
            if (!validator.isEmail()) {
                throw new Error('Invalid email!!!');
            }
        }
    },
    password: {},
    role: {},
    firstname: {},
    lastname: {},
    age: {},
    date: {},
    verified: {}
});

const User = mongoose.model('User', userSchema);
module.exports = { User };