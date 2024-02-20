

// Import the planets object from the fetch.js file
import { planets } from "./fetch";


// Grab all dom elements used for rendering the planet page
const planetPage = document.querySelector(".planetpage");
const planetName = document.querySelector(".planet__name");
const planetScientificName = document.querySelector(".planet__science");
const planetDescription = document.querySelector(".planet__descript");
const circumference = document.querySelector("#circ");
const distance = document.querySelector("#dist");   
const maxTemp = document.querySelector("#max");
const minTemp = document.querySelector("#min");
const moons = document.querySelector("#moons");
const planetbody = document.querySelector(".planet__left--planet");


// A function that will render the planet page depending on what planet was clicked


const renderPlanet = async (planet) => {

    planetPage.style.display = "flex";


    // Switch statement to check which planet was clicked and render the page accordingly
    switch(planet) {
        case "sun":
            planetName.innerHTML = planets[0].name;
            planetDescription.innerHTML = planets[0].desc;
            planetScientificName.innerHTML = planets[0].latinName;
            planetbody.style.width =  "300px";
            planetbody.style.height = "300px";
            planetbody.style.backgroundColor = "yellow";
            circumference.innerHTML = planets[0].circumference;
            distance.innerHTML = planets[0].distance;
            maxTemp.innerHTML = planets[0].temp.day;
            minTemp.innerHTML = planets[0].temp.night;
            moons.innerHTML = planets[0].moons.length;

            break;
        case "merc":
            planetName.innerHTML = planets[1].name;
            planetDescription.innerHTML = planets[1].desc;
            planetScientificName.innerHTML = planets[1].latinName;
            planetbody.style.width =  "200px";
            planetbody.style.height = "200px";
            planetbody.style.backgroundColor = "grey";
            circumference.innerHTML = planets[1].circumference;
            distance.innerHTML = planets[1].distance;
            maxTemp.innerHTML = planets[1].temp.day;
            minTemp.innerHTML = planets[1].temp.night;
            moons.innerHTML = planets[1].moons.length;
            break;
        case "venu":
            planetName.innerHTML = planets[2].name;
            planetDescription.innerHTML = planets[2].desc;
            planetScientificName.innerHTML = planets[2].latinName;
            planetbody.style.width =  "250px";
            planetbody.style.height = "250px";
            planetbody.style.backgroundColor = "orange";
            circumference.innerHTML = planets[2].circumference;
            distance.innerHTML = planets[2].distance;
            maxTemp.innerHTML = planets[2].temp.day;
            minTemp.innerHTML = planets[2].temp.night;
            moons.innerHTML = planets[2].moons.length;
            break;
        case "earth":
            planetName.innerHTML = planets[3].name;
            planetDescription.innerHTML = planets[3].desc;
            planetScientificName.innerHTML = planets[3].latinName;
            planetbody.style.width =  "275px";
            planetbody.style.height = "275px";
            planetbody.style.backgroundColor = "blue";
            circumference.innerHTML = planets[3].circumference;
            distance.innerHTML = planets[3].distance;
            maxTemp.innerHTML = planets[3].temp.day;
            minTemp.innerHTML = planets[3].temp.night;
            moons.innerHTML = planets[3].moons.length;
            break;
        case "mars":
            planetName.innerHTML = planets[4].name;
            planetDescription.innerHTML = planets[4].desc;
            planetScientificName.innerHTML = planets[4].latinName;
            planetbody.style.width =  "250px";
            planetbody.style.height = "250px";
            planetbody.style.backgroundColor = "red";
            circumference.innerHTML = planets[4].circumference;
            distance.innerHTML = planets[4].distance;
            maxTemp.innerHTML = planets[4].temp.day;
            minTemp.innerHTML = planets[4].temp.night;
            moons.innerHTML = planets[4].moons.length;
            break;
        case "jupi":
            planetName.innerHTML = planets[5].name;
            planetDescription.innerHTML = planets[5].desc;
            planetScientificName.innerHTML = planets[5].latinName;
            planetbody.style.width =  "400px";
            planetbody.style.height = "400px";
            planetbody.style.backgroundColor = "#C99039";
            circumference.innerHTML = planets[5].circumference;
            distance.innerHTML = planets[5].distance;
            maxTemp.innerHTML = planets[5].temp.day;
            minTemp.innerHTML = planets[5].temp.night;
            moons.innerHTML = planets[5].moons.length;
            break;
        case "satu":
            planetName.innerHTML = planets[6].name;
            planetDescription.innerHTML = planets[6].desc;
            planetScientificName.innerHTML = planets[6].latinName;
            planetbody.style.width =  "350px";
            planetbody.style.height = "350px";
            planetbody.style.backgroundColor = "#ead6b8";
            circumference.innerHTML = planets[6].circumference;
            distance.innerHTML = planets[6].distance;
            maxTemp.innerHTML = planets[6].temp.day;
            minTemp.innerHTML = planets[6].temp.night;
            moons.innerHTML = planets[6].moons.length;
            break;
        case "uranu":
            planetName.innerHTML = planets[7].name;
            planetDescription.innerHTML = planets[7].desc;
            planetScientificName.innerHTML = planets[7].latinName;
            planetbody.style.width =  "300px";
            planetbody.style.height = "300px";
            planetbody.style.backgroundColor = "slateblue";
            circumference.innerHTML = planets[7].circumference;
            distance.innerHTML = planets[7].distance;
            maxTemp.innerHTML = planets[7].temp.day;
            minTemp.innerHTML = planets[7].temp.night;
            moons.innerHTML = planets[7].moons.length;
            break;
        case "neptu":
            planetName.innerHTML = planets[8].name;
            planetDescription.innerHTML = planets[8].desc;
            planetScientificName.innerHTML = planets[8].latinName;
            planetbody.style.width =  "275px";
            planetbody.style.height = "275px";
            planetbody.style.backgroundColor = "purple";
            circumference.innerHTML = planets[8].circumference;
            distance.innerHTML = planets[8].distance;
            maxTemp.innerHTML = planets[8].temp.day;
            minTemp.innerHTML = planets[8].temp.night;
            moons.innerHTML = planets[8].moons.length;
            break;

    }
       

 };


 export default renderPlanet;