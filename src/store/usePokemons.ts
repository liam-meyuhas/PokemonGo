import {create} from 'zustand';
import {PokemonStore} from './types/pokemon';
import {fetchPokemons} from './services/pokemonService';

export const usePokemonStore = create<PokemonStore>(set => ({
  pokemons: [],
  loading: false,
  error: null,

  fetchAll: async () => {
    set({loading: true, error: null});
    try {
      const data = await fetchPokemons();
      set({pokemons: data, loading: false});
    } catch (err) {
      set({error: (err as Error).message, loading: false});
    }
  },
}));
