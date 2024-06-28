// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
// que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];


let ul = document.createElement("ul")
document.body.appendChild(ul)
for (let album of albums){
  let li = document.createElement("li")
  li.textContent = album
  ul.appendChild(li)
}
