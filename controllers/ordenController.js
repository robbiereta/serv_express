
var orden = require('../models/ordenModel');
//*********************************************************************************************************
//* Explanation 
//*********************************************************************************************************
 async function all(req, res, next) {
  const doc = await orden.find({});
  
  res.send( doc );
}

  async function findOneById(req, res, next) {
    const doc = await orden.findById(req.params.id);
    res.send(doc);
  }

//*********************************************************************************************************
//* Explanation
//*********************************************************************************************************
 async function createOrden(req, res, next) {
    const doc= new orden()
    doc.id_orden=req.body.id_orden
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
  const doc= await orden.findByIdAndUpdate(req.params.id, req.body)
  res.send(doc)
}

//*********************************************************************************************************
//* Explanation
//*********************************************************************************************************
 async function deleteOrden(req, res, next) {
const doc= await orden.findByIdAndDelete(req.params.id)
res.send(doc)

}

module.exports = {
  all,
  findOneById,
  createOrden,
  updateOrden,
  deleteOrden
}