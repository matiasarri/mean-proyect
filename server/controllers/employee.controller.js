//Los controladores permiten guardar o definir metodos y metodos 
//para poder reutilizarlos en las rutas (Routers) en vez de definirlo en la misma ruta como:
// router.get('/', (req, res) => {
//     res.json({
//         status: 'Resp API'
//     }
//     );
// });


const Employee= require('../models/employee');
const employeeCtrlr ={}; // lo defino como un bojeto vacio y le agrego los metodos que quiera de la siguiente forma
//employeeCtrlr.createEmployees =  function {
//};

employeeCtrlr.getEmployees = async (req, res) => {
    //async y await es para trabajar de manera asincronica
    const employees = await Employee.find();
    res.json(employees);
};

employeeCtrlr.createEmployees = async (req, res) => {
    //console.log(req.body);
    const employee = new Employee(req.body);
    //console.log(employee);
    await employee.save();
    res.json({'status': 'Empleado guardado correctamente'});

};

employeeCtrlr.getEmployee = async (req, res) => {
    // console.log(req.params.id);
    const employee = await Employee.findById(req.params.id);
    res.json({ employee });
};

employeeCtrlr.editEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        posicion: req.body.posicion,
        office: req.body.office,
        salary: req.body.salary,
    }
    //envio el id para encontrar en empleado
    //envio los datos con los que quiero actualizarlo
    //envio un objeto que indica que si no existe, lo cree
    await Employee.findByIdAndUpdate(id,{$set: employee}, {new:true});
    res.json({ 'status':'Empledado modificado' });
};

employeeCtrlr.deleteEmployee =  async (req, res) => {
    const { id } = req.params;
    const { name } = req.params;
    await Employee.findByIdAndRemove(id);
    res.json({ 'status':'Empledado Eliminado' });
};

module.exports=employeeCtrlr;