export async function fetchCharacters(query = '') {
    try {
        const url = query ? `https://potterapi-fedeperin.vercel.app/en/characters?search=${query}` : 'https://potterapi-fedeperin.vercel.app/en/characters';
        const response = await fetch(url);
        return await response.json()
       
    } catch (error) {
        console.error('Error fetching characters:', error);
        return[];
    }
}

export async function fetchSpells() {
    try{ 
        const res = await fetch('https://potterapi-fedeperin.vercel.app/en/spells')
        const spells = await res.json()
        console.log("spells are: ",spells)
        return spells
    }
    catch (error){
        console.error('Error fetching seplls:', error);
        return[];
    }
   
}