var express = require('express');
var app = module.exports = express();

app.set('views',__dirname + '/views');

app.route('/diasSemana')
.get(function(req, res){
  res.render('diasSemana', {
    title : 'Juguemos con la Señas / Dias de la Semana'
  });
});

app.route('/espacio')
.get(function(req, res){
  res.render('espacio', {
    title : 'Juguemos con la Señas / Espacio'
  });
});

app.route('/expresionesCantidad')
.get(function(req, res){
  res.render('expresionesCantidad', {
    title : 'Juguemos con la Señas / Expresiones de Cantidad'
  });
});

app.route('/expresionesTiempo')
.get(function(req, res){
  res.render('expresionesTiempo', {
    title : 'Juguemos con la Señas / Expresiones de Tiempo'
  });
});

app.route('/inteligencia')
.get(function(req, res){
  res.render('inteligencia', {
    title : 'Juguemos con la Señas / Inteligencia'
  });
});

app.route('/meses')
.get(function(req, res){
  res.render('meses', {
    title : 'Juguemos con la Señas / Meses del Año'
  });
});

app.route('/numeros')
.get(function(req, res){
  res.render('numeros', {
    title : 'Juguemos con la Señas / Números'
  });
});