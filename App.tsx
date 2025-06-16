import React from 'react';
import Header from './src/components/Header/Header';
import Navigation from './src/components/Navigation/Navigation';
import {NativeBaseProvider, Box} from 'native-base';
import PokemonProvider from './src/context/Pokemons/PokemonContext';

const App = () => {
  return (
    <PokemonProvider>
      <NativeBaseProvider>
        <Box flex={1}>
          <Header title={'liam meyuhas'} />
          <Navigation />
        </Box>
      </NativeBaseProvider>
    </PokemonProvider>
  );
};

export default App;
