var State = (function(){
	
	var self = this;
	var Connection = require('../models/database');
	var	connection = new Connection();

	function State(){
		self.table_name = 'provincia';
		self.table_pk = 'id_provincia'; 
	};
	
	State.prototype.getStates = function(callback){
		State();
		connection.getAllStates(self.table_name,self.table_pk,callback);
	};

	State.prototype.getState = function(id,callback){
		State()
		connection.getStatesById(self.table_name,self.table_pk,id,callback);
	};
	
	return State;
})();

module.exports = State;