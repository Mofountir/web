const apiKey = 'b8a575f5-e80c-4f26-b8c4-1a634b2d3bdf'




async function fetchTrainDepartures() {
    try {
        const response = await fetch(`https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:SNCF:87595157/departures?`, {
            headers: {
                'Authorization': apiKey
            }
        });
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
}

fetchTrainDepartures()

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
