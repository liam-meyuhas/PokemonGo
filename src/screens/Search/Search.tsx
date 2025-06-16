import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import {usePokemonStore} from '../../store/usePokemons';
import {styles} from './styles/search';
import {Box, Text, ScrollView, Spinner, Image} from 'native-base';
import {filteredArrayBySearchTerm} from './utils/filterdPokemons';

const Search = () => {
  const {pokemons, loading, error, fetchAll} = usePokemonStore();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAll();
  }, []);

  const filteredPokemons = filteredArrayBySearchTerm(pokemons, searchTerm);

  if (loading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Spinner size="lg" color="blue.500" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text color="red.500">Error: {error}</Text>
      </Box>
    );
  }

  return (
    <>
      <Box style={styles.container}>
        <TextInput
          placeholder="חפש פוקימון"
          placeholderTextColor="#555"
          style={styles.input}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <Image
          source={require('../../assets/images/SearchBall.png')}
          alt="search icon"
          size={50}
          ml={2}
        />
      </Box>

      <ScrollView px={3} pt={2}>
        {filteredPokemons.map(pokemon => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
            abilities={pokemon.abilities}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default Search;
