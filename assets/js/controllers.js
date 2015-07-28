/* Controllers */

angular.module('controllers', [])

  .controller('mainController',function($rootScope, $scope,$location, Auth){
    
    var vm = this;

    // chequeamos para ver si el usuario esta logueado en cada cambio de ruta
	  $rootScope.$on('$routeChangeStart', function() {
		
		console.log("Cambio de ruta");
		
		if(!Auth.logueado()){
		  $location.url("/login");
		}
		
		vm.logueado = Auth.logueado();	

		// traemos la informacion del usuario en la carga de la pagina
		Auth.getUser()
			.then(function(data) {
				vm.usuario = data.data;
			});	
	  });	
    
    this.cambiarVista = function(ruta){
      $location.url("/" + ruta);
    };
    
    // traemos la info del usuario logueado
	  vm.logueado = Auth.logueado();
	  
	  // function to handle logging out
  	vm.cerrarSesion = function() {
  		Auth.logout();
  		vm.usuario = '';
  		
  		$location.path('/login');
  	};
    
  })
  .controller('DocenteCtrl', function ($scope, $http) {
    $http.get('/api/personagrado')
    .success(function(data, status, headers, config) {
      $scope.docentes = data;
    });

  }).
  controller('AddDocenteCtrl', function ($scope, $http, $location) {
    angular.element(document.querySelector('#escuelas')).css('display', 'none');
    $scope.form = {};
    $scope.listaEscuelas = [];
    $scope.cursoShow = false;
    $scope.dataEscuelaShow = false;
    
    $http.get('/api/provincia')
    .success(function(data, status, headers, config) {
      var provincias = [];
      data.forEach(function (provincia, i) {
        provincias.push({
          id_provincia: provincia.id_provincia,
          nombre_provincia: provincia.nombre_provincia,
        });
      });
      $scope.provincias = provincias;
    });
    
    $scope.submitDocente = function () {
      console.log($scope.form, $scope.listaEscuelas);
      var resultado = {
        docente: $scope.form,
        escuelas: $scope.listaEscuelas
        };
      
      $http.post('/api/personagrado',resultado)
      .success(function(data){
        console.log(data);
      })
      
      /*$http.post('/api/docente', $scope.form).
        success(function(data) {
          $http.post('/api/docenteGrado/'+ JSON.stringify($scope.listaEscuelas)).
             success(function(data) {
               $location.url('/docentes');
            });
        });*/
    };
    $scope.addEscuela = function (e) {
      angular.element(e.target).css('display', 'none');
      $http.get('/api/escuela').
      success(function(data, status, headers, config) {
        var escuelas = [];
        console.log('addEscuela', data);
        data.forEach(function (escuela, i) {
          escuelas.push({
            id: escuela.id,
            nombre: escuela.nombre,
            localidad: escuela.localidad.nombre_localidad,
            provincia: escuela.provincia.nombre_provincia
          });
        });
        $scope.escuelas = escuelas;
        $scope.getCargos();
      });
      angular.element(document.querySelector('#escuelas')).css('display', 'block');
    };
    $scope.clearEscuela = function () {
      $scope.form.escuela = "";
      $scope.form.cargo = "";
      $scope.cursoShow = false;
      $scope.dataEscuelaShow = false;
    };
    $scope.deleteEscuela = function (id_escuela){
      $scope.listaEscuelas = _.filter($scope.listaEscuelas, function(escuela){ return escuela.id !== id_escuela; });
    };
    $scope.addCursoEscuela= function () {
      console.log('escuela',$scope.form.escuela)
      var escuela = _.find($scope.escuelas, function(escuela){return escuela.id == $scope.form.escuela });
      escuela.cargo = $scope.form.cargo;
      escuela.cargo_nombre = _.find($scope.cargos, function(cargo){return cargo.id_cargo == escuela.cargo }).descripcion_cargo;
      escuela.dni = $scope.form.id;
      if(escuela.cargo === '6'){
        console.log($scope.cursos);
        escuela.cursos = (_.filter($scope.cursos, function(curso){ return curso.selected == true; }));
        console.log(escuela.cursos);
      }else{
        escuela.cursos = [];
      }
      
      $scope.listaEscuelas.push(escuela);
      $scope.clearEscuela();
    },
    $scope.getDataEscuela = function (id) {
      var escuela = _.find($scope.escuelas, function(escuela){return escuela.id == id; });
      $scope.escuela = escuela;
      console.log('data escuela', $scope.escuela);
      $scope.dataEscuelaShow = true;
    };
    $scope.getGradosTurnos = function (id_escuela){
      //$http.get('/api/gradosTurnos/' + id_escuela).
      $http.get('/api/escuelaciclo/' + id_escuela).
      success(function(data) {
        var cursos = [];
        data.forEach(function (curso, i) {
          curso.id_curso = i
          curso.selected = false
          cursos.push(curso);
        });
        $scope.cursos = cursos;
      });
    };
    $scope.getCursos = function (){
      if($scope.form.cargo == 6){
        $scope.cursoShow = true;
          $scope.getGradosTurnos($scope.form.escuela);
      }
    };
    $scope.getCargos = function (){
      $http.get('/api/cargo').
      success(function(data) {
        var cargos = [];
        data.forEach(function (cargo, i) {
          cargos.push({
            id_cargo: cargo.id,
            descripcion_cargo: cargo.descripcion,
          });
        });
        $scope.cargos = cargos;
      });
    };
  })
  .controller('EditDocenteCtrl', function ($scope, $http, $location, $routeParams) {
    $scope.form = {};
    $http.get('/api/persona/' + $routeParams.id).
      success(function(data) {
        var docente = {};
        docente = {
            tipo_dni: data.tipo_dni,
            id: data.dni,
            nombre: data.nombre,
            apellido: data.apellido,
            fecha_nac: data.fecha_nac,
            direccion: data.direccion,
            ciudad: data.ciudad,
            id_provincia: data.provincia.id_provincia,
            provincia: data.provincia.nombre_provincia,
            cp: data.cp,
            email: data.email,
            telefono: data.telefono
        }
      $scope.form = docente;
      });
    $scope.editDocente = function () {
      //TODO revisar edit de docente
      $http.put('/api/persona/' + $routeParams.id, $scope.form).
        success(function(data) {
          $location.url('/docentes');
        });
    };
  })
