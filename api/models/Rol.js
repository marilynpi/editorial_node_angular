/**
* Rol.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  
  schema: true,
  autoPK: true,
  autoCreatedAt: true,
  autoUpdatedAt: true,
  
  attributes: {
    nombre:{
      type: "string",
      required: true
    },
    descripcion:{
      type: "string",
      required: false
    }
  }
};

