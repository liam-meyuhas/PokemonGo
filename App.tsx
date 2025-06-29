import React from 'react';
import Header from './src/components/Header/Header';
import Navigation from './src/components/Navigation/Navigation';
import {NativeBaseProvider, Box, extendTheme} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <Box flex={1}>
        <Navigation />
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
