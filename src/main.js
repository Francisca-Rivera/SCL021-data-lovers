import { example } from './data.js';

import data from './data/pokemon/pokemon.js';



let toggles = document.querySelector (".toggle"); //interacción del toggle
let menu = document.querySelector (".menu"); // interacción dentro del menu 
toggles.onclick = function(){
    menu.classList.toggle("active")
}


//Interacción click de cada elemeto de la ruleta
var electric = document.querySelectorAll( '.Btn' );

    electric.forEach( link =>{
        link.addEventListener( "click",_ => {
            event.preventDefault();

     let moveTo = link.getAttribute( 'moveTo' );
        document.getElementById(moveTo).scrollIntoView(true);

        });
    });


  
//Llamando a la data "Electric", como llamar a otra data sin eliminar electric? sin que se combinen?

const pokedex = document.getElementById("root");
const dataPokemon = data.pokemon;

for (let i= 0; i< dataPokemon.length; i++){
    if (dataPokemon[i].type == "electric"){
  
    //Crear un div para cada pokemon
    const cardPokemon = document.createElement("div");
    cardPokemon.classList.add("pokemon-card");

    //Crear un div para nombre
    const namePokemon=document.createElement("div");
    namePokemon.classList.add("pokemon-name");

    //Crear etiqueta p para nombres
    const div = document.createElement("p");
    div.textContent = `${dataPokemon[i].name}`;
    pokedex.appendChild(div);

    //Crear etiqueta img para agregar imagenes
    const img = document.createElement("img");
    img.src = `${dataPokemon[i].img}`;
    pokedex.appendChild(cardPokemon);

  
    //Hay que hacer un appendChild por cada información que yo quiera extraer
    cardPokemon.appendChild(img);
    cardPokemon.appendChild(div);  
        }}



let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll(".pokemon-card")];
    for (var i = currentItem; i < currentItem + 11; i++) {
        boxes[i].style.display = 'inline-block';
        if (i === boxes.length - 1) {
            loadMoreBtn.remove();
            document.querySelector("#back").style.display = "inline-block";
        }
    }

let btn = document.querySelector('#back');
let header = document.querySelector('.encabezado');

    btn.addEventListener('click', function () {
    header.scrollIntoView(true);
});
    return currentItem += 3; // Eso retorna para que muestre los pokemones
};


//Si mouseover encima de "pokedex en el navbar
//opacar el padre
let padre = document.getElementById("principal-container")
let button = document.querySelector(".pokedex")
button.addEventListener('mouseover',  myFunction)

function myFunction() {
    padre.style.opacity = 0.1;
    }
    
    button.addEventListener('mouseout',  myFunctionn)

    function myFunctionn() {
        padre.style.opacity= "";
    }
    

    // funcion mayuscula

   
console.log(example, data)
