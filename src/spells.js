export function displaySpells(spells, page = 1, perPage = 10) {
  const spellContainer = document.getElementById("spellContainer");
  const paginationContainerSpell = document.getElementById(
    "paginationContainerSpell"
  );

  spellContainer.innerHTML = "";
  paginationContainerSpell.innerHTML = "";
  if (spells.length === 0) {
    spellContainer.innerHTML = "<p>No spells found.</p>";
    return;
  }

  const start = (page - 1) * perPage;
  const end = page * perPage;
  const paginatedSpells = spells.slice(start, end);

  const spellTable = document.createElement("table");
  spellTable.classList.add(
    "table",
    "table-striped",
    "table-hover",
    "text-center"
  );

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

  paginatedSpells.forEach((spell) => {
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


  const totalPages = Math.ceil(spells.length / perPage);

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
      displaySpells(spells, page - 1, perPage);
    }
  });
  prevButton.appendChild(prevLink);
  paginationContainerSpell.appendChild(prevButton);

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
      displaySpells(spells, i, perPage);
    });
    pageItem.appendChild(pageLink);
    paginationContainerSpell.appendChild(pageItem);
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
      displaySpells(spells, page + 1, perPage);
    }
  });
  nextButton.appendChild(nextLink);
  paginationContainerSpell.appendChild(nextButton);

}
