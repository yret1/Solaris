import fetcher from "./fetch";
import { planets } from "./fetch";

import renderPlanet from "./render";


fetcher();



// Add planet event listeners and render planet page

const planetButtons = document.querySelectorAll(".planet");

planetButtons.forEach((button) => {
  button.addEventListener("click", (e) => {

    renderPlanet(e.target.id);
  });
});