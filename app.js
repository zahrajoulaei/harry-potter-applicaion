import { fetchCharacters } from "./src/api.js";

document.addEventListener("DOMContentLoaded", () => {
  const charactersContainer = document.getElementById("charactersContainer");
  const searchButton = document.getElementById("search");
  const searchInput = document.getElementById("searchInput");
  const selectedChar = document.getElementById("selectedChar");

  searchButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    console.log("query is:", query);
    if (query) {
      const characters = await fetchCharacters(query);
      displayCharacters(characters);
      console.log("characters:", characters);
    }
    console.log("characters:", characters);
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

      if (character.image) {
        const characterImage = document.createElement("img");
        characterImage.src = character.image;
        characterImage.alt = `${character.name} image`;
        characterDiv.appendChild(characterImage);
      }

      const clickHandler = () => {
        const characterBoard = document.createElement("div");
        characterBoard.classList.add("characterBoard");

        const houseElement = document.createElement("h4");
        houseElement.textContent = `Hogwarts House: ${character.hogwartsHouse}`;
        characterBoard.appendChild(houseElement);

        if (character.children && character.children.length > 0) {
          const childrenElement = document.createElement("h4");
          childrenElement.textContent = `Children: ${character.children}`;
          characterBoard.appendChild(childrenElement);
        }


        selectedChar.appendChild(characterBoard);
        characterDiv.removeEventListener("click", clickHandler);
      };

      characterDiv.addEventListener("click", clickHandler);

      charactersContainer.appendChild(characterDiv);
    });
  }

  initialLoad();
});
