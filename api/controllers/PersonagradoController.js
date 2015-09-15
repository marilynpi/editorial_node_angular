/**
 * PersonagradoController
 *
 * @description :: Server-side logic for managing personagradoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var mysql = require('mysql');
var bcrypt = require('bcrypt');

module.exports = {
    //Consulta sql
    index: function(request,response){
        Personagrado.query('SELECT d.*, pg.*, c.descripcion as "cargo", t.descripcion as "turno", g.descripcion as "grado", p.nombre_provincia as "provincia", e.nombre as "escuela" FROM persona d INNER JOIN persona_grado pg ON (d.dni = pg.dni) INNER JOIN grado g on (pg.id_grado = g.id) INNER JOIN turno t on (pg.id_turno = t.id) INNER JOIN cargo c on (pg.id_cargo = c.id) INNER JOIN escuela e on (pg.id_escuela = e.id) INNER JOIN provincia p on (d.provincia = p.id_provincia) WHERE d.rol="1" ORDER BY d.dni, e.id', function(err, docentes) {
        
            if(err)return response.json({ error: err.message }, 400);
            return response.json(docentes);
        });
    },
    create: function(request,response){

    var conexion = mysql.createConnection(
    {
      host     : sails.config.connections.mysql.host,
      user     : sails.config.connections.mysql.user,
      password : sails.config.connections.mysql.password,
      database : sails.config.connections.mysql.database,
      debug: true
    }
    );
        
    var docente  = request.param("docente");
    var escuelas = request.param("escuelas");

    /*conexion.connect(function(err) {
        if (err) {
            console.error('error conectando: ' + err.stack);
            return;
        }
    });*/
    
    /* comienzo transaccion */
    conexion.beginTransaction(function(err) {
        if (err) { throw err; }
        
        console.log('connected as id ' + conexion.threadId);
        
        //datetime a mysql date
        from = docente.fecha_nac.split("/");
        f = new Date(from[2], from[1] - 1, from[0]);
        
        //hash de password
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync('docente', salt);
        
        var persona = {
            dni: docente.id,
            password: hash,
            nombre: docente.nombre,
            apellido: docente.apellido,
            tipo_dni: docente.tipo_dni,
            fecha_nac: f,
            direccion: docente.direccion,
            ciudad: docente.ciudad,
            provincia: docente.provincia,
            telefono: docente.telefono,
            cp: docente.cp,
            email: docente.email,
            rol: 1,
            fecha_alta: new Date()
        }
        
        conexion.query('INSERT INTO persona SET ?', persona, function(err, result) {
            if (err) { 
              conexion.rollback(function() {
                throw err;
              });
            }
            
        var personaGrado = {};
        
        escuelas.forEach(function(escuela){
            personaGrado.dni = persona.dni;
            personaGrado.id_cargo = parseInt(escuela.cargo)
            
            escuela.cursos.forEach(function(curso){
                personaGrado.id_grado = curso.id_grado;
                personaGrado.id_turno = curso.id_turno;
                personaGrado.id_escuela = curso.id_escuela;
                
                conexion.query('INSERT INTO persona_grado SET ?',personaGrado,function(err, result){
                    if (err) { 
                        conexion.rollback(function() {
                        throw err;
                    });
                } 
                });
            });
            
        });
        
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

            
        }); //fin de primer query
    }); //fin de transaccion
        
    },
    destroy: function(request,response){
        var conexion = mysql.createConnection(
            {
              host     : sails.config.connections.mysql.host,
              user     : sails.config.connections.mysql.user,
              password : sails.config.connections.mysql.password,
              database : sails.config.connections.mysql.database,
              debug: true
            }
        );
        
        var docente = request.param("id");

        /* comienzo transaccion */
        conexion.beginTransaction(function(err) {
        if (err) { throw err; }
        
        console.log('connected as id ' + conexion.threadId);
        //borramos todas las relaciones del docente en persona_grado
        conexion.query('DELETE FROM persona_grado WHERE dni = ' + docente, function (err, result) {
            if (err) throw err;
            console.log('se borraron ' + result.affectedRows + ' filas de persona_grado');
        });
        
        //borramos el docente de la table persona
        conexion.query('DELETE FROM persona WHERE dni = ' + docente, function (err, result) {
            if (err) throw err;
            console.log('se borraron ' + result.affectedRows + ' filas de persona');
        });
        
        //hacemos el commit de la transaccion
        conexion.commit(function(err) {
            if (err) { 
              conexion.rollback(function() {
                throw err;
              });
            }
            
            console.log('Transaccion completada.');
            conexion.end(function(err) {
                console.log('Transaccion completada y conexion cerrada.'); 
            });
        });
        return response.json("Docente borrado exitosamente");
        
        }); //fin de transaccion
        
    },
    //Ejemplo de promesas
    findOne: function(request, response){
      var pm = request.params.all();
      
      Persona.findOne({dni: pm.id})
        .then(function(persona){
            console.log(persona);
            return persona;
        })
        .then(function(persona){
            var rol = Rol.findOne({id: persona.rol}).then(function(rol){
                console.log(rol);
                return rol;
            });
            return [persona,rol];
        })
        //a diferencia de then recibe 2 o mas parametros para procesar
        .spread(function(persona,rol){
            var coleccion = {
                persona: persona,
                rol: rol
            }
            return response.json(coleccion);
        })
        .catch(function(err){
	        console.log(err);
	        response.json({
	            noEncontrado:true,
	            error:err
	            
	        });
        });
    },
};

