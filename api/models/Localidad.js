/**
* Localidad.js
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
    id_localidad:{
      type:"integer",
      primaryKey: true,
      required: true,
    },
    id_provincia:{
      model: "provincia"
    },
    nombre_localidad:{
      type:"string",
      required: true
    }
  }
};

