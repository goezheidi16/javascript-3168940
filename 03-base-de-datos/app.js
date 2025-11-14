const sinopsis = document.querySelector(".sinopsis")

console.log(sinopsis) 

sinopsis.innerHTML = `
    <small>${comic.year}</small>
    <h1>${comic.nombreComic}</h1>
    <P>${comic.sinopsis}</P>
    `