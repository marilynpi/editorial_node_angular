var Connection = (function(){
	
	//Self represents "this", without the well-known fucking scope issue.
	var self = this;
	
	var mysql = require('mysql');

	var db_config = {
	  	host: 'localhost', 
		user: 'root',  
		password: '', 
		database: 'editorial'
	};

	var connection;

	function handleDisconnect() {
  		connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                  // the old one cannot be reused.
		connection.connect(function(err) {              // The server is either down
		    if(err) {                                     // or restarting (takes a while sometimes).
		      console.log('error when connecting to db:', err);
		      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
		    }                                     // to avoid a hot loop, and to allow our node script to
		});                                     // process asynchronous requests in the meantime.
		                                          // If you're also serving http, display a 503 error.
		connection.on('error', function(err) {
		    console.log('db error', err);
		    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
		      handleDisconnect();                         // lost due to either server restart, or a
		    } else {                                      // connnection idle timeout (the wait_timeout
		      throw err;                                  // server variable configures this)
		    }
		});
	}
	handleDisconnect();
	

	function Connection(){
		handleDisconnect();
		self.connection = connection;		
	}

	Connection.prototype.getAllSchools = function(table_name,table_pk,callback){
		Connection();
		if (self.connection){

			var query = 'SELECT * FROM '+table_name+', provincia, localidad WHERE escuela.provincia = provincia.id_provincia AND escuela.localidad = localidad.id_localidad ORDER BY '+table_pk;
			self.connection.query(query, function(error, rows) {
				if(error){
					throw error;
				}
				else{
					callback(null, rows);
				}
			});
		}
	};

	Connection.prototype.getSchoolById = function(table_name,table_pk,id,callback){
		Connection();
		if (self.connection){
			var query = 'SELECT * FROM '+table_name+', provincia, localidad WHERE escuela.provincia = provincia.id_provincia AND escuela.localidad = localidad.id_localidad AND '+table_pk+' = ' + self.connection.escape(id);
			self.connection.query(query, function(error, row){
				if(error){
					throw error;
				}
				else{
					callback(null, row);
				}
			});
		}
	}
	
	Connection.prototype.insertSchool = function(table_name,data,callback){				
		Connection();
		if (self.connection){			
			
			var query = 'INSERT INTO '+table_name+' SET ?';			
			self.connection.query(query, data, function(error, result){
				if(error){					
					throw error;
				}
				else{
					callback(null,{"insertId" : data.id});
				}
			});		
		}
	}

	Connection.prototype.updateSchool = function(table_name,table_pk,data, callback){
		Connection();
		if(self.connection){
			var sql = 'UPDATE '+table_name+' SET nombre = ' + self.connection.escape(data.nombre) + ',' + 
					'telefono = ' + self.connection.escape(data.telefono) + ',' +
					'email = ' + self.connection.escape(data.email) + ',' + 
					'domicilio = ' + self.connection.escape(data.domicilio) + ',' +
					'localidad = ' + self.connection.escape(data.localidad) + ',' +
					'cp = ' + self.connection.escape(data.cp) + ',' + 
					'sector = ' + self.connection.escape(data.sector) + ',' +
					'distrito = ' + self.connection.escape(data.distrito) + ',' +
					'ubicacion = ' + self.connection.escape(data.ubicacion) + ',' +
					'provincia = ' + self.connection.escape(data.provincia) + ',' +
					'observaciones = ' + self.connection.escape(data.observaciones) +
					' WHERE '+table_pk+' = ' + data.id;
			
			self.connection.query(sql, function(error, result){
				if(error){
					throw error;
				}
				else{
					callback(null,{"msg":"success"});
				}
			});
		}
	}

	Connection.prototype.deleteSchool = function(table_name,table_pk,id, callback){
		Connection();
		if(self.connection){

			var sqlExists = 'SELECT * FROM '+table_name+' WHERE '+table_pk+' = ' + self.connection.escape(id);
			self.connection.query(sqlExists, function(err, row){
				if(row){
					var sql = 'DELETE FROM '+table_name+' WHERE '+table_pk+' = ' + id;//self.connection.escape(id);
					
					self.connection.query(sql, function(error, result){
						if(error){
							throw error;
						}
						else{
							callback(null,{"msg":"deleted"});
						}
					});
				}
				else{
					callback(null,{"msg":"notExist"});
				}
			});
		}
	}

	Connection.prototype.getAllTeacher = function(table_name,table_pk,callback){
		Connection();
		if (self.connection){	
			var query = 'SELECT * FROM '+table_name+', provincia WHERE provincia = id_provincia ORDER BY '+table_pk;
			self.connection.query(query, function(error, rows){
				if(error){
					throw error;
				}
				else{
					callback(null, rows);
				}
			});
		}			
	}

	Connection.prototype.getTeacherById = function(table_name,table_pk,id,callback){
		Connection();
		if (self.connection){

			var sql = 'SELECT * FROM '+table_name+', provincia WHERE provincia = id_provincia AND '+table_pk+' = ' + self.connection.escape(id);
			self.connection.query(sql, function(error, row){
				if(error){
					throw error;
				}
				else{
					callback(null, row);
				}
			});
		}		
	}

	Connection.prototype.insertTeacher = function(table_name,data,callback){
		Connection();
		if (self.connection){
			var query = 'INSERT INTO '+table_name+' SET ?';
			self.connection.query(query, data, function(error, result){
				if(error){
					throw error;
				}
				else{
					//devolvemos la última id insertada
					callback(null,{"insertId" : data.dni});
				}
			});
		}		
	}

	Connection.prototype.updateTeacher = function(table_name,table_pk,data,callback){
		Connection();
		if(self.connection){

			var sql = 'UPDATE '+table_name+' SET nombre = ' + self.connection.escape(data.nombre) + ',' + 
					'apellido = ' + self.connection.escape(data.apellido) + ',' +
					'nombre = ' + self.connection.escape(data.nombre) + ',' + 
					'tipo_dni = ' + self.connection.escape(data.tipo_dni) + ',' +
					'direccion = ' + self.connection.escape(data.direccion) + ',' +
					'ciudad = ' + self.connection.escape(data.ciudad) + ',' + 
					'provincia = ' + self.connection.escape(data.id_provincia) + ',' +
					'cp = ' + self.connection.escape(data.cp) + ',' +
					'email = ' + self.connection.escape(data.email) + ',' +
					'telefono = ' + self.connection.escape(data.telefono) +
					' WHERE '+table_pk+' = ' + data.id;

			self.connection.query(sql, function(error, result){
				if(error){
					throw error;
				}
				else{
					callback(null,{"msg":"success"});
				}
			});
		}		
	}

	Connection.prototype.deleteTeacher = function(table_name,table_pk,id,callback){
		Connection();
		if(self.connection){
			var sqlExists = 'SELECT * FROM persona_grado WHERE dni = ' + self.connection.escape(id);
			self.connection.query(sqlExists, function(err, row){
				if(row){
					var sql = 'DELETE FROM persona_grado WHERE dni = ' + id;//self.connection.escape(id);
					self.connection.query(sql, function(error, result){
							sqlExists = 'SELECT * FROM '+table_name+' WHERE '+table_pk+' = ' + self.connection.escape(id);
							self.connection.query(sqlExists, function(err, row){
								if(row){
									var sql = 'DELETE FROM '+table_name+' WHERE '+table_pk+' = ' + id;//self.connection.escape(id);
									self.connection.query(sql, function(error, result){
										console.log('error',error);
										if(error){
											throw error;
										}
										else{
											callback(null,{"msg":"deleted persona"});
										}
									});
								}
								else{
									callback(null,{"msg":"notExist"});
								}
							});
					});
				}
			});	
		}	
	};

	Connection.prototype.getAllCharges = function(table_name,table_pk,callback){
		Connection();
		if (self.connection){

			var query = 'SELECT * FROM '+table_name+' ORDER BY '+table_pk;
			self.connection.query(query, function(error, rows) {
				if(error){
					throw error;
				}
				else{
					callback(null, rows);
				}
			});
		}
	};

	Connection.prototype.getAllStates = function(table_name,table_pk,callback){
		Connection();
		if (self.connection){	
			var query = 'SELECT * FROM '+table_name+' ORDER BY nombre_provincia';
			self.connection.query(query, function(error, rows){
				if(error){
					throw error;
				}
				else{
					callback(null, rows);
				}
			});
		}			
	}

	Connection.prototype.getStatesById = function(table_name,table_pk,id,callback){
		Connection();
		if (self.connection){

			var sql = 'SELECT * FROM '+table_name+' WHERE '+table_pk+' = ' + self.connection.escape(id);
			self.connection.query(sql, function(error, row){
				if(error){
					throw error;
				}
				else{
					callback(null, row);
				}
			});
		}		
	}

	Connection.prototype.getCitiesByStateId = function(table_name,state_pk,callback){
		Connection();
		if (self.connection){	
			var query = 'SELECT * FROM ' + table_name + ' WHERE id_provincia = ' + state_pk + ' ORDER BY nombre_localidad';
			self.connection.query(query, function(error, rows){
				if(error){
					throw error;
				}
				else{
					callback(null, rows);
				}
			});
		}			
	}

	Connection.prototype.getCityById = function(table_name,table_pk,callback){
		Connection();
		if (self.connection){	
			var query = 'SELECT * FROM ' + table_name + ' WHERE '+table_pk+' = ' + self.connection.escape(id);
			self.connection.query(query, function(error, rows){
				if(error){
					throw error;
				}
				else{
					callback(null, rows);
				}
			});
		}			
	}

	Connection.prototype.getAllCourses = function(table_name,table_pk,callback){
		Connection();
		if (self.connection){	
			var query = 'SELECT * FROM '+table_name+' ORDER BY ' + table_pk;
			self.connection.query(query, function(error, rows){
				if(error){
					throw error;
				}
				else{
					callback(null, rows);
				}
			});
		}			
	}

	Connection.prototype.getCourseById = function(table_name,table_pk,id,callback){
		Connection();
		if (self.connection){
			var sql = 'SELECT * FROM '+table_name+' WHERE '+table_pk+' = ' + id;
			self.connection.query(sql, function(error, row){
				if(error){
					throw error;
				}
				else{
					callback(null, row);
				}
			});
		}		
	}

	Connection.prototype.getAllCicles = function(table_name,table_pk,callback){
		Connection();
		if (self.connection){	
			var query = 'SELECT * FROM '+table_name+' ORDER BY ' + table_pk;
			self.connection.query(query, function(error, rows){
				if(error){
					throw error;
				}
				else{
					callback(null, rows);
				}
			});
		}			
	}

	Connection.prototype.getCicleById = function(table_name,table_pk,id,callback){
		Connection();
		if (self.connection){

			var sql = 'SELECT * FROM '+table_name+' WHERE '+table_pk+' = ' + self.connection.escape(id);
			self.connection.query(sql, function(error, row){
				if(error){
					throw error;
				}
				else{
					callback(null, row);
				}
			});
		}		
	}

	Connection.prototype.getCoursesTurnsBySchool = function(table_name,table_pk,id,callback){
		Connection();
		if (self.connection){

			var sql = 'SELECT * FROM '+table_name+' WHERE '+table_pk+' = ' + self.connection.escape(id);
			self.connection.query(sql, function(error, row){
				if(error){
					throw error;
				}
				else{
					callback(null, row);
				}
			});
		}		
	}

	Connection.prototype.getAllTurns = function(table_name,table_pk,callback){
		Connection();
		if (self.connection){	
			var query = 'SELECT * FROM '+table_name+' ORDER BY ' + table_pk;
			self.connection.query(query, function(error, rows){
				if(error){
					throw error;
				}
				else{
					callback(null, rows);
				}
			});
		}			
	}

	Connection.prototype.getTurnById = function(table_name,table_pk,id,callback){
		Connection();
		if (self.connection){

			var sql = 'SELECT * FROM '+table_name+' WHERE '+table_pk+' = ' + self.connection.escape(id);
			self.connection.query(sql, function(error, row){
				if(error){
					throw error;
				}
				else{
					callback(null, row);
				}
			});
		}		
	}

	Connection.prototype.getSchoolCourseByYear = function(school_id,callback){
		Connection();
		if(self.connection){

			var sql = 'SELECT * FROM escuela e '+
						'INNER JOIN escuela_ciclo ec ON (e.id = ec,id_escuela) '+
						'INNER JOIN ciclo c ON (ec.id_ciclos = c.id) '+
						'WHERE e.id = '+ self.connection.escape(id) +
						' AND c.description LIKE '+YEAR(CURDATE())+
						' AND c.id IN (SELECT g.id_ciclo FROM grado g)'

			self.connection.query(sql,function(error,row){
				if(error){
					throw error;
				}else{
					callback(null,row);
				}
			});
		}
	}

	Connection.prototype.getSchoolCourseInning = function(school_id,callback){
		//escuelas+ciclos+grados+turnos
		Connection();
		if(self.connection){

			var query = 'SELECT e.id,e.nombre as "Escuela", t.descripcion as "Turno",c.descripcion as "Ciclo",'+
						'g.descripcion as "Grado",ec.cantidad_grado as "Cantidad Grados", ec.id_grado, ec.id_turno, ec.id_escuela '+
						'FROM escuela e '+ 
						'INNER JOIN escuela_ciclo ec ON (e.id = ec.id_escuela) '+
						'INNER JOIN ciclo c on (ec.id_ciclo = c.id) '+
						'INNER JOIN grado g on (ec.id_grado = g.id) '+
						'INNER JOIN turno t on (ec.id_turno = t.id) '+
						'WHERE e.id ='+ self.connection.escape(school_id);
			self.connection.query(query,function(error,row){

				if(error){
					throw error;
				}else{
					callback(null,row);
				}
			});
		};
	};

	Connection.prototype.getAllSchoolCourseInning = function(callback){
		//escuelas+ciclos+grados+turnos
		Connection();
		if(self.connection){

			var query = 'SELECT e.*, ec.*, t.descripcion as "turno", c.descripcion as "ciclo", g.descripcion as "grado", ec.cantidad_grado as "cantidad_grados", l.nombre_localidad as "localidad", p.nombre_provincia as "provincia" '+
						'FROM escuela e '+ 
						'INNER JOIN escuela_ciclo ec ON (e.id = ec.id_escuela) '+
						'INNER JOIN ciclo c on (ec.id_ciclo = c.id) '+
						'INNER JOIN grado g on (ec.id_grado = g.id) '+
						'INNER JOIN turno t on (ec.id_turno = t.id) '+
						'INNER JOIN provincia p on (e.provincia = p.id_provincia) '+
						'INNER JOIN localidad l on (e.localidad = l.id_localidad) '+
						'ORDER BY e.id';
			self.connection.query(query,function(error,row){

				if(error){
					throw error;
				}else{
					callback(null,row);
				}
			});
		};
	};

	Connection.prototype.getAllTeacherSchoollInning = function(callback){
		Connection();
		if(self.connection){

			var query = 'SELECT d.*, pg.*, c.descripcion as "cargo", t.descripcion as "turno", g.descripcion as "grado", p.nombre_provincia as "provincia", e.nombre as "escuela" FROM persona d INNER JOIN persona_grado pg ON (d.dni = pg.dni) INNER JOIN grado g on (pg.id_grado = g.id) INNER JOIN turno t on (pg.id_turno = t.id) INNER JOIN cargo c on (pg.id_cargo = c.id) INNER JOIN escuela e on (pg.id_escuela = e.id) INNER JOIN provincia p on (d.provincia = p.id_provincia) ORDER BY d.dni ';
				self.connection.query(query,function(error,row){
				if(error){
					throw error;
				}else{
					callback(null,row);
				}
			});
		};
	};

	Connection.prototype.insertCourse = function(table_name,data,callback){	
		Connection()	
		if(self.connection){

			var query = "INSERT INTO "+table_name+' SET ?';
			self.connection.query(query,data,function(error,result){
				if(error){
					throw error;
				}else{
					callback(null,{'insertId':data.id});
				}
			});			
		};
	};

	Connection.prototype.insertSchoolCourse = function(table_name,data,callback){
		Connection();				
	
		if (self.connection){			
			
			var query = 'INSERT INTO '+table_name+' SET ?';			
			self.connection.query(query, data, function(error, result){
				if(error){					
					throw error;
				}
				else{
					callback(null,{"insertId" : data.id});
				}
			});		
		}
	}

	Connection.prototype.insertSchoolYear = function(table_name,data,callback){
		Connection();				
		var res = [];	
		if(self.connection){

			for(var i = 0; i < data.length ;i++){
				
				var query = 'INSERT INTO '+table_name+' (id_escuela,id_ciclo,id_turno,id_grado,cantidad_grado) VALUES ('+data[i]['id_escuela']+','+data[i]['id_ciclo']+',"'+data[i]['id_turno']+'",'+data[i]['id_grado']+','+data[i]['cantidad_grado']+')';
				self.connection.query(query,JSON.stringify(data[i]),function(error,result){
					if(error){
						throw error;
					}else{
						res.push(result);
					}
				});
			}
						
			callback(null,res);			
		};
	}

	Connection.prototype.insertPersonCourse = function(table_name,data,callback){
		Connection();				
		var res = [];	
		if(self.connection){

			for(var i = 0; i < data.length ;i++){
				console.log(data[i].cursos.length);
				if( data[i].cursos.length > 0)
				{
					for(var k = 0; k < data[i].cursos.length ;k++){
						var query = 'INSERT INTO '+table_name+' (dni,id_escuela,id_turno,id_grado,id_cargo) VALUES ('+data[i]['dni']+','+data[i]['id']+',"'+data[i].cursos[k]['id_turno']+'",'+data[i].cursos[k]['id_grado']+','+data[i]['cargo']+')';
						self.connection.query(query,JSON.stringify(data[i]),function(error,result){
							if(error){
								throw error;
							}else{
								res.push(result);
							}
						});
					}
				}else{
					var query = 'INSERT INTO '+table_name+' (dni,id_escuela,id_turno,id_grado,id_cargo) VALUES ('+data[i]['dni']+','+data[i]['id']+'," ",14,'+data[i]['cargo']+')';
						self.connection.query(query,JSON.stringify(data[i]),function(error,result){
							if(error){
								throw error;
							}else{
								res.push(result);
							}
						});
				}
				
			}
						
			callback(null,res);			
		};
	}

	return Connection;
})();

module.exports = Connection;