
angular.module('myApp', [
  'app.routes',
  'controllers',
  'authService', //servicio alexis
  'filters',
  'directives',
  'ui.bootstrap'
])
.config(function ($httpProvider) {
  
  $httpProvider.interceptors.push('AuthInterceptor');

});
