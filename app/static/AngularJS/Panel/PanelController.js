// -- =============================================
// -- Author:      Fernando Alvarado Luna
// -- Create date: 01/04/2016
// -- Description: Carrusel de aplicaciones controller con función que trae 
// -- Modificó: 
// -- Fecha: 
// -- =============================================
registrationModule.controller('panelController', function ($scope, $rootScope, alertFactory, panelRepository, $window, $location) {

    //Función de Inicio
    $scope.init = function () {

        $rootScope.idUsuario = $('#lgnUser').val();

        //FAL trae aplicaciones por usuario
        panelRepository.getAplicaciones($rootScope.idUsuario)
            .then(function successCallback(response) {
                $rootScope.Aplicaciones = response.data;
                setTimeout(function () {
                    $('#dg-container').gallery({
                        autoplay: true
                    });
                }, 1);
            }, function errorCallback(response) {
                alertFactory.error('Error al obtener las aplicaciones.');
            });


        //FAL trae datos del usuario
        panelRepository.getUsuarios($rootScope.idUsuario)
            .then(function successCallback(response) {
                $scope.empleado = response.data;

            }, function errorCallback(response) {
                alertFactory.error('Error al obtener los datos del usuario.');
            });


    }

    $scope.openWindow = function (url, titulo, requiereAutenticacion) {
        var form = document.createElement("form");
        if (requiereAutenticacion == 1) {
            form.setAttribute("method", "post");
        } else {
            form.setAttribute("method", "get");
        }

        form.setAttribute("action", url);

        form.setAttribute("target", titulo);

        if (requiereAutenticacion == 1) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", "idUsuario");
            hiddenField.setAttribute("value", $rootScope.idUsuario);
            form.appendChild(hiddenField);
        }


        document.body.appendChild(form);
        window.open('', titulo);
        form.submit();
    };
});
