var express = require('express');
var app = module.exports = express();

app.set('views',__dirname + '/views');

app.route('/ciudad')
.get(function(req, res){
  res.render('ciudad', {
    title : 'Juguemos con la Señas / Ciudad'
  });
});

app.route('/hogarVivienda')
.get(function(req, res){
  res.render('hogarVivienda', {
    title : 'Juguemos con la Señas / Hogar - Vivienda'
  });
});

app.route('/tecnologia')
.get(function(req, res){
  res.render('tecnologia', {
    title : 'Juguemos con la Señas / Tecnología'
  });
});

app.route('/transporte')
.get(function(req, res){
  res.render('transporte', {
    title : 'Juguemos con la Señas / Transporte'
  });
});