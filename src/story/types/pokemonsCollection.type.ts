import {PokemonCollection} from '../../types/pokemon.type';

export type PokemonState = {
  pokemons: PokemonCollection[];
  addPokemon: (name: string, image: string) => void;
  isFavorite: (name: string) => void;
};
