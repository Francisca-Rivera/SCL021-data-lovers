//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";

//Interacción del toggle dentro del menú//
let toggles = document.querySelector(".toggle"); 
let menu = document.querySelector(".menu");
toggles.onclick = function () {
  menu.classList.toggle("active");
};









//Interacción cada elemento de la ruleta a través de un click//
var Btns = document.querySelectorAll(".Btn");

Btns.forEach((link) => {
  link.addEventListener("click", () => {
    event.preventDefault();

let moveTo = link.getAttribute("moveTo");
    document.getElementById(moveTo).scrollIntoView(true);
  });
});

window.onload = function () 
{
    var test =document.querySelectorAll('.Btn');
    let tag=document.querySelector("#types");
	
    for(var i=0;i<test.length;i++)
    {
        test[i].addEventListener("click", function()
        {
            tag.innerText=this.id;
        }); 
    }
}   


//Crea pop Up
document.querySelectorAll(".Btn").forEach((e) => {
    e.addEventListener("click", (event) => {
      const cardType = document.getElementById("container-pokemoncard");
      const id = event.target.id;
      console.log(id);
      cardType.textContent = "";
  
      const dataPokemon = data.pokemon;
      for (let i = 0; i < dataPokemon.length; i++) {
        if (dataPokemon[i].type.includes(id)) {
          //Crear un div para cada pokemon
          const cardPokemon = document.createElement("div");
          cardPokemon.classList.add("pokemon-card");
  
          //Crear un div para nombre
          const namePokemon = document.createElement("div");
          namePokemon.classList.add("pokemon-name");
  
          //Crear etiqueta p para nombres
          const div = document.createElement("p");
          div.textContent = `${dataPokemon[i].name}`;
          cardType.appendChild(div);
  
          //Crear etiqueta img para agregar imagenes
          const img = document.createElement("img");
          img.src = `${dataPokemon[i].img}`;
          cardType.appendChild(cardPokemon);
  
         
  
          //Hay que hacer un appendChild por cada información que yo quiera extraer
          cardPokemon.appendChild(img);
          cardPokemon.appendChild(div);
      
          //boton close pop up
          cardPokemon.addEventListener("click", function () {
            console.log("click");
            let popUpInfo = createPopUp(dataPokemon[i]);
            document.getElementById("contentPopUp").innerHTML = "";
            document.getElementById("contentPopUp").innerHTML = popUpInfo;
            document.getElementById("popUp").open = true;
   
            
          });
        }
      }
    });
  });
  //Crea informacion de los pop Up
function createPopUp(dataPokemon) {
    return `<div class="infoType">
    <img src="${dataPokemon.img}" alt="Type Pokemon">
      </div>
      <div class="info">
      <h2>${dataPokemon.name}</h2>
       <h3>${dataPokemon.type}</h3>
       <p>${dataPokemon.about}</p>
      </div>`;
  }
  document.getElementById("btnClosePopUp").addEventListener("click", closePopUp);
  function closePopUp() {
    console.log("click close");
    document.getElementById("popUp").open = false;
  }



let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 3;

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".pokemon-card")];
  for (var i = currentItem; i < currentItem + 11; i++) {
    boxes[i].style.display = "inline-block";
    if (i === boxes.length - 1) {
      document.querySelector("#back").style.display = "inline-block";

      console.log(boxes);
    }
  }

  let btn = document.querySelector("#back");
  let header = document.querySelector(".container-header");

  btn.addEventListener("click", function () {
    header.scrollIntoView(true);
  });
  return (currentItem += 3); // Eso retorna para que muestre los pokemones
};