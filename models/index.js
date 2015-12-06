 // models/index.js
if (!global.hasOwnProperty('db')) {
 
  var mongoose = require('mongoose');

  //Prints the current environment variable 
  console.log(process.env.NODE_ENV);

  //Choose the DB according to your environment variable
  if(process.env.NODE_ENV==="production"){
    mongoose.connect('mongodb://arley:arley@ds045521.mongolab.com:45521/juego');
  }
  if(process.env.NODE_ENV==="test"){
    mongoose.connect('mongodb://localhost/juego');
  }
  if(process.env.NODE_ENV==="development"||process.env.NODE_ENV==null){
    mongoose.connect('mongodb://localhost/juego');
  }

  //Creates a struct with models
  global.db = {
    //models
    pregunta:require('./pregunta')(mongoose),
    juego:require('./juego')(mongoose),
    juegoPregunta:require('./juegoPregunta')(mongoose)
  };
}
 
module.exports = global.db;
