var Book = (function(){

	var self = this;
	var Connection = require('../models/database');
	var	connection = new Connection();

	function Book(){
		self.table_name = 'libro';
		self.table_pk = 'isbn'; 
	};

	function Collection(){
		self.table_name = 'coleccion';
		self.table_pk = 'id_coleccion'; 
	};

	Book.prototype.getLibros = function(callback){
		Book();
		connection.getAllBook(self.table_name,self.table_pk,callback);				
	}

	Book.prototype.getLibro = function(id,callback){
		Book();
		connection.getBookById(self.table_name,self.table_pk,id,callback);	
	}

	Book.prototype.insertLibro = function(data,callback){
		console.log(data, self.table_name);
		Book();
		connection.insertBook(self.table_name,data,callback);		
	}
	
	Book.prototype.updateLibro = function(data, callback){
		Book();
		connection.updateBook(self.table_name,self.table_pk,data,callback);	
	}
	
	Book.prototype.deleteLibro = function(id, callback)
	{
		Book();
		connection.deleteBook(self.table_name,self.table_pk,id,callback);
	}

	Book.prototype.getColecciones = function(callback){
		Collection();
		connection.getAllCollection(self.table_name,self.table_pk,callback);				
	}

	Book.prototype.getColeccion = function(id,callback){
		Collection();
		connection.getCollectionById(self.table_name,self.table_pk,id,callback);	
	}

	Book.prototype.insertColeccion = function(data,callback){
		Collection();
		connection.insertCollection(self.table_name,data,callback);		
	}
	
	Book.prototype.updateColeccion = function(data, callback){
		Collection();
		connection.updateCollection(self.table_name,self.table_pk,data,callback);	
	}
	
	Book.prototype.deleteColeccion = function(id, callback)
	{
		Collection();
		connection.deleteCollection(self.table_name,self.table_pk,id,callback);
	}

	return Book;
})();

module.exports = Book;


