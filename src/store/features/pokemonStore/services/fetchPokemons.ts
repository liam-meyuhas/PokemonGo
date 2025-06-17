import {createAsyncThunk} from '@reduxjs/toolkit';
import {Pokemon} from '../../../../types/pokemon';

export const fetchPokemons = createAsyncThunk<Pokemon[]>(
  'pokemonStore/fetchPokemons',
  async () => {
    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=20',
      );
      const pokemons = await response.json();

      const pokemonsList = await Promise.allSettled(
        pokemons.results.map(async (pokemon: any) => {
          const response = await fetch(pokemon.url);
          const pokemonDetails = await response.json();
          return {
            name: pokemonDetails.name,
            PokemonImage: pokemonDetails.sprites.front_shiny,
            types: pokemonDetails.types.map((t: any) => t.type.name),
            abilities: pokemonDetails.abilities.map((a: any) => a.ability.name),
          };
        }),
      );

      const successfulPokemons = pokemonsList
        .filter(
          (result): result is PromiseFulfilledResult<Pokemon> =>
            result.status === 'fulfilled',
        )
        .map(result => result.value);

      return successfulPokemons;
    } catch (error) {
      throw new Error('Error fetching pokemons');
    }
  },
);
