/**
 * EmpleadoController
 *
 * @description :: Server-side logic for managing empleadoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	restringido:function(req,res){
		return res.ok("Si podes ver esto, estas logueado");
	},	
	abierto:function(req,res){
		return res.ok("Esta ruta esta abierta a todos");
	}
};

