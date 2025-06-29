import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PokemonState} from './types/pokemonsCollection.type';
import {addPokemonToCollection} from './services/addPokemonToCollection ';

export const usePokemonStore = create<PokemonState>()(
  persist(
    (set, get) => ({
      pokemons: [],

      addPokemon: (name, image) => {
        const currentPokemonsCollection = get().pokemons;
        const updatedCollection = addPokemonToCollection(
          currentPokemonsCollection,
          name,
          image,
        );
        set({pokemons: updatedCollection});
      },

      isFavorite: name => {
        const updatedCollection = get().pokemons.map(pokemon =>
          pokemon.name === name
            ? {...pokemon, isFavorite: !pokemon.isFavorite}
            : pokemon,
        );
        set({pokemons: updatedCollection});
      },

      changeNickName: (newName,name) => {
        const updatedCollection = get().pokemons.map(pokemon => 
          pokemon.name === name ? {...pokemon , nickName: newName} : pokemon
        );
        set({pokemons: updatedCollection});
      }
    }),
    {
      name: 'pokemon-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
