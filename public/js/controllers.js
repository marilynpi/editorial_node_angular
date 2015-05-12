/* Controllers */

angular.module('myApp.controllers', []).
  controller('DocenteCtrl', function ($scope, $http) {
    $http.get('/api/docentesEscuelas').
    success(function(data, status, headers, config) {
      var docentes = [];
      data.forEach(function (docente, i) {
        docentes.push({
          tipo_dni: docente.tipo_dni,
          id: docente.dni,
          nombre: docente.nombre,
          apellido: docente.apellido,
          fecha_nac: docente.fecha_nac,
          direccion: docente.direccion,
          ciudad: docente.ciudad,
          provincia: docente.provincia,
          cp: docente.cp,
          email: docente.email,
          telefono: docente.telefono,
          grado: docente.grado,
          turno: docente.turno,
          cargo: docente.cargo,
          escuela: docente.escuela
        });
      });
      $scope.docentes = docentes;
      
    });

  }).
  controller('AddDocenteCtrl', function ($scope, $http, $location) {
    angular.element(document.querySelector('#escuelas')).css('display', 'none');
    $scope.form = {};
    $scope.listaEscuelas = [];
    $scope.cursoShow = false;
    $scope.dataEscuelaShow = false;
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
    $scope.submitDocente = function () {
      $http.post('/api/docente', $scope.form).
        success(function(data) {
          console.log('usuario alta');
          $http.post('/api/docenteGrado/'+ JSON.stringify($scope.listaEscuelas)).
             success(function(data) {
               $location.url('/docentes');
            });
        });
    };
    $scope.addEscuela = function (e) {
      angular.element(e.target).css('display', 'none');
      $http.get('/api/escuelas').
      success(function(data, status, headers, config) {
        var escuelas = [];
        data.forEach(function (escuela, i) {
          escuelas.push({
            id: escuela.id,
            nombre: escuela.nombre,
            localidad: escuela.nombre_localidad,
            provincia: escuela.nombre_provincia
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
      console.log($scope.listaEscuelas);
    };
    $scope.addCursoEscuela= function () {
      var escuela = _.find($scope.escuelas, function(escuela){return escuela.id == $scope.form.escuela });
      escuela.cargo = $scope.form.cargo;
      escuela.dni = $scope.form.id;
      if(escuela.cargo === '6'){
        escuela.cursos = (_.filter($scope.cursos, function(curso){ return curso.selected == 'true'; }));
      }else{
        escuela.cursos = [];
      }
      
      $scope.listaEscuelas.push(escuela);
      console.log($scope.listaEscuelas);
      $scope.clearEscuela();
    },
    $scope.getDataEscuela = function (id) {
      var escuela = _.find($scope.escuelas, function(escuela){return escuela.id == id; });
      $scope.escuela = escuela;
      $scope.dataEscuelaShow = true;
      
    };
    $scope.getGradosTurnos = function (id_escuela){
      $http.get('/api/gradosTurnos/' + id_escuela).
      success(function(data) {
        var cursos = [];
        console.log(data);
        data.forEach(function (curso, i) {
          curso.id_curso = i
          curso.selected = false
          cursos.push(curso);
        });
        $scope.cursos = cursos;
        console.log($scope.cursos);
      });
    };
    $scope.getCursos = function (){
      console.log($scope.form.cargo, $scope.form.escuela)
      if($scope.form.cargo == 6){
        $scope.cursoShow = true;
          $scope.getGradosTurnos($scope.form.escuela);
      }
    };
    $scope.getCargos = function (){
      $http.get('/api/cargos').
      success(function(data) {
        var cargos = [];
        console.log(data);
        data.forEach(function (cargo, i) {
          cargos.push({
            id_cargo: cargo.id,
            descripcion_cargo: cargo.descripcion,
          });
        });
        $scope.cargos = cargos;
      });
    };
  }).
  controller('AddDocenteEscuelaCtrl', function ($scope, $http, $location, _) {
    angular.element(document.querySelector('#escuelas')).css('display', 'none');
    $scope.form = {};
    $scope.listaEscuelas = [];
    $scope.cursoShow = false;
    $scope.dataEscuelaShow = false;
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
    $scope.submitDocente = function () {
      $http.post('/api/docente', $scope.form).
        success(function(data) {
          console.log('usuario alta');
          $http.post('/api/docenteGrado/'+ JSON.stringify($scope.listaEscuelas)).
             success(function(data) {
               $location.url('/docentes');
            });
        });
    };
    $scope.addEscuela = function (e) {
      angular.element(e.target).css('display', 'none');
      $http.get('/api/escuelas').
      success(function(data, status, headers, config) {
        var escuelas = [];
        data.forEach(function (escuela, i) {
          escuelas.push({
            id: escuela.id,
            nombre: escuela.nombre,
            localidad: escuela.nombre_localidad,
            provincia: escuela.nombre_provincia
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
      console.log($scope.listaEscuelas);
    };
    $scope.addCursoEscuela= function () {
      var escuela = _.find($scope.escuelas, function(escuela){return escuela.id == $scope.form.escuela });
      escuela.cargo = $scope.form.cargo;
      escuela.dni = $scope.form.id;
      if(escuela.cargo === '6'){
        escuela.cursos = (_.filter($scope.cursos, function(curso){ return curso.selected == 'true'; }));
      }else{
        escuela.cursos = [];
      }
      
      $scope.listaEscuelas.push(escuela);
      console.log($scope.listaEscuelas);
      $scope.clearEscuela();
    },
    $scope.getDataEscuela = function (id) {
      var escuela = _.find($scope.escuelas, function(escuela){return escuela.id == id; });
      $scope.escuela = escuela;
      $scope.dataEscuelaShow = true;
      
    };
    $scope.getGradosTurnos = function (id_escuela){
      $http.get('/api/gradosTurnos/' + id_escuela).
      success(function(data) {
        var cursos = [];
        console.log(data);
        data.forEach(function (curso, i) {
          curso.id_curso = i
          curso.selected = false
          cursos.push(curso);
        });
        $scope.cursos = cursos;
        console.log($scope.cursos);
      });
    };
    $scope.getCursos = function (){
      console.log($scope.form.cargo, $scope.form.escuela)
      if($scope.form.cargo == 6){
        $scope.cursoShow = true;
          $scope.getGradosTurnos($scope.form.escuela);
      }
    };
    $scope.getCargos = function (){
      $http.get('/api/cargos').
      success(function(data) {
        var cargos = [];
        console.log(data);
        data.forEach(function (cargo, i) {
          cargos.push({
            id_cargo: cargo.id,
            descripcion_cargo: cargo.descripcion,
          });
        });
        $scope.cargos = cargos;
      });
    };
  }).
  controller('EditDocenteCtrl', function ($scope, $http, $location, $routeParams) {
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
  }).
  controller('ReadDocenteCtrl', function ($scope, $http, $routeParams) {
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
  }).
  controller('EscuelaCtrl', function ($scope, $http) {
    $http.get('/api/gradosTurnos').
    success(function(data, status, headers, config) {
      var escuelas = [];
      data.forEach(function (escuela, i) {
        escuelas.push({
          id: escuela.id,
          nombre: escuela.nombre,
          telefono: escuela.telefono,
          email: escuela.email,
          domicilio: escuela.domicilio,
          localidad: escuela.localidad,
          cp: escuela.cp,
          sector: escuela.sector,
          distrito: escuela.distrito,
          ubicacion: escuela.ubicacion,
          provincia: escuela.provincia,
          grado: escuela.grado,
          turno: escuela.turno,
          ciclo: escuela.ciclo,
          cantidadGrados: escuela.cantidad_grado,
          observaciones: escuela.observaciones
        });
      });
      $scope.escuelas = escuelas;
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
            id: data[0].id,
            nombre: data[0].nombre,
            telefono: data[0].telefono,
            email: data[0].email,
            domicilio: data[0].domicilio,
            localidad: data[0].nombre_localidad,
            id_localidad: data[0].id_localidad,
            cp: data[0].cp,
            sector: data[0].sector,
            distrito: data[0].distrito,
            ubicacion: data[0].ubicacion,
            provincia: data[0].nombre_provincia,
            id_provincia: data[0].id_provincia,
            observaciones: data[0].observaciones
        }
      $scope.form = escuela;
      });
    $scope.editEscuela = function () {
      $http.put('/api/escuela/' + $routeParams.id, $scope.form).
        success(function(data) {
          $location.url('/escuelas');
        });
    };
  }).
  controller('ReadEscuelaCtrl', function ($scope, $http, $routeParams) {
    $http.get('/api/escuela/' + $routeParams.id).
    success(function(data) {
      var escuela = {};
        escuela = {
          id: data[0].id,
          nombre: data[0].nombre,
          telefono: data[0].telefono,
          email: data[0].email,
          domicilio: data[0].domicilio,
          localidad: data[0].nombre_localidad,
          cp: data[0].cp,
          sector: data[0].sector,
          distrito: data[0].distrito,
          ubicacion: data[0].ubicacion,
          provincia: data[0].nombre_provincia,
          observaciones: data[0].observaciones
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
  });
