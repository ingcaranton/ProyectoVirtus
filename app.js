var express = require('express');
var app = express();

//modules
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

var flash = require('connect-flash');


var pagina = require('./routes/pagina');
var aprende = require('./routes/aprende');
var actividades = require('./routes/aprendePresentacion/actividades');
var caracteristicasSentimientos = require('./routes/aprendePresentacion/caracteristicasSentimientos');
var entornoNatural = require('./routes/aprendePresentacion/entornoNatural');
var entornoUrbano = require('./routes/aprendePresentacion/entornoUrbano');
var familiaRelaciones = require('./routes/aprendePresentacion/familiaRelaciones');
var institucionesSociales = require('./routes/aprendePresentacion/institucionesSociales');
var inteligencia = require('./routes/aprendePresentacion/inteligencia');
var lenguajeComunicacion = require('./routes/aprendePresentacion/lenguajeComunicacion');
var serHumano = require('./routes/aprendePresentacion/serHumano');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(favicon(__dirname + '/public/images/logo.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '200mb' }));
app.use(bodyParser.json({limit: '200mb'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', pagina);
app.use('/aprende', aprende);
app.use('/actividades', actividades);
app.use('/caracteristicasSentimientos', caracteristicasSentimientos);
app.use('/entornoNatural', entornoNatural);
app.use('/entornoUrbano', entornoUrbano);
app.use('/familiaRelaciones', familiaRelaciones);
app.use('/institucionesSociales', institucionesSociales);
app.use('/inteligencia', inteligencia);
app.use('/lenguajeComunicacion', lenguajeComunicacion);
app.use('/serHumano', serHumano);

//Sesiones y cokies
app.use(cookieParser());
app.use(session({secret: '1234567'}));
app.use(flash());  

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;