export function displaySpells(spells) {
    const spellContainer = document.getElementById("spellContainer");

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