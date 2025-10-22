let contadorCora = document.querySelector('#contador-corazon')
let clickCora = 0

let contadorGato = document.querySelector('#contador-gatos')
let clickGato = 0

let corazon = document.querySelectorAll('#id-corazon')

corazon.forEach(elementCora => {
    elementCora.addEventListener('click', coraMas)
    function coraMas() {
        clickCora++
        contadorCora.textContent = clickCora
        elementCora.classList.add('animaCora')
        elementCora.removeEventListener('click', coraMas)
    }
});
/*querySelectorAll es para almacenar en una sola variable varios elementos del index que tenga una misma clase o id */
let gato = document.querySelectorAll('#id-gato')

gato.forEach(elementGato => {
    elementGato.addEventListener('click', gatoMas)
    function gatoMas() {
        clickGato++
        contadorGato.textContent = clickGato
        elementGato.classList.add('animaGato')
        elementGato.removeEventListener('click', gatoMas)
    }
});
/*forEach busca los elementos dentro de la variable y le da una misma funcion o evento a cada elemento */