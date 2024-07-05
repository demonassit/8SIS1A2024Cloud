/*
Una API REST nos permite obtener informacion sobre diferentes elementos  al poder consumir los datos desde una fuente externa en este caso vamos hacer uso de la fuente: https://pokeapi.co para poder comunicarnos con el servicio en el front y backend derivado a que primero nosotros debemos de tener una pagina contenedora de informacion y se debe de procesar conforme a los identificadores de los componentes en donde se va a colocar la informacion por parte de la base de datos que viene en la API
*/ 

const pokeApiUrl = "https://pokeapi.co/api/v2";

// tenemos que crear un objeto que nos permita acceder a todos los campos destinados del front, mediante el uso del DOM

//primero vamos a obtener todas las estadisticas del pokemon
const pokemonStatsElements = {
    hp : document.getElementById("pokemonStatHp"),
    attack : document.getElementById("pokemonStatAttack"),
    defense : document.getElementById("pokemonStatDefense"),
    specialAttack : document.getElementById("pokemonStatSpecialAttack"),
    specialDefense : document.getElementById("pokemonStatSpecialDefense"),
    speed : document.getElementById("pokemonStatSpeed")
};

//vamos a crear una variable que nos sirva de referencia para saber  aque tipo de clase de pokemon es, esto con el fin de cambiar, el css y colores acorde al tipo de pokemon o mejor dicho la clase de pokemon
let currentClassType = null;

//vamos a crear una constante para obtener la plantilla de las diferentes imagenes del tipo de pokemon
const imageTemplete = "<img class='pokedisplay' src='{imgSrc}' alt='pokedisplay' >";

//vamos a crear las rutas de las imagenes que vamos a intercalar de acuerdo a la busqueda que se realice del pokemon
const images = {
    imgPokemonNoFound : "../img/404.png",
    imgLoading : "../img/loading.gif"
};

//necesitamos un objeto para traer todas las referencias de los pokemones que se van a desplegar, en pocas palabras todos los componentes del pokemon

const containers = {
    imageContainer : document.getElementById("pokedisplay-container"),
    pokemonTypesContainer : document.getElementById("pokemonTypes"),
    pokemonNameElement : document.getElementById("pokemonNameResult"),
    pokemonAbilitiesElement : document.getElementById("pokemonAbilities"),
    pokemonMovesElement : document.getElementById("pokemonMoves"),
    pokemonIdElement : document.getElementById("pokemonId")
};

//vamos a obtener todas las referencias de cada uno de los botones de la API
const buttons = {
    all : Array.from(document.getElementsByClassName("btn")),
    search : document.getElementById("btnSearch"),
    next : document.getElementById("btnUp"),
    previous : document.getElementById("btnDown")
};

//vamos a obtener la referencia del nombre del pokemon
const pokemonInput = document.getElementById("pokemonName");

//necesitmoa crear una funcion que debe de ir buscando dentro de los registros de la API, los datos conforme al elemento de busqueda, y con ello poder obtener la informacion pertienente acorde al estilo que nosotros estamos implementando, derivado a que no estamos haciendo uso de todos los componentes de la api, solo hacemos uso de algunos, y debemos de tener una coincidencia 1 a 1 

//vamos a hacer una funcion para obtener solo el tipo de pokemon
const processPokemonTypes = (pokemonData) => {
    let pokemonType = "";
    //ya que sabemos el tipo, debo obtener una clase para diferenciar el css
    const firtsClass = pokemonData.types[0].type.name;
    //ya que se el tipo de pokemon acorde a su nombre, debo diferenciar sus elementos
    pokemonData.types.forEach((pokemonTypeData)=>{
        //como vamos a ir recorriendo cada tipo de clase de pokemon por su nombre una vez que lo identifiquemos debemos imprimirlo en el html
        pokemonType += `<span class="pokemon-type" ${pokemonTypeData.type.name} >${pokemonTypeData.type.name}</span>`;
    });
    //se debe de quitar la clase previa del contenedor asi como las habilidades y movimientos que ya estuvieran precargados
    if(currentClassType){
        containers.pokemonMovesElement.classList.remove(currentClassType);
        containers.pokemonAbilitiesElement.classList.remove(currentClassType);
    }

    //debo de agregar la nueva informacion
    containers.pokemonMovesElement.classList.add(currentClassType);
    containers.pokemonAbilitiesElement.classList.add(currentClassType);
    currentClassType = firtsClass;

    //agrego las etiquetas que cree
    containers.pokemonTypesContainer.innerHTML = pokemonType;
};
