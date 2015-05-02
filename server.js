
/**
 * Module dependencies
 */
var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('error-handler'),
  morgan = require('morgan'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path');

var app = express();

app.engine('html', require('ejs').renderFile);

/**
 * Configuration
 */
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

/**
 * Routes
 */
// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
// Docentes
app.get('/api/docentes', api.docentes);
app.post('/api/docente', api.addDocente);
app.get('/api/docente', api.docente);
app.get('/api/docente/:id', api.docente);
app.post('/api/docente/:id', api.docente);
app.put('/api/docente/:id', api.editDocente);
app.delete('/api/docente/:id', api.deleteDocente);
// Escuelas
app.get('/api/escuelas', api.escuelas);
app.post('/api/escuela', api.addEscuela);
app.get('/api/escuela', api.escuela);
app.get('/api/escuela/:id', api.escuela);
app.post('/api/escuela/:id', api.escuela);
app.put('/api/escuela/:id', api.editEscuela);
app.delete('/api/escuela/:id', api.deleteEscuela);

// Provincias y Localidades
app.get('/api/provincias', api.provincias);
app.get('/api/provincia/:id', api.provincia);
app.get('/api/localidades/:id', api.localidades);
app.get('/api/localidad/:id', api.localidad);


// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

/**
 * Start Server
 */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
