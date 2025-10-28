let contadorCora = document.querySelector('#contador_1')
let contador_1 = 0

let contadorGato = document.querySelector('#contador_2')
let contador_2 = 0

let corazon = document.querySelectorAll('#id_corazon')

corazon.forEach(elementCora => {
    elementCora.addEventListener('click', contador_cora)
    function contador_cora() {
        contador_1++
        contadorCora.textContent = contador_1
        elementCora.classList.add('anima_cora')
        elementCora.removeEventListener('click', contador_cora)
    }
});
/*querySelectorAll es para almacenar en una sola variable varios elementos del index que tenga una misma clase o id */
let gato = document.querySelectorAll('#id_gato')

gato.forEach(elementGato => {
    elementGato.addEventListener('click', contador_gato)
    function contador_gato() {
        contador_2++
        contadorGato.textContent = contador_2
        elementGato.classList.add('anima_gato')
        elementGato.removeEventListener('click', contador_gato)
    }
});
/*forEach busca los elementos dentro de la variable y le da una misma funcion o evento a cada elemento */




let serpiente = document.querySelector('.serOne')
setInterval(() => {
    serpiente.setAttribute('src', './imagenes/serpiente2.png')
    setTimeout(() => {
        serpiente.setAttribute('src', './imagenes/serpiente1.png')
    }, 2500);
}, 5000);

let contadorEspicur = document.querySelector('#contador_espi')
let contador_3 = 0

let espicur = document.querySelectorAll('#espicursores')

espicur.forEach(contarEspi => {
    contarEspi.addEventListener('click', espiMas)
    function espiMas(){
        contador_3++
        contadorEspicur.textContent = contador_3
        contarEspi.classList.add('chaoEspicur')
        contarEspi.removeEventListener('click', espiMas)
    }
});





let contadorMeteo = document.querySelector('#contadorMeteoro')
let contador_4 = 0

let meteoro = document.querySelectorAll('#meteoros')
let nave = document.querySelector('#nave')
let textoNave =document.querySelector('#naveText')

meteoro.forEach(elementMeteo => {
    elementMeteo.addEventListener('click', meteoMas)
    function meteoMas(){
        contador_4++
        contadorMeteo.textContent = contador_4
        elementMeteo.classList.add('chaoMeteo')
        elementMeteo.removeEventListener('click', meteoMas)

        if(contador_4 == 4){
            nave.classList.remove('naveHidden')
            nave.classList.add('naveDespega')
            textoNave.textContent = "Despegado <3"
        }
    }
});

/* carrusel */

//1. variables

const escena = document.querySelectorAll(".escena")
const anterior = document.querySelector(".anterior")
const siguiente = document.querySelector(".siguiente")
const miniaturas = document.querySelectorAll(".miniatura")
let indice = 0

console.log(escena)
console.log(anterior)
console.log(siguiente)
console.log(miniaturas)

//2. funciones

function mostrarEscena(i){
    //asigna la clase escena a todas las pantallas
    for (let j = 0; j < escena.length; j++) {
        escena[j].classList.add("escena")
    }

    escena[1].classList.add("activa")
    indice = i
}

//para mostrar la pantalla 1 al iniciar
mostrarEscena(0)

anterior.addEventListener("click", function(){
    indice = indice - 1
    if(indice < 0){ //para siguiente if(indice >= escena.length)
        indice = escena.length - 1 //va a la primera imagen
    }
    mostrarEscena(indice)
})

siguiente.addEventListener("click", function(){
    indice = indice + 1
    if(indice >= escena.length){
        indice = 0
    }
    mostrarEscena(indice)

})