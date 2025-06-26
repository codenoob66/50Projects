const imgDiv = document.getElementById("img-container");
let pokemonList = [];

async function randomPokemon() {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.count);
    const choosenPokemon = data.results[randomIndex];
    pokemonList = data.results;
    console.log(choosenPokemon);
    console.log(pokemonList);
    return choosenPokemon;
  } catch (error) {
    console.error(error);
  }
}

async function getImageOfSelectedPokemon() {
  try {
    const pokemonToGet = await randomPokemon();
    const response = await fetch(pokemonToGet.url);
    const data = await response.json();
    // console.log(data.sprites.front_default);
    return data.sprites.front_default;
  } catch (error) {
    console.error(error);
  }
}

async function displayPokemon() {
  try {
    const pokemonToDisplay = await getImageOfSelectedPokemon();
    imgDiv.style.backgroundImage = `url(${pokemonToDisplay})`;
  } catch (error) {
    console.error();
  }
}

displayPokemon();
