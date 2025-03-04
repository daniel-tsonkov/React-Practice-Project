const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
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
        },
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    firstname: {
        type: String,
        trim: true,
        maxLength: 100,
    },
    lastname: {
        type: String,
        trim: true,
        maxLength: 100,
    },
    age: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now,
    },
    verified: {
        type: Boolean,
        default: false
    }
});

userSchema.pre('save', async function (next) {
    let user = this;

    if (user.isModified('password')) {

    };

    next();
})

userSchema.statics.emailTaken = async function (email) {
    const user = await this.findOne({ email });
    return !!user;
}

const User = mongoose.model('User', userSchema);
module.exports = { User };