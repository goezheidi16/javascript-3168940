
// animar al cargar la página
document.addEventListener("DOMContentLoaded", () => {

  // animar el inicio
  document.querySelectorAll('#header, .sinopsis, h1, .logo, nav').forEach(el => {
    el.classList.add('show');
  });

  // animar cards capítulos
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .capitulo').forEach(el => {
    observer.observe(el);
  });
});
