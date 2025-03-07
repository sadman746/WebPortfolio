// js/script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', function() {
  var portfolio = document.getElementById('portfolio');
  var scrollY = window.scrollY;
  var viewportHeight = window.innerHeight;
  // Calcola il progresso dallo scroll, da 0 a 1 (fino a 100vh)
  var progress = Math.min(1, scrollY / viewportHeight);
  // Quando scrollY raggiunge l'altezza della viewport, il portfolio si sposta di -100vh
  portfolio.style.transform = 'translateY(' + (-progress * 100) + 'vh)';
});