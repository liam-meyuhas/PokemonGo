import {useContext} from 'react';
import {PokemonContext} from '../PokemonContext';

const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemon must be used within a PokemonProvider');
  }
  return context;
};

export default usePokemon;
