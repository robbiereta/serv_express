var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');
var app = express();                                                                                          
const port = 3006
require('dotenv').config()
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI,{dbName: 'bvic2'},);
var mailerRouter = require('./routes/mailer');
var botRouter = require('./routes/apis/bot');
var ordenRouter = require('./routes/orden');
var preciosRouter = require('./routes/precios');
var productosRouter = require('./routes/productosRoutes');
<<<<<<< HEAD
  
app.options('/*', cors()) // enable pre-flight request for DELETE request
=======
var orden_posRouter = require('./routes/orden_pos'); 

>>>>>>> 42e98c95926aaad88e586929aaeb8486461bf547
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/bot',botRouter)
app.use('/mailer',mailerRouter);
app.use('/orden',ordenRouter);
app.use('/precios',preciosRouter);
<<<<<<< HEAD
app.use('/productos',productosRouter, cors(),);
=======
app.use('/productos',productosRouter);
app.use('/orden_pos',orden_posRouter)
>>>>>>> 42e98c95926aaad88e586929aaeb8486461bf547
app.use('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
module.exports = app;
