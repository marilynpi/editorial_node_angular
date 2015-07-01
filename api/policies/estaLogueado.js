/**
 * estaLogueado
 *
 * @description :: Policy to check if user is authorized with JSON web token
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Policies
 */
 
module.exports = function (request, response, next) {
  var token;
 
  if (request.headers && request.headers.authorization) {
    
    //se convierte el header en un array de 2 partes con split
    var parts = request.headers.authorization.split(' ');
    if (parts.length == 2) {
      var scheme = parts[0],
        credentials = parts[1];
 
    //funcion test para chequear si el esquema pasado es Bearer
      if (/^Bearer$/i.test(scheme)) {
        token = credentials;
      }
    } else {
      return response.json(401, {error: 'el formato correcto es Authorization: Bearer [token]'});
    }
  } else if (request.param('token')) {
    token = request.param('token');
    // We delete the token from param to not mess with blueprints
    delete request.query.token;
  } else {
    return response.json(401, {error: 'No se encontro un header'});
  }
 
  jwToken.verify(token, function (error, token) {
    if (error) return response.json(401, {error: 'Token Invalido!'});
    request.token = token; // This is the decrypted token or the payload you provided
    next();
  });
};