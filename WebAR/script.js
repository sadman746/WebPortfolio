document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const startARButton = document.getElementById("start-ar");
    const homeButton = document.getElementById("home-button");
    const scene = document.querySelector("a-scene");

    startARButton.addEventListener("click", () => {
        loadingScreen.style.display = "none"; // Nasconde la schermata di caricamento
        scene.style.visibility = "visible"; // Mostra la scena AR
        homeButton.style.display = "block"; // Mostra il pulsante per tornare alla home
    });

    homeButton.addEventListener("click", () => {
        window.location.href = "/"; // Cambia l'URL per tornare alla home
    });
});