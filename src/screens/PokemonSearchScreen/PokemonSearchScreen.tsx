import React, {useState} from 'react';
import {Box, Text, Spinner} from 'native-base';
import SearchBar from './components/SearchBar/SearchBar';
import PokemonCard from './components/PokemonCard/PokemonCard';
import usePokemonSearch from './hooks/usePokemonSearch';
import {ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import {SEARCHSCREEN} from './constants/pokemonSearchScreen.constants';

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
      colors={SEARCHSCREEN}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}>
      <LinearGradient
        colors={[
          'rgba(255,255,255,1)',
          'rgba(255,255,255,0.8)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0)',
        ]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.3}}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '30%',
          zIndex: 10,
        }}
        pointerEvents="none"
      />
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
