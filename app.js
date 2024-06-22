import { fetchCharacters } from "./src/api.js";

document.addEventListener("DOMContentLoaded", () => {
  const charactersContainer = document.getElementById("charactersContainer");
  const searchButton = document.getElementById("search");
  const searchInput = document.getElementById("searchInput");

  searchButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    console.log("query is:", query);
    if (query) {
      const characters = await fetchCharacters(query);
      displayCharacters(characters);
      console.log(characters);
    }
  });
  searchInput.addEventListener('keypress', async (event) => {
    if(event.key === 'Enter'){
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
    displayCharacters(characters);
  }

  function displayCharacters(characters) {
    charactersContainer.innerHTML = "";
    if (characters.length === 0) {
      charactersContainer.innerHTML = "<p>No characters found.</p>";
      return;
    }
    characters.forEach((character) => {
      const characterDiv = document.createElement("div");
      characterDiv.classList.add("character", "col-lg-2", "card");

      const characterName = document.createElement("h2");
      characterName.textContent = character.nickname || character.name;
      characterDiv.appendChild(characterName);

      const characterFullname = document.createElement("h6");
      characterFullname.textContent = character.fullName;
      characterDiv.appendChild(characterFullname);

      if (character.house) {
        const characterHouse = document.createElement("p");
        characterHouse.textContent = `House: ${character.house}`;
        characterDiv.appendChild(characterHouse);
      }

      if (character.image) {
        const characterImage = document.createElement("img");
        characterImage.src = character.image;
        characterImage.alt = `${character.name} image`;
        characterDiv.appendChild(characterImage);
      }

      charactersContainer.appendChild(characterDiv);
    });
  }

  initialLoad();
});
