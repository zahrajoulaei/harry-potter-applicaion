import { fetchCharacters , fetchSpells } from "./src/api.js";

document.addEventListener("DOMContentLoaded", () => {
  const charactersContainer = document.getElementById("charactersContainer");
  const searchButton = document.getElementById("search");
  const searchInput = document.getElementById("searchInput");
  const selectedChar = document.getElementById("selectedChar");
  const spellContainer = document.getElementById("spellContainer")


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
    const spells = await fetchSpells()
    console.log(spells)
    displayCharacters(characters);
    displaySpells(spells)
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
        selectedChar.innerHTML = "";
        const characterBoard = document.createElement("div");
        characterBoard.classList.add("characterBoard");

        const name = document.createElement("h4");
        name.textContent = `${character.fullName}`;
        characterBoard.appendChild(name);

        const  interpretedBy = document.createElement("h4");
        interpretedBy.textContent = `Name of the actor/actress: ${character.interpretedBy}`;
        characterBoard.appendChild( interpretedBy);


        const birthDate = document.createElement("h4");
        birthDate.textContent = `Birth Date: ${character.birthdate}`;
        characterBoard.appendChild(birthDate);

        const houseElement = document.createElement("h4");
        houseElement.textContent = `Hogwarts House: ${character.hogwartsHouse}`;
        characterBoard.appendChild(houseElement);

        if (character.children && character.children.length > 0) {
          const childrenElement = document.createElement("h4");
          childrenElement.textContent = `Children: ${character.children}`;
          characterBoard.appendChild(childrenElement);
        }
        if (character.image) {
            const charImage = document.createElement("img");
            charImage.src = character.image;
            charImage.alt = `${character.name} image`;
            characterBoard.appendChild(charImage);
          }
        

        selectedChar.appendChild(characterBoard);
        // characterDiv.removeEventListener("click", clickHandler);
      };

      characterDiv.addEventListener("click", clickHandler);

      charactersContainer.appendChild(characterDiv);
    });
  }

  function displaySpells(spells) {
    spellContainer.innerHTML =""
    if (spells.length === 0) {
        spellContainer.innerHTML = "<p>No spells found.</p>";
        return;
      }

      const spellTable = document.createElement("table");
      spellTable.classList.add('table', 'table-striped', 'table-hover');

      const thead = document.createElement("thead");
      const headerRow = document.createElement("tr");

      const headers = ["Spell", "Use"];
      headers.forEach(headerText => {
        const th = document.createElement("th");
        th.scope = "col";
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    spellTable.appendChild(thead);

    const tbody = document.createElement("tbody");




      spells.forEach((spell)=>{



        const spellRow = document.createElement("tr");

        const spellName = document.createElement("td");
        spellName.textContent = spell.spell;
        spellRow.appendChild(spellName);

    

        const spellUse = document.createElement("td");
        spellUse.textContent = spell.use;
        spellRow.appendChild(spellUse);

        tbody.appendChild(spellRow);




      })
      spellTable.appendChild(tbody);
      spellContainer.appendChild(spellTable);
  
    
  }

  initialLoad();
});
