var express = require('express');
var app = module.exports = express();

app.set('views',__dirname + '/views');

app.route('/aseoPersonal')
.get(function(req, res){
  res.render('aseoPersonal', {
    title : 'Juguemos con la Señas / Aseo Personal'
  });
});

app.route('/comidasBebidas')
.get(function(req, res){
  res.render('comidasBebidas', {
    title : 'Juguemos con la Señas / Comidas y Bebidas'
  });
});

app.route('/cuerpoHumano')
.get(function(req, res){
  res.render('cuerpoHumano', {
    title : 'Juguemos con la Señas / Cuerpo Humano'
  });
});

app.route('/fisiologia')
.get(function(req, res){
  res.render('fisiologia', {
    title : 'Juguemos con la Señas / Fisiología'
  });
});

app.route('/frutasVerduras')
.get(function(req, res){
  res.render('frutasVerduras', {
    title : 'Juguemos con la Señas / Frutas y Verduras'
  });
});

app.route('/salud')
.get(function(req, res){
  res.render('salud', {
    title : 'Juguemos con la Señas / Salud'
  });
});

app.route('/serHumano')
.get(function(req, res){
  res.render('serHumano', {
    title : 'Juguemos con la Señas / Ser Humano'
  });
});

app.route('/vestuario')
.get(function(req, res){
  res.render('vestuario', {
    title : 'Juguemos con la Señas / Vestuario'
  });
});