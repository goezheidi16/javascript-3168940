const info_comic = document.querySelector(".info_comic")

console.log(info_comic) 

info_comic.innerHTML = `
    <small>${comic.year}</small>
    <h1>${comic.nombreComic}</h1>
    <P>${comic.sinopsis}</P>
    <p>${comic.genero}</p>
    `
const card_personajes = document.querySelector(".card-personajes")

console.log(comic.personajes) 

comic.personajes.forEach( char => {
    //crear elementos dinamicos con JavaScript
    const div = document.createElement("div")
    div.classList.add("personaje")
    div.innerHTML = `
        <img src="${char.imagen}" alt="">
        <p>${char.nombre}</p>
        <p>${char.descripción}</p>
    `
    card_personajes.appendChild(div)

    console.log(char.nombre)
    document.body.innerHTML += `<img src="${char.imagen}" width="200">`
});