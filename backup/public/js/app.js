
angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'underscore',
  'ngCookies'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/docentes', {
      templateUrl: 'partials/docentes',
      controller: 'DocenteCtrl'
    }).
    when('/docente/borrar/:id', {
      templateUrl: 'partials/deleteDocente',
      controller: 'DeleteDocenteCtrl'
    }).
    when('/docente/agregar', {
        templateUrl: 'partials/addDocente',
        controller: 'AddDocenteCtrl'
    }).
    when('/docente/editar/:id', {
      templateUrl: 'partials/editDocente',
      controller: 'EditDocenteCtrl'
    }).
    when('/escuelas', {
      templateUrl: 'partials/escuelas',
      controller: 'EscuelaCtrl'
    }).
    when('/escuela/borrar/:id', {
      templateUrl: 'partials/deleteEscuela',
      controller: 'DeleteEscuelaCtrl'
    }).
    when('/escuela/agregar', {
        templateUrl: 'partials/addEscuela',
        controller: 'AddEscuelaCtrl'
    }).
    when('/escuela/editar/:id', {
      templateUrl: 'partials/editEscuela',
      controller: 'EditEscuelaCtrl'
    }).
    when('/docente/escuela/agregar', {
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
    when('/', {
      templateUrl: 'partials/login',
      controller: 'LoginCtrl'
    }).
    when("/home", {
        controller : "homeCtrl",
        templateUrl : "partials/home"
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
