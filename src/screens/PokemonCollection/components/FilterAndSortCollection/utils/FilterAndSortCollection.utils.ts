import {PokemonCollection} from '../../../../../types/pokemon';
import {SortDirection} from '../types/FilterAndSortCollection.type';

export const filterAndSortPokemons = (
  pokemons: PokemonCollection[],
  search: string,
  showOnlyFavorites: boolean,
  sortByNickname: boolean,
  sortByDate: SortDirection,
): PokemonCollection[] => {
  let filtered = pokemons
    .filter(pokemon =>
      pokemon.nickName.toLowerCase().includes(search.toLowerCase()),
    )
    .filter(pokemon => !showOnlyFavorites || pokemon.isFavorite);

  if (sortByNickname) {
    filtered = filtered.sort((a, b) => a.nickName.localeCompare(b.nickName));
  }

  if (sortByDate === 'asc' || sortByDate === 'desc') {
    filtered = filtered.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortByDate === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }

  return filtered;
};
