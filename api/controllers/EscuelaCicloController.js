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
	        
	        return response.json(escuelas);
	    });
    }, //index
    
    //ciclos turnos por ESCUELA
    findOne: function(request, response){
    	EscuelaCiclo.query('SELECT e.id,e.nombre as "Escuela",p.nombre_provincia as Provincia, t.descripcion as "Turno",c.descripcion as "Ciclo",g.descripcion as "Grado",ec.cantidad_grado as "Cantidad Grados", ec.id_grado, ec.id_turno, ec.id_escuela FROM escuela e INNER JOIN provincia p ON e.provincia = p.id_provincia INNER JOIN escuela_ciclo ec ON (e.id = ec.id_escuela) INNER JOIN ciclo c on (ec.id_ciclo = c.id) INNER JOIN grado g on (ec.id_grado = g.id) INNER JOIN turno t on (ec.id_turno = t.id) WHERE e.id ='+request.param("id"),function(error,escuelas){
    		return response.json(escuelas);	
    	});
    },
    
    
    /*
    	METODO para dar de alta un escuelaciclo o lo que quieras poner por sql
    */
    update: function(request, response){
    	return response.json("metodo update");
    },
    
    test: function(request, response) {
    try {
    // Start the transaction
    Coleccion.query("BEGIN", function(err) {
      
      if (err) {throw new Error(err);}
      // encontramos la coleccion con el id pasado OK
      
      Coleccion.findOne({"id_coleccion":request.param('id')}).exec(function(err, coleccion) {
        if (err) {throw new Error(err);}
        
        console.log(coleccion);
        
        // guardamos la coleccion
        Coleccion.update({id_coleccion:request.param('id')},{descripcion: 'transaction'}).exec(function(err, coleccion){
          Coleccion.query("COMMIT", function(err){
            if (err) {throw new Error(err);}
            // Retornamos la coleccion modificada
            return response.json(coleccion);
          })
        })
      });
    });
    } 
    // If there are any problems, roll back the transaction
    catch(e) {
    Coleccion.query("ROLLBACK", function(err) {
      
      // The rollback failed--Catastrophic error!
      if (err) {return response.serverError(err);}
      // Return the error that resulted in the rollback
      return response.serverError(e);
      });
    }
}
    
}; //module.exports

