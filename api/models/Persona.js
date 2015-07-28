/**
 * Persona.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
 
// We don't want to store password without encryption
var bcrypt = require('bcrypt');
var session = require("../../config/session");
 
module.exports = {
  
  connection: 'mysql',
  schema: true,
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  
  attributes: {
    dni:{
      type: "integer",
      primaryKey: true,
      required: false,
      unique: true
    },
    nombre:{
      type: "string",
      required: false
    },
    apellido:{
      type: "string",
      required: false
    },
    tipo_dni:{
      type: "string",
      required: false
    },
    fecha_nac:{
      type: "date",
      required: false
    },
    direccion:{
      type: "string",
      required: false
    },
    ciudad:{
      type: "string",
      required: false
    },
    provincia:{
      model: "provincia"
    },
    cp:{
      type: "integer",
      required: false
    },
    email: {
      type: 'email',
      required: 'true',
      unique: true // Yes unique one
    },
    telefono:{
      type: "integer",
      required: false
    },
    fecha_alta:{
      type: "date",
      required: false
    },
    password: {
      type: 'string'
    },
    rol:{
      model: 'Rol'
    },
    
    // We don't wan't to send back encrypted password either
    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },
  // Here we encrypt password before creating a User
  beforeCreate : function (values, next) {
    
    bcrypt.genSalt(10, function (err, salt) {
      if(err) return next(err);
      bcrypt.hash(sails.config.session.secret, salt, function (err, hash) {
        if(err) return next(err);
        values.password = hash;
        next();
      })
    })
  },
 
  comparePassword : function (password, user, cb) {
    bcrypt.compare(sails.config.session.secret, user.password, function (err, match) {
 
      if(err) cb(err);
      if(match) {
        cb(null, true);
      } else {
        cb(err);
      }
    })
  }
};
