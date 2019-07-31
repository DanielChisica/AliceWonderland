'use strict'
$(document).ready(function () {

    $('.imagenPlan').mouseover(function () {
        $(this).css({
            "clipPath": "inset(0 48% 0 53%)",
            "transition": "2s"
        })
    }).mouseout(function () {
        $(this).css({
            "clipPath": "inset(0 0 0 0)",
            "transition": "2s"
        })
    })



    $('.imagenServicios').mouseover(function () {
        $(this).css({
            "clipPath": "circle(0.4% at 50% 50%)",
            "transition": "1s"
        })
    }).mouseout(function () {
        $(this).css({
            "clip-path": "circle(50% at 50% 50%)"
        })
    })



    function popUp(boton, informacion, salir) {
        $(boton).on('click', function () {
            $(informacion).removeClass('desactivar').addClass('activar');
        })
        $(salir).on('click', function () {
            $(informacion).removeClass('activar').addClass('desactivar');
        })
    }

    popUp('#boton1', '#popUp1', '#salir1');
    popUp('#boton2', '#popUp2', '#salir2');
    popUp('#boton3', '#popUp3', '#salir3');
    popUp('#boton4', '#popUp4', '#salir4');
    popUp('#boton5', '#popUp5', '#salir5');
    popUp('#boton6', '#popUp6', '#salir6');
    popUp('#boton7', '#popUp7', '#salir7');
    popUp('#boton8', '#popUp8', '#salir8');
    popUp('#boton9', '#popUp9', '#salir9');
    popUp('#boton10', '#popUp10', '#salir10');
    popUp('#boton11', '#popUp11', '#salir11');

    function comprar(botonComprar, informacionBoletos) {
        $(botonComprar).on('click', function () {
            $(informacionBoletos).removeClass('desactivar').addClass('activar');
        })
    }

    comprar('.comprar', '#popUpComprar');

    $('#salir12').on('click', function () {
        $('#popUpComprar').removeClass('activar').addClass('desactivar');
    })

    $('.comprar2').click(function(){
        $('#popUpRegistro').removeClass('activar').addClass('desactivar');
    })

    $('#salir12').on('click', function () {
        $('#popUpComprar').removeClass('activar').addClass('desactivar');
    })

    $('#salir13').on('click', function(){
        $('#popUp90').removeClass('activar').addClass('desactivar');
    })

    $('#comprar2').click(function(){
        $('#popUp90').removeClass('desactivar').addClass('activar');
    })

    $('#comprar3').click(function(){
        $('#popUp90').removeClass('activar').addClass('desactivar')
        alert("compra exitosa");
        console.log(valorCompra);
    })

    /**************CIERRA EL LECTOR DE DOCUMENTO PRINCIPAL***************/
})
