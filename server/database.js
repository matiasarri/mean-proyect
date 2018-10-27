const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mean-crud'; //si no existe crea la base mean-crud

mongoose.connect(URI, { useNewUrlParser: true })
        .then(db => {console.log('DB is connected')}) //cuando se conecta, podemos obtener info de la db
        .catch(err => {console.log(err)}); //si hay error, lo muestro

module.export = mongoose; //exporto la coneccion
