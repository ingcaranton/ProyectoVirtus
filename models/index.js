 // models/index.js
if (!global.hasOwnProperty('db')) {
 
  var mongoose = require('mongoose');

  //Prints the current environment variable 
  console.log(process.env.NODE_ENV);

  //Choose the DB according to your environment variable
  if(process.env.NODE_ENV==="development"||process.env.NODE_ENV==null){
    mongoose.connect('mongodb://localhost/juego');
  }

  //Creates a struct with models
  global.db = {
    //models
    partida:require('./partida')(mongoose)
  };
}
 
module.exports = global.db;
