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

const registerEmail = async (userEmail, user) => {
    try {
        const emailToken = user.generateRegisterToken();
        let mailGenerator = new Mailgen({
            theme: "Test Email",
            product: {
                name: "Flickbase",
                link: `${process.env.EMAIL_MAIN_URL}`
            }
        });

        const email = {
            body: {
                name: userEmail,
                intro: 'Welcome We\'re here.',
                action: {
                    instructions: 'За да валидираш кликни тука',
                    button: {
                        color: '#1a73e8',
                        text: 'Валидирай',
                        link: `${process.env.SITE_DOMAIN}verification?t=${emailToken}`
                    }
                },
                outro: 'Testsistem tm'
            }
        }
        let emailBody = mailGenerator.generate(email);
        let message = {
            from: process.env.EMAIL,
            to: userEmail,
            subject: "TEST EMAIL",
            html: emailBody
        };

        await transporter.sendMail(message);
        return true;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    registerEmail
}