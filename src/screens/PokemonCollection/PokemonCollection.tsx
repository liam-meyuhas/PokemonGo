import React from 'react';
import {ActivityIndicator} from 'react-native';
import {usePokemonStore} from '../../story/usePokemonCollectoin';
import {Box, HStack, Text} from 'native-base';
import {styles} from './components/styles/pokemonCollectionStyles';
import FlipCard from './components/FlipCard/FlipCard';

const PokemonScreen = () => {
  const isHydrated = usePokemonStore(state => state.isHydrated);
  const pokemons = usePokemonStore(state => state.pokemons);

  if (!isHydrated) {
    return (
      <Box style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>טוען נתונים...</Text>
      </Box>
    );
  }

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
