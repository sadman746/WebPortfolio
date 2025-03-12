//Script per l'animazione della sezione portfolio
  document.addEventListener("DOMContentLoaded", function() {
    let lastScrollPos = 0;
    let ticking = false;
    const portfolio = document.getElementById('portfolio');
    
    function updatePortfolio() {
      const viewportHeight = window.innerHeight;
      // Calcola il progresso: se scrollY raggiunge viewportHeight, progress sarà 1 (ovvero 100%)
      const progress = Math.min(1, lastScrollPos / viewportHeight);
      // Applica la trasformazione usando translate3d per sfruttare l'accelerazione hardware
      portfolio.style.transform = 'translate3d(0, ' + (-progress * 100) + 'vh, 0)';
      ticking = false;
    }
    
    window.addEventListener('scroll', function() {
      lastScrollPos = window.pageYOffset;
      if (!ticking) {
        window.requestAnimationFrame(updatePortfolio);
        ticking = true;
      }
    });
  });