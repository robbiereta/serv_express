 const mongoose = require('mongoose');
 
 const preciosSchema = new mongoose.Schema({
      codigo: String,
      producto: String,
      precio_venta: Number
     });
 
 const Precios = mongoose.model('precios', preciosSchema)
 
 module.exports = Precios