// scrollEffect.js
let ticking = false;

function updateHeroEffects() {
  const hero = document.querySelector('.hero');
  const scrollY = window.scrollY;

  // Calcola il fattore di zoom, blur e luminosità
  const scale = 1 + scrollY / 2000;         // Leggero zoom
  const blurVal = scrollY / 100;              // Aumenta il blur in modo proporzionale
  const brightness = Math.max(1 - scrollY / 1000, 0.7);  // Diminuisce la luminosità

  // Applica le trasformazioni
  hero.style.transform = `scale(${scale})`;
  hero.style.filter = `blur(${blurVal}px) brightness(${brightness})`;

  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateHeroEffects);
    ticking = true;
  }
}, { passive: true });