var Teacher = require('../models/docente');
var DocenteModel = new Teacher();

var School = require('../models/escuela');
var EscuelaModel = new School();

var _ = require('underscore');


exports.docentes = function (req, res) {
  data = DocenteModel.getPersonas(function(error, data)
	{
  		res.json(200,data);
  	});
};
exports.docente = function (req, res) {
  var id = req.params.id;
  data = DocenteModel.getPersona(id,function(error, data)
  {
    //si el usuario existe lo mostramos en formato json
    if (typeof data !== 'undefined' && data.length > 0)
    {
      res.json(200,data);
    }
    //en otro caso mostramos una respuesta conforme no existe
    else
    {
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
  DocenteModel.insertPersona(datos,function(error, data)
    {
      //si el usuario se ha insertado correctamente mostramos su info
      if(data && data.insertId)
      {
        res.redirect("/api/docente/" + data.insertId);
      }
      else
      {
        res.json(500,{"msg":"Error"});
      }
    });
};
exports.editDocente = function (req, res) {
  //almacenamos los datos del formulario en un objeto
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
    DocenteModel.updatePersona(data,function(error, data)
    {
      //si el usuario se ha actualizado correctamente mostramos un mensaje
      if(data && data.msg)
      {
        res.json(200,data);
      }
      else
      {
        res.json(500,{"msg":"Error"});
      }
    });
};
exports.deleteDocente = function (req, res) {
  var id = req.params.id;

  DocenteModel.deletePersona(id,function(error, data)
    {
      if(data && data.msg === "deleted" || data.msg === "notExist")
      {
        res.json(200,data);
      }
      else
      {
        res.json(500,{"msg":"Error"});
      }
    });
};
exports.escuelas = function (req, res) {
  data = EscuelaModel.getEscuelas(function(error, data)
  {
      res.json(200,data);
    });
};
exports.escuela = function (req, res) {
  var id = req.params.id;
  data = EscuelaModel.getEscuela(id,function(error, data)
  {
    //si el usuario existe lo mostramos en formato json
    if (typeof data !== 'undefined' && data.length > 0)
    {
      res.json(200,data);
    }
    //en otro caso mostramos una respuesta conforme no existe
    else
    {
      res.json(404,{"msg":"notExist"});
    }
  });
};
// POST
exports.addEscuela = function (req, res) {
  var id = req.params.id;
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
  EscuelaModel.insertEscuela(datos,function(error, data)
    {
      //si el usuario se ha insertado correctamente mostramos su info
      console.log(data,data.insertId )
      if(data && data.insertId)
      {
        res.redirect("/api/escuela/" + data.insertId);
      }
      else
      {
        res.json(500,{"msg":"Error"});
      }
    });
};
exports.editEscuela = function (req, res) {
  //almacenamos los datos del formulario en un objeto
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
    EscuelaModel.updateEscuela(data,function(error, data)
    {
      //si el usuario se ha actualizado correctamente mostramos un mensaje
      if(data && data.msg)
      {
        res.json(200,data);
      }
      else
      {
        res.json(500,{"msg":"Error"});
      }
    });
};
exports.deleteEscuela = function (req, res) {
  var id = req.params.id;
  EscuelaModel.deleteEscuelas(id,function(error, data)
    {
      if(data && data.msg === "deleted" || data.msg === "notExist")
      {
        res.json(200,data);
      }
      else
      {
        res.json(500,{"msg":"Error"});
      }
    });
};
