import { fetchCharacters, fetchSpells } from "./src/api.js";
import { displayCharacters } from "./src/characters.js";

document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search");
  const searchInput = document.getElementById("searchInput");
  const spellContainer = document.getElementById("spellContainer");

  searchButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    console.log("query is:", query);
    if (query) {
      const characters = await fetchCharacters(query);
      displayCharacters(characters);
      console.log("characters:", characters);
    }
   
  });
  searchInput.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const query = searchInput.value.trim();
      console.log("query is:", query);
      if (query) {
        const characters = await fetchCharacters(query);
        displayCharacters(characters);
        console.log(characters);
      }
    }
  });

  async function initialLoad() {
    const characters = await fetchCharacters();
    const spells = await fetchSpells();
    console.log(spells);
    displayCharacters(characters);
    displaySpells(spells);
  }

  function displaySpells(spells) {
    spellContainer.innerHTML = "";
    if (spells.length === 0) {
      spellContainer.innerHTML = "<p>No spells found.</p>";
      return;
    }

    const spellTable = document.createElement("table");
    spellTable.classList.add("table", "table-striped", "table-hover");

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const headers = ["Spell", "Use"];
    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.scope = "col";
      th.textContent = headerText;
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    spellTable.appendChild(thead);

    const tbody = document.createElement("tbody");

    spells.forEach((spell) => {
      const spellRow = document.createElement("tr");

      const spellName = document.createElement("td");
      spellName.textContent = spell.spell;
      spellRow.appendChild(spellName);

      const spellUse = document.createElement("td");
      spellUse.textContent = spell.use;
      spellRow.appendChild(spellUse);

      tbody.appendChild(spellRow);
    });
    spellTable.appendChild(tbody);
    spellContainer.appendChild(spellTable);
  }

  initialLoad();
});
