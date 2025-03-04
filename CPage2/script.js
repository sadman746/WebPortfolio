document.addEventListener("DOMContentLoaded", () => {
    console.log("Sito di Nunzia Ascolese caricato!");

    let lastScrollY = window.scrollY;
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            // Se stai scorrendo verso il basso, nasconde la navbar
            header.classList.add("hidden");
        } else {
            // Se stai scorrendo verso l'alto, mostra la navbar
            header.classList.remove("hidden");
        }
        lastScrollY = window.scrollY;
    });

    let currentIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll(".carousel img");
        if (index >= slides.length) {
        currentIndex = 0;
        } else if (index < 0) {
        currentIndex = slides.length - 1;
        } else {
        currentIndex = index;
        }

    const offset = -currentIndex * 100 + "%";
    document.querySelector(".carousel").style.transform = `translateX(${offset})`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

// Avvia il carosello con la prima immagine visibile
    document.addEventListener("DOMContentLoaded", () => {
        showSlide(currentIndex);
    });
});