//1. Captura de variables
let cora = document.querySelectorAll('.corazon')
let todosGato = document.querySelector('#id-gato')
let contador = 0

console.log(cora)

//2.  Funciones
cora.forEach( item => {

    item.addEventListener("click", () => {
    item.style.background = "blue"
    item.classList.add("corazon")
    counter++
    tablero.texContent = counter
 });

})

//3. Eventos