'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
.factory("auth", function($cookies,$cookieStore,$location)
{
    return{
        login : function(username, password)
        {
            var usuarios = [{username: 'admin', password: 'admin', rol:'admin' }, {username: 'promotor', password: 'promo', rol:'promo'} ] ;
            var user = _.find(usuarios, function(usuario){return usuario.username == username });
            var msg;
            if( typeof user === 'undefined'){
            	msg = "El usuario no existe"
            	console.log('error user');
            }else if (user.password === password){
            	msg = "OK"
            	console.log('login');
            	$cookies.username = user.username,
            	$cookies.password = user.password;
            	$cookies.rol = user.rol;
            }else{
            	msg = "Password incorrecta para el usuario "+ user.username+".";
            	console.log('error password');
            }
            console.log(typeof user, msg);
            return msg;
            //creamos la cookie con el nombre que nos han pasado
            //mandamos a la home
        },
        logout : function()
        {
            //al hacer logout eliminamos la cookie con $cookieStore.remove
            $cookieStore.remove("username"),
            $cookieStore.remove("password");
            //mandamos al login
            $location.path("/login");
        },
        checkStatus : function()
        {
            //creamos un array con las rutas que queremos controlar
            var rutasPrivadas = ["/docentes","/escuelas","/libros"];
            if(this.in_array($location.path(),rutasPrivadas) && typeof($cookies.username) == "undefined")
            {
                $location.path("/login");
            }
            //en el caso de que intente acceder al login y ya haya iniciado sesión lo mandamos a la home
            if(this.in_array("/login",rutasPrivadas) && typeof($cookies.username) != "undefined")
            {
                $location.path("/docentes");
            }
        },
        in_array : function(needle, haystack)
        {
            var key = '';
            for(key in haystack)
            {
                if(haystack[key] == needle)
                {
                    return true;
                }
            }
            return false;
        }
    }
})/*.
run(function($rootScope, auth)
{
    //al cambiar de rutas
    $rootScope.$on('$routeChangeStart', function()
    {
        //llamamos a checkStatus, el cual lo hemos definido en la factoria auth
        //la cuál hemos inyectado en la acción run de la aplicación
        auth.checkStatus();
    })
})*/;