var express = require('express');
var app = module.exports = express();

app.set('views',__dirname + '/views');

app.route('/')
.get(function(req, res){
  res.render('index', {
    title : 'Juguemos con la Señas'
  });
});

app.route('/informate')
.get(function(req, res){
  res.render('informate', {
    title : 'Juguemos con la Señas / Infórmate'
  });
});

app.route('/juega')
.get(function(req, res){
  res.render('juega', {
    title : 'Juguemos con la Señas / Juega'
  });
});

app.route('/contactanos')
.get(function(req, res){
  res.render('contactanos', {
    title : 'Juguemos con la Señas / Contactanos'
  });
});
