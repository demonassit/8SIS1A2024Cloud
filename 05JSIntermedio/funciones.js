/*

Las variables que se ocupan en js son de 3 tipos 

var -> de acuerdo a EJS6 esta siendo sustituida pero es de uso mas comun ya que puede ser sobreescrita e invocada en cualquier parte del codigo

let -> es una variable protegida, ya que solo funciona dentro de la propia funcion o bloque de codigo.

const -> la cual mantiene un valor constante en todo el documento



var x = "y";

//let x = "z";

if(true){
    const x = "a";
    console.log(x);
}

console.log(x);

Ahora vamos con nuevas funciones

Funcion Flecha

es una funcion en js que a diferencia de una funcion normal no genera su propio contexto (this) 



//funcion normal
function sumarNormal(n1, n2){
    return n1+n2;
}

console.log(`vamos a sumar 3 y 5 : ${sumarNormal(3,5)}`);

//funcion flecha para hacer una funcion flecha es necesario tener la siguiente estructura:
// "cadena" -> id, clase, name, atributo, etc

const sumarFlecha = (n1, n2) => n1+n2;

console.log(`vamos a sumar 7 y 5 : ${sumarFlecha(7,5)}`);

*/

const razasdePerros = [
    "Gran Danes",
    "Pastor Aleman",
    "Pug",
    "Chihuahua",
    "Belga",
    "Dalmata",
    "Pitbull"
];
/*
for(let indice = 0; indice < razasdePerros.length; indice++){
    console.log(razasdePerros[indice]);
}

//for of
for(const raza of razasdePerros){
    console.log(raza);
}

//for in
for(const indice in razasdePerros){
    console.log(razasdePerros[indice]);
}


//forEach
//por si solo es una funcion flecha, derivado a que itera sobre cada elemento del arreglo y no devuelve nada
razasdePerros.forEach((raza, indice, arregloOriginal) => console.log(raza));


razasdePerros.forEach((raza) => console.log(raza));


//vamos  a buscar FIND
if(razasdePerros.find((raza) => raza === "Pug")){
    console.log("La raza ha sido encontrada");
}else{
    //no hay la metemos
    razasdePerros.push(razasdePerros);
    console.log(razasdePerros);
}
*/
//findindex

const indiceChihuahua = razasdePerros.findIndex((raza) => raza === "Chihuahua");

if(indiceChihuahua > -1){
    //afuera del arreglo
    console.log(razasdePerros[indiceChihuahua]);
    //aparte voy agregar que diga que es una raza pequeña
    razasdePerros[indiceChihuahua] += "(Raza de perros pequeña)";
    console.log(razasdePerros[indiceChihuahua]);
    //diferencia a que no coloque el indice
    console.log(razasdePerros);
}else{
    console.log("No esta la raza");
}