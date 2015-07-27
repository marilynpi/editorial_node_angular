/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
 
module.exports = {
  index: function (request, response) {
    var email = request.param('email');
    var password = request.param('password');
 
    if (!email || !password) {
      return response.json(401, {error: 'email y password requeridos'});
    }
 
    Persona.findOne({email: email}).populate("rol").exec(function (error, persona) {
      if (!persona) {
        return response.json(401, {error: 'email o clave invalido'});
      }
      
      Persona.comparePassword(password, persona, function (error, valida) {
        if (error) {
          return response.json(403, {error: 'Prohibido'});
        }
 
        if (!valida) {
          return response.json(401, {error: 'email o clave incorrecta'});
        } else {
          var token = jwToken.issue({dni : persona.dni });
          request.decoded = token;
          
          response.json({
            persona: persona,
            token: token
          });
        }
      });
    })
  },
  me: function(request, response){
    console.log(request.token);
    //jwToken.verify(request.token)
    Persona.findOne({dni:request.token.dni}).populateAll().exec(function(error,persona){
      return response.json(persona);
    });
  }
};