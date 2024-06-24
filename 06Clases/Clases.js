//Existe POO
/*
class FiguraGeometrica{
    //constructor
    constructor(){
        //puede o no tener alguma implementacion
    }

    //metodos
    area(){
        //metodo para calcular el area
    }
    perimetro(){
        //metodo para calcular el perimetro
    }

}

class Rectangulo extends FiguraGeometrica{
    constructor(base, altura){
        super();
        this._base = base;
        this._altura = altura;
        this._perimetro = null;
        this._area = null;
        this._actualizarArea = false;
        this._actualizarPerimetro = false;
    }


    //getter and setters
    set altura(altura){
        this._altura = altura;
        //si cambia el valor del area o del primetro hay que actualizarlo
        this._actualizarArea = true;
        this._actualizarPerimetro = true;
    }

    set base(base){
        this._base = base;
        //si cambia el valor del area o del primetro hay que actualizarlo
        this._actualizarArea = true;
        this._actualizarPerimetro = true;
    }

    get perimetro(){
        if(this._actualizarPerimetro || this._perimetro){
            this._perimetro = this._calcularPerimetro();
        }
        return this._perimetro;
    }

    get area(){
        if(this._actualizarArea || this._area){
            this._area = this._calcularArea();
        }
        return this._area;
    }

    calcularPerimetro(){
        console.log(this._base);
        console.log(this._altura);
        return(this._base + this._altura)*2;
    }

    calcularArea(){
        console.log(this._base);
        console.log(this._altura);
        return(this._base * this._altura);
    }
}

const objetoRectangulo = new Rectangulo(2,5);
console.log(objetoRectangulo.calcularArea());
console.log(objetoRectangulo.calcularPerimetro());
*/

//Spread

/*
Es una sintaxis que nos permite iterar 
sobre un elemento ya sea 
arreglo. matriz, vector, cadena
y ser extendido sin necesidad de usar bucles
*/

const arregloOriginalMayorMenor = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

console.log(`Arreglo Ordenado M a m : ${arregloOriginalMayorMenor}`);

//vamos a suponer que tenemos demasiadas variables y tenemos que iterar todas y encontrar un patron

const [valorMasGrande] = arregloOriginalMayorMenor;
console.log(`Valor mas Grande: ${valorMasGrande}`);

const [...restoValores] = arregloOriginalMayorMenor;
console.log(`Los valores son: ${restoValores}`);

//tengamos ue realizar busquedas y simplificarlas

const resultadoDBusqueda = {
    resultados : [
        "resultado 1",
        "resultado 2",
        "resultado 3",
        "resultado 4",
        "resultado 5",
        "resultado 6",
        "resultado 7"
    ], 
    total : 7,
    mejorCoincidencia : "resultado 3"
}

console.log(`Resultados de busqueda: ${resultadoDBusqueda}`);

//vamos a imprimir la mejor coincidencia
const {mejorCoincidencia} = resultadoDBusqueda;

console.log(`Mejor coincidencia : ${mejorCoincidencia}`);

//supongamos que queremos cambiar un nombre

const {mejorCoincidencia : NuevoNombre} = resultadoDBusqueda;

console.log(`Este es el nuevo nombre: ${NuevoNombre} `);

//vamos agregar informacion

const copiaResultadoDBusqueda = {...resultadoDBusqueda};

console.log(`Copia de Resultados: ${copiaResultadoDBusqueda}`);

//modificamos
const copiaResultadoDBusquedaModificar = {...resultadoDBusqueda, cadenaBuscada : "resultado 8"};

console.log(`Copia de Resultados Modificada: ${copiaResultadoDBusquedaModificar}`);