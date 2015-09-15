/**
* Grado.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  
  schema: true,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  
  attributes: {
    descripcion:{
      type: "string",
      required: true
    },
    id_ciclo:{
      model: "ciclo"
    },
    escuelaCiclo:{
      collection: "EscuelaCiclo",
      via: "id_grado"
    }
  }
};

