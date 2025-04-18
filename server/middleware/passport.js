//use this code becose is more new
const { User } = require('../models/user');
require('dotenv').config();

const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const jwtOptions = {
    secretOrKey: process.env.DB_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}

const jwtVerify = async (payload, done) => {
    try {
        const user = await User.findById(payload.sub);

        if (!user) {
            return (null, false);
        }

        done(null, user);
    } catch (err) {
        done(err, false);
    }
}

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
    jwtStrategy
}