import {Pokemon} from '../../../../types/pokemon';

export type pokemonStore = {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
};
