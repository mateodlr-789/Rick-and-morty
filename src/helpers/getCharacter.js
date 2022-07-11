export const getCharacter = async( personaj ) => {
  
        const url = (personaj === undefined || personaj === '') 
        ? `https://rickandmortyapi.com/api/character`
        : `https://rickandmortyapi.com/api/character?name=${personaj}`
        const resp = await fetch( url );
        const { results } = await resp.json();
    
        const character = results.map( chat => ({
            id: chat.id,
            name: chat.name,
            status: chat.status,
            species: chat.species,
            gender: chat.gender,
            origin: chat.origin.name,
            location: chat.location.name,
            episode: chat.episode,                            
            created: chat.created,   
            image: chat.image
            }))    
            
            return character;
        
}