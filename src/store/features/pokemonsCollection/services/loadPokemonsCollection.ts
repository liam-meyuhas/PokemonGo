import {createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {POKEMONS_COLLECTION_STORAGE_KEY} from './constants/pokemosCollectionConstants';

export const loadPokemonsCollection = createAsyncThunk(
  'pokemonsCollection/loadPokemonsCollection',
  async () => {
    const pokemonsList = await AsyncStorage.getItem(
      POKEMONS_COLLECTION_STORAGE_KEY,
    );
    if (!pokemonsList) {
      throw new Error('Failed to fetch pokemons from storage');
    }
    return JSON.parse(pokemonsList);
  },
);
