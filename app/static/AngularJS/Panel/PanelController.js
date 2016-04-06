// -- =============================================
// -- Author:      Fernando Alvarado Luna
// -- Create date: 01/04/2016
// -- Description: Carrusel de aplicaciones controller con función que trae 
// -- Modificó: 
// -- Fecha: 
// -- =============================================
registrationModule.controller('panelController', function($scope, alertFactory, panelRepository,$window, $location){
	
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
    	alert($('#lgnUser').val());
    	//FAL trae datos del usuario
    	panelRepository.getUsuarios($scope.idUsuario)
    		.then(function successCallback(response) {
			    $scope.empleado = response.data;
			    setTimeout(function(){ 
			    	$('#ca-container').contentcarousel({
						// speed for the sliding animation
						sliderSpeed		: 300,
						// easing for the sliding animation
						sliderEasing	: 'easeOutExpo',
						// speed for the item animation (open / close)
						itemSpeed		: 300,
						// easing for the item animation (open / close)
						itemEasing		: 'easeOutExpo',
						// number of items to scroll at a time
						scroll			: 1	
					});
			    }, 10);

  			}, function errorCallback(response) {
			    alertFactory.error('Error al obtener los datos del usuario.');
  			}
  		);

    	
	}

	$scope.openWindow = function(url,titulo) {
        $window.open(url, titulo);
    };
});