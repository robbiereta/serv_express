const orden_posModel = require('../models/orden_posModel.js');

/**
 * orden_posController.js
 *
 * @description :: Server-side logic for managing orden_poss.
 */
module.exports = {

  /**
   * orden_posController.list()
   */
  list: (req, res) => {
    orden_posModel.find(req.query.where, req.query.fields, req.query.sort, (err, orden_poss) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting orden_pos.',
          error: err
        });
      }
      return res.json(orden_poss);
    });
  },

  /**
   * orden_posController.show()
   */
  show: (req, res) => {
    let id = req.params.id;
    orden_posModel.findOne({_id: id}, (err, orden_pos) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting orden_pos.',
          error: err
        });
      }
      if (!orden_pos) {
        return res.status(404).json({
          message: 'No such orden_pos'
        });
      }
      return res.json(orden_pos);
    });
  },

  /**
   * orden_posController.create()
   */
  create: (req, res) => {
    let orden_pos = new orden_posModel({			id : req.body.id,			nombre_cliente : req.body.nombre_cliente,			telefono : req.body.telefono,			lineas_orden : req.body.lineas_orden
    });

    orden_pos.save((err, orden_pos) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating orden_pos',
          error: err
        });
      }
      return res.status(201).json(orden_pos);
    });
  },

  /**
   * orden_posController.update()
   */
  update: (req, res) => {
    let id = req.params.id;
    orden_posModel.findOne({_id: id}, (err, orden_pos) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting orden_pos',
          error: err
        });
      }
      if (!orden_pos) {
        return res.status(404).json({
          message: 'No such orden_pos'
        });
      }

      orden_pos.id = req.body.id ? req.body.id : orden_pos.id;			orden_pos.nombre_cliente = req.body.nombre_cliente ? req.body.nombre_cliente : orden_pos.nombre_cliente;			orden_pos.telefono = req.body.telefono ? req.body.telefono : orden_pos.telefono;			orden_pos.lineas_orden = req.body.lineas_orden ? req.body.lineas_orden : orden_pos.lineas_orden;			
      orden_pos.save( (err, orden_pos) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating orden_pos.',
            error: err
          });
        }

        return res.json(orden_pos);
      });
    });
  },

  /**
   * orden_posController.remove()
   */
  remove: (req, res) => {
    let id = req.params.id;
    orden_posModel.findByIdAndRemove(id, (err, orden_pos) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the orden_pos.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
