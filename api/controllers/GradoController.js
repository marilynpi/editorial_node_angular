/**
 * GradoController
 *
 * @description :: Server-side logic for managing gradoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * api/grado/:idciclo
     * al pasarle un parametro a grado filtramos por id_ciclo
     */
    
	findOne: function(request,response){
	    var ciclo = request.param("id");
	    
	    Grado.find({id_ciclo:ciclo}).exec(function(err,grados){
	        if(err) return response.json(err);
	        return response.json(grados);
	    })
	}
};

