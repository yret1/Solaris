import fetcher from "./fetch";
import { planets } from "./fetch";
import closePage from "./Closepage";
import renderPlanet from "./render";
import searchHandler from "./search";

//fetch our data
fetcher();



// Add planet event listeners and render planet page on click

const planetButtons = document.querySelectorAll(".planet");

planetButtons.forEach((button) => {
  button.addEventListener("click", (e) => {

    renderPlanet(e.target.id);
  });
});

// Close Rendered Page
const closeBtn = document.querySelector("#closebtn");


closeBtn.addEventListener("click", () => {
  closePage();
});


//Search for planets
const search = document.querySelector(".searchfield");


search.addEventListener("keyup", searchHandler);



