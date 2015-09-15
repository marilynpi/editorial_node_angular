angular.module('app.routes',['ngRoute'])

.config(function($routeProvider, $locationProvider){
    $routeProvider.
    when('/docentes', {
      templateUrl: 'views/partials/docentes.html',
      controller: 'DocenteCtrl',
      controllerAs: 'docentes'
    }).
    when('/docente/borrar/:id', {
        templateUrl: 'views/partials/deleteDocente.html',
        controller: 'DeleteDocenteCtrl'
    }).
    when('/docente/agregar', {
        templateUrl: 'views/partials/addDocente.html',
        controller: 'AddDocenteCtrl'
    }).
    when('/docente/editar/:id', {
        templateUrl: 'views/partials/editDocente.html',
        controller: 'EditDocenteCtrl'
    }).
    when('/escuelas', {
        templateUrl: 'views/partials/escuelas.html',
        controller: 'EscuelaCtrl'
    }).
    when('/escuela/borrar/:id', {
      templateUrl: 'views/partials/deleteEscuela.html',
      controller: 'DeleteEscuelaCtrl'
    }).
    when('/escuela/agregar', {
        templateUrl: 'views/partials/addEscuela.html',
        controller: 'AddEscuelaCtrl'
    }).
    when('/escuela/editar/:id', {
      templateUrl: 'views/partials/editEscuela.html',
      controller: 'EditEscuelaCtrl'
    }).
    when('/docente/escuela/agregar', {
        templateUrl: 'views/partials/docenteAddEscuela.html',
        controller: 'AddDocenteEscuelaCtrl'
    }).
    when('/libros', {
      templateUrl: 'views/partials/libros.html',
      controller: 'LibroCtrl'
    }).
    when('/libro/borrar/:id', {
      templateUrl: 'views/partials/deleteLibro.html',
      controller: 'DeleteLibroCtrl'
    }).
    when('/libro/agregar', {
        templateUrl: 'views/partials/addLibro.html',
        controller: 'AddLibroCtrl'
    }).
    when('/libro/editar/:id', {
      templateUrl: 'views/partials/editLibro.html',
      controller: 'EditLibroCtrl'
    }).
    when('/colecciones', {
      templateUrl: 'views/partials/colecciones.html',
      controller: 'ColeccionCtrl'
    }).
    when('/coleccion/borrar/:id', {
      templateUrl: 'views/partials/deleteColeccion.html',
      controller: 'DeleteColeccionCtrl'
    }).
    when('/coleccion/agregar', {
        templateUrl: 'views/partials/addColeccion.html',
        controller: 'AddColeccionCtrl'
    }).
    when('/coleccion/editar/:id', {
      templateUrl: 'views/partials/editColeccion.html',
      controller: 'EditColeccionCtrl'
    }).
    when('/login', {
      templateUrl: 'views/partials/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    }).
    when("/", {
        templateUrl : "views/partials/home.html",
        controller : "homeCtrl"
    });
    /*.otherwise({
      redirectTo: '/'
    });*/

  $locationProvider.html5Mode(true);
});


