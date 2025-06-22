import {PokemonCollection} from '../../types/pokemon';

export const addPokemonToCollection = (
  pokemons: PokemonCollection[],
  name: string,
  image: string
): PokemonCollection[] => {
  const pokemonIndex = pokemons.findIndex(pokemon => pokemon.name === name);

  if (pokemonIndex === -1) {
    return [
      ...pokemons,
      {
        name,
        isCaught: 1,
        isFavorite: false,
        date: new Date(),
        nickName: name.slice(0, 5),
        image,
      },
    ];
  } else {
    const updatedPokemons = [...pokemons];
    updatedPokemons[pokemonIndex] = {
      ...updatedPokemons[pokemonIndex],
      isCaught: updatedPokemons[pokemonIndex].isCaught + 1,
    };
    return updatedPokemons;
  }
};
