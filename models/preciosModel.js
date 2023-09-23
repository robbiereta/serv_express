 const mongoose = require('mongoose');
 
 const preciosSchema = new mongoose.Schema({
        c: Number,
        e: Number,
        "CODIGO": 79191217672,
  "PRODUCTO": "ACEITE CASTROL 20W-50 S-S-",
  "CANTIDAD": 6,
  "P": {
    " VENTA": 195
  },
  "IMPORTE": 1170,
  "UBICACION": "A2",
  "CODIGOSAT": 15121500
     });
 
 const Precios = mongoose.model('existencias', preciosSchema)
 
 module.exports = Precios