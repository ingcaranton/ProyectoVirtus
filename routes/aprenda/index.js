var express = require('express');
var app = module.exports = express();

app.set('views',__dirname + '/views');

app.route('/serHumano')
.get(function(req, res){
  res.render('serHumano', {
    title : 'Juguemos con la Señas / Ser Humano'
  });
});

app.route('/inteligencia')
.get(function(req, res){
  res.render('inteligencia', {
    title : 'Juguemos con la Señas / Inteligencia'
  });
});

app.route('/caracteristicasSentimientos')
.get(function(req, res){
  res.render('caracteristicasSentimientos', {
    title : 'Juguemos con la Señas / Características y Sentimientos'
  });
});

app.route('/familiaRelaciones')
.get(function(req, res){
  res.render('familiaRelaciones', {
    title : 'Juguemos con la Señas / Familia y Relaciones'
  });
});

app.route('/actividades')
.get(function(req, res){
  res.render('actividades', {
    title : 'Juguemos con la Señas / Actividades'
  });
});

app.route('/entornoUrbano')
.get(function(req, res){
  res.render('entornoUrbano', {
    title : 'Juguemos con la Señas / Entorno Urbano'
  });
});

app.route('/institucionesSociales')
.get(function(req, res){
  res.render('institucionesSociales', {
    title : 'Juguemos con la Señas / Instituciones Sociales'
  });
});

app.route('/lenguajeComunicacion')
.get(function(req, res){
  res.render('lenguajeComunicacion', {
    title : 'Juguemos con la Señas / Lenguaje y Comunicación'
  });
});

app.route('/naturaleza')
.get(function(req, res){
  res.render('naturaleza', {
    title : 'Juguemos con la Señas / Naturaleza'
  });
});

app.route('/animales')
.get(function(req, res){
  res.render('animales', {
    title : 'Juguemos con la Señas / Animales'
  });
});

app.route('/geografia')
.get(function(req, res){
  res.render('geografia', {
    title : 'Juguemos con la Señas / Geografía'
  });
});

app.route('/cualidadesObjetos')
.get(function(req, res){
  res.render('cualidadesObjetos', {
    title : 'Juguemos con la Señas / Cualidades de Objetos'
  });
});