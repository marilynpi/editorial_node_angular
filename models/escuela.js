var School = (function(){
	var Connection = require('../models/database');
	var	connection = new Connection();

	function School(){
		this.table_name = 'escuela';
		this.table_pk = 'id'; 
	};
	
	School.prototype.getEscuelas = function(callback){
		connection.getAllSchools(this.table_name,this.table_pk,callback);
	};

	School.prototype.getEscuela = function(id,callback){
		connection.getSchoolById(this.table_name,this.table_pk,id,callback);
	};

	School.prototype.insertEscuela = function(data,callback){
		connection.insertSchool(this.table_name,this.table_pk,data,callback);	
	};

	School.prototype.updateEscuela = function(data, callback){
		connection.updateSchool(this.table_name,this.table_pk,data, callback);
	};

	School.prototype.deleteEscuelas = function(id, callback){
		connection.deleteSchool(this.table_name,this.table_pk,id, callback);
	};
	
	return School;
})();

module.exports = School;