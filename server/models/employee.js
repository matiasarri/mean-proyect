//modelado de datos
const mongoose = require('mongoose');
const { Schema } = mongoose; //solo quiero los schemas, su manera de definir esquemas

//Creo un esquema
const EmployeeSchema = new Schema({
    name: { type: String, required: true},
    posicion: {type: String, required:true},
    office: {type: String, required: true},
    salary: {type: Number, required: true}
});

//De esta manera le digo a mongo db que así van a ser mis empleados.
//'Employee' es el nombre de como será gruardado en la base de datos
module.exports= mongoose.model('Employee',EmployeeSchema);