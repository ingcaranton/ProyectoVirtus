var express = require('express');
var app = module.exports = express();

app.set('views',__dirname + '/views');

app.route('/calificar')
.get(function(req, res){
  res.render('calificar', {
    title : 'Juguemos con la Señas / Calificar'
  });
});

app.route('/comunicacionAfines')
.get(function(req, res){
  res.render('comunicacionAfines', {
    title : 'Juguemos con la Señas / Comunicación y Afines'
  });
});

app.route('/culturaSorda')
.get(function(req, res){
  res.render('culturaSorda', {
    title : 'Juguemos con la Señas / Cultura Sorda'
  });
});

app.route('/formulasCortesia')
.get(function(req, res){
  res.render('formulasCortesia', {
    title : 'Juguemos con la Señas / Formulas de Cortesía'
  });
});

app.route('/interrogar')
.get(function(req, res){
  res.render('interrogar', {
    title : 'Juguemos con la Señas / Interrogar'
  });
});