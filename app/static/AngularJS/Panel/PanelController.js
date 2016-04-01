// -- =============================================
// -- Author:      Vladimir Juárez
// -- Create date: 18/03/2016
// -- Description: example controller
// -- Modificó: 
// -- Fecha: 
// -- =============================================
registrationModule.controller('panelController', function($scope, alertFactory, panelRepository){
	
	$scope.idUsuario = 4;
	$scope.init = function(){
		
		$('#ca-container').contentcarousel();

    	panelRepository.getAplicaciones($scope.idUsuario)
    		.then(function successCallback(response) {

			    $scope.Aplicaciones = response.data;
			    alertFactory.success('Aplicaciones.');

  			}, function errorCallback(response) {
			    
			    alertFactory.error('Error al obtener los datos de empleado.');
  			}
  		);

	}

});