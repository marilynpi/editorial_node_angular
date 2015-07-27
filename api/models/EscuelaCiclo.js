/**
* EscuelaCiclo.js
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
  tableName: "escuela_ciclo",
  
  attributes: {
    id_escuela:{
      model: "escuela"
    },
    id_ciclos:{
      model: "ciclo"
    },
    id_turno:{
      model: "turno"
    },
    id_grado:{
      model: "grado"
    },
    cantidad_grado:{
      type: "integer",
      required: true
    }
  }
};

