'use strict';

angular.module('authService', [])

.factory('Auth', function($http, $q, AuthToken) {

	// creamos el objeto authFactory
	var authFactory = {};

	// logueamos el usuario
	authFactory.login = function(email, password) {

		// return the promise object and its data
		return $http.post('/api/auth', {
			email: email,
			password: password
		})
			.success(function(data) {
				AuthToken.setToken(data.token);
       			return data;
			});
	};

	// cerramos la sesion de un usuario borrando su token
	authFactory.logout = function() {
		// al no pasar parametro, se borra el token
		AuthToken.setToken();
	};

	// check if a user is logged in
	// checks if there is a local token
	authFactory.logueado = function() {
		if (AuthToken.getToken()) 
			return true;
		else
			return false;	
	};

	// traemos el usuario logueado
	authFactory.getUser = function() {
		if (AuthToken.getToken())
			return $http.get('/api/auth/me', { cache: true });
		else
			return $q.reject({ message: 'El usuario no tiene token.' });		
	};

	// return auth factory object
	return authFactory;

})

// ===================================================
// factory for handling tokens
// inject $window to store token client-side
// ===================================================
.factory('AuthToken', function($window) {

	var authTokenFactory = {};

	// get the token out of local storage
	authTokenFactory.getToken = function() {
		return $window.localStorage.getItem('token');
	};

	// funcion para setear el token
	// si se le pasa un token, setea el mismo en el localstorage
	// si no se le pasa un token, se borra el token en el localstorage
	authTokenFactory.setToken = function(token) {
		if (token)
			$window.localStorage.setItem('token', token);
	 	else
			$window.localStorage.removeItem('token');
	};

	return authTokenFactory;

})

// ===================================================
// application configuration to integrate token into requests
// ===================================================
.factory('AuthInterceptor', function($q, $location, AuthToken) {

	var interceptorFactory = {};

	// esto ocurre en todas las llamadas HTTP
	interceptorFactory.request = function(config) {

		// grab the token
		var token = AuthToken.getToken();

		// if the token exists, add it to the header as x-access-token
		if (token) 
			//@TODO revisar header enviado
			config.headers.Authorization = 'Bearer ' + token;
		
		return config;
	};

	// happens on response errors
	interceptorFactory.responseError = function(response) {

		// if our server returns a 403 or 401 forbidden response
		if (response.status == 403 || response.status == 401) {
			AuthToken.setToken();
			$location.path('/login');
		}

		// return the errors from the server as a promise
		return $q.reject(response);
	};

	return interceptorFactory;
	
});