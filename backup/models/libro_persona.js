var BookTeacher = (function(){

	var self = this;
	var Connection = require('../models/database');
	var connection = new Connection();	
	
	function BookTeacher(){
		self.table_name = 'libro_persona';
		self.table_id = ['isbn','dni'];
	};

	BookTeacher.prototype.insertNewBookTeacher = function(data, callback){
		BookTeacher();
		connection.insertNewBookTeacher(self.table_name, data, callback);
	};
	
	BookTeacher.prototype.deleteBookTeacher = function(id, callback){
		BookTeacher();
		connection.deleteBookTeacher(self.table_name, self.table_id, id,callback);
	};
	
	BookTeacher.prototype.updateBookTeacher = function(data, id, callback){
		BookTeacher();
		connection.updateBookTeacher(self.table_name, self.table_id, data, callback);
	};

	return  BookTeacher;
})();

module.exports = BookTeacher;