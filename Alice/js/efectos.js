'use strict'
$(document).ready(function () {
    function imagenesGrandes() {
        $('#conejo').hide(6000, function () {
            $(this).show(6000);
        })

        $('#alicia').animate({
            "left": "300"
        }, 6000).animate({
            "left": "-300"
        }, 6000, );

        $('#loco').fadeOut(6000, function () {
            $(this).fadeIn(6000);
        })

        $('#reina').animate({
            "left": "-=300"
        }, 6000).animate({
            "left": "+=300"
        }, 6000);
    }
    setInterval(imagenesGrandes, 1000);


    function viajes(imagen, imagenAtras) {
        $(imagen).mouseover(function () {
            $(this).removeClass('desactivar').addClass('activar');
        })
        $(imagen).mouseout(function () {
            $(this).removeClass('activar').addClass('desactivar');
        })
    }

    viajes('#eatMe');
    viajes('#drinkMe')

/**************CIERRA EL LECTOR DE DOCUMENTO PRINCIPAL***************/
})