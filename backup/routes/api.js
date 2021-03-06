var Teacher = require('../models/docente');
var DocenteModel = new Teacher();

var School = require('../models/escuela');
var EscuelaModel = new School();

var State = require('../models/provincia');
var ProvinciaModel = new State();

var City = require('../models/localidad');
var LocalidadModel = new City();

var SchoolYear = require('../models/escuela_ciclo');
var EscuelaCicloModel = new SchoolYear();

var Book = require('../models/libro');
var LibroModel = new Book();

var BookTeacher = require('../models/libro_persona');
var bookTeacher = new BookTeacher();

var _ = require('underscore');

exports.libros = function (req, res){
  data = LibroModel.getLibros(function(error, data){
      res.json(200,data);
    });
};

exports.libro = function (req, res) {
  var id = req.params.id;
  data = LibroModel.getLibro(id,function(error, data){    
    if (typeof data !== 'undefined' && data.length > 0){
      res.json(200,data);
    }    
    else{
      res.json(404,{"msg":"notExist"});
    }
  });
};
// POST
exports.addLibro = function (req, res) {
  //var id = req.params.id;
  var datos = {
        isbn:req.param('isbn'),
        titulo:req.param('titulo'),
        id_col:req.param('id_col'),
        paginas:req.param('paginas'),
        peso: req.param('peso'),
        precio: req.param('precio'),
        autores: req.param('autores'),
        formato: req.param('formato')
  }
  LibroModel.insertLibro(datos,function(error, data){      
      if(data && data.insertId){
        res.redirect("/api/libro/" + data.insertId);
      }
      else{
        res.json(500,{"msg":"Error"});
      }
    });
};

exports.editLibro= function (req, res) { 
  var data = {
              isbn:req.param('isbn'),
              titulo:req.param('titulo'),
              id_col:req.param('id_col'),
              paginas:req.param('paginas'),
              peso: req.param('peso'),
              precio: req.param('precio'),
              autores: req.param('autores'),
              formato: req.param('formato')
            }
    LibroModel.updateLibro(data,function(error, data){    
      if(data && data.msg){
        res.json(200,data);
      }
      else{
        res.json(500,{"msg":"Error"});
      }
    });
};

exports.deleteLibro = function (req, res) {
  var id = req.params.id;
  LibroModel.deleteLibro(id,function(error, data){
      if(data && data.msg === "deleted" || data.msg === "notExist"){
        res.json(200,data);
      }
      else{
        res.json(500,{"msg":"Error"});
      }
    });
};

exports.colecciones = function (req, res){
  data = LibroModel.getColecciones(function(error, data){
      res.json(200,data);
    });
};

exports.coleccion = function (req, res) {
  var id = req.params.id;
  data = LibroModel.getColeccion(id,function(error, data){    
    if (typeof data !== 'undefined' && data.length > 0){
      res.json(200,data);
    }    
    else{
      res.json(404,{"msg":"notExist"});
    }
  });
};
// POST
exports.addColeccion = function (req, res) {
  //var id = req.params.id;
  var datos = {
        id_coleccion:req.param('id_coleccion'),
        descripcion:req.param('descripcion')
  }
  LibroModel.insertColeccion(datos,function(error, data){      
      if(data){
        res.json(200,data);
      }
      else{
        res.json(500,{"msg":"Error"});
      }
    });
};

exports.editColeccion= function (req, res) { 
  var data = {
              id:req.param('id'),
              descripcion:req.param('descripcion')
            }
    LibroModel.updateColeccion(data,function(error, data){    
      if(data && data.msg){
        res.json(200,data);
      }
      else{
        res.json(500,{"msg":"Error"});
      }
    });
};

exports.deleteColeccion = function (req, res) {
  var id = req.params.id;
  LibroModel.deleteColecciones(id,function(error, data){
      if(data && data.msg === "deleted" || data.msg === "notExist"){
        res.json(200,data);
      }
      else{
        res.json(500,{"msg":"Error"});
      }
    });
};

exports.docentes = function (req, res) {
  data = DocenteModel.getPersonas(function(error, data){
  		res.json(200,data);
  	});
};

exports.docente = function (req, res) {
  var id = req.params.id;
  data = DocenteModel.getPersona(id,function(error, data){    
    if (typeof data !== 'undefined' && data.length > 0){
      res.json(200,data);
    }    
    else{
      res.json(404,{"msg":"notExist"});
    }
  });
};
exports.addDocente = function (req, res) {
  var id = req.params.id;
  var datos = {
              dni:req.param('id'),
              tipo_dni: req.param('tipo_dni'),
              nombre:req.param('nombre'),
              apellido:req.param('apellido'),
              direccion: req.param('direccion'),
              ciudad: req.param('ciudad'),
              provincia: req.param('provincia'),
              cp: req.param('cp'),
              email: req.param('email'),
              telefono: req.param('telefono')
            }
  DocenteModel.insertPersona(datos,function(error, data){      
      if(data && data.insertId){
        res.redirect("/api/docente/" + data.insertId);
      }
      else{
        res.json(500,{"msg":"Error"});
      }
    });
};

