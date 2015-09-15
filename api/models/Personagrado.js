/**
* Personagrado.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  
  schema: true,
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  tableName: "persona_grado",
  
  attributes: {
    dni:{
      model: "persona"
    },
    grado:{
      columnName: "id_grado",
      model: "grado"
    },
    turno:{
      columnName: "id_turno",
      model: "turno",
      via: "id"
    },
    escuela:{
      columnName: "id_escuela",
      model: "escuela"
    }
  }
};

