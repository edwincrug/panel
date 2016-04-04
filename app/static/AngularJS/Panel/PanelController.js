// -- =============================================
// -- Author:      Fernando Alvarado Luna
// -- Create date: 01/04/2016
// -- Description: Carrusel de aplicaciones controller con función que trae 
// -- Modificó: 
// -- Fecha: 
// -- =============================================
registrationModule.controller('panelController', function($scope, alertFactory, panelRepository,$window){
	
	$scope.idUsuario = 1;
	$scope.init = function(){

		//FAL trae aplicaciones por usuario
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
    	//FAL trae datos del usuario
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

	$scope.openWindow = function(url,titulo) {
		url= "http://" + url;
        $window.open(url, titulo, 'width=800,height=600');
    };
});