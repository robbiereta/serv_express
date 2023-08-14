 const mongoose = require('mongoose');
 
 const ordenModelSchema = new mongoose.Schema({
     key: {type:String},
 },{
     timestamps: true,
 });
 
 const OrdenModel = mongoose.model('ordenModel', ordenModelSchema)
 
 module.exports = OrdenModel