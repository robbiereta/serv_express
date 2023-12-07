var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var tallerSchema = new Schema({
	'id_Orden_Taller' : Number,
	'fecha' : String,
	'cliente' : String
});

module.exports = mongoose.model('taller', tallerSchema);