/*  .controller('EditDocenteCtrl', function ($scope, $http, $location, $routeParams) {
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
  })*/
  .controller('ReadDocenteCtrl', function ($scope, $http, $routeParams) {
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
  })
  .controller('EscuelaCtrl', function ($scope, $http, $q) {
    
    $http.get('/api/escuelaciclo').success(function(data){
      $scope.escuelas = data;
    });

  }).
  controller('AddEscuelaCtrl', function ($scope, $http, $location) {
    angular.element(document.querySelector('#cursos .box-footer')).css('display', 'none');
    $scope.form = {};
    $scope.form.grados = [];
    $http.get('/api/provincias').
    success(function(data, status, headers, config) {
      var provincias = [];
      data.forEach(function (provincia, i) {
        provincias.push({
          id_provincia: provincia.id_provincia,
          nombre_provincia: provincia.nombre_provincia,
        });
      });
      $scope.provincias = provincias;
    });
    $http.get('/api/provincias').
    success(function(data, status, headers, config) {
      var provincias = [];
      data.forEach(function (provincia, i) {
        provincias.push({
          id_provincia: provincia.id_provincia,
          nombre_provincia: provincia.nombre_provincia,
        });
      });
      $scope.provincias = provincias;
    });
    $scope.submitEscuela = function () {
      $http.post('/api/escuela', $scope.form).
        success(function(data) {
          $http.post('/api/escuelaCiclo/'+ JSON.stringify($scope.form.grados)).
             success(function(data) {
               $location.url('/escuelas');
            });
        });
    };
    $scope.getLocalidades = function () {
      $http.get('/api/localidades/' + $scope.form.provincia).
      success(function(data) {
        var localidades = [];
        data.forEach(function (localidad, i) {
          localidades.push({
            id_localidad: localidad.id_localidad,
            nombre_localidad: localidad.nombre_localidad,
          });
        });
        $scope.localidades = localidades;
      });
    };
    $scope.addCurso = function () {
      var id_grado = $scope.form.grado;
      var id_turno = $scope.form.turno;
      var id_escuela = $scope.form.id;
      var id_ciclo = $scope.form.ciclo;
      var cantidad = $scope.form.cantidad_grado;
      var grado = _.find($scope.grados, function(grado){return grado.id_grado == id_grado;});
      var turno = _.find($scope.turnos, function(turno){return turno.id_turno == id_turno;});
      $scope.form.grados.push({'id_curso': $scope.form.grados.length, 'id_escuela' : id_escuela, 'id_ciclo' : id_ciclo, 'id_grado' : grado.id_grado, 'descripcion_grado' : grado.nombre_grado, 'id_turno' : turno.id_turno, 'descripcion_turno' : turno.descripcion_turno, 'cantidad_grado' : cantidad});
      angular.element(document.querySelector('#cursos .box-footer')).css('display', 'none');
    };
    $scope.getCursos = function (id_grado, id_turno) {
      $http.get('/api/turnos').
      success(function(data, status, headers, config) {
        var turnos = [];
        data.forEach(function (turno, i) {
          turnos.push({
            id_turno: turno.id,
            descripcion_turno: turno.descripcion,
          });
        });
        $scope.turnos = turnos;
      });
      $http.get('/api/ciclos').
      success(function(data, status, headers, config) {
        var ciclos = [];
        data.forEach(function (ciclo, i) {
          ciclos.push({
            id_ciclo: ciclo.id,
            descripcion_ciclo: ciclo.descripcion,
          });
        });
        $scope.ciclos = ciclos;
      });
      angular.element(document.querySelector('#cursos .box-footer')).css('display', 'block');
    };
    $scope.getGrados = function (id_curso){
      $http.get('/api/grados/' + id_curso).
      success(function(data) {
        var grados = [];
        data.forEach(function (grado, i) {
          grados.push({
            id_grado: grado.id,
            nombre_grado: grado.descripcion,
          });
        });
        $scope.grados = grados;
      });
  };
  $scope.deleteCurso = function (id_curso){
      $scope.form.grados.splice(id_curso,1);
    };
  }).
  controller('EditEscuelaCtrl', function ($scope, $http, $location, $routeParams) {
    $scope.form = {};
    $http.get('/api/escuela/' + $routeParams.id).
      success(function(data) {
        var escuela = {};
        escuela = {
            id: data.id,
            nombre: data.nombre,
            telefono: data.telefono,
            email: data.email,
            domicilio: data.domicilio,
            localidad: data.localidad.nombre_localidad,
            id_localidad: data.localidad.id_localidad,
            cp: data.cp,
            sector: data.sector,
            distrito: data.distrito,
            ubicacion: data.ubicacion,
            provincia: data.provincia.nombre_provincia,
            id_provincia: data.provincia.id_provincia,
            observaciones: data.observaciones
        }
      $scope.form = escuela;
      });
    $scope.editEscuela = function () {
      $http.put('/api/escuela/' + $routeParams.id, $scope.form).
        success(function(data) {
          $location.url('/escuelas');
        });
    };
  })
  .controller('ReadEscuelaCtrl', function ($scope, $http, $routeParams) {
    $http.get('/api/escuela/' + $routeParams.id).
    success(function(data) {
      var escuela = {};
        escuela = {
          id: data.id,
          nombre: data.nombre,
          telefono: data.telefono,
          email: data.email,
          domicilio: data.domicilio,
          localidad: data.nombre_localidad,
          cp: data.cp,
          sector: data.sector,
          distrito: data.distrito,
          ubicacion: data.ubicacion,
          provincia: data.nombre_provincia,
          observaciones: data.observaciones
        }
      $scope.form = escuela;
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
  }).
  controller('LibroCtrl', function ($scope, $http) {
    $http.get('/api/libro')
    .success(function(data, status, headers, config) {
      var libros = [];
      data.forEach(function (libro, i) {
        libros.push({
          isbn:libro.isbn,
          titulo: libro.titulo,
          id_col: libro.id_col.id_coleccion,
          coleccion: libro.id_col.descripcion,
          paginas: libro.paginas,
          peso: libro.peso,
          precio: libro.precio,
          autores:libro.autores,
          formato: libro.tamanio
        });
      });
      $scope.libros = libros;
      
    });

  }).
  controller('AddLibroCtrl', function ($scope, $http, $location) {
    $scope.form = {};
    $http.get('/api/coleccion').
    success(function(data, status, headers, config) {
      var colecciones = [];
      data.forEach(function (coleccion, i) {
        colecciones.push({
          id: coleccion.id_coleccion,
          descripcion: coleccion.descripcion,
        });
      });
      $scope.colecciones = colecciones;
    });
    $scope.submitLibro = function () {
      $http.post('/api/libro', $scope.form).
        success(function(data) {
          $location.path('/libros');
        });
    };
  }).
  controller('EditLibroCtrl', function ($scope, $http, $location, $routeParams) {
    //$scope.form = {};
    $http.get('/api/libro/' + $routeParams.id).
      success(function(data) {
        /*var libro = {};
        libro = {
            isbn: data.isbn,
            titulo: data.titulo,
            id_col: data[0].id_col,
            paginas: data[0].paginas,
            peso: data[0].peso,
            precio: data[0].precio,
            autores:data[0].autores,
            formato: data[0].formato
        };*/
      $scope.form = data;
      });
    $http.get('/api/coleccion').
    success(function(data, status, headers, config) {
      var colecciones = [];
      data.forEach(function (coleccion, i) {
        colecciones.push({
          id: coleccion.id_coleccion,
          descripcion: coleccion.descripcion,
        });
      });
      $scope.colecciones = colecciones;
    });
    $scope.editLibro = function () {
      $http.put('/api/libro/' + $routeParams.id, $scope.form).
        success(function(data) {
          $location.url('/libros');
        });
    };
  }).
  controller('DeleteLibroCtrl', function ($scope, $http, $location, $routeParams) {
    $http.get('/api/libro/' + $routeParams.id).
    success(function(data) {
      $scope.libro = data[0];
    });

    $scope.deleteLibro = function () {
      $http.delete('/api/libro/' + $routeParams.id).
        success(function(data) {
          $location.url('/libros');
        });
    };
    $scope.home = function () {
      $location.url('/libros');
    };
  })
  .controller('ColeccionCtrl', function ($scope, $http) {
    $http.get('/api/coleccion').
    success(function(data, status, headers, config) {
      var colecciones = [];
      data.forEach(function (coleccion, i) {
        colecciones.push({
          id:coleccion.id_coleccion,
          descripcion: coleccion.descripcion
        });
      });
      $scope.colecciones = colecciones;
      
    });

  }).
  controller('AddColeccionCtrl', function ($scope, $http, $location) {
    $scope.form = {};
    $scope.submitColeccion = function () {
      $http.post('/api/coleccion', $scope.form).
        success(function(data) {
          $location.path('/colecciones');
        });
    };
  }).
  controller('EditColeccionCtrl', function ($scope, $http, $location, $routeParams) {
    $scope.form = {};
    $http.get('/api/coleccion/' + $routeParams.id).
      success(function(data) {
        var coleccion = {};
        coleccion = {
            id: data.id_coleccion,
            descripcion: data.descripcion,
        }
      $scope.form = coleccion;
    });
    $scope.editColeccion = function () {
      $http.put('/api/coleccion/' + $routeParams.id, $scope.form).
        success(function(data) {
          $location.url('/colecciones');
        });
    };
  }).
  controller('DeleteColeccionCtrl', function ($scope, $http, $location, $routeParams) {
    $http.get('/api/coleccion/' + $routeParams.id).
    success(function(data) {
      $scope.coleccion = data[0];
    });
    $scope.deleteColeccion = function () {
      $http.delete('/api/coleccion/' + $routeParams.id).
        success(function(data) {
          $location.url('/colecciones');
        });
    };
    $scope.home = function () {
      $location.url('/colecciones');
    };
  })
  .controller('LoginCtrl',function($scope,$rootScope,$location, Auth){
    
    $scope.doLogin = function(){
      
      $scope.processing = true;
      $scope.error = "";
    
      Auth.login($scope.loginData.email,$scope.loginData.password)
      .success(function(data){
        $scope.processing = false;

        if(data.persona)
          $location.path("/docentes");
        else
          $scope.error = data.error;
      })
      .error(function(data){
        $scope.error = data.error;
      });
    }
  })
  /*
  .controller('LoginCtrl', function ($scope, $http, $location, auth) {
    //$scope.form = {usuario:'1', password:'123'};
    angular.element(document.querySelector('.main-header')).css('display', 'none');
    angular.element(document.querySelector('.main-sidebar')).css('display', 'none');
    angular.element(document.querySelector('.content-wrapper')).css('margin-left', '0');
    angular.element(document.querySelector('.main-footer')).css('margin-left', '0');

    $scope.submit = function () {
      console.log($scope.form);
        var log = auth.login($scope.form.username, $scope.form.password);
        if (log !== 'OK'){
          $scope.msg = log;
        } 
        if (log === 'OK'){
          $location.url("/docentes");
          angular.element(document.querySelector('.main-header')).attr('style', '');
          angular.element(document.querySelector('.main-sidebar')).attr('style', '');
          angular.element(document.querySelector('.content-wrapper')).attr('style', '');
          angular.element(document.querySelector('.main-footer')).attr('style', '');
        }
      $http.post('/api/auth', $scope.form).
        success(function(data) {
          console.log('ok')
        });
    };
  })*/
  .controller('homeCtrl', function($scope, Auth) 
  {
    //devolvemos a la vista el nombre del usuario
    $scope.username = "Usuario";
    $scope.password = "";
    //la función logout que llamamos en la vista llama a la función
    //logout de la factoria auth
    $scope.logout = function()
    {
        Auth.logout();
    }
  }
  );
