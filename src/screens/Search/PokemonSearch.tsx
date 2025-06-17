import React, {useEffect, useState} from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import {Box, Text, ScrollView, Spinner} from 'native-base';
import {filteredArrayBySearchTerm} from './utils/filterdPokemons';
import useSearchStyle from './hooks/useSearchStyle';
import SearchBar from './SearchBar/SearchBar';
import {useSelector, useDispatch} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store';
import {fetchPokemons} from '../../store/features/pokemonStore/services/fetchPokemons';

const PokemonSearch = () => {
  const {pokemons, loading, error} = useSelector(
    (state: RootState) => state.pokemonsStore,
  );
  const dispatch = useDispatch<AppDispatch>();

  const [searchTerm, setSearchTerm] = useState('');

  const {bgColor} = useSearchStyle();

  const filteredPokemons = filteredArrayBySearchTerm(pokemons, searchTerm);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  if (loading) {
    return (
      <Box flex={1} bg={bgColor} justifyContent="center" alignItems="center">
        <Spinner size="lg" color="blue.500" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box flex={1} bg={bgColor} justifyContent="center" alignItems="center">
        <Text color="red.500">Error: {error}</Text>
      </Box>
    );
  }

  return (
    <Box flex={1} bg={bgColor}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ScrollView px={3} pt={2} bg={bgColor}>
        {filteredPokemons.map(pokemon => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            PokemonImage={pokemon.PokemonImage}
            types={pokemon.types}
            abilities={pokemon.abilities}
          />
        ))}
      </ScrollView>
    </Box>
  );
};

export default PokemonSearch;
