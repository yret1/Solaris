import fetcher from "./fetch";
import { planets } from "./fetch";

import closePage from "./Closepage";

import renderPlanet from "./render";


fetcher();



// Add planet event listeners and render planet page

const planetButtons = document.querySelectorAll(".planet");

planetButtons.forEach((button) => {
  button.addEventListener("click", (e) => {

    renderPlanet(e.target.id);
  });
});

const closeBtn = document.querySelector("#closebtn");


closeBtn.addEventListener("click", () => {
  closePage();
});