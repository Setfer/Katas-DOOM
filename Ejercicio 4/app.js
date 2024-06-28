// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
//1.1
let boton = document.createElement('button')
boton.id = 'btnToClick'
document.body.appendChild(boton)

boton.addEventListener('click', function (event) {
  console.log(event)
})
//1.2
let focus = document.querySelector('.focus')
function handleMouseOver(event) {
  console.log(event)
}
focus.addEventListener('mouseover', handleMouseOver)

//1.3
const miInput = document.querySelector(".value")
miInput.addEventListener('input', function () {
  let valorInput = miInput.value
  console.log('Valor del input:', valorInput)
})
