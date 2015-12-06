var express = require('express');
var app = module.exports = express();

app.set('views',__dirname + '/views');

app.route('/familia')
.get(function(req, res){
  res.render('familia', {
    title : 'Juguemos con la Señas / Familia'
  });
});

app.route('/relacionesPersonales')
.get(function(req, res){
  res.render('relacionesPersonales', {
    title : 'Juguemos con la Señas / Relaciones Personales'
  });
});