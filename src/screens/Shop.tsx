import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import usePokemon from '../context/Pokemons/hooks/usePokemon';

const MainScreen = () => {
  const {pokemonList} = usePokemon();
  return (
    <View style={{padding: 20}}>
      <FlatList
        data={pokemonList}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <Text>
            {item.name} - {item.caughtNumber}
          </Text>
        )}
      />
    </View>
  );
};

export default MainScreen;
