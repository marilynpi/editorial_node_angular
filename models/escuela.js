//llamamos al paquete mysql que hemos instalado
var mysql = require('mysql'),
//creamos la conexion a nuestra base de datos con los datos de acceso de cada uno
connection = mysql.createConnection(
	{ 
		host: 'localhost', 
		user: 'root',  
		password: '', 
		database: 'editorial'
	}
);

//creamos un objeto para ir almacenando todo lo que necesitemos
var escuelaModel = {};
var table = 'escuela';
var pk = 'id';

//obtenemos todos los usuarios
escuelaModel.getEscuelas = function(callback)
{
	if (connection) 
	{
		connection.query('SELECT * FROM '+table+', provincia, localidad WHERE escuela.provincia = provincia.id_provincia AND escuela.localidad = localidad.id_localidad ORDER BY '+pk, function(error, rows) {
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
}

//obtenemos un usuario por su id
escuelaModel.getEscuela = function(id,callback)
{
	if (connection) 
	{
		var sql = 'SELECT * FROM '+table+', provincia, localidad WHERE escuela.provincia = provincia.id_provincia AND escuela.localidad = localidad.id_localidad AND '+pk+' = ' + connection.escape(id);
		connection.query(sql, function(error, row) 
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

//añadir un nuevo usuario
escuelaModel.insertEscuela = function(data,callback)
{
	if (connection) 
	{
		connection.query('INSERT INTO '+table+' SET ?', data, function(error, result) 
		{
			if(error)
			{
				throw error;
			}
			else
			{
				//devolvemos la última id insertada
				console.log(data, data.id)
				callback(null,{"insertId" : data.id});
			}
		});
	}
}

//actualizar un usuario
escuelaModel.updateEscuela = function(data, callback)
{

	if(connection)
	{
		var sql = 'UPDATE '+table+' SET nombre = ' + connection.escape(data.nombre) + ',' + 
		'telefono = ' + connection.escape(data.telefono) + ',' +
		'email = ' + connection.escape(data.email) + ',' + 
		'domicilio = ' + connection.escape(data.domicilio) + ',' +
		'localidad = ' + connection.escape(data.localidad) + ',' +
		'cp = ' + connection.escape(data.cp) + ',' + 
		'sector = ' + connection.escape(data.sector) + ',' +
		'distrito = ' + connection.escape(data.distrito) + ',' +
		'ubicacion = ' + connection.escape(data.ubicacion) + ',' +
		'provincia = ' + connection.escape(data.provincia) + ',' +
		'observaciones = ' + connection.escape(data.observaciones) +
		' WHERE '+pk+' = ' + data.id;
		connection.query(sql, function(error, result) 
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

//eliminar un usuario pasando la id a eliminar
escuelaModel.deleteEscuelas = function(id, callback)
{
	if(connection)
	{
		var sqlExists = 'SELECT * FROM '+table+' WHERE '+pk+' = ' + connection.escape(id);
		connection.query(sqlExists, function(err, row) 
		{
			//si existe la id del usuario a eliminar
			if(row)
			{
				var sql = 'DELETE FROM '+table+' WHERE '+pk+' = ' + connection.escape(id);
				connection.query(sql, function(error, result) 
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

//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = escuelaModel;