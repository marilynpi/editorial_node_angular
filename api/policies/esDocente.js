/*
 *esDocente
 *
 *@description :: Politica para roles Docente
 *
*/

module.exports = function(request, response, next){
        
    var dni = request.param('id');
    
    //comprobamos que el metodo sea PUT y que el dni que estamos editando es del usuario que esta logueado
    if(request.method.toUpperCase() == "PUT" && dni == request.token.dni)
    {
        return next();
    }
    else
    {
        return response.json(500, {error: 'No puedes editar los datos de otro usuario'}); 
    };
    
    //comprobamos que el usuario tenga el rol "docente" para poder continuar    
    Persona.findOne({dni: request.token.dni}).populate("rol").exec(function (error, persona) {
        
        var rol = persona.rol.nombre.toLowerCase();
        
        if(rol == "docente") return next();
        else{
            return response.json(500, {error: 'Debes tener el rol Docente para ingresar a esta ruta'});
        };
    });
    
    
};