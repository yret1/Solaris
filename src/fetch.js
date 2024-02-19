
//Fetches the API key from the API and then uses the key to fetch the data from the API and sends it to a variable for later use.


export let planets = [];

const fetcher = () => {
    let key = ""
    const keysUrl = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys';

fetch(keysUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => response.json())
.then(data => {
  key = data;
  console.log(key.key);
})

.then(() => {
    dataCatch(key.key);
})

.catch(error => {
  console.error('Error fetching API key:', error);
});
}


const dataCatch = async (key) => {
    
    const keysUrl = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies';

    let apiKey = key;

    fetch(keysUrl, {
        method: 'GET',
        headers: { "x-zocom": apiKey }
    })

    .then(response => response.json())
    .then(data => {
        planets = data.bodies;
        console.log(planets);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}



export default fetcher;