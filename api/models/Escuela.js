/**
* Escuela.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* @TODO        :: quitar provincia del modelo escuela, con localidad es suficiente
*/

module.exports = {

  connection: 'mysql',
  schema: true,
  autoPK: true,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  
  attributes: {
    nombre:{
      type:"string",
      required: true
    },
    telefono:{
      type:"integer",
      required: true
    },
    email:{
      type:"string",
      required: true
    },
    domicilio:{
      type:"string",
      required: true
    },
    localidad:{
      model: "localidad"
    },
    cp:{
      type:"integer",
      required: true
    },
    sector:{
      type:"string",
      required: true
    },
    distrito:{
      type:"string",
      required: true
    },
    ubicacion:{
      type:"string",
      required: true
    },
    provincia:{
      model: "provincia"
    },
    observaciones:{
      type:"string",
      required: true
    },
    escuelaCiclo:{
      collection: "EscuelaCiclo",
      via: "id_escuela"
    }
  }
};

