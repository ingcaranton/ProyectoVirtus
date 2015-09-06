var express = require('express');
var app = module.exports = express();

app.set('views',__dirname + '/views');

app.route('/caracteristicas')
.get(function(req, res){
  res.render('caracteristicas', {
    title : 'Juguemos con la Señas / Características'
  });
});

app.route('/sentimientos')
.get(function(req, res){
  res.render('sentimientos', {
    title : 'Juguemos con la Señas / Sentimientos'
  });
});