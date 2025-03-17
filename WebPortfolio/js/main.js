let ticking = false;

function updateHeroEffects() {
  const hero = document.querySelector('.hero, .sotto-il-naso');
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

//icone social visibili solo su hero 

window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero, .sotto-il-naso');
  const headerIcons = document.querySelector('.header-icons');
  if (!hero || !headerIcons) return;
  
  // Recupera l'altezza della hero
  const heroHeight = hero.offsetHeight;
  
  // Se l'utente ha scrollato meno del 90% dell'altezza della hero, mostra le icone,
  // altrimenti nascondile.
  if (window.scrollY < heroHeight * 0.8) {
    headerIcons.style.opacity = '1';
    headerIcons.style.visibility = 'visible';
  } else {
    headerIcons.style.opacity = '0';
    headerIcons.style.visibility = 'hidden';
  }
});
//Galleria immagini 
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery-container");
  const prevButton = document.querySelector(".gallery-prev");
  const nextButton = document.querySelector(".gallery-next");

  // Imposta quanto scrollare a ogni click
  const scrollStep = window.innerWidth * 0.7; // Scorri circa il 70% della larghezza dello schermo

  // Evento per la freccia sinistra
  prevButton.addEventListener("click", function () {
      gallery.scrollBy({ left: -scrollStep, behavior: "smooth" }); // Scorrimento fluido a sinistra
  });

  // Evento per la freccia destra
  nextButton.addEventListener("click", function () {
      gallery.scrollBy({ left: scrollStep, behavior: "smooth" }); // Scorrimento fluido a destra
  });
});