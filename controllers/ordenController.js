
var orden = require('../models/ordenModel');
//*********************************************************************************************************
//* Explanation 
//*********************************************************************************************************
 async function all(req, res, next) {
  const doc = await orden.find({});
  
  res.send( doc );
}

//*********************************************************************************************************
//* Explanation
//*********************************************************************************************************
 async function createOrden(req, res, next) {
    const doc= new orden()
    doc.nombre_cliente=req.body.nombre_cliente
    doc.telefono=req.body.telefono
    doc.lineas_orden=req.body.lineas_orden
  await doc.save()
  res.send(doc)
  

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