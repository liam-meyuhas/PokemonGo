import React from 'react';
import {usePokemonStore} from '../../story/usePokemonCollectoin';
import {Box, HStack, ScrollView} from 'native-base';
import FlipCard from './components/FlipCard/FlipCard';
import {ImageBackground} from 'react-native';

const PokemonScreen = () => {
  const pokemons = usePokemonStore(state => state.pokemons);

  return (
    <ScrollView>
      <Box flex={1} alignItems="center">
        <ImageBackground
          source={require('../../assets/images/PokemonCollectionBackground.png')}
          style={{height: '100%', width: '100%'}}>
          <HStack
            ml={5}
            p={4}
            flexWrap="wrap"
            justifyContent="flex-start"
            space={4}>
            {pokemons.map(pokemon => (
              <FlipCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </HStack>
        </ImageBackground>
      </Box>
    </ScrollView>
  );
};

export default PokemonScreen;
