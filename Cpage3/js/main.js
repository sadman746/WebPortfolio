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