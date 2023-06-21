var express = require("express");
var mailerRouter  = express.Router();
require('dotenv').config()
/* GET home page. */
mailerRouter.get("/", function(req, res, next) {
  res.render("Express");
  console.log(process.env.MAIL_USR + ":" + process.env.MAIL_PASS)
});

mailerRouter.post("/", function(req, res, next) {
 

  function sendEmailFromApi () {

    "use strict";
    // remove this after you've confirmed it is working
    const nodemailer = require("nodemailer");
    
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
     // let testAccount = await nodemailer.createTestAccount();
    
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user:process.env.MAIL_USR,
          pass: process.env.MAIL_PASS,
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Cotizaciones" <bici.vic2@zohomail.com>', // sender address
        to: "bici.vic2@gmail.com", // list of receivers
        subject: "Solicitud de cotizacion", // Subject line
        text: "Un cliente solicito un presupuesto de lo siguiente:"+req.body.prod+"de"+req.body.moto+ " "+req.body.anio + " "+req.body.color + "datos del cliente:"+req.body.nombre +"telefono" +req.body.telefono, // plain text body
        html: "Un cliente solicito un presupuesto de lo siguiente:"+req.body.prod+"de"+req.body.moto+ " "+req.body.anio + " "+req.body.color + "datos del cliente:"+req.body.nombre +"telefono" +req.body.telefono, // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
    }
    main().catch(console.error);
  }
  
  sendEmailFromApi()
  
});

module.exports = mailerRouter ;
