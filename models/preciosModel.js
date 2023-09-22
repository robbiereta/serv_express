 const mongoose = require('mongoose');
 
 const preciosSchema = new mongoose.Schema({
        c: Number,
        e: Number,
     });
 
 const Precios = mongoose.model('precios', preciosSchema)
 
 module.exports = Precios