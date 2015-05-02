var Teacher = (function(){

	var self = this;
	var Connection = require('../models/database');
	var	connection = new Connection();

	function Teacher(){
		self.table_name = 'persona';
		self.table_pk = 'dni';
	};

	Teacher.prototype.getPersonas = function(callback){
		Teacher();
		console.log(self.table_name);
		connection.getAllTeacher(self.table_name,self.table_pk,callback);				
	}

	//obtenemos un usuario por su id
	Teacher.prototype.getPersona = function(id,callback){
		Teacher();
		connection.getTeacherById(self.table_name,self.table_pk,id,callback);	
	}

	Teacher.prototype.insertPersona = function(data,callback){
		console.log(data, self.table_name);
		Teacher();
		connection.insertTeacher(self.table_name,data,callback);		
	}
	
	Teacher.prototype.updatePersona = function(data, callback){
		Teacher();
		connection.updateTeacher(self.table_name,self.table_pk,data,callback);	
	}
	
	Teacher.prototype.deletePersona = function(id, callback)
	{
		Teacher();
		connection.deleteTeacher(self.table_name,self.table_pk,id,callback);
	}

	return Teacher;
})();

module.exports = Teacher;


