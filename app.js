var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');

var app = express();
const port = 3000
app.use(cors());
var mailerRouter = require('./routes/mailer');
app.use('/mailer', mailerRouter);
app.use('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
module.exports = app;
