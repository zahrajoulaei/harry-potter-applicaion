import { fetchCharacters, fetchSpells , fetchHouses} from "./src/api.js";
import { displayCharacters } from "./src/characters.js";
import { displaySpells } from "./src/spells.js";
// import { displayHouses } from "./src/houses.js";


document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search");
  const searchInput = document.getElementById("searchInput");
  const searchButtonSpells = document.getElementById("searchSpell");
  const searchInputSpells = document.getElementById("searchInputSpells");

  searchButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
      const characters = await fetchCharacters(query);
      displayCharacters(characters);
    }
  });
  searchInput.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        const characters = await fetchCharacters(query);
        displayCharacters(characters);
      }
    }
  });

  searchButtonSpells.addEventListener("click", async (event) => {
    event.preventDefault();
    const query = searchInputSpells.value.trim();
    if (query) {
      const spells = await fetchSpells(query);
      displaySpells(spells);
    }
  });

  searchInputSpells.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const query = searchInputSpells.value.trim();
      if (query) {
        const spells = await fetchSpells(query);
        displaySpells(spells);
      }
    }
  });




  async function initialLoad() {
    const characters = await fetchCharacters();
    const spells = await fetchSpells();
    const houses = await fetchHouses()
    displayCharacters(characters);
    displaySpells(spells);
    // displayHouses(houses)
  }

  initialLoad();
});
