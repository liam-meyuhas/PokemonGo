import React from 'react';
import Header from './src/components/Header/Header';
import Navigation from './src/components/Navigation/Navigation';
import {NativeBaseProvider, Box, extendTheme} from 'native-base';
import PokemonProvider from './src/context/Pokemons/PokemonContext';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

const customTheme = extendTheme({config});

const App = () => {
  return (
    <Provider store={store}>
      <PokemonProvider>
        <NativeBaseProvider theme={customTheme}>
          <Box flex={1}>
            <Header title={'liam meyuhas'} />
            <Navigation />
          </Box>
        </NativeBaseProvider>
      </PokemonProvider>
    </Provider>
  );
};

export default App;
