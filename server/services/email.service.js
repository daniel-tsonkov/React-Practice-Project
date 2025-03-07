const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
require('dotenv').config();

let transporter = nodemailer.createTransport({
    service: "Gmail",
    secure: true,
    auth: {
        user: process.env.EMAIL
        //pass: ???????
    }
})

const registerEmail = async () => {

}

module.exports = {
    registerEmail
}