var pagoUrl = global_settings.urlCORS + '/api/pagoapi/';

registrationModule.factory('PanelRepository', function ($http) {
    return {
         getAplicaciones: function (id) {
        return $http({
            method: 'GET',
            url: pagoUrl,
            params: { id: '1|' + id }
         });           
        }
    };
});