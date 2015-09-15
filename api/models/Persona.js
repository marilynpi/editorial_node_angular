/**
 * Persona.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
 
// We don't want to store password without encryption
var bcrypt = require('bcrypt');
 
 
module.exports = {
  
  schema: true,
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  
  attributes: {
    dni:{
      type: "integer",
      primaryKey: true,
      required: true,
      unique: true
    },
    nombre:{
      type: "string",
      required: true
    },
    apellido:{
      type: "string",
      required: true
    },
    tipo_dni:{
      type: "string",
      required: true
    },
    fecha_nac:{
      type: "date",
      required: true
    },
    direccion:{
      type: "string",
      required: true
    },
    ciudad:{
      type: "string",
      required: true
    },
    provincia:{
      model: "provincia"
    },
    cp:{
      type: "integer",
      required: true
    },
    email: {
      type: 'email',
      required: 'true',
      unique: true // Yes unique one
    },
    telefono:{
      type: "integer",
      required: true
    },
    fecha_alta:{
      type: "date",
      defaultsTo: function (){ return new Date(); },
      required: true
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
