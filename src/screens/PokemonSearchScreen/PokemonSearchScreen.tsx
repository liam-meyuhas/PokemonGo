import React, {useState} from 'react';
import {Box, Text, Spinner} from 'native-base';
import SearchBar from './components/SearchBar/SearchBar';
import PokemonCard from './components/PokemonCard/PokemonCard';
import usePokemonSearch from './hooks/usePokemonSearch';
import {ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  FADEBACKGROUND,
  SEARCHSCREEN,
} from './constants/pokemonSearchScreen.constants';
import {style} from './styles/pokemonSearchScreen.style';

const PokemonSearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const {loading, error, pokemon, fetchPokemon} = usePokemonSearch();
  return (
    <LinearGradient
      colors={SEARCHSCREEN}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}>
      <LinearGradient
        colors={FADEBACKGROUND}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.3}}
        style={style.fadeBackground}
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
            style={style.image}>
            <Text style={style.text}>Select your pokemon</Text>
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