exports.editDocente = function (req, res) {  
  var data = {
              id:req.param('id'),
              tipo_dni: req.param('tipo_dni'),
              nombre:req.param('nombre'),
              apellido:req.param('apellido'),
              fechaNacimiento: req.param('fechaNac'),
              direccion: req.param('direccion'),
              ciudad: req.param('ciudad'),
              id_provincia: req.param('id_provincia'),
              cp: req.param('cp'),
              email: req.param('email'),
              telefono: req.param('telefono')
            }
    DocenteModel.updatePersona(data,function(error, data){      
      if(data && data.msg){
        res.json(200,data);
      }
      else{
        res.json(500,{"msg":"Error"});
      }
    });
};

exports.deleteDocente = function (req, res) {
  var id = req.params.id;

  DocenteModel.deletePersona(id,function(error, data){
      if(data && data.msg === "deleted" || data.msg === "notExist"){
        res.json(200,data);
      }
      else{
        res.json(500,{"msg":"Error"});
      }
    });
};

exports.escuelas = function (req, res){
  data = EscuelaModel.getEscuelas(function(error, data){
      res.json(200,data);
    });
};

exports.escuela = function (req, res) {
  var id = req.params.id;
  data = EscuelaModel.getEscuela(id,function(error, data){    
    if (typeof data !== 'undefined' && data.length > 0){
      res.json(200,data);
    }    
    else{
      res.json(404,{"msg":"notExist"});
    }
  });
};

exports.addEscuela = function (req, res) {
  //var id = req.params.id;
  var datos = {
        id:req.param('id'),
        nombre:req.param('nombre'),
        telefono:req.param('telefono'),
        email:req.param('email'),
        domicilio: req.param('domicilio'),
        localidad: req.param('localidad'),
        cp: req.param('cp'),
        sector: req.param('sector'),
        distrito: req.param('distrito'),
        ubicacion: req.param('ubicacion'),
        provincia: req.param('provincia'),
        observaciones: req.param('observaciones')
  }
  EscuelaModel.insertEscuela(datos,function(error, data){      
      if(data && data.insertId){
        res.redirect("/api/escuela/" + data.insertId);
      }
      else{
        res.json(500,{"msg":"Error"});
      }
    });
};

exports.editEscuela = function (req, res) { 
  var data = {
              id:req.param('id'),
              nombre:req.param('nombre'),
              telefono:req.param('telefono'),
              email:req.param('email'),
              domicilio: req.param('domicilio'),
              localidad: req.param('id_localidad'),
              cp: req.param('cp'),
              sector: req.param('sector'),
              distrito: req.param('distrito'),
              ubicacion: req.param('ubicacion'),
              provincia: req.param('id_provincia'),
              observaciones: req.param('observaciones')
            }
    EscuelaModel.updateEscuela(data,function(error, data){    
      if(data && data.msg){
        res.json(200,data);
      }
      else{
        res.json(500,{"msg":"Error"});
      }
    });
};

exports.deleteEscuela = function (req, res) {
  var id = req.params.id;  
  EscuelaModel.deleteEscuelas(id,function(error, data){
      if(data && data.msg === "deleted" || data.msg === "notExist"){
        res.json(200,data);
      }
      else{
        res.json(500,{"msg":"Error"});
      }
    });
};

exports.provincias = function (req, res){
  data = ProvinciaModel.getStates(function(error, data){
      res.json(200,data);
    });
};

exports.provincia = function (req, res) {
  var id = req.params.id;
  data = ProvinciaModel.getState(id,function(error, data){    
    if (typeof data !== 'undefined' && data.length > 0){
      res.json(200,data);
    }    
    else{
      res.json(404,{"msg":"notExist"});
    }
  });
};
exports.localidades = function (req, res){
  var id_provincia = req.params.id;
  data = LocalidadModel.getCities(id_provincia,function(error, data){
      res.json(200,data);
    });
};

exports.localidad = function (req, res) {
  var id = req.params.localidad;
  data = LocalidadModel.getCity(id,function(error, data){    
    if (typeof data !== 'undefined' && data.length > 0){
      res.json(200,data);
    }    
    else{
      res.json(404,{"msg":"notExist"});
    }
  });
};

exports.escuelaCurso = function(req,res){
  //var school_id = req.param.school;
  var school_id = 5;
  data = EscuelaModel.getSchoolCourseByYear(school_id,function(error,data){
      if(typeof data !== 'undefined' && data.length > 0){
        res.json(200,data);
      }else{
        res.json(404,{'msg':'something went wrong'});
      }
  });
};

exports.grados = function (req, res){
  data = EscuelaCicloModel.getGrados(function(error, data){
      res.json(200,data);
    });
};

exports.grado = function (req, res) {
  var id = req.params.id;
  data = EscuelaCicloModel.getGrado(id,function(error, data){    
    if (typeof data !== 'undefined' && data.length > 0){
      res.json(200,data);
    }    
    else{
      res.json(404,{"msg":"notExist"});
    }
  });
};

