import {Pokemon} from '../../../store/types/pokemon';

export const filteredArrayBySearchTerm = (
  pokemons: Pokemon[],
  searchTerm: string,
) =>
  pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
