/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    //function agregarConversacion
	agregarConversacion:function (request,response) {
		
		//conseguimos todos los datos enviados
		var datos_cliente = request.params.all();

        //si el request es metodo POST y es un websocket
		if(request.isSocket && request.method === 'POST'){

			// This is the message from connected client
			// So add new conversation
			Chat.create(datos_cliente)
				.exec(function(error,datos_cliente){
				    
					console.log(datos_cliente);
					
					Chat.publishCreate({
					    id: datos_cliente.id,
					    mensaje : datos_cliente.mensaje, 
					    usuario:datos_cliente.usuario
					});
				}); 

		}
		else if(request.isSocket){
			// subscribe client to model changes
			Chat.watch(request.socket);
			console.log( 'Usuario subscripto a ' + request.socket.id );
		}
	}
};

