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