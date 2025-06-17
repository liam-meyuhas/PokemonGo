import {configureStore} from '@reduxjs/toolkit';
import pokemonStoreReducer from './features/pokemonStore/pokemonStoreSlice';
import pokemonsCollectionReducer from './features/pokemonsCollection/pokemonsCollectionSlice';

export const store = configureStore({
  reducer: {
    pokemonsStore: pokemonStoreReducer,
    pokemonsCollection: pokemonsCollectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
