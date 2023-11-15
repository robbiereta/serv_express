//*********************************************************************************************************
//* Explanation 
//* 
//*********************************************************************************************************
const express = require('express');
const ordenRouter = express.Router();
const ordenController = require('../controllers/ordenController')

ordenRouter.get('/all', ordenController.all);
ordenRouter.get('/:id', ordenController.findOneById);
ordenRouter.post('/create', ordenController.createOrden);
ordenRouter.put('/:id', ordenController.updateOrden);
ordenRouter.delete('/:id', ordenController.deleteOrden);

module.exports = ordenRouter;
