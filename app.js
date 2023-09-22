var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');
var app = express();                                                                                          
const port = 3000
app.use(cors());
require('dotenv').config()
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI,{dbName: 'mmr'},);
var mailerRouter = require('./routes/mailer');
var botRouter = require('./routes/bot');
var ordenRouter = require('./routes/orden');
var preciosRouter = require('./routes/precios');


// Create the REST resource.
//Resource(app,'','orden', orden).rest();
/*The following rest interface would then be exposed.

/resource - (GET) - List all resources.
/resource - (POST) - Create a new resource.
/resource/:id - (GET) - Get a specific resource.
/resource/:id - (PUT) - Replaces an existing resource.
/resource/:id - (PATCH) - Updates an existing resource.
/resource/:id - (DELETE) - Deletes an existing resource. */


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/bot',botRouter)
app.use('/mailer',mailerRouter);
app.use('/orden',ordenRouter);
app.use('/precios',preciosRouter);
app.use('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
module.exports = app;
