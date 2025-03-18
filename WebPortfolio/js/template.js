document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const operaID = params.get("id");

    fetch("/data/opere-data.json")
        .then(response => response.json())
        .then(data => {
            if (data[operaID]) {
                const opera = data[operaID];

                // Imposta il background dell'hero
                if (opera.hero_image) {
                    document.querySelector(".hero").style.backgroundImage = `url('${opera.hero_image}')`;
                }

                // Imposta i dettagli dell'opera
                document.getElementById("opera-title").textContent = opera.title + " | Nunzia Ascolese";
                document.getElementById("opera-info-title").textContent = opera.title;
                document.getElementById("opera-location").textContent = opera.location;
                document.getElementById("opera-year").textContent = opera.year;
                document.getElementById("opera-dimensions").textContent = "Dimensioni: " + opera.dimensions;
                document.getElementById("opera-materials").textContent = "Materiali: " + opera.materials;
                document.getElementById("opera-curator").textContent = "Curato da: " + opera.curator;
                document.getElementById("opera-description").textContent = opera.description;
                document.getElementById("opera-full-description").textContent = opera.full_description;

                // Gestione della galleria
                const galleryContainer = document.querySelector(".gallery-container");
                
                // Rimuove il contenitore intermedio se presente
                const galleryContent = document.getElementById("gallery-content");
                if (galleryContent) {
                    galleryContent.remove();
                }
                
                // Seleziona il pulsante "gallery-next" per inserire le immagini prima di esso
                const nextButton = galleryContainer.querySelector(".gallery-next");

                if (opera.images && opera.images.length > 0) {
                    opera.images.forEach(img => {
                        let div = document.createElement("div");
                        div.classList.add("gallery-item");
                        
                        let image = document.createElement("img");
                        image.src = img;
                        image.alt = "Opera Image";
                        
                        div.appendChild(image);
                        // Inserisce l'elemento della galleria prima del pulsante "gallery-next"
                        galleryContainer.insertBefore(div, nextButton);
                    });
                } else {
                    let p = document.createElement("p");
                    p.textContent = "Nessuna immagine disponibile";
                    galleryContainer.insertBefore(p, nextButton);
                }
            } else {
                console.error("Opera non trovata:", operaID);
            }
        })
        .catch(error => console.error("Errore nel caricamento dei dati:", error));
});