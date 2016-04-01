var pagoUrl = global_settings.urlCORS + 'api/seguridadapi/';

registrationModule.factory('panelRepository', function ($http) {
    return {
         getAplicaciones: function (id) {
        	return $http.get( pagoUrl + 'see/' + 1);

         }           
        
    };
});