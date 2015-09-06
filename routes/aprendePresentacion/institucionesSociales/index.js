var express = require('express');
var app = module.exports = express();

app.set('views',__dirname + '/views');

app.route('/administracionGobiernoComercio')
.get(function(req, res){
  res.render('administracionGobiernoComercio', {
    title : 'Juguemos con la Señas / Administración, Gobierno y Comercio'
  });
});

app.route('/entornoEducativo')
.get(function(req, res){
  res.render('entornoEducativo', {
    title : 'Juguemos con la Señas / Entorno Educativo'
  });
});

app.route('/religion')
.get(function(req, res){
  res.render('religion', {
    title : 'Juguemos con la Señas / Religión'
  });
});

app.route('/sancionesSocialesVicios')
.get(function(req, res){
  res.render('sancionesSocialesVicios', {
    title : 'Juguemos con la Señas / Sanciones Sociales - Vicios'
  });
});

app.route('/utilesEscolares')
.get(function(req, res){
  res.render('utilesEscolares', {
    title : 'Juguemos con la Señas / Útiles Escolares'
  });
});