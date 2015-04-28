var Connection = (function(){
	
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
		this.connection = connection;
	}

	Connection.prototype.getAllSchools = function(table_name,table_pk,callback){
		if (this.connection) 
		{
			var query = 'SELECT * FROM '+table_name+', provincia, localidad WHERE escuela.provincia = provincia.id_provincia AND escuela.localidad = localidad.id_localidad ORDER BY '+table_pk;
			this.connection.query(query, function(error, rows) {
				if(error)
				{
					throw error;
				}
				else
				{
					callback(null, rows);
				}
			});
		}
	};

	Connection.prototype.getSchoolById = function(table_name,table_pk,id,callback){
		if (this.connection) 
		{
			var query = 'SELECT * FROM '+table_name+', provincia, localidad WHERE escuela.provincia = provincia.id_provincia AND escuela.localidad = localidad.id_localidad AND '+table_pk+' = ' + this.connection.escape(id);
			this.connection.query(query, function(error, row) 
			{
				if(error)
				{
					throw error;
				}
				else
				{
					callback(null, row);
				}
			});
		}
	}

	Connection.prototype.insertSchool = function(table_name,data,callback){
		if (this.connection) 
		{
			var query = 'INSERT INTO '+table_name+' SET ?';
			this.connection.query(query, data, function(error, result) 
			{
				if(error)
				{
					throw error;
				}
				else
				{
					console.log(data, data.id)
					callback(null,{"insertId" : data.id});
				}
			});
		}
	}

	Connection.prototype.updateSchool = function(table_name,table_pk,data, callback){
		if(this.connection)
		{
			var sql = 'UPDATE '+table_name+' SET nombre = ' + this.connection.escape(data.nombre) + ',' + 
			'telefono = ' + this.connection.escape(data.telefono) + ',' +
			'email = ' + this.connection.escape(data.email) + ',' + 
			'domicilio = ' + this.connection.escape(data.domicilio) + ',' +
			'localidad = ' + this.connection.escape(data.localidad) + ',' +
			'cp = ' + this.connection.escape(data.cp) + ',' + 
			'sector = ' + this.connection.escape(data.sector) + ',' +
			'distrito = ' + this.connection.escape(data.distrito) + ',' +
			'ubicacion = ' + this.connection.escape(data.ubicacion) + ',' +
			'provincia = ' + this.connection.escape(data.provincia) + ',' +
			'observaciones = ' + this.connection.escape(data.observaciones) +
			' WHERE '+table_pk+' = ' + data.id;
			this.connection.query(sql, function(error, result) 
			{
				if(error)
				{
					throw error;
				}
				else
				{
					callback(null,{"msg":"success"});
				}
			});
		}
	}

	Connection.prototype.deleteSchool = function(table_name,table_pk,id, callback){
		if(this.connection)
		{
			var sqlExists = 'SELECT * FROM '+table_name+' WHERE '+table_pk+' = ' + this.connection.escape(id);
			this.connection.query(sqlExists, function(err, row){
				if(row)
				{
					var sql = 'DELETE FROM '+table_name+' WHERE '+table_pk+' = ' + id;//this.connection.escape(id);
					console.log("SFDSDSDFS"+sql);
					this.connection.query(sql, function(error, result) 
					{
						if(error)
						{
							throw error;
						}
						else
						{
							callback(null,{"msg":"deleted"});
						}
					});
				}
				else
				{
					callback(null,{"msg":"notExist"});
				}
			});
		}
	}


	return Connection;
})();

module.exports = Connection;