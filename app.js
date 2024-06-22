document.addEventListener('DOMContentLoaded', () => {
    const charactersContainer = document.getElementById('charactersContainer');

    async function fetchCharacters() {
        try {
            const response = await fetch('https://potterapi-fedeperin.vercel.app/en/characters');
            const characters = await response.json();
            displayCharacters(characters);
            console.log(characters)
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    }

    function displayCharacters(characters) {
        charactersContainer.innerHTML = '';
        characters.forEach(character => {
            const characterDiv = document.createElement('div');
            characterDiv.classList.add('character', 'col-md-3');

            const characterName = document.createElement('h2');
            characterName.textContent = character.nickname;
            characterDiv.appendChild(characterName);

            const characterFullname = document.createElement('h6');
            characterFullname.textContent = character.fullName;
            characterDiv.appendChild(characterFullname)

            if (character.house) {
                const characterHouse = document.createElement('p');
                characterHouse.textContent = `House: ${character.house}`;
                characterDiv.appendChild(characterHouse);
            }

            if (character.image) {
                const characterImage = document.createElement('img');
                characterImage.src = character.image;
                characterImage.alt = `${character.name} image`;
                characterDiv.appendChild(characterImage);
            }

            charactersContainer.appendChild(characterDiv);
        });
    }

    fetchCharacters();
});