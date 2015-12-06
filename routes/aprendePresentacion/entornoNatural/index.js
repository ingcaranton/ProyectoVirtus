var express = require('express');
var app = module.exports = express();

app.set('views',__dirname + '/views');

app.route('/animales')
.get(function(req, res){
  res.render('animales', {
    title : 'Juguemos con la Señas / Animales'
  });
});

app.route('/cualidadesObjetos')
.get(function(req, res){
  res.render('cualidadesObjetos', {
    title : 'Juguemos con la Señas / Cualidades de Objetos'
  });
});

app.route('/geografia')
.get(function(req, res){
  res.render('geografia', {
    title : 'Juguemos con la Señas / Geografía'
  });
});

app.route('/naturaleza')
.get(function(req, res){
  res.render('naturaleza', {
    title : 'Juguemos con la Señas / Naturaleza'
  });
});