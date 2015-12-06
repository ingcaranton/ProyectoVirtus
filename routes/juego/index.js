var express = require('express');
var app = module.exports = express();

app.set('views',__dirname + '/views');

app.route('/')
.get(function(req, res){
  res.render('juego', {
    title : 'Juguemos con la Señas / Juega'
  });
});
