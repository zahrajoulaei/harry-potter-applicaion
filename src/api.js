//fetch the characters from API
export async function fetchCharacters(query = "") {
  try {
    const url = query
      ? `https://potterapi-fedeperin.vercel.app/en/characters?search=${query}`
      : "https://potterapi-fedeperin.vercel.app/en/characters";
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
}

//fetch the spells from API

export async function fetchSpells(query = "") {
  try {
    const url = query
      ? `https://potterapi-fedeperin.vercel.app/en/spells?search=${query}`
      : "https://potterapi-fedeperin.vercel.app/en/spells";
    const res = await fetch(url);
    const spells = await res.json();
    return await spells;
  } catch (error) {
    console.error("Error fetching seplls:", error);
    return [];
  }
}

//fetch the houses from API

export async function fetchHouses() {
  try {
    const houses = await fetch(
      "https://potterapi-fedeperin.vercel.app/en/houses"
    );
    return await houses.json();
  } catch (error) {
    console.error("Error fetching houses:", error);
    return [];
  }
}
