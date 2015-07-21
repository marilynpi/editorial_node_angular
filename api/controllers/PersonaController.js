/**
 * PersonaController
 *
 * @description :: Server-side logic for managing personas
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
 
module.exports = {
  create: function (request, response) {
    if (request.body.password !== request.body.confirmPassword) {
      return response.json(401, {error: 'Verificacion de contraseña no coincide'});
    }
    Persona.create(request.body).exec(function (error, persona) {
      if (error) {
        return response.json(error.status, {error: error});
      }
      // If user created successfuly we return user and token as response
      if (persona) {
        // NOTE: payload is { dni: persona.dni}
        response.json(200, {persona: persona, token: jwToken.issue({dni: persona.dni})});
      }
    });
  },
  docente: function(request, response){
    Persona.find().populateAll().where({rol:{nombre:"docente"}}).exec(function(error,persona){
      return response.json(persona);
    });
  }
};