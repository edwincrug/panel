var pagoUrl = global_settings.urlCORS;
var strapi = "";
var strfuncion = "";
registrationModule.factory('panelRepository', function ($http) {
    return {
         getAplicaciones: function (id) {
         strapi = "api/seguridadapi/see/";
    	 strfuncion = pagoUrl + strapi;
        	return $http.get( strfuncion + id);
         },
         getUsuarios: function (id) {
         strapi = "api/usuarioapi/see/";
    	 strfuncion = pagoUrl + strapi;
        	return $http.get( strfuncion + id);
         },        
    };
});