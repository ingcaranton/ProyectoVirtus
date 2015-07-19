var express = require('express');
var app = module.exports = express();

app.set('views',__dirname + '/views');

app.route('/')
.get(function(req, res){
  res.render('index', {
    title : 'Juguemos con la Señas'
  });
});

app.route('/quienesSomos')
.get(function(req, res){
  res.render('quienesSomos', {
    title : 'Juguemos con la Señas / Quienes somos'
  });
});

app.route('/practiquemos')
.get(function(req, res){
  res.render('practiquemos', {
    title : 'Juguemos con la Señas / Practiquemos'
  });
});

app.route('/juguemos')
.get(function(req, res){
  res.render('juguemos', {
    title : 'Juguemos con la Señas / Juguemos'
  });
});

app.route('/contactanos')
.get(function(req, res){
  res.render('contactanos', {
    title : 'Juguemos con la Señas / Contactanos'
  });
});
