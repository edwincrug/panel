registrationModule.controller("panelController",function(o,e,n,i,t){o.idUsuario=1,o.init=function(){n.getAplicaciones(o.idUsuario).then(function i(e){o.Aplicaciones=e.data,setTimeout(function(){$("#ca-container").contentcarousel()},1)},function r(o){e.error("Error al obtener las aplicaciones.")}),n.getUsuarios(o.idUsuario).then(function a(e){o.empleado=e.data,setTimeout(function(){$("#ca-container").contentcarousel({sliderSpeed:300,sliderEasing:"easeOutExpo",itemSpeed:300,itemEasing:"easeOutExpo",scroll:1})},10),t.url(t.path())},function c(o){e.error("Error al obtener los datos del usuario.")})},o.openWindow=function(o,e){i.open(o,e)}});