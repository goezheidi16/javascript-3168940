const info_comic = document.querySelector(".info_comic")

console.log(info_comic) 

info_comic.innerHTML = `
    <small>${comic.year}</small>
    <h1>${comic.nombreComic}</h1>
    <P>${comic.sinopsis}</P>
    <p>${comic.genero}</p>
    `