/**
* Empleado.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  		nombre:{
  			type:"string",
  			required:true,
		    minLength: 2
  		},
  		numemp:{
  			type:"string",
  			required:true
  		},
  		email:{
  			type:"email",
  			required:"true",
  			unique: true
  		}
  		
  }
};

