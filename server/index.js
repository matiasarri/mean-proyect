const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); //permite enlazar el servidor del front-end con el del API REST
const app = express();


const { mongoose } = require('./database'); //de este archivo, solo quiero la conxion

//Settings
app.set('port',process.env.PORT || 3000);
app.set('frontEnd-port','http://localhost:4200');

//Meaddle Wares
app.use(morgan('dev'));
app.use(express.json()); //este metodo permite convertir el codigo de formato json del navegador para que el server pueda entenderlo req.body
app.use(cors({origin: app.get('frontEnd-port')}));

//Roters
app.use('/api/employes',require('./routes/employee.routers')); //utiliza lo que voy a requerir del archivo ('./routes/employee.routers')
app.get('/',(req, res, next) => {
    res.send('HOLA');
})

//Start Server
app.listen(app.get('port'), () =>{
    console.log('Server UP! Listening in port ' + app.get('port'));
});