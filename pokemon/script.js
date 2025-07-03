const imgDiv = document.getElementById("img-container");
let pokemonList = [];
let randomIndex = Math.floor(Math.random() * 1302 + 1);
let pokemonToGuess = "";
const asnwerInput = document.getElementById("answer-field");
const submitBtn = document.getElementById("submitButton");

async function randomPokemon() {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    pokemonList = data.results;
    pokemonToGuess = pokemonList[randomIndex].name;
    console.log(pokemonToGuess);
    return pokemonList[randomIndex].url;
  } catch (error) {
    console.error(error);
  }
}

async function displaySprite() {
  try {
    const pokemonToDisplay = await randomPokemon();
    const response = await fetch(pokemonToDisplay);
    const data = await response.json();
    const sprites = data.sprites.front_default;
    imgDiv.style.backgroundImage = `url(${sprites})`;
    return data.sprites.front_default;
  } catch (error) {
    console.error(error);
  }
}

displaySprite();

function checkAnswer() {
  if (pokemonToGuess.toLowerCase() === asnwerInput.value.toLowerCase()) {
    asnwerInput.value = "";
    console.log("correct");
    randomIndex = Math.floor(Math.random() * 1302 + 1);
    pokemonToGuess = pokemonList[randomIndex].name;
    displaySprite();
  } else {
    console.log("incorrect");
  }
}

submitBtn.addEventListener("click", checkAnswer);
asnwerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkAnswer();
  }
});
