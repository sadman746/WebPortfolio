document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const operaID = params.get("id");
  
    fetch("opere-data.json")
      .then(response => response.json())
      .then(data => {
        if (data[operaID]) {
          const opera = data[operaID];

          // Aggiorna i contenuti testuali della pagina
          document.title = opera.title;
          document.getElementById("opera-title-text").textContent = opera.title;
          document.getElementById("opera-year").textContent = opera.year;
          document.getElementById("opera-location").textContent = opera.location;
          document.getElementById("opera-materials").textContent = "Materiali: " + opera.materials;
          document.getElementById("opera-curator").textContent = "Curato da: " + opera.curator;
          document.getElementById("opera-description").textContent = opera.description;
          document.getElementById("opera-full-description").textContent = opera.full_description;

          // ✅ Imposta dinamicamente il background dell'hero
          if (opera.hero_image) {
            document.querySelector(".hero").style.backgroundImage = `url(${opera.hero_image})`;
          }

          // Carica la galleria dinamicamente
          const galleryContainer = document.getElementById("gallery-content");
          opera.images.forEach(img => {
            let div = document.createElement("div");
            div.classList.add("gallery-item");
            div.innerHTML = `<img src="${img}" alt="${opera.title}">`;
            galleryContainer.appendChild(div);
          });
        }
      })
    .catch(error => console.error("Errore nel caricamento dei dati:", error));

});
