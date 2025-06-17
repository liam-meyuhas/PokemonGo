import {Pokemon} from '../../../types/pokemon';

export const filteredArrayBySearchTerm = (
  pokemons: Pokemon[],
  searchTerm: string,
) =>
  pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
