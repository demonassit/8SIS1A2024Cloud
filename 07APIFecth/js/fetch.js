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

//vamos hacer una funcion para poder obtener las estadisticas
const processPokemonStats = (pokemonData) => {
    //lo que vamos hacer es una funcion que se encargue de ir iterando sobre cada uno de los datos que existen dentro de la api, eso atraves del uso de un forEach. Primero vamos a buscar por el nombre del pokemon y que empiece a iterar para ir obteniendo estadistica por estadistica
    pokemonData?.forEach((pokemonData)=>{
        //hay que evaluar si es el nombre correcto, y a partir de ahi es obtener cada uno de los valores
        switch(pokemonStatData.stat.name){
            case "hp":
                //mandar obtener el front
                pokemonStatsElements.hp.innerHTML = pokemonStatData.base_stat;
                pokemonStatsElements.hp.style = `background: linear-gradient(0deg, rgba(0, 118, 255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                break;
            case "attack":
                //mandar obtener el front
                pokemonStatsElements.attack.innerHTML = pokemonStatData.base_stat;
                pokemonStatsElements.attack.style = `background: linear-gradient(0deg, rgba(0, 118, 255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                break;
            case "defense":
                //mandar obtener el front
                pokemonStatsElements.defense.innerHTML = pokemonStatData.base_stat;
                pokemonStatsElements.defense.style = `background: linear-gradient(0deg, rgba(0, 118, 255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                break;
            case "special-attack":
                //mandar obtener el front
                pokemonStatsElements.specialAttack.innerHTML = pokemonStatData.base_stat;
                pokemonStatsElements.specialAttack.style = `background: linear-gradient(0deg, rgba(0, 118, 255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                break;
            case "special-defense":
                //mandar obtener el front
                pokemonStatsElements.specialDefense.innerHTML = pokemonStatData.base_stat;
                pokemonStatsElements.specialDefense.style = `background: linear-gradient(0deg, rgba(0, 118, 255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                break;
            case "speed":
                //mandar obtener el front
                pokemonStatsElements.speed.innerHTML = pokemonStatData.base_stat;
                pokemonStatsElements.speed.style = `background: linear-gradient(0deg, rgba(0, 118, 255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                break;
        }
    });
};

//necesitamos otra funcion para obtener los movimientos 
const processPokemonMoves = (pokemonData) => {
    let pokemonMovesContent = "";
    //debo hacer lo mismo que con las estadisticas
    pokemonData.moves?.forEach((pokemonMove) => {
        pokemonMovesContent += `<li>${pokemonMove.move.name}</li>`;
    });
    
    containers.pokemonMovesElement.innerHTML = pokemonMovesContent;
};

//necesitamos otra funcion para obtener los habilidades 
const processPokemonAbilities = (pokemonData) => {
    let pokemonAbilitiesContent = "";
    //debo hacer lo mismo que con las estadisticas
    pokemonData.abilities?.forEach((pokemonAbility) => {
        pokemonAbilitiesContent += `<li>${pokemonAbility.ability.name}</li>`;
    });
    
    containers.pokemonAbilitiesElement.innerHTML = pokemonAbilitiesContent;
};

//tengo que crear una funcion para la carga de la imagen y deshabilitar los botones para que el usuario no le pique
const setLoading = () =>{
    containers.imageContainer.innerHTML = imageTemplete.replace("{imgSrc}", images.imgLoading);
    buttons.all.forEach(button => button.disabled = true);
};

//necesito otra funcion para habilitarlos
const setLoadingComplete = () => {
    buttons.all.forEach(button => checkDisabled(button));
}

// Necesitamos una funcion que obtenga la informacion de la API, a travez de una solicitud a partir de la URl, y derivado de ello cargar la informacion de forma local, para ello necesitamos una funcion de tipo FETCH la cual nos devuelve una promesa (es uan funcion de tipo asincrona, porque no devuelve la informacion en el mismo tiempo), necesitamos establecer los parametros para saber que nos debe devolver

const getPokemonData = async (pokemonName) => fetch(`${pokeApiUrl}pokemon/${pokemonName}`, {
    //los metodos apartir de http son los que nos van a devolver las cosas de la peticion a aprtir de crear los encabezados de la promesa
    method : 'GET', 
    //debo establecer las cabeceras de la peticion, cual es formato, como los vamos a obtener, el tipo de contenido, etc
    headers: {
        'Content-Type' : 'application/json'
    },
    //si es necesario al ocupar otros metodos como POST, PUT, PATCH, se debe de establecer la conversion de las cadenas 
    //body : JSON.stringify(miObjetoJson)  todo el formato de la peticion
}).then((res)=>res.json()).catch((error) => ({resquestFailed : true}));

//vamos a deshabilitar los botones o no, en este caso unicamente para los botones inferior
const checkDisabled = (button) => {
    button.disabled = button.id === "btnDown" && containers.pokemonIdElement.value <= 1;
}

//necesitamos una funcion para validar que se reciba el nombre y id del poemon 

const setPokemonData = async (pokemonName) => {
    if(pokemonName){
        //carg ala imagen de busqueda del pokemon y deshabilita los botoenes
        setLoading();
        //realizo la consulta con un await
        const pokemonData = await getPokemonData(typeof pokemonName === typeof ""? pokemonName.toLowerCase() : pokemonName);
        if(pokemonName.resquestFailed){
            //envio la imagen de pokemon no encontrado
            containers.imageContainer.innerHTML = imageTemplete.replace("{imgSRC}", images.imgPokemonNoFound);
        }else{
            //si lo ecuentra
            containers.imageContainer.innerHTML = `
            ${imageTemplete.replace("{imgSRC}", pokemonData.sprites.front_defautl)}  
            ${imageTemplete.replace("{imgSRC}", pokemonData.sprites.front_shiny)} ` ;
            containers.pokemonNameElement.innerHTML = pokemonData.name;

            containers.pokemonIdElement.value = pokemonData.id;

            //empiezo con las funciones de cada tipo
            processPokemonTypes(pokemonData);
            processPokemonStats(pokemonData);
            processPokemonAbilities(pokemonData);
            processPokemonMoves(pokemonData);
        }
        //vuelvo habilitar los botones
        setLoadingComplete();
    }else{
        //aqui es cuanod mando un error
        FileSystemWritableFileStream.fire({
            title : "Error",
            text : "Ingresa el nombre del pokemon primero",
            icon : "error",
            confirmButtonText : "Aceptar"
        });
    }
};

