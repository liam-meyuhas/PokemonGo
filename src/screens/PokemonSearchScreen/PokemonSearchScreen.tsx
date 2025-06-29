import React, {useState} from 'react';
import {Box, Text, Spinner} from 'native-base';
import SearchBar from './components/SearchBar/SearchBar';
import PokemonCard from './components/PokemonCard/PokemonCard';
import usePokemonSearch from './hooks/usePokemonSearch';
import {ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const PokemonSearchScreen = () => {
  // const clearPokemonStorage = async () => {
  //   try {
  //     await AsyncStorage.removeItem('pokemon-storage');
  //     console.log('Pokemon storage cleared!');
  //   } catch (error) {
  //     console.error('Failed to clear pokemon storage:', error);
  //   }
  // };
  // clearPokemonStorage();

  const [searchTerm, setSearchTerm] = useState('');

  const {loading, error, pokemon, fetchPokemon} = usePokemonSearch();
  return (
    <LinearGradient
      colors={[
        '#F33F40',
        '#F7E109',
        '#E12D48',
        '#F4721C',
        '#CD2559',
        '#F7E306',
        '#FEA914',
      ]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}>
      <Box flex={1} px={3} pt={2}>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          fetchPokemon={fetchPokemon}
        />
        {!pokemon && (
          <ImageBackground
            source={require('../../assets/images/PokemonDefaultImage.png')}
            style={{
              height: '85%',
              width: '100%',
              overflow: 'hidden',
              marginTop: 10,
            }}>
            <Text
              style={{
                position: 'absolute',
                fontSize: 15,
                color: 'white',
                top: '10%',
                left: '10%',
              }}>
              Select your pokemon
            </Text>
          </ImageBackground>
        )}
        {loading && (
          <Box alignItems="center" justifyContent="center" mt={4}>
            <Spinner size="lg" color="blue.500" />
          </Box>
        )}
        {error && (
          <Text color="red.500" textAlign="center">
            {error}
          </Text>
        )}
        {pokemon && (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            pokemonImage={pokemon.pokemonImage}
            types={pokemon.types}
            abilities={pokemon.abilities}
            height={pokemon.height}
            weight={pokemon.weight}
          />
        )}
      </Box>
    </LinearGradient>
  );
};

export default PokemonSearchScreen;
