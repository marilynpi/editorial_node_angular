var City = (function(){
	
	var self = this;
	var Connection = require('../models/database');
	var	connection = new Connection();

	function City(){
		self.table_name = 'localidad';
		self.table_pk = 'id_localidad'; 
	};
	
	City.prototype.getCities = function(state_pk,callback){
		City();
		connection.getCitiesByStateId(self.table_name,state_pk,callback);
	};

	City.prototype.getCity = function(id,callback){
		City()
		connection.getCityById(self.table_name,self.table_pk,id,callback);
	};
	
	return City;
})();

module.exports = City;