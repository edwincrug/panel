// -- =============================================
// -- Author:      Fernando Alvarado Luna
// -- Create date: 01/04/2016
// -- Description: Carrusel de aplicaciones
// -- Modificó: 
// -- Fecha: 
// -- =============================================
registrationModule.controller('panelController', function($scope, alertFactory, panelRepository){
	
	$scope.idUsuario = 1;
	$scope.init = function(){

    	panelRepository.getAplicaciones($scope.idUsuario)
    		.then(function successCallback(response) {
			    $scope.Aplicaciones = response.data;
			    setTimeout(function(){ 
			    	$('#ca-container').contentcarousel();
			    }, 1);
  			}, function errorCallback(response) {
			    alertFactory.error('Error al obtener las aplicaciones.');
  			}
  		);

    	panelRepository.getUsuarios($scope.idUsuario)
    		.then(function successCallback(response) {
			    $scope.empleado = response.data;
			    setTimeout(function(){ 
			    	$('#ca-container').contentcarousel();
			    }, 1);
  			}, function errorCallback(response) {
			    alertFactory.error('Error al obtener los datos del usuario.');
  			}
  		);
	}

});