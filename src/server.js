var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  debug: true,
  secureConnection: false,
  auth: {
    user: 'dvg8.vcc@gmail.com',
    pass: 'vrjnrjoypjcebipu'
  },
  tls: {
    rejectUnauthorized: true,
  }
});

var mailOptions = {
  from: 'doangiang665@gmail.com',
  to: 'dvg8.vcc@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});