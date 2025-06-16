import {Pokemon} from '../types/pokemon';

export const fetchPokemons = async (): Promise<Pokemon[]> => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
  const data = await response.json();

  const detailedData = await Promise.all(
    data.results.map(async (pokemon: any) => {
      const response = await fetch(pokemon.url);
      const detail = await response.json();

      return {
        name: detail.name,
        image: detail.sprites.front_shiny,
        types: detail.types.map((t: any) => t.type.name),
        abilities: detail.abilities.map((a: any) => a.ability.name),
      };
    }),
  );

  return detailedData;
};
