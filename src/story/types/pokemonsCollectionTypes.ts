import {PokemonCollection} from '../../types/pokemon';

export type PokemonState = {
  pokemons: PokemonCollection[];
  isHydrated: boolean;
  addPokemon: (name: string) => void;
};
