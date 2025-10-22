let imagen = document.querySelector('.imagen')
let byn = document.querySelector('.BN')
let desen = document.querySelector('.Desen')
let rys = document.querySelector('.RS')

byn.addEventListener('click', boton1)
function boton1(){
    imagen.classList.add('ByN')
    byn.classList.add('active')
    byn.removeEventListener('click', boton1)
    byn.addEventListener('click', boton1q)
}
function boton1q(){
    imagen.classList.remove('ByN')
    byn.classList.remove('active')
    byn.addEventListener('click', boton1)
    byn.removeEventListener('click', boton1q)
}

desen.addEventListener('click', boton2)
function boton2(){
    imagen.classList.add('blur')
    desen.classList.add('active')
    desen.removeEventListener('click', boton2)
    desen.addEventListener('click', boton2q)
}
function boton2q(){
    imagen.classList.remove('blur')
    desen.classList.remove('active')
    desen.addEventListener('click', boton2)
    desen.removeEventListener('click', boton2q)
}

rys.addEventListener('click', boton3)
function boton3(){
    imagen.classList.add('RyS')
    rys.classList.add('active')
    rys.removeEventListener('click', boton3)
    rys.addEventListener('click', boton3q)
}
function boton3q(){
    imagen.classList.remove('RyS')
    rys.classList.remove('active')
    rys.addEventListener('click', boton3)
    rys.removeEventListener('click', boton3q)
}