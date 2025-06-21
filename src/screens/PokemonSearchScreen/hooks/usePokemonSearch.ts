import {useState} from 'react';
import {Pokemon} from '../../../types/pokemon';

export const usePokemonSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const fetchPokemon = async (name: string) => {
    try {
      setLoading(true);
      setError(null);
      setPokemon(null);

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`,
      );
      if (!response.ok) {
        throw new Error('פוקימון לא נמצא');
      }

      const data = await response.json();

      setPokemon({
        name: data.name,
        pokemonImage: data.sprites.front_shiny,
        types: data.types.map((t: any) => t.type.name),
        abilities: data.abilities.map((a: any) => a.ability.name),
        height: data.height, 
        weight: data.weight,
      });
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    pokemon,
    fetchPokemon,
  };
};

export default usePokemonSearch;
