
var existencias = require('../models/preciosModel');
//*********************************************************************************************************
//* Explanation 
//*********************************************************************************************************
 async function all(req, res, next) {
  
    const lista= await existencias.find({});
   existencias.aggregate([{
$lookup:{
From:'exportarProds',
LocalField:'c',
ForeignField:'Codigo',
as:'existencias'
}
   }])


    res.send(lista)
}

//*********************************************************************************************************
//* Explanation
//*********************************************************************************************************
 async function createOrden(req, res, next) {
    const doc= new orden()
    doc.lineasOrden=req.body.lineasOrden
    doc.telefono=req.body.telefono
    doc.nombreCliente=req.body.nombreCliente
  await doc.save()
  

}

//*********************************************************************************************************
//* Explanation 
//*********************************************************************************************************
async function updateOrden(req, res, next) {


}

//*********************************************************************************************************
//* Explanation
//*********************************************************************************************************
 async function deleteOrden(req, res, next) {


}

module.exports = {
  all,
  createOrden,
  updateOrden,
  deleteOrden
}