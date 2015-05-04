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

var _ = require('underscore');


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
// POST
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
// POST
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
      console.log(data,data.insertId )
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
        console.log("asdasdasdasd"+data);
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

  var data ={
    'id_escuela':666,//req.param('escuela'),
    'id_ciclos':1,//req.param('ciclo'),
    'id_turno':'JC',//req.param('turno'),
    'id_grado':1,//req.param('grado'),
    'cantidad_grado':6//req.param('cantidad')
  };

  EscuelaCicloModel.insertGrado(data,function(error,data){

      console.log(data,data.insertId )
      if(data && data.insertId){
        res.redirect('/api/escuela' + data.insertId);
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