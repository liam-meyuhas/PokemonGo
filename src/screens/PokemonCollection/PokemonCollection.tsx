import React from 'react';
import {usePokemonStore} from '../../story/usePokemonCollectoin';
import {Box, HStack} from 'native-base';
import FlipCard from './components/FlipCard/FlipCard';

const PokemonScreen = () => {
  const pokemons = usePokemonStore(state => state.pokemons);

  return (
    <Box flex={1} p={4} ml={5} bg="#F0F0F0" alignItems="center">
      <HStack flexWrap="wrap" justifyContent="flex-start" space={4}>
        {pokemons.map(pokemon => (
          <FlipCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </HStack>
    </Box>
  );
};

export default PokemonScreen;
