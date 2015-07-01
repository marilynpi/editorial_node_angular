var fs = require('fs');

module.exports = {

servir: function(request, response) {
    var angularApp = __dirname + '/../../assets/index.html';
    
    fs.exists(angularApp, function (exists) {
      if (!exists) {
        return response.notFound('El archivo requerido no existe');
      }

      fs.createReadStream(angularApp).pipe(response);
    });
  }
};