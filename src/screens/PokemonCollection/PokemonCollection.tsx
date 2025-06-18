import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

const PokemonList = () => {
  const pokemonList = useSelector(
    (state: RootState) => state.pokemonsCollection.pokemonList,
  );

  return (
    <View>
      {pokemonList.map((pokemon, index) => (
        <View key={index} style={{marginBottom: 10}}>
          <Text>
            {pokemon.name} - {pokemon.caughtNumber} פעמים
          </Text>

          <Image
            source={{uri: pokemon.image}}
            style={{width: 50, height: 50, borderRadius: 5}}
          />

          <Text>
            {pokemon.isFavorite ? '⭐' : ''} {pokemon.nickName}{' '}
            {new Date(pokemon.creationDate).toLocaleDateString()}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default PokemonList;
