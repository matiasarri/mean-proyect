//RESP API
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/employee.controller');

router.get('/', ctrl.getEmployees); //metodo get Obtiene datos
router.post('/', ctrl.createEmployees); //metodo port Guarda datos
router.put('/:id', ctrl.editEmployee); //metodo put para actualizar 
router.delete('/:id', ctrl.deleteEmployee); //metodo delete para borrar
router.get('/:id', ctrl.getEmployee); 

module.exports = router;