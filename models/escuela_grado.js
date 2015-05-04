var SchoolCourse = (function(){
	
	var self = this;
	var Connection = require('../models/database');
	var	connection = new Connection();

	function SchoolCourse(){
		self.table_name = 'escuela_ciclo';
		self.table_pk = ['id_escuela', 'id_turno', 'id_grado']; 
	};
	function Course(){
		self.table_name = 'grado';
		self.table_pk = 'id'; 
	};
	function Turn(){
		self.table_name = 'turno';
		self.table_pk = 'id'; 
	};
	SchoolCourse.prototype.getGrados = function(callback){
		Course();
		connection.getAllCourses(self.table_name,self.table_pk,callback);
	};

	SchoolCourse.prototype.getGrado = function(id,callback){
		Course();
		connection.getCourseById(self.table_name,self.table_pk,id,callback);
	};

	SchoolCourse.prototype.getTurnos = function(callback){
		Turn();
		connection.getAllTurns(self.table_name,self.table_pk,callback);
	};

	SchoolCourse.prototype.getTurno = function(id,callback){
		Turn();
		connection.getTurnById(self.table_name,self.table_pk,id,callback);
	};

	SchoolCourse.prototype.insertEscuelaGrado = function(data,callback){
		SchoolCourse()
		connection.insertSchoolCourse(self.table_name,data,callback);	
	};
	

	return SchoolCourse;
})();

module.exports = SchoolCourse;