var express = require("express");
var cotizacionesRouter  = express.Router();
require('dotenv').config()
/* GET home page. */
cotizacionesRouter.get("/", function(req, res, next) {
  res.send("Express");
  console.log(process.env.MAIL_USR + ":" + process.env.MAIL_PASS)
});

cotizacionesRouter.post("/", function(req, res, next) {

});

module.exports = cotizacionesRouter ;
