/**
 * ProvinciaController
 *
 * @description :: Server-side logic for managing provincias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findOne: function(request,response){
	    var provincia = request.param("id");
	    
	    Localidad.find({id_provincia:provincia}).sort('nombre').exec(function(err,localidades){
	        return response.json(localidades);
	    })
	}
};

