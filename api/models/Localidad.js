/**
* Localidad.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  
  schema: true,
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  tableName: "localidades",
  
  attributes: {
    id_localidad:{
      type:"integer",
      primaryKey: true,
      required: true,
    },
    nombre:{
      type:"string",
      required: true
    },
    id_provincia:{
      model: "provincia"
    },
    cp:{
      type:"string"
    }
    
  }
};

