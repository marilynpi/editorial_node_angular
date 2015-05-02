/* Controllers */

angular.module('myApp.controllers', []).
  controller('DocenteCtrl', function ($scope, $http) {
    $http.get('/api/docentes').
    success(function(data, status, headers, config) {
      var docentes = [];
      data.forEach(function (docente, i) {
        docentes.push({
          tipo_dni: docente.tipo_dni,
          id: docente.dni,
          nombre: docente.nombre,
          apellido: docente.apellido,
          fecha_nac: docente.fecha_nac,
          direccion: docente.direccion,
          ciudad: docente.ciudad,
          id_provincia: docente.id_provincia,
          provincia: docente.nombre_provincia,
          cp: docente.cp,
          email: docente.email,
          telefono: docente.telefono,
        });
      });
      $scope.docentes = docentes;
      
    });

  }).
  controller('AddDocenteCtrl', function ($scope, $http, $location) {
    $scope.form = {};
    $scope.submitDocente = function () {
      $http.post('/api/docente', $scope.form).
        success(function(data) {
          $location.path('/readDocente/'+ data[0].dni);
        });
    };
  }).
  controller('EditDocenteCtrl', function ($scope, $http, $location, $routeParams) {
    $scope.form = {};
    $http.get('/api/docente/' + $routeParams.id).
      success(function(data) {
        var docente = {};
        docente = {
            tipo_dni: data[0].tipo_dni,
            id: data[0].dni,
            nombre: data[0].nombre,
            apellido: data[0].apellido,
            fecha_nac: data[0].fecha_nac,
            direccion: data[0].direccion,
            ciudad: data[0].ciudad,
            id_provincia: data[0].id_provincia,
            provincia: data[0].nombre_provincia,
            cp: data[0].cp,
            email: data[0].email,
            telefono: data[0].telefono
        }
      $scope.form = docente;
      });
    $scope.editDocente = function () {
      $http.put('/api/docente/' + $routeParams.id, $scope.form).
        success(function(data) {
          $location.url('/docentes');
        });
    };
  }).
  controller('ReadDocenteCtrl', function ($scope, $http, $routeParams) {
    $http.get('/api/docente/' + $routeParams.id).
    success(function(data) {
      var docente = {};
        docente = {
          tipo_dni: data[0].tipo_dni,
          id: data[0].dni,
          nombre: data[0].nombre,
          apellido: data[0].apellido,
          fechaNacimiento: data[0].fecha_nac,
          direccion: data[0].direccion,
          ciudad: data[0].ciudad,
          idProvincia: data[0].id_provincia,
          provincia: data[0].nombre_provincia,
          cp: data[0].cp,
          email: data[0].email,
          telefono: data[0].telefono
        }
      $scope.docente = docente;
    });
  }).
  controller('DeleteDocenteCtrl', function ($scope, $http, $location, $routeParams) {
    $http.get('/api/docente/' + $routeParams.id).
    success(function(data) {
      $scope.docente = data[0];
    });

    $scope.deleteDocente = function () {
      $http.delete('/api/docente/' + $routeParams.id).
        success(function(data) {
          $location.url('/docentes');
        });
    };

    $scope.home = function () {
      $location.url('/docentes');
    };
  }).
  controller('EscuelaCtrl', function ($scope, $http) {
    $http.get('/api/escuelas').
    success(function(data, status, headers, config) {
      var escuelas = [];
      data.forEach(function (escuela, i) {
        escuelas.push({
          id: escuela.id,
          nombre: escuela.nombre,
          telefono: escuela.telefono,
          email: escuela.email,
          domicilio: escuela.domicilio,
          localidad: escuela.localidad,
          cp: escuela.cp,
          sector: escuela.sector,
          distrito: escuela.distrito,
          ubicacion: escuela.ubicacion,
          provincia: escuela.provincia,
          observaciones: escuela.observaciones,
        });
      });
      $scope.escuelas = escuelas;
      
    });

  }).
  controller('AddEscuelaCtrl', function ($scope, $http, $location) {
    $scope.form = {};
    $scope.submitEscuela = function () {
      console.log('hola');
      $http.post('/api/escuela', $scope.form).
        success(function(data) {
          $location.path('/escuelas');
        });
    };
  }).
  controller('EditEscuelaCtrl', function ($scope, $http, $location, $routeParams) {
    $scope.form = {};
    $http.get('/api/escuela/' + $routeParams.id).
      success(function(data) {
        var escuela = {};
        escuela = {
            id: data[0].id,
            nombre: data[0].nombre,
            telefono: data[0].telefono,
            email: data[0].email,
            domicilio: data[0].domicilio,
            localidad: data[0].nombre_localidad,
            id_localidad: data[0].id_localidad,
            cp: data[0].cp,
            sector: data[0].sector,
            distrito: data[0].distrito,
            ubicacion: data[0].ubicacion,
            provincia: data[0].nombre_provincia,
            id_provincia: data[0].id_provincia,
            observaciones: data[0].observaciones
        }
      $scope.form = escuela;
      });
    $scope.editEscuela = function () {
      $http.put('/api/escuela/' + $routeParams.id, $scope.form).
        success(function(data) {
          $location.url('/escuelas');
        });
    };
  }).
  controller('ReadEscuelaCtrl', function ($scope, $http, $routeParams) {
    $http.get('/api/escuela/' + $routeParams.id).
    success(function(data) {
      console.log(data);
      var escuela = {};
        escuela = {
          id: data[0].id,
          nombre: data[0].nombre,
          telefono: data[0].telefono,
          email: data[0].email,
          domicilio: data[0].domicilio,
          localidad: data[0].nombre_localidad,
          cp: data[0].cp,
          sector: data[0].sector,
          distrito: data[0].distrito,
          ubicacion: data[0].ubicacion,
          provincia: data[0].nombre_provincia,
          observaciones: data[0].observaciones
        }
      $scope.form = escuela;
      console.log(escuela);
    });
  }).
  controller('DeleteEscuelaCtrl', function ($scope, $http, $location, $routeParams) {
    $http.get('/api/escuela/' + $routeParams.id).
    success(function(data) {
      $scope.escuela = data[0];
    });

    $scope.deleteEscuela = function () {
      $http.delete('/api/escuela/' + $routeParams.id).
        success(function(data) {
          $location.url('/escuelas');
        });
    };

    $scope.home = function () {
      $location.url('/escuelas');
    };
  });
