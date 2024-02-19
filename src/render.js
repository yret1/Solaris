

// Import the planets object from the fetch.js file
import { planets } from "./fetch";


// Grab all dom elements used for rendering the planet page
const planetPage = document.querySelector(".planetpage");
const planetName = document.querySelector(".planet__name");
const planetDescription = document.querySelector(".planet__descript");


// A function that will render the planet page depending on what planet was clicked


const renderPlanet = async (planet) => {

    console.log(planets);

    planetPage.style.display = "block";
    planetName.innerHTML = "Loading...";
    planetDescription.innerHTML = "Loading...";

    switch(planet) {
        case "sun":
            planetName.innerHTML = planets[0].name;
            planetDescription.innerHTML = planets[0].desc;
            break;
    }
       

 };


 export default renderPlanet;