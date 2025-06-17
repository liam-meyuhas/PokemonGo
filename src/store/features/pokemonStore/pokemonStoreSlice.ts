import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {pokemonStore} from './types/pokemonStoreTypes';
import {fetchPokemons} from './services/fetchPokemons';

const initialState: pokemonStore = {
  pokemons: [],
  loading: false,
  error: null,
};

export const pokemonStoreSlice = createSlice({
  name: 'pokemonStore',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPokemons.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemons = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Unknown Error';
      });
  },
});

export default pokemonStoreSlice.reducer;
