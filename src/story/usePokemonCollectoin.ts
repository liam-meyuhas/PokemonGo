import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PokemonState} from './types/pokemonsCollectionTypes';
import {addPokemonToCollection} from './services/addPokemonToCollection ';

export const usePokemonStore = create<PokemonState>()(
  persist(
    (set, get) => ({
      pokemons: [],

      addPokemon: name => {
        const currentPokemonsCollection = get().pokemons;
        const updatedCollection = addPokemonToCollection(
          currentPokemonsCollection,
          name,
        );
        set({pokemons: updatedCollection});
      },
    }),
    {
      name: 'pokemon-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
