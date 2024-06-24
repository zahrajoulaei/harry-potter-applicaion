import { fetchHouses } from "./api.js";

export async function displayCharacters(characters, page = 1, perPage = 4) {
  const houses = await fetchHouses();

  const charactersContainer = document.getElementById("charactersContainer");
  const selectedChar = document.getElementById("selectedChar");
  const paginationContainer = document.getElementById("paginationContainer");

  charactersContainer.innerHTML = "";
  paginationContainer.innerHTML = "";

  if (characters.length === 0) {
    charactersContainer.innerHTML = "<p>No characters found.</p>";
    return;
  }

  const start = (page - 1) * perPage;
  const end = page * perPage;
  const paginatedCharacters = characters.slice(start, end);

  paginatedCharacters.forEach((character) => {
    const characterDiv = document.createElement("div");
    characterDiv.classList.add("character", "col-lg-2");

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

      const interpretedBy = document.createElement("h4");
      interpretedBy.textContent = `Name of the actor/actress: ${character.interpretedBy}`;
      characterBoard.appendChild(interpretedBy);

      const birthDate = document.createElement("h4");
      birthDate.textContent = `Birth Date: ${character.birthdate}`;
      characterBoard.appendChild(birthDate);

      const houseElement = document.createElement("h4");
      const house = houses.find((h) => h.house === character.hogwartsHouse);

      houseElement.textContent = house
        ? `Hogwarts House: ${house.house} (${house.emoji})`
        : `Hogwarts House: Unknown`;
      characterBoard.appendChild(houseElement);
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
    };

    characterDiv.addEventListener("click", clickHandler);
    charactersContainer.appendChild(characterDiv);
  });

  const totalPages = Math.ceil(characters.length / perPage);

  // Previous button
  const prevButton = document.createElement("li");
  prevButton.classList.add("page-item");
  if (page === 1) prevButton.classList.add("disabled");
  const prevLink = document.createElement("a");
  prevLink.classList.add("page-link");
  prevLink.href = "#";
  prevLink.textContent = "Previous";
  prevLink.addEventListener("click", (event) => {
    event.preventDefault();
    if (page > 1) {
      displayCharacters(characters, page - 1, perPage);
    }
  });
  prevButton.appendChild(prevLink);
  paginationContainer.appendChild(prevButton);

  // Page items
  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement("li");
    pageItem.classList.add("page-item");
    if (i === page) pageItem.classList.add("active");
    const pageLink = document.createElement("a");
    pageLink.classList.add("page-link");
    pageLink.href = "#";
    pageLink.textContent = i;
    pageLink.addEventListener("click", (event) => {
      event.preventDefault();
      displayCharacters(characters, i, perPage);
    });
    pageItem.appendChild(pageLink);
    paginationContainer.appendChild(pageItem);
  }

  // Next button
  const nextButton = document.createElement("li");
  nextButton.classList.add("page-item");
  if (page === totalPages) nextButton.classList.add("disabled");
  const nextLink = document.createElement("a");
  nextLink.classList.add("page-link");
  nextLink.href = "#";
  nextLink.textContent = "Next";
  nextLink.addEventListener("click", (event) => {
    event.preventDefault();
    if (page < totalPages) {
      displayCharacters(characters, page + 1, perPage);
    }
  });
  nextButton.appendChild(nextLink);
  paginationContainer.appendChild(nextButton);
}
