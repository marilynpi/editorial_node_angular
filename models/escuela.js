var School = (function(){
	
	var self = this;
	var Connection = require('../models/database');
	var	connection = new Connection();

	function School(){
		self.table_name = 'escuela';
		self.table_pk = 'id'; 
	};
	
	School.prototype.getEscuelas = function(callback){
		School();
		connection.getAllSchools(self.table_name,self.table_pk,callback);
	};

	School.prototype.getEscuela = function(id,callback){
		School()
		connection.getSchoolById(self.table_name,self.table_pk,id,callback);
	};

	School.prototype.insertEscuela = function(data,callback){
		School()
		console.log(self.table_name,self.table_pk,data);
		connection.insertSchool(self.table_name,self.table_pk,data,callback);	
	};

	School.prototype.updateEscuela = function(data, callback){
		School()
		connection.updateSchool(self.table_name,self.table_pk,data, callback);
	};

	School.prototype.deleteEscuelas = function(id, callback){
		School()
		connection.deleteSchool(self.table_name,self.table_pk,id, callback);
	};
	
	return School;
})();

module.exports = School;