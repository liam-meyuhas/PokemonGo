import React from 'react';
import Header from './src/components/Header/Header';
import Navigation from './src/components/Navigation/Navigation';
import {NativeBaseProvider, Box, extendTheme} from 'native-base';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

const customTheme = extendTheme({config});

const App = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <Box flex={1}>
        <Header title={'liam meyuhas'} />
        <Navigation />
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
