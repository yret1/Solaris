import renderPlanet from "./render";

// Function on event listener to search for planets matching the search query
 const searchHandler = (e) => {
    const searchOptions = document.getElementById('searchoptions');

    // Get the searched string and convert it to lowercase
    let searchQuery = e.target.value.toLowerCase();

    // fetch all list items
    let listItems = document.getElementById('searchoptions').getElementsByTagName('li');
    searchOptions.style.display = '';

    // loop through the list items and check if the search query is included in the list item
    for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i].textContent.toLowerCase();
        if (listItem.includes(searchQuery)) {
            listItems[i].style.display = 'flex';
        } else {
            listItems[i].style.display = 'none';
        }
    }

    // add event listener to the search options, on click, render the planet page and close the search options

    const options = document.querySelectorAll(".searchoption");

    options.forEach(option => {
        option.addEventListener("click", (e) => {
            renderPlanet(e.target.id);

        // Close the search options
        
        searchOptions.style.display = 'none';
    }
    );
});
}

export default searchHandler;