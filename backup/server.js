
/**
 * Module dependencies
 */
var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('error-handler'),
  morgan = require('morgan'),
  routes = require('./routes'),
  passport = require('passport'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path'),
  session = require('express-session'),
  flash = require('connect-flash');

require('./models/passport')(passport);
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
*Login stuffs
*/
//app.use(express.cookieParser());
app.use(session({secret:'ireallyhatevegans',saveUninitialized: true, resave: true})); // session secret

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()){    
    return next();
  }
  // if they aren't redirect them to the home page
  res.redirect('/');
};

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
app.get('/api/cargos', api.cargos);

// Escuelas
app.get('/api/escuelas', api.escuelas);
app.post('/api/escuela', api.addEscuela);
app.get('/api/escuela', api.escuela);
app.get('/api/escuela/:id', api.escuela);
app.get('/api/escuela/:id', api.escuelaCurso);
app.post('/api/escuela/:id', api.escuela);
app.put('/api/escuela/:id', api.editEscuela);
app.delete('/api/escuela/:id', api.deleteEscuela);

//Libros
app.get('/api/libros', api.libros);
app.get('/api/libro', api.libro);
app.get('/api/libro/:id', api.libro);
app.post('/api/libro', api.addLibro);
app.put('/api/libro/:id', api.editLibro);
app.delete('/api/libro/:id', api.deleteLibro);

//Colecciones
app.get('/api/colecciones', api.colecciones);
app.get('/api/coleccion', api.coleccion);
app.get('/api/coleccion/:id', api.coleccion);
app.post('/api/coleccion', api.addColeccion);
app.put('/api/coleccion/:id', api.editColeccion);
app.delete('/api/coleccion/:id', api.deleteColeccion);

// Provincias y Localidades
app.get('/api/provincias', api.provincias);
app.get('/api/provincia/:id', api.provincia);
app.get('/api/localidades/:id', api.localidades);
app.get('/api/localidad/:id', api.localidad);

// Grados Turnos Ciclos
app.get('/api/grados', api.grados);
app.get('/api/grado/:id', api.grado);
app.get('/api/turnos', api.turnos);
app.get('/api/turno/:id', api.turno);
app.get('/api/ciclos', api.ciclos);
app.get('/api/ciclo/:id', api.ciclo);
app.get('/api/grados/:id', api.gradosCiclos);


app.get('/api/gradosTurnos/:id', api.gradosTurnosPorEscuela);
app.post('/api/escuelaCiclo/:data', api.escuelaCiclo);
app.get('/api/gradosTurnos', api.gradosTurnos);
app.get('/api/docentesEscuelas', api.docentesEscuelas);

// LibroDocentes
app.post('/api/libroDocente/',api.libroDocente);
//app.delete('/api/libroDocente/:id',api.deleteLibroDocente);

app.get('*', routes.index);

//LOGIN
app.get('/api/login', api.login);
app.get('/api/test', isLoggedIn, api.test);
app.post('/api/auth', passport.authenticate(
                        'local-login',{
                          successRedirect:'/api/test',
                          failureRedirect:'/api/login',
                          failureFlash : true
                        }), api.authentication);
app.post('/api/docenteGrado/:data', api.docenteGrado);
// redirect all others to the index (HTML5 history)


/**
 * Start Server
 */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
