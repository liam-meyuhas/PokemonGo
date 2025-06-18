import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Pokemon = {
  name: string;
  image: string;
  nickName: string;
  caughtNumber: number;
  isFavorite: boolean;
  creationDate: string;
};

type PokemonsCollection = {
  pokemonList: Pokemon[];
};

const initialState: PokemonsCollection = {
  pokemonList: [],
};

export const pokemonsCollectionSlice = createSlice({
  name: 'pokemonsCollection',
  initialState,
  reducers: {
    addPokemon: (
      state,
      action: PayloadAction<{name: string; image: string}>,
    ) => {
      const {name, image} = action.payload;

      const index = state.pokemonList.findIndex(p => p.name === name);

      if (index !== -1) {
        state.pokemonList[index].caughtNumber += 1;
      } else {
        state.pokemonList.push({
          name,
          image,
          nickName: name,
          caughtNumber: 1,
          isFavorite: false,
          creationDate: new Date().toISOString(),
        });
      }
    },
  },
});

export const {addPokemon} = pokemonsCollectionSlice.actions;
export default pokemonsCollectionSlice.reducer;
