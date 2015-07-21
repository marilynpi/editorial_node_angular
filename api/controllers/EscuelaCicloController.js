/**
 * EscuelaCicloController
 *
 * @description :: Server-side logic for managing escuelacicloes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(request, response) {
	    
	    EscuelaCiclo.query(
	        'SELECT e.*, ec.*, t.descripcion as "turno", c.descripcion as "ciclo", g.descripcion as "grado", ec.cantidad_grado as "cantidad_grados", l.nombre_localidad as "localidad", p.nombre_provincia as "provincia" FROM escuela e INNER JOIN escuela_ciclo ec ON (e.id = ec.id_escuela) INNER JOIN ciclo c on (ec.id_ciclo = c.id) INNER JOIN grado g on (ec.id_grado = g.id) INNER JOIN turno t on (ec.id_turno = t.id) INNER JOIN provincia p on (e.provincia = p.id_provincia) INNER JOIN localidad l on (e.localidad = l.id_localidad) ORDER BY e.id',
						function(error,escuelas){
	        if(error) return response.json({ error: err.message }, 400);
	        
	        response.json(escuelas);
	    });
    } //index
    
}; //module.exports

