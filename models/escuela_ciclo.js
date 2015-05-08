var SchoolYear = (function(){
	
	var self = this;
	var Connection = require('../models/database');
	var	connection = new Connection();

	function SchoolYear(){
		self.table_name = 'escuela_ciclo';
		self.table_pk = ['id_escuela', 'id_ciclos', 'id_turno', 'id_grado']; 
	};
	function Course(){
		self.table_name = 'grado';
		self.table_pk = 'id'; 
	};
	function Turn(){
		self.table_name = 'turno';
		self.table_pk = 'id'; 
	};

	function Cicle(){
		self.table_name = 'ciclo';
		self.table_pk = 'id'; 
	};

	SchoolYear.prototype.getGrados = function(callback){
		Course();
		connection.getAllCourses(self.table_name,self.table_pk,callback);
	};

	SchoolYear.prototype.getGradosPorCiclo = function(id,callback){
		Course();
		self.table_pk = 'id_ciclo'
		connection.getCourseById(self.table_name,self.table_pk,id,callback);
	};

	SchoolYear.prototype.getGrado = function(id,callback){
		Course();
		connection.getCourseById(self.table_name,self.table_pk,id,callback);
	};

	SchoolYear.prototype.insertGrado = function(data,callback){
		Course();
		connection.insertCourse(self.table_name,data,callback);
	};

	SchoolYear.prototype.getTurnos = function(callback){
		Turn();
		connection.getAllTurns(self.table_name,self.table_pk,callback);
	};

	SchoolYear.prototype.getTurno = function(id,callback){
		Turn();
		connection.getTurnById(self.table_name,self.table_pk,id,callback);
	};

	SchoolYear.prototype.getCiclos = function(callback){
		Cicle();
		connection.getAllCicles(self.table_name,self.table_pk,callback);
	};

	SchoolYear.prototype.getCiclo = function(id,callback){
		Cicle();
		connection.getCicleById(self.table_name,self.table_pk,id,callback);
	};

	SchoolYear.prototype.insertEscuelaGrado = function(data,callback){
		SchoolYear()		
		connection.insertSchoolYear(self.table_name,data,callback);	
	};
	
	SchoolYear.prototype.getEscuelaTurnoCiclo = function(data,callback){
		connection.getSchoolCourseInning(data,callback);	
	};
	SchoolYear.prototype.getGradosTurnosPorEscuela = function(id,callback){
		SchoolYear();
		connection.getCoursesTurnsBySchool(self.table_name,self.table_pk[1],id,callback);
	};


	return SchoolYear;
})();

module.exports = SchoolYear;