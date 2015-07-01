var User = (function(){
	
	var self = this;
	var Connection = require('../models/database');
	var	connection = new Connection();

	function User(){
		self.table_name = 'usuario';
		self.table_pk = 'id_usuario'; 
	};

	User.prototype.getUser = function(user_id,user_pass,callback,req){
		User();
		connection.getUser(self.table_name,user_id,user_pass,callback,req);
	};

	User.prototype.getUserByName = function(username,done){
		User();
		connection.getUserByName(self.table_name, username, done);
	};

	return User;
})();

module.exports = User;