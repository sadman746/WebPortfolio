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

    // Logica del carosello
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

    document.querySelector(".next").addEventListener("click", () => {
        showSlide(currentIndex + 1);
    });

    document.querySelector(".prev").addEventListener("click", () => {
        showSlide(currentIndex - 1);
    });

    showSlide(currentIndex);
});