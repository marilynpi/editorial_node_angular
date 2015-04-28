//llamamos al paquete mysql que hemos instalado
var mysql = require('mysql'),
//creamos la conexion a nuestra base de datos con los datos de acceso de cada uno
connection = mysql.createConnection(
	{ 
		host: 'localhost', 
		user: 'root',  
		password: '123', 
		database: 'editorial'
	}
);

//creamos un objeto para ir almacenando todo lo que necesitemos
var personaModel = {};
var table = 'persona';
var pk = 'dni';

//obtenemos todos los usuarios
personaModel.getPersonas = function(callback)
{
	if (connection) 
	{
		connection.query('SELECT * FROM '+table+', provincia WHERE provincia = id_provincia ORDER BY '+pk, function(error, rows) {
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
personaModel.getPersona = function(id,callback)
{
	if (connection) 
	{
		var sql = 'SELECT * FROM '+table+', provincia WHERE provincia = id_provincia AND '+pk+' = ' + connection.escape(id);
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
personaModel.insertPersona = function(data,callback)
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
				callback(null,{"insertId" : data.dni});
			}
		});
	}
}

//actualizar un usuario
personaModel.updatePersona = function(data, callback)
{

	if(connection)
	{
		var sql = 'UPDATE '+table+' SET nombre = ' + connection.escape(data.nombre) + ',' + 
		'apellido = ' + connection.escape(data.apellido) + ',' +
		'nombre = ' + connection.escape(data.nombre) + ',' + 
		'tipo_dni = ' + connection.escape(data.tipo_dni) + ',' +
		'direccion = ' + connection.escape(data.direccion) + ',' +
		'ciudad = ' + connection.escape(data.ciudad) + ',' + 
		'provincia = ' + connection.escape(data.id_provincia) + ',' +
		'cp = ' + connection.escape(data.cp) + ',' +
		'email = ' + connection.escape(data.email) + ',' +
		'telefono = ' + connection.escape(data.telefono) +
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
personaModel.deletePersona = function(id, callback)
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
module.exports = personaModel;