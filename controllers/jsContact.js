const nodemailer = require('nodemailer');
require('dotenv').config();

function contact(req, res) {
  const smtpTrans = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOpts = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    cc: process.env.CC,
    subject: req.body.company ?
      'Spam Contact Form' :
      'JH Contact Form',
    text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`
  };

  smtpTrans.sendMail(mailOpts, (error) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
}

module.exports = contact;
