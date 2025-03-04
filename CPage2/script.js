document.addEventListener("DOMContentLoaded", () => {
    console.log("Sito di Nunzia Ascolese caricato!");

    let lastScrollY = window.scrollY;
    const header = document.querySelector("header");

    // Nasconde la navbar quando si scrolla in basso e la mostra quando si scrolla in alto
    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            header.classList.add("hidden");
        } else {
            header.classList.remove("hidden");
        }
        lastScrollY = window.scrollY;
    });

    function toggleMenu() {
        const nav = document.querySelector("nav ul");
        nav.classList.toggle("active");
    }
    
    // Logica del carosello
    let currentIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll(".carousel a");
        const totalSlides = slides.length;
        const visibleSlides = 4;

        if (index >= totalSlides - (visibleSlides - 1)) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - visibleSlides;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * (100 / visibleSlides) + "%";
        document.querySelector(".carousel").style.transform = `translateX(${offset})`;
    }

    document.querySelector(".next").addEventListener("click", () => {
        showSlide(currentIndex + 1);
    });

    document.querySelector(".prev").addEventListener("click", () => {
        showSlide(currentIndex - 1);
    });

    document.addEventListener("DOMContentLoaded", () => {
        showSlide(currentIndex);
    });
});