const nodemailer = require('nodemailer');

//method to send email

const sendEmail = async (req, res) => {
    console.log("hello");
    try {
        //set up transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            auth: {
                user: '<enter your email address>',
                pass: '<Enter your email password >'
            }
        });

        // send mail 
        let info = await transporter.sendMail({
            from: '"<your name>"  < your email address>',
            to: req.body.to,
            subject: req.body.subject,

            html: `<b> ${req.body.message}</b>`
        });
        res.status(200).json({
            msg: 'email send successfully',
            msgId: info.messageId
        })

    } catch (err) {
        res.status(500).json({
            msg: err.message
        })
    };
};

module.exports = { sendEmail };