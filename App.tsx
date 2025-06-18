import React from 'react';
import Header from './src/components/Header/Header';
import Navigation from './src/components/Navigation/Navigation';
import {NativeBaseProvider, Box, extendTheme} from 'native-base';
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
      <NativeBaseProvider theme={customTheme}>
        <Box flex={1}>
          <Header title={'liam meyuhas'} />
          <Navigation />
        </Box>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
