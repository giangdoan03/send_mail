var express = require('express');
var http = require('http');
var path = require('path');
var nodemailer = require('nodemailer');

var app = express();
var server = http.Server(app);
var port = 500;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "page/index.html")));

app.get("/", function(req, response){
    response.sendFile(path.join(__dirname, "page/index.html"))
})



app.post("/send_email", function(req, response){
    var from = req.body.from;
    var to = req.body.to;
    var subject = req.body.subject;
    var message = req.body.message;

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
      
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      

})


// initialize web server

server.listen(port, function(){
    console.log('start server on post: ' + port)
})

