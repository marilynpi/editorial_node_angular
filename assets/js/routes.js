// inject ngRoute for all our routing needs
angular.module('routerRoutes', ['ngRoute'])

// configure our routes
.config(function($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/partials/home.html',
            controller  : 'homeController',
            controllerAs: 'home'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'views/partials/login.html',
            controller  : 'aboutController',
            controllerAs: 'about'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'views/partials/libros.html',
            controller  : 'contactController',
            controllerAs: 'contact'
        });

    $locationProvider.html5Mode(true);
});