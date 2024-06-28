// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.
// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.
// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here

//1.1 -1.2
const div = document.createElement('div')
const p = document.createElement('p')
div.appendChild(p)
document.body.appendChild(div)

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.
const div2 = document.createElement('div')

for (let i = 0; i < 6; i++) {
  const p2 = document.createElement('p')
  div2.appendChild(p2)
  p2.textContent = 'texto'
}
document.body.appendChild(div2)

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let findHere = document.querySelector('h2.fn-insert-here')
findHere.textContent = 'Wubba Lubba dub dub'

// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
let ul = document.createElement('ul')
document.body.appendChild(ul)

for (let app of apps) {
  let li = document.createElement('li')
  ul.appendChild(li)
  li.textContent = app
}

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let removeMe = document.querySelectorAll('.fn-remove-me')

removeMe.forEach((element) => {
  element.remove()
})

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const newP = document.createElement("p")
const div3 = document.querySelectorAll ("div.fn-insert-here")
div3[1].insertAdjacentElement("beforebegin", newP)

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here
const div4 = document.querySelectorAll("div.fn-insert-here")

for (let i=0 ; i <div4.length ; i++){
  let p4 = document.createElement("p")
  p4.textContent = "Voy dentro!"
  div4[i].appendChild(p4)
}
