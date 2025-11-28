// Configuración ESmodules 2611

const caps = document.querySelector(".caps");

function crear_capitulo(cap) {
  const img = document.createElement("img");
  img.src = cap.portada || "imagen/cap_default.jpg";
  img.alt = cap.nombre;
  return img;
}

function render_caps(lista, contenedor) {
  lista.forEach((cap) => {
    const imagen = crear_capitulo(cap);
    contenedor.appendChild(imagen);
  });
}

render_caps(comic.capitulos, caps);

/* ------------------------- PERSONAJES ------------------------- */

const contPersonajes = document.querySelector(".person");

function crear_tarjeta_personaje(char) {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");

  tarjeta.innerHTML = `
        <img src="${char.imagen}" alt="${char.nombre}">
        <div class="ordenDeTarjeta">
            <h2>${char.nombre.toUpperCase()}</h2>
            <p>${char.descripcion}</p>
        </div>
    `;

  return tarjeta;
}

function render_personajes(lista) {
  lista.forEach((char) => {
    const tarjeta = crear_tarjeta_personaje(char);
    contPersonajes.appendChild(tarjeta);
  });
}

// Limpia los personajes que vienen en el HTML base
contPersonajes.innerHTML = `
    <h2>PERSONAJES</h2>
`;

render_personajes(comic.personajes);