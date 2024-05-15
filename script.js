
const apiKey = '3a363f03-8b80-4dc3-9b90-75c0db428d5b';


// Fonction pour récupérer les données des prochains départs
async function fetchNextDepartures() {
    try {
        // Récupération des données des zones d'arrêt
        const stopAreasResponse = await fetch('https://api.sncf.com/v1/coverage/sncf/stop_areas/', {
            headers: {
                'Authorization': apiKey
            }
        });
        if (!stopAreasResponse.ok) {
            throw new Error('Erreur lors de la récupération des zones d\'arrêt');
        }
        const stopAreasData = await stopAreasResponse.json();

        // Parcourir chaque zone d'arrêt
        for (const stopArea of stopAreasData.stop_areas) {
            const stopAreaId = stopArea.id;
            // Récupération des données des prochains départs pour chaque zone d'arrêt
            const departuresResponse = await fetch(`https://api.sncf.com/v1/coverage/sncf/stop_areas/${stopAreaId}/departures`, {
                headers: {
                    'Authorization': apiKey
                }
            });
            if (!departuresResponse.ok) {
                throw new Error('Erreur lors de la récupération des départs');
            }
            const departuresData = await departuresResponse.json();

            // Extraction des informations des prochains départs
            const nextDepartures = extractNextDeparturesInfo(departuresData);
            console.log(`Prochains départs pour la zone d'arrêt ${stopAreaId}:`, nextDepartures);
        }
    } catch (error) {
        console.error('Erreur:', error);
    }
}

// Fonction pour extraire les informations des prochains départs
function extractNextDeparturesInfo(data) {
    return data.departures.map(departure => ({
        id: departure.stop_point.id,
        operator: '',
        transportationMode: departure.display_informations.mode,
        trainNumber: departure.display_informations.headsign,
        baseDepartureTime: Date(departure.stop_date_time.base_departure_date_time),
        realDepartureTime: Date(departure.stop_date_time.departure_date_time),
        destination: departure.display_informations.direction.split(' (')[0],


    }));
}



// Appel de la fonction pour récupérer les données des prochains départs
fetchNextDepartures();



// Departures 
document.addEventListener("DOMContentLoaded", function() {
    const departures = document.getElementById('departures');

    // Charger les depart populaire depuis le fichier JSON
    fetch('data/gares.json')
        .then(response => response.json())
        .then(data => {
            for (const [ville, gares] of Object.entries(data)) {
                const departHTML = `
                    <div class="box">
                        <img src="images/${ville.toLowerCase()}.jpg" alt="${ville}">
                        <div class="content">
                            <div>
                                <h4>${ville}</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p>Ea iusto ipsa repudiandae amet conseq.</p>
                                <a href="departure.php?ville=${ville.toLowerCase()}">Lire Plus</a>
                            </div>
                        </div>
                    </div>
                `;
                departures.insertAdjacentHTML('beforeend', departHTML);
            }
        });

    // Charger les gares pour la ville sélectionnée
    const params = new URLSearchParams(window.location.search);
    const selectedVille = params.get('ville');
    if (selectedVille) {
        const garesList = document.getElementById('garesList');
        fetch('data/gares.json')
            .then(response => response.json())
            .then(data => {
                const selectedGares = data[selectedVille];
                if (selectedGares) {
                    for (const [nomGare, identifiant] of Object.entries(selectedGares)) {
                        const gareHTML = `<button class="gare">${nomGare}</button>`;
                        garesList.insertAdjacentHTML('beforeend', gareHTML);
                    }
                } else {
                    garesList.innerHTML = "Aucune information sur les gares pour cette ville.";
                }
            });
    }
});
 

// login
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

//responsive menu
var toggle_menu = document.querySelector('.responsive-menu');
var menu = document.querySelector('.menu');
toggle_menu.onclick = function(){
        toggle_menu.classList.toggle('active');
        menu.classList.toggle('responsive')
}
