export function displayCharacters(characters) {
    const charactersContainer = document.getElementById("charactersContainer");
    const selectedChar = document.getElementById("selectedChar");


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