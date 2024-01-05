const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const fields = {	'id' : Number,	'nombre_cliente' : String,	'telefono' : Number,	'lineas_orden' : Array}

let orden_posSchema = new Schema(fields);

module.exports = mongoose.model('orden_pos', orden_posSchema);
