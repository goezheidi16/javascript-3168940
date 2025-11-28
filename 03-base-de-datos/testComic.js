import {comic} from "./bd.js";

const info_comic = document.querySelector(".info_comic")

console.log(info_comic) 

info_comic.innerHTML = `
    <h1>${comic.nombreComic}</h1>
    <P>${comic.sinopsis}</P>
    <p>${comic.genero}</p>
    <small>${comic.year}</small>
    `
const card_personajes = document.querySelector(".card-personajes")

comic.personajes.forEach((char)=>{
    
})
/* 
<a href="./?id=${char.id}"> */