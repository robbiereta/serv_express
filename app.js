var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
var Resource = require('resourcejs');
mongoose.connect('mongodb+srv://Robbie:yZLHrc66nTrvLaio@cluster0.c9uqb.mongodb.net',{dbName: 'bvic'});
const port = 3000
app.use(cors());
var mailerRouter = require('./routes/mailer');
var botRouter = require('./routes/bot');
var cotizacionesRouter = require('./routes/cotizaciones');
var ordenModel = require('./models/ordenModel');

// Create the REST resource.
Resource(app,'','orden', ordenModel).rest();
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
app.use('/cotizaciones',cotizacionesRouter)
app.use('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
module.exports = app;
