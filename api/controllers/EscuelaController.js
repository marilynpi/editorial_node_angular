/**
 * EscuelaController
 *
 * @description :: Server-side logic for managing escuelas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    findOne: function(request,response){
       console.log("metodo findOne de escuela");
    	Escuela.query('SELECT e.*,	p.nombre_provincia as nombre_provincia, t.descripcion as "nombre_turno",c.descripcion as "nombre_ciclo",	g.descripcion as "nombre_grado",ec.cantidad_grado as "cantidad_grados", ec.id_grado, ec.id_turno, ec.id_escuela FROM escuela e INNER JOIN provincia p ON e.provincia = p.id_provincia INNER JOIN escuela_ciclo ec ON (e.id = ec.id_escuela) INNER JOIN ciclo c on (ec.id_ciclo = c.id) INNER JOIN grado g on (ec.id_grado = g.id) INNER JOIN turno t on (ec.id_turno = t.id) WHERE e.id ='+request.param("id"),function(error,escuela){
    		return response.json(escuela);	
    	});
    }
};



