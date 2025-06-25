const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const imgDiv = document.getElementById("img-container");

async function getPokemon() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    return data.results[0].url;
  } catch (error) {
    console.error(error);
  }
}

getPokemon();

async function getSprite() {
  try {
    const pokemonUrl = await getPokemon();
    const response = await fetch(pokemonUrl);
    const data = await response.json();

    console.log(data.sprites.front_default);
    imgDiv.style.backgroundImage = `url(${data.sprites.front_default})`;
  } catch (error) {
    console.error(error);
  }
}

getSprite();
