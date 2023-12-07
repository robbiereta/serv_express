 const mongoose = require('mongoose'); // Erase if already required
 
 // Declare the Schema of the Mongo model
 var ordenSchema = new mongoose.Schema(
    
    {
        id_orden:{
          type:Number,
          required:true,
          unique:true,
          index:true
        },
     nombre_cliente:{
         type:String,
         required:true,
     },
     telefono:{
         type:Number,
         required:true,
     },
     lineas_orden:{
         type:Array,
         required:true
     }
 });
 
 //Export the model
 module.exports = mongoose.model('Orden', ordenSchema);