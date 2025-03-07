let latestKnownScrollY = 0;
let ticking = false;

function updatePortfolio() {
  const portfolio = document.getElementById('portfolio');
  const viewportHeight = window.innerHeight;
  const progress = Math.min(1, latestKnownScrollY / viewportHeight);
  portfolio.style.transform = 'translateY(' + (-progress * 100) + 'vh)';
  ticking = false;
}

window.addEventListener('scroll', function() {
  latestKnownScrollY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(updatePortfolio);
    ticking = true;
  }
});