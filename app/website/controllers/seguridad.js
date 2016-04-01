var SeguridadView = require('../views/seguridad'),
	SeguridadModel = require('../models/seguridad');

var Seguridad = function(config){
	this.config = config || {};

	this.view = new SeguridadView();
	this.model = new SeguridadModel({ parameters : this.config.parameters});

	this.response = function(){
		this[this.config.funcionalidad](this.config.req,this.config.res,this.config.next);
	}
}

Seguridad.prototype.get_see_data = function(req,res,next){

	//Objeto que almacena la respuesta del Model
	var object = {};
	//Parámetro que viene del front
	var params = {}; 
	//Referencia a mi objeto de clase
	var self = this;

	//Obtengo el parámetro del front para enviarlo al model
	var parameters = JSON.parse(req.params.data)


	this.model.get(parameters,function(error,result){
		
		object.error = error;
		object.result = result;
		
		self.view.see(res, object);
	});
}

module.exports = Seguridad;