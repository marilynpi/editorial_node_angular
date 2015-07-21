
angular.module('myApp', [
  'app.routes',
  'controllers',
  'authService', //servicio alexis
  'filters',
  'directives'
])
.config(function ($httpProvider) {
  
  $httpProvider.interceptors.push('AuthInterceptor');

});
