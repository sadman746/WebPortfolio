document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const operaID = params.get("id");

    fetch("data/opere-data.json")
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
                const nextButton = galleryContainer.querySelector(".gallery-next");
                const prevButton = galleryContainer.querySelector(".gallery-prev");

                if (opera.images && opera.images.length > 0) {
                    opera.images.forEach(media => {
                        let div = document.createElement("div");
                        div.classList.add("gallery-item");

                        if (media.endsWith(".mp4") || media.endsWith(".webm") || media.endsWith(".ogg")) {
                            let video = document.createElement("video");
                            video.src = media;
                            video.controls = true;
                            video.autoplay = false;
                            video.loop = false;
                            video.muted = false;
                            video.style.maxWidth = "100%";
                            video.style.height = "auto";
                            div.appendChild(video);
                        } else {
                            let image = document.createElement("img");
                            image.src = media;
                            image.alt = "Opera Image";
                            div.appendChild(image);
                        }

                        galleryContainer.insertBefore(div, nextButton);
                    });

                    // Controllo dello scroll per avviare/mettere in pausa i video
                    function checkVisibleVideos() {
                        document.querySelectorAll(".gallery-item video").forEach(video => {
                            let rect = video.getBoundingClientRect();
                            let isVisible = rect.left >= 0 && rect.right <= window.innerWidth;
                            
                            if (isVisible) {
                                video.play();
                            } else {
                                video.pause();
                            }
                        });
                    }

                    // Attiva il controllo quando si scorre nella galleria
                    galleryContainer.addEventListener("scroll", checkVisibleVideos);

                    // Controllo iniziale all'avvio della pagina
                    checkVisibleVideos();
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