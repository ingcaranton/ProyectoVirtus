var express = require('express');
var app = module.exports = express();

var nodemailer = require('nodemailer');

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

app.route('/correo')
.post(function(req,res){
  var smtpTransport = nodemailer.createTransport("SMTP",{
      service: "Gmail",
    auth: {
      user: "xvcadenad@correo.udistrital.edu.co",
      pass: "1019068414"
    }
  });
  var mailOptions = {
    from: "Juguemos con las Señas<xvcadenad@correo.udistrital.edu.co>", // sender address
    to: "<vicadi7@gmail.com>", // list of receivers
    subject: "Contaco Juguemos con las señas", // Subject line
    text: "Nombre: "+req.body.nombre+"\nApellido: "+req.body.apellido+"\nMail: "+req.body.email+
      "\nTelefono: "+req.body.telefono+"\nComentario: "+req.body.comentario
  }
  smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
        //req.flash('message', 'Error al enviar correo vuelve a intentarlo por favor');
        res.redirect('/contactanos');
      }else{
        //req.flash('message', 'Mensaje enviado, gracias por contactarnos, espera nuestra respuesta');
        res.redirect('/');
      }
  }); 
});