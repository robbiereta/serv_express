var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productosController.js');

/*
 * GET
 */
router.get('/', productosController.list);

/*
 * GET
 */
router.get('/:id', productosController.show);

/*
 * POST
 */
router.post('/', productosController.create);

/*
 * PUT
 */
router.put('/:id', productosController.update);

/*
 * DELETE
 */
router.delete('/:id', productosController.remove);

module.exports = router;
