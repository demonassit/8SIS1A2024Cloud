/*
JS es un lenguaje de programación multiparadigma
significa que acepta, POO, estructural, modular, eventos, reactivo, funcional

Asi mismo JS es un lenguaje no tipado, no existen los tipos de dato, dentro de JS
nosotros tenemos que parsearlos

*/

function validar(formulario){
    //quiero validar que no peuda ingresar un nombre menor a 2 letras
    if(formulario.nombre.value.length <= 2){
        alert("Escriba mas de 2 letras en el campo nombre");
        formulario.nombre.focus();
    }

    var checkOK = "qwertyuiopasdfhjklzxcvbnm" + "QWERTYUIOPASDFGHJKLZXCVBNM";

    var checkString = formulario.nombre.value;

    var todoesValido = true;

    for(var i = 0; i < checkString.length; i++){
        //tengo que transformar la cadena a caracteres
        var charac = checkString.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(charac == checkOK.charAt(j)){
                break;
            }
        }
        if(j == checkOK.length){
            todoesValido = false;
            break;
        }
    }

    if(!todoesValido){
        alert("Escribe unicamente letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }
}