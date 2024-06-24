// export function displayHouses(houses) {
//     const housesContainer = document.getElementById("housesContainer");
  
//     housesContainer.innerHTML = "";
//     if (houses.length === 0) {
//       housesContainer.innerHTML = "<p>No houses found.</p>";
//       return;
//     }
  
//     houses.forEach((house) => {
//         const houseDiv = document.createElement("div");
//         houseDiv.classList.add("house", "col-lg-3", "card", "text-center", "p-3");
  
//         const houseName = document.createElement("h2");
//         houseName.textContent = house.house;
//         houseDiv.appendChild(houseName);
  
//         const houseEmoji = document.createElement("span");
//         houseEmoji.textContent = house.emoji;
//         houseEmoji.style.fontSize = '2rem';
//         houseDiv.appendChild(houseEmoji);
  
//         const houseFounder = document.createElement("p");
//         houseFounder.textContent = `Founder: ${house.founder}`;
//         houseDiv.appendChild(houseFounder);
  
//         const houseColors = document.createElement("p");
//         houseColors.textContent = `Colors: ${house.colors.join(', ')}`;
//         houseDiv.appendChild(houseColors);
  
//         const houseAnimal = document.createElement("p");
//         houseAnimal.textContent = `Animal: ${house.animal}`;
//         houseDiv.appendChild(houseAnimal);
  
//         housesContainer.appendChild(houseDiv);
//     });
//   }