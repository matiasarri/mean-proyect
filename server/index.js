const express = require('express');
const morgan = require('morgan');
const app = express();

//Settings
app.set('port',process.env.PORT || 3000);

//Meaddle Wares
app.use(morgan('dev'));
app.use(express.json()); //este metodo permite convertir el codigo de formato json del navegador para que el server pueda entenderlo req.body

//Roters
app.get('/',(req, res, next) => {
    res.send('HOLA');
})

//Start Server
app.listen(app.get('port'), () =>{
    console.log('Server UP! Listening in port ' + app.get('port'));
});