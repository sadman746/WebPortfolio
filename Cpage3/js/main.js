let latestKnownScrollY = 0;
let ticking = false;

function updatePortfolio() {
  const portfolio = document.getElementById('portfolio');
  const viewportHeight = window.innerHeight;
  const progress = Math.min(1, latestKnownScrollY / viewportHeight);
  portfolio.style.transform = 'translate3d(0, ' + (-progress * 100) + 'vh, 0)';
  ticking = false;
}

window.addEventListener('scroll', function() {
  latestKnownScrollY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(updatePortfolio);
    ticking = true;
  }
}, { passive: true });

window.addEventListener('scroll', function() {
  const portfolio = document.getElementById('portfolio');
  const viewportHeight = window.innerHeight;
  let progress = window.scrollY / viewportHeight;
  if (progress > 1) progress = 1; // Limita il valore massimo
  portfolio.style.transform = 'translate3d(0, ' + (-progress * 100) + 'vh, 0)';
});