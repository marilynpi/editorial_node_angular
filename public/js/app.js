
angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'underscore'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/docentes', {
      templateUrl: 'partials/docentes',
      controller: 'DocenteCtrl'
    }).
    when('/deleteDocente/:id', {
      templateUrl: 'partials/deleteDocente',
      controller: 'DeleteDocenteCtrl'
    }).
    when('/addDocente', {
        templateUrl: 'partials/addDocente',
        controller: 'AddDocenteCtrl'
    }).
    when('/readDocente/:id', {
      templateUrl: 'partials/readDocente',
      controller: 'ReadDocenteCtrl'
    }).
    when('/editDocente/:id', {
      templateUrl: 'partials/editDocente',
      controller: 'EditDocenteCtrl'
    }).
    when('/escuelas', {
      templateUrl: 'partials/escuelas',
      controller: 'EscuelaCtrl'
    }).
    when('/deleteEscuela/:id', {
      templateUrl: 'partials/deleteEscuela',
      controller: 'DeleteEscuelaCtrl'
    }).
    when('/addEscuela', {
        templateUrl: 'partials/addEscuela',
        controller: 'AddEscuelaCtrl'
    }).
    when('/readEscuela/:id', {
      templateUrl: 'partials/readEscuela',
      controller: 'ReadEscuelaCtrl'
    }).
    when('/editEscuela/:id', {
      templateUrl: 'partials/editEscuela',
      controller: 'EditEscuelaCtrl'
    }).
    when('/docenteAddEscuela', {
        templateUrl: 'partials/docenteAddEscuela',
        controller: 'AddDocenteEscuelaCtrl'
    }).
    when('/libros', {
      templateUrl: 'partials/libros',
      controller: 'LibroCtrl'
    }).
    when('/libro/borrar/:id', {
      templateUrl: 'partials/deleteLibro',
      controller: 'DeleteLibroCtrl'
    }).
    when('/libro/agregar', {
        templateUrl: 'partials/addLibro',
        controller: 'AddLibroCtrl'
    }).
    when('/libro/editar/:id', {
      templateUrl: 'partials/editLibro',
      controller: 'EditLibroCtrl'
    }).
    when('/colecciones', {
      templateUrl: 'partials/colecciones',
      controller: 'ColeccionCtrl'
    }).
    when('/coleccion/borrar/:id', {
      templateUrl: 'partials/deleteColeccion',
      controller: 'DeleteColeccionCtrl'
    }).
    when('/coleccion/agregar', {
        templateUrl: 'partials/addColeccion',
        controller: 'AddColeccionCtrl'
    }).
    when('/coleccion/editar/:id', {
      templateUrl: 'partials/editColeccion',
      controller: 'EditColeccionCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
