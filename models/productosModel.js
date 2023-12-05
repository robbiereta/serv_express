var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var productosSchema = new Schema({
	'id_prod' : Number,
	'codigo' : String,
	'descripcion' : String,
	'precio' : Number
});

module.exports = mongoose.model('productos', productosSchema);
