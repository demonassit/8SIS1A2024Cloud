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


    var checkOK = "0123456789";

    var checkString = formulario.edad.value;

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
        alert("Escribe unicamente numeros en el campo de edad");
        formulario.edad.focus();
        return false;
    }

    //para validar el correo debemos entender que existe una expresion mediante la cual
    //debo tener un formato de cadena especifica
    // sss.sss.ss@sss.sss || ss.ss.@ss.ss || ss@ss.ss

    //toda expresion regular tiene un patron

    var txt = formulario.email.value;

    var patron =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

    alert("El email " + (patron.test(txt)?" " : " no ") + "valido");

    return patron.test;
    
}