/**
 * EscuelaCicloController
 *
 * @description :: Server-side logic for managing escuelacicloes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var mysql = require('mysql');

module.exports = {
	  find: function(request, response) {
	    console.log("metodo find");
	    EscuelaCiclo.query(
	        //'SELECT e.*, ec.*, t.descripcion as "turno", c.descripcion as "ciclo", g.descripcion as "grado", ec.cantidad_grado as "cantidad_grados", l.nombre_localidad as "localidad", p.nombre_provincia as "provincia" FROM escuela e INNER JOIN escuela_ciclo ec ON (e.id = ec.id_escuela) INNER JOIN ciclo c on (ec.id_ciclo = c.id) INNER JOIN grado g on (ec.id_grado = g.id) INNER JOIN turno t on (ec.id_turno = t.id) INNER JOIN provincia p on (e.provincia = p.id_provincia) INNER JOIN localidad l on (e.localidad = l.id_localidad) ORDER BY e.id',
					'SELECT e.*, ec.*, t.descripcion as turno, c.descripcion as ciclo, g.descripcion as grado, ec.cantidad_grado as cantidad_grados, l.nombre as localidad, p.nombre as provincia FROM escuela e INNER JOIN escuela_ciclo ec ON (e.id = ec.id_escuela) INNER JOIN ciclo c on (ec.id_ciclo = c.id) INNER JOIN grado g on (ec.id_grado = g.id) INNER JOIN turno t on (ec.id_turno = t.id) INNER JOIN provincias p on (e.provincia = p.id_provincia) INNER JOIN localidades l on (e.localidad = l.id_localidad) ORDER BY e.id',
						function(error,escuelas){
	        if(error) return response.json({ error: err.message }, 400);
	        
	        return response.json(escuelas);
	    });
    },
    update: function(request,response){
      /*
      * EJEMPLO DE EDITAR escuela y sus ciclos
       {
        "escuela":{
          "nombre":"prueba2"
        },
        "gradosParaBorrar":["1","4","5"],
        "gradosParaAgregar":[],
        "gradosParaEditar":[
          {
              "id": 18,
              "id_escuela":0,
              "id_ciclo":2,
              "id_turno": "JC",
              "id_grado":1,
              "cantidad_grado": 8
          }
        ]
      }
      *
      */
      
      var conexion = mysql.createConnection(
      {
        host     : sails.config.connections.mysql.host,
        user     : sails.config.connections.mysql.user,
        password : sails.config.connections.mysql.password,
        database : sails.config.connections.mysql.database,
        debug: true
      }
      );
        
      var idEscuela = request.param("id")
      var escuela = request.param("escuela");

        //actualizamos los campos editados de la escuela
        Escuela.update({id:idEscuela},escuela).exec(function(error,escuela){
          console.log(escuela);
        });
        
        //chequeamos si se enviaron grados para borrar
        var gradosParaBorrar = request.param("gradosParaBorrar") || [];

        if(!gradosParaBorrar.length == 0){
          for(var i = 0;i<gradosParaBorrar.length;i++){
            console.log("borrando el escuela_ciclo con el id de " + gradosParaBorrar[i]);
            /*conexion.query('DELETE FROM escuela_ciclo WHERE id = ' + gradosParaBorrar[i], function (err, result) {
              if (err) throw err;
              console.log('borradas ' + result.affectedRows + ' filas');
            });*/
          }
        }
        
        //chequeamos los grados para agregar
        var gradosParaAgregar = request.param("gradosParaAgregar") || [];
        if(!gradosParaAgregar.length == 0){
          for(var i = 0;i<gradosParaAgregar.length;i++){
            gradosParaAgregar[i].id_escuela = idEscuela;
            conexion.query("INSERT INTO escuela_ciclo SET ?",gradosParaAgregar[i],function(error,grado){
              console.log(grado);
            })
         } 
        }
        
        //chequeamos los grados a editar
        var gradosParaEditar = request.param("gradosParaEditar") || [];
        if(!gradosParaEditar.length == 0){
          for(var i = 0;i<gradosParaEditar.length;i++){
            console.log(gradosParaEditar[i]);
            conexion.query('UPDATE escuela_ciclo SET ? WHERE id = ?',
            [
              {
                id_escuela: idEscuela,
                id_ciclo: gradosParaEditar[i].id_ciclo,
                id_turno: gradosParaEditar[i].id_turno,
                id_grado: gradosParaEditar[i].id_grado,
                cantidad_grado: gradosParaEditar[i].cantidad_grado
              },
              gradosParaEditar[i].id
            ],function(error,grado){
              if(error){response.json(error)}
              console.log(grado);
            });
          }
        }
        
        conexion.end(function(err) {
            console.log('conexion cerrada.'); 
        });
        
        return response.json("operacion completada");
        
    },
    create: function(request, response){
      
      var conexion = mysql.createConnection(
      {
        host     : sails.config.connections.mysql.host,
        user     : sails.config.connections.mysql.user,
        password : sails.config.connections.mysql.password,
        database : sails.config.connections.mysql.database,
        debug: true
      }
      );
      
      var escuela = request.param("escuela");
      var cursos = request.param("cursos");
      
      /* comienzo transaccion */
      conexion.beginTransaction(function(err) {
        if (err) { throw err; }
      });
      
      var escuelaFormateada = {
        id: escuela.id,
        nombre: escuela.nombre,
        telefono: escuela.telefono,
        email: escuela.email,
        domicilio: escuela.domicilio,
        localidad: escuela.localidad,
        cp: escuela.cp,
        sector: escuela.sector,
        distrito: escuela.distrito,
        ubicacion: escuela.ubicacion,
        provincia: escuela.provincia,
        observaciones: escuela.observaciones
      }
    	
    	conexion.query('INSERT INTO escuela SET ?', escuelaFormateada,function(err,resultado){
  	    if (err) { 
          conexion.rollback(function() {
            throw err;
          });
        }
    	});
    	
    	var escuelaCiclo = {};
    	
    	cursos.forEach(function(curso){
    	  
    	  escuelaCiclo.id_escuela = curso.id_escuela;
    	  escuelaCiclo.id_turno = curso.id_turno;
    	  escuelaCiclo.id_grado = curso.id_grado;
    	  escuelaCiclo.cantidad_grado = curso.cantidad_grado;
    	  escuelaCiclo.id_ciclo = curso.id_ciclo;
    	  
    	  conexion.query('INSERT into escuela_ciclo SET ?',escuelaCiclo,function(err,resultado){
    	    if (err) { 
          conexion.rollback(function() {
            throw err;
          });
          }
    	  })
    	  
    	}); //fin de foreach
    	
    	//hacemos el commit de la transaccion
      conexion.commit(function(err) {
          if (err) { 
            conexion.rollback(function() {
              throw err;
            });
          }
      });
      
      conexion.end(function(err) {
            console.log('Transaccion completada y conexion cerrada.'); 
        });
    
        return response.json("Exito en la transaccion");
        
    },
    destroy: function(request, response){
      var conexion = mysql.createConnection(
            {
              host     : sails.config.connections.mysql.host,
              user     : sails.config.connections.mysql.user,
              password : sails.config.connections.mysql.password,
              database : sails.config.connections.mysql.database,
              debug: true
            }
        );
      
      var escuelaCiclo = request.param("id");
      
      //Borramos el escuelaciclo 
      conexion.query('DELETE FROM escuela_ciclo where id = ?',escuelaCiclo,function(err,resultado){
        console.log("Se borraron " + resultado.affectedRows + " filas de la tabla escuela_ciclo");
      });
      
      //chequeamos que no haya escuelas sin cursos, y si las hay, borramos esa escuela
      
      /*conexion.query('DELETE FROM escuela where id = ' + escuelaCiclo + ' NOT IN (SELECT id_escuela FROM escuela_ciclo)',function(err,resultado){
        console.log("Se borraron " + resultado.affectedRows + " filas de la tabla escuela");
      });*/
      
      conexion.end(function(err) {
        console.log('conexion cerrada.'); 
      });
      
      return response.json("Se borro la relacion exitosamente");
        
    },
    findOne: function(request, response){
      console.log("metodo findOne");
    	EscuelaCiclo.query('SELECT e.id,e.nombre as "Escuela",p.nombre_provincia as Provincia, t.descripcion as "Turno",c.descripcion as "Ciclo",g.descripcion as "Grado",ec.cantidad_grado as "Cantidad Grados", ec.id_grado, ec.id_turno, ec.id_escuela FROM escuela e INNER JOIN provincia p ON e.provincia = p.id_provincia INNER JOIN escuela_ciclo ec ON (e.id = ec.id_escuela) INNER JOIN ciclo c on (ec.id_ciclo = c.id) INNER JOIN grado g on (ec.id_grado = g.id) INNER JOIN turno t on (ec.id_turno = t.id) WHERE ec.id ='+request.param("id"),function(error,escuelas){
    		return response.json(escuelas);	
    	});
    },
    sinGrado: function(request, response){
      EscuelaCiclo.query('SELECT * from escuela where id NOT IN (SELECT id_escuela from escuela_ciclo)',function(error,escuelas){
        if(error) return response.json({ error: err.message }, 400);
	        
	        return response.json(escuelas);
      });
    }
}; //module.exports

