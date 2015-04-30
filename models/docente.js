var Teacher = (function(){

	var self = this;
	var Connection = require('../models/database');
	var	connection = new Connection();

	function Teacher(){
		self.table_name = 'persona';
		self.table_pk = 'dni';
	};

	Teacher.prototype.getPersonas = function(callback){
		connection.getAllTeacher(self.table_name,self.table_pk,callback);				
	}

	//obtenemos un usuario por su id
	Teacher.prototype.getPersona = function(id,callback){
		connection.getTeacherById(self.table_name,self.table_pk,id,callback);	
	}

	Teacher.prototype.insertPersona = function(data,callback){
		connection.insertTeacher(self.table_name,data,callback);		
	}
	
	Teacher.prototype.updatePersona = function(data, callback){
		connection.updateTeacher(self.table_name,self.table_pk,data,callback);	
	}
	
	Teacher.prototype.deletePersona = function(id, callback)
	{
		connection.deleteTeacher(self.table_name,self.table_pk,id,callback);
	}

})();

module.exports = Teacher;