exports.addGrado = function(req,res){
  
  var data = {
    'descripcion':req.param('descripcion'),
    'id_ciclo': req.param('ciclo')
  };

  EscuelaCicloModel.insertGrado(data,function(error,data){
      if(data && data.insertId){
        res.redirect('/' + data.insertId);
      }
      else{
        res.json(500,{'msg':'something went wrong'});
      }
  });
};

exports.escuelaCiclo = function(req,res){
  var data = JSON.parse(req.param('data'));     
  EscuelaCicloModel.insertEscuelaGrado(data,function(error,datos){
      if(datos){
        res.redirect('/api/escuelas');
      }
      else{
        res.json(500,{'msg':'something went wrong'});
      }
  });
};

exports.docenteGrado = function(req,res){
  var data = JSON.parse(req.param('data'));     
  DocenteModel.insertPersonaGrado(data,function(error,datos){
      if(datos){
        res.redirect('/api/docentes');
      }
      else{
        res.json(500,{'msg':'something went wrong'});
      }
  });
};

exports.turnos = function (req, res){
  data = EscuelaCicloModel.getTurnos(function(error, data){
      res.json(200,data);
    });
};

exports.turno = function (req, res) {
  var id = req.params.id;
  data = EscuelaCicloModel.getTurno(id,function(error, data){    
    if (typeof data !== 'undefined' && data.length > 0){
      res.json(200,data);
    }    
    else{
      res.json(404,{"msg":"notExist"});
    }
  });
};

exports.ciclos = function (req, res){
  data = EscuelaCicloModel.getCiclos(function(error, data){
      res.json(200,data);
    });
};
exports.ciclo = function (req, res) {
  var id = req.params.id;
  data = EscuelaCicloModel.getCiclo(id,function(error, data){    
    if (typeof data !== 'undefined' && data.length > 0){
      res.json(200,data);
    }    
    else{
      res.json(404,{"msg":"notExist"});
    }
  });
};
exports.cargos = function (req, res){
  data = DocenteModel.getCargos(function(error, data){
      res.json(200,data);
    });
};

exports.gradosCiclos = function (req, res) {
  var id = req.params.id;
  data = EscuelaCicloModel.getGradosPorCiclo(id,function(error, data){    
    if (typeof data !== 'undefined' && data.length > 0){
      res.json(200,data);
    }    
    else{
      res.json(404,{"msg":"notExist"});
    }
  });
};

exports.gradosTurnosPorEscuela = function (req, res) {
  var id = req.params.id;
  data = EscuelaCicloModel.getEscuelaTurnoCiclo(id,function(error, data){    
    if (typeof data !== 'undefined' && data.length > 0){
      res.json(200,data);
    }    
    else{
      res.json(404,{"msg":"notExist"});
    }
  });
};


// =========================================================================
// LOGIN URLS ==============================================================
// =========================================================================

//This one should be return the login page
exports.login = function(req,res){
  console.log('ENTRO AL FAIL FAIL');
  
  res.json({'lala':'login'});
};

exports.test = function(req,res){
  console.log('ADASDASDASDASDASDASBFDHFGJFG');
  res.json({'LOGIN':'estas logueado guachin'});
};

exports.authentication = function(req,res){
  if (req.body.remember) {
    console.log('te pelo');
    req.session.cookie.maxAge = 1000 * 60 * 3;
  } else {
    req.session.cookie.expires = false;
  }
  console.log('asdasdasd');
  //res.redirect('/');
};
//END LOGIN

exports.gradosTurnos = function (req, res) {
  data = EscuelaCicloModel.getAllEscuelaTurnoCiclo(function(error, data){    
    if (typeof data !== 'undefined' && data.length > 0){
      res.json(200,data);
    }    
    else{
      res.json(404,{"msg":"notExist"});
    }
  });
};

exports.docentesEscuelas = function (req, res) {
  data = DocenteModel.getAllPersonaEscuela(function(error, data){
    console.log(data);    
    if (typeof data !== 'undefined' && data.length > 0){
      res.json(200,data);
    }    
    else{
      res.json(404,{"msg":"notExist"});
    }
  });
};

exports.libroDocente = function(req, res){
  var newObject = {
                  'isbn': req.param('isbn'),
                  'dni': req.param('dni')
                  };
  
  bookTeacher.insertNewBookTeacher(newObject,function(error,data){
    //borro  && data.length > 0 del if, porque no tiene la propeidad lenght
    if (typeof data !== 'undefined'){
      res.json(200,data);
    }    
    else{
      res.json(404,{"msg":"something went wrong"});
    } 
  });
};

exports.deleteLibroDocente = function(req, res){
  
  data = req.params.data;
  
  bookTeacher.deleteBookTeacher(data,function(error,data){    
    if (typeof data !== 'undefined' && data.length > 0){
      res.json(200,data);
    }    
    else{
      res.json(404,{"msg":"notDeleted"});
    } 
  });
};
