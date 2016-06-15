const nodemailer = require('nodemailer');
const path = require('path');
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
      `JH Contact Form: ${req.body.subject}`,
    text: `Name: ${req.body.name}
    Email: ${req.body.email}
    Message: ${req.body.message}`
  };

  smtpTrans.sendMail(mailOpts, function (error) {
    if (error) {
      res.sendFile(path.join(__dirname, '../public/contact_error.html'));
    } else {
      res.sendFile(path.join(__dirname, '../public/contact_success.html'));
    }
  });


}

module.exports = contact;
