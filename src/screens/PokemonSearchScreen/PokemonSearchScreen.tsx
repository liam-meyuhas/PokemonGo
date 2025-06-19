import React, {useState} from 'react';
import {Box, Text, Spinner} from 'native-base';
import useSearchStyle from './hooks/useSearchStyle';
import SearchBar from './components/SearchBar/SearchBar';
import PokemonCard from './components/PokemonCard/PokemonCard';
import usePokemonSearch from './hooks/usePokemonSearch';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const PokemonSearchScreen = () => {
  const {bgColor} = useSearchStyle();

  const [searchTerm, setSearchTerm] = useState('');

  const {loading, error, pokemon, fetchPokemon} = usePokemonSearch();

  // const clearAllStorage = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //     console.log('📦 AsyncStorage נוקה בהצלחה');
  //   } catch (e) {
  //     console.error('❌ שגיאה במחיקת AsyncStorage:', e);
  //   }
  // };

  // clearAllStorage();
  return (
    <Box flex={1} bg={bgColor} px={3} pt={2}>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        fetchPokemon={fetchPokemon}
      />
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
          name={pokemon.name}
          pokemonImage={pokemon.pokemonImage}
          types={pokemon.types}
          abilities={pokemon.abilities}
        />
      )}
    </Box>
  );
};

export default PokemonSearchScreen;
