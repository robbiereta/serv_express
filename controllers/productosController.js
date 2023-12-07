var ProductosModel = require('../models/productosModel.js');

/**
 * productosController.js
 *
 * @description :: Server-side logic for managing productoss.
 */
module.exports = {

    /**
     * productosController.list()
     */
    list: function (req, res) {
        ProductosModel.find(function (err, productoss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting productos.',
                    error: err
                });
            }

            return res.json(productoss);
        });
    },

    /**
     * productosController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ProductosModel.findOne({_id: id}, function (err, productos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting productos.',
                    error: err
                });
            }

            if (!productos) {
                return res.status(404).json({
                    message: 'No such productos'
                });
            }

            return res.json(productos);
        });
    },

    /**
     * productosController.create()
     */
    create: function (req, res) {
        var productos = new ProductosModel({
			id_prod : req.body.id_prod,
			codigo : req.body.codigo,
			descripcion : req.body.descripcion,
			precio : req.body.precio
        });

        productos.save(function (err, productos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating productos',
                    error: err
                });
            }

            return res.status(201).json(productos);
        });
    },

    /**
     * productosController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ProductosModel.findOne({_id: id}, function (err, productos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting productos',
                    error: err
                });
            }

            if (!productos) {
                return res.status(404).json({
                    message: 'No such productos'
                });
            }

            productos.id_prod = req.body.id_prod ? req.body.id_prod : productos.id_prod;
			productos.codigo = req.body.codigo ? req.body.codigo : productos.codigo;
			productos.descripcion = req.body.descripcion ? req.body.descripcion : productos.descripcion;
			productos.precio = req.body.precio ? req.body.precio : productos.precio;
			
            productos.save(function (err, productos) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating productos.',
                        error: err
                    });
                }

                return res.json(productos);
            });
        });
    },

    /**
     * productosController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ProductosModel.findByIdAndRemove(id, function (err, productos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the productos.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
