/**
* Libro.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  
  attributes: {
    'isbn':{
      primaryKey: true,
      required: true,
      type: "integer"
    },
    'id_col':{
      required: true,
      model: "Coleccion"
    },
    'titulo':{
      required: true,
      type: "string"
    },
    'paginas':{
      required: true,
      type: "integer"
    },
    'peso':{
      required: true,
      type: "string"
    },
    'precio':{
      required: true,
      type: "float"
    },
    'fecha_alta':{
      required: true,
      type: "date",
      defaultsTo: new Date().toISOString()
    },
    'autores':{
      type: "string"
    },
    'formato':{
      type: "string"
    },
    'ilustradores':{
      required: false,
      type: "string"
    },
    'lectura_sugerida':{
      required: false,
      type: "string"
    },
    'genero':{
      required: false,
      type: "string"
    },
    
    
  }
};

