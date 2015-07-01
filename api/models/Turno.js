/**
* Turno.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  
  connection: 'mysql',
  schema: true,
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  
  attributes: {
    id:{
      type: "string",
      required: true,
      primaryKey: true
    },
    descripcion:{
      type: "string",
      required: true
    },
    escuelaCiclo:{
      collection: "EscuelaCiclo",
      via: "id_turno"
    }
  }
};

