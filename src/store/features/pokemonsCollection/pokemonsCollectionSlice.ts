import {createSlice} from '@reduxjs/toolkit';

type Pokemon = {
  name: string;
  image: string;
  nickName: string;
  caughtNumber: number;
  isFavorite: boolean;
  creationDate: Date;
};

type PokemonGet = {
  name: string;
};

type PokemonsCollection = {
  pokemonList: [];
  addPokemon: () => void;
};
const initialState = {};

export const pokemonsCollectionSlice = createSlice({
  name: 'pokemonsCollection',
  initialState: initialState,
  reducers: {
    addPokemon: () => {},
  },
  extraReducers: builder => {},
});

export default pokemonsCollectionSlice.reducer;
