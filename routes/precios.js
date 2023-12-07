//*********************************************************************************************************
//* Explanation 
//* 
//*********************************************************************************************************
const express = require('express');
const preciosRouter = express.Router();
const preciosController = require('../controllers/preciosController')

preciosRouter.get('/', preciosController.all);


module.exports = preciosRouter;
