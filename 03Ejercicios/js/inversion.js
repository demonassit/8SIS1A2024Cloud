//como calculamos la inversion al 15% anual
//una cantidad x  por ejemplo 1000 si los 1000 estan por un año se aplica el 15%
// 1000 * 15% = interes que gane
// 1000 + interes = resultado final

function validarn(e){
    var teclado = (document.all)?e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function interes(){
    var valor = document.formulario.cantidad.value;
    //ese valor no es numero recordando que es un lenguaje no typado
    //debemos de parsearlo a int
    var result = parseInt(valor);
    var interes = result * 0.15;
    var total = result + interes;

    //imprimimos en el html
    document.formulario.sueldoI.value = "$"+total;
}

function borrarn(){
    document.formulario.sueldoI.value="";
    document.formulario.cantidad.value="";
}