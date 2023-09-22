const nodemailer = require("nodemailer")

const mail = async function (email, code){
    const transporter  = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD
        }
    });

    const message = {
        from: process.env.MAIL_FROM, // Sender address
        to: email,         // List of recipients
        subject: 'Activate Account', // Subject line
        html: `<i>To activate your account please enter this code: <a href="http://localhost:${process.env.PORT}/user/verify-account?token=${code}">Verify Account</a> </i>` // Plain text body
    };

    await transporter.sendMail(message, function (err, info){
        if (err) {
            console.log("Failed")
        } else {
            // console.log("Success")
            return email
        }
    })
}

module.exports = mail