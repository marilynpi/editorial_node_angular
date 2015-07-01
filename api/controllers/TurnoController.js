/**
 * TurnoController
 *
 * @description :: Server-side logic for managing turnoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	"escuelas": function(request,response,next)
	{
	    var id = request.param("id");
	    
	    Turno.findOne({id:id}).populate("escuelaCiclo").exec(function(err,turnos){
	        if(err) return response.json("Ocurrio un error");
	        if(!turnos) return response.json("No existe el turno");
	        
	        //return response.json(turnos.escuelaCiclo);
	        
	        for(var i = 0; i < turnos.escuelaCiclo.length; i++)
	        {
	            console.log(turnos.escuelaCiclo[i].id_escuela)
	            Escuela.find({id:turnos.escuelaCiclo[i].id_escuela})
	        }
	        
	    });
	}
};

