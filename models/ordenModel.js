 const mongoose = require('mongoose');
 
 const ordenSchema = new mongoose.Schema({
     lineasOrden: [{
        anio: Number,
        moto: String,
        producto: String,
        color: String}],
        
        telefono: Number,
    nombreCliente: String,
     });
 
 const Orden = mongoose.model('orden', ordenSchema)
 
 module.exports = Orden