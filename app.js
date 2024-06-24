import { fetchCharacters, fetchSpells } from "./src/api.js";
import { displayCharacters } from "./src/characters.js";
import { displaySpells } from "./src/spells.js";

document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search");
  const searchInput = document.getElementById("searchInput");
  const searchButtonSpells = document.getElementById("searchSpell");
  const searchInputSpells = document.getElementById("searchInputSpells");

  //search the characters by pressing the button
  searchButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
      const characters = await fetchCharacters(query);
      displayCharacters(characters);
    }
  });

  //search the characters by pressing Enter key
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

  //search the spells by pressing the button
  searchButtonSpells.addEventListener("click", async (event) => {
    event.preventDefault();
    const query = searchInputSpells.value.trim();
    if (query) {
      const spells = await fetchSpells(query);
      displaySpells(spells);
    }
  });
  //search the spells by pressing the button
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

  //load all the data fetched in the initial load of the page
  async function initialLoad() {
    const characters = await fetchCharacters();
    const spells = await fetchSpells();
    displayCharacters(characters);
    displaySpells(spells);
  }

  initialLoad();
});
