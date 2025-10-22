//1. Captura de variables
let cora = document.querySelectorAll('.corazon')
let todosGato = document.querySelector('#id-gato')
let contador_corazon=document.getElementById("contador_corazon")
let contador_gatos=document.getElementById("contador_gatos")
let contador_1 = 0
let contador_2 = 0

console.log(cora)

//2.  Funciones
cora.forEach( item => {

    item.addEventListener("click", () => {
    item.style.background = "blue"
    item.classList.add("animaCora")
    contador++
    contador_corazon.texContent = contador
 });

})
//2.  Funciones
cora.forEach( item => {

    item.addEventListener("click", () => {
    item.style.background = "blue"
    item.classList.add("animaCora")
    contador++
    contador_corazon.texContent = contador
 });

})

//3. Eventos