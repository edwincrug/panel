// -- =============================================
// -- Author:      Fernando Alvarado Luna
// -- Create date: 01/04/2016
// -- Description: Carrusel de aplicaciones controller con función que trae 
// -- Modificó: 
// -- Fecha: 
// -- =============================================
registrationModule.controller('panelController', function($scope, alertFactory, panelRepository,$window, $location){

	//Función de Inicio
	$scope.init = function(){

		$scope.idUsuario = $('#lgnUser').val();

		//FAL trae aplicaciones por usuario
    	panelRepository.getAplicaciones($scope.idUsuario)
    		.then(function successCallback(response) {
			    $scope.Aplicaciones = response.data;
			    setTimeout(function(){ 
			    	 $('#dg-container').gallery({
						autoplay: true
					 });
			    }, 1);
  			}, function errorCallback(response) {
			    alertFactory.error('Error al obtener las aplicaciones.');
  			}
  		);

    	
    	//FAL trae datos del usuario
    	panelRepository.getUsuarios($scope.idUsuario)
    		.then(function successCallback(response) {
			    $scope.empleado = response.data;

  			}, function errorCallback(response) {
			    alertFactory.error('Error al obtener los datos del usuario.');
  			}
  		);

    	
	}

	$scope.openWindow = function(url,titulo) {
		var form = document.createElement("form");
		form.setAttribute("method", "post");
		form.setAttribute("action", url);

		form.setAttribute("target", titulo);

		var hiddenField = document.createElement("input"); 
		hiddenField.setAttribute("type", "hidden");
		hiddenField.setAttribute("name", "idUsuario");
		hiddenField.setAttribute("value", $scope.idUsuario);
		form.appendChild(hiddenField);
		document.body.appendChild(form);
		window.open('', titulo);
		form.submit();
    };
});