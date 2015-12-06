var express = require('express');
var app = module.exports = express();

app.set('views',__dirname + '/views');

app.route('/accionesDistracciones')
.get(function(req, res){
  res.render('accionesDistracciones', {
    title : 'Juguemos con la Señas / Acciones y Distracciones'
  });
});

app.route('/deportes')
.get(function(req, res){
  res.render('deportes', {
    title : 'Juguemos con la Señas / Deportes'
  });
});

app.route('/musica')
.get(function(req, res){
  res.render('musica', {
    title : 'Juguemos con la Señas / Música'
  });
});

app.route('/profesionesOficios')
.get(function(req, res){
  res.render('profesionesOficios', {
    title : 'Juguemos con la Señas / Profesiones u Oficios'
  });
});