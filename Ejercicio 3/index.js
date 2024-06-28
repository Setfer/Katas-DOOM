// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
// const countries = [
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
// ];
// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.
// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.

// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
 const ul = document.createElement("ul")
 document.body.appendChild (ul)
 for (country of countries){
  let li = document.createElement ("li")
  ul.appendChild(li)
  li.textContent = country
 }


 // 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
 let remove = document.querySelector(".fn-remove-me")
 remove.remove()

 // 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".

 const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let ul2 = document.createElement("ul")
for (let car of cars){
  let li2 = document.createElement("li")
  li2.setAttribute ("data-function", "printHere");
  li2.textContent = car
  ul2.appendChild(li2)
} 
document.body.appendChild(ul2)


// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.

 const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
 ];
let button = document.createElement("button")
 for (let country2 of countries2){
  let div = document.createElement("div") 
  let h4 = document.createElement("h4")
  let img = document.createElement("img")
  let button = document.createElement("button")
  div.appendChild(h4)
  h4.textContent = country2.title
  div.appendChild(img)
  img.src= country2.imgUrl
  document.body.appendChild(div)
  div.appendChild(button)
 }

 // 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.

let buton = document.createElement("button")

buton.addEventListener("click", function() {
  const lastDiv = document.body.querySelector("div:last-of-type");
    document.body.removeChild(lastDiv);
});

document.body.appendChild(buton)

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.
button.addEventListener("click", function(){
  let borrar = document.querySelector(button.parentElement)
  document.body.remove(borrar)
})







