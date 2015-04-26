'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/docentes', {
      templateUrl: 'partials/docentes',
      controller: 'IndexCtrl'
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
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
