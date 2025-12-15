export let comic = {
  banners: [
    "./IMGS/fondos/bann1.jpg",
    "./IMGS/fondos/bann2.jpg",
    "./IMGS/fondos/bann3.jpg",
    "./IMGS/fondos/bann4.jpg",
  ],
  nombreComic: "RUISEÑORA",
  numeroCapitulos: 3,
  genero: "Fantasía, emotivo, reflexivo",
  sinopsis:
    "Andrea vive en Bogotá creando su propio camino que pronto se torna difícil cuando la casa de sus padres se incendia y descubre que no fue un accidente cuando una criatura extraña se va en su contra y ella no sabe cuáles son sus razones o quién es él. No tardará mucho para descubrir cuál es la realidad de lo que está viviendo y el poder que ella tiene...",
  autores: ["Heidi Góez", "Isabel"],
  year: 2025,
  personajes: [
    {
      id: 1,
      nombre: "Andrea joven",
      descripcion:
        "25 años, personalidad alegre y diferenciada, ojos café oscuro, cabello castaño medio, estatura promedio, complexión delgada, toca la guitarra, tiene un estilo único, estudiante de bellas artes, cabello hasta mitad de espalda.",
      subtexto: "Despertando del sueño.",
      imagen: "./IMGS/personajes/perso1.jpg",
      clase: "andrea_j",
    },
    {
      id: 2,
      nombre: "Andrea actual",
      descripcion:
        "50 años, es mamá, alegre, personalidad alegre y diferenciada, ojos café oscuro, cabello castaño medio con canas, estatura promedio, complexión delgada, solista, tiene un estilo único, cabello encima de los hombros.",
      subtexto: "Descubriendose.",
      imagen: "./IMGS/personajes/perso2.jpg",
      clase: "andrea_a",
    },
    {
      id: 3,
      nombre: "Emoción",
      descripcion:
        "Alto, oscuro, cuerpo de barro, frustrado y enojado.",
      subtexto: "Dolor sin consentimiento.",
      imagen: "./IMGS/personajes/perso5.jpg",
      clase: "emocion",
    },
  ],

  capitulos: [
    {
      id: 1,
      nombre: "Vivir",
      portada: "./IMGS/capitulos/cap1.jpg",
      descripcion:
        "Despues de haber vivido comodamente en casa de sus padres Andrea ingresa a la universidad y descubre que su amor por las bellas artes es más grande de lo que antes creía, pero esto desencadenará una serie de acontesimientos que le afectarán a largo plazo.",
      subtexto:
        "El descubrimiento que habita en su propia vida",
    },
    {
      id: 2,
      nombre: "El cambio",
      portada: "./IMGS/capitulos/cap2.jpg",
      descripcion:
        "Andrea conoce a un chico del cual se enamora y él de ella. Se van a vivir juntos y forman una banda. Un tiempo después Andrea recibe una llamada de sus padres...",
      subtexto:
        "No todo es para siempre.",
    },
    {
      id: 3,
      nombre: "No hay final",
      portada: "./IMGS/capitulos/cap3.jpg",
      descripcion:
        "La casa de los padres de Andrea se incendió y acude a ayudarlos. Descubre que el incendio fue provocado intencionalmente por alguien... o algo.",
      subtexto:
        "¿Puede ser más fuerte la emoción que la conciencia?",
    },
  ],
};
