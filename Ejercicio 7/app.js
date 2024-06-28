//Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

let ul = document.createElement("ul")
let div = document.querySelector('div[data-function="printHere"]');
div.appendChild(ul)



for (let place of places){
  let li = document.createElement("li")
  li.textContent=place
  ul.appendChild(li)
}