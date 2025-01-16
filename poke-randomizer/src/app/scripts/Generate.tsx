import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();
interface Pokemon {
    id: number
    name: string;
    sprite:string;
}


async function GetRandomPokemon(): Promise<Pokemon>{
    try {
        const randomID = Math.floor(Math.random() * 1010) + 1;
        const response = await P.getPokemonByName(randomID.toString());

        const pokemon: Pokemon = {
            id: response.id,
            name: response.name,
            sprite: response.sprites.front_default ?? ''
        };
        return pokemon
    }catch(error) {
        console.error('Error fetching Pokemon', error);
        throw error;
    }
}