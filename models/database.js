var Connection = (function(){
	
	//Self represents "this", without the well-known fucking scope issue.
	var self = this;
	
	var mysql = require('mysql');
	var connection = mysql.createConnection(
						{ 
							host: 'localhost', 
							user: 'root',  
							password: '123', 
							database: 'editorial'
						}
					);		

	function Connection(){
		self.connection = connection;		
	}

	Connection.prototype.getAllSchools = function(table_name,table_pk,callback){
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
	
		if (self.connection){			
			
			var query = 'INSERT INTO '+table_name+' SET ?';			
			self.connection.query(query, data, function(error, result){
				if(error){					
					throw error;
				}
				else{
					console.log(data, data.id);
					callback(null,{"insertId" : data.id});
				}
			});		
		}
	}

	Connection.prototype.updateSchool = function(table_name,table_pk,data, callback){
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
		if(self.connection){
		
			var sqlExists = 'SELECT * FROM '+table_name+' WHERE '+table_pk+' = ' + self.connection.escape(id);
			self.connection.query(sqlExists, function(err, row){				
				if(row){
				
					var sql = 'DELETE FROM '+table_name+' WHERE '+table_pk+' = ' + self.connection.escape(id);
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

	Connection.prototype.getAllStates = function(table_name,table_pk,callback){
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
		if (self.connection){	
			var query = 'SELECT * FROM '+table_name+' ORDER BY ' + table_pk;
			self.connection.query(query, function(error, rows){
				if(error){
					throw error;
				}
				else{
					console.log(rows);
					callback(null, rows);
				}
			});
		}			
	}

	Connection.prototype.getTurnById = function(table_name,table_pk,id,callback){
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
		if(self.connection){

			var query = 'SELECT e.id,e.nombre as "Escuela", t.descripcion as "Turno",c.descripcion as "Ciclo",'+
						'g.descripcion as "Grado",ec.cantidad_grado as "Cantidad Grados" '+
						'FROM escuela e '+ 
						'INNER JOIN escuela_ciclo ec ON (e.id = ec.id_escuela) '+
						'INNER JOIN ciclo c on (ec.id_ciclos = c.id) '+
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

	Connection.prototype.insertCourse = function(table_name,data,callback){

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
	
		if (self.connection){			
			
			var query = 'INSERT INTO '+table_name+' SET ?';			
			self.connection.query(query, data, function(error, result){
				if(error){					
					throw error;
				}
				else{
					console.log(data, data.id);
					callback(null,{"insertId" : data.id});
				}
			});		
		}
	}

	Connection.prototype.insertSchoolYear = function(table_name,data,callback){

		if(self.connection){

			var query = 'INSERT INTO '+table_name+' SET ?';
			var asd=self.connection.query(query,data,function(error,result){
				if(error){
					throw error;
				}else{
					callback(null,{'insertId':data.id});
				}
			});

			cosole.log("QUERY QUERY"+asd.sql);
		};
	};

	return Connection;
})();

module.exports = Connection;